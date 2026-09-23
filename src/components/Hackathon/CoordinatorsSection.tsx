import React, { useState } from 'react';
import { HARDWARE_HACKATHON_DATA, type HackathonCoordinator } from '../../data/hardwareHackathonData';

export function CoordinatorsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { coordinators } = HARDWARE_HACKATHON_DATA;

  return (
    <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: 'var(--accent-red)',
            textTransform: 'uppercase',
          }}
        >
          COORDINATORS
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.60rem',
            color: '#8A8A93',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          ORGANIZED BY ETSA, PCCOE
        </div>
      </div>

      {/* Circular Photos Grid */}
      <div
        className="hackathon-coords-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px 12px',
          alignItems: 'flex-start',
        }}
      >
        {coordinators.map((coordinator: HackathonCoordinator, idx: number) => {
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={coordinator.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              {/* Circular Photo (100–120px desktop, 84–100px mobile) */}
              <div
                style={{
                  width: 'clamp(84px, 8.5vw, 115px)',
                  height: 'clamp(84px, 8.5vw, 115px)',
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: isHovered
                    ? '2px solid var(--accent-red)'
                    : '2px solid rgba(225, 6, 0, 0.4)',
                  boxShadow: isHovered
                    ? '0 0 16px rgba(225, 6, 0, 0.5)'
                    : '0 0 12px rgba(225, 6, 0, 0.15)',
                  transition: 'all 0.25s ease',
                  transform: isHovered ? 'scale(1.05)' : 'scale(1.0)',
                  backgroundColor: '#121318',
                  marginBottom: '8px',
                  position: 'relative',
                }}
              >
                <img
                  src={coordinator.image}
                  alt={coordinator.name}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>

              {/* Coordinator Name */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  color: isHovered ? '#FFFFFF' : '#E0E0E6',
                  lineHeight: 1.25,
                  transition: 'color 0.2s ease',
                }}
              >
                {coordinator.name}
              </div>

              {/* Phone / Contact */}
              {coordinator.phone && (
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: 'var(--accent-red)',
                    letterSpacing: '0.08em',
                    marginTop: '3px',
                    fontWeight: 600,
                  }}
                >
                  {coordinator.phone}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @media (min-width: 768px) and (max-width: 1024px) {
          .hackathon-coords-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
