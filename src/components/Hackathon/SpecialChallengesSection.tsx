import React from 'react';
import { AlertCircle, Cpu, Award } from 'lucide-react';
import { HARDWARE_HACKATHON_DATA } from '../../data/hardwareHackathonData';

export function SpecialChallengesSection() {
  const { specialChallenges } = HARDWARE_HACKATHON_DATA;

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <AlertCircle size={20} style={{ color: 'var(--accent-red)' }} />;
      case 1:
        return <Cpu size={20} style={{ color: 'var(--accent-red)' }} />;
      case 2:
        return <Award size={20} style={{ color: '#FFB800' }} />;
      default:
        return <AlertCircle size={20} style={{ color: 'var(--accent-red)' }} />;
    }
  };

  return (
    <section
      style={{
        width: '100%',
        maxWidth: '1360px',
        margin: '56px auto 0 auto',
        padding: '0 clamp(16px, 3.5vw, 36px)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
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
          COMPETITIVE ADVANTAGE
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
            fontWeight: 900,
            letterSpacing: '0.04em',
            color: '#FFFFFF',
            lineHeight: 1.1,
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          SPECIAL <span style={{ color: 'var(--accent-red)' }}>CHALLENGES</span>
        </h2>
      </div>

      {/* 3 Challenge Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        {specialChallenges.map((challenge, idx) => (
          <div
            key={idx}
            style={{
              background: '#090a0e',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.4)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div>
              {/* Icon & Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '6px',
                    background: 'rgba(225, 6, 0, 0.08)',
                    border: '1px solid rgba(225, 6, 0, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getIcon(idx)}
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: '#8A8A93',
                    textTransform: 'uppercase',
                  }}
                >
                  {challenge.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#FFFFFF',
                  margin: '0 0 10px 0',
                  textTransform: 'uppercase',
                }}
              >
                {challenge.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.86rem',
                  lineHeight: 1.6,
                  color: '#B4B4BC',
                  margin: 0,
                }}
              >
                {challenge.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
