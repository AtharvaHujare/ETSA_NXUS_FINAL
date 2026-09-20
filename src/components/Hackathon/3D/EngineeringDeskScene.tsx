import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EngineeringDesk } from './EngineeringDesk';
import { HARDWARE_HACKATHON_DATA, type DeskComponentInfo } from '../../../data/hardwareHackathonData';

interface EngineeringDeskSceneProps {
  onSelectComponent: (component: DeskComponentInfo) => void;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}

function ParallaxCameraController() {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollRef.current = Math.min(window.scrollY / 600, 1.0);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useFrame(() => {
    // Base camera position
    const baseX = 0.4;
    const baseY = 1.6;
    const baseZ = 3.6;

    // Gentle parallax and subtle dolly on scroll
    const targetX = baseX + mouseRef.current.x * 0.35;
    const targetY = baseY - mouseRef.current.y * 0.22 - scrollRef.current * 0.3;
    const targetZ = baseZ - scrollRef.current * 0.6;

    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.position.z += (targetZ - camera.position.z) * 0.05;

    camera.lookAt(0.1, -0.2, 0);
  });

  return null;
}

export function EngineeringDeskScene({
  onSelectComponent,
  hoveredId,
  setHoveredId,
}: EngineeringDeskSceneProps) {
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebGlSupported(false);
    } catch {
      setWebGlSupported(false);
    }
  }, []);

  if (!webGlSupported) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#090a0d',
          color: '#888888',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
        }}
      >
        [ 3D ENGINEERING BENCHMARK WORKSPACE ]
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '440px',
      }}
    >
      <Canvas
        camera={{ position: [0.4, 1.6, 3.6], fov: 42, near: 0.2, far: 50 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        shadows
      >
        {/* Dark garage background atmosphere */}
        <color attach="background" args={['#070709']} />
        <fog attach="fog" args={['#070709', 4, 12]} />

        {/* Ambient Dark Fill */}
        <ambientLight color="#0d1117" intensity={0.8} />

        {/* Focused Overhead Garage Worklamp (Warmer Focused Spot) */}
        <spotLight
          position={[0, 3.8, 0.4]}
          target-position={[0, -0.6, 0]}
          color="#fff5e6"
          intensity={6.5}
          distance={8}
          angle={Math.PI / 3.4}
          penumbra={0.6}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Cool Rim Key Light from the rear */}
        <directionalLight position={[-2.8, 2.5, -2]} color="#00e5ff" intensity={0.9} />

        {/* Warm Motorsport Rim Light from right */}
        <directionalLight position={[3.2, 1.8, 1.5]} color="#ff2200" intensity={0.7} />

        {/* Parallax Controller */}
        <ParallaxCameraController />

        {/* Bounded Orbit Controls so the user can freely inspect but not flip outside garage */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          dampingFactor={0.06}
        />

        {/* The 3D Engineering Desk & Components */}
        <EngineeringDesk
          onSelectComponent={onSelectComponent}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
        />
      </Canvas>

      {/* Floating Hint Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '20px',
          pointerEvents: 'none',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          letterSpacing: '0.18em',
          color: '#666666',
          textTransform: 'uppercase',
          background: 'rgba(9, 10, 14, 0.75)',
          padding: '4px 10px',
          borderRadius: '2px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        CLICK COMPONENT TO INSPECT // DRAG TO ORBIT
      </div>
    </div>
  );
}
