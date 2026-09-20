import React, { useRef, useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { trackSpline } from './trackPath';
import { ProceduralF1Car } from '../CarViewer/ProceduralF1Car';

interface CircuitCarProps {
  targetProgress: number; // 0.0 to 1.0
  onArrive?: () => void;
}

// Module-level reusable vectors and materials to eliminate per-frame garbage collection
const CIRCUIT_UP_VECTOR = new THREE.Vector3(0, 1, 0);
const TEMP_POS = new THREE.Vector3();
const TEMP_TANGENT = new THREE.Vector3();
const TEMP_NEXT_TANGENT = new THREE.Vector3();
const TEMP_LOOK_TARGET = new THREE.Vector3();

const circuitCarbonBlack = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#0c0d10'),
  metalness: 0.85,
  roughness: 0.2,
});

const circuitRacingRed = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#E10600'),
  metalness: 0.5,
  roughness: 0.25,
  emissive: new THREE.Color('#550000'),
  emissiveIntensity: 0.4,
});

const circuitTireRubber = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#141416'),
  roughness: 0.85,
  metalness: 0.05,
});

function GLTFCarInner({ brakeActive }: { brakeActive: boolean }) {
  const { scene } = useGLTF('/models/nexus-f1-car.glb');

  const clonedScene = useMemo(() => {
    const cloned = scene.clone(true);
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Center model
    cloned.position.x = -center.x;
    cloned.position.y = -box.min.y;
    cloned.position.z = -center.z;

    // Scale F1 car to fit the circuit track (approx 2.4 units long)
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const targetLength = 2.4;
      const s = targetLength / maxDim;
      cloned.scale.set(s, s, s);
    }

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = false;
        const name = (mesh.name || '').toLowerCase();
        if (name.includes('tire') || name.includes('wheel') || name.includes('rubber')) {
          mesh.material = circuitTireRubber;
        } else if (name.includes('red') || name.includes('stripe') || name.includes('accent')) {
          mesh.material = circuitRacingRed;
        } else {
          mesh.material = circuitCarbonBlack;
        }
      }
    });

    return cloned;
  }, [scene]);

  return (
    <group>
      <primitive object={clonedScene} />
      {/* High-intensity rear rain safety LED */}
      <mesh position={[0, 0.28, -1.2]}>
        <boxGeometry args={[0.12, 0.06, 0.02]} />
        <meshStandardMaterial
          color="#FF0000"
          emissive="#FF0000"
          emissiveIntensity={brakeActive ? 6.0 : 2.5}
        />
      </mesh>
      {/* Dynamic brake glow point light */}
      {brakeActive && (
        <pointLight position={[0, 0.3, -1.3]} color="#FF1100" intensity={3.5} distance={3} />
      )}
    </group>
  );
}

export function CircuitCar({ targetProgress, onArrive }: CircuitCarProps) {
  const carGroupRef = useRef<THREE.Group>(null);
  const progressRef = useRef({ value: targetProgress });
  const prevProgressRef = useRef(targetProgress);
  const [isBraking, setIsBraking] = useState(false);
  const isBrakingRef = useRef(false);
  const [loadError, setLoadError] = useState(false);

  // Animate progress smoothly along the track spline
  useEffect(() => {
    let current = progressRef.current.value % 1.0;
    if (current < 0) current += 1.0;

    let target = targetProgress % 1.0;
    if (target < 0) target += 1.0;

    // Calculate forward lap distance (F1 cars drive forward along the circuit)
    let forwardDist = target - current;
    if (forwardDist < 0) {
      forwardDist += 1.0;
    }

    // If change is tiny, don't trigger full animation
    if (forwardDist < 0.002) return;

    // Duration scales with distance traveled (1.5s to 3.2s)
    const duration = Math.max(1.4, Math.min(3.4, forwardDist * 3.8 + 1.2));

    const startVal = current;
    const endVal = current + forwardDist;

    // Set braking effect during final 30% of movement
    const animObj = { progress: startVal };

    gsap.killTweensOf(animObj);
    gsap.to(animObj, {
      progress: endVal,
      duration,
      ease: 'power2.inOut',
      onUpdate: () => {
        progressRef.current.value = animObj.progress % 1.0;
        // Check deceleration zone - only trigger state update when boolean changes
        const ratio = (animObj.progress - startVal) / forwardDist;
        const shouldBrake = ratio > 0.68;
        if (shouldBrake !== isBrakingRef.current) {
          isBrakingRef.current = shouldBrake;
          setIsBraking(shouldBrake);
        }
      },
      onComplete: () => {
        progressRef.current.value = target;
        if (isBrakingRef.current) {
          isBrakingRef.current = false;
          setIsBraking(false);
        }
        if (onArrive) onArrive();
      },
    });
  }, [targetProgress, onArrive]);

  // Frame update: Position, Tangent orientation, Banking and Suspension with ZERO allocations
  useFrame((state) => {
    if (!carGroupRef.current) return;

    const t = progressRef.current.value % 1.0;
    const normalizedT = t < 0 ? t + 1.0 : t;

    // 1. Current position along spline (reusing TEMP_POS)
    trackSpline.getPointAt(normalizedT, TEMP_POS);

    // 2. Forward tangent (reusing TEMP_TANGENT)
    trackSpline.getTangentAt(normalizedT, TEMP_TANGENT).normalize();

    // Subtle natural engine suspension vibration
    const vibration = Math.sin(state.clock.elapsedTime * 24) * 0.003;

    // Apply position slightly above track surface
    carGroupRef.current.position.set(TEMP_POS.x, TEMP_POS.y + 0.08 + vibration, TEMP_POS.z);

    // Calculate look target ahead on spline for smooth steering
    const lookAheadT = (normalizedT + 0.015) % 1.0;
    trackSpline.getPointAt(lookAheadT, TEMP_LOOK_TARGET);
    TEMP_LOOK_TARGET.y += 0.08;

    carGroupRef.current.lookAt(TEMP_LOOK_TARGET);

    // Dynamic Corner Banking: calculate curvature using scratch vector
    trackSpline.getTangentAt(lookAheadT, TEMP_NEXT_TANGENT).normalize();
    const curvature = TEMP_TANGENT.cross(TEMP_NEXT_TANGENT).y;
    // Apply banking roll around local Z axis
    carGroupRef.current.rotateZ(curvature * 18);

    prevProgressRef.current = normalizedT;
  });

  return (
    <group ref={carGroupRef}>
      <React.Suspense
        fallback={
          <group scale={[0.5, 0.5, 0.5]}>
            <ProceduralF1Car />
          </group>
        }
      >
        {!loadError ? (
          <GLTFCarInner brakeActive={isBraking} />
        ) : (
          <group scale={[0.5, 0.5, 0.5]}>
            <ProceduralF1Car />
          </group>
        )}
      </React.Suspense>
    </group>
  );
}
