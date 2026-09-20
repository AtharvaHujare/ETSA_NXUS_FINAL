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

      {/* 4 Circular Photos in a Row matching reference */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
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
              {/* Circular Photo (target approx 64-80px in card, responsive) */}
              <div
                style={{
                  width: 'clamp(58px, 6vw, 76px)',
                  height: 'clamp(58px, 6vw, 76px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: isHovered
                    ? '2px solid var(--accent-red)'
                    : '1.5px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: isHovered
                    ? '0 0 16px rgba(225, 6, 0, 0.5)'
                    : '0 4px 12px rgba(0, 0, 0, 0.4)',
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
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    display: 'block',
                  }}
                />
              </div>

              {/* Coordinator Name */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  color: isHovered ? '#FFFFFF' : '#D0D0D8',
                  lineHeight: 1.2,
                  transition: 'color 0.2s ease',
                }}
              >
                {coordinator.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
