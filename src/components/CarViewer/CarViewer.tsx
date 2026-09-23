import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { CarScene } from './CarScene';

import { getQualitySettings } from '../../utils/qualityProfile';

interface CarViewerProps {
  onInteract?: () => void;
  hasInteracted?: boolean;
  isHeroVisible?: boolean;
}

export function CarViewer({ onInteract, isHeroVisible = true }: CarViewerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const quality = getQualitySettings();

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
        shadows={quality.shadows}
        dpr={quality.dpr}
        gl={{
          antialias: quality.antialias,
          alpha: false,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.05,
        }}
        style={{ touchAction: 'none' }}
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
