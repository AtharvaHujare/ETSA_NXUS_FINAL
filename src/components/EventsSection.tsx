import React, { useState } from 'react';
import { ArrowRight, Cpu, Trophy, Sparkles, Gamepad2, ShieldAlert, Award } from 'lucide-react';

interface EventCategory {
  id: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  prizePool: string;
  format: string;
  teamSize: string;
  tags: string[];
}

interface EventsSectionProps {
  onSelectEvent: (eventName: string) => void;
}

export function EventsSection({ onSelectEvent }: EventsSectionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories: EventCategory[] = [
    {
      id: 'technical',
      number: '01',
      category: 'TECHNICAL',
      title: 'AERO-HACK & AUTONOMOUS AI',
      tagline: 'High-speed algorithmic optimization and vehicle telemetry',
      description:
        'A 36-hour grueling high-performance computing sprint. Teams architect real-time computer vision, obstacle avoidance, and CAN bus telemetry processing models simulating Formula 1 telemetry datasets.',
      prizePool: '₹1,50,000',
      format: '36-Hour Hackathon',
      teamSize: '2 — 4 Engineers',
      tags: ['AI / ML', 'Telemetry Systems', 'Edge Robotics', 'Computer Vision'],
    },
    {
      id: 'competitive',
      number: '02',
      category: 'COMPETITIVE',
      title: 'ROBO-GP CIRCUIT WARFARE',
      tagline: 'Precision wireless combat and circuit line sprint',
      description:
        'Custom-engineered battle chassis compete in high-velocity obstacle circuits and line-follower sprint tracks. Test acceleration, structural durability, torque transfer, and remote pilot precision under race conditions.',
      prizePool: '₹1,25,000',
      format: 'Time Attack + Arena Knockout',
      teamSize: '2 — 5 Pilots',
      tags: ['Hardware Battle', 'Speed Trials', 'Chassis Engineering', 'RF Protocol'],
    },
    {
      id: 'creative',
      number: '03',
      category: 'CREATIVE',
      title: 'LIVERY & VEHICLE AERODYNAMICS',
      tagline: 'Industrial styling, CFD flow simulation, and 3D concept render',
      description:
        'Redefining automotive aesthetics. Designers and industrial engineers create next-generation aerodynamic liveries, carbon fiber body flow profiles, and digital twins evaluated by international motorsport styling directors.',
      prizePool: '₹75,000',
      format: 'CFD & Concept Pitch',
      teamSize: 'Solo or Duo',
      tags: ['Blender / CAD', 'CFD Simulation', 'Livery Design', 'Brand Identity'],
    },
    {
      id: 'esports',
      number: '04',
      category: 'SIM RACING',
      title: 'APEX SIMULATOR GRAND PRIX',
      tagline: 'Direct-drive force feedback virtual Formula 1 tournament',
      description:
        'Official PCCOE Sim-Racing Invitational. Racers pilot custom-rigged direct drive simulators across laser-scanned international circuits in identical Formula 1 machinery with live pit-wall stewards.',
      prizePool: '₹60,000',
      format: 'Hot Lap Qualifying + 20-Lap Feature Race',
      teamSize: 'Solo Driver',
      tags: ['Assetto Corsa', 'Telemetry Analysis', 'Driver Fitness', 'Force Feedback'],
    },
  ];

  const currentEvent = categories[activeTab];

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

        {/* Editorial Category Selector */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'rgba(255, 255, 255, 0.08)',
            marginBottom: '48px',
          }}
          className="event-tabs-grid"
        >
          {categories.map((cat, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                onMouseEnter={() => setActiveTab(idx)}
                style={{
                  background: isSelected ? '#121216' : '#09090b',
                  border: 'none',
                  padding: '24px 20px',
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
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: isSelected ? 'var(--accent-red)' : '#555555',
                    letterSpacing: '0.2em',
                    marginBottom: '8px',
                  }}
                >
                  {cat.number}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-racing)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: isSelected ? '#FFFFFF' : '#888888',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {cat.category}
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

          {/* Left Column: Event Title, Narrative, Tags */}
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
                }}
              >
                SERIES // {currentEvent.category}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  marginBottom: '16px',
                }}
              >
                {currentEvent.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
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

            {/* Action Button */}
            <div>
              <button
                onClick={() => onSelectEvent(currentEvent.title)}
                className="btn-racing-primary"
              >
                <span>ENTER COMPETITION</span>
                <span className="btn-arrow">→</span>
              </button>
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
        @media (max-width: 900px) {
          .event-tabs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
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
      `}</style>
    </section>
  );
}
