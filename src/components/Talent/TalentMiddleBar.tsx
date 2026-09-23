import React from 'react';

export function TalentMiddleBar() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1360px',
        margin: '0 auto 40px auto',
        padding: '0 clamp(16px, 3.5vw, 40px)',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(90deg, rgba(16, 17, 24, 0.92) 0%, rgba(10, 11, 15, 0.95) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '6px',
          padding: '16px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Left Label */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: '#AAAAAA',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-red)',
              boxShadow: '0 0 8px var(--accent-red)',
            }}
          />
          <span>THE STAGE AWAITS</span>
        </div>

        {/* Center: Official Status */}
        <div
          style={{
            fontFamily: 'var(--font-racing)',
            fontSize: '1.05rem',
            fontWeight: 800,
            letterSpacing: '0.16em',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ color: 'var(--accent-red)' }}>DATE & TIME</span>
          <span>//</span>
          <span>TO BE ANNOUNCED</span>
        </div>

        {/* Right Motto */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.70rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            color: '#888892',
            textTransform: 'uppercase',
          }}
        >
          SAME PASSION. A HIGHER FREQUENCY.
        </div>
      </div>
    </div>
  );
}
