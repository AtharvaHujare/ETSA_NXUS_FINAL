import React from 'react';
import { ArrowUpRight, MapPin, Mail, Award, Cpu, Zap, Flag, Phone } from 'lucide-react';
import { NEXUS_DOMAINS, EVENT_COORDINATORS_CONTACTS } from '../data/nexusDomainsData';

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        backgroundColor: '#050507',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '100px clamp(20px, 4vw, 56px) 60px clamp(20px, 4vw, 56px)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* =========================================================================
            1. ABOUT NEXUS
           ========================================================================= */}
        <div style={{ marginBottom: '80px' }}>
          {/* Section Kicker */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'var(--accent-red)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                width: '18px',
                height: '2px',
                background: 'var(--accent-red)',
                display: 'inline-block',
              }}
            />
            ABOUT NEXUS // ETSA & IETE PCCOE
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 900,
              letterSpacing: '0.03em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              margin: '0 0 24px 0',
            }}
          >
            ENGINEERING AT <span style={{ color: 'var(--accent-red)' }}>RACING VELOCITY</span>
          </h2>

          {/* Editorial Lead Narrative */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr',
              gap: '40px',
              alignItems: 'start',
            }}
            className="about-editorial-grid"
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                color: '#BBBBBB',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <strong style={{ color: '#FFFFFF' }}>NEXUS 2026</strong> is Pune's premier motorsport and
              engineering symposium organized by the{' '}
              <strong style={{ color: '#FFFFFF' }}>
                Electronics and Telecommunication Students Association (ETSA)
              </strong>{' '}
              in collaboration with the{' '}
              <strong style={{ color: '#FFFFFF' }}>IETE Students Forum</strong> at{' '}
              <strong style={{ color: '#FFFFFF' }}>Pimpri Chinchwad College of Engineering (PCCOE)</strong>.
              Built on the principles of speed, innovation, and practical engineering, NEXUS converges cutting-edge
              hardware builds, high-velocity technical challenges, strategic pit stop precision, and live stage talent
              onto a unified championship weekend.
            </p>

            <div
              style={{
                background: 'rgba(12, 13, 18, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderLeft: '3px solid var(--accent-red)',
                borderRadius: '8px',
                padding: '22px 24px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: '#8A8A93',
                lineHeight: 1.6,
                letterSpacing: '0.08em',
              }}
            >
              <div style={{ color: '#FFFFFF', fontWeight: 700, marginBottom: '8px' }}>
                MISSION PARAMETERS //
              </div>
              "To bridge classroom theory and competitive engineering through high-intensity, motorsport-inspired
              problem solving and technical execution."
            </div>
          </div>

          {/* Key Stat Badges */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              marginTop: '36px',
            }}
            className="about-stats-grid"
          >
            {[
              { icon: Flag, title: '4 STOPS', subtitle: 'Flagship Events' },
              { icon: Award, title: '₹4,10,000+', subtitle: 'Total Prize Purse' },
              { icon: Cpu, title: '12 HOURS', subtitle: 'Rapid Prototyping' },
              { icon: MapPin, title: 'PCCOE PADDOCK', subtitle: 'E&TC Dept, Pune' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(10, 11, 15, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '6px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <stat.icon size={22} style={{ color: 'var(--accent-red)', flexShrink: 0 }} />
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      lineHeight: 1.1,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {stat.title}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.66rem',
                      color: '#777777',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginTop: '3px',
                    }}
                  >
                    {stat.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            2. NEXUS DOMAINS
           ========================================================================= */}
        <div style={{ marginBottom: '80px' }}>
          {/* Section Kicker */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'var(--accent-red)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                width: '18px',
                height: '2px',
                background: 'var(--accent-red)',
                display: 'inline-block',
              }}
            />
            ORGANIZING CREW // 4 DOMAINS
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 900,
              letterSpacing: '0.03em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              margin: '0 0 36px 0',
            }}
          >
            NEXUS <span style={{ color: 'var(--accent-red)' }}>DOMAINS</span>
          </h2>

          {/* Domain Groups Container */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {NEXUS_DOMAINS.map((domain) => (
              <div
                key={domain.number}
                style={{
                  background: 'rgba(10, 11, 15, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  padding: '28px clamp(18px, 3vw, 32px)',
                  transition: 'border-color 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.35)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)')}
              >
                {/* Domain Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingBottom: '16px',
                    marginBottom: '24px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1rem',
                        fontWeight: 800,
                        color: 'var(--accent-red)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {domain.number}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.45rem',
                        fontWeight: 900,
                        letterSpacing: '0.06em',
                        color: '#FFFFFF',
                        margin: 0,
                        textTransform: 'uppercase',
                      }}
                    >
                      {domain.name}
                    </h3>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#8A8A93',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {domain.description}
                  </div>
                </div>

                {/* Domain Members Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns:
                      domain.members.length === 1
                        ? 'minmax(240px, 320px)'
                        : `repeat(${domain.members.length}, minmax(0, 1fr))`,
                    justifyContent: 'center',
                    gap: '24px',
                    alignItems: 'stretch',
                  }}
                  className={`domain-grid domain-grid-${domain.members.length}`}
                >
                  {domain.members.map((member) => (
                    <div
                      key={member.name}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: '22px 14px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.04)',
                        transition: 'all 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.45)';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {/* Circular Profile Photo (150-180px Desktop / 110-140px Mobile) */}
                      <div
                        className="domain-avatar-wrap"
                        style={{
                          aspectRatio: '1 / 1',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          border: '2.5px solid rgba(225, 6, 0, 0.45)',
                          boxShadow: '0 0 16px rgba(225, 6, 0, 0.22)',
                          backgroundColor: '#121318',
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
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

                      {/* Member Name */}
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.05rem',
                          fontWeight: 800,
                          letterSpacing: '0.03em',
                          color: '#FFFFFF',
                          lineHeight: 1.25,
                          marginBottom: '6px',
                        }}
                      >
                        {member.name}
                      </div>

                      {/* Optional Role */}
                      {member.role && (
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            color: 'var(--accent-red)',
                            textTransform: 'uppercase',
                          }}
                        >
                          {member.role}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            3. CONTACT US
           ========================================================================= */}
        <div>
          {/* Section Kicker */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'var(--accent-red)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                width: '18px',
                height: '2px',
                background: 'var(--accent-red)',
                display: 'inline-block',
              }}
            />
            COMMUNICATIONS // RACE SECRETARIAT
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 900,
              letterSpacing: '0.03em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              margin: '0 0 28px 0',
            }}
          >
            CONTACT <span style={{ color: 'var(--accent-red)' }}>US</span>
          </h2>

          {/* 3 Clickable Social / Direct Contact Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
            className="contact-cards-grid"
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/iete-pccoe-students-forum/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#090a0d',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '24px 22px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.5)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                {/* LinkedIn SVG Icon */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0A66C2',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: 'var(--accent-red)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  LINKEDIN <ArrowUpRight size={14} />
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '0.03em',
                    marginBottom: '4px',
                  }}
                >
                  IETE PCCOE Students Forum
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: '#8A8A93',
                    letterSpacing: '0.08em',
                  }}
                >
                  Professional Student Chapter Network
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/etsapccoe/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#090a0d',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '24px 22px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.5)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                {/* Instagram SVG Icon */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E4405F',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: 'var(--accent-red)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  INSTAGRAM <ArrowUpRight size={14} />
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '0.03em',
                    marginBottom: '4px',
                  }}
                >
                  @etsapccoe
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: '#8A8A93',
                    letterSpacing: '0.08em',
                  }}
                >
                  Official ETSA Broadcasts & Updates
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:etsaietepccoe1@gmail.com"
              style={{
                background: '#090a0d',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '24px 22px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.5)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                {/* Mail Icon */}
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-red)',
                  }}
                >
                  <Mail size={20} />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: 'var(--accent-red)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  EMAIL <ArrowUpRight size={14} />
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.02rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '0.02em',
                    marginBottom: '4px',
                    wordBreak: 'break-all',
                  }}
                >
                  etsaietepccoe1@gmail.com
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: '#8A8A93',
                    letterSpacing: '0.08em',
                  }}
                >
                  Direct Race Inquiries & Partnerships
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* =========================================================================
            4. EVENT COORDINATORS
           ========================================================================= */}
        <div style={{ marginTop: '80px' }}>
          {/* Section Kicker */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.22em',
              color: 'var(--accent-red)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            <span
              style={{
                width: '18px',
                height: '2px',
                background: 'var(--accent-red)',
                display: 'inline-block',
              }}
            />
            RACE CONTROL // DIRECT HOTLINE
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 900,
              letterSpacing: '0.03em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              margin: '0 0 28px 0',
            }}
          >
            EVENT <span style={{ color: 'var(--accent-red)' }}>COORDINATORS</span>
          </h2>

          {/* 3 Clickable Contact Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
            className="event-coordinators-grid"
          >
            {EVENT_COORDINATORS_CONTACTS.map((contact) => (
              <a
                key={contact.name}
                href={contact.tel}
                style={{
                  background: '#090a0d',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '24px 22px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-red)',
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      color: 'var(--accent-red)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    CALL DIRECT <ArrowUpRight size={14} />
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      color: '#FFFFFF',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    {contact.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--accent-red)',
                      letterSpacing: '0.08em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    {contact.phone}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .domain-avatar-wrap {
          width: 160px;
          height: 160px;
          margin-bottom: 16px;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .domain-grid > div:hover .domain-avatar-wrap {
          border-color: var(--accent-red);
          box-shadow: 0 0 24px rgba(225, 6, 0, 0.45);
          transform: scale(1.03);
        }
        @media (max-width: 900px) {
          .domain-avatar-wrap {
            width: 140px;
            height: 140px;
          }
          .about-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .contact-cards-grid {
            grid-template-columns: 1fr !important;
          }
          .event-coordinators-grid {
            grid-template-columns: 1fr !important;
          }
          .domain-grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .domain-grid-3 {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 680px) {
          .domain-avatar-wrap {
            width: 125px;
            height: 125px;
            margin-bottom: 12px;
          }
          .domain-grid-3 {
            grid-template-columns: 1fr !important;
          }
          .domain-grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .domain-avatar-wrap {
            width: 120px;
            height: 120px;
            margin-bottom: 12px;
          }
          .about-stats-grid {
            grid-template-columns: 1fr !important;
          }
          .domain-grid-4 {
            grid-template-columns: 1fr !important;
          }
          .domain-grid-3 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
