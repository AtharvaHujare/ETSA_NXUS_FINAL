import React from 'react';
import { PCCOE_GOT_TALENT_DATA } from '../../data/pccoeGotTalentData';

export function TalentStructure() {
  const steps = PCCOE_GOT_TALENT_DATA.structureSteps;

  return (
    <div
      style={{
        background: 'rgba(12, 13, 18, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '8px',
        padding: 'clamp(24px, 3.5vw, 36px)',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '22px' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: 'var(--accent-red)',
            textTransform: 'uppercase',
            marginBottom: '6px',
          }}
        >
          PROGRESSIVE FLOW
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 900,
            letterSpacing: '0.04em',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          EVENT STRUCTURE
        </h2>
      </div>

      {/* 11 Steps List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {steps.map((step) => (
          <div
            key={step.number}
            style={{
              display: 'grid',
              gridTemplateColumns: '42px 1fr',
              alignItems: 'center',
              gap: '14px',
              padding: '8px 12px',
              borderRadius: '4px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(225, 6, 0, 0.06)';
              e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            {/* Red Number Box */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 800,
                color: 'var(--accent-red)',
                background: 'rgba(225, 6, 0, 0.1)',
                border: '1px solid rgba(225, 6, 0, 0.25)',
                borderRadius: '3px',
                padding: '4px 0',
                textAlign: 'center',
                letterSpacing: '0.05em',
              }}
            >
              {step.number}
            </div>

            {/* Title & Description */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: '#8E8E98',
                  marginTop: '2px',
                  lineHeight: 1.35,
                }}
              >
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
