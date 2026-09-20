import React from 'react';
import { GlimpsesCarousel } from './GlimpsesCarousel';

export function GlimpsesSection() {
  return (
    <section
      id="glimpses"
      style={{
        position: 'relative',
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(255, 255, 255, 0.07)',
        padding: '120px 0 110px 0',
        overflow: 'hidden',
      }}
    >
      {/* Background Ambience */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '240px',
          background: 'radial-gradient(ellipse at center, rgba(225, 6, 0, 0.08) 0%, rgba(5, 5, 5, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '48px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '28px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div className="racing-tag" style={{ marginBottom: '12px' }}>
              VISUAL REEL // PADDOCK ARCHIVE
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                lineHeight: 1,
                color: '#FFFFFF',
                margin: 0,
              }}
            >
              GLIMPSES
            </h2>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              color: 'var(--accent-red)',
              fontWeight: 600,
            }}
          >
            NEXUS 2026 // MOMENTS IN MOTION
          </div>
        </div>

        {/* Cinematic Glimpses 4-Photo Continuous Loop */}
        <GlimpsesCarousel />
      </div>
    </section>
  );
}
