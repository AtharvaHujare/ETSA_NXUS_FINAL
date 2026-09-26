import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Tag,
  Download,
  ArrowLeft,
  Wrench,
  Cpu,
  Gamepad2,
  Trophy,
  ShieldCheck,
  Clock,
  Sparkles,
  Plane,
  ChevronRight,
  Award,
} from 'lucide-react';
import { AERO_X_DATA, type AeroXCoordinator } from '../../data/aeroXData';

interface AeroXPageProps {
  onBackToEvents: () => void;
  onRegister?: () => void;
}

export function AeroXPage({ onBackToEvents, onRegister }: AeroXPageProps) {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const d = AERO_X_DATA;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'wrench':
        return <Wrench size={22} style={{ color: 'var(--accent-red)' }} />;
      case 'cpu':
        return <Cpu size={22} style={{ color: 'var(--accent-red)' }} />;
      case 'gamepad':
        return <Gamepad2 size={22} style={{ color: 'var(--accent-red)' }} />;
      case 'trophy':
        return <Trophy size={22} style={{ color: '#FFB800' }} />;
      default:
        return <Plane size={22} style={{ color: 'var(--accent-red)' }} />;
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#050507',
        color: '#FFFFFF',
        paddingTop: '80px',
        paddingBottom: '80px',
        overflowX: 'hidden',
      }}
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '15%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(225, 6, 0, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 clamp(16px, 3.5vw, 40px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Back Link */}
        <button
          onClick={onBackToEvents}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#8A8A94',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            padding: '4px 0',
            marginBottom: '24px',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A94')}
        >
          <ArrowLeft size={14} />
          <span>BACK TO EVENTS</span>
        </button>

        {/* Hero Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
            gap: 'clamp(32px, 5vw, 56px)',
            alignItems: 'center',
            marginBottom: '56px',
          }}
        >
          {/* Left Hero Column */}
          <div>
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
                fontSize: '0.70rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: 'var(--accent-red)',
                marginBottom: '14px',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-red)',
                  boxShadow: '0 0 8px var(--accent-red)',
                }}
              />
              <span>{d.pitStop} // EVENT 02</span>
            </div>

            {/* In Association with tag */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: '#8A8A93',
                letterSpacing: '0.16em',
                marginBottom: '8px',
                textTransform: 'uppercase',
              }}
            >
              IN ASSOCIATION WITH{' '}
              <span style={{ color: '#FFFFFF', fontWeight: 700 }}>{d.inAssociationWith}</span>
            </div>

            {/* Main Title: AERO-X */}
            <h1
              style={{
                margin: '0 0 8px 0',
                lineHeight: 0.95,
                letterSpacing: '0.02em',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-racing)',
                  fontSize: 'clamp(3.2rem, 7vw, 5.8rem)',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  color: 'var(--accent-red)',
                  textTransform: 'uppercase',
                  textShadow: '0 0 40px rgba(225, 6, 0, 0.45)',
                  letterSpacing: '0.04em',
                }}
              >
                AERO-X
              </span>
            </h1>

            {/* Motto */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.85rem, 1.6vw, 1.05rem)',
                fontWeight: 800,
                letterSpacing: '0.22em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              {d.tagline}
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                lineHeight: 1.65,
                color: '#BBBBC5',
                margin: '0 0 28px 0',
                maxWidth: '620px',
              }}
            >
              {d.description}
            </p>

            {/* 4 Metadata Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '12px',
                marginBottom: '32px',
              }}
            >
              {/* Date */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '10px 14px',
                  borderRadius: '4px',
                }}
              >
                <Calendar size={18} style={{ color: 'var(--accent-red)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {d.dateStr}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: '#8A8A93' }}>
                    2-Day Workshop + Arena
                  </div>
                </div>
              </div>

              {/* Venue */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '10px 14px',
                  borderRadius: '4px',
                }}
              >
                <MapPin size={18} style={{ color: 'var(--accent-red)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {d.venue}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: '#8A8A93' }}>
                    PCCOE Campus
                  </div>
                </div>
              </div>

              {/* Team Size */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '10px 14px',
                  borderRadius: '4px',
                }}
              >
                <Users size={18} style={{ color: 'var(--accent-red)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {d.teamSize}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: '#8A8A93' }}>
                    Beginners Welcome
                  </div>
                </div>
              </div>

              {/* Fee */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '10px 14px',
                  borderRadius: '4px',
                }}
              >
                <Tag size={18} style={{ color: 'var(--accent-red)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {d.registrationFee}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--accent-red)' }}>
                    FREE for PCCOE Students
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={d.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-racing-primary"
                style={{
                  padding: '14px 32px',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  boxShadow: '0 0 30px rgba(225, 6, 0, 0.45)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                }}
              >
                <span>REGISTER NOW</span>
                <span className="btn-arrow" style={{ fontSize: '1rem', fontWeight: 900 }}>→</span>
              </a>

              <a
                href={d.rulebookPdfUrl}
                download="Aero-x rulebook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '13px 26px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  borderRadius: '3px',
                  color: '#E0E0E0',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-red)';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.backgroundColor = 'rgba(225, 6, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                  e.currentTarget.style.color = '#E0E0E0';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                }}
              >
                <Download size={15} style={{ color: 'var(--accent-red)' }} />
                <span>DOWNLOAD RULEBOOK</span>
              </a>
            </div>
          </div>

          {/* Right Hero Column: Interactive Aerospace Drone Blueprint Card */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(16, 17, 24, 0.95) 0%, rgba(9, 10, 14, 0.98) 100%)',
              border: '1px solid rgba(225, 6, 0, 0.35)',
              borderRadius: '8px',
              padding: 'clamp(24px, 3.5vw, 36px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(225, 6, 0, 0.15)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                color: 'var(--accent-red)',
                marginBottom: '6px',
                textTransform: 'uppercase',
              }}
            >
              DRONE TECHNOLOGY // SPECIFICATIONS
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
                margin: '0 0 20px 0',
                textTransform: 'uppercase',
              }}
            >
              HANDS-ON QUADCOPTER PLATFORM
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '20px' }}>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  padding: '12px 14px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: '#8A8A93' }}>GIVE-AWAY KIT</div>
                <div style={{ fontFamily: 'var(--font-racing)', fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginTop: '2px' }}>
                  DIY Quadcopter
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.74rem', color: '#9999A5', marginTop: '4px' }}>
                  Frame, motors, ESCs, flight controller, LiPo battery & 2.4GHz transmitter (teams keep kit).
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  padding: '12px 14px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: 'var(--accent-red)' }}>
                  ADVANCED PLATFORM
                </div>
                <div style={{ fontFamily: 'var(--font-racing)', fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginTop: '2px' }}>
                  Pixhawk & Hexacopter
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.74rem', color: '#9999A5', marginTop: '4px' }}>
                  GPS, compass, telemetry, Ground Control Station & Mission Planner demonstration.
                </div>
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, rgba(225, 6, 0, 0.12) 0%, rgba(10, 10, 14, 0.95) 100%)',
                border: '1px solid var(--accent-red)',
                borderRadius: '6px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--accent-red)', fontWeight: 800, letterSpacing: '0.12em' }}>
                  TOTAL PRIZE POOL
                </div>
                <div style={{ fontFamily: 'var(--font-racing)', fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF' }}>
                  {d.prizes.total}
                </div>
              </div>
              <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '0.66rem', color: '#8A8A93' }}>
                <div>1ST: ₹12,000</div>
                <div>2ND: ₹8,000 | 3RD: ₹5,000</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
            marginBottom: '56px',
          }}
        >
          {d.pillars.map((pillar) => (
            <div
              key={pillar.title}
              style={{
                background: 'rgba(12, 13, 18, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                padding: '22px 20px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.45)';
                e.currentTarget.style.backgroundColor = 'rgba(225, 6, 0, 0.04)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.backgroundColor = 'rgba(12, 13, 18, 0.85)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ marginBottom: '12px' }}>{getPillarIcon(pillar.icon)}</div>
              <div
                style={{
                  fontFamily: 'var(--font-racing)',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.06em',
                  marginBottom: '6px',
                }}
              >
                {pillar.title}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: '#8E8E98',
                  lineHeight: 1.45,
                }}
              >
                {pillar.description}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Day Interactive Schedule Section */}
        <div
          style={{
            background: 'rgba(12, 13, 18, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: 'clamp(24px, 3.5vw, 36px)',
            marginBottom: '48px',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
          }}
        >
          {/* Header & Day Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '28px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '18px',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'var(--accent-red)',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                }}
              >
                OFFICIAL WORKSHOP & COMPETITION FLOW
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 900,
                  letterSpacing: '0.04em',
                  color: '#FFFFFF',
                  margin: 0,
                  textTransform: 'uppercase',
                }}
              >
                EVENT SCHEDULE
              </h2>
            </div>

            {/* Day Switcher Buttons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setActiveDay(1)}
                style={{
                  padding: '10px 20px',
                  background: activeDay === 1 ? 'var(--accent-red)' : 'rgba(255, 255, 255, 0.04)',
                  border: activeDay === 1 ? '1px solid #FF3B30' : '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  transition: 'all 0.2s ease',
                }}
              >
                DAY 01 // 9 OCT (WORKSHOP & QUIZ)
              </button>
              <button
                type="button"
                onClick={() => setActiveDay(2)}
                style={{
                  padding: '10px 20px',
                  background: activeDay === 2 ? 'var(--accent-red)' : 'rgba(255, 255, 255, 0.04)',
                  border: activeDay === 2 ? '1px solid #FF3B30' : '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  transition: 'all 0.2s ease',
                }}
              >
                DAY 02 // 10 OCT (BUILD & DRONE ARENA)
              </button>
            </div>
          </div>

          {/* Schedule List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {(activeDay === 1 ? d.scheduleDay1 : d.scheduleDay2).map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'clamp(140px, 16vw, 190px) 1fr auto',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '12px 16px',
                  background: item.isHighlight
                    ? 'rgba(225, 6, 0, 0.08)'
                    : item.isBreak
                    ? 'rgba(255, 255, 255, 0.01)'
                    : 'rgba(255, 255, 255, 0.02)',
                  border: item.isHighlight
                    ? '1px solid rgba(225, 6, 0, 0.35)'
                    : '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '4px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', fontWeight: 700, color: item.isHighlight ? 'var(--accent-red)' : '#FFFFFF' }}>
                  {item.time}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase' }}>
                    {item.title}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#8E8E98', marginTop: '2px' }}>
                    {item.description}
                  </div>
                </div>
                {item.duration && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.64rem',
                      color: item.isHighlight ? 'var(--accent-red)' : '#7A7A85',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {item.duration}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column: Key Rules & Evaluation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {/* Rules Card */}
          <div
            style={{
              background: 'rgba(12, 13, 18, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: 'clamp(24px, 3vw, 32px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <ShieldCheck size={20} style={{ color: 'var(--accent-red)' }} />
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  margin: 0,
                  textTransform: 'uppercase',
                }}
              >
                RULES & REGULATIONS
              </h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {d.keyRules.map((rule, idx) => (
                <li
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.84rem',
                    color: '#B0B0B8',
                    lineHeight: 1.45,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-red)',
                      marginTop: '8px',
                      flexShrink: 0,
                    }}
                  />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Evaluation & Competition Breakdown Card */}
          <div
            style={{
              background: 'rgba(12, 13, 18, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '8px',
              padding: 'clamp(24px, 3vw, 32px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Award size={20} style={{ color: 'var(--accent-red)' }} />
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: 900,
                    color: '#FFFFFF',
                    margin: 0,
                    textTransform: 'uppercase',
                  }}
                >
                  EVALUATION MATRIX
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '6px',
                    padding: '14px',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-racing)', fontSize: '0.96rem', fontWeight: 800, color: '#FFFFFF' }}>
                    1. TECHNICAL QUIZ (50 MARKS)
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.80rem', color: '#8E8E98', marginTop: '4px' }}>
                    3 papers (15m + 15m + 10m) solved by the entire team. Aviation physics, drone anatomy, components, and DGCA regulations. Top 10 teams qualify.
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '6px',
                    padding: '14px',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-racing)', fontSize: '0.96rem', fontWeight: 800, color: 'var(--accent-red)' }}>
                    2. DRONE ARENA OBSTACLE COURSE
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.80rem', color: '#8E8E98', marginTop: '4px' }}>
                    Top 10 finalist teams pilot their quadcopter across dynamic obstacle gates. Scoring based on completion time, obstacle clearance, and stability.
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '20px',
                padding: '12px 14px',
                background: 'rgba(225, 6, 0, 0.08)',
                border: '1px solid rgba(225, 6, 0, 0.25)',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: '#D0D0D8',
                letterSpacing: '0.04em',
              }}
            >
              First Aid certified Prarambh-X trainers and standard PCCOE lab safety marshals present at all times.
            </div>
          </div>
        </div>

        {/* Coordinators Section (6 Coordinators) */}
        <div
          style={{
            background: 'rgba(12, 13, 18, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: 'clamp(24px, 3.5vw, 36px)',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '14px',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  color: 'var(--accent-red)',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                LEADERSHIP & ORGANIZING COMMITTEE
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  margin: 0,
                  textTransform: 'uppercase',
                }}
              >
                EVENT COORDINATORS
              </h3>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                color: '#8A8A93',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              6 EVENT LEADS
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '16px 12px',
              alignItems: 'flex-start',
            }}
          >
            {d.coordinators.map((c) => (
              <div
                key={c.name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '12px 8px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '6px',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: 'clamp(72px, 6vw, 92px)',
                    height: 'clamp(72px, 6vw, 92px)',
                    aspectRatio: '1 / 1',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid rgba(225, 6, 0, 0.45)',
                    boxShadow: '0 0 14px rgba(225, 6, 0, 0.2)',
                    marginBottom: '10px',
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
                    fontFamily: 'var(--font-racing)',
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    lineHeight: 1.2,
                  }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.64rem',
                    color: 'var(--accent-red)',
                    letterSpacing: '0.08em',
                    marginTop: '4px',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  {c.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Rulebook CTA Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(225, 6, 0, 0.14) 0%, rgba(12, 13, 18, 0.95) 100%)',
            border: '1px solid var(--accent-red)',
            borderRadius: '8px',
            padding: 'clamp(28px, 4vw, 44px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            boxShadow: '0 16px 40px rgba(225, 6, 0, 0.25)',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.70rem',
                fontWeight: 800,
                letterSpacing: '0.24em',
                color: 'var(--accent-red)',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              OFFICIAL EVENT RULEBOOK
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                color: '#FFFFFF',
                margin: '0 0 8px 0',
                textTransform: 'uppercase',
              }}
            >
              AERO-X FULL SPECIFICATIONS & GUIDELINES
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.90rem',
                color: '#A0A0AA',
                margin: 0,
                maxWidth: '640px',
              }}
            >
              Download the official PDF for full syllabus, kit breakdown, DGCA safety regulations, and Drone Arena obstacle scoring rules.
            </p>
          </div>

          <a
            href={d.rulebookPdfUrl}
            download="Aero-x rulebook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-racing-primary"
            style={{
              padding: '16px 36px',
              fontSize: '0.86rem',
              fontWeight: 800,
              letterSpacing: '0.18em',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 0 30px rgba(225, 6, 0, 0.5)',
            }}
          >
            <Download size={18} />
            <span>DOWNLOAD RULEBOOK</span>
            <span className="btn-arrow" style={{ fontSize: '1rem', fontWeight: 900 }}>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AeroXPage;
