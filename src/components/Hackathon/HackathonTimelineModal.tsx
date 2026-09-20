import React from 'react';
import { X, Clock, Calendar } from 'lucide-react';
import { HARDWARE_HACKATHON_DATA } from '../../data/hardwareHackathonData';

interface HackathonTimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HackathonTimelineModal({ isOpen, onClose }: HackathonTimelineModalProps) {
  if (!isOpen) return null;

  const { timeline, date } = HARDWARE_HACKATHON_DATA;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
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
          maxWidth: '720px',
          maxHeight: '85vh',
          backgroundColor: '#0c0d12',
          border: '1px solid rgba(225, 6, 0, 0.35)',
          borderRadius: '8px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(225, 6, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#090a0d',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--accent-red)',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}
            >
              OFFICIAL EVENT SCHEDULE // 8 OCT 2026
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: 0,
                textTransform: 'uppercase',
              }}
            >
              FORMULA HARDWARE TIMELINE
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8A8A93',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = 'var(--accent-red)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#8A8A93';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body with Timeline List */}
        <div
          style={{
            padding: '28px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {timeline.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '170px 1fr',
                gap: '20px',
                paddingBottom: '16px',
                borderBottom: idx < timeline.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.80rem',
                    fontWeight: 700,
                    color: item.isEvaluation ? 'var(--accent-red)' : '#FFFFFF',
                    letterSpacing: '0.04em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Clock size={14} style={{ color: item.isEvaluation ? 'var(--accent-red)' : '#888888' }} />
                  <span>{item.time}</span>
                </div>
              </div>

              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.02rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: item.isEvaluation ? '#FFFFFF' : item.isBreak ? '#A0A0A8' : '#EEEEEE',
                    margin: '0 0 4px 0',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.title}
                </h4>
                {item.description && (
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.86rem',
                      lineHeight: 1.5,
                      color: '#90909A',
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '16px 28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            background: '#090a0d',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.70rem',
              color: '#777777',
            }}
          >
            Source: Rulebook_FORMULA_HARDWARE 1.pdf
          </span>
          <button
            onClick={onClose}
            className="btn-racing-primary"
            style={{
              padding: '8px 20px',
              fontSize: '0.74rem',
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}
