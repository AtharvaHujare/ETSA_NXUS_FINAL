import React, { useEffect } from 'react';
import { TalentHero } from './TalentHero';
import { TalentMiddleBar } from './TalentMiddleBar';
import { TalentOverview } from './TalentOverview';
import { TalentStructure } from './TalentStructure';
import { TalentJudgingAndPrizes } from './TalentJudgingAndPrizes';
import { GuessYourScoreSection } from './GuessYourScoreSection';
import { TalentCategories } from './TalentCategories';
import { TalentRulesAndCTA } from './TalentRulesAndCTA';

interface PCCOEGotTalentPageProps {
  onBackToEvents: () => void;
  onRegister: () => void;
}

export function PCCOEGotTalentPage({ onBackToEvents, onRegister }: PCCOEGotTalentPageProps) {
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
        paddingBottom: '60px',
        overflowX: 'hidden',
      }}
    >
      {/* 1. Hero Section matching reference mockup */}
      <TalentHero onRegisterClick={onRegister} onBackToEvents={onBackToEvents} />

      {/* 2. Neutral Middle Announcement Bar (No fake countdown) */}
      <TalentMiddleBar />

      {/* 3. Core 3-Column Editorial Grid (Overview | Structure | Judging & Prizes) */}
      <div
        style={{
          width: '100%',
          maxWidth: '1360px',
          margin: '0 auto 40px auto',
          padding: '0 clamp(16px, 3.5vw, 40px)',
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr 1.25fr',
          gap: '24px',
          alignItems: 'stretch',
        }}
        className="talent-main-grid"
      >
        <TalentOverview />
        <TalentStructure />
        <TalentJudgingAndPrizes />
      </div>

      {/* 4. Interactive "Guess Your Score" Feature Section */}
      <GuessYourScoreSection />

      {/* 5. Performance Categories Grid */}
      <TalentCategories />

      {/* 6. Key Rules & Prominent Bottom Download Rulebook CTA */}
      <TalentRulesAndCTA />

      <style>{`
        @media (max-width: 1200px) {
          .talent-main-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 860px) {
          .talent-main-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default PCCOEGotTalentPage;
