import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import { CircuitTrack } from './CircuitTrack';
import { CircuitCar } from './CircuitCar';
import { PitStopMarkers } from './PitStopMarkers';
import { trackSpline } from './trackPath';
import type { PitStop } from '../../data/calendarData';

interface CircuitSceneProps {
  activeStop: PitStop;
  onSelectStop: (stop: PitStop) => void;
  carProgress: number;
  onCarArrive?: () => void;
  isVisible?: boolean;
}

// Cinematic Camera Controller
function CameraController({ activeStop }: { activeStop: PitStop }) {
  const { camera } = useThree();
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    const pt = trackSpline.getPointAt(activeStop.trackProgress);

    // Calculate subtle camera focus: shift slightly towards active pit stop while preserving grand circuit overview
    const targetCamX = pt.x * 0.22;
    const targetCamY = 28.0;
    const targetCamZ = 34.0 + pt.z * 0.18;

    const lookX = pt.x * 0.35;
    const lookY = pt.y * 0.2;
    const lookZ = pt.z * 0.35;

    gsap.to(camera.position, {
      x: targetCamX,
      y: targetCamY,
      z: targetCamZ,
      duration: 2.2,
      ease: 'power2.out',
    });

    gsap.to(targetLookAt.current, {
      x: lookX,
      y: lookY,
      z: lookZ,
      duration: 2.0,
      ease: 'power2.out',
    });
  }, [activeStop, camera]);

  useFrame(() => {
    // Smooth damp to look at target
    currentLookAt.current.lerp(targetLookAt.current, 0.08);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}

import { getQualitySettings } from '../../utils/qualityProfile';

export function CircuitScene({
  activeStop,
  onSelectStop,
  carProgress,
  onCarArrive,
  isVisible = true,
}: CircuitSceneProps) {
  const quality = getQualitySettings();
  const [isMobile, setIsMobile] = React.useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
  });
  const [isDocVisible, setIsDocVisible] = React.useState(() => {
    return typeof document !== 'undefined' ? document.visibilityState === 'visible' : true;
  });

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    const handleVisibility = () => setIsDocVisible(document.visibilityState === 'visible');
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: isMobile ? 'none' : 'auto',
        touchAction: isMobile ? 'auto' : 'none',
      }}
    >
      <Canvas
        frameloop={isVisible && isDocVisible ? 'always' : 'never'}
        camera={{ position: [0, 32, 38], fov: 38, near: 0.5, far: 200 }}
        dpr={isMobile ? 1.0 : quality.dpr}
        gl={{
          antialias: isMobile ? false : quality.antialias,
          alpha: false,
          powerPreference: isMobile ? 'low-power' : 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
        shadows={isMobile ? false : quality.shadows}
        style={{
          pointerEvents: isMobile ? 'none' : 'auto',
          touchAction: isMobile ? 'auto' : 'none',
        }}
      >
        {/* Deep atmospheric fog matching reference aesthetic */}
        <color attach="background" args={['#050507']} />
        <fog attach="fog" args={['#050507', 35, 95]} />

        {/* Ambient & Directional Lighting */}
        <ambientLight color="#101520" intensity={0.9} />
        
        {/* Main Moonlight Key Light */}
        <directionalLight
          position={[25, 45, 20]}
          color="#d2e3f8"
          intensity={2.4}
          castShadow={isMobile ? false : quality.shadows}
          shadow-mapSize-width={isMobile ? 0 : quality.shadowMapSize}
          shadow-mapSize-height={isMobile ? 0 : quality.shadowMapSize}
          shadow-bias={-0.0001}
        />

        {/* Warm Motorsport Rim Light */}
        <directionalLight position={[-30, 20, -25]} color="#ff2200" intensity={1.2} />

        {/* Elevated Camera Controller */}
        <CameraController activeStop={activeStop} />

        {/* Orbit Controls: Enabled on desktop, disabled on mobile so touches scroll smoothly */}
        <OrbitControls
          enabled={!isMobile}
          enableZoom={!isMobile}
          minDistance={18}
          maxDistance={65}
          maxPolarAngle={Math.PI / 2.15}
          minPolarAngle={Math.PI / 6}
          enablePan={false}
          dampingFactor={0.06}
        />

        {/* The 3D Grand Prix Circuit Track */}
        <CircuitTrack />

        {/* The 4 Pit Stop Interactive Markers */}
        <PitStopMarkers activeStopId={activeStop.id} onSelectStop={onSelectStop} />

        {/* The Traveling F1 Race Car */}
        <CircuitCar targetProgress={carProgress} onArrive={onCarArrive} />
      </Canvas>
    </div>
  );
}
