import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Flag } from 'lucide-react';

export function CalendarSection() {
  const [selectedDay, setSelectedDay] = useState(0);

  const raceSchedule = [
    {
      day: 'DAY 01',
      date: '12 MAR 2026',
      title: 'SCRUTINEERING & TELEMETRY FLAG-OFF',
      subtitle: 'Technical inspection, simulator practice, and autonomous track trials',
      sessions: [
        {
          time: '09:00 — 10:30',
          title: 'Opening Keynote: Next-Gen EV & Autonomous Racing Systems',
          location: 'Main Auditorium / Pit Building',
          status: 'FLAG OFF',
          tag: 'CEREMONY',
        },
        {
          time: '11:00 — 14:00',
          title: 'Aero-Hack: Phase 1 Telemetry Stream Integration',
          location: 'Computing Grid Lab 4',
          status: 'TIMED SESSION',
          tag: 'TECHNICAL',
        },
        {
          time: '14:30 — 18:00',
          title: 'Robo-GP Chassis Scrutineering & Calibration Runs',
          location: 'Arena Proving Ground',
          status: 'SCRUTINEERING',
          tag: 'COMPETITIVE',
        },
        {
          time: '18:30 — 21:00',
          title: 'Sim Racing Warm-up & Virtual Circuit Time Trials',
          location: 'Sim Rig Dome',
          status: 'PRACTICE',
          tag: 'ESPORTS',
        },
      ],
    },
    {
      day: 'DAY 02',
      date: '13 MAR 2026',
      title: 'QUALIFYING & CIRCUIT TIME ATTACK',
      subtitle: 'Knockout heats, aerodynamic jury review, and 24h hack sprints',
      sessions: [
        {
          time: '09:30 — 12:30',
          title: 'Robo-GP Circuit Knockouts: Quarter & Semi-Final Heats',
          location: 'Arena Proving Ground',
          status: 'ELIMINATION',
          tag: 'COMPETITIVE',
        },
        {
          time: '13:00 — 15:30',
          title: 'Livery & Vehicle Aerodynamics: CFD Jury Defense',
          location: 'Design Studio Amphitheatre',
          status: 'JURY DEFENSE',
          tag: 'CREATIVE',
        },
        {
          time: '16:00 — 19:30',
          title: 'Apex Grand Prix: Pole Position Qualifying Sessions',
          location: 'Sim Rig Dome',
          status: 'QUALIFYING',
          tag: 'ESPORTS',
        },
        {
          time: '20:00 — 23:00',
          title: 'Pit Crew Networking & Industry Tech Lounge',
          location: 'Paddock Club Lawn',
          status: 'NETWORKING',
          tag: 'PADDOCK',
        },
      ],
    },
    {
      day: 'DAY 03',
      date: '14 MAR 2026',
      title: 'CHAMPIONSHIP PODIUM FINALE',
      subtitle: 'Final race features, grand exhibition, and prize presentation',
      sessions: [
        {
          time: '10:00 — 12:30',
          title: 'Aero-Hack: Final Presentation & Autonomous Demo Run',
          location: 'Main Auditorium',
          status: 'SHOWCASE',
          tag: 'TECHNICAL',
        },
        {
          time: '13:30 — 16:00',
          title: 'Robo-GP Grand Finale & Arena Destruction Bout',
          location: 'Arena Proving Ground',
          status: 'FINALE',
          tag: 'COMPETITIVE',
        },
        {
          time: '16:30 — 18:30',
          title: 'Apex Simulator 25-Lap Championship Grand Prix',
          location: 'Sim Rig Dome / Live Stream',
          status: 'FEATURE RACE',
          tag: 'ESPORTS',
        },
        {
          time: '19:00 — 21:30',
          title: 'Podium Presentation, Trophy Gala & Closing Ceremony',
          location: 'Main Auditorium',
          status: 'PODIUM',
          tag: 'CEREMONY',
        },
      ],
    },
  ];

  const currentSchedule = raceSchedule[selectedDay];

  return (
    <section
      id="calendar"
      style={{
        position: 'relative',
        backgroundColor: '#050505',
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
            marginBottom: '56px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '28px',
          }}
        >
          <div>
            <div className="racing-tag" style={{ marginBottom: '12px' }}>
              TIMETABLE // PUNE PADDOCK
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
              CALENDAR
            </h2>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              color: '#888888',
              textAlign: 'right',
            }}
          >
            LOCATION // <span style={{ color: '#F0F0F0', fontWeight: 600 }}>PCCOE CAMPUS, PUNE</span>
          </div>
        </div>

        {/* Day Selector Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          {raceSchedule.map((day, idx) => {
            const isSelected = selectedDay === idx;
            return (
              <button
                key={day.day}
                onClick={() => setSelectedDay(idx)}
                style={{
                  background: isSelected ? 'var(--accent-red)' : 'rgba(255, 255, 255, 0.03)',
                  border: isSelected
                    ? '1px solid var(--accent-red-bright)'
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  color: isSelected ? '#FFFFFF' : '#8E8E93',
                  padding: '14px 28px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.15em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.25s ease',
                }}
              >
                <span style={{ fontWeight: 700 }}>{day.day}</span>
                <span style={{ opacity: 0.7 }}>—</span>
                <span>{day.date}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Day Info Header */}
        <div
          style={{
            background: '#09090b',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px 32px',
            marginBottom: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-racing)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.08em',
                marginBottom: '4px',
              }}
            >
              {currentSchedule.title}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: '#888888',
              }}
            >
              {currentSchedule.subtitle}
            </div>
          </div>
          <div
            style={{
              padding: '6px 14px',
              border: '1px solid var(--accent-red-border)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--accent-red)',
              letterSpacing: '0.2em',
            }}
          >
            OFFICIAL RACE TIMETABLE
          </div>
        </div>

        {/* Sessions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {currentSchedule.sessions.map((session, sIdx) => (
            <div
              key={sIdx}
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 1.5fr 1fr 140px',
                alignItems: 'center',
                background: '#0b0b0d',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '20px 28px',
                transition: 'all 0.25s ease',
              }}
              className="calendar-row"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.4)';
                e.currentTarget.style.background = '#101014';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.background = '#0b0b0d';
              }}
            >
              {/* Time */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: '#FFFFFF',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                }}
              >
                {session.time}
              </div>

              {/* Title */}
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#E6E6E6',
                  paddingRight: '16px',
                }}
              >
                {session.title}
              </div>

              {/* Location */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#888888',
                  letterSpacing: '0.08em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <MapPin size={13} style={{ color: 'var(--accent-red)' }} />
                <span>{session.location}</span>
              </div>

              {/* Status Badge */}
              <div style={{ textAlign: 'right' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.64rem',
                    letterSpacing: '0.16em',
                    color: '#BBBBBB',
                  }}
                >
                  {session.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .calendar-row {
            grid-template-columns: 1fr !important;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
