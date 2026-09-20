import React from 'react';
import { X, Calendar, Clock, MapPin, Bell } from 'lucide-react';
import { HARDWARE_HACKATHON_DATA } from '../../data/hardwareHackathonData';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 5, 8, 0.88)',
        backdropFilter: 'blur(16px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          background: 'linear-gradient(135deg, #101116 0%, #090a0d 100%)',
          border: '1px solid rgba(225, 6, 0, 0.45)',
          borderRadius: '8px',
          padding: '28px 24px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(225, 6, 0, 0.25)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
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
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
        >
          <X size={16} />
        </button>

        {/* Tag */}
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
          {HARDWARE_HACKATHON_DATA.pitStop} // OFFICIAL NOTICE
        </div>

        {/* Heading */}
        <h3
          style={{
            fontFamily: 'var(--font-racing)',
            fontSize: '1.45rem',
            fontWeight: 900,
            color: '#FFFFFF',
            letterSpacing: '0.04em',
            lineHeight: 1.15,
            marginBottom: '12px',
          }}
        >
          REGISTRATION LINK
          <br />
          <span style={{ color: 'var(--accent-red)' }}>COMING SOON</span>
        </h3>

        {/* Message */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.84rem',
            lineHeight: 1.5,
            color: '#BBBBC4',
            marginBottom: '20px',
          }}
        >
          Official portal registrations and problem statement pre-briefs for the{' '}
          <strong style={{ color: '#FFFFFF' }}>Hardware Hackathon</strong> will open shortly.
          Keep your telemetry sensors primed and teams ready.
        </p>

        {/* Event Quick Snapshot */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '4px',
            padding: '12px 14px',
            marginBottom: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#9E9EA8',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={13} style={{ color: 'var(--accent-red)' }} />
            <span>{HARDWARE_HACKATHON_DATA.date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={13} style={{ color: 'var(--accent-red)' }} />
            <span>{HARDWARE_HACKATHON_DATA.time}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={13} style={{ color: 'var(--accent-red)' }} />
            <span>{HARDWARE_HACKATHON_DATA.venue}</span>
          </div>
        </div>

        {/* Close CTA */}
        <button
          onClick={onClose}
          className="btn-racing-primary"
          style={{
            width: '100%',
            justifyContent: 'center',
            padding: '12px 20px',
            fontSize: '0.78rem',
          }}
        >
          <span>CLOSE</span>
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
