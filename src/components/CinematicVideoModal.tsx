import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface CinematicVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
}

export function CinematicVideoModal({
  isOpen,
  onClose,
  videoSrc = '/nexus_final.mp4',
}: CinematicVideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Pause video when modal is closed
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    } else if (isOpen && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may require user interaction or muted depending on browser policy
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 5, 8, 0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px, 3vw, 40px)',
        animation: 'videoFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onClick={onClose}
    >
      {/* Top Bar with Title and Clean Close Button */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-red)',
              boxShadow: '0 0 10px var(--accent-red)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: '#F0F0F0',
              textTransform: 'uppercase',
            }}
          >
            NEXUS 2026 // OFFICIAL LAUNCH TRAILER
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close trailer"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            color: '#FFFFFF',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-red)';
            e.currentTarget.style.borderColor = 'var(--accent-red)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
          }}
        >
          <X size={18} />
        </button>
      </div>

      {/* 16:9 Cinematic Video Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          maxHeight: '78vh',
          aspectRatio: '16 / 9',
          backgroundColor: '#000000',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid rgba(225, 6, 0, 0.45)',
          boxShadow: '0 24px 70px rgba(0, 0, 0, 0.95), 0 0 40px rgba(225, 6, 0, 0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          controls
          autoPlay
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            backgroundColor: '#000000',
            display: 'block',
          }}
        />
      </div>

      {/* Bottom Subtitle / Tagline */}
      <div
        style={{
          marginTop: '16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          letterSpacing: '0.24em',
          color: '#888888',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        WHERE TECHNOLOGY MEETS SPEED // PCCOE ENTC
      </div>

      <style>{`
        @keyframes videoFadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
