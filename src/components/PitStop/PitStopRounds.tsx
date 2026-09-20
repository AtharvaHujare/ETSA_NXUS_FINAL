import React from 'react';
import { Monitor, Map as MapIcon } from 'lucide-react';
import { PIT_STOP_PROTOCOL_DATA, type RoundInfo } from '../../data/pitStopProtocolData';

// Custom Traffic Cone Icon matching the reference image cone outline
function ConeIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 21h16" />
      <path d="m6 21 4.5-16.5a1.5 1.5 0 0 1 2.9 0L18 21" />
      <path d="m7.8 14.5 8.4 0" />
      <path d="m9.2 9.5 5.6 0" />
    </svg>
  );
}

export function PitStopRounds() {
  const d = PIT_STOP_PROTOCOL_DATA;

  const renderIcon = (type: RoundInfo['iconType']) => {
    switch (type) {
      case 'screen':
        return <Monitor size={26} />;
      case 'map':
        return <MapIcon size={26} />;
      case 'cone':
        return <ConeIcon size={26} />;
    }
  };

  return (
    <section
      id="rounds"
      style={{
        width: '100%',
        maxWidth: '1320px',
        margin: '0 auto 80px auto',
        padding: '0 clamp(16px, 4vw, 40px)',
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '36px' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: '#8A8A93',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          EVENT STRUCTURE
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4.4vw, 3.4rem)',
            fontWeight: 900,
            letterSpacing: '0.03em',
            lineHeight: 1.05,
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: '#FFFFFF' }}>THE </span>
          <span style={{ color: 'var(--accent-red)' }}>ROUNDS</span>
        </h2>
      </div>

      {/* 3-Column Rounds Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {d.rounds.map((round) => {
          return (
            <div
              key={round.number}
              style={{
                background: '#090a0d',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: 'clamp(28px, 3.5vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.7), 0 0 20px rgba(225, 6, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Top Accent Line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '32px',
                  height: '2px',
                  background: 'var(--accent-red)',
                }}
              />

              {/* Icon Container */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '6px',
                  background: 'rgba(225, 6, 0, 0.08)',
                  border: '1px solid rgba(225, 6, 0, 0.28)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-red)',
                  marginBottom: '24px',
                }}
              >
                {renderIcon(round.iconType)}
              </div>

              {/* Number and Title */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.2em',
                  color: 'var(--accent-red)',
                  marginBottom: '6px',
                }}
              >
                {round.number}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.38rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  margin: '0 0 4px 0',
                }}
              >
                {round.title}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  color: '#7E7E88',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                }}
              >
                {round.format}
              </div>

              {/* Bullets List */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {round.points.map((pt, pIdx) => (
                  <li
                    key={pIdx}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.90rem',
                      lineHeight: 1.5,
                      color: '#B0B0B8',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    <span
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-red)',
                        marginTop: '8px',
                        flexShrink: 0,
                      }}
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
