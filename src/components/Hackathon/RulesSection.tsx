import React from 'react';
import { FileText, Download, CheckCircle2 } from 'lucide-react';
import { HARDWARE_HACKATHON_DATA } from '../../data/hardwareHackathonData';

export function RulesSection() {
  const { keyRules, evaluationCriteria, rulebookPdfUrl } = HARDWARE_HACKATHON_DATA;

  return (
    <section
      style={{
        width: '100%',
        maxWidth: '1360px',
        margin: '56px auto 0 auto',
        padding: '0 clamp(16px, 3.5vw, 36px)',
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
            padding: 'clamp(24px, 3.5vw, 36px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
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
                <FileText size={20} />
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.64rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    color: 'var(--accent-red)',
                    textTransform: 'uppercase',
                  }}
                >
                  ESSENTIAL GUIDELINES
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
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

            {/* List */}
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 24px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {keyRules.map((rule, idx) => (
                <li
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.86rem',
                    lineHeight: 1.5,
                    color: '#B0B0B8',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
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

          {/* Card Footer: See official rulebook + Download button */}
          <div
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: '#7E7E88',
                letterSpacing: '0.04em',
              }}
            >
              SEE OFFICIAL RULEBOOK FOR COMPLETE RULES
            </span>

            <a
              href={rulebookPdfUrl}
              download="Rulebook_FORMULA_HARDWARE 1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.70rem',
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

        {/* Right Card: EVALUATION & JUDGING */}
        <div
          style={{
            background: '#090a0e',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: 'clamp(24px, 3.5vw, 36px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
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
                <CheckCircle2 size={20} />
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.64rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    color: 'var(--accent-red)',
                    textTransform: 'uppercase',
                  }}
                >
                  SCORING MATRIX
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    margin: 0,
                    textTransform: 'uppercase',
                  }}
                >
                  EVALUATION & JUDGING
                </h3>
              </div>
            </div>

            {/* Criteria Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {evaluationCriteria.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '170px 1fr',
                    gap: '12px',
                    paddingBottom: '12px',
                    borderBottom: idx < evaluationCriteria.length - 1 ? '1px solid rgba(255, 255, 255, 0.04)' : 'none',
                    alignItems: 'baseline',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.84rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.criterion}
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.80rem',
                      lineHeight: 1.4,
                      color: '#A0A0A8',
                    }}
                  >
                    {item.focus}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '16px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: '#7E7E88',
              letterSpacing: '0.04em',
            }}
          >
            Judges evaluate working subsystems, real-time live demonstrations, and technical defense.
          </div>
        </div>
      </div>
    </section>
  );
}
