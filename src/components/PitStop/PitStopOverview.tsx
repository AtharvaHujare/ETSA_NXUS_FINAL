import React from 'react';
import { PIT_STOP_PROTOCOL_DATA } from '../../data/pitStopProtocolData';
import { ShieldCheck } from 'lucide-react';

export function PitStopOverview() {
  const d = PIT_STOP_PROTOCOL_DATA.overview;

  return (
    <section
      id="overview"
      style={{
        width: '100%',
        maxWidth: '1320px',
        margin: '0 auto 80px auto',
        padding: '0 clamp(16px, 4vw, 40px)',
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '32px' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: '#8A8A93',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          {d.titleKicker}
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4.4vw, 3.4rem)',
            fontWeight: 900,
            letterSpacing: '0.03em',
            lineHeight: 1.05,
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: '#FFFFFF' }}>EVENT </span>
          <span style={{ color: 'var(--accent-red)' }}>OVERVIEW</span>
        </h2>
      </div>

      {/* 2-Column Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: ' clamp(32px, 4.5vw, 56px)',
          alignItems: 'stretch',
        }}
      >
        {/* Left Column: Narrative & Reassurance */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {d.paragraphs.map((p, idx) => (
            <p
              key={idx}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.02rem',
                lineHeight: 1.7,
                color: '#C0C0C8',
                marginBottom: '20px',
              }}
            >
              {p}
            </p>
          ))}

          {/* Highlight Badge: NO PRIOR F1 KNOWLEDGE REQUIRED */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 20px',
              background: 'linear-gradient(90deg, rgba(225, 6, 0, 0.12) 0%, rgba(225, 6, 0, 0.03) 100%)',
              borderLeft: '3px solid var(--accent-red)',
              borderRadius: '0 6px 6px 0',
              marginTop: '8px',
            }}
          >
            <ShieldCheck size={20} style={{ color: 'var(--accent-red)', flexShrink: 0 }} />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                }}
              >
                {d.noPriorKnowledgeBadge}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.70rem',
                  color: '#8A8A93',
                  letterSpacing: '0.04em',
                  marginTop: '2px',
                }}
              >
                Every round is self-contained and purely logic & coordination driven.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Motorsport Quote Card with Helmet Visor */}
        <div
          style={{
            background: 'linear-gradient(145deg, #0f1015 0%, #070709 100%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            overflow: 'hidden',
            position: 'relative',
            padding: 'clamp(28px, 4vw, 44px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '320px',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.7)',
          }}
        >
          {/* Subtle Background Helmet Profile */}
          <div
            style={{
              position: 'absolute',
              right: '-10px',
              top: '0',
              bottom: '0',
              width: '55%',
              backgroundImage: `url(${PIT_STOP_PROTOCOL_DATA.helmetImage})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center right',
              backgroundRepeat: 'no-repeat',
              opacity: 0.28,
              maskImage: 'linear-gradient(to right, transparent 0%, black 80%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 80%)',
              pointerEvents: 'none',
            }}
          />

          {/* Quotation Mark Icon */}
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '3.5rem',
              lineHeight: 1,
              color: 'rgba(225, 6, 0, 0.4)',
              fontWeight: 900,
              userSelect: 'none',
              marginBottom: '12px',
            }}
          >
            “
          </div>

          {/* Quote Text */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              maxWidth: '380px',
            }}
          >
            <blockquote
              style={{
                fontFamily: 'var(--font-racing)',
                fontSize: 'clamp(1.15rem, 2.1vw, 1.45rem)',
                fontWeight: 800,
                letterSpacing: '0.12em',
                lineHeight: 1.35,
                margin: 0,
                textTransform: 'uppercase',
              }}
            >
              <span style={{ color: 'var(--accent-red)' }}>
                "IT'S NOT ABOUT SPEED ALONE,{' '}
              </span>
              <span style={{ color: '#FFFFFF' }}>
                IT'S ABOUT THE TEAM THAT GETS IT RIGHT."
              </span>
            </blockquote>
          </div>

          {/* Bottom Card Footer with Tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '20px',
              marginTop: '32px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.86rem',
                fontWeight: 800,
                letterSpacing: '0.18em',
                color: '#66666E',
              }}
            >
              NEXUS
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--accent-red)',
              }}
            >
              {d.quoteCard.tag}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
