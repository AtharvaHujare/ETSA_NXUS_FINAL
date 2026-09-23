import React from 'react';

interface LogoItem {
  id: string;
  name: string;
  fullName: string;
  src: string;
  alt: string;
  heightDesktop: number;
  heightMobile: number;
}

const INSTITUTIONAL_LOGOS: LogoItem[] = [
  {
    id: 'pccoe',
    name: 'PCCOE',
    fullName: 'Pimpri Chinchwad College of Engineering',
    src: '/logos/pccoe.webp',
    alt: 'PCCOE Logo',
    heightDesktop: 52,
    heightMobile: 42,
  },
  {
    id: 'etsa',
    name: 'ETSA',
    fullName: 'Electronics & Telecommunication Students Association',
    src: '/logos/etsa.webp',
    alt: 'ETSA Logo',
    heightDesktop: 52,
    heightMobile: 42,
  },
  {
    id: 'ieee_sps',
    name: 'IEEE SPS',
    fullName: 'IEEE Signal Processing Society — PCCOE Student Chapter',
    src: '/logos/ieee_sps.webp',
    alt: 'IEEE Signal Processing Society PCCOE Student Chapter Logo',
    heightDesktop: 48,
    heightMobile: 40,
  },
  {
    id: 'iete',
    name: 'IETE',
    fullName: 'IETE-PCCOE Students Forum',
    src: '/logos/iete.webp',
    alt: 'IETE PCCOE Students Forum Logo',
    heightDesktop: 50,
    heightMobile: 40,
  },
];

export function InstitutionalLogos() {
  return (
    <div
      className="institutional-logos-strip"
      style={{
        position: 'relative',
        zIndex: 5,
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '32px clamp(16px, 4vw, 48px) 36px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Subtle Kicker / Divider Label */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginBottom: '24px',
        }}
      >
        <span
          style={{
            width: '28px',
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.64rem',
            fontWeight: 600,
            letterSpacing: '0.24em',
            color: '#7E8288',
            textTransform: 'uppercase',
          }}
        >
          IN ASSOCIATION WITH
        </span>
        <span
          style={{
            width: '28px',
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
          }}
        />
      </div>

      {/* 4 Logos Horizontal Row (2x2 on Mobile) */}
      <div
        className="logos-row-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(28px, 5vw, 68px)',
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '880px',
          margin: '0 auto',
        }}
      >
        {INSTITUTIONAL_LOGOS.map((logo) => (
          <div
            key={logo.id}
            title={logo.fullName}
            className="logo-item-wrap"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'opacity 0.25s ease, transform 0.25s ease',
              opacity: 0.8,
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              decoding="async"
              className={`logo-img logo-img-${logo.id}`}
              style={{
                display: 'block',
                width: 'auto',
                height: `${logo.heightDesktop}px`,
                objectFit: 'contain',
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .institutional-logos-strip {
            padding: 24px 16px 28px !important;
          }
          .logos-row-container {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px 32px !important;
            max-width: 320px !important;
            justify-items: center !important;
          }
          .logo-img-pccoe {
            height: 42px !important;
          }
          .logo-img-etsa {
            height: 42px !important;
          }
          .logo-img-ieee_sps {
            height: 38px !important;
          }
          .logo-img-iete {
            height: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default InstitutionalLogos;
