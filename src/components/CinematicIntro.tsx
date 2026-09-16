import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  // Phase: 'belt-in' | 'grid-set' | 'video' | 'fading' | 'finished'
  const [phase, setPhase] = useState<'belt-in' | 'grid-set' | 'video' | 'fading' | 'finished'>(
    'belt-in'
  );
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Step 1: "BELT IN." -> "THE GRID IS SET." -> "PLAY VIDEO"
    const timer1 = setTimeout(() => {
      setPhase('grid-set');
    }, 1800);

    const timer2 = setTimeout(() => {
      setPhase('video');
    }, 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    };
  }, []);

  // When video phase starts, trigger video play
  useEffect(() => {
    if (phase === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Autoplay handled:', err);
        });
      }
    }
  }, [phase]);

  const handleSkipOrEnd = () => {
    if (phase === 'fading' || phase === 'finished') return;
    setPhase('fading');
    if (videoRef.current) {
      videoRef.current.pause();
    }
    transitionTimerRef.current = setTimeout(() => {
      setPhase('finished');
      onComplete();
    }, 1000); // 1000ms smooth cinematic fade
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  if (phase === 'finished') return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#000000',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: phase === 'fading' ? 0 : 1,
        transition: 'opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: phase === 'fading' ? 'none' : 'auto',
        overflow: 'hidden',
      }}
    >
      {/* STEP 1: Minimal Typography Screen */}
      {(phase === 'belt-in' || phase === 'grid-set') && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#000000',
          }}
        >
          {phase === 'belt-in' && (
            <div
              style={{
                fontFamily: 'var(--font-racing)',
                fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                letterSpacing: '0.35em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                textAlign: 'center',
                animation: 'cinematicFadeIn 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
              }}
            >
              BELT IN.
            </div>
          )}

          {phase === 'grid-set' && (
            <div
              style={{
                fontFamily: 'var(--font-racing)',
                fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                letterSpacing: '0.35em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                textAlign: 'center',
                animation: 'cinematicFadeIn 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
              }}
            >
              THE GRID IS SET.
            </div>
          )}
        </div>
      )}

      {/* STEP 2: Fullscreen Cinematic Video */}
      <video
        ref={videoRef}
        src="/nexus.mp4"
        playsInline
        muted={isMuted}
        onEnded={handleSkipOrEnd}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: phase === 'video' || phase === 'fading' ? 1 : 0,
          transition: 'opacity 700ms ease',
          backgroundColor: '#000000',
        }}
      />

      {/* Subtle SKIP INTRO Button in Top Right */}
      <div
        style={{
          position: 'absolute',
          top: '32px',
          right: 'clamp(24px, 4vw, 48px)',
          zIndex: 10000,
        }}
      >
        <button
          onClick={handleSkipOrEnd}
          style={{
            background: 'transparent',
            border: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            color: 'rgba(255, 255, 255, 0.65)',
            textTransform: 'uppercase',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            transition: 'color 0.25s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)')}
        >
          <span>SKIP INTRO</span>
          <span style={{ fontSize: '0.9rem' }}>→</span>
        </button>
      </div>

      {/* Subtle Audio Toggle in Bottom Right during video */}
      {(phase === 'video' || phase === 'fading') && (
        <button
          onClick={toggleSound}
          style={{
            position: 'absolute',
            bottom: '32px',
            right: 'clamp(24px, 4vw, 48px)',
            background: 'rgba(10, 10, 10, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            cursor: 'pointer',
            zIndex: 10000,
            backdropFilter: 'blur(8px)',
            transition: 'border-color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-red)')}
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)')
          }
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}

      <style>{`
        @keyframes cinematicFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
