import React from 'react';
import { X, Cpu, CheckCircle2 } from 'lucide-react';
import type { DeskComponentInfo } from '../../../data/hardwareHackathonData';

interface DeskInspectOverlayProps {
  component: DeskComponentInfo | null;
  onClose: () => void;
}

export function DeskInspectOverlay({ component, onClose }: DeskInspectOverlayProps) {
  if (!component) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: '24px',
        right: '24px',
        maxWidth: '360px',
        width: 'calc(100% - 48px)',
        background: 'rgba(10, 11, 15, 0.95)',
        border: '1px solid rgba(225, 6, 0, 0.5)',
        borderRadius: '6px',
        padding: '20px',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.8), 0 0 24px rgba(225, 6, 0, 0.25)',
        zIndex: 30,
        animation: 'fadeInSlide 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '12px',
          marginBottom: '10px',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: 'var(--accent-red)',
              textTransform: 'uppercase',
              marginBottom: '4px',
            }}
          >
            INSPECT // {component.category}
          </div>
          <h4
            style={{
              fontFamily: 'var(--font-racing)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {component.name}
          </h4>
        </div>

        <button
          onClick={onClose}
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: 'none',
            color: '#AAAAAA',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
        >
          <X size={15} />
        </button>
      </div>

      {/* Role / Subtitle */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: '#38bdf8',
          marginBottom: '10px',
        }}
      >
        {component.role}
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.82rem',
          lineHeight: 1.45,
          color: '#CCCCCC',
          margin: '0 0 14px 0',
        }}
      >
        {component.description}
      </p>

      {/* Key Specifications list */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        {component.specs.map((spec, sIdx) => (
          <div
            key={sIdx}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: '#999999',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ color: 'var(--accent-red)', fontSize: '0.8rem' }}>▸</span>
            <span>{spec}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
