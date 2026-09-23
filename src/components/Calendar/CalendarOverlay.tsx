import { CALENDAR_DAYS_HEADER, PIT_STOPS, type PitStop } from '../../data/calendarData';

interface CalendarOverlayProps {
  selectedDay: 1 | 2;
  onSelectDay: (day: 1 | 2) => void;
  activeStop: PitStop;
  onSelectStop: (stop: PitStop) => void;
}

export function CalendarOverlay({
  selectedDay,
  onSelectDay,
  activeStop,
  onSelectStop,
}: CalendarOverlayProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Allow clicks to pass through to 3D canvas except on interactive elements
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(16px, 3.5vw, 44px)',
      }}
    >
      {/* Top Bar: Left Title & Right Date Selector */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '24px',
          flexWrap: 'wrap',
        }}
      >
        {/* Top-Left: Event Calendar Title (Matching Reference Image) */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              color: 'var(--accent-red)',
              textTransform: 'uppercase',
              marginBottom: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>//</span>
            <span>EVENT CALENDAR</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-racing)',
              fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
              fontWeight: 900,
              fontStyle: 'italic',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
              margin: '0 0 10px 0',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ color: '#FFFFFF', display: 'block' }}>RACE</span>
            <span
              style={{
                color: '#E10600',
                textShadow: '0 0 35px rgba(225, 6, 0, 0.45)',
                display: 'block',
              }}
            >
              SCHEDULE
            </span>
          </h1>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.22em',
              color: '#888888',
              textTransform: 'uppercase',
            }}
          >
            TWO DAYS. FOUR STOPS. ENDLESS POSSIBILITIES.
          </div>
        </div>

        {/* Top-Right: Date Switcher HUD & Motto (Matching Reference Image) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            pointerEvents: 'auto',
          }}
        >
          {/* Dark HUD Calendar Box */}
          <div
            style={{
              background: 'rgba(9, 10, 14, 0.88)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '6px',
              padding: '14px 20px',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
            }}
          >
            {/* Header: OCT 2026 */}
            <div
              style={{
                fontFamily: 'var(--font-racing)',
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: '#FFFFFF',
                marginBottom: '10px',
                textAlign: 'left',
              }}
            >
              OCT 2026
            </div>

            {/* Days Row: MON 5 .. FRI 9 [active] .. SAT 10 [active] .. SUN 11 */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {CALENDAR_DAYS_HEADER.map((d) => {
                const isSelected = d.available && d.dayNumber === selectedDay;
                const isClickable = d.available;

                return (
                  <button
                    key={d.dayName}
                    disabled={!isClickable}
                    onClick={() => {
                      if (d.dayNumber) {
                        onSelectDay(d.dayNumber);
                        // Also jump car to that day's first pit stop
                        const targetStop = PIT_STOPS.find((s) => s.dayNumber === d.dayNumber);
                        if (targetStop) onSelectStop(targetStop);
                      }
                    }}
                    style={{
                      background: isSelected
                        ? '#E10600'
                        : isClickable
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'transparent',
                      border: isSelected
                        ? '1px solid #FF3B30'
                        : isClickable
                        ? '1px solid rgba(255, 255, 255, 0.16)'
                        : '1px solid transparent',
                      borderRadius: isSelected ? '4px' : '3px',
                      padding: '6px 8px',
                      minWidth: '38px',
                      minHeight: '44px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      cursor: isClickable ? 'pointer' : 'default',
                      opacity: isClickable ? 1.0 : 0.35,
                      transition: 'all 0.25s ease',
                      boxShadow: isSelected ? '0 0 16px rgba(225, 6, 0, 0.6)' : 'none',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.55rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        color: isSelected ? '#FFFFFF' : '#888888',
                        marginBottom: '2px',
                      }}
                    >
                      {d.dayName}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-racing)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: isSelected ? '#FFFFFF' : isClickable ? '#E0E0E0' : '#555555',
                        lineHeight: 1,
                      }}
                    >
                      {d.dateNum}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Quote / Motto */}
          <div
            className="calendar-motto"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              lineHeight: 1.4,
              letterSpacing: '0.22em',
              color: '#777777',
              textTransform: 'uppercase',
              borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
              paddingLeft: '14px',
              maxWidth: '120px',
            }}
          >
            MORE THAN AN EVENT. A MOVEMENT.
          </div>
        </div>
      </div>

      {/* Middle Floating Telemetry & Watermarks */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: 'none',
          marginTop: 'auto',
          marginBottom: 'auto',
        }}
      >
        {/* Left Watermark Stencil */}
        <div
          className="calendar-stencil-left"
          style={{
            fontFamily: 'var(--font-racing)',
            fontStyle: 'italic',
            fontSize: '1.5rem',
            lineHeight: 1.1,
            color: 'rgba(255, 255, 255, 0.08)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            userSelect: 'none',
          }}
        >
          SAME
          <br />
          TRACK
          <br />
          DIFFERENT
          <br />
          <span style={{ color: 'rgba(225, 6, 0, 0.15)' }}>TALENT</span>
        </div>

        {/* Right Vertical Race Progress Indicator (01 - 04) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px',
            pointerEvents: 'auto',
            background: 'rgba(10, 11, 14, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '16px 10px',
            borderRadius: '24px',
            backdropFilter: 'blur(10px)',
          }}
        >
          {PIT_STOPS.map((stop) => {
            const isActive = activeStop.id === stop.id;
            return (
              <button
                key={stop.id}
                onClick={() => onSelectStop(stop)}
                title={`Pit Stop ${stop.id}: ${stop.name}`}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 8px',
                  minHeight: '38px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: isActive ? '#E10600' : '#666666',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {stop.stopNumber}
                </span>
                <span
                  style={{
                    width: isActive ? '12px' : '4px',
                    height: '2px',
                    backgroundColor: isActive ? '#E10600' : 'rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 0 8px #E10600' : 'none',
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .calendar-motto {
            display: none !important;
          }
          .calendar-stencil-left {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
