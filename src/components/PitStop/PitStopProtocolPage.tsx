import React, { useEffect } from 'react';
import { PitStopHero } from './PitStopHero';
import { PitStopStatsRibbon } from './PitStopStatsRibbon';
import { PitStopOverview } from './PitStopOverview';
import { PitStopRounds } from './PitStopRounds';
import { PitStopRulesAndTimeline } from './PitStopRulesAndTimeline';
import { PitStopLifeline } from './PitStopLifeline';
import { PitStopFAQ } from './PitStopFAQ';
import { PitStopCoordinators } from './PitStopCoordinators';
import { PitStopRulebookBanner } from './PitStopRulebookBanner';

interface PitStopProtocolPageProps {
  onBackToEvents: () => void;
  onRegister: () => void;
}

export function PitStopProtocolPage({ onBackToEvents, onRegister }: PitStopProtocolPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      {/* Hero Section */}
      <PitStopHero onRegisterClick={onRegister} onBackToEvents={onBackToEvents} />

      {/* 4-Item Quick Stats Ribbon */}
      <PitStopStatsRibbon />

      {/* Event Overview & Quote Card */}
      <PitStopOverview />

      {/* The Three Rounds Grid */}
      <PitStopRounds />

      {/* Key Rules & Event Timeline */}
      <PitStopRulesAndTimeline />

      {/* Tactical Lifeline Protocol */}
      <PitStopLifeline />

      {/* Minimal Clean FAQ */}
      <PitStopFAQ />

      {/* Official Coordinators */}
      <PitStopCoordinators />

      {/* Large Rulebook Download Banner */}
      <PitStopRulebookBanner />
    </div>
  );
}

export default PitStopProtocolPage;
