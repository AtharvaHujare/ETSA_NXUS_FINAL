import React from 'react';
import { Play } from 'lucide-react';

interface HeroContentProps {
  hasInteracted: boolean;
  onExploreEvents: () => void;
  onWatchTrailer?: () => void;
}

export function HeroContent({ hasInteracted, onExploreEvents, onWatchTrailer }: HeroContentProps) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none', // Allow dragging the 3D car through the hero overlay
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(84px, 11vh, 120px) clamp(16px, 4vw, 64px) clamp(20px, 3vh, 48px)',
        zIndex: 10,
      }}
    >
      {/* Top Left Headline Content */}
      <div
        style={{
          maxWidth: '560px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {/* Presenter tag */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.68rem, 1vw, 0.85rem)',
            letterSpacing: '0.24em',
            color: '#909499',
            marginBottom: '10px',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          PCCOE ENTC PRESENTS
        </div>

        {/* Main Title: NEXUS */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.4rem, 9.2vw, 8.6rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '0.04em',
            color: '#FFFFFF',
            margin: '0 0 6px 0',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            textShadow: '0 4px 30px rgba(0, 0, 0, 0.7)',
          }}
        >
          <span>NE</span>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            X
            {/* The signature red racing slash through the X */}
            <span
              style={{
                position: 'absolute',
                top: '46%',
                left: '12%',
                width: '76%',
                height: 'clamp(6px, 1.2vw, 14px)',
                background: 'var(--accent-red)',
                transform: 'rotate(-40deg)',
                boxShadow: '0 0 16px var(--accent-red-glow)',
                borderRadius: '1px',
              }}
            />
          </span>
          <span>US</span>
        </h1>

        {/* Year: 2026 */}
        <div
          style={{
            fontFamily: 'var(--font-racing)',
            fontSize: 'clamp(2.0rem, 5vw, 4.8rem)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '0.18em',
            color: '#E0E0E0',
            marginBottom: '24px',
            textShadow: '0 2px 20px rgba(0,0,0,0.8)',
          }}
        >
          2026
        </div>

        {/* Subhead: WHERE TECHNOLOGY MEETS SPEED */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.78rem, 1.1vw, 0.95rem)',
            fontWeight: 500,
            letterSpacing: '0.24em',
            color: '#A0A4A8',
            lineHeight: 1.4,
            marginBottom: '36px',
            textTransform: 'uppercase',
          }}
        >
          WHERE TECHNOLOGY
          <br />
          MEETS SPEED
        </p>

        {/* Explore Events & Watch Trailer CTA Buttons */}
        <div style={{ pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <button
            onClick={onExploreEvents}
            className="btn-racing-primary"
            style={{
              padding: '14px 32px',
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
            }}
          >
            <span>EXPLORE EVENTS</span>
            <span className="btn-arrow">→</span>
          </button>

          <button
            onClick={onWatchTrailer}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 24px',
              background: 'rgba(15, 15, 18, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '2px',
              color: '#FFFFFF',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-red)';
              e.currentTarget.style.backgroundColor = 'rgba(225, 6, 0, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.backgroundColor = 'rgba(15, 15, 18, 0.75)';
            }}
          >
            <Play size={11} fill="#FFFFFF" />
            <span>WATCH TRAILER</span>
          </button>
        </div>
      </div>

      {/* Middle Center/Right: Drag to Rotate Hint */}
      <div
        style={{
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          opacity: hasInteracted ? 0 : 0.85,
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#FFFFFF',
            fontSize: '0.9rem',
          }}
        >
          <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>←</span>
          <div
            style={{
              width: '14px',
              height: '24px',
              border: '1.5px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '4px',
            }}
          >
            <div
              style={{
                width: '3px',
                height: '5px',
                background: '#FFFFFF',
                borderRadius: '2px',
              }}
            />
          </div>
          <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>→</span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.66rem',
            letterSpacing: '0.22em',
            color: '#AAAAAA',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          DRAG TO ROTATE
        </span>
      </div>

      {/* Bottom Bar: Date & Venue (Left) and Motto (Right) */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
        }}
      >
        {/* Bottom Left: Date & Venue */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-racing)',
              fontSize: 'clamp(0.85rem, 1.1vw, 1.05rem)',
              letterSpacing: '0.2em',
              color: '#F0F0F0',
              fontWeight: 600,
              marginBottom: '4px',
            }}
          >
            12 — 14 MAR 2026
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.72rem, 0.9vw, 0.82rem)',
              letterSpacing: '0.24em',
              color: '#888888',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            PUNE, INDIA
          </div>

          {/* Vertical SCROLL Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.64rem',
              letterSpacing: '0.25em',
              color: '#666666',
            }}
          >
            <span>SCROLL</span>
            <div
              style={{
                width: '1px',
                height: '24px',
                background: 'rgba(255, 255, 255, 0.3)',
              }}
            />
          </div>
        </div>

        {/* Center / Right Pit Wall Typography (as seen in reference image) */}
        <div
          className="pitwall-motto"
          style={{
            textAlign: 'right',
            maxWidth: '240px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-racing)',
              fontSize: '0.78rem',
              letterSpacing: '0.24em',
              color: '#AAAAAA',
              lineHeight: 1.5,
              textTransform: 'uppercase',
            }}
          >
            A BIGGER
            <br />
            <span style={{ color: '#FFFFFF' }}>TOMORROW</span>
          </div>
          <div
            style={{
              width: '28px',
              height: '2px',
              background: 'var(--accent-red)',
              marginLeft: 'auto',
              marginTop: '6px',
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pitwall-motto {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
