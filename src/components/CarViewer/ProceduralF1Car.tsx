import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export function ProceduralF1Car() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(t * 2) * 0.004;
    }
  });

  const carbonMat = new THREE.MeshPhysicalMaterial({
    color: '#0a0a0c',
    metalness: 0.85,
    roughness: 0.2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  });

  const redMat = new THREE.MeshStandardMaterial({
    color: '#E10600',
    metalness: 0.5,
    roughness: 0.25,
    emissive: '#440000',
    emissiveIntensity: 0.3,
  });

  const tireMat = new THREE.MeshStandardMaterial({
    color: '#121214',
    roughness: 0.85,
    metalness: 0.05,
  });

  const rimMat = new THREE.MeshStandardMaterial({
    color: '#1a1a1c',
    metalness: 0.9,
    roughness: 0.15,
  });

  const tireRingMat = new THREE.MeshStandardMaterial({
    color: '#E10600',
    roughness: 0.4,
    metalness: 0.1,
  });

  return (
    <group ref={groupRef} position={[0, 0.4, 0]}>
      {/* Main monocoque / chassis */}
      <mesh position={[0, 0.2, 0]} castShadow receiveShadow material={carbonMat}>
        <boxGeometry args={[1.2, 0.45, 4.4]} />
      </mesh>

      {/* Nose cone */}
      <mesh position={[0, 0.08, 2.4]} rotation={[-0.05, 0, 0]} castShadow receiveShadow material={carbonMat}>
        <coneGeometry args={[0.45, 1.4, 4]} />
      </mesh>

      {/* Cockpit opening & Halo */}
      <mesh position={[0, 0.48, 0.2]} castShadow material={carbonMat}>
        <torusGeometry args={[0.38, 0.04, 16, 32, Math.PI]} />
      </mesh>
      <mesh position={[0, 0.36, 0.58]} castShadow material={redMat}>
        <cylinderGeometry args={[0.03, 0.03, 0.4]} />
      </mesh>

      {/* Sidepods */}
      <mesh position={[0.75, 0.15, -0.2]} castShadow receiveShadow material={carbonMat}>
        <boxGeometry args={[0.45, 0.4, 2.2]} />
      </mesh>
      <mesh position={[-0.75, 0.15, -0.2]} castShadow receiveShadow material={carbonMat}>
        <boxGeometry args={[0.45, 0.4, 2.2]} />
      </mesh>

      {/* Red Livery Stripes on Sidepods */}
      <mesh position={[0.98, 0.16, -0.2]} material={redMat}>
        <boxGeometry args={[0.02, 0.08, 2.0]} />
      </mesh>
      <mesh position={[-0.98, 0.16, -0.2]} material={redMat}>
        <boxGeometry args={[0.02, 0.08, 2.0]} />
      </mesh>

      {/* Engine Cover & Shark Fin */}
      <mesh position={[0, 0.65, -0.8]} castShadow material={carbonMat}>
        <boxGeometry args={[0.04, 0.55, 1.6]} />
      </mesh>
      <mesh position={[0, 0.9, -0.8]} material={redMat}>
        <boxGeometry args={[0.05, 0.06, 1.5]} />
      </mesh>

      {/* Front Wing */}
      <group position={[0, -0.15, 2.5]}>
        <mesh castShadow receiveShadow material={carbonMat}>
          <boxGeometry args={[2.8, 0.05, 0.5]} />
        </mesh>
        <mesh position={[1.4, 0.15, 0]} material={redMat}>
          <boxGeometry args={[0.05, 0.35, 0.6]} />
        </mesh>
        <mesh position={[-1.4, 0.15, 0]} material={redMat}>
          <boxGeometry args={[0.05, 0.35, 0.6]} />
        </mesh>
      </group>

      {/* Rear Wing */}
      <group position={[0, 0.85, -2.1]}>
        <mesh castShadow receiveShadow material={carbonMat}>
          <boxGeometry args={[2.0, 0.06, 0.45]} />
        </mesh>
        <mesh position={[0, -0.12, 0]} castShadow material={carbonMat}>
          <boxGeometry args={[1.9, 0.04, 0.4]} />
        </mesh>
        <mesh position={[1.0, -0.25, 0]} material={redMat}>
          <boxGeometry args={[0.06, 0.6, 0.6]} />
        </mesh>
        <mesh position={[-1.0, -0.25, 0]} material={redMat}>
          <boxGeometry args={[0.06, 0.6, 0.6]} />
        </mesh>
        {/* Rear DRS Actuator */}
        <mesh position={[0, 0.08, 0]} material={redMat}>
          <boxGeometry args={[0.08, 0.1, 0.15]} />
        </mesh>
      </group>

      {/* Wheels (4x Pirelli P-Zero style) */}
      {/* Front Left */}
      <group position={[1.2, 0.02, 1.6]} rotation={[0, 0, Math.PI / 2]}>
        <mesh castShadow material={tireMat}>
          <cylinderGeometry args={[0.42, 0.42, 0.45, 32]} />
        </mesh>
        <mesh position={[0, 0.23, 0]} material={tireRingMat}>
          <torusGeometry args={[0.3, 0.015, 16, 32]} />
        </mesh>
        <mesh material={rimMat}>
          <cylinderGeometry args={[0.26, 0.26, 0.46, 16]} />
        </mesh>
      </group>

      {/* Front Right */}
      <group position={[-1.2, 0.02, 1.6]} rotation={[0, 0, Math.PI / 2]}>
        <mesh castShadow material={tireMat}>
          <cylinderGeometry args={[0.42, 0.42, 0.45, 32]} />
        </mesh>
        <mesh position={[0, -0.23, 0]} material={tireRingMat}>
          <torusGeometry args={[0.3, 0.015, 16, 32]} />
        </mesh>
        <mesh material={rimMat}>
          <cylinderGeometry args={[0.26, 0.26, 0.46, 16]} />
        </mesh>
      </group>

      {/* Rear Left */}
      <group position={[1.25, 0.06, -1.5]} rotation={[0, 0, Math.PI / 2]}>
        <mesh castShadow material={tireMat}>
          <cylinderGeometry args={[0.46, 0.46, 0.55, 32]} />
        </mesh>
        <mesh position={[0, 0.28, 0]} material={tireRingMat}>
          <torusGeometry args={[0.34, 0.015, 16, 32]} />
        </mesh>
        <mesh material={rimMat}>
          <cylinderGeometry args={[0.28, 0.28, 0.56, 16]} />
        </mesh>
      </group>

      {/* Rear Right */}
      <group position={[-1.25, 0.06, -1.5]} rotation={[0, 0, Math.PI / 2]}>
        <mesh castShadow material={tireMat}>
          <cylinderGeometry args={[0.46, 0.46, 0.55, 32]} />
        </mesh>
        <mesh position={[0, -0.28, 0]} material={tireRingMat}>
          <torusGeometry args={[0.34, 0.015, 16, 32]} />
        </mesh>
        <mesh material={rimMat}>
          <cylinderGeometry args={[0.28, 0.28, 0.56, 16]} />
        </mesh>
      </group>

      {/* Rear Rain Safety LED */}
      <mesh position={[0, -0.05, -2.3]}>
        <boxGeometry args={[0.16, 0.1, 0.05]} />
        <meshStandardMaterial color="#FF0000" emissive="#FF1100" emissiveIntensity={3} />
      </mesh>
    </group>
  );
}
