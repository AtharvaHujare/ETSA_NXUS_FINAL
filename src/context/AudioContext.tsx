import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioContextType {
  isPlaying: boolean;
  isMuted: boolean;
  toggleAudio: () => void;
  playAudio: () => void;
  pauseAudio: () => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const hasInteractedRef = useRef(false);

  // Initialize single global audio instance
  useEffect(() => {
    // Encode spaces in audio filename for universal browser compatibility
    const audioSrc = encodeURI('/Formula 1 - Brian Tyler.mp3');
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = 0.55;
    audio.preload = 'auto';
    audioRef.current = audio;

    // Track play/pause state from audio events
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    // Attempt autoplay gracefully per modern browser standards
    const startPlayback = () => {
      if (hasInteractedRef.current) return;
      hasInteractedRef.current = true;

      if (audioRef.current && !audioRef.current.paused) return;

      audio.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      }).catch(() => {
        // Browser blocked initial unmuted autoplay - keep ready for first user gesture
        setIsPlaying(false);
      });
    };

    // Try playing immediately
    const initialPlayPromise = audio.play();
    if (initialPlayPromise !== undefined) {
      initialPlayPromise
        .then(() => {
          setIsPlaying(true);
          hasInteractedRef.current = true;
        })
        .catch(() => {
          // Listen for first document interaction to unlock audio
          const unlockEvents = ['click', 'pointerdown', 'keydown', 'touchstart'];
          const unlockHandler = () => {
            startPlayback();
            unlockEvents.forEach((evt) => window.removeEventListener(evt, unlockHandler));
          };
          unlockEvents.forEach((evt) => window.addEventListener(evt, unlockHandler, { once: true }));
        });
    }

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.pause();
    };
  }, []);

  const toggleAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      }).catch((err) => {
        console.warn('Audio play error:', err);
      });
    } else {
      audio.pause();
      setIsPlaying(false);
      setIsMuted(true);
    }
  }, []);

  const playAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().then(() => {
      setIsPlaying(true);
      setIsMuted(false);
    }).catch((err) => console.warn(err));
  }, []);

  const pauseAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
    setIsMuted(true);
  }, []);

  return (
    <AudioContext.Provider value={{ isPlaying, isMuted, toggleAudio, playAudio, pauseAudio }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}

// Persistent, sleek Motorsport Audio Toggle Button
export function MusicControlButton({ className = '' }: { className?: string }) {
  const { isPlaying, toggleAudio } = useAudio();

  return (
    <button
      onClick={toggleAudio}
      className={className}
      aria-label={isPlaying ? 'Mute Music' : 'Play Music'}
      title={isPlaying ? 'Mute Formula 1 Theme' : 'Play Formula 1 Theme'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 14px',
        background: isPlaying ? 'rgba(225, 6, 0, 0.12)' : 'rgba(255, 255, 255, 0.04)',
        border: isPlaying ? '1px solid rgba(225, 6, 0, 0.45)' : '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '20px',
        color: isPlaying ? '#FFFFFF' : '#8A8A93',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        fontWeight: 700,
        letterSpacing: '0.14em',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        boxShadow: isPlaying ? '0 0 16px rgba(225, 6, 0, 0.25)' : 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-red)';
        e.currentTarget.style.color = '#FFFFFF';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = isPlaying
          ? 'rgba(225, 6, 0, 0.45)'
          : 'rgba(255, 255, 255, 0.12)';
        e.currentTarget.style.color = isPlaying ? '#FFFFFF' : '#8A8A93';
      }}
    >
      {/* Equalizer Wave / Icon */}
      {isPlaying ? (
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '12px' }}>
          <span className="eq-bar eq-bar-1" />
          <span className="eq-bar eq-bar-2" />
          <span className="eq-bar eq-bar-3" />
        </div>
      ) : (
        <VolumeX size={13} style={{ color: '#8A8A93' }} />
      )}

      <span>{isPlaying ? 'SOUND ON' : 'SOUND OFF'}</span>

      <style>{`
        .eq-bar {
          display: inline-block;
          width: 2.5px;
          background-color: var(--accent-red);
          border-radius: 1px;
          animation: eqPulse 1s ease-in-out infinite alternate;
        }
        .eq-bar-1 { height: 10px; animation-delay: 0.1s; }
        .eq-bar-2 { height: 14px; animation-delay: 0.35s; }
        .eq-bar-3 { height: 7px; animation-delay: 0.2s; }
        @keyframes eqPulse {
          0% { height: 4px; }
          100% { height: 13px; }
        }
      `}</style>
    </button>
  );
}
