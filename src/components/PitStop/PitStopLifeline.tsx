import React from 'react';
import { Timer, Zap, ShieldCheck } from 'lucide-react';
import { PIT_STOP_PROTOCOL_DATA } from '../../data/pitStopProtocolData';

export function PitStopLifeline() {
  const d = PIT_STOP_PROTOCOL_DATA.lifeline;

  return (
    <section
      id="lifeline"
      style={{
        width: '100%',
        maxWidth: '1320px',
        margin: '0 auto 80px auto',
        padding: '0 clamp(16px, 4vw, 40px)',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, #0f1016 0%, #08090c 100%)',
          border: '1px solid rgba(225, 6, 0, 0.35)',
          borderRadius: '8px',
          padding: 'clamp(28px, 4vw, 44px)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.75), 0 0 30px rgba(225, 6, 0, 0.1)',
        }}
      >
        {/* Background ambient pulse */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(225, 6, 0, 0.15) 0%, transparent 70%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                color: '#8A8A93',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              TACTICAL PIT STRATEGY
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                color: '#FFFFFF',
                margin: 0,
                textTransform: 'uppercase',
              }}
            >
              LIFELINE <span style={{ color: 'var(--accent-red)' }}>PROTOCOL</span>
            </h3>
          </div>

          {/* 45 SEC PENALTY Prominent Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 22px',
              background: 'rgba(225, 6, 0, 0.14)',
              border: '1px solid rgba(225, 6, 0, 0.6)',
              borderRadius: '6px',
              boxShadow: '0 0 25px rgba(225, 6, 0, 0.25)',
            }}
          >
            <Timer size={22} style={{ color: 'var(--accent-red)' }} />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-racing)',
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                  color: 'var(--accent-red)',
                  lineHeight: 1,
                }}
              >
                +45 SEC PENALTY
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  color: '#D0D0D8',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                IF HINT IS ACTIVATED
              </div>
            </div>
          </div>
        </div>

        {/* Tactical Decision Split */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {/* Option A: Use Lifeline */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '6px',
              padding: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px',
              }}
            >
              <Zap size={18} style={{ color: 'var(--accent-red)' }} />
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.80rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                }}
              >
                OPTION A // USE LIFELINE
              </div>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                lineHeight: 1.6,
                color: '#B0B0B8',
                margin: 0,
              }}
            >
              Teams may call for <strong>one additional clue hint</strong> when stuck during Round 2.
              Activating this immediately adds <strong>45 seconds</strong> to the final time tally:
              <br />
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-red)', fontSize: '0.80rem' }}>
                Final Time = Actual Time + 45s
              </span>
            </p>
          </div>

          {/* Option B: Save Lifeline */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '6px',
              padding: '24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px',
              }}
            >
              <ShieldCheck size={18} style={{ color: '#00E676' }} />
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.80rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                }}
              >
                OPTION B // SAVE LIFELINE
              </div>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                lineHeight: 1.6,
                color: '#B0B0B8',
                margin: 0,
              }}
            >
              Teams solve Round 2 without triggering the lifeline. <strong>Zero penalty</strong> is applied, and the saved lifeline carries forward as an <strong>exclusive Round 3 advantage</strong> on the obstacle course.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
