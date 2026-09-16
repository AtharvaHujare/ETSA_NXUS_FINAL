import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedEvent?: string;
}

export function RegisterModal({ isOpen, onClose, preselectedEvent }: RegisterModalProps) {
  const [ticketType, setTicketType] = useState('RACER PASS');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    institution: '',
    selectedTrack: preselectedEvent || 'AERO-HACK & AUTONOMOUS AI',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Fire celebratory racing confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E10600', '#FFFFFF', '#111111', '#FF4444'],
    });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(4, 4, 6, 0.92)',
        backdropFilter: 'blur(20px)',
        zIndex: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          background: '#0a0a0d',
          border: '1px solid var(--accent-red-border)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 30px var(--accent-red-soft)',
          padding: 'clamp(28px, 4vw, 44px)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: '#888888',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.24em',
                color: 'var(--accent-red)',
                marginBottom: '8px',
                fontWeight: 600,
              }}
            >
              PCCOE ENTC // ACCREDITATION DESK
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.9rem',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.04em',
                marginBottom: '6px',
              }}
            >
              NEXUS 2026 REGISTRATION
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                color: '#888888',
                marginBottom: '28px',
              }}
            >
              Secure your team pit-lane pass or spectator badge for 12—14 March 2026.
            </p>

            {/* Ticket Tier Selection */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                marginBottom: '28px',
              }}
            >
              {['RACER PASS', 'PIT WALL PASS', 'VIP PADDOCK'].map((tier) => {
                const isSelected = ticketType === tier;
                return (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setTicketType(tier)}
                    style={{
                      background: isSelected ? 'var(--accent-red)' : '#121216',
                      border: isSelected ? '1px solid #FF3333' : '1px solid rgba(255,255,255,0.08)',
                      color: isSelected ? '#FFFFFF' : '#888888',
                      padding: '12px 8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.66rem',
                      letterSpacing: '0.12em',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {tier}
                  </button>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    letterSpacing: '0.18em',
                    color: '#777777',
                    marginBottom: '6px',
                  }}
                >
                  FULL NAME / TEAM LEAD
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Lewis Verstappen"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  style={{
                    width: '100%',
                    background: '#121216',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    padding: '12px 16px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    letterSpacing: '0.18em',
                    color: '#777777',
                    marginBottom: '6px',
                  }}
                >
                  OFFICIAL EMAIL ADDRESS
                </label>
                <input
                  required
                  type="email"
                  placeholder="pilot@team.pccoe.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    background: '#121216',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    padding: '12px 16px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    letterSpacing: '0.18em',
                    color: '#777777',
                    marginBottom: '6px',
                  }}
                >
                  INSTITUTION / RACING CONSTRUCTOR
                </label>
                <input
                  required
                  type="text"
                  placeholder="PCCOE / College / Racing Team"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  style={{
                    width: '100%',
                    background: '#121216',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    padding: '12px 16px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ marginTop: '12px' }}>
                <button
                  type="submit"
                  className="btn-racing-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '14px 20px' }}
                >
                  <span>CONFIRM PIT PASS ALLOCATION</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <CheckCircle
              size={56}
              style={{ color: 'var(--accent-red)', margin: '0 auto 20px auto' }}
            />
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.24em',
                color: 'var(--accent-red)',
                marginBottom: '8px',
              }}
            >
              PASS VERIFIED // ACCREDITED
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                color: '#FFFFFF',
                marginBottom: '12px',
              }}
            >
              WELCOME TO THE GRID, {formData.fullName.toUpperCase() || 'RACER'}!
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                color: '#AAAAAA',
                lineHeight: 1.6,
                maxWidth: '420px',
                margin: '0 auto 28px auto',
              }}
            >
              Your official credentials for {ticketType} have been dispatched to{' '}
              <span style={{ color: '#FFFFFF' }}>{formData.email || 'your email'}</span>. Report to the
              PCCOE ENTC Scrutineering Pit Wall on 12 March 2026 at 08:30 IST.
            </p>

            <button onClick={handleReset} className="btn-racing-primary">
              <span>RETURN TO TELEMETRY</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
