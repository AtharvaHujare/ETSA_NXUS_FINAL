import React from 'react';
import { Trophy } from 'lucide-react';
import { HARDWARE_HACKATHON_DATA } from '../../data/hardwareHackathonData';

export function PrizesSection() {
  const { prizes, rounds } = HARDWARE_HACKATHON_DATA;

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
      {/* Top Half: EVENT FORMAT // TWO ROUNDS */}
      <div style={{ marginBottom: '28px' }}>
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
          EVENT FORMAT
        </div>

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
          <span style={{ color: '#FFFFFF' }}>TWO </span>
          <span style={{ color: 'var(--accent-red)' }}>ROUNDS</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Round 01 */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '6px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.4)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)')}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, rgba(225, 6, 0, 0.25) 0%, rgba(225, 6, 0, 0.08) 100%)',
                border: '1px solid rgba(225, 6, 0, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.84rem',
                fontWeight: 900,
                color: 'var(--accent-red)',
                flexShrink: 0,
              }}
            >
              01
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.90rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                }}
              >
                Idea Presentation
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
                6-slide PPT • Technical clarity & feasibility
              </div>
            </div>
          </div>

          {/* Round 02 */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '6px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.4)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)')}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, rgba(225, 6, 0, 0.25) 0%, rgba(225, 6, 0, 0.08) 100%)',
                border: '1px solid rgba(225, 6, 0, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.84rem',
                fontWeight: 900,
                color: 'var(--accent-red)',
                flexShrink: 0,
              }}
            >
              02
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.90rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                }}
              >
                12-Hour Prototype Build
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
                Build • Test • Integrate • Demonstrate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Half: PRIZE POOL */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: 'var(--accent-red)',
            marginBottom: '12px',
            textTransform: 'uppercase',
          }}
        >
          PRIZE POOL
        </div>

        {/* 3 Metallic Cards Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
            marginBottom: '14px',
          }}
        >
          {[prizes.first, prizes.second, prizes.third].map((prize) => (
            <div
              key={prize.place}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: `1px solid ${prize.color}33`,
                borderRadius: '6px',
                padding: '12px 6px',
                textAlign: 'center',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = prize.color;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${prize.color}33`;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>
                <Trophy size={16} style={{ color: prize.color }} />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-racing)',
                  fontSize: '0.96rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.02em',
                  lineHeight: 1.1,
                  marginBottom: '2px',
                }}
              >
                {prize.amount}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.56rem',
                  color: '#8A8A93',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {prize.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.54rem',
                  color: 'var(--accent-red)',
                  letterSpacing: '0.06em',
                }}
              >
                {prize.perks}
              </div>
            </div>
          ))}
        </div>

        {/* Total Prize Pool Banner matching reference */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255, 184, 0, 0.08) 0%, rgba(255, 184, 0, 0.02) 100%)',
            border: '1px solid rgba(255, 184, 0, 0.35)',
            borderRadius: '6px',
            padding: '12px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-racing)',
              fontSize: '1.15rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              color: '#FFB800',
              lineHeight: 1.1,
              marginBottom: '2px',
            }}
          >
            {prizes.total}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.60rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: '#8A8A93',
              textTransform: 'uppercase',
            }}
          >
            {prizes.totalLabel}
          </div>
        </div>
      </div>
    </div>
  );
}
