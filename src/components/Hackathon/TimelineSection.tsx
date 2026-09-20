import React from 'react';
import { HARDWARE_HACKATHON_DATA } from '../../data/hardwareHackathonData';

interface TimelineSectionProps {
  onViewFullTimeline?: () => void;
}

export function TimelineSection({ onViewFullTimeline }: TimelineSectionProps) {
  const { timeline } = HARDWARE_HACKATHON_DATA;

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: 'var(--accent-red)',
            textTransform: 'uppercase',
          }}
        >
          EVENT TIMELINE
        </div>

        {onViewFullTimeline && (
          <button
            onClick={onViewFullTimeline}
            style={{
              background: 'transparent',
              border: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: '#8A8A93',
              cursor: 'pointer',
              padding: 0,
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-red)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A93')}
          >
            VIEW FULL TIMELINE →
          </button>
        )}
      </div>

      {/* Timeline Rows List with red apex dots */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {timeline.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'grid',
              gridTemplateColumns: '130px 1fr',
              alignItems: 'center',
              gap: '12px',
              padding: '4px 0',
            }}
          >
            {/* Time with red dot */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-red)',
                  boxShadow: '0 0 6px rgba(225, 6, 0, 0.6)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  color: '#C0C0C8',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.time}
              </span>
            </div>

            {/* Event Name */}
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                fontWeight: item.isEvaluation ? 700 : 500,
                color: item.isEvaluation ? '#FFFFFF' : item.isBreak ? '#888892' : '#D0D0D8',
                lineHeight: 1.25,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
