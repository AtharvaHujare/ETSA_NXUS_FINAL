import React from 'react';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: '#040405',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '80px clamp(20px, 4vw, 56px) 40px clamp(20px, 4vw, 56px)',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '64px',
        }}
        className="footer-grid"
      >
        {/* Brand & Department */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem',
              fontWeight: 900,
              letterSpacing: '0.1em',
              display: 'flex',
              alignItems: 'center',
              lineHeight: 1,
              marginBottom: '6px',
            }}
          >
            <span>NE</span>
            <span style={{ position: 'relative', color: '#F5F5F5' }}>
              X
              <span
                style={{
                  position: 'absolute',
                  top: '46%',
                  left: '18%',
                  width: '64%',
                  height: '3px',
                  background: 'var(--accent-red)',
                  transform: 'rotate(-42deg)',
                  borderRadius: '1px',
                }}
              />
            </span>
            <span>US</span>
            <span
              style={{
                fontFamily: 'var(--font-racing)',
                fontSize: '0.9rem',
                color: '#888888',
                marginLeft: '8px',
                fontWeight: 600,
              }}
            >
              2026
            </span>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              color: '#888888',
              lineHeight: 1.6,
              maxWidth: '360px',
              marginTop: '16px',
              marginBottom: '20px',
            }}
          >
            Pune's premier motorsport and engineering symposium organized by the Department of
            Electronics & Telecommunication Engineering, PCCOE.
          </p>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              color: 'var(--accent-red)',
            }}
          >
            COORDINATES // 18.6517° N, 73.7615° E
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              color: '#FFFFFF',
              marginBottom: '20px',
            }}
          >
            NAVIGATION
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['EVENTS', 'CALENDAR', 'SPONSORS', 'GLIMPSES'].map((link) => (
              <a
                key={link}
                href={link === 'GLIMPSES' ? '/glimpses' : `#${link.toLowerCase()}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.14em',
                  color: '#888888',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Secretariat & Venue */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              color: '#FFFFFF',
              marginBottom: '20px',
            }}
          >
            PADDOCK HEADQUARTERS
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: '#888888',
              lineHeight: 1.6,
            }}
          >
            Department of E&TC
            <br />
            Pimpri Chinchwad College of Engineering
            <br />
            Sector 26, Pradhikaran, Nigdi,
            <br />
            Pune — 411044, Maharashtra, India
          </div>
        </div>

        {/* Back to top & Inquiries */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              color: '#FFFFFF',
              marginBottom: '20px',
            }}
          >
            COMMUNICATIONS
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: '#AAAAAA',
              marginBottom: '16px',
            }}
          >
            nexus.entc@pccoepune.org
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 16px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#CCCCCC',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              marginTop: 'auto',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-red)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#CCCCCC';
            }}
          >
            <ArrowUp size={14} />
            <span>RETURN TO TOP</span>
          </button>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingTop: '32px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: '#555555',
          letterSpacing: '0.12em',
        }}
      >
        <div>© 2026 NEXUS PCCOE ENTC. ALL RIGHTS RESERVED.</div>
        <div>ENGINEERED FOR SPEED & INNOVATION</div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
