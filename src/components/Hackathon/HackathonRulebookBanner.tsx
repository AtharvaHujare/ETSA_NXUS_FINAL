import React from 'react';
import { Download } from 'lucide-react';
import { HARDWARE_HACKATHON_DATA } from '../../data/hardwareHackathonData';

// PDF Icon with red badge
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

export function HackathonRulebookBanner() {
  const { rulebookPdfUrl } = HARDWARE_HACKATHON_DATA;

  return (
    <section
      style={{
        width: '100%',
        maxWidth: '1360px',
        margin: '64px auto 20px auto',
        padding: '0 clamp(16px, 3.5vw, 36px)',
      }}
    >
      {/* Large Premium Rulebook Download Card */}
      <div
        style={{
          background: 'linear-gradient(135deg, #101117 0%, #08090c 100%)',
          border: '1px solid rgba(225, 6, 0, 0.45)',
          borderRadius: '8px',
          padding: 'clamp(28px, 4vw, 44px)',
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
        {/* Ambient Left Edge Glow */}
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
            <PdfDocumentIcon size={54} />
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                color: '#8A8A93',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              DETAILED RULES • GUIDELINES • EVENT INFORMATION
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                lineHeight: 1.05,
                margin: 0,
                textTransform: 'uppercase',
              }}
            >
              <span style={{ color: '#FFFFFF' }}>OFFICIAL </span>
              <span style={{ color: 'var(--accent-red)' }}>RULEBOOK</span>
            </h2>
          </div>
        </div>

        {/* Right Side: Action Button */}
        <div style={{ zIndex: 1 }}>
          <a
            href={rulebookPdfUrl}
            download="Rulebook_FORMULA_HARDWARE 1.pdf"
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
            <span>DOWNLOAD RULEBOOK →</span>
          </a>
        </div>
      </div>

      {/* Footer Ribbon matching reference */}
      <div
        style={{
          marginTop: '56px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.66rem',
            letterSpacing: '0.2em',
            color: '#6E6E78',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          <span>PCCOE | ENTC</span>
          <span style={{ color: 'var(--accent-red)' }}>•</span>
          <span style={{ color: '#FFFFFF' }}>NEXUS 2026</span>
          <span style={{ color: 'var(--accent-red)' }}>•</span>
          <span>BUILD A FASTER TOMORROW</span>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-racing)',
            fontSize: 'clamp(0.78rem, 1.4vw, 0.94rem)',
            fontWeight: 800,
            letterSpacing: '0.24em',
            color: '#8A8A93',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          SOME CALL IT A HACKATHON. WE CALL IT PROGRESS.
        </div>

        {/* Chequered flag subtle line */}
        <div
          style={{
            width: '100%',
            maxWidth: '320px',
            height: '8px',
            margin: '0 auto',
            backgroundImage: `repeating-conic-gradient(#1c1d24 0% 25%, transparent 0% 50%)`,
            backgroundSize: '10px 10px',
            opacity: 0.3,
          }}
        />
      </div>
    </section>
  );
}
