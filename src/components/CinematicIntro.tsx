import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
}

const AUDIO_PREF_KEY = 'nexus_intro_audio_pref';

function getStoredAudioPref(): 'sound_on' | 'sound_off' | null {
  try {
    const val = localStorage.getItem(AUDIO_PREF_KEY);
    if (val === 'sound_on' || val === 'sound_off') return val;
  } catch {
    // Ignore private browsing storage restrictions
  }
  return null;
}

function setStoredAudioPref(pref: 'sound_on' | 'sound_off') {
  try {
    localStorage.setItem(AUDIO_PREF_KEY, pref);
  } catch {
    // Ignore private browsing storage restrictions
  }
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  // Phase sequence: 'belt-in' (teaser 1) -> 'grid-set' (teaser 2) -> 'video' -> 'fading' -> 'finished'
  const [phase, setPhase] = useState<'belt-in' | 'grid-set' | 'video' | 'fading' | 'finished'>(
    'belt-in'
  );

  // Application default state: SOUND ON (muted = false by default)
  // Only start muted if user has explicitly chosen 'sound_off' previously
  const [isMuted, setIsMuted] = useState<boolean>(() => getStoredAudioPref() === 'sound_off');

  const userManuallyMuted = useRef<boolean>(getStoredAudioPref() === 'sound_off');
  const videoRef = useRef<HTMLVideoElement>(null);
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Black Teaser Timing:
  // 0ms - 1400ms: "BELT IN."
  // 1400ms - 2800ms: "THE GRID IS SET."
  // 2800ms+: Video phase
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase('grid-set');
    }, 1400);

    const timer2 = setTimeout(() => {
      setPhase('video');
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    };
  }, []);

  // Cleanup: guarantee video and audio are immediately silenced upon unmounting
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.muted = true;
      }
    };
  }, []);

  // When entering video phase: attempt to autoplay WITH AUDIO (muted = false)
  useEffect(() => {
    if (phase === 'video' && videoRef.current) {
      const video = videoRef.current;
      video.currentTime = 0;

      if (isMuted) {
        // User previously chose mute
        video.muted = true;
        video.play().catch(() => {});
      } else {
        // Default: start with audio enabled!
        video.muted = false;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            // If browser blocks unmuted autoplay without prior interaction,
            // play video immediately so visuals are not stalled, while keeping
            // audio ready to unlock on first document interaction.
            console.warn('Browser autoplay with sound restricted until user interaction:', err);
            video.muted = true;
            video.play().catch(() => {});
          });
        }
      }
    }
  }, [phase]);

  // If browser restricted initial unmuted autoplay, unmute automatically
  // on any first visitor interaction (click / keydown / touch) as long as user hasn't explicitly muted
  useEffect(() => {
    const unlockSoundOnInteraction = () => {
      if (!userManuallyMuted.current && videoRef.current && videoRef.current.muted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    };

    window.addEventListener('click', unlockSoundOnInteraction, { capture: true, once: true });
    window.addEventListener('keydown', unlockSoundOnInteraction, { capture: true, once: true });
    window.addEventListener('touchstart', unlockSoundOnInteraction, { capture: true, once: true });

    return () => {
      window.removeEventListener('click', unlockSoundOnInteraction, { capture: true });
      window.removeEventListener('keydown', unlockSoundOnInteraction, { capture: true });
      window.removeEventListener('touchstart', unlockSoundOnInteraction, { capture: true });
    };
  }, []);

  // Watchdog: If video encounters an error or hangs, transition gracefully to landing page
  const handleVideoError = () => {
    console.warn('Video failed to load, transitioning to landing page.');
    handleSkipOrEnd();
  };

  // Called when video ends or when user skips
  const handleSkipOrEnd = () => {
    if (phase === 'fading' || phase === 'finished') return;
    setPhase('fading');

    // Immediately stop video and mute audio: no sound should bleed into the landing page
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
    }

    transitionTimerRef.current = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.muted = true;
        videoRef.current.currentTime = 0;
      }
      setPhase('finished');
      onComplete();
    }, 600); // Smooth 600ms cinematic fade
  };

  // Single Mute Button toggle: 🔊 SOUND ON <-> 🔇 SOUND OFF
  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);

      if (nextMuted) {
        userManuallyMuted.current = true;
        setStoredAudioPref('sound_off');
      } else {
        userManuallyMuted.current = false;
        setStoredAudioPref('sound_on');
      }
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
        transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: phase === 'fading' ? 'none' : 'auto',
        overflow: 'hidden',
      }}
    >
      {/* STEP 1: Minimal Typography Black Teaser */}
      {(phase === 'belt-in' || phase === 'grid-set') && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
                animation: 'cinematicFadeIn 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
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
                animation: 'cinematicFadeIn 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
              }}
            >
              THE GRID IS SET.
            </div>
          )}
        </div>
      )}

      {/* STEP 2: Fullscreen Cinematic Video (Autoplay WITH AUDIO by default) */}
      <video
        ref={videoRef}
        src="/nexus_final.mp4"
        poster="/nexus_poster.jpg"
        preload="auto"
        autoPlay
        playsInline
        muted={isMuted}
        onEnded={handleSkipOrEnd}
        onError={handleVideoError}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: phase === 'video' || phase === 'fading' ? 1 : 0,
          transition: 'opacity 600ms ease',
          backgroundColor: '#000000',
        }}
      />

      {/* Top Right: SKIP INTRO Button */}
      <div
        style={{
          position: 'absolute',
          top: '32px',
          right: 'clamp(24px, 4vw, 48px)',
          zIndex: 10010,
        }}
      >
        <button
          onClick={handleSkipOrEnd}
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            color: 'rgba(255, 255, 255, 0.8)',
            textTransform: 'uppercase',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '2px',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.borderColor = 'var(--accent-red)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
          }}
        >
          <span>SKIP INTRO</span>
          <span style={{ fontSize: '0.9rem' }}>→</span>
        </button>
      </div>

      {/* Bottom Right: ONE Small Mute/Unmute Audio Control (Default: 🔊 SOUND ON) */}
      {(phase === 'video' || phase === 'fading') && (
        <button
          onClick={handleToggleMute}
          style={{
            position: 'absolute',
            bottom: '32px',
            right: 'clamp(24px, 4vw, 48px)',
            zIndex: 10010,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(10, 10, 12, 0.75)',
            backdropFilter: 'blur(10px)',
            border: isMuted
              ? '1px solid rgba(255, 255, 255, 0.15)'
              : '1px solid rgba(225, 6, 0, 0.55)',
            borderRadius: '24px',
            padding: '8px 16px',
            color: isMuted ? '#8E8E93' : '#FFFFFF',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-red)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = isMuted
              ? 'rgba(255, 255, 255, 0.15)'
              : 'rgba(225, 6, 0, 0.55)';
            e.currentTarget.style.color = isMuted ? '#8E8E93' : '#FFFFFF';
          }}
          aria-label={isMuted ? 'Muted - click to unmute' : 'Audio On - click to mute'}
        >
          {isMuted ? (
            <VolumeX size={15} color="#8E8E93" />
          ) : (
            <Volume2 size={15} color="var(--accent-red)" />
          )}
          <span>{isMuted ? 'SOUND OFF' : 'SOUND ON'}</span>
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

export default CinematicIntro;
