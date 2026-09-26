import React, { useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768 || window.matchMedia('(max-width: 768px)').matches;
    }
    return false;
  });

  const [isDocumentVisible, setIsDocumentVisible] = useState(() => {
    return typeof document !== 'undefined' ? document.visibilityState === 'visible' : true;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768 || window.matchMedia('(max-width: 768px)').matches);
    };
    const handleVisibility = () => {
      setIsDocumentVisible(document.visibilityState === 'visible');
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const quality = getQualitySettings();

  return (
    <div
      className="car-viewer-stage"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        cursor: isMobile ? 'default' : 'grab',
        pointerEvents: isMobile ? 'none' : 'auto',
        touchAction: isMobile ? 'auto' : 'none',
      }}
      onMouseDown={(e) => {
        if (!isMobile) {
          (e.currentTarget as HTMLElement).style.cursor = 'grabbing';
        }
      }}
      onMouseUp={(e) => {
        if (!isMobile) {
          (e.currentTarget as HTMLElement).style.cursor = 'grab';
        }
      }}
    >
      <Canvas
        className="car-viewer-canvas"
        frameloop={isHeroVisible && isDocumentVisible ? 'always' : 'never'}
        shadows={isMobile ? false : quality.shadows}
        dpr={isMobile ? 1.0 : quality.dpr}
        gl={{
          antialias: isMobile ? false : quality.antialias,
          alpha: false,
          powerPreference: isMobile ? 'low-power' : 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.05,
        }}
        style={{
          pointerEvents: isMobile ? 'none' : 'auto',
          touchAction: isMobile ? 'auto' : 'none',
        }}
        camera={{
          fov: 38,
          near: 0.1,
          far: 80,
          position: [-3.2, 1.8, 6.6],
        }}
        onCreated={() => setIsLoaded(true)}
      >
        <CarScene onUserInteract={onInteract} isMobile={isMobile} />
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

      {/* Zero touch-capture guarantee on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .car-viewer-stage,
          .car-viewer-stage canvas {
            pointer-events: none !important;
            touch-action: auto !important;
            cursor: default !important;
          }
        }
      `}</style>
    </div>
  );
}
