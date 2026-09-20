import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventsSection } from './components/EventsSection';
import { CalendarSection } from './components/CalendarSection';
import { SponsorsSection } from './components/SponsorsSection';
import { GlimpsesSection } from './components/Glimpses/GlimpsesSection';
import { GlimpsesPage } from './components/Glimpses/GlimpsesPage';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { CinematicIntro } from './components/CinematicIntro';
import { HackathonPage } from './components/Hackathon/HackathonPage';
import { PitStopProtocolPage } from './components/PitStop/PitStopProtocolPage';
import { EventPlaceholderPage } from './components/Events/EventPlaceholderPage';
import { NEXUS_EVENTS, type NexusEvent } from './data/nexusEventsData';
import { AudioProvider } from './context/AudioContext';

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

  // 2. Hash check (e.g. #hackathon, #pitstop, etc.)
  if (hash === '#hackathon' || hash === '#events/hardware-hackathon' || hash === '#/events/hardware-hackathon') {
    return NEXUS_EVENTS.find((e) => e.id === 'hardware-hackathon') || NEXUS_EVENTS[0];
  }
  if (hash === '#pitstop' || hash === '#pit-stop' || hash === '#pit-stop-protocol' || hash === '#events/pit-stop-protocol') {
    return NEXUS_EVENTS.find((e) => e.id === 'pit-stop-protocol') || null;
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
  const [showIntro, setShowIntro] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string | undefined>(undefined);
  const [activeEvent, setActiveEvent] = useState<NexusEvent | null>(() => getEventFromLocation());
  const [isGlimpses, setIsGlimpses] = useState(() => isGlimpsesLocation());

  useEffect(() => {
    const handleLocationChange = () => {
      const evt = getEventFromLocation();
      setActiveEvent(evt);
      setIsGlimpses(isGlimpsesLocation());
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
    setIsGlimpses(isGlimpsesLocation());
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
        <>
          <GlimpsesPage onBackToHome={handleBackToHome} />
          <Footer />
        </>
      ) : activeEvent ? (
        /* Dedicated Event Subpage View */
        <>
          {activeEvent.id === 'pit-stop-protocol' ? (
            <PitStopProtocolPage
              onBackToEvents={handleBackToEvents}
              onRegister={() => handleOpenRegister('Pit Stop Protocol')}
            />
          ) : activeEvent.id === 'hardware-hackathon' ? (
            <HackathonPage
              onBackToEvents={handleBackToEvents}
              onRegister={() => handleOpenRegister('Hardware Hackathon')}
            />
          ) : (
            <EventPlaceholderPage event={activeEvent} onBackToEvents={handleBackToEvents} />
          )}
          <Footer />
        </>
      ) : (
        /* Main NEXUS 2026 Portal View */
        <>
          {/* Main Hero with 3D Car & Reference UI */}
          <Hero onExploreEvents={handleScrollToEvents} canLoad3D={!showIntro} />

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

          {/* Minimalist Editorial Footer */}
          <Footer />
        </>
      )}

      {/* Interactive Registration Modal */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        preselectedEvent={selectedEvent}
      />
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
