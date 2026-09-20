import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { HeroContent } from './HeroContent';
import { CinematicVideoModal } from './CinematicVideoModal';

// Lazy-load the heavy Three.js CarViewer so it does NOT block the intro video or initial bundle
const CarViewer = lazy(() =>
  import('./CarViewer/CarViewer').then((mod) => ({ default: mod.CarViewer }))
);

interface HeroProps {
  onExploreEvents: () => void;
  canLoad3D?: boolean;
}

export function Hero({ onExploreEvents, canLoad3D = true }: HeroProps) {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCarInteract = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '720px',
        overflow: 'hidden',
        backgroundColor: '#050505',
      }}
    >
      {/* 3D Interactive Car Scene Canvas - Lazy loaded after intro finishes */}
      {canLoad3D ? (
        <Suspense
          fallback={
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: '#050505',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.70rem',
                  letterSpacing: '0.22em',
                  color: 'rgba(255, 255, 255, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-red)',
                  }}
                />
                <span>STAGE CALIBRATION // 3D VEHICLE LOADING</span>
              </div>
            </div>
          }
        >
          <CarViewer
            onInteract={handleCarInteract}
            hasInteracted={hasInteracted}
            isHeroVisible={isHeroVisible}
          />
        </Suspense>
      ) : (
        /* Dark placeholder while intro video is running to keep 100% bandwidth on video */
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#050505',
          }}
        />
      )}

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
      <HeroContent
        hasInteracted={hasInteracted}
        onExploreEvents={onExploreEvents}
        onWatchTrailer={() => setIsTrailerOpen(true)}
      />

      {/* Cinematic Full-Screen Launch Trailer Modal */}
      <CinematicVideoModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
        videoSrc="/nexus_final.mp4"
      />

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

export default Hero;
