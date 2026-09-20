import React, { useState, useEffect } from 'react';
import { HARDWARE_HACKATHON_DATA } from '../../data/hardwareHackathonData';

export function CountdownBar() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    hasBegun: false,
  });

  useEffect(() => {
    const targetDate = new Date(HARDWARE_HACKATHON_DATA.targetStartTime).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          hasBegun: true,
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        hasBegun: false,
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1360px',
        margin: '0 auto 48px auto',
        padding: '0 clamp(16px, 3.5vw, 36px)',
      }}
    >
      <div
        style={{
          background: 'rgba(9, 10, 14, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          padding: '18px clamp(20px, 3vw, 40px)',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        {/* Left Label */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: '#8A8A93',
            textTransform: 'uppercase',
          }}
        >
          THE COUNTDOWN BEGINS
        </div>

        {/* Center: Dynamic Countdown Numbers */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(18px, 3vw, 36px)' }}>
          {[
            { val: timeLeft.days, label: 'DAYS' },
            { val: timeLeft.hours, label: 'HOURS' },
            { val: timeLeft.minutes, label: 'MINUTES' },
            { val: timeLeft.seconds, label: 'SECONDS' },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-racing)',
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  fontWeight: 900,
                  color: 'var(--accent-red)',
                  lineHeight: 1,
                  textShadow: '0 0 20px rgba(225, 6, 0, 0.35)',
                }}
              >
                {String(item.val).padStart(2, '0')}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.18em',
                  color: '#888892',
                  marginTop: '4px',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Right Label matching reference */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.70rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            color: '#8A8A93',
            textTransform: 'uppercase',
            textAlign: 'right',
          }}
        >
          SAME PASSION.
          <br />
          A HIGHER FREQUENCY.
        </div>
      </div>
    </div>
  );
}
