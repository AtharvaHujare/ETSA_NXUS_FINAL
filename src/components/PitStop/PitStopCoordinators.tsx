import React from 'react';
import { PIT_STOP_PROTOCOL_DATA, type Coordinator } from '../../data/pitStopProtocolData';

export function PitStopCoordinators() {
  const { thirdYear, secondYear } = PIT_STOP_PROTOCOL_DATA.coordinators;

  const renderCoordinatorCard = (coordinator: Coordinator) => {
    return (
      <div
        key={coordinator.name}
        style={{
          background: '#090a0d',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '24px 20px',
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.4)';
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Profile Image with subtle red rim */}
        <div
          style={{
            width: '84px',
            height: '84px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(225, 6, 0, 0.4)',
            marginBottom: '16px',
            background: '#14151c',
            boxShadow: '0 0 15px rgba(225, 6, 0, 0.2)',
          }}
        >
          <img
            src={coordinator.image}
            alt={coordinator.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            onError={(e) => {
              // Fallback to initials if image fails
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>

        {/* Name */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.05rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            color: '#FFFFFF',
            marginBottom: '4px',
            textTransform: 'uppercase',
          }}
        >
          {coordinator.name}
        </div>

        {/* Year / Role Tag */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: 'var(--accent-red)',
            textTransform: 'uppercase',
          }}
        >
          {coordinator.year}
        </div>
      </div>
    );
  };

  return (
    <section
      id="coordinators"
      style={{
        width: '100%',
        maxWidth: '1320px',
        margin: '0 auto 80px auto',
        padding: '0 clamp(16px, 4vw, 40px)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
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
          EVENT CREW
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
          <span style={{ color: '#FFFFFF' }}>PIT LANE </span>
          <span style={{ color: 'var(--accent-red)' }}>COORDINATORS</span>
        </h2>
      </div>

      {/* Grid: 5 Coordinators (3 TY, 2 SY) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {thirdYear.map(renderCoordinatorCard)}
        {secondYear.map(renderCoordinatorCard)}
      </div>
    </section>
  );
}
