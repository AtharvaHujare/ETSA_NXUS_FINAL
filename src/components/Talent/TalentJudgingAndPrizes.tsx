import React from 'react';
import { Star, Sparkles, UserCheck, Heart, Target, Users, Trophy } from 'lucide-react';
import { PCCOE_GOT_TALENT_DATA } from '../../data/pccoeGotTalentData';

export function TalentJudgingAndPrizes() {
  const d = PCCOE_GOT_TALENT_DATA;
  const criteria = d.judgingCriteria;
  const prizes = d.prizes;
  const coordinators = d.coordinators;

  const getCriteriaIcon = (icon: string) => {
    switch (icon) {
      case 'star': return <Star size={16} />;
      case 'sparkles': return <Sparkles size={16} />;
      case 'user-check': return <UserCheck size={16} />;
      case 'heart': return <Heart size={16} />;
      case 'target': return <Target size={16} />;
      default: return <Users size={16} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 1. Judging & Evaluation Card */}
      <div
        style={{
          background: 'rgba(12, 13, 18, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          padding: 'clamp(20px, 3vw, 28px)',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'var(--accent-red)',
              textTransform: 'uppercase',
              marginBottom: '4px',
            }}
          >
            SCORING PARAMETERS (1–10)
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 900,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
              margin: 0,
              textTransform: 'uppercase',
            }}
          >
            JUDGING & EVALUATION
          </h3>
        </div>

        {/* 6 Criteria Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '10px',
          }}
        >
          {criteria.map((c) => (
            <div
              key={c.title}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '4px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}
            >
              <div
                style={{
                  color: 'var(--accent-red)',
                  marginTop: '2px',
                  flexShrink: 0,
                }}
              >
                {getCriteriaIcon(c.icon)}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.80rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                  }}
                >
                  {c.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: '#8A8A93',
                    marginTop: '2px',
                    lineHeight: 1.3,
                  }}
                >
                  {c.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Prize Pool Card */}
      <div
        style={{
          background: 'rgba(12, 13, 18, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          padding: 'clamp(20px, 3vw, 28px)',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'var(--accent-red)',
              textTransform: 'uppercase',
              marginBottom: '4px',
            }}
          >
            PODIUM REWARDS
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 900,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
              margin: 0,
              textTransform: 'uppercase',
            }}
          >
            PRIZE POOL
          </h3>
        </div>

        {/* Podium Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr) 1.2fr',
            gap: '10px',
            marginBottom: '16px',
            alignItems: 'stretch',
          }}
          className="prize-podium-grid"
        >
          {/* 1st Place */}
          <div
            style={{
              background: 'rgba(255, 215, 0, 0.05)',
              border: '1px solid rgba(255, 215, 0, 0.25)',
              borderRadius: '4px',
              padding: '12px 8px',
              textAlign: 'center',
            }}
          >
            <Trophy size={18} style={{ color: '#FFD700', margin: '0 auto 6px auto' }} />
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.60rem', color: '#FFD700', fontWeight: 700 }}>
              1ST PLACE
            </div>
            <div style={{ fontFamily: 'var(--font-racing)', fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF' }}>
              ₹3,000
            </div>
          </div>

          {/* 2nd Place */}
          <div
            style={{
              background: 'rgba(224, 224, 224, 0.05)',
              border: '1px solid rgba(224, 224, 224, 0.2)',
              borderRadius: '4px',
              padding: '12px 8px',
              textAlign: 'center',
            }}
          >
            <Trophy size={18} style={{ color: '#E0E0E0', margin: '0 auto 6px auto' }} />
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.60rem', color: '#CCCCCC', fontWeight: 700 }}>
              2ND PLACE
            </div>
            <div style={{ fontFamily: 'var(--font-racing)', fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF' }}>
              ₹2,000
            </div>
          </div>

          {/* 3rd Place */}
          <div
            style={{
              background: 'rgba(205, 127, 50, 0.05)',
              border: '1px solid rgba(205, 127, 50, 0.2)',
              borderRadius: '4px',
              padding: '12px 8px',
              textAlign: 'center',
            }}
          >
            <Trophy size={18} style={{ color: '#CD7F32', margin: '0 auto 6px auto' }} />
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.60rem', color: '#CD7F32', fontWeight: 700 }}>
              3RD PLACE
            </div>
            <div style={{ fontFamily: 'var(--font-racing)', fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF' }}>
              ₹1,000
            </div>
          </div>

          {/* Total Purse Box */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(225, 6, 0, 0.16) 0%, rgba(10, 10, 14, 0.95) 100%)',
              border: '1px solid var(--accent-red)',
              borderRadius: '4px',
              padding: '12px 14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 16px rgba(225, 6, 0, 0.25)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent-red)', fontWeight: 800, letterSpacing: '0.12em' }}>
              TOTAL PRIZE POOL
            </div>
            <div style={{ fontFamily: 'var(--font-racing)', fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF' }}>
              {prizes.total}
            </div>
          </div>
        </div>

        {/* Certificate Breakdown */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: '#8A8A93',
            letterSpacing: '0.08em',
            padding: '8px 12px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <span>Winner — Certificate + Cash Prize</span>
          <span>Runner-Up — Certificate</span>
          <span>All Participants — Participation Certificate</span>
        </div>
      </div>

      {/* 3. Coordinators Section (5 Leads) */}
      <div
        style={{
          background: 'rgba(12, 13, 18, 0.85)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          padding: '20px 20px',
          marginBottom: '16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '14px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'var(--accent-red)',
              textTransform: 'uppercase',
            }}
          >
            COORDINATORS
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.60rem',
              color: '#8A8A93',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            5 EVENT LEADS
          </div>
        </div>

        <div
          className="talent-coords-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '12px 8px',
            alignItems: 'flex-start',
          }}
        >
          {coordinators.map((c) => (
            <div
              key={c.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Circular Headshot */}
              <div
                style={{
                  width: 'clamp(64px, 5.2vw, 82px)',
                  height: 'clamp(64px, 5.2vw, 82px)',
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid rgba(225, 6, 0, 0.45)',
                  boxShadow: '0 0 14px rgba(225, 6, 0, 0.2)',
                  marginBottom: '8px',
                  backgroundColor: '#121216',
                }}
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                }}
              >
                {c.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Card */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(225, 6, 0, 0.12) 0%, rgba(10, 11, 15, 0.95) 100%)',
          border: '1px solid rgba(225, 6, 0, 0.3)',
          borderRadius: '8px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-racing)',
            fontSize: '1.05rem',
            fontWeight: 800,
            fontStyle: 'italic',
            color: '#FFFFFF',
            lineHeight: 1.35,
            textTransform: 'uppercase',
          }}
        >
          "{d.quoteCard.quote}"
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--accent-red)',
            fontWeight: 800,
            letterSpacing: '0.2em',
            marginTop: '12px',
          }}
        >
          {d.quoteCard.tag}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .prize-podium-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .prize-podium-grid {
            grid-template-columns: 1fr !important;
          }
          .talent-coords-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 14px 10px !important;
          }
        }
      `}</style>
    </div>
  );
}
