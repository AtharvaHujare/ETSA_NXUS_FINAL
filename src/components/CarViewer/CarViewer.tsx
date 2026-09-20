import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { CarScene } from './CarScene';

interface CarViewerProps {
  onInteract?: () => void;
  hasInteracted?: boolean;
  isHeroVisible?: boolean;
}

const getTargetDpr = () => {
  if (typeof window === 'undefined') return 1;
  const rawDpr = window.devicePixelRatio || 1;
  const isMobile = window.innerWidth < 768 || /Android|iPhone|iPad/i.test(navigator.userAgent);
  if (isMobile) return Math.min(rawDpr, 1.2);
  return Math.min(rawDpr, 1.5);
};

export function CarViewer({ onInteract, hasInteracted, isHeroVisible = true }: CarViewerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        cursor: 'grab',
        touchAction: 'none',
      }}
      onMouseDown={(e) => {
        (e.currentTarget as HTMLElement).style.cursor = 'grabbing';
      }}
      onMouseUp={(e) => {
        (e.currentTarget as HTMLElement).style.cursor = 'grab';
      }}
    >
      <Canvas
        frameloop={isHeroVisible ? 'always' : 'never'}
        shadows
        dpr={getTargetDpr()}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.05,
        }}
        camera={{
          fov: 38,
          near: 0.1,
          far: 80,
          position: [-3.2, 1.8, 6.6],
        }}
        onCreated={() => setIsLoaded(true)}
      >
        <CarScene onUserInteract={onInteract} />
      </Canvas>

      {/* Loading Overlay */}
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#050505',
            color: '#888',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            zIndex: 10,
          }}
        >
          INITIALIZING TELEMETRY // 3D CAR
        </div>
      )}
    </div>
  );
}
