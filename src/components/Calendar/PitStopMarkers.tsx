import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import { trackSpline } from './trackPath';
import { PIT_STOPS, type PitStop } from '../../data/calendarData';

interface PitStopMarkersProps {
  activeStopId: number;
  onSelectStop: (stop: PitStop) => void;
}

export function PitStopMarkers({ activeStopId, onSelectStop }: PitStopMarkersProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <group>
      {PIT_STOPS.map((stop) => {
        const point = trackSpline.getPointAt(stop.trackProgress);
        const isActive = activeStopId === stop.id;
        const isHovered = hoveredId === stop.id;

        // Position slightly elevated above track surface
        const markerPos: [number, number, number] = [point.x, point.y + 0.1, point.z];

        return (
          <group key={stop.id} position={markerPos}>
            {/* 1. Track Ground Circular Glowing Pad */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
              <circleGeometry args={[isActive ? 1.4 : 0.95, 32]} />
              <meshBasicMaterial
                color={isActive ? '#FF1100' : '#881100'}
                transparent
                opacity={isActive ? 0.85 : 0.45}
              />
            </mesh>

            {/* Inner Ring */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]}>
              <ringGeometry args={[0.35, 0.48, 32]} />
              <meshBasicMaterial
                color={isActive ? '#FFFFFF' : '#E10600'}
                transparent
                opacity={0.9}
              />
            </mesh>

            {/* 2. Vertical Light Beacon Spire */}
            <mesh position={[0, 1.2, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 2.4, 8]} />
              <meshBasicMaterial
                color={isActive ? '#FF2200' : '#FFFFFF'}
                transparent
                opacity={isActive ? 0.9 : 0.4}
              />
            </mesh>

            {/* Glowing Bulb at top of pin */}
            <mesh position={[0, 2.4, 0]}>
              <sphereGeometry args={[0.16, 16, 16]} />
              <meshStandardMaterial
                color={isActive ? '#FF0011' : '#FFFFFF'}
                emissive={isActive ? '#FF1100' : '#888888'}
                emissiveIntensity={isActive ? 4.0 : 1.5}
              />
            </mesh>

            {/* Dynamic Local Light */}
            {isActive && (
              <pointLight position={[0, 1.8, 0]} color="#FF1A00" intensity={4} distance={6} />
            )}

            {/* 3. Sleek Editorial HTML Marker Badge (Reference Image Match) */}
            <Html
              position={[0, 2.8, 0]}
              center
              distanceFactor={38}
              zIndexRange={[10, 50]}
              style={{
                pointerEvents: 'auto',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectStop(stop);
                }}
                onMouseEnter={() => setHoveredId(stop.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  background: isActive
                    ? 'rgba(12, 12, 16, 0.92)'
                    : isHovered
                    ? 'rgba(18, 18, 22, 0.85)'
                    : 'rgba(8, 8, 10, 0.72)',
                  border: isActive
                    ? '1px solid #E10600'
                    : isHovered
                    ? '1px solid rgba(255, 255, 255, 0.3)'
                    : '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: isActive
                    ? '0 0 20px rgba(225, 6, 0, 0.45)'
                    : '0 4px 14px rgba(0, 0, 0, 0.6)',
                  padding: '6px 12px 6px 10px',
                  borderRadius: '2px',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isHovered || isActive ? 'scale(1.08)' : 'scale(1.0)',
                  whiteSpace: 'nowrap',
                }}
              >
                {/* Active Red Dot Indicator */}
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#FF1100' : '#888888',
                    boxShadow: isActive ? '0 0 8px #FF1100' : 'none',
                    marginTop: '5px',
                    flexShrink: 0,
                  }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {/* Category / Stop Header */}
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      color: isActive ? '#E10600' : '#8E8E93',
                      textTransform: 'uppercase',
                    }}
                  >
                    PIT STOP {stop.id}
                  </div>

                  {/* Main Event Name */}
                  <div
                    style={{
                      fontFamily: 'var(--font-racing)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.04em',
                      lineHeight: 1.1,
                    }}
                  >
                    {stop.name}
                  </div>

                  {/* Date Subtitle */}
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.60rem',
                      fontWeight: 500,
                      color: isActive ? '#FFFFFF' : '#888888',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {stop.dayLabel}
                  </div>
                </div>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}
