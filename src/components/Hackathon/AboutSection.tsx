import React from 'react';
import { Cpu, Target, Wrench, Clock } from 'lucide-react';
import { HARDWARE_HACKATHON_DATA } from '../../data/hardwareHackathonData';

export function AboutSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu size={16} style={{ color: 'var(--accent-red)' }} />;
      case 'Target':
        return <Target size={16} style={{ color: 'var(--accent-red)' }} />;
      case 'Wrench':
        return <Wrench size={16} style={{ color: 'var(--accent-red)' }} />;
      case 'Clock':
        return <Clock size={16} style={{ color: 'var(--accent-red)' }} />;
      default:
        return <Cpu size={16} style={{ color: 'var(--accent-red)' }} />;
    }
  };

  return (
    <div
      style={{
        background: '#090a0e',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '8px',
        padding: 'clamp(24px, 3vw, 32px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <div>
        {/* Section Kicker */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: 'var(--accent-red)',
            marginBottom: '6px',
            textTransform: 'uppercase',
          }}
        >
          ABOUT THE EVENT
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
            fontWeight: 900,
            letterSpacing: '0.04em',
            lineHeight: 1.1,
            margin: '0 0 16px 0',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: '#FFFFFF' }}>EVENT </span>
          <span style={{ color: 'var(--accent-red)' }}>OVERVIEW</span>
        </h2>

        {/* Description from official rulebook */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.86rem',
            lineHeight: 1.6,
            color: '#B4B4BC',
            margin: '0 0 24px 0',
          }}
        >
          FORMULA HARDWARE is an open-theme hardware hackathon designed to encourage creativity, practical engineering, and innovation. Teams may work on any project idea, real-world problem statement, or technical domain. The event focuses on building, testing and demonstrating working prototypes.
        </p>

        {/* 2x2 Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          {HARDWARE_HACKATHON_DATA.overviewPoints.map((pt) => (
            <div
              key={pt.id}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '6px',
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.4)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)')}
            >
              <div style={{ marginTop: '2px', flexShrink: 0 }}>
                {getIcon(pt.icon)}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                  }}
                >
                  {pt.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.64rem',
                    color: '#8A8A93',
                    letterSpacing: '0.04em',
                    marginTop: '2px',
                  }}
                >
                  {pt.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Motorsport Banner matching reference */}
      <div
        style={{
          background: 'linear-gradient(135deg, #101116 0%, #060709 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '6px',
          padding: '14px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              fontFamily: 'var(--font-racing)',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              marginBottom: '2px',
            }}
          >
            HARDWARE FOR A BETTER TOMORROW
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.60rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              color: 'var(--accent-red)',
              textTransform: 'uppercase',
            }}
          >
            INNOVATE | BUILD | OUTRACE
          </div>
        </div>

        {/* Chequered flag texture on the right */}
        <div
          style={{
            width: '60px',
            height: '36px',
            backgroundImage: `repeating-conic-gradient(#1e2028 0% 25%, transparent 0% 50%)`,
            backgroundSize: '10px 10px',
            opacity: 0.35,
          }}
        />
      </div>
    </div>
  );
}
