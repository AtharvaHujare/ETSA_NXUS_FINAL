import { useEffect, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface CarModelProps {
  modelPath?: string;
  isHovered?: boolean;
}

export function CarModel({ modelPath = '/models/nexus-f1-car.glb' }: CarModelProps) {
  const { scene } = useGLTF(modelPath);
  const carGroupRef = useRef<THREE.Group>(null);

  // Clone scene so we don't mutate cache directly and apply custom Formula 1 PBR materials
  const clonedScene = useMemo(() => {
    const cloned = scene.clone(true);

    // Compute bounding box to normalize scale and center the car
    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Center the model at ground level (Y = 0)
    cloned.position.x = -center.x;
    cloned.position.y = -box.min.y; // Sit on the ground
    cloned.position.z = -center.z;

    // Normalizing scale if needed (F1 car is roughly 5.5m long)
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const targetLength = 4.8;
      const scale = targetLength / maxDim;
      cloned.scale.set(scale, scale, scale);
    }

    // Material enhancement for Formula 1 NEXUS livery
    const carbonBlackMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#080809'),
      metalness: 0.82,
      roughness: 0.22,
      clearcoat: 1.0,
      clearcoatRoughness: 0.12,
      reflectivity: 0.9,
    });

    const racingRedMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#E10600'),
      metalness: 0.4,
      roughness: 0.28,
      emissive: new THREE.Color('#380000'),
      emissiveIntensity: 0.2,
    });

    const tireRubberMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#141416'),
      roughness: 0.85,
      metalness: 0.05,
    });

    const chromeTitaniumMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#C8CCD0'),
      metalness: 0.95,
      roughness: 0.15,
    });

    const rearRainLightMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#FF0000'),
      emissive: new THREE.Color('#FF1100'),
      emissiveIntensity: 2.5,
    });

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const name = (mesh.name || '').toLowerCase();
        const matName = ((mesh.material as THREE.Material)?.name || '').toLowerCase();

        // Categorize materials by mesh or material names
        if (name.includes('tire') || name.includes('wheel') || name.includes('tyre') || matName.includes('tire') || matName.includes('rubber')) {
          mesh.material = tireRubberMaterial;
        } else if (name.includes('red') || name.includes('accent') || name.includes('stripe') || matName.includes('red')) {
          mesh.material = racingRedMaterial;
        } else if (name.includes('metal') || name.includes('exhaust') || name.includes('rim') || name.includes('suspension') || matName.includes('metal') || matName.includes('chrome')) {
          mesh.material = chromeTitaniumMaterial;
        } else if (name.includes('light') || name.includes('led') || matName.includes('light') || matName.includes('led')) {
          mesh.material = rearRainLightMaterial;
        } else {
          // If original material already has color/texture, enhance its PBR realism
          if (mesh.material && (mesh.material as THREE.MeshStandardMaterial).isMeshStandardMaterial) {
            const m = mesh.material as THREE.MeshStandardMaterial;
            m.roughness = Math.min(m.roughness, 0.35);
            m.metalness = Math.max(m.metalness, 0.4);
            m.needsUpdate = true;
          } else {
            mesh.material = carbonBlackMaterial;
          }
        }
      }
    });

    return cloned;
  }, [scene]);

  // Subtle natural idle suspension vibration
  useFrame((state) => {
    if (carGroupRef.current) {
      const t = state.clock.getElapsedTime();
      carGroupRef.current.position.y = Math.sin(t * 1.5) * 0.003;
    }
  });

  return (
    <group ref={carGroupRef}>
      <primitive object={clonedScene} />
    </group>
  );
}

// Preload the model asset
useGLTF.preload('/models/nexus-f1-car.glb');
