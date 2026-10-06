import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SponsorItem {
  name: string;
  role: string;
  logo: string;
  fallbackLogo?: string;
  link?: string;
  logoBg?: string;
  location?: string;
}

export function SponsorsSection() {
  const sponsors: SponsorItem[] = [
    {
      name: 'AVIRO ENERGY',
      role: 'ENERGY PARTNER',
      logo: '/sponsors/Aviro_Energy.jpeg',
      link: 'https://www.aviroenergy.in/',
      logoBg: '#FFFFFF',
    },
    {
      name: 'HOTEL DURGA',
      role: 'HOSPITALITY PARTNER',
      location: 'RAVET',
      logo: '/sponsors/Hotel_Durga.jpeg',
      link: 'https://share.google/teix2dpoOfqZceUuo',
    },
    {
      name: "McDONALD'S",
      role: 'FOOD & BEVERAGES',
      logo: '/sponsors/mcd.png',
      link: 'https://mcdelivery.co.in/',
    },
    {
      name: 'JAWED HABIB',
      role: 'GROOMING PARTNER',
      logo: '/sponsors/Javed_Habib.png',
      link: 'https://jawedhabib.com/',
    },
    {
      name: 'MT LABS',
      role: 'TECH & INNOVATION LABS',
      logo: '/sponsors/MT_LABS',
      fallbackLogo: '/sponsors/MT_LABS.png',
      link: 'https://payhip.com/b/QqcrY',
    },
    {
      name: 'JUST ENGINEERING',
      role: 'ENGINEERING TRAINING',
      logo: '/sponsors/just_engineering.jpeg',
      link: 'https://www.justengg.com/',
    },
    {
      name: 'KARTX',
      role: 'MOTORSPORT & KARTING',
      logo: '/sponsors/KartX.ARENA.png',
      link: 'https://www.instagram.com/kartx.in/',
    },
    {
      name: 'X0 GAMERS',
      role: 'GAMING ZONE PARTNER',
      logo: '/sponsors/xo_gamers.jpeg',
      link: 'https://www.instagram.com/thexogamingzone.in?stkn=MW9hazB5aTFhZ3NuOA==',
      logoBg: '#121212',
    },
    {
      name: 'COFFEE KATTA',
      role: 'CAFE & BEVERAGES',
      logo: '/sponsors/Coffee_Katta.jpeg',
    },
    {
      name: 'NOM NOM MOMOS',
      role: 'FOOD & REFRESHMENTS',
      logo: '/sponsors/Nom_nom_express.jpeg',
      logoBg: '#FFFFFF',
    },
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
            marginBottom: '56px',
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
            NEXUS 2026 OFFICIAL PARTNERS
          </div>
        </div>

        {/* Official Sponsors Showcase */}
        <div style={{ marginBottom: '64px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.25em',
                color: 'var(--accent-red)',
                fontWeight: 700,
              }}
            >
              OFFICIAL SPONSORS
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.64rem',
                letterSpacing: '0.15em',
                color: '#777777',
              }}
            >
              CLICK LOGO TO VISIT PARTNER ↗
            </div>
          </div>

          <div className="official-sponsors-grid">
            {sponsors.map((sponsor) => {
              const CardComponent = sponsor.link ? 'a' : 'div';
              return (
                <CardComponent
                  key={sponsor.name}
                  {...(sponsor.link
                    ? {
                        href: sponsor.link,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      }
                    : {})}
                  className="official-sponsor-card"
                >
                  {/* Card Header Tag & External Link Icon */}
                  <div className="sponsor-card-header">
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.64rem',
                        letterSpacing: '0.18em',
                        color: sponsor.location ? 'var(--accent-red)' : '#777777',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                      }}
                    >
                      {sponsor.location ? `LOCATION // ${sponsor.location}` : 'OFFICIAL PARTNER'}
                    </div>
                    {sponsor.link ? (
                      <div className="sponsor-link-arrow">
                        <ExternalLink size={15} />
                      </div>
                    ) : (
                      <div style={{ width: 15, height: 15 }} />
                    )}
                  </div>

                  {/* Hero Logo Showcase Area */}
                  <div
                    className="sponsor-logo-box"
                    style={{
                      background: sponsor.logoBg || 'rgba(255, 255, 255, 0.025)',
                      padding: sponsor.logoBg === '#FFFFFF' ? '16px 24px' : '18px 24px',
                    }}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      onError={(e) => {
                        if (sponsor.fallbackLogo && e.currentTarget.src !== sponsor.fallbackLogo) {
                          e.currentTarget.src = sponsor.fallbackLogo;
                        }
                      }}
                      className="sponsor-logo-img"
                      style={{
                        filter: sponsor.logoBg === '#FFFFFF' ? 'none' : 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.6))',
                      }}
                    />
                  </div>

                  {/* Sponsor Typography */}
                  <div className="sponsor-info">
                    <div className="sponsor-card-name">
                      {sponsor.name}
                    </div>
                    <div className="sponsor-card-role">
                      {sponsor.role}
                    </div>
                  </div>
                </CardComponent>
              );
            })}
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
        .official-sponsors-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (min-width: 1101px) {
          .official-sponsors-grid > :nth-child(9) {
            grid-column: 2 / 3;
          }
        }

        .official-sponsor-card {
          background: #09090c;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          text-decoration: none;
          position: relative;
          cursor: pointer;
          outline: none;
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.28s ease,
                      background 0.28s ease,
                      box-shadow 0.28s ease;
        }

        .sponsor-card-header {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          margin-bottom: 20px;
        }

        .sponsor-link-arrow {
          color: #555555;
          transition: transform 0.25s ease, color 0.25s ease;
          display: flex;
          align-items: center;
          justifyContent: center;
        }

        .sponsor-logo-box {
          height: 130px;
          width: 100%;
          display: flex;
          align-items: center;
          justifyContent: center;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 6px;
          margin-bottom: 22px;
          overflow: hidden;
          position: relative;
          transition: border-color 0.28s ease, background 0.28s ease;
        }

        .sponsor-logo-img {
          max-height: 100%;
          max-width: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sponsor-info {
          display: flex;
          flex-direction: column;
        }

        .sponsor-card-name {
          font-family: var(--font-racing);
          font-size: 1.18rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          margin-bottom: 6px;
          line-height: 1.25;
          transition: color 0.2s ease;
        }

        .sponsor-card-role {
          font-family: var(--font-mono);
          font-size: 0.66rem;
          letter-spacing: 0.16em;
          color: #777777;
          text-transform: uppercase;
        }

        /* Hover Interactions */
        .official-sponsor-card:hover {
          background: #101016;
          border-color: rgba(225, 6, 0, 0.45);
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.65), 0 0 24px rgba(225, 6, 0, 0.08);
        }

        .official-sponsor-card:hover .sponsor-logo-box {
          border-color: rgba(255, 255, 255, 0.16);
        }

        .official-sponsor-card:hover .sponsor-logo-img {
          transform: scale(1.05);
        }

        .official-sponsor-card:hover .sponsor-link-arrow {
          color: var(--accent-red);
          transform: translate(2px, -2px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .official-sponsors-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }

        @media (max-width: 640px) {
          .official-sponsors-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .official-sponsor-card {
            padding: 24px 20px;
          }
          .sponsor-logo-box {
            height: 116px;
          }
        }
      `}</style>
    </section>
  );
}
