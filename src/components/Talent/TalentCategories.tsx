import React from 'react';
import { Mic, Activity, Music, Smile, Volume2, BookOpen, Film, Radio, Wand2, Star } from 'lucide-react';
import { PCCOE_GOT_TALENT_DATA } from '../../data/pccoeGotTalentData';

export function TalentCategories() {
  const categories = PCCOE_GOT_TALENT_DATA.categories;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'mic': return <Mic size={20} />;
      case 'activity': return <Activity size={20} />;
      case 'music': return <Music size={20} />;
      case 'smile': return <Smile size={20} />;
      case 'volume-2': return <Volume2 size={20} />;
      case 'book-open': return <BookOpen size={20} />;
      case 'film': return <Film size={20} />;
      case 'radio': return <Radio size={20} />;
      case 'wand': return <Wand2 size={20} />;
      default: return <Star size={20} />;
    }
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1360px',
        margin: '0 auto 40px auto',
        padding: '0 clamp(16px, 3.5vw, 40px)',
      }}
    >
      <div
        style={{
          background: 'rgba(12, 13, 18, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          padding: 'clamp(28px, 4vw, 44px)',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '28px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '20px',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                color: 'var(--accent-red)',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              OPEN TO ALL PCCOE STUDENTS // SOLO OR GROUP
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              PERFORMANCE CATEGORIES
            </h2>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#8A8A93',
              letterSpacing: '0.14em',
            }}
          >
            STAGE TIME LIMITS APPLIED PER ACT
          </div>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '14px',
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '16px 18px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(225, 6, 0, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(225, 6, 0, 0.12)',
                  border: '1px solid rgba(225, 6, 0, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-red)',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                {getCategoryIcon(cat.iconName)}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-racing)',
                    fontSize: '0.96rem',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  {cat.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: '#8E8E98',
                    lineHeight: 1.35,
                  }}
                >
                  {cat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
