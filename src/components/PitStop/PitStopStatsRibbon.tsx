import React from 'react';
import { Users, Trophy, Flag, MapPin } from 'lucide-react';
import { PIT_STOP_PROTOCOL_DATA } from '../../data/pitStopProtocolData';

export function PitStopStatsRibbon() {
  const d = PIT_STOP_PROTOCOL_DATA;

  const stats = [
    {
      icon: Users,
      label: 'TEAM SIZE',
      value: d.teamSize,
      highlight: false,
    },
    {
      icon: Trophy,
      label: 'PRIZE POOL',
      value: d.prizePool,
      highlight: true,
    },
    {
      icon: Flag,
      label: 'EVENT TYPE',
      value: d.eventType,
      highlight: false,
    },
    {
      icon: MapPin,
      label: 'VENUE',
      value: d.venue,
      highlight: false,
    },
  ];

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1320px',
        margin: '0 auto 64px auto',
        padding: '0 clamp(16px, 4vw, 40px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
        }}
      >
        {stats.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              style={{
                background: '#0a0a0e',
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                transition: 'background 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#101015')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#0a0a0e')}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '6px',
                  background: 'rgba(225, 6, 0, 0.08)',
                  border: '1px solid rgba(225, 6, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-red)',
                  flexShrink: 0,
                }}
              >
                <IconComp size={22} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.18em',
                    color: '#8A8A93',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: item.highlight ? 'var(--font-racing)' : 'var(--font-display)',
                    fontSize: item.highlight ? '1.55rem' : '1.18rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: item.highlight ? 'var(--accent-red)' : '#FFFFFF',
                    lineHeight: 1.1,
                  }}
                >
                  {item.value}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
