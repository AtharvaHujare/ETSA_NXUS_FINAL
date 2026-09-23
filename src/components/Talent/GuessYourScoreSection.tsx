import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';

export function GuessYourScoreSection() {
  const [predictedScore, setPredictedScore] = useState<number>(8);
  const [judgeScore, setJudgeScore] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);

  const handleReveal = () => {
    setIsEvaluating(true);
    setIsRevealed(false);

    setTimeout(() => {
      // 50% chance to match the user's prediction for fun interactive feedback
      const match = Math.random() > 0.45;
      const finalScore = match
        ? predictedScore
        : Math.max(1, Math.min(10, predictedScore + (Math.random() > 0.5 ? 1 : -1)));

      setJudgeScore(finalScore);
      setIsEvaluating(false);
      setIsRevealed(true);

      if (finalScore === predictedScore) {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#E10600', '#FFFFFF', '#FFD700', '#FF3333'],
        });
      }
    }, 600);
  };

  const isMatch = judgeScore === predictedScore;

  return (
    <div
      id="guess-your-score"
      style={{
        width: '100%',
        maxWidth: '1360px',
        margin: '0 auto 40px auto',
        padding: '0 clamp(16px, 3.5vw, 40px)',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(16, 17, 24, 0.95) 0%, rgba(9, 10, 14, 0.98) 100%)',
          border: '1px solid var(--accent-red-border)',
          borderRadius: '8px',
          padding: 'clamp(28px, 4vw, 44px)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(225, 6, 0, 0.15)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Ambient Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(225, 6, 0, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '32px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '20px',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                color: 'var(--accent-red)',
                textTransform: 'uppercase',
                marginBottom: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Sparkles size={14} />
              <span>SIGNATURE STAGE MECHANIC</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              GUESS YOUR SCORE
            </h2>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: '#8A8A93',
              letterSpacing: '0.14em',
              maxWidth: '380px',
              textAlign: 'right',
            }}
          >
            A sealed-card prediction challenge inspired by Got Talent format. A match places you directly on the prize contention list!
          </div>
        </div>

        {/* Interactive Dual-Panel Simulator */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(24px, 3.5vw, 44px)',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          {/* Left: You Predict Your Score */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              padding: '24px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: 'var(--accent-red)',
                marginBottom: '6px',
              }}
            >
              STEP 1 // PARTICIPANT
            </div>
            <div
              style={{
                fontFamily: 'var(--font-racing)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.06em',
                marginBottom: '16px',
              }}
            >
              PREDICT YOUR SCORE (1–10)
            </div>

            {/* Score Selector Buttons 1-10 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '8px',
                marginBottom: '20px',
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                const isSelected = predictedScore === num;
                return (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      setPredictedScore(num);
                      setIsRevealed(false);
                    }}
                    style={{
                      background: isSelected ? 'var(--accent-red)' : 'rgba(255, 255, 255, 0.04)',
                      border: isSelected ? '1px solid #FF3B30' : '1px solid rgba(255, 255, 255, 0.1)',
                      color: isSelected ? '#FFFFFF' : '#888888',
                      fontFamily: 'var(--font-racing)',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      padding: '10px 0',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 0 16px rgba(225, 6, 0, 0.5)' : 'none',
                    }}
                  >
                    {num}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleReveal}
              disabled={isEvaluating}
              className="btn-racing-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '12px 20px',
                fontSize: '0.78rem',
                letterSpacing: '0.14em',
                cursor: isEvaluating ? 'wait' : 'pointer',
              }}
            >
              <span>{isEvaluating ? 'JUDGES CONSULTING...' : 'SEAL & REVEAL VERDICT'}</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>

          {/* Right: The Judges' Verdict & Match Status */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: isRevealed && isMatch
                ? '1px solid #00E676'
                : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              padding: '24px',
              position: 'relative',
              transition: 'border-color 0.3s ease',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: '#8A8A93',
                marginBottom: '6px',
              }}
            >
              STEP 2 // JUDGING PANEL (1–10)
            </div>
            <div
              style={{
                fontFamily: 'var(--font-racing)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.06em',
                marginBottom: '16px',
              }}
            >
              OFFICIAL VERDICT & MATCH REVEAL
            </div>

            {/* Display Score & Card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '18px 12px',
                background: '#090a0d',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                marginBottom: '16px',
              }}
            >
              {/* Your Sealed Card */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: '#8A8A93',
                    marginBottom: '4px',
                  }}
                >
                  SEALED CARD
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-racing)',
                    fontSize: '2.4rem',
                    fontWeight: 900,
                    color: '#FFFFFF',
                    lineHeight: 1,
                  }}
                >
                  {predictedScore}
                </div>
              </div>

              {/* VS Divider */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  color: 'var(--accent-red)',
                }}
              >
                VS
              </div>

              {/* Judges Score */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: '#8A8A93',
                    marginBottom: '4px',
                  }}
                >
                  JUDGES' SCORE
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-racing)',
                    fontSize: '2.4rem',
                    fontWeight: 900,
                    color: isRevealed ? (isMatch ? '#00E676' : 'var(--accent-red)') : '#555555',
                    lineHeight: 1,
                  }}
                >
                  {isRevealed && judgeScore !== null ? judgeScore : '?'}
                </div>
              </div>
            </div>

            {/* Verdict Box */}
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '4px',
                background: isRevealed
                  ? isMatch
                    ? 'rgba(0, 230, 118, 0.12)'
                    : 'rgba(225, 6, 0, 0.1)'
                  : 'rgba(255, 255, 255, 0.03)',
                border: isRevealed
                  ? isMatch
                    ? '1px solid #00E676'
                    : '1px solid rgba(225, 6, 0, 0.4)'
                  : '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              {isRevealed ? (
                isMatch ? (
                  <>
                    <CheckCircle2 size={18} style={{ color: '#00E676', flexShrink: 0 }} />
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#00E676', fontWeight: 700 }}>
                      PERFECT MATCH! YOU ARE ON THE PRIZE CONTENTION LIST!
                    </div>
                  </>
                ) : (
                  <>
                    <ShieldAlert size={18} style={{ color: 'var(--accent-red)', flexShrink: 0 }} />
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#BBBBC0' }}>
                      Close guess! Your performance score stands independently at {judgeScore}/10.
                    </div>
                  </>
                )
              ) : (
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.70rem', color: '#777780' }}>
                  Pick your self-predicted score on the left and click Seal & Reveal.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3 Key Principles Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.70rem', color: 'var(--accent-red)', fontWeight: 700, marginBottom: '4px' }}>
              01 // INDEPENDENT SCORING
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.84rem', color: '#9999A2', lineHeight: 1.4 }}>
              The self-prediction is an interactive stage element and does NOT affect the actual judging evaluation.
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.70rem', color: 'var(--accent-red)', fontWeight: 700, marginBottom: '4px' }}>
              02 // PRIZE CONTENTION LIST
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.84rem', color: '#9999A2', lineHeight: 1.4 }}>
              Participants who match their predicted score earn eligibility for the top-tier podium contention prizes.
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.70rem', color: 'var(--accent-red)', fontWeight: 700, marginBottom: '4px' }}>
              03 // TIE-BREAKER PROTOCOL
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.84rem', color: '#9999A2', lineHeight: 1.4 }}>
              In case of ties among matched scores, judges' deliberations and live audience applause decide the final podium.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
