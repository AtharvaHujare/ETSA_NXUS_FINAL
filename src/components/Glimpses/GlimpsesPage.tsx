import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { GlimpsesCarousel } from './GlimpsesCarousel';

interface GlimpsesPageProps {
  onBackToHome: () => void;
}

export function GlimpsesPage({ onBackToHome }: GlimpsesPageProps) {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#050507',
        color: '#FFFFFF',
        paddingTop: '96px',
        paddingBottom: '80px',
        overflowX: 'hidden',
      }}
    >
      {/* Background Racing Atmosphere Lines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '420px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(225, 6, 0, 0.12) 0%, rgba(5, 5, 7, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Navigation / Back Button */}
        <div style={{ marginBottom: '32px' }}>
          <button
            onClick={onBackToHome}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '4px',
              padding: '8px 16px',
              color: '#D0D0D8',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-red)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.color = '#D0D0D8';
            }}
          >
            <ArrowLeft size={14} />
            <span>BACK TO HOME</span>
          </button>
        </div>

        {/* Hero Title & Subtitle */}
        <div style={{ marginBottom: '36px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: 'var(--accent-red)',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-red)',
                boxShadow: '0 0 8px var(--accent-red)',
              }}
            />
            <span>PADDOCK REEL</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
              fontWeight: 900,
              letterSpacing: '0.04em',
              lineHeight: 0.95,
              color: '#FFFFFF',
              margin: '0 0 12px 0',
              textTransform: 'uppercase',
            }}
          >
            GLIMPSES
          </h1>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
              letterSpacing: '0.22em',
              color: '#A0A0AA',
              textTransform: 'uppercase',
            }}
          >
            NEXUS 2026 // MOMENTS IN MOTION
          </div>
        </div>

        {/* Immediate Cinematic Visual Reel (4 photos continuous loop) */}
        <GlimpsesCarousel />
      </div>
    </div>
  );
}
