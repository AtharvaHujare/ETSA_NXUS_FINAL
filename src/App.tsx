import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventsSection } from './components/EventsSection';
import { CalendarSection } from './components/CalendarSection';
import { SponsorsSection } from './components/SponsorsSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { CinematicIntro } from './components/CinematicIntro';

export function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string | undefined>(undefined);

  const handleOpenRegister = (eventName?: string) => {
    setSelectedEvent(eventName);
    setIsRegisterOpen(true);
  };

  const handleScrollToEvents = () => {
    const eventsElem = document.getElementById('events');
    if (eventsElem) {
      eventsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nexus-app" style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#050505' }}>
      {/* Cinematic Opening Sequence: BELT IN -> THE GRID IS SET -> NEXUS VIDEO */}
      {showIntro && <CinematicIntro onComplete={() => setShowIntro(false)} />}

      {/* Subtle Film Grain Noise */}
      <div className="noise-overlay" />

      {/* Sticky Motorsport Navbar */}
      <Navbar onRegisterClick={() => handleOpenRegister()} />

      {/* Main Hero with 3D Car & Reference UI */}
      <Hero onExploreEvents={handleScrollToEvents} />

      {/* Editorial Events Championship Grid */}
      <EventsSection onSelectEvent={(name) => handleOpenRegister(name)} />

      {/* Race Weekend 3-Day Calendar & Timetable */}
      <CalendarSection />

      {/* Sponsor Alliances & Constructors */}
      <SponsorsSection />

      {/* Telemetry & Paddock Gallery */}
      <GallerySection />

      {/* Minimalist Editorial Footer */}
      <Footer />

      {/* Interactive Registration Modal */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        preselectedEvent={selectedEvent}
      />
    </div>
  );
}

export default App;
