import React, { useState } from 'react';
import { CarViewer } from './CarViewer/CarViewer';
import { HeroContent } from './HeroContent';

interface HeroProps {
  onExploreEvents: () => void;
}

export function Hero({ onExploreEvents }: HeroProps) {
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleCarInteract = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '720px',
        overflow: 'hidden',
        backgroundColor: '#050505',
      }}
    >
      {/* 3D Interactive Car Scene Canvas */}
      <CarViewer onInteract={handleCarInteract} hasInteracted={hasInteracted} />

      {/* Atmospheric Vignette & Contrast Gradient to guarantee typography legibility */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `
            radial-gradient(circle at 20% 40%, rgba(5, 5, 5, 0.75) 0%, rgba(5, 5, 5, 0.2) 60%, transparent 100%),
            linear-gradient(to top, rgba(5, 5, 5, 0.85) 0%, transparent 22%),
            linear-gradient(to bottom, rgba(5, 5, 5, 0.7) 0%, transparent 16%)
          `,
        }}
      />

      {/* Left Wall Motto in the background pit-lane (as seen in reference) */}
      <div
        className="garage-wall-motto"
        style={{
          position: 'absolute',
          top: '38%',
          right: '48%',
          pointerEvents: 'none',
          textAlign: 'left',
          zIndex: 5,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-racing)',
            fontSize: '0.72rem',
            letterSpacing: '0.28em',
            color: 'rgba(255, 255, 255, 0.22)',
            lineHeight: 1.6,
            textTransform: 'uppercase',
          }}
        >
          IDEAS
          <br />
          ENGINEER
          <br />
          TOMORROW
        </div>
        <div
          style={{
            width: '20px',
            height: '2px',
            background: 'var(--accent-red)',
            marginTop: '8px',
            opacity: 0.6,
          }}
        />
      </div>

      {/* UI Overlay */}
      <HeroContent hasInteracted={hasInteracted} onExploreEvents={onExploreEvents} />

      <style>{`
        @media (max-width: 1024px) {
          .garage-wall-motto {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
