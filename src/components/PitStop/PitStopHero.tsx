import React from 'react';
import { Calendar, MapPin, Download, ArrowRight, ArrowLeft } from 'lucide-react';
import { PIT_STOP_PROTOCOL_DATA } from '../../data/pitStopProtocolData';

interface PitStopHeroProps {
  onRegisterClick: () => void;
  onBackToEvents: () => void;
}

export function PitStopHero({ onRegisterClick, onBackToEvents }: PitStopHeroProps) {
  const d = PIT_STOP_PROTOCOL_DATA;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '32px',
        paddingBottom: '48px',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Red Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '15%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(225, 6, 0, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 40px)',
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
            color: '#7E7E88',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            padding: '4px 0',
            marginBottom: '28px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#7E7E88')}
        >
          <ArrowLeft size={14} />
          <span>BACK TO EVENTS</span>
        </button>

        {/* Hero Grid: Left Content + Right Pit Crew Visual */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Typography & CTAs */}
          <div style={{ maxWidth: '620px' }}>
            {/* Category Breadcrumb */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                color: '#8A8A93',
                textTransform: 'uppercase',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>EVENTS</span>
              <span style={{ color: '#444444' }}>//</span>
              <span style={{ color: '#D0D0D4' }}>NON-TECHNICAL</span>
            </div>

            {/* Pit Stop Badge */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 800,
                letterSpacing: '0.22em',
                color: 'var(--accent-red)',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}
            >
              {d.pitStop}
            </div>

            {/* Main Bold Title */}
            <h1
              style={{
                margin: '0 0 14px 0',
                lineHeight: 0.96,
                letterSpacing: '0.01em',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.8rem, 6.2vw, 5.2rem)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                PIT STOP
              </span>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-racing)',
                  fontSize: 'clamp(2.8rem, 6.2vw, 5.2rem)',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  color: 'var(--accent-red)',
                  textTransform: 'uppercase',
                  textShadow: '0 0 40px rgba(225, 6, 0, 0.45)',
                  letterSpacing: '0.04em',
                }}
              >
                PROTOCOL
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
                marginBottom: '18px',
              }}
            >
              {d.tagline}
            </div>

            {/* Short Event Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.98rem',
                lineHeight: 1.6,
                color: '#9E9EA6',
                marginBottom: '28px',
                maxWidth: '540px',
              }}
            >
              {d.heroDescription}
            </p>

            {/* Date & Venue Badges */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(16px, 3vw, 32px)',
                flexWrap: 'wrap',
                marginBottom: '36px',
              }}
            >
              {/* Date Box */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(225, 6, 0, 0.1)',
                    border: '1px solid rgba(225, 6, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-red)',
                    flexShrink: 0,
                  }}
                >
                  <Calendar size={18} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
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
                      fontSize: '0.70rem',
                      color: '#7E7E88',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {d.datesSubtitle}
                  </div>
                </div>
              </div>

              {/* Venue Box */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(225, 6, 0, 0.1)',
                    border: '1px solid rgba(225, 6, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-red)',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {d.venueShort}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.70rem',
                      color: '#7E7E88',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {d.venueDetail}
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              {/* Register Button */}
              <button
                onClick={onRegisterClick}
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
                }}
              >
                <span>REGISTER</span>
                <ArrowRight size={16} />
              </button>

              {/* Download Rulebook Button */}
              <a
                href={d.rulebookPdfUrl}
                download="PIT_STOP_PROTOCOL_RULEBOOK-finale.pdf"
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

          {/* Right Column: Cinematic Hero Pit Crew Visual */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.09)',
              background: '#070709',
              boxShadow: '0 24px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(225, 6, 0, 0.15)',
            }}
          >
            {/* Top Right Motto Typographic Overlay matching reference */}
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
              SAME
              <br />
              STRATEGY
              <br />
              DIFFERENT
              <br />
              HUMANS
            </div>

            {/* The Cinematic Pit Crew Image */}
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
                alt="Pit Stop Protocol - Formula 1 Pit Crew"
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

              {/* Cinematic Vignette / Gradients */}
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
