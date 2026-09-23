import React from 'react';
import { Calendar, MapPin, Users, Tag, Download, ArrowRight, ArrowLeft } from 'lucide-react';
import { PCCOE_GOT_TALENT_DATA } from '../../data/pccoeGotTalentData';

interface TalentHeroProps {
  onRegisterClick?: () => void;
  onBackToEvents: () => void;
}

export function TalentHero({ onRegisterClick, onBackToEvents }: TalentHeroProps) {
  const d = PCCOE_GOT_TALENT_DATA;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '20px',
        paddingBottom: '40px',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Red Spotlight Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '20%',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(225, 6, 0, 0.14) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 clamp(16px, 3.5vw, 40px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Back Link */}
        <button
          onClick={onBackToEvents}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#8A8A94',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            padding: '4px 0',
            marginBottom: '24px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A94')}
        >
          <ArrowLeft size={14} />
          <span>BACK TO EVENTS</span>
        </button>

        {/* Hero Grid: Typography (Left) + Stage Image (Right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
            gap: 'clamp(32px, 5vw, 56px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column */}
          <div style={{ maxWidth: '640px' }}>
            {/* Pit Stop Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 14px',
                background: 'rgba(225, 6, 0, 0.12)',
                border: '1px solid rgba(225, 6, 0, 0.45)',
                borderRadius: '20px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.70rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: 'var(--accent-red)',
                marginBottom: '14px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-red)',
                  boxShadow: '0 0 8px var(--accent-red)',
                }}
              />
              <span>{d.pitStop}</span>
            </div>

            {/* Title: PCCOE GOT TALENT */}
            <h1
              style={{
                margin: '0 0 10px 0',
                lineHeight: 0.95,
                letterSpacing: '0.01em',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.8rem, 6.2vw, 5.0rem)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                PCCOE GOT
              </span>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-racing)',
                  fontSize: 'clamp(3.0rem, 6.5vw, 5.4rem)',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  color: 'var(--accent-red)',
                  textTransform: 'uppercase',
                  textShadow: '0 0 35px rgba(225, 6, 0, 0.45)',
                  letterSpacing: '0.04em',
                }}
              >
                TALENT
              </span>
            </h1>

            {/* Tagline */}
            <div
              style={{
                fontFamily: 'var(--font-racing)',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.18rem)',
                fontWeight: 700,
                letterSpacing: '0.22em',
                color: '#EEEEEE',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              {d.tagline}
            </div>

            {/* Event Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.96rem',
                lineHeight: 1.6,
                color: '#9E9EA6',
                marginBottom: '26px',
                maxWidth: '560px',
              }}
            >
              {d.heroDescription}
            </p>

            {/* 4 Metadata Badges (Matching Reference Image) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '14px',
                marginBottom: '32px',
              }}
            >
              {/* Date Box */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '10px 14px',
                  borderRadius: '4px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(225, 6, 0, 0.1)',
                    border: '1px solid rgba(225, 6, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-red)',
                    flexShrink: 0,
                  }}
                >
                  <Calendar size={17} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.80rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {d.dates}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: '#8A8A93',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {d.datesSubtitle}
                  </div>
                </div>
              </div>

              {/* Venue Box */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '10px 14px',
                  borderRadius: '4px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(225, 6, 0, 0.1)',
                    border: '1px solid rgba(225, 6, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-red)',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={17} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.80rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {d.venue}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: '#8A8A93',
                      letterSpacing: '0.04em',
                    }}
                  >
                    ({d.venueDetail})
                  </div>
                </div>
              </div>

              {/* Participation Box */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '10px 14px',
                  borderRadius: '4px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(225, 6, 0, 0.1)',
                    border: '1px solid rgba(225, 6, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-red)',
                    flexShrink: 0,
                  }}
                >
                  <Users size={17} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.80rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Solo / Group
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: '#8A8A93',
                      letterSpacing: '0.04em',
                    }}
                  >
                    All PCCOE Students
                  </div>
                </div>
              </div>

              {/* Registration Fee Box */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '10px 14px',
                  borderRadius: '4px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(225, 6, 0, 0.1)',
                    border: '1px solid rgba(225, 6, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-red)',
                    flexShrink: 0,
                  }}
                >
                  <Tag size={17} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.80rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {d.registrationFee}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: '#FF4444',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {d.registrationNote}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              {/* Register Button */}
              <a
                href="https://forms.gle/aSW1oNgAGfdZk4pM7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-racing-primary"
                style={{
                  padding: '14px 32px',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  boxShadow: '0 0 30px rgba(225, 6, 0, 0.45)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                }}
              >
                <span>REGISTER NOW</span>
                <span className="btn-arrow" style={{ fontSize: '1rem', fontWeight: 900 }}>→</span>
              </a>

              {/* Download Rulebook Button */}
              <a
                href={d.rulebookPdfUrl}
                download="Rulebook_PCCOE_GOT_TALENT.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '13px 26px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  borderRadius: '3px',
                  color: '#E0E0E0',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-red)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.backgroundColor = 'rgba(225, 6, 0, 0.08)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(225, 6, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                  e.currentTarget.style.color = '#E0E0E0';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Download size={15} style={{ color: 'var(--accent-red)' }} />
                <span>DOWNLOAD RULEBOOK</span>
              </a>
            </div>
          </div>

          {/* Right Column: Cinematic Stage Visual */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: '#070709',
              boxShadow: '0 24px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(225, 6, 0, 0.15)',
            }}
          >
            {/* Top Right Stencil Overlay */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                fontWeight: 600,
                letterSpacing: '0.24em',
                color: 'rgba(255, 255, 255, 0.45)',
                textAlign: 'right',
                lineHeight: 1.5,
                zIndex: 2,
                pointerEvents: 'none',
                textTransform: 'uppercase',
              }}
            >
              IDEAS
              <br />
              PEOPLE
              <br />
              CULTURE
            </div>

            {/* Stage Hero Image */}
            <div
              style={{
                width: '100%',
                aspectRatio: '16 / 10',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img
                src={d.heroImage}
                alt="PCCOE Got Talent - Performance Stage"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 45%',
                  display: 'block',
                  transform: 'scale(1.01)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.01)')}
              />

              {/* Theatrical Vignette Gradient */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(5,5,7,0.4) 0%, rgba(5,5,7,0) 40%, rgba(5,5,7,0.7) 100%)',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at 85% 75%, rgba(225, 6, 0, 0.25) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
