import React, { useState } from 'react';
import { NEXUS_EVENTS, type NexusEvent } from '../data/nexusEventsData';

interface EventsSectionProps {
  onSelectEvent?: (eventName: string) => void;
  onNavigateEvent?: (route: string) => void;
}

export function EventsSection({ onSelectEvent, onNavigateEvent }: EventsSectionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentEvent = NEXUS_EVENTS[activeTab];

  const handleEnterPitStop = (route: string) => {
    if (onNavigateEvent) {
      onNavigateEvent(route);
    } else {
      window.location.hash = route;
    }
  };

  return (
    <section
      id="events"
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
            marginBottom: '64px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '28px',
          }}
        >
          <div>
            <div className="racing-tag" style={{ marginBottom: '12px' }}>
              CHAMPIONSHIP GRID // 2026
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
              EVENTS
            </h2>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.2em',
              color: '#888888',
              textAlign: 'right',
            }}
          >
            TOTAL PURSE // <span style={{ color: 'var(--accent-red)', fontWeight: 700 }}>₹4,10,000+</span>
          </div>
        </div>

        {/* Editorial Category Selector for Events */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${NEXUS_EVENTS.length}, 1fr)`,
            gap: '1px',
            background: 'rgba(255, 255, 255, 0.08)',
            marginBottom: '48px',
          }}
          className="event-tabs-grid"
        >
          {NEXUS_EVENTS.map((evt, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={evt.id}
                onClick={() => setActiveTab(idx)}
                onMouseEnter={() => setActiveTab(idx)}
                style={{
                  background: isSelected ? '#121216' : '#09090b',
                  border: 'none',
                  padding: '24px 18px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.25s ease',
                }}
              >
                {/* Active Red Indicator bar */}
                {isSelected && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'var(--accent-red)',
                    }}
                  />
                )}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: isSelected ? 'var(--accent-red)' : '#555555',
                      letterSpacing: '0.18em',
                      fontWeight: 700,
                    }}
                  >
                    {evt.number}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.60rem',
                      color: isSelected ? '#E0E0E0' : '#444444',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {evt.category}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-racing)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: isSelected ? '#FFFFFF' : '#888888',
                    transition: 'color 0.2s ease',
                    textTransform: 'uppercase',
                    lineHeight: 1.2,
                  }}
                >
                  {evt.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Editorial Focus View of Selected Event */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '48px',
            background: '#0d0d10',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: 'clamp(32px, 5vw, 56px)',
            position: 'relative',
            overflow: 'hidden',
          }}
          className="editorial-event-card"
        >
          {/* Subtle Background Watermark Number */}
          <div
            style={{
              position: 'absolute',
              right: '-20px',
              bottom: '-30px',
              fontFamily: 'var(--font-display)',
              fontSize: '16rem',
              fontWeight: 900,
              color: 'rgba(255, 255, 255, 0.018)',
              userSelect: 'none',
              lineHeight: 1,
              pointerEvents: 'none',
            }}
          >
            {currentEvent.number}
          </div>

          {/* Left Column: Event Title, Narrative, Tags, Primary CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.22em',
                  color: 'var(--accent-red)',
                  marginBottom: '12px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>{currentEvent.pitStop}</span>
                <span style={{ color: '#444444' }}>//</span>
                <span>{currentEvent.category}</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                }}
              >
                {currentEvent.name}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-racing)',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--accent-red)',
                  marginBottom: '18px',
                }}
              >
                "{currentEvent.tagline}"
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.02rem',
                  color: '#CCCCCC',
                  lineHeight: 1.6,
                  marginBottom: '28px',
                  maxWidth: '540px',
                }}
              >
                {currentEvent.description}
              </p>

              {/* Technical Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {currentEvent.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.12em',
                      padding: '5px 12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#AAAAAA',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlighted Primary CTA: ENTER PIT STOP XX → */}
            <div>
              <a
                href={currentEvent.route}
                onClick={(e) => {
                  e.preventDefault();
                  handleEnterPitStop(currentEvent.route);
                }}
                className="btn-racing-primary pit-stop-primary-cta"
                style={{
                  padding: '16px 36px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: '#E10600',
                  borderColor: '#FF2A2A',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 18px rgba(225, 6, 0, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
              >
                <span>ENTER {currentEvent.pitStop}</span>
                <span className="btn-arrow" style={{ fontSize: '1rem', fontWeight: 900 }}>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Telemetry & Specs Grid */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '24px',
              borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
              paddingLeft: 'clamp(20px, 3vw, 40px)',
            }}
            className="specs-column"
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.25em',
                  color: '#777777',
                  marginBottom: '6px',
                }}
              >
                PRIZE POOL
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-racing)',
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '0.08em',
                }}
              >
                {currentEvent.prizePool}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.25em',
                  color: '#777777',
                  marginBottom: '6px',
                }}
              >
                CHALLENGE FORMAT
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: '#E0E0E0',
                  fontWeight: 500,
                }}
              >
                {currentEvent.format}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.25em',
                  color: '#777777',
                  marginBottom: '6px',
                }}
              >
                CREW COMPOSITION
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: '#E0E0E0',
                  fontWeight: 500,
                }}
              >
                {currentEvent.teamSize}
              </div>
            </div>

            <div
              style={{
                marginTop: '12px',
                padding: '14px 18px',
                background: 'rgba(225, 6, 0, 0.06)',
                borderLeft: '2px solid var(--accent-red)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: '#BBBBBB',
                letterSpacing: '0.12em',
                lineHeight: 1.5,
              }}
            >
              CERTIFIED BY PCCOE ENTC RACING SCRUTINEERING DIVISION
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .event-tabs-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 900px) {
          .editorial-event-card {
            grid-template-columns: 1fr !important;
          }
          .specs-column {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 24px;
          }
        }
        @media (max-width: 680px) {
          .event-tabs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
