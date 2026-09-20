import React, { useState } from 'react';
import { FileText, Clock, ArrowRight, Download, AlertTriangle } from 'lucide-react';
import { PIT_STOP_PROTOCOL_DATA } from '../../data/pitStopProtocolData';
import { PitStopTimelineModal } from './PitStopTimelineModal';

export function PitStopRulesAndTimeline() {
  const [isTimelineModalOpen, setIsTimelineModalOpen] = useState(false);
  const d = PIT_STOP_PROTOCOL_DATA;

  // Selected key rules for the compact card matching the reference design
  const compactRules = [
    'Team must have exactly 4 members.',
    'No prior F1 knowledge required.',
    'Each team gets a unique set of clues.',
    'Lifeline available (45 sec penalty if used).',
    'Rules may be updated — check the rulebook for full details.',
  ];

  return (
    <section
      id="rules-timeline"
      style={{
        width: '100%',
        maxWidth: '1320px',
        margin: '0 auto 80px auto',
        padding: '0 clamp(16px, 4vw, 40px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '24px',
        }}
      >
        {/* Left Card: KEY RULES */}
        <div
          style={{
            background: '#090a0e',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: 'clamp(28px, 4vw, 38px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <div>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '6px',
                  background: 'rgba(225, 6, 0, 0.08)',
                  border: '1px solid rgba(225, 6, 0, 0.28)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-red)',
                  flexShrink: 0,
                }}
              >
                <FileText size={22} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    margin: 0,
                    textTransform: 'uppercase',
                  }}
                >
                  KEY RULES
                </h3>
              </div>
            </div>

            {/* Bullets */}
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 28px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {compactRules.map((rule, idx) => (
                <li
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    lineHeight: 1.5,
                    color: '#B4B4BC',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-red)',
                      marginTop: '8px',
                      flexShrink: 0,
                    }}
                  />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card Footer Note & Download link */}
          <div
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: '#7E7E88',
                letterSpacing: '0.04em',
              }}
            >
              See the official rulebook for complete rules.
            </span>
            <a
              href={d.rulebookPdfUrl}
              download="PIT_STOP_PROTOCOL_RULEBOOK-finale.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: 'var(--accent-red)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <Download size={13} />
              <span>DOWNLOAD RULEBOOK</span>
            </a>
          </div>
        </div>

        {/* Right Card: EVENT TIMELINE */}
        <div
          style={{
            background: '#090a0e',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: 'clamp(28px, 4vw, 38px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <div>
            {/* Header with trigger */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '28px',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '6px',
                    background: 'rgba(225, 6, 0, 0.08)',
                    border: '1px solid rgba(225, 6, 0, 0.28)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-red)',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={22} />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    margin: 0,
                    textTransform: 'uppercase',
                  }}
                >
                  EVENT TIMELINE
                </h3>
              </div>

              <button
                onClick={() => setIsTimelineModalOpen(true)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--accent-red)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.70rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <span>VIEW DETAILED TIMELINE</span>
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Timeline Rows matching reference */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {/* Row 1 */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '16px',
                  paddingBottom: '18px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: 'var(--accent-red)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    8 OCT
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.70rem',
                      color: '#7E7E88',
                      letterSpacing: '0.04em',
                    }}
                  >
                    7–8 PM
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.98rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.02em',
                      marginBottom: '2px',
                    }}
                  >
                    Round 1 — Grid Qualifiers
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#7E7E88',
                      letterSpacing: '0.04em',
                    }}
                  >
                    (Online Assessment)
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '16px',
                  paddingBottom: '18px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: 'var(--accent-red)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    9 OCT
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.70rem',
                      color: '#7E7E88',
                      letterSpacing: '0.04em',
                    }}
                  >
                    10 – 11 PM
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.98rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.02em',
                      marginBottom: '2px',
                    }}
                  >
                    Round 2 — Pit Lane Pursuit
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#7E7E88',
                      letterSpacing: '0.04em',
                    }}
                  >
                    (Treasure Hunt)
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '16px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: 'var(--accent-red)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    9 OCT
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.70rem',
                      color: '#7E7E88',
                      letterSpacing: '0.04em',
                    }}
                  >
                    11:30 – 12:30 PM
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.98rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.02em',
                      marginBottom: '2px',
                    }}
                  >
                    Round 3 — Blindfolded Pit Walk
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#7E7E88',
                      letterSpacing: '0.04em',
                    }}
                  >
                    (Final Round)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Organizer verification notice */}
          <div
            style={{
              marginTop: '20px',
              padding: '8px 12px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderLeft: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <AlertTriangle size={13} style={{ color: '#888888', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.67rem',
                color: '#7E7E88',
                letterSpacing: '0.02em',
              }}
            >
              Exact schedule timings reflect the official rulebook PDF.
            </span>
          </div>
        </div>
      </div>

      {/* Detailed Modal Triggered by Button */}
      <PitStopTimelineModal
        isOpen={isTimelineModalOpen}
        onClose={() => setIsTimelineModalOpen(false)}
      />
    </section>
  );
}
