import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import { PIT_STOPS, type PitStop } from '../../data/calendarData';

interface EventDetailModalProps {
  activeStop: PitStop;
  onSelectStop: (stop: PitStop) => void;
  onRegisterClick: (eventName: string) => void;
  onClose?: () => void;
}

export function EventDetailModal({
  activeStop,
  onSelectStop,
  onRegisterClick,
  onClose,
}: EventDetailModalProps) {
  const currentIndex = PIT_STOPS.findIndex((s) => s.id === activeStop.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + PIT_STOPS.length) % PIT_STOPS.length;
    onSelectStop(PIT_STOPS[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % PIT_STOPS.length;
    onSelectStop(PIT_STOPS[nextIndex]);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '860px',
        margin: '0 auto 24px auto',
        background: 'rgba(9, 10, 14, 0.94)',
        border: '1px solid rgba(225, 6, 0, 0.45)',
        borderRadius: '6px',
        padding: '18px 24px',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.7), 0 0 20px rgba(225, 6, 0, 0.2)',
        pointerEvents: 'auto',
        zIndex: 20,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        {/* Left Event Info */}
        <div style={{ flex: '1 1 340px' }}>
          {/* Top Tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '6px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 700,
                color: '#E10600',
                letterSpacing: '0.18em',
              }}
            >
              PIT STOP {activeStop.stopNumber}
            </span>
            <span style={{ color: '#555555' }}>//</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: '#888888',
                letterSpacing: '0.14em',
              }}
            >
              {activeStop.category}
            </span>
          </div>

          {/* Event Name */}
          <h3
            style={{
              fontFamily: 'var(--font-racing)',
              fontSize: '1.45rem',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
              margin: '0 0 6px 0',
              lineHeight: 1.1,
            }}
          >
            {activeStop.name}
          </h3>

          {/* Tagline */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.85)',
              letterSpacing: '0.06em',
              marginBottom: '8px',
            }}
          >
            "{activeStop.tagline}"
          </div>

          {/* Metadata badges */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#999999',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Calendar size={13} style={{ color: '#E10600' }} />
              {activeStop.dateStr}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <Clock size={13} style={{ color: '#E10600' }} />
              {activeStop.time}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <MapPin size={13} style={{ color: '#E10600' }} />
              {activeStop.location}
            </span>
          </div>
        </div>

        {/* Right Actions & Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          {/* Arrow Steppers */}
          <div style={{ display: 'flex', gap: '4px' }}>
            <button
              onClick={handlePrev}
              title="Previous Pit Stop"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                borderRadius: '3px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#E10600')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)')
              }
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              title="Next Pit Stop"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                borderRadius: '3px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#E10600')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)')
              }
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* View Event Button */}
          <a
            href={
              activeStop.id === 1
                ? '#events/hardware-hackathon'
                : activeStop.id === 2
                ? '#events/tech-event-2'
                : activeStop.id === 3
                ? '#events/pit-stop-protocol'
                : '#events/pccoe-got-talent'
            }
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textDecoration: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FFFFFF';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <span>VIEW EVENT</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Register Button */}
          <button
            onClick={() => onRegisterClick(activeStop.name)}
            className="btn-racing-primary"
            style={{
              padding: '8px 16px',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
            }}
          >
            <span>REGISTER</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
