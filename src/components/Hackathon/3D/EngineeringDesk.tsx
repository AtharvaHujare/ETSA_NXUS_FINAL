import React, { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { HARDWARE_HACKATHON_DATA, type DeskComponentInfo } from '../../../data/hardwareHackathonData';

interface EngineeringDeskProps {
  onSelectComponent: (component: DeskComponentInfo) => void;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}

export function EngineeringDesk({
  onSelectComponent,
  hoveredId,
  setHoveredId,
}: EngineeringDeskProps) {
  const [pulseTime, setPulseTime] = useState(0);
  const ledRef = useRef<THREE.PointLight>(null);

  useEffect(() => {
    document.body.style.cursor = hoveredId ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hoveredId]);

  // Animate oscilloscope waveform & blinking LEDs
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    setPulseTime(t);
    if (ledRef.current) {
      ledRef.current.intensity = 0.8 + Math.sin(t * 8) * 0.5;
    }
  });

  // Reusable PBR Materials
  const materials = useMemo(() => {
    return {
      workbenchTop: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#16171a'),
        roughness: 0.65,
        metalness: 0.25,
      }),
      workbenchLegs: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#0c0d0f'),
        roughness: 0.45,
        metalness: 0.8,
      }),
      laptopBody: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#1f2126'),
        roughness: 0.35,
        metalness: 0.85,
      }),
      laptopScreenActive: new THREE.MeshBasicMaterial({
        color: new THREE.Color('#0a2a4a'),
      }),
      laptopCadGlow: new THREE.MeshBasicMaterial({
        color: new THREE.Color('#38bdf8'),
        wireframe: true,
      }),
      chassisPlate: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#111316'),
        roughness: 0.3,
        metalness: 0.7,
      }),
      tireRubber: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#18191c'),
        roughness: 0.9,
        metalness: 0.05,
      }),
      brassMetal: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#c29b38'),
        metalness: 0.9,
        roughness: 0.25,
      }),
      scopeBody: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#252830'),
        roughness: 0.4,
        metalness: 0.5,
      }),
      scopeScreen: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#061814'),
        emissive: new THREE.Color('#052e25'),
        emissiveIntensity: 0.8,
      }),
      scopeWaveform: new THREE.MeshBasicMaterial({
        color: new THREE.Color('#10b981'),
      }),
      breadboard: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#dedede'),
        roughness: 0.7,
        metalness: 0.05,
      }),
      icChip: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#0a0a0c'),
        roughness: 0.2,
        metalness: 0.6,
      }),
      racingRedAccent: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#E10600'),
        emissive: new THREE.Color('#FF1100'),
        emissiveIntensity: 1.5,
      }),
      cabinetMetal: new THREE.MeshStandardMaterial({
        color: new THREE.Color('#18191d'),
        roughness: 0.35,
        metalness: 0.75,
      }),
      helmetVisor: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#050505'),
        metalness: 0.95,
        roughness: 0.08,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
      }),
    };
  }, []);

  const getComponentData = (id: string) =>
    HARDWARE_HACKATHON_DATA.deskComponents.find((c) => c.id === id)!;

  return (
    <group position={[0, -0.6, 0]}>
      {/* 1. Heavy Industrial Workbench */}
      {/* Top Surface */}
      <mesh
        position={[0, 0, 0]}
        receiveShadow
        castShadow
        material={materials.workbenchTop}
      >
        <boxGeometry args={[4.8, 0.12, 2.4]} />
      </mesh>

      {/* Heavy Steel Frame Legs */}
      {[
        [-2.2, -0.9, -1.0],
        [2.2, -0.9, -1.0],
        [-2.2, -0.9, 1.0],
        [2.2, -0.9, 1.0],
      ].map((pos, idx) => (
        <mesh
          key={idx}
          position={pos as [number, number, number]}
          material={materials.workbenchLegs}
          castShadow
        >
          <boxGeometry args={[0.12, 1.7, 0.12]} />
        </mesh>
      ))}

      {/* Crossbar stretcher */}
      <mesh position={[0, -1.5, -1.0]} material={materials.workbenchLegs}>
        <boxGeometry args={[4.4, 0.06, 0.06]} />
      </mesh>

      {/* 2. Interactive Component: CAD Laptop Workstation (Left) */}
      <group
        position={[-1.3, 0.06, -0.25]}
        rotation={[0, 0.35, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHoveredId('laptop');
        }}
        onPointerOut={() => setHoveredId(null)}
        onClick={(e) => {
          e.stopPropagation();
          onSelectComponent(getComponentData('laptop'));
        }}
      >
        {/* Base Keyboard Deck */}
        <mesh position={[0, 0.015, 0]} material={materials.laptopBody} castShadow>
          <boxGeometry args={[0.78, 0.024, 0.54]} />
        </mesh>
        {/* Trackpad & Keyboard Indentation */}
        <mesh position={[0, 0.028, -0.06]}>
          <boxGeometry args={[0.72, 0.002, 0.32]} />
          <meshBasicMaterial color="#101114" />
        </mesh>
        {/* Open Angled Screen Lid */}
        <group position={[0, 0.028, -0.26]} rotation={[-0.45, 0, 0]}>
          <mesh position={[0, 0.26, 0]} material={materials.laptopBody} castShadow>
            <boxGeometry args={[0.78, 0.52, 0.018]} />
          </mesh>
          {/* Glowing CAD Schematic Screen Display */}
          <mesh position={[0, 0.26, 0.011]} material={materials.laptopScreenActive}>
            <planeGeometry args={[0.73, 0.47]} />
          </mesh>
          {/* Wireframe 3D Car Telemetry preview on screen */}
          <mesh position={[0, 0.26, 0.012]} material={materials.laptopCadGlow}>
            <boxGeometry args={[0.42, 0.22, 0.001]} />
          </mesh>
          {/* Screen backlight emission onto keyboard */}
          <pointLight
            position={[0, 0.25, 0.2]}
            color="#38bdf8"
            intensity={hoveredId === 'laptop' ? 2.5 : 1.2}
            distance={1.6}
          />
        </group>

        {/* Hover Highlight Ring */}
        {hoveredId === 'laptop' && (
          <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.48, 0.52, 32]} />
            <meshBasicMaterial color="#38bdf8" transparent opacity={0.8} />
          </mesh>
        )}
      </group>

      {/* 3. Interactive Component: Autonomous 4WD Telemetry Rover Prototype (Center) */}
      {/* (Subtle connection to NEXUS race-car engineering prototype!) */}
      <group
        position={[0.25, 0.06, 0.2]}
        rotation={[0, -0.22, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHoveredId('rover');
        }}
        onPointerOut={() => setHoveredId(null)}
        onClick={(e) => {
          e.stopPropagation();
          onSelectComponent(getComponentData('rover'));
        }}
      >
        {/* Lower Chassis Plate */}
        <mesh position={[0, 0.12, 0]} material={materials.chassisPlate} castShadow>
          <boxGeometry args={[0.62, 0.02, 0.95]} />
        </mesh>
        {/* Upper Electronics Deck */}
        <mesh position={[0, 0.26, 0]} material={materials.chassisPlate} castShadow>
          <boxGeometry args={[0.56, 0.018, 0.82]} />
        </mesh>
        {/* Standoff pillars */}
        {[
          [-0.24, 0.19, -0.34],
          [0.24, 0.19, -0.34],
          [-0.24, 0.19, 0.34],
          [0.24, 0.19, 0.34],
        ].map((p, i) => (
          <mesh key={i} position={p as [number, number, number]} material={materials.brassMetal}>
            <cylinderGeometry args={[0.012, 0.012, 0.14]} />
          </mesh>
        ))}

        {/* 4 Knobby Motorsport Compound Tires */}
        {[
          [-0.35, 0.12, -0.3],
          [0.35, 0.12, -0.3],
          [-0.35, 0.12, 0.3],
          [0.35, 0.12, 0.3],
        ].map((wPos, wIdx) => (
          <group
            key={wIdx}
            position={wPos as [number, number, number]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh material={materials.tireRubber} castShadow>
              <cylinderGeometry args={[0.13, 0.13, 0.1, 24]} />
            </mesh>
            <mesh material={materials.chassisPlate}>
              <cylinderGeometry args={[0.07, 0.07, 0.11, 16]} />
            </mesh>
            {/* Red rim locking ring */}
            <mesh position={[0, 0.052, 0]} material={materials.racingRedAccent}>
              <ringGeometry args={[0.06, 0.075, 16]} />
            </mesh>
          </group>
        ))}

        {/* Rover Battery Pack & Motor Controller */}
        <mesh position={[0, 0.18, -0.1]} material={materials.workbenchLegs} castShadow>
          <boxGeometry args={[0.34, 0.08, 0.42]} />
        </mesh>
        {/* Telemetry Sensor Mast (IMU + Optical Lens + Antenna) */}
        <mesh position={[0, 0.42, 0.2]} material={materials.brassMetal}>
          <cylinderGeometry args={[0.015, 0.02, 0.3]} />
        </mesh>
        <mesh position={[0, 0.58, 0.2]} material={materials.racingRedAccent}>
          <sphereGeometry args={[0.04, 16, 16]} />
        </mesh>
        <mesh position={[0.08, 0.58, 0.2]} rotation={[0, 0, 0.3]} material={materials.brassMetal}>
          <cylinderGeometry args={[0.005, 0.005, 0.25]} />
        </mesh>

        {/* Live status LED blinking on the rover */}
        <pointLight
          ref={ledRef}
          position={[0, 0.3, 0.32]}
          color="#E10600"
          intensity={hoveredId === 'rover' ? 3.5 : 1.5}
          distance={1.2}
        />

        {/* Hover Highlight Ring */}
        {hoveredId === 'rover' && (
          <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.55, 0.6, 32]} />
            <meshBasicMaterial color="#E10600" transparent opacity={0.85} />
          </mesh>
        )}
      </group>

      {/* 4. Interactive Component: Dual-Channel Digital Oscilloscope (Right Rear) */}
      <group
        position={[1.35, 0.28, -0.65]}
        rotation={[0, -0.4, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHoveredId('oscilloscope');
        }}
        onPointerOut={() => setHoveredId(null)}
        onClick={(e) => {
          e.stopPropagation();
          onSelectComponent(getComponentData('oscilloscope'));
        }}
      >
        {/* Main Body */}
        <mesh position={[0, 0.16, 0]} material={materials.scopeBody} castShadow>
          <boxGeometry args={[0.82, 0.38, 0.46]} />
        </mesh>
        {/* Glowing Screen */}
        <mesh position={[-0.14, 0.16, 0.233]} material={materials.scopeScreen}>
          <planeGeometry args={[0.42, 0.28]} />
        </mesh>
        {/* Waveform Trace Lines */}
        <mesh position={[-0.14, 0.16, 0.235]} material={materials.scopeWaveform}>
          <planeGeometry args={[0.36, 0.04]} />
        </mesh>
        {/* Screen ambient light */}
        <pointLight
          position={[-0.14, 0.16, 0.45]}
          color="#10b981"
          intensity={hoveredId === 'oscilloscope' ? 2.5 : 1.2}
          distance={1.5}
        />
        {/* Rotary Knobs & Push Buttons */}
        {[
          [0.2, 0.22, 0.24],
          [0.2, 0.1, 0.24],
          [0.3, 0.22, 0.24],
          [0.3, 0.1, 0.24],
        ].map((kPos, kIdx) => (
          <mesh
            key={kIdx}
            position={kPos as [number, number, number]}
            rotation={[Math.PI / 2, 0, 0]}
            material={materials.brassMetal}
          >
            <cylinderGeometry args={[0.024, 0.024, 0.02, 16]} />
          </mesh>
        ))}

        {/* Hover Highlight Ring */}
        {hoveredId === 'oscilloscope' && (
          <mesh position={[0, -0.26, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.5, 0.55, 32]} />
            <meshBasicMaterial color="#10b981" transparent opacity={0.8} />
          </mesh>
        )}
      </group>

      {/* 5. Interactive Component: Microcontroller & Breadboard (Left Center Front) */}
      <group
        position={[-0.45, 0.08, 0.48]}
        rotation={[0, 0.15, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHoveredId('mcu');
        }}
        onPointerOut={() => setHoveredId(null)}
        onClick={(e) => {
          e.stopPropagation();
          onSelectComponent(getComponentData('mcu'));
        }}
      >
        {/* White Breadboard */}
        <mesh position={[0, 0.012, 0]} material={materials.breadboard} castShadow>
          <boxGeometry args={[0.55, 0.024, 0.26]} />
        </mesh>
        {/* Main MCU IC Dual-Inline Package */}
        <mesh position={[0, 0.03, 0]} material={materials.icChip}>
          <boxGeometry args={[0.24, 0.016, 0.1]} />
        </mesh>
        {/* Silver IC Pins */}
        <mesh position={[0, 0.025, 0]}>
          <boxGeometry args={[0.26, 0.008, 0.12]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Pulsing Status LEDs */}
        <mesh position={[-0.18, 0.032, 0.06]}>
          <sphereGeometry args={[0.015, 12, 12]} />
          <meshBasicMaterial color="#22c55e" />
        </mesh>
        <mesh position={[-0.14, 0.032, 0.06]}>
          <sphereGeometry args={[0.015, 12, 12]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
        {/* Jumper wire arches */}
        <mesh position={[0.1, 0.05, -0.04]} rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[0.04, 0.006, 8, 16, Math.PI]} />
          <meshBasicMaterial color="#3b82f6" />
        </mesh>
        <mesh position={[0.16, 0.05, 0.02]} rotation={[0, 0, -Math.PI / 6]}>
          <torusGeometry args={[0.035, 0.006, 8, 16, Math.PI]} />
          <meshBasicMaterial color="#eab308" />
        </mesh>

        {/* Hover Highlight Ring */}
        {hoveredId === 'mcu' && (
          <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.34, 0.38, 32]} />
            <meshBasicMaterial color="#22c55e" transparent opacity={0.8} />
          </mesh>
        )}
      </group>

      {/* 6. Interactive Component: Precision Soldering Station (Right Front) */}
      <group
        position={[1.5, 0.08, 0.28]}
        rotation={[0, -0.28, 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHoveredId('soldering');
        }}
        onPointerOut={() => setHoveredId(null)}
        onClick={(e) => {
          e.stopPropagation();
          onSelectComponent(getComponentData('soldering'));
        }}
      >
        {/* Base Power Unit */}
        <mesh position={[0, 0.08, 0]} material={materials.scopeBody} castShadow>
          <boxGeometry args={[0.36, 0.16, 0.34]} />
        </mesh>
        {/* Front Temperature Readout & Dial */}
        <mesh position={[0, 0.08, 0.172]}>
          <planeGeometry args={[0.14, 0.06]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>
        <mesh
          position={[0.08, 0.08, 0.175]}
          rotation={[Math.PI / 2, 0, 0]}
          material={materials.brassMetal}
        >
          <cylinderGeometry args={[0.025, 0.025, 0.015, 16]} />
        </mesh>

        {/* Iron Stand with Coiled Brass Cleaner */}
        <group position={[-0.26, 0.04, 0.05]}>
          <mesh material={materials.scopeBody}>
            <cylinderGeometry args={[0.07, 0.08, 0.08, 16]} />
          </mesh>
          <mesh position={[0, 0.05, 0]} material={materials.brassMetal}>
            <sphereGeometry args={[0.05, 12, 12]} />
          </mesh>
          {/* Angled Soldering Iron */}
          <group position={[0.02, 0.14, 0]} rotation={[0.4, 0, -0.5]}>
            <mesh material={materials.racingRedAccent}>
              <cylinderGeometry args={[0.018, 0.022, 0.22, 12]} />
            </mesh>
            <mesh position={[0, -0.16, 0]} material={materials.brassMetal}>
              <coneGeometry args={[0.012, 0.12, 12]} />
            </mesh>
          </group>
        </group>

        {/* Hover Highlight Ring */}
        {hoveredId === 'soldering' && (
          <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.38, 0.42, 32]} />
            <meshBasicMaterial color="#f97316" transparent opacity={0.8} />
          </mesh>
        )}
      </group>

      {/* 7. Background Paddock Tool Chest with NEXUS 2026 Decal */}
      <group position={[2.6, 0.6, -1.2]} rotation={[0, -0.55, 0]}>
        {/* Steel Cabinet */}
        <mesh material={materials.cabinetMetal} castShadow receiveShadow>
          <boxGeometry args={[1.1, 2.2, 0.7]} />
        </mesh>
        {/* Red Drawer Pull Handles */}
        {[-0.6, -0.3, 0.0, 0.3, 0.6].map((yOffset, dIdx) => (
          <mesh
            key={dIdx}
            position={[0, yOffset, 0.36]}
            material={materials.racingRedAccent}
          >
            <boxGeometry args={[0.75, 0.025, 0.03]} />
          </mesh>
        ))}

        {/* Race Driver Helmet Resting on Cabinet */}
        <group position={[0, 1.25, 0]}>
          <mesh material={materials.cabinetMetal} castShadow>
            <sphereGeometry args={[0.22, 24, 24]} />
          </mesh>
          <mesh position={[0, 0, 0.12]} material={materials.helmetVisor}>
            <sphereGeometry args={[0.21, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2.2]} />
          </mesh>
          {/* Red racing stripe over helmet */}
          <mesh position={[0, 0.12, 0]} material={materials.racingRedAccent}>
            <boxGeometry args={[0.045, 0.24, 0.42]} />
          </mesh>
        </group>
      </group>

      {/* 8. Hand Tools & Digital Multimeter on desk */}
      {/* Precision Digital Multimeter */}
      <group position={[-0.4, 0.07, -0.65]} rotation={[0, 0.6, 0]}>
        <mesh material={materials.racingRedAccent} castShadow>
          <boxGeometry args={[0.26, 0.04, 0.45]} />
        </mesh>
        <mesh position={[0, 0.022, -0.1]} material={materials.scopeScreen}>
          <planeGeometry args={[0.18, 0.1]} />
        </mesh>
      </group>

      {/* Wire Stripper Pliers */}
      <mesh
        position={[0.8, 0.065, 0.7]}
        rotation={[0, 1.2, 0]}
        material={materials.brassMetal}
        castShadow
      >
        <boxGeometry args={[0.08, 0.015, 0.32]} />
      </mesh>
    </group>
  );
}
