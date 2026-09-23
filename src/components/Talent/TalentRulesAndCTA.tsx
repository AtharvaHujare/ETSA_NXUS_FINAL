import React from 'react';
import { ShieldCheck, Download, AlertCircle } from 'lucide-react';
import { PCCOE_GOT_TALENT_DATA } from '../../data/pccoeGotTalentData';

export function TalentRulesAndCTA() {
  const d = PCCOE_GOT_TALENT_DATA;
  const rules = d.keyRules;

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1360px',
        margin: '0 auto 60px auto',
        padding: '0 clamp(16px, 3.5vw, 40px)',
      }}
    >
      {/* 1. Compact Key Rules Card */}
      <div
        style={{
          background: 'rgba(12, 13, 18, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          padding: 'clamp(24px, 3.5vw, 36px)',
          marginBottom: '32px',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: 'var(--accent-red)' }} />
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
                margin: 0,
                textTransform: 'uppercase',
              }}
            >
              KEY PARTICIPANT RULES
            </h3>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.70rem',
              color: 'var(--accent-red)',
              fontWeight: 700,
              letterSpacing: '0.14em',
            }}
          >
            SEE OFFICIAL RULEBOOK FOR COMPLETE RULES
          </div>
        </div>

        {/* 2-Column Rules Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '12px 24px',
          }}
        >
          {rules.map((rule, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.86rem',
                color: '#BBBBC5',
                lineHeight: 1.45,
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
            </div>
          ))}
        </div>
      </div>

      {/* 2. Prominent Official Rulebook Download Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(225, 6, 0, 0.14) 0%, rgba(12, 13, 18, 0.95) 100%)',
          border: '1px solid var(--accent-red)',
          borderRadius: '8px',
          padding: 'clamp(28px, 4vw, 44px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          boxShadow: '0 16px 40px rgba(225, 6, 0, 0.25)',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.70rem',
              fontWeight: 800,
              letterSpacing: '0.24em',
              color: 'var(--accent-red)',
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}
          >
            OFFICIAL EVENT RULEBOOK
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
              fontWeight: 900,
              letterSpacing: '0.04em',
              color: '#FFFFFF',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
            }}
          >
            DETAILED RULES • GUIDELINES • EVENT INFORMATION
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.90rem',
              color: '#A0A0AA',
              margin: 0,
              maxWidth: '640px',
            }}
          >
            Download the official PDF for full eligibility standards, stage dimensions, language guidelines, audio requirements, and judging regulations.
          </p>
        </div>

        {/* Big Download Button */}
        <a
          href={d.rulebookPdfUrl}
          download="Rulebook_PCCOE_GOT_TALENT.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-racing-primary"
          style={{
            padding: '16px 36px',
            fontSize: '0.86rem',
            fontWeight: 800,
            letterSpacing: '0.18em',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 0 30px rgba(225, 6, 0, 0.5)',
          }}
        >
          <Download size={18} />
          <span>DOWNLOAD RULEBOOK</span>
          <span className="btn-arrow" style={{ fontSize: '1rem', fontWeight: 900 }}>→</span>
        </a>
      </div>
    </div>
  );
}
