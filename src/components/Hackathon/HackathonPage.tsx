import React, { useState } from 'react';
import { Calendar, MapPin, Users, Tag, Download, ArrowRight, ArrowLeft } from 'lucide-react';
import { HARDWARE_HACKATHON_DATA, type DeskComponentInfo } from '../../data/hardwareHackathonData';
import { EngineeringDeskScene } from './3D/EngineeringDeskScene';
import { DeskInspectOverlay } from './3D/DeskInspectOverlay';
import { CountdownBar } from './CountdownBar';
import { AboutSection } from './AboutSection';
import { PrizesSection } from './PrizesSection';
import { TimelineSection } from './TimelineSection';
import { CoordinatorsSection } from './CoordinatorsSection';
import { SpecialChallengesSection } from './SpecialChallengesSection';
import { RulesSection } from './RulesSection';
import { HackathonRulebookBanner } from './HackathonRulebookBanner';
import { HackathonTimelineModal } from './HackathonTimelineModal';
import { ComingSoonModal } from './ComingSoonModal';

interface HackathonPageProps {
  onBackToEvents: () => void;
  onRegister?: () => void;
}

export function HackathonPage({ onBackToEvents, onRegister }: HackathonPageProps) {
  const [selectedDeskComponent, setSelectedDeskComponent] = useState<DeskComponentInfo | null>(null);
  const [hoveredDeskId, setHoveredDeskId] = useState<string | null>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isFullTimelineOpen, setIsFullTimelineOpen] = useState(false);

  const d = HARDWARE_HACKATHON_DATA;

  const handleRegisterClick = () => {
    if (onRegister) {
      onRegister();
    } else {
      setIsRegisterModalOpen(true);
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
      {/* 1. Breadcrumb Back Link */}
      <div
        style={{
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto 16px auto',
          padding: '0 clamp(16px, 3.5vw, 36px)',
        }}
      >
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
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#888892')}
        >
          <ArrowLeft size={14} />
          <span>BACK TO EVENTS</span>
        </button>
      </div>

      {/* 2. Full-Screen Cinematic Hero Split */}
      <div
        style={{
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto 40px auto',
          padding: '0 clamp(16px, 3.5vw, 36px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
          gap: 'clamp(28px, 4vw, 48px)',
          alignItems: 'center',
        }}
      >
        {/* Hero Left Column: Typography & CTAs matching reference image */}
        <div style={{ zIndex: 10 }}>
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
              marginBottom: '16px',
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
            <span>{d.pitStop}</span>
          </div>

          {/* Main Title: HARDWARE HACKATHON */}
          <h1
            style={{
              margin: '0 0 12px 0',
              lineHeight: 0.95,
              letterSpacing: '0.02em',
            }}
          >
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                textTransform: 'uppercase',
              }}
            >
              HARDWARE
            </span>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-racing)',
                fontSize: 'clamp(2.6rem, 5.2vw, 4.4rem)',
                fontWeight: 900,
                fontStyle: 'italic',
                color: 'var(--accent-red)',
                textTransform: 'uppercase',
                textShadow: '0 0 35px rgba(225, 6, 0, 0.4)',
              }}
            >
              HACKATHON
            </span>
          </h1>

          {/* Motto */}
          <div
            style={{
              fontFamily: 'var(--font-racing)',
              fontSize: 'clamp(0.92rem, 1.8vw, 1.1rem)',
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: '#F0F0F0',
              marginBottom: '14px',
            }}
          >
            {d.motto}
          </div>

          {/* Supporting Description */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.90rem',
              lineHeight: 1.6,
              color: '#A0A0AA',
              maxWidth: '540px',
              margin: '0 0 24px 0',
            }}
          >
            {d.description}
          </p>

          {/* 4 Clean Metadata Items matching reference */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(14px, 2.5vw, 24px)',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}
          >
            {/* 1. Date */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={18} style={{ color: 'var(--accent-red)', flexShrink: 0 }} />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                  }}
                >
                  {d.date}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: '#8A8A93',
                  }}
                >
                  {d.time}
                </div>
              </div>
            </div>

            {/* 2. Venue */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={18} style={{ color: 'var(--accent-red)', flexShrink: 0 }} />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                  }}
                >
                  {d.venue}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: '#8A8A93',
                  }}
                >
                  {d.venueDetail}
                </div>
              </div>
            </div>

            {/* 3. Team Size */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={18} style={{ color: 'var(--accent-red)', flexShrink: 0 }} />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: '#8A8A93',
                    lineHeight: 1.2,
                  }}
                >
                  Team Size
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                  }}
                >
                  {d.teamSize}
                </div>
              </div>
            </div>

            {/* 4. Registration Fee */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Tag size={18} style={{ color: 'var(--accent-red)', flexShrink: 0 }} />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: '#8A8A93',
                    lineHeight: 1.2,
                  }}
                >
                  Registration Fee
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                  }}
                >
                  {d.registrationFee}
                </div>
              </div>
            </div>
          </div>

          {/* CTAs: REGISTER NOW & DOWNLOAD RULEBOOK */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={handleRegisterClick}
              className="btn-racing-primary"
              style={{
                padding: '14px 32px',
                fontSize: '0.82rem',
                letterSpacing: '0.18em',
                boxShadow: '0 0 25px rgba(225, 6, 0, 0.45)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
              }}
            >
              <span>REGISTER NOW</span>
              <ArrowRight size={14} />
            </button>

            <a
              href={d.rulebookPdfUrl}
              download="Rulebook_FORMULA_HARDWARE 1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '13px 26px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: '3px',
                color: '#E0E0E0',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
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
              <Download size={14} style={{ color: 'var(--accent-red)' }} />
              <span>DOWNLOAD RULEBOOK</span>
            </a>
          </div>
        </div>

        {/* Hero Right Column: Retaining the interactive 3D Engineering Desk Scene */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(440px, 52vh, 600px)',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            background: '#070709',
            boxShadow: '0 16px 48px rgba(0, 0, 0, 0.7)',
          }}
        >
          {/* Top Typographic Watermark matching reference */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.22em',
              color: 'rgba(255, 255, 255, 0.35)',
              textTransform: 'uppercase',
              pointerEvents: 'none',
              lineHeight: 1.4,
              zIndex: 2,
            }}
          >
            IDEAS /
            <br />
            CIRCUITS /
            <br />
            INNOVATION
          </div>

          {/* Far Right Motto matching reference */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.20em',
              color: 'rgba(255, 255, 255, 0.35)',
              textTransform: 'uppercase',
              pointerEvents: 'none',
              textAlign: 'right',
              lineHeight: 1.4,
              zIndex: 2,
            }}
          >
            ENGINEER
            <br />
            TODAY
            <br />
            A
            <br />
            FASTER
            <br />
            TOMORROW
          </div>

          {/* The Interactive 3D Canvas Scene */}
          <EngineeringDeskScene
            onSelectComponent={(comp) => setSelectedDeskComponent(comp)}
            hoveredId={hoveredDeskId}
            setHoveredId={setHoveredDeskId}
          />

          {/* Clicked Component Details Modal Overlay */}
          <DeskInspectOverlay
            component={selectedDeskComponent}
            onClose={() => setSelectedDeskComponent(null)}
          />
        </div>
      </div>

      {/* 3. Live Countdown Bar to 8 Oct 2026, 8:00 AM */}
      <CountdownBar />

      {/* 4. 3-Column Content Grid: About, Format & Prizes, Timeline & Coordinators */}
      <div
        style={{
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 clamp(16px, 3.5vw, 36px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
          gap: '24px',
          alignItems: 'stretch',
        }}
      >
        {/* Column 1: Event Overview & Domains */}
        <AboutSection />

        {/* Column 2: Event Format & Prize Pool */}
        <PrizesSection />

        {/* Column 3: Event Timeline & Coordinators */}
        <div
          style={{
            background: '#090a0e',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: 'clamp(24px, 3vw, 32px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <TimelineSection onViewFullTimeline={() => setIsFullTimelineOpen(true)} />
          <CoordinatorsSection />
        </div>
      </div>

      {/* 5. Special Challenges Section */}
      <SpecialChallengesSection />

      {/* 6. Key Rules & Evaluation Criteria */}
      <RulesSection />

      {/* 7. Large Rulebook Download Banner */}
      <HackathonRulebookBanner />

      {/* Registration Modal */}
      <ComingSoonModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />

      {/* Full Timeline Modal */}
      <HackathonTimelineModal
        isOpen={isFullTimelineOpen}
        onClose={() => setIsFullTimelineOpen(false)}
      />
    </div>
  );
}

export default HackathonPage;
