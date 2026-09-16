import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onRegisterClick: () => void;
}

export function Navbar({ onRegisterClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('EVENTS');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'EVENTS', href: '#events' },
    { label: 'CALENDAR', href: '#calendar' },
    { label: 'SPONSORS', href: '#sponsors' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'TEAM', href: '#team' },
    { label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '68px',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(20px, 4vw, 56px)',
        transition: 'all 0.35s ease',
        backgroundColor: isScrolled ? 'rgba(5, 5, 5, 0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid transparent',
      }}
    >
      {/* Left: Brand Logo */}
      <a
        href="#"
        style={{
          display: 'flex',
          flexDirection: 'column',
          textDecoration: 'none',
          color: '#FFFFFF',
          gap: '2px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.45rem',
            fontWeight: 900,
            letterSpacing: '0.12em',
            display: 'flex',
            alignItems: 'center',
            lineHeight: 1,
          }}
        >
          <span>NE</span>
          <span style={{ position: 'relative', color: '#F5F5F5' }}>
            X
            <span
              style={{
                position: 'absolute',
                top: '46%',
                left: '20%',
                width: '60%',
                height: '3px',
                background: 'var(--accent-red)',
                transform: 'rotate(-42deg)',
                borderRadius: '1px',
              }}
            />
          </span>
          <span>US</span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-racing)',
            fontSize: '0.62rem',
            letterSpacing: '0.35em',
            color: '#888888',
            fontWeight: 600,
          }}
        >
          2026
        </span>
      </a>

      {/* Center: Navigation Links (Desktop) */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(20px, 2.5vw, 38px)',
        }}
        className="desktop-nav"
      >
        {navLinks.map((item) => {
          const isActive = activeItem === item.label;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveItem(item.label)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                color: isActive ? '#FFFFFF' : '#8E8E93',
                textDecoration: 'none',
                position: 'relative',
                padding: '6px 0',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = '#8E8E93';
              }}
            >
              {item.label}
              {isActive && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '12px',
                    height: '2px',
                    background: 'var(--accent-red)',
                  }}
                />
              )}
            </a>
          );
        })}
      </nav>

      {/* Right: Register CTA (Desktop) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={onRegisterClick}
          className="btn-racing-primary desktop-register"
          style={{
            padding: '8px 20px',
            fontSize: '0.75rem',
            letterSpacing: '0.16em',
            border: '1px solid var(--accent-red-border)',
            background: 'rgba(15, 15, 15, 0.7)',
          }}
        >
          <span>REGISTER</span>
          <span className="btn-arrow" style={{ fontSize: '0.9rem' }}>→</span>
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-hamburger"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '68px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(6, 6, 8, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            padding: '36px 28px',
            gap: '24px',
            zIndex: 99,
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveItem(item.label);
                setMobileMenuOpen(false);
              }}
              style={{
                fontFamily: 'var(--font-racing)',
                fontSize: '1.25rem',
                letterSpacing: '0.15em',
                color: activeItem === item.label ? 'var(--accent-red)' : '#F5F5F5',
                textDecoration: 'none',
                paddingBottom: '8px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onRegisterClick();
            }}
            className="btn-racing-primary"
            style={{ marginTop: '16px', justifyContent: 'center' }}
          >
            <span>REGISTER NOW</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-register {
            display: none !important;
          }
          .mobile-hamburger {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
