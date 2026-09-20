import React from 'react';
import { ArrowLeft, Calendar, MapPin, Users, Wrench } from 'lucide-react';
import type { NexusEvent } from '../../data/nexusEventsData';

interface EventPlaceholderPageProps {
  event: NexusEvent;
  onBackToEvents: () => void;
}

export function EventPlaceholderPage({ event, onBackToEvents }: EventPlaceholderPageProps) {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '85vh',
        backgroundColor: '#050507',
        color: '#FFFFFF',
        paddingTop: '100px',
        paddingBottom: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflowX: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 40px)',
        }}
      >
        {/* Back Link */}
        <button
          onClick={onBackToEvents}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#888892',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            padding: '6px 0',
            marginBottom: '36px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#888892')}
        >
          <ArrowLeft size={14} />
          <span>BACK TO EVENTS</span>
        </button>

        {/* Pit Stop Card Shell */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(16, 17, 22, 0.9) 0%, rgba(9, 10, 14, 0.95) 100%)',
            border: '1px solid rgba(225, 6, 0, 0.35)',
            borderRadius: '8px',
            padding: 'clamp(28px, 5vw, 56px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(225, 6, 0, 0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Watermark */}
          <div
            style={{
              position: 'absolute',
              right: '-10px',
              bottom: '-20px',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(8rem, 18vw, 15rem)',
              fontWeight: 900,
              color: 'rgba(255, 255, 255, 0.02)',
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            {event.number}
          </div>

          {/* Pit Stop Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 14px',
              background: 'rgba(225, 6, 0, 0.12)',
              border: '1px solid rgba(225, 6, 0, 0.45)',
              borderRadius: '20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: 'var(--accent-red)',
              marginBottom: '18px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-red)',
                boxShadow: '0 0 6px var(--accent-red)',
              }}
            />
            <span>{event.pitStop} // {event.category}</span>
          </div>

          {/* Event Title */}
          <h1
            style={{
              fontFamily: 'var(--font-racing)',
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight: 900,
              fontStyle: 'italic',
              letterSpacing: '0.02em',
              color: '#FFFFFF',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              margin: '0 0 12px 0',
            }}
          >
            {event.name}
          </h1>

          <div
            style={{
              fontFamily: 'var(--font-racing)',
              fontSize: '1rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: 'var(--accent-red)',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            "{event.tagline}"
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.02rem',
              lineHeight: 1.6,
              color: '#CCCCCC',
              maxWidth: '640px',
              marginBottom: '32px',
            }}
          >
            {event.description}
          </p>

          {/* Under Construction Notice */}
          <div
            style={{
              padding: '16px 20px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderLeft: '3px solid var(--accent-red)',
              borderRadius: '2px',
              maxWidth: '560px',
              marginBottom: '36px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: '#FFFFFF',
                marginBottom: '4px',
              }}
            >
              PIT STOP UNDER CONSTRUCTION
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: '#888892',
                letterSpacing: '0.08em',
                lineHeight: 1.4,
              }}
            >
              Full telemetry briefing, problem statement specifications, and rules for {event.name} will unlock shortly.
            </div>
          </div>

          <button
            onClick={onBackToEvents}
            className="btn-racing-primary"
            style={{ padding: '12px 28px', fontSize: '0.78rem' }}
          >
            <span>RETURN TO EVENTS GRID</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
