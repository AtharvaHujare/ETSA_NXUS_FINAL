import React from 'react';
import { Download } from 'lucide-react';
import { PIT_STOP_PROTOCOL_DATA } from '../../data/pitStopProtocolData';

// Custom PDF icon matching the reference image red-badged PDF icon
function PdfDocumentIcon({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="4" width="36" height="40" rx="4" fill="#14151C" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <path d="M28 4v10h10" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      <path d="M14 22h20M14 28h14M14 34h18" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      {/* PDF Red Badge at bottom */}
      <rect x="4" y="32" width="22" height="12" rx="2" fill="var(--accent-red)" />
      <text
        x="15"
        y="40.5"
        fill="#FFFFFF"
        fontFamily="sans-serif"
        fontSize="7.5"
        fontWeight="900"
        textAnchor="middle"
        letterSpacing="0.05em"
      >
        PDF
      </text>
    </svg>
  );
}

export function PitStopRulebookBanner() {
  const d = PIT_STOP_PROTOCOL_DATA;

  return (
    <section
      id="rulebook"
      style={{
        width: '100%',
        maxWidth: '1320px',
        margin: '0 auto 60px auto',
        padding: '0 clamp(16px, 4vw, 40px)',
      }}
    >
      {/* Large Premium Rulebook Download Card */}
      <div
        style={{
          background: 'linear-gradient(135deg, #101117 0%, #08090c 100%)',
          border: '1px solid rgba(225, 6, 0, 0.45)',
          borderRadius: '8px',
          padding: 'clamp(28px, 4.5vw, 44px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(225, 6, 0, 0.2)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Subtle Red Accent Glow */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '6px',
            background: 'var(--accent-red)',
            boxShadow: '0 0 15px var(--accent-red)',
          }}
        />

        {/* Left Side: PDF Icon & Text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(16px, 3vw, 24px)',
            zIndex: 1,
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <PdfDocumentIcon size={56} />
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.70rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                color: '#8A8A93',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              DETAILED RULES, GUIDELINES, AND ALL EVENT INFORMATION
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 3.6vw, 2.5rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                lineHeight: 1.05,
                margin: 0,
                textTransform: 'uppercase',
              }}
            >
              <span style={{ color: 'var(--accent-red)' }}>DOWNLOAD </span>
              <span style={{ color: '#FFFFFF' }}>RULEBOOK</span>
            </h2>
          </div>
        </div>

        {/* Right Side: Primary Download Button */}
        <div style={{ zIndex: 1 }}>
          <a
            href={d.rulebookPdfUrl}
            download="PIT_STOP_PROTOCOL_RULEBOOK-finale.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '15px 32px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(225, 6, 0, 0.6)',
              borderRadius: '4px',
              color: '#FFFFFF',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.80rem',
              fontWeight: 800,
              letterSpacing: '0.18em',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              boxShadow: '0 0 20px rgba(225, 6, 0, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent-red)';
              e.currentTarget.style.borderColor = 'var(--accent-red)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(225, 6, 0, 0.5)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.6)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(225, 6, 0, 0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Download size={16} />
            <span>DOWNLOAD PDF</span>
          </a>
        </div>
      </div>

      {/* Chequered Ribbon & Quote at Bottom matching reference */}
      <div
        style={{
          marginTop: '64px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-racing)',
            fontSize: 'clamp(0.85rem, 1.6vw, 1.05rem)',
            fontWeight: 800,
            letterSpacing: '0.28em',
            color: '#7E7E88',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          {d.footerQuote}
        </div>

        {/* Subtle motorsport chequered texture line */}
        <div
          style={{
            width: '100%',
            maxWidth: '360px',
            height: '10px',
            margin: '0 auto',
            backgroundImage: `repeating-conic-gradient(#1c1d24 0% 25%, transparent 0% 50%)`,
            backgroundSize: '12px 12px',
            opacity: 0.35,
          }}
        />
      </div>
    </section>
  );
}
