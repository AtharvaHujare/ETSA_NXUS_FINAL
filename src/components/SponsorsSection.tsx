import React from 'react';

export function SponsorsSection() {
  const titleSponsors = [
    { name: 'APEX AERODYNAMICS', role: 'TITLE MOTORSPORT PARTNER' },
    { name: 'NVIDIA HPC ACCELERATOR', role: 'OFFICIAL AI COMPUTE PARTNER' },
  ];

  const technicalPartners = [
    { name: 'RED BULL ADVANCED TECH', role: 'AERO ADVISORY' },
    { name: 'BOSCH MOTORSPORT', role: 'ECU & SENSORS' },
    { name: 'BREMBO RACING', role: 'CHASSIS DYNAMICS' },
    { name: 'PIRELLI COMPETIZIONE', role: 'TIRE TELEMETRY' },
    { name: 'ANAYSIS CFD LABS', role: 'AERO SIMULATION' },
    { name: 'FANATEC SIMRIGS', role: 'SIMULATION RIGS' },
  ];

  const institutionalPartners = [
    'PCCOE PIMPRI CHINCHWAD COLLEGE OF ENGINEERING',
    'DEPARTMENT OF ELECTRONICS & TELECOMMUNICATION',
    'IEEE ROBOTICS & AUTOMATION SOCIETY',
    'SAE INDIA COLLEGIATE CHAPTER',
  ];

  return (
    <section
      id="sponsors"
      style={{
        position: 'relative',
        backgroundColor: '#070709',
        borderTop: '1px solid rgba(255, 255, 255, 0.07)',
        padding: '120px 0 100px 0',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '64px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '28px',
          }}
        >
          <div>
            <div className="racing-tag" style={{ marginBottom: '12px' }}>
              ALLIANCES // CONSTRUCTORS
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                lineHeight: 1,
                color: '#FFFFFF',
              }}
            >
              SPONSORS
            </h2>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              color: '#888888',
            }}
          >
            GLOBAL MOTORSPORT & TECH PARTNERS
          </div>
        </div>

        {/* Title Sponsors Tier */}
        <div style={{ marginBottom: '48px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.25em',
              color: 'var(--accent-red)',
              marginBottom: '16px',
            }}
          >
            TIER 1 // TITLE PARTNERS
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1px',
              background: 'rgba(255, 255, 255, 0.08)',
            }}
            className="title-sponsors-grid"
          >
            {titleSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                style={{
                  background: '#0a0a0c',
                  padding: '48px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transition: 'background 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#111115')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#0a0a0c')}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-racing)',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: '#FFFFFF',
                    marginBottom: '8px',
                  }}
                >
                  {sponsor.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.18em',
                    color: '#888888',
                  }}
                >
                  {sponsor.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Partners Grid */}
        <div style={{ marginBottom: '56px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.25em',
              color: '#777777',
              marginBottom: '16px',
            }}
          >
            TIER 2 // TECHNICAL & TELEMETRY ALLIANCES
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'rgba(255, 255, 255, 0.08)',
            }}
            className="tech-sponsors-grid"
          >
            {technicalPartners.map((partner) => (
              <div
                key={partner.name}
                style={{
                  background: '#09090b',
                  padding: '32px 28px',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#0f0f13')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#09090b')}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-racing)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#E0E0E0',
                    marginBottom: '6px',
                  }}
                >
                  {partner.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    letterSpacing: '0.16em',
                    color: '#666666',
                  }}
                >
                  {partner.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Backing */}
        <div
          style={{
            padding: '24px 32px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              color: 'var(--accent-red)',
            }}
          >
            ACADEMIC PATRONAGE
          </div>
          <div
            style={{
              display: 'flex',
              gap: 'clamp(16px, 2.5vw, 36px)',
              flexWrap: 'wrap',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: '#8E8E93',
              letterSpacing: '0.12em',
            }}
          >
            {institutionalPartners.map((item, idx) => (
              <span key={idx}>• {item}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .title-sponsors-grid {
            grid-template-columns: 1fr !important;
          }
          .tech-sponsors-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .tech-sponsors-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
