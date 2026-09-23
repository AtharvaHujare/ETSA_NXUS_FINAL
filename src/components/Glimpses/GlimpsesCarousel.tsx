import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const GLIMPSES_IMAGES = [
  { id: '01', src: '/glimpses/1.webp', label: 'MOMENT 01' },
  { id: '02', src: '/glimpses/2.webp', label: 'MOMENT 02' },
  { id: '03', src: '/glimpses/3.webp', label: 'MOMENT 03' },
  { id: '04', src: '/glimpses/4.webp', label: 'MOMENT 04' },
];

const AUTO_INTERVAL_MS = 4600;

export function GlimpsesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressPctRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());
  const rafRef = useRef<number | null>(null);

  // Preload all 4 optimized WebP images on mount
  useEffect(() => {
    GLIMPSES_IMAGES.forEach((img) => {
      const preloadImg = new Image();
      preloadImg.src = img.src;
    });
  }, []);

  const resetProgressBar = useCallback(() => {
    progressPctRef.current = 0;
    if (progressBarRef.current) {
      progressBarRef.current.style.width = '0%';
    }
  }, []);

  const handleNext = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % GLIMPSES_IMAGES.length);
    startTimeRef.current = Date.now();
    resetProgressBar();
  }, [resetProgressBar]);

  const handlePrev = useCallback(() => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + GLIMPSES_IMAGES.length) % GLIMPSES_IMAGES.length);
    startTimeRef.current = Date.now();
    resetProgressBar();
  }, [resetProgressBar]);

  const handleSelect = useCallback((idx: number) => {
    setDirection(idx >= currentIndex ? 'next' : 'prev');
    setCurrentIndex(idx);
    startTimeRef.current = Date.now();
    resetProgressBar();
  }, [currentIndex, resetProgressBar]);

  const togglePlayPause = useCallback(() => {
    setIsPaused((prev) => !prev);
    startTimeRef.current = Date.now() - (progressPctRef.current / 100) * AUTO_INTERVAL_MS;
  }, []);

  // Smooth DOM-based Progress Bar & Auto-Advance loop (zero React re-renders per frame)
  useEffect(() => {
    if (isPaused) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    startTimeRef.current = Date.now() - (progressPctRef.current / 100) * AUTO_INTERVAL_MS;

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(100, (elapsed / AUTO_INTERVAL_MS) * 100);
      progressPctRef.current = pct;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${pct}%`;
      }

      if (elapsed >= AUTO_INTERVAL_MS) {
        handleNext();
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [currentIndex, isPaused, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, togglePlayPause]);

  const currentItem = GLIMPSES_IMAGES[currentIndex];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1240px',
        margin: '0 auto',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cinematic Main Viewport Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          minHeight: '340px',
          maxHeight: '75vh',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#070709',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 24px 70px rgba(0, 0, 0, 0.9), 0 0 40px rgba(225, 6, 0, 0.15)',
        }}
      >
        {/* Render all 4 images stacked for zero-flicker smooth transitions */}
        {GLIMPSES_IMAGES.map((img, idx) => {
          const isActive = idx === currentIndex;
          const isPrev = (idx === (currentIndex - 1 + GLIMPSES_IMAGES.length) % GLIMPSES_IMAGES.length);

          return (
            <div
              key={img.id}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: isActive ? 1 : 0,
                visibility: isActive || isPrev ? 'visible' : 'hidden',
                transform: isActive
                  ? 'scale(1.02) translate3d(0, 0, 0)'
                  : direction === 'next'
                  ? 'scale(0.96) translate3d(4%, 0, 0)'
                  : 'scale(0.96) translate3d(-4%, 0, 0)',
                transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: isActive ? 2 : 1,
              }}
            >
              <img
                src={img.src}
                alt={`NEXUS 2026 Glimpse ${img.id}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 35%',
                  display: 'block',
                  animation: isActive ? 'kenBurns 5s ease-out forwards' : 'none',
                }}
              />
            </div>
          );
        })}

        {/* Cinematic Vignette & Speed Lighting Gradients */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(5, 5, 7, 0.5) 0%, rgba(5, 5, 7, 0) 35%, rgba(5, 5, 7, 0.75) 100%)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 50%, transparent 60%, rgba(5, 5, 7, 0.6) 100%)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />

        {/* Top Left Badge: Telemetry / Lap Info */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '24px',
            zIndex: 4,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              background: 'rgba(5, 5, 7, 0.75)',
              border: '1px solid rgba(225, 6, 0, 0.45)',
              borderRadius: '20px',
              backdropFilter: 'blur(8px)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.66rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: '#FFFFFF',
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
            <span>NEXUS 2026 // LIVE REEL</span>
          </div>
        </div>

        {/* Top Right Counter: 01 / 04 */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '24px',
            zIndex: 4,
            background: 'rgba(5, 5, 7, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '4px',
            padding: '4px 12px',
            backdropFilter: 'blur(8px)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            fontWeight: 800,
            letterSpacing: '0.18em',
            color: '#FFFFFF',
          }}
        >
          <span style={{ color: 'var(--accent-red)' }}>{currentItem.id}</span>
          <span style={{ color: '#66666E', margin: '0 4px' }}>/</span>
          <span>04</span>
        </div>

        {/* Bottom Left: Subtle Quote / Subtitle */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '24px',
            zIndex: 4,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-racing)',
              fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '0.06em',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
              marginBottom: '2px',
            }}
          >
            MOMENTS CAPTURED BETWEEN LAPS
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.64rem',
              letterSpacing: '0.2em',
              color: 'var(--accent-red)',
              textTransform: 'uppercase',
            }}
          >
            PADDOCK ARCHIVE // PCCOE ET&T
          </div>
        </div>

        {/* Left & Right Click Triggers (Overlay arrows) */}
        <button
          onClick={handlePrev}
          aria-label="Previous Glimpse"
          style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 5,
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(5, 5, 7, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(6px)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-red)';
            e.currentTarget.style.backgroundColor = 'rgba(225, 6, 0, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.backgroundColor = 'rgba(5, 5, 7, 0.65)';
          }}
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Glimpse"
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 5,
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(5, 5, 7, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(6px)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-red)';
            e.currentTarget.style.backgroundColor = 'rgba(225, 6, 0, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.backgroundColor = 'rgba(5, 5, 7, 0.65)';
          }}
        >
          <ChevronRight size={22} />
        </button>

        {/* Dynamic Red Racing Progress Line across the bottom of viewport */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            zIndex: 6,
          }}
        >
          <div
            ref={progressBarRef}
            style={{
              height: '100%',
              width: '0%',
              backgroundColor: 'var(--accent-red)',
              boxShadow: '0 0 10px var(--accent-red)',
              willChange: 'width',
            }}
          />
        </div>
      </div>

      {/* Under-Carousel Controls Bar: Indicators & Play/Pause */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '18px',
          padding: '0 6px',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Lap Segment Indicators */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {GLIMPSES_IMAGES.map((img, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={img.id}
                onClick={() => handleSelect(idx)}
                aria-label={`Go to Glimpse ${img.id}`}
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: '6px 0',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    width: isSelected ? '42px' : '22px',
                    height: '3px',
                    borderRadius: '2px',
                    backgroundColor: isSelected ? 'var(--accent-red)' : 'rgba(255, 255, 255, 0.2)',
                    boxShadow: isSelected ? '0 0 10px var(--accent-red)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: isSelected ? '#FFFFFF' : '#6E6E78',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {img.id}
                </span>
              </button>
            );
          })}
        </div>

        {/* Minimal Controls: Pause/Play & Keyboard Hint */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={togglePlayPause}
            aria-label={isPaused ? 'Resume Auto-Play' : 'Pause Auto-Play'}
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '4px',
              padding: '6px 14px',
              color: isPaused ? 'var(--accent-red)' : '#D0D0D8',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.66rem',
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
              e.currentTarget.style.color = isPaused ? 'var(--accent-red)' : '#D0D0D8';
            }}
          >
            {isPaused ? <Play size={12} fill="currentColor" /> : <Pause size={12} fill="currentColor" />}
            <span>{isPaused ? 'RESUME LOOP' : 'PAUSE'}</span>
          </button>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.60rem',
              color: '#6E6E78',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
            className="keyboard-hint"
          >
            USE ← → / SPACE
          </span>
        </div>
      </div>

      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.04); }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: opacity 0.3s ease !important;
          }
        }
        @media (max-width: 600px) {
          .keyboard-hint { display: none; }
        }
      `}</style>
    </div>
  );
}
