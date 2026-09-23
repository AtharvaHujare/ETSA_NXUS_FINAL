import React, { Suspense, useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { CarModel } from './CarModel';
import { ProceduralF1Car } from './ProceduralF1Car';
import { PitGarageEnvironment } from './PitGarageEnvironment';

interface CarSceneProps {
  onUserInteract?: () => void;
}

// Error Boundary for GLTF loading failure
class ModelErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any) {
    console.warn('GLTF load fallback to procedural model:', error);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export function CarScene({ onUserInteract }: CarSceneProps) {
  const { camera, gl } = useThree();
  const carPivotRef = useRef<THREE.Group>(null);

  // Interaction State
  const isDragging = useRef(false);
  const previousPointerPosition = useRef({ x: 0, y: 0 });
  const velocityY = useRef(0);
  const velocityX = useRef(0);
  const targetRotationY = useRef(0.48); // Initial three-quarter front angle matching reference
  const currentRotationY = useRef(0.48);
  const targetRotationX = useRef(0.04);
  const currentRotationX = useRef(0.04);
  const lastInteractionTime = useRef(Date.now());
  const mouseParallax = useRef({ x: 0, y: 0 });
  const cinematicPushIn = useRef(0); // 0 = start, 1 = complete

  // Camera initial target coordinates: three-quarter front view focusing on car on right half of screen
  const cameraInitialPos = useRef(new THREE.Vector3(-3.2, 1.8, 6.6));
  const cameraFinalPos = useRef(new THREE.Vector3(-3.5, 1.35, 4.6));
  const cameraLookTarget = useRef(new THREE.Vector3(0.7, 0.45, 0));

  useEffect(() => {
    camera.position.copy(cameraInitialPos.current);
    camera.lookAt(cameraLookTarget.current);

    const canvas = gl.domElement;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      previousPointerPosition.current = { x: e.clientX, y: e.clientY };
      velocityY.current = 0;
      velocityX.current = 0;
      lastInteractionTime.current = Date.now();
      try {
        canvas.setPointerCapture(e.pointerId);
      } catch {}
      if (onUserInteract) onUserInteract();
    };

    const handlePointerMove = (e: PointerEvent) => {
      // Calculate normalized mouse coordinate for camera parallax
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseParallax.current = { x: normX, y: normY };

      if (!isDragging.current) return;

      const deltaX = e.clientX - previousPointerPosition.current.x;
      const deltaY = e.clientY - previousPointerPosition.current.y;

      // Rotate car horizontally 360 degrees
      const rotSpeed = 0.0055;
      targetRotationY.current += deltaX * rotSpeed;
      velocityY.current = deltaX * rotSpeed;

      // Restrict vertical pitch so car never flips upside down (-0.12 rad to +0.25 rad)
      targetRotationX.current += deltaY * (rotSpeed * 0.5);
      targetRotationX.current = Math.max(-0.10, Math.min(0.24, targetRotationX.current));
      velocityX.current = deltaY * (rotSpeed * 0.5);

      previousPointerPosition.current = { x: e.clientX, y: e.clientY };
      lastInteractionTime.current = Date.now();
    };

    const handlePointerUp = (e: PointerEvent) => {
      isDragging.current = false;
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {}
    };

    canvas.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('pointercancel', handlePointerUp, { passive: true });

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [gl, camera, onUserInteract]);

  useFrame((state, delta) => {
    // 1. Cinematic Camera Push-in
    if (cinematicPushIn.current < 1) {
      cinematicPushIn.current = Math.min(1, cinematicPushIn.current + delta * 0.6);
      const ease = 1 - Math.pow(1 - cinematicPushIn.current, 3);
      camera.position.lerpVectors(cameraInitialPos.current, cameraFinalPos.current, ease);
    } else {
      // 2. Camera Parallax based on mouse movement
      const targetCamX = cameraFinalPos.current.x + mouseParallax.current.x * 0.25;
      const targetCamY = cameraFinalPos.current.y + mouseParallax.current.y * 0.12;
      camera.position.x += (targetCamX - camera.position.x) * 0.04;
      camera.position.y += (targetCamY - camera.position.y) * 0.04;
    }
    camera.lookAt(cameraLookTarget.current);

    // 3. Inertia & Friction Momentum on Car Rotation
    if (!isDragging.current) {
      velocityY.current *= 0.93; // horizontal damping
      velocityX.current *= 0.90; // vertical damping

      targetRotationY.current += velocityY.current;
      targetRotationX.current += velocityX.current;
      targetRotationX.current = Math.max(-0.10, Math.min(0.24, targetRotationX.current));

      // Subtle Idle rotation when user is idle for > 1.8 seconds
      const timeSinceInteract = Date.now() - lastInteractionTime.current;
      if (timeSinceInteract > 1800 && Math.abs(velocityY.current) < 0.0005) {
        targetRotationY.current += delta * 0.045; // Slow natural showcase rotation
      }
    }

    // 4. Smooth Rotation Interpolation
    currentRotationY.current += (targetRotationY.current - currentRotationY.current) * 0.14;
    currentRotationX.current += (targetRotationX.current - currentRotationX.current) * 0.14;

    if (carPivotRef.current) {
      carPivotRef.current.rotation.y = currentRotationY.current;
      carPivotRef.current.rotation.x = currentRotationX.current;
      carPivotRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.003;
    }
  });

  return (
    <>
      <PitGarageEnvironment />

      {/* Car Positioned in the right-center hero zone */}
      <group position={[0.7, 0, 0]}>
        <group ref={carPivotRef}>
          <ModelErrorBoundary fallback={<ProceduralF1Car />}>
            <Suspense fallback={<ProceduralF1Car />}>
              <CarModel modelPath="/models/nexus-f1-car.glb" />
            </Suspense>
          </ModelErrorBoundary>
        </group>
      </group>
    </>
  );
}
