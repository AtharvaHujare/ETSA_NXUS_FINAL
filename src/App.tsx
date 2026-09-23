import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventsSection } from './components/EventsSection';
import { CalendarSection } from './components/CalendarSection';
import { SponsorsSection } from './components/SponsorsSection';
import { GlimpsesSection } from './components/Glimpses/GlimpsesSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { CinematicIntro } from './components/CinematicIntro';
import { InstitutionalLogos } from './components/InstitutionalLogos';
import { NEXUS_EVENTS, type NexusEvent } from './data/nexusEventsData';
import { AudioProvider } from './context/AudioContext';

// Lazy-load route-specific views & registration modal so they do NOT bloat the homepage bundle
const GlimpsesPage = lazy(() =>
  import('./components/Glimpses/GlimpsesPage').then((m) => ({ default: m.GlimpsesPage }))
);
const HackathonPage = lazy(() => import('./components/Hackathon/HackathonPage'));
const PitStopProtocolPage = lazy(() =>
  import('./components/PitStop/PitStopProtocolPage').then((m) => ({ default: m.PitStopProtocolPage }))
);
const PCCOEGotTalentPage = lazy(() => import('./components/Talent/PCCOEGotTalentPage'));
const EventPlaceholderPage = lazy(() =>
  import('./components/Events/EventPlaceholderPage').then((m) => ({ default: m.EventPlaceholderPage }))
);
const RegisterModal = lazy(() =>
  import('./components/RegisterModal').then((m) => ({ default: m.RegisterModal }))
);

const PageLoader = () => (
  <div
    style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#050507',
      color: 'rgba(255, 255, 255, 0.4)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.74rem',
      letterSpacing: '0.22em',
    }}
  >
    <span
      style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: 'var(--accent-red)',
        marginRight: '10px',
      }}
    />
    LOADING TELEMETRY...
  </div>
);

function getEventFromLocation(): NexusEvent | null {
  if (typeof window === 'undefined') return null;
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  // 1. Direct path check (e.g. /events/hardware-hackathon)
  for (const evt of NEXUS_EVENTS) {
    if (path === evt.route.toLowerCase() || path === `${evt.route.toLowerCase()}/`) {
      return evt;
    }
  }

  // 2. Hash check (e.g. #hackathon, #pitstop, #talent, etc.)
  if (hash === '#hackathon' || hash === '#events/hardware-hackathon' || hash === '#/events/hardware-hackathon') {
    return NEXUS_EVENTS.find((e) => e.id === 'hardware-hackathon') || NEXUS_EVENTS[0];
  }
  if (hash === '#pitstop' || hash === '#pit-stop' || hash === '#pit-stop-protocol' || hash === '#events/pit-stop-protocol') {
    return NEXUS_EVENTS.find((e) => e.id === 'pit-stop-protocol') || null;
  }
  if (hash === '#talent' || hash === '#pccoe-got-talent' || hash === '#events/pccoe-got-talent' || hash === '#/events/pccoe-got-talent') {
    return NEXUS_EVENTS.find((e) => e.id === 'pccoe-got-talent') || null;
  }

  for (const evt of NEXUS_EVENTS) {
    if (
      hash === `#${evt.id.toLowerCase()}` ||
      hash === `#events/${evt.id.toLowerCase()}` ||
      hash === `#/events/${evt.id.toLowerCase()}` ||
      hash === `#${evt.route.toLowerCase()}`
    ) {
      return evt;
    }
  }

  return null;
}

function isGlimpsesLocation(): boolean {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  return path === '/glimpses' || path === '/glimpses/' || hash === '#glimpses' || hash === '#/glimpses';
}

export function AppContent() {
  const [showIntro, setShowIntro] = useState(() => !isGlimpsesLocation());
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string | undefined>(undefined);
  const [activeEvent, setActiveEvent] = useState<NexusEvent | null>(() => getEventFromLocation());
  const [isGlimpses, setIsGlimpses] = useState(() => isGlimpsesLocation());

  useEffect(() => {
    const handleLocationChange = () => {
      const evt = getEventFromLocation();
      setActiveEvent(evt);
      const glimpses = isGlimpsesLocation();
      setIsGlimpses(glimpses);
      if (glimpses) {
        setShowIntro(false);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToRoute = (route: string) => {
    window.history.pushState(null, '', route);
    const evt = getEventFromLocation();
    setActiveEvent(evt);
    const glimpses = isGlimpsesLocation();
    setIsGlimpses(glimpses);
    if (glimpses) {
      setShowIntro(false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToEvents = () => {
    window.history.pushState(null, '', '/#events');
    setActiveEvent(null);
    setIsGlimpses(false);
    setTimeout(() => {
      const el = document.getElementById('events');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const handleBackToHome = () => {
    window.history.pushState(null, '', '/');
    setActiveEvent(null);
    setIsGlimpses(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRegister = (eventName?: string) => {
    setSelectedEvent(eventName || activeEvent?.name || undefined);
    setIsRegisterOpen(true);
  };

  const handleScrollToEvents = () => {
    const eventsElem = document.getElementById('events');
    if (eventsElem) {
      eventsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (href: string) => {
    if (href === '/glimpses' || href === '#glimpses') {
      setShowIntro(false);
      navigateToRoute('/glimpses');
      return;
    }

    if (activeEvent || isGlimpses) {
      if (href === '#' || href === '#home') {
        handleBackToHome();
      } else if (href.startsWith('#')) {
        window.history.pushState(null, '', `/${href}`);
        setActiveEvent(null);
        setIsGlimpses(false);
        setTimeout(() => {
          const targetId = href.replace('#', '');
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        navigateToRoute(href);
      }
    } else {
      if (href === '#hackathon') {
        navigateToRoute('/events/hardware-hackathon');
      } else if (href.startsWith('#events/')) {
        navigateToRoute(href.replace('#', '/'));
      } else if (href.startsWith('#')) {
        const targetId = href.replace('#', '');
        if (targetId) {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        navigateToRoute(href);
      }
    }
  };

  return (
    <div className="nexus-app" style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#050505' }}>
      {/* Cinematic Opening Sequence */}
      {showIntro && <CinematicIntro onComplete={() => setShowIntro(false)} />}

      {/* Subtle Film Grain Noise */}
      <div className="noise-overlay" />

      {/* Sticky Motorsport Navbar */}
      <Navbar
        onRegisterClick={() => handleOpenRegister()}
        activeOverride={isGlimpses ? 'GLIMPSES' : activeEvent ? 'EVENTS' : undefined}
        onNavClick={handleNavClick}
      />

      {isGlimpses ? (
        /* Dedicated Glimpses View (/glimpses) */
        <Suspense fallback={<PageLoader />}>
          <GlimpsesPage onBackToHome={handleBackToHome} />
          <Footer />
        </Suspense>
      ) : activeEvent ? (
        /* Dedicated Event Subpage View */
        <Suspense fallback={<PageLoader />}>
          {activeEvent.id === 'pccoe-got-talent' ? (
            <PCCOEGotTalentPage
              onBackToEvents={handleBackToEvents}
              onRegister={() => window.open('https://forms.gle/aSW1oNgAGfdZk4pM7', '_blank', 'noopener,noreferrer')}
            />
          ) : activeEvent.id === 'pit-stop-protocol' ? (
            <PitStopProtocolPage
              onBackToEvents={handleBackToEvents}
              onRegister={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSd-bD6nwmFtKreRESHkHEIP90TZvry8b_eOgIpFQihly2j2Dg/viewform?usp=publish-editor', '_blank', 'noopener,noreferrer')}
            />
          ) : activeEvent.id === 'hardware-hackathon' ? (
            <HackathonPage
              onBackToEvents={handleBackToEvents}
              onRegister={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfscMSrC3bGdzINzabhfzGmZMRUrToqFEKmQCrq0I-uQUIdaA/viewform?usp=publish-editor', '_blank', 'noopener,noreferrer')}
            />
          ) : (
            <EventPlaceholderPage event={activeEvent} onBackToEvents={handleBackToEvents} />
          )}
          <Footer />
        </Suspense>
      ) : (
        /* Main NEXUS 2026 Portal View */
        <>
          {/* Main Hero with 3D Car & Reference UI */}
          <Hero onExploreEvents={handleScrollToEvents} canLoad3D={!showIntro} />

          {/* Institutional Partner / Association Logo Strip */}
          <InstitutionalLogos />

          {/* Editorial Events Championship Grid */}
          <EventsSection
            onSelectEvent={(name) => handleOpenRegister(name)}
            onNavigateEvent={navigateToRoute}
          />

          {/* Race Weekend 3D Interactive Calendar Circuit */}
          <CalendarSection onRegisterClick={handleOpenRegister} canLoad3D={!showIntro} />

          {/* Sponsor Alliances & Constructors */}
          <SponsorsSection />

          {/* Telemetry & Paddock Glimpses Visual Reel */}
          <GlimpsesSection />

          {/* About Nexus, Organizing Domains & Contact Us */}
          <AboutSection />

          {/* Minimalist Editorial Footer */}
          <Footer />
        </>
      )}

      {/* Interactive Registration Modal - Lazy loaded */}
      {isRegisterOpen && (
        <Suspense fallback={null}>
          <RegisterModal
            isOpen={isRegisterOpen}
            onClose={() => setIsRegisterOpen(false)}
            preselectedEvent={selectedEvent}
          />
        </Suspense>
      )}
    </div>
  );
}

export function App() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  );
}

export default App;
