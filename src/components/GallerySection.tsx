import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  spec: string;
  gradient: string;
  description: string;
}

export function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'TELEMETRY PIT WALL CONSOLE',
      category: 'DATA ACQUISITION',
      spec: '1000HZ CAN BUS / REAL-TIME STREAM',
      gradient: 'linear-gradient(135deg, #181920 0%, #0d0e12 100%)',
      description:
        'Live engineering pit console streaming tire surface temperatures, hybrid energy deployment, and DRS flap angle over encrypted 5GHz mesh array.',
    },
    {
      id: '2',
      title: 'FRONT WING GROUND EFFECT CFD',
      category: 'AERODYNAMICS',
      spec: '2.4 BAR DOWNFORCE @ 280 KM/H',
      gradient: 'linear-gradient(135deg, #241315 0%, #0d0c0e 100%)',
      description:
        'Computational fluid dynamics mapping of vortex shedding around front wing endplates directing turbulent air away from floor venturi tunnels.',
    },
    {
      id: '3',
      title: 'AUTONOMOUS PERCEPTION RIG',
      category: 'EDGE ROBOTICS',
      spec: '360° LIDAR + STEREO OPTICAL MATRIX',
      gradient: 'linear-gradient(135deg, #141b24 0%, #0c0d12 100%)',
      description:
        'Custom edge computing array mounted on test chassis executing neural SLAM and track edge identification at sub-5 millisecond latency.',
    },
    {
      id: '4',
      title: 'CARBON COMPOSITE MONOCOQUE',
      category: 'CHASSIS ENGINEERING',
      spec: 'FIA HOMOLOGATED / TORAY T1000G CARBON',
      gradient: 'linear-gradient(135deg, #1a1a1f 0%, #09090b 100%)',
      description:
        'High-modulus carbon fiber cockpit tub with integrated titanium Halo structural hoop providing 120 kilonewtons of impact deflection.',
    },
    {
      id: '5',
      title: 'DIRECT-DRIVE SIMULATOR RIGS',
      category: 'ESPORTS ARENA',
      spec: '25NM FORCE FEEDBACK / PNEUMATIC PEDALS',
      gradient: 'linear-gradient(135deg, #221219 0%, #0c0b0f 100%)',
      description:
        'Championship tournament battle stations equipped with active hydraulic pedal resistance and triple 240Hz OLED wrap-around displays.',
    },
    {
      id: '6',
      title: 'NIGHT QUALIFYING GRID',
      category: 'CIRCUIT ATMOSPHERE',
      spec: 'PUNE CIRCUIT // FLOODLIGHT TEMPERATURE 5400K',
      gradient: 'linear-gradient(135deg, #161821 0%, #070709 100%)',
      description:
        'Atmospheric night qualifying session with glowing ceramic brake rotors reaching 950°C under heavy braking into turn 1.',
    },
  ];

  return (
    <section
      id="gallery"
      style={{
        position: 'relative',
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(255, 255, 255, 0.07)',
        padding: '120px 0 100px 0',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '64px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '28px',
          }}
        >
          <div>
            <div className="racing-tag" style={{ marginBottom: '12px' }}>
              VISUAL RECON // PADDOCK ARCHIVE
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
                fontWeight: 900,
                letterSpacing: '0.04em',
                lineHeight: 1,
                color: '#FFFFFF',
              }}
            >
              GALLERY
            </h2>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              color: '#888888',
            }}
          >
            TECHNICAL ARCHIVE // NEXUS CHRONICLES
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
          className="gallery-grid"
        >
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              style={{
                height: '320px',
                background: item.gradient,
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(225, 6, 0, 0.5)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.2em',
                    color: 'var(--accent-red)',
                    fontWeight: 600,
                  }}
                >
                  {item.category}
                </div>
                <Maximize2 size={16} style={{ color: '#888888' }} />
              </div>

              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-racing)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#FFFFFF',
                    marginBottom: '8px',
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h4>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.14em',
                    color: '#8E8E93',
                  }}
                >
                  {item.spec}
                </div>
              </div>

              {/* Bottom decorative accent line */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '32px',
                  height: '2px',
                  background: 'var(--accent-red)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(5, 5, 5, 0.94)',
              backdropFilter: 'blur(16px)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
            onClick={() => setActiveItem(null)}
          >
            <div
              style={{
                maxWidth: '680px',
                width: '100%',
                background: '#0e0e12',
                border: '1px solid var(--accent-red-border)',
                padding: '40px',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.22em',
                  color: 'var(--accent-red)',
                  marginBottom: '8px',
                }}
              >
                {activeItem.category} // ARCHIVE SPEC
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  letterSpacing: '0.04em',
                }}
              >
                {activeItem.title}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: '#AAAAAA',
                  letterSpacing: '0.16em',
                  marginBottom: '24px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                {activeItem.spec}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  color: '#CCCCCC',
                  lineHeight: 1.6,
                }}
              >
                {activeItem.description}
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
