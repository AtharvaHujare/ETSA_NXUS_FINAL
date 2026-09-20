import React from 'react';
import { X, Clock, Calendar, AlertCircle } from 'lucide-react';
import { PIT_STOP_PROTOCOL_DATA } from '../../data/pitStopProtocolData';

interface PitStopTimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PitStopTimelineModal({ isOpen, onClose }: PitStopTimelineModalProps) {
  if (!isOpen) return null;

  const timeline = PIT_STOP_PROTOCOL_DATA.timeline;

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
          animation: 'fadeIn 0.2s ease-out',
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
              OFFICIAL RULEBOOK SCHEDULE
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
              DETAILED EVENT TIMELINE
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
            gap: '24px',
          }}
        >
          {timeline.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                gap: '20px',
                paddingBottom: '20px',
                borderBottom: idx < timeline.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
              }}
            >
              {/* Left Column: Date & Time */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'var(--accent-red)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginBottom: '4px',
                  }}
                >
                  <Calendar size={13} />
                  <span>{item.day}</span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    letterSpacing: '0.04em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Clock size={13} style={{ color: '#888888' }} />
                  <span>{item.time}</span>
                </div>
              </div>

              {/* Right Column: Title & Full PDF Description */}
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.08rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    margin: '0 0 6px 0',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem',
                    lineHeight: 1.55,
                    color: '#A8A8B0',
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>

                {item.organizerNote && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 8px',
                      background: 'rgba(255, 170, 0, 0.1)',
                      border: '1px solid rgba(255, 170, 0, 0.3)',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: '#FFB800',
                      marginTop: '8px',
                    }}
                  >
                    <AlertCircle size={12} />
                    <span>{item.organizerNote}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
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
            Source: Official Rulebook PDF
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
