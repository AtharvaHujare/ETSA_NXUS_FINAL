import React, { useState, useCallback, useRef, useEffect, Suspense, lazy } from 'react';
import { PIT_STOPS, type PitStop } from '../data/calendarData';
import { CalendarOverlay } from './Calendar/CalendarOverlay';
import { DayScheduleCards } from './Calendar/DayScheduleCards';
import { EventDetailModal } from './Calendar/EventDetailModal';

const CircuitScene = lazy(() =>
  import('./Calendar/CircuitScene').then((mod) => ({ default: mod.CircuitScene }))
);

interface CalendarSectionProps {
  onRegisterClick?: (eventName?: string) => void;
  canLoad3D?: boolean;
}

export function CalendarSection({ onRegisterClick, canLoad3D = true }: CalendarSectionProps) {
  const [selectedDay, setSelectedDay] = useState<1 | 2>(1);
  const [activeStop, setActiveStop] = useState<PitStop>(PIT_STOPS[0]);
  const [carProgress, setCarProgress] = useState<number>(PIT_STOPS[0].trackProgress);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!canLoad3D) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
        }
      },
      { rootMargin: '350px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [canLoad3D]);

  // When a pit stop is selected (via 3D marker, vertical HUD, or schedule row)
  const handleSelectStop = useCallback((stop: PitStop) => {
    setActiveStop(stop);
    setSelectedDay(stop.dayNumber);
    setCarProgress(stop.trackProgress);
  }, []);

  // When a day is clicked (OCT 9 vs OCT 10)
  const handleSelectDay = useCallback((day: 1 | 2) => {
    setSelectedDay(day);
    // Find the first pit stop of that day and navigate car to it
    const dayFirstStop = PIT_STOPS.find((s) => s.dayNumber === day);
    if (dayFirstStop) {
      setActiveStop(dayFirstStop);
      setCarProgress(dayFirstStop.trackProgress);
    }
  }, []);

  const handleRegister = (name: string) => {
    if (onRegisterClick) {
      onRegisterClick(name);
    }
  };

  return (
    <section
      id="calendar"
      ref={sectionRef}
      style={{
        position: 'relative',
        backgroundColor: '#050507',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        minHeight: '100vh',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      {/* 1. Main 3D Race Circuit Interactive Stage */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(580px, 80vh, 880px)',
          backgroundColor: '#050507',
        }}
      >
        {/* Real 3D WebGL Canvas Scene - Only loaded when scrolled near and intro is finished */}
        {canLoad3D && isNearViewport ? (
          <Suspense
            fallback={
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: '#050507',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.70rem',
                    letterSpacing: '0.2em',
                    color: 'rgba(255, 255, 255, 0.3)',
                  }}
                >
                  INITIALIZING CIRCUIT TELEMETRY...
                </div>
              </div>
            }
          >
            <CircuitScene
              activeStop={activeStop}
              onSelectStop={handleSelectStop}
              carProgress={carProgress}
            />
          </Suspense>
        ) : (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#050507',
            }}
          />
        )}

        {/* Editorial Motorsport HUD & Date Switcher Overlay */}
        <CalendarOverlay
          selectedDay={selectedDay}
          onSelectDay={handleSelectDay}
          activeStop={activeStop}
          onSelectStop={handleSelectStop}
        />

        {/* Bottom vignette gradient blending 3D scene into schedule timetable */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '140px',
            background: 'linear-gradient(to top, #050507 0%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 5,
          }}
        />
      </div>

      {/* 2. Focused Active Pit Stop Detail Bar */}
      <div style={{ padding: '0 clamp(16px, 4vw, 48px)', marginTop: '-40px', position: 'relative', zIndex: 20 }}>
        <EventDetailModal
          activeStop={activeStop}
          onSelectStop={handleSelectStop}
          onRegisterClick={handleRegister}
        />

        {/* 3. Dual-Day Timetable Cards (DAY 1 & DAY 2) Matching Reference Design */}
        <DayScheduleCards
          selectedDay={selectedDay}
          onSelectDay={handleSelectDay}
          activeStopId={activeStop.id}
          onSelectStop={handleSelectStop}
        />

        {/* 4. Editorial Bottom Sub-Bar */}
        <div
          style={{
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            color: '#666666',
          }}
        >
          <div>
            NEXUS 2026 // <span style={{ color: '#999999' }}>PCCOE ENTC</span>
          </div>
          <div style={{ color: '#888888', fontStyle: 'italic' }}>
            WHERE TECHNOLOGY MEETS SPEED
          </div>
          <div>
            OFFICIAL RACE CALENDAR // <span style={{ color: 'var(--accent-red)' }}>5 STOPS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CalendarSection;
