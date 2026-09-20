import React, { useMemo } from 'react';
import * as THREE from 'three';
import { generateTrackGeometries } from './trackPath';

export function CircuitTrack() {
  const { trackGeometry, curbInnerGeometry, curbOuterGeometry, racingLineGeometry } = useMemo(
    () => generateTrackGeometries(400),
    []
  );

  // Materials
  const asphaltMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#141518'),
        roughness: 0.65,
        metalness: 0.25,
      }),
    []
  );

  const curbsMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        vertexColors: true,
        roughness: 0.45,
        metalness: 0.1,
      }),
    []
  );

  const racingLineMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#FF0011'),
        emissive: new THREE.Color('#FF1A1A'),
        emissiveIntensity: 2.8,
        transparent: true,
        opacity: 0.85,
        roughness: 0.2,
      }),
    []
  );

  const groundMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#07080a'),
        roughness: 0.95,
        metalness: 0.1,
      }),
    []
  );

  const barrierMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#444850'),
        roughness: 0.35,
        metalness: 0.75,
      }),
    []
  );

  const pitBuildingMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#121316'),
        roughness: 0.5,
        metalness: 0.6,
      }),
    []
  );

  const glassMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#1a2430'),
        metalness: 0.9,
        roughness: 0.1,
        transparent: true,
        opacity: 0.65,
        transmission: 0.6,
      }),
    []
  );

  const towerRedMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#E10600'),
        emissive: new THREE.Color('#FF0800'),
        emissiveIntensity: 3.2,
      }),
    []
  );

  const lightHousingMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#22242a'),
        metalness: 0.8,
        roughness: 0.3,
      }),
    []
  );

  const lightBulbMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#FFFFFF'),
        emissive: new THREE.Color('#E8F2FF'),
        emissiveIntensity: 4.5,
      }),
    []
  );

  return (
    <group>
      {/* 1. Large Ground / Circuit Terrain */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]} receiveShadow material={groundMaterial}>
        <planeGeometry args={[120, 100, 32, 32]} />
      </mesh>

      {/* 2. Main Track Surface */}
      <mesh geometry={trackGeometry} material={asphaltMaterial} receiveShadow castShadow />

      {/* 3. Inner & Outer Alternating Rumble Curbs */}
      <mesh geometry={curbInnerGeometry} material={curbsMaterial} receiveShadow />
      <mesh geometry={curbOuterGeometry} material={curbsMaterial} receiveShadow />

      {/* 4. Glowing Red Racing Apex Line */}
      <mesh geometry={racingLineGeometry} material={racingLineMaterial} />

      {/* 5. Start / Finish Gantry along the Straight ([-18, 0, 14]) */}
      <group position={[-18, 0, 14]} rotation={[0, 0.45, 0]}>
        {/* Support columns */}
        <mesh position={[-2.4, 1.8, 0]} material={barrierMat} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 3.6]} />
        </mesh>
        <mesh position={[2.4, 1.8, 0]} material={barrierMat} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 3.6]} />
        </mesh>
        {/* Overhead bridge box */}
        <mesh position={[0, 3.5, 0]} material={pitBuildingMat} castShadow>
          <boxGeometry args={[5.2, 0.5, 0.9]} />
        </mesh>
        {/* Glowing NEXUS Timing Board */}
        <mesh position={[0, 3.5, 0.47]}>
          <planeGeometry args={[4.6, 0.35]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
        <mesh position={[0, 3.5, 0.48]} material={towerRedMat}>
          <boxGeometry args={[1.8, 0.15, 0.02]} />
        </mesh>
        {/* Starting lights (5 red LEDs) */}
        {[-1.2, -0.6, 0, 0.6, 1.2].map((xOffset, i) => (
          <mesh key={i} position={[xOffset, 3.1, 0.46]} material={towerRedMat}>
            <sphereGeometry args={[0.08, 16, 16]} />
          </mesh>
        ))}
      </group>

      {/* 6. Central NEXUS Control Tower (Iconic Infield Feature) */}
      <group position={[-2, 0, -3]}>
        {/* Octagonal Tower Base */}
        <mesh position={[0, 3.5, 0]} material={pitBuildingMat} castShadow receiveShadow>
          <cylinderGeometry args={[2.2, 2.6, 7.0, 8]} />
        </mesh>
        {/* Glass observation ring */}
        <mesh position={[0, 6.2, 0]} material={glassMat} castShadow>
          <cylinderGeometry args={[2.5, 2.3, 1.6, 16]} />
        </mesh>
        {/* Upper Roof */}
        <mesh position={[0, 7.3, 0]} material={pitBuildingMat} castShadow>
          <cylinderGeometry args={[2.4, 2.6, 0.6, 8]} />
        </mesh>
        {/* Antenna spire */}
        <mesh position={[0, 9.8, 0]} material={barrierMat}>
          <cylinderGeometry args={[0.04, 0.08, 4.4]} />
        </mesh>
        {/* Pulsing red antenna beacon */}
        <mesh position={[0, 12.0, 0]} material={towerRedMat}>
          <sphereGeometry args={[0.16, 16, 16]} />
        </mesh>
        {/* Tower Red Illuminated Vertical NEXUS Banner */}
        <mesh position={[0, 3.8, 2.45]} material={towerRedMat}>
          <boxGeometry args={[0.55, 3.8, 0.08]} />
        </mesh>
        {/* Ground spotlights illuminating the tower */}
        <pointLight position={[0, 7.5, 0]} color="#FF2211" intensity={4} distance={18} decay={2} />
      </group>

      {/* 7. Pit Lane Garages & Paddock Buildings */}
      <group position={[-12, 0, 8]} rotation={[0, 0.35, 0]}>
        {/* Main Pit Lane Building */}
        <mesh position={[0, 1.4, -2.5]} material={pitBuildingMat} castShadow receiveShadow>
          <boxGeometry args={[16, 2.8, 3.6]} />
        </mesh>
        {/* Garage open doors */}
        {[-6, -3, 0, 3, 6].map((x, i) => (
          <group key={i} position={[x, 0.9, -0.65]}>
            <mesh material={glassMat}>
              <boxGeometry args={[2.2, 1.8, 0.05]} />
            </mesh>
            {/* Interior garage red ambiance */}
            <pointLight position={[0, 0.5, -0.8]} color="#FF3300" intensity={1.2} distance={5} decay={2} />
          </group>
        ))}
        {/* Pit Wall separator */}
        <mesh position={[0, 0.45, 1.4]} material={barrierMat} castShadow>
          <boxGeometry args={[18, 0.9, 0.4]} />
        </mesh>
      </group>

      {/* 8. Grandstands (Turn 2 and Turn 7 spectator areas) */}
      {/* Grandstand 1: Outside Turn 2 hairpin */}
      <group position={[-36, 0, -5]} rotation={[0, 1.25, 0]}>
        <mesh position={[0, 1.8, 0]} material={pitBuildingMat} castShadow receiveShadow>
          <boxGeometry args={[14, 3.6, 4.5]} />
        </mesh>
        {/* Tiered roof canopy */}
        <mesh position={[0, 4.2, 0.5]} rotation={[0.2, 0, 0]} material={lightHousingMat} castShadow>
          <boxGeometry args={[15, 0.3, 5.5]} />
        </mesh>
      </group>

      {/* Grandstand 2: Turn 7 Horseshoe */}
      <group position={[32, 0, -8]} rotation={[0, -1.1, 0]}>
        <mesh position={[0, 1.8, 0]} material={pitBuildingMat} castShadow receiveShadow>
          <boxGeometry args={[12, 3.6, 4.2]} />
        </mesh>
        <mesh position={[0, 4.2, 0.5]} rotation={[0.2, 0, 0]} material={lightHousingMat} castShadow>
          <boxGeometry args={[13, 0.3, 5.0]} />
        </mesh>
      </group>

      {/* 9. VIP Overpass Bridge spanning the track near center */}
      <group position={[6, 0, 4]} rotation={[0, 0.65, 0]}>
        <mesh position={[-3.2, 2.2, 0]} material={barrierMat} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 4.4]} />
        </mesh>
        <mesh position={[3.2, 2.2, 0]} material={barrierMat} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 4.4]} />
        </mesh>
        {/* Spanning enclosed bridge */}
        <mesh position={[0, 4.2, 0]} material={pitBuildingMat} castShadow>
          <boxGeometry args={[7.2, 1.4, 2.0]} />
        </mesh>
        <mesh position={[0, 4.2, 1.02]} material={glassMat}>
          <planeGeometry args={[6.8, 1.0]} />
        </mesh>
        <mesh position={[0, 4.2, -1.02]} rotation={[0, Math.PI, 0]} material={glassMat}>
          <planeGeometry args={[6.8, 1.0]} />
        </mesh>
      </group>

      {/* 10. Track Floodlight Masts */}
      {[
        { pos: [-24, 0, 18], rot: 0.3 },
        { pos: [-34, 0, 3], rot: 1.2 },
        { pos: [-18, 0, -19], rot: 2.2 },
        { pos: [10, 0, -25], rot: 2.8 },
        { pos: [30, 0, -2], rot: -1.4 },
        { pos: [20, 0, 18], rot: -0.6 },
      ].map((mast, idx) => (
        <group key={idx} position={mast.pos as [number, number, number]} rotation={[0, mast.rot, 0]}>
          {/* Steel column */}
          <mesh position={[0, 4.5, 0]} material={lightHousingMat} castShadow>
            <cylinderGeometry args={[0.1, 0.18, 9.0, 8]} />
          </mesh>
          {/* Angled floodlight head */}
          <group position={[0, 9.0, 0]} rotation={[0.4, 0, 0]}>
            <mesh material={lightHousingMat} castShadow>
              <boxGeometry args={[1.4, 0.6, 0.3]} />
            </mesh>
            <mesh position={[0, 0, 0.16]} material={lightBulbMat}>
              <planeGeometry args={[1.2, 0.45]} />
            </mesh>
            {/* Spot light pointing towards track */}
            <spotLight
              position={[0, 0, 0.5]}
              target-position={[0, -9.0, 8]}
              color="#eaf4ff"
              intensity={8}
              distance={28}
              angle={Math.PI / 4.5}
              penumbra={0.6}
              decay={2}
            />
          </group>
        </group>
      ))}

      {/* 11. Armco Barriers along high speed curves */}
      <group position={[-32, 0.35, -4]} rotation={[0, 1.1, 0]}>
        <mesh material={barrierMat} castShadow>
          <boxGeometry args={[12, 0.7, 0.15]} />
        </mesh>
      </group>
      <group position={[28, 0.45, -7]} rotation={[0, -1.0, 0]}>
        <mesh material={barrierMat} castShadow>
          <boxGeometry args={[14, 0.7, 0.15]} />
        </mesh>
      </group>
      <group position={[18, 0.15, 15]} rotation={[0, 0.2, 0]}>
        <mesh material={barrierMat} castShadow>
          <boxGeometry args={[10, 0.7, 0.15]} />
        </mesh>
      </group>
    </group>
  );
}
