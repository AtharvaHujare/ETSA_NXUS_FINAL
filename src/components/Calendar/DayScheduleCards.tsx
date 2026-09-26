import { DAYS_SCHEDULE, PIT_STOPS, type PitStop } from '../../data/calendarData';

interface DayScheduleCardsProps {
  selectedDay: 1 | 2;
  onSelectDay: (day: 1 | 2) => void;
  activeStopId: number;
  onSelectStop: (stop: PitStop) => void;
}

export function DayScheduleCards({
  selectedDay,
  onSelectDay,
  activeStopId,
  onSelectStop,
}: DayScheduleCardsProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        gap: '24px',
        width: '100%',
        maxWidth: '1360px',
        margin: '0 auto',
        pointerEvents: 'auto',
      }}
    >
      {DAYS_SCHEDULE.map((day) => {
        const isDaySelected = selectedDay === day.dayId;

        return (
          <div
            key={day.dayId}
            onClick={() => onSelectDay(day.dayId)}
            style={{
              position: 'relative',
              background:
                day.dayId === 1
                  ? 'linear-gradient(135deg, rgba(22, 10, 10, 0.88) 0%, rgba(10, 10, 14, 0.94) 100%)'
                  : 'linear-gradient(135deg, rgba(14, 18, 24, 0.88) 0%, rgba(10, 11, 15, 0.94) 100%)',
              border: isDaySelected
                ? `1px solid ${day.accentColor}`
                : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '20px 24px',
              backdropFilter: 'blur(16px)',
              boxShadow: isDaySelected
                ? `0 12px 36px rgba(0, 0, 0, 0.7), 0 0 24px ${
                    day.dayId === 1 ? 'rgba(225, 6, 0, 0.25)' : 'rgba(112, 144, 176, 0.25)'
                  }`
                : '0 8px 24px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Card Header: DAY 1 / DAY 2 badge + Date + Checkered flag */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  {/* Badge */}
                  <div
                    style={{
                      background: day.accentColor,
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-racing)',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      padding: '4px 16px',
                      borderRadius: '12px 0 12px 0',
                      boxShadow: `0 0 14px ${day.accentColor}66`,
                    }}
                  >
                    {day.dayTag}
                  </div>

                  {/* Date */}
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      color: '#E6E6E6',
                    }}
                  >
                    {day.dateFormatted}
                  </div>
                </div>

                {/* Stylized Checkered Flag Graphic */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 5px)',
                    gridTemplateRows: 'repeat(2, 5px)',
                    gap: '2px',
                    opacity: isDaySelected ? 0.85 : 0.4,
                  }}
                >
                  {[0, 1, 0, 1, 1, 0, 1, 0].map((val, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: val === 1 ? '#FFFFFF' : 'transparent',
                        border: val === 0 ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Timetable Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {day.sessions.map((session, sIdx) => {
                  const matchingStop = session.pitStopId
                    ? PIT_STOPS.find((s) => s.id === session.pitStopId)
                    : undefined;
                  const isSessionActive = matchingStop && matchingStop.id === activeStopId;

                  return (
                    <div
                      key={sIdx}
                      onClick={(e) => {
                        if (matchingStop) {
                          e.stopPropagation();
                          onSelectDay(day.dayId);
                          onSelectStop(matchingStop);
                        }
                      }}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        padding: '12px 14px',
                        borderRadius: '6px',
                        background: isSessionActive
                          ? 'rgba(225, 6, 0, 0.16)'
                          : 'rgba(255, 255, 255, 0.02)',
                        border: isSessionActive
                          ? '1px solid rgba(225, 6, 0, 0.55)'
                          : '1px solid rgba(255, 255, 255, 0.05)',
                        cursor: matchingStop ? 'pointer' : 'default',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (matchingStop && !isSessionActive) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (matchingStop && !isSessionActive) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                        }
                      }}
                    >
                      {/* Event Header Row: Time + Title + PIT badge */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                          flexWrap: 'wrap',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                          {/* Time Badge */}
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              color: isSessionActive ? '#FF4D4D' : day.accentColor,
                              letterSpacing: '0.08em',
                              background: 'rgba(255, 255, 255, 0.04)',
                              padding: '2px 8px',
                              borderRadius: '3px',
                              border: `1px solid ${isSessionActive ? 'rgba(225, 6, 0, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`,
                            }}
                          >
                            {session.time}
                          </span>

                          {/* Event Title */}
                          <span
                            style={{
                              fontFamily: 'var(--font-racing)',
                              fontSize: '0.94rem',
                              fontWeight: 700,
                              color: isSessionActive ? '#FFFFFF' : matchingStop ? '#F0F0F0' : '#888888',
                              letterSpacing: '0.04em',
                              textTransform: 'uppercase',
                            }}
                          >
                            {session.title}
                          </span>
                        </div>

                        {/* Pit Stop Badge Link */}
                        {matchingStop && (
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.62rem',
                              fontWeight: 800,
                              letterSpacing: '0.12em',
                              padding: '3px 9px',
                              background: isSessionActive
                                ? '#E10600'
                                : 'rgba(255, 255, 255, 0.06)',
                              color: '#FFFFFF',
                              borderRadius: '2px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              boxShadow: isSessionActive ? '0 0 12px rgba(225, 6, 0, 0.6)' : 'none',
                              flexShrink: 0,
                            }}
                          >
                            PIT {matchingStop.stopNumber}
                          </span>
                        )}
                      </div>

                      {/* Location / Subtitle */}
                      {session.location && (
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            color: '#8E8E96',
                            letterSpacing: '0.03em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}
                        >
                          <span style={{ color: day.accentColor }}>•</span>
                          <span>{session.location}</span>
                        </div>
                      )}

                      {session.subtitle && !session.rounds && (
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.66rem',
                            color: '#76767E',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {session.subtitle}
                        </div>
                      )}

                      {/* Nested Rounds Breakdown (e.g. for Pit Stop Protocol) */}
                      {session.rounds && (
                        <div
                          style={{
                            marginTop: '4px',
                            paddingTop: '6px',
                            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                          }}
                        >
                          {session.rounds.map((round, rIdx) => (
                            <div
                              key={rIdx}
                              style={{
                                display: 'grid',
                                gridTemplateColumns: 'clamp(115px, 28%, 140px) 1fr',
                                gap: '8px',
                                alignItems: 'center',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.68rem',
                              }}
                            >
                              <span
                                style={{
                                  color: isSessionActive ? '#FFA0A0' : '#A0A0A8',
                                  fontWeight: 600,
                                  letterSpacing: '0.02em',
                                }}
                              >
                                {round.time}
                              </span>
                              <span
                                style={{
                                  color: '#CCCCCC',
                                  letterSpacing: '0.01em',
                                }}
                              >
                                {round.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Card Footer Tagline (Matching Reference Image) */}
            <div
              style={{
                marginTop: '22px',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.64rem',
                letterSpacing: '0.24em',
                color: day.accentColor,
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              {day.tagline}
            </div>
          </div>
        );
      })}
    </div>
  );
}
