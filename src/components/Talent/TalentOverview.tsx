import React from 'react';
import { Users, Sparkles, Cpu, Trophy } from 'lucide-react';
import { PCCOE_GOT_TALENT_DATA } from '../../data/pccoeGotTalentData';

export function TalentOverview() {
  const d = PCCOE_GOT_TALENT_DATA.overview;

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'users': return <Users size={16} />;
      case 'sparkles': return <Sparkles size={16} />;
      case 'cpu': return <Cpu size={16} />;
      case 'trophy': return <Trophy size={16} />;
      default: return <Cpu size={16} />;
    }
  };

  return (
    <div
      style={{
        background: 'rgba(12, 13, 18, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '8px',
        padding: 'clamp(24px, 3.5vw, 36px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
      }}
    >
      <div>
        {/* Kicker & Title */}
        <div style={{ marginBottom: '20px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'var(--accent-red)',
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}
          >
            {d.titleKicker}
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              fontWeight: 900,
              letterSpacing: '0.04em',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            {d.titleMain}
          </h2>
        </div>

        {/* Narrative Paragraphs */}
        <div style={{ marginBottom: '28px' }}>
          {d.paragraphs.map((p, idx) => (
            <p
              key={idx}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                lineHeight: 1.65,
                color: '#BBBBC5',
                marginBottom: '14px',
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* 4 Feature Badges (2x2 Grid) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            marginBottom: '28px',
          }}
        >
          {d.features.map((feat) => (
            <div
              key={feat.title}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'border-color 0.2s ease',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(225, 6, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-red)',
                  flexShrink: 0,
                }}
              >
                {getFeatureIcon(feat.icon)}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                  }}
                >
                  {feat.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: '#8A8A93',
                  }}
                >
                  {feat.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Motorsport Motto Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(225, 6, 0, 0.08) 0%, rgba(10, 10, 14, 0.95) 100%)',
          border: '1px solid rgba(225, 6, 0, 0.25)',
          borderLeft: '4px solid var(--accent-red)',
          borderRadius: '4px',
          padding: '16px 20px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-racing)',
            fontSize: '1.0rem',
            fontWeight: 800,
            letterSpacing: '0.1em',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            marginBottom: '4px',
          }}
        >
          {d.mottoBanner.headline}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: 'var(--accent-red)',
            textTransform: 'uppercase',
          }}
        >
          {d.mottoBanner.tagline}
        </div>
      </div>
    </div>
  );
}
