import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { PIT_STOP_PROTOCOL_DATA } from '../../data/pitStopProtocolData';

export function PitStopFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = PIT_STOP_PROTOCOL_DATA.faqs;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      style={{
        width: '100%',
        maxWidth: '1320px',
        margin: '0 auto 80px auto',
        padding: '0 clamp(16px, 4vw, 40px)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: '#8A8A93',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          QUESTIONS & ANSWERS
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4.4vw, 3.4rem)',
            fontWeight: 900,
            letterSpacing: '0.03em',
            lineHeight: 1.05,
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: '#FFFFFF' }}>EVENT </span>
          <span style={{ color: 'var(--accent-red)' }}>FAQ</span>
        </h2>
      </div>

      {/* Accordion List */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              style={{
                background: isOpen ? '#0c0d12' : '#08080b',
                border: isOpen ? '1px solid rgba(225, 6, 0, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                overflow: 'hidden',
                transition: 'all 0.25s ease',
              }}
            >
              <button
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <HelpCircle
                    size={18}
                    style={{
                      color: isOpen ? 'var(--accent-red)' : '#66666E',
                      flexShrink: 0,
                      transition: 'color 0.2s ease',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      letterSpacing: '0.02em',
                      color: isOpen ? '#FFFFFF' : '#D0D0D8',
                    }}
                  >
                    {faq.question}
                  </span>
                </div>

                <div
                  style={{
                    color: isOpen ? 'var(--accent-red)' : '#7E7E88',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: '0 24px 22px 56px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.94rem',
                    lineHeight: 1.65,
                    color: '#B4B4BC',
                    borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                    paddingTop: '14px',
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
