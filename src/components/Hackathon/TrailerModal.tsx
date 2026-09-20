import React from 'react';
import { X, Film, Play } from 'lucide-react';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrailerModal({ isOpen, onClose }: TrailerModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 5, 8, 0.92)',
        backdropFilter: 'blur(16px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          background: '#090a0d',
          border: '1px solid rgba(225, 6, 0, 0.45)',
          borderRadius: '8px',
          padding: '24px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(225, 6, 0, 0.2)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: 'none',
            color: '#AAAAAA',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
        >
          <X size={16} />
        </button>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.64rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: 'var(--accent-red)',
            marginBottom: '8px',
          }}
        >
          TEASER // HARDWARE HACKATHON
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-racing)',
            fontSize: '1.35rem',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: '16px',
          }}
        >
          OFFICIAL TRAILER RELEASING SOON
        </h3>

        {/* Video Player Container (Plays nexus.mp4 teaser) */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            backgroundColor: '#000000',
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '18px',
          }}
        >
          <video
            src="/nexus.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#888888',
            }}
          >
            The dedicated event trailer will premiere across official channels.
          </div>
          <button onClick={onClose} className="btn-racing-secondary" style={{ padding: '8px 18px', fontSize: '0.72rem' }}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
