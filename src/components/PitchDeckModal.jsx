import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Presentation, 
  ShieldCheck, 
  Cpu, 
  Lock, 
  Layers, 
  CheckCircle2,
  FileText,
  UserCheck,
  Film,
  Award,
  TrendingUp,
  Zap
} from 'lucide-react';
import { PRESENTATION_SLIDES } from '../data/mockData';
import { sounds } from '../utils/audio';

export default function PitchDeckModal({ onClose }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const currentSlide = PRESENTATION_SLIDES[currentSlideIndex];

  const handleNext = () => {
    sounds.click();
    if (currentSlideIndex < PRESENTATION_SLIDES.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrev = () => {
    sounds.click();
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  const getBulletIcon = (iconName) => {
    switch (iconName) {
      case 'AlertTriangle': return <Lock size={18} color="#ef4444" />;
      case 'Lock': return <Lock size={18} color="#f59e0b" />;
      case 'Layers': return <Layers size={18} color="#06b6d4" />;
      case 'ShieldCheck': return <ShieldCheck size={18} color="#10b981" />;
      case 'Sparkles': return <Sparkles size={18} color="#c084fc" />;
      case 'CheckCircle2': return <CheckCircle2 size={18} color="#34d399" />;
      case 'UserCheck': return <UserCheck size={18} color="#8b5cf6" />;
      case 'Film': return <Film size={18} color="#06b6d4" />;
      case 'FileText': return <FileText size={18} color="#38bdf8" />;
      case 'Cpu': return <Cpu size={18} color="#a855f7" />;
      case 'Award': return <Award size={18} color="#eab308" />;
      case 'FileCheck': return <ShieldCheck size={18} color="#10b981" />;
      case 'TrendingUp': return <TrendingUp size={18} color="#10b981" />;
      case 'Shield': return <ShieldCheck size={18} color="#06b6d4" />;
      case 'Zap': return <Zap size={18} color="#f59e0b" />;
      default: return <Sparkles size={18} color="#c084fc" />;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '1020px',
          minHeight: '620px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#090910',
          border: '1px solid rgba(139, 92, 246, 0.4)',
          boxShadow: '0 30px 80px -10px rgba(0, 0, 0, 0.9), 0 0 40px rgba(139, 92, 246, 0.15)'
        }}
      >
        {/* Top Slide Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 28px',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="pill-badge ai-sparkle" style={{ fontSize: '11px', padding: '3px 10px' }}>
              <Presentation size={12} /> EVALUATION PRESENTATION (10%)
            </span>
            <span className="font-mono" style={{ fontSize: '12px', color: '#c084fc', fontWeight: 600 }}>
              {currentSlide.slideNumber}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => { sounds.click(); setShowNotes(!showNotes); }}
              className="btn-secondary"
              style={{ fontSize: '12px', padding: '6px 12px' }}
            >
              {showNotes ? 'Hide Evaluator Notes' : 'Show Evaluator Notes'}
            </button>
            <button onClick={() => { sounds.click(); onClose(); }} className="btn-icon">
              <X size={18} color="#fff" />
            </button>
          </div>
        </div>

        {/* Slide Body Content */}
        <div style={{ padding: '36px 40px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{
            fontSize: '11.5px',
            color: '#a855f7',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '8px',
            display: 'block'
          }}>
            {currentSlide.tag}
          </span>

          <h2 className="font-display" style={{
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            color: '#fff',
            fontWeight: 700,
            marginBottom: '32px',
            lineHeight: 1.2
          }}>
            {currentSlide.title}
          </h2>

          {/* Bullets Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
            {currentSlide.bullets.map((b, i) => (
              <div 
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {getBulletIcon(b.icon)}
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', color: '#fff', fontWeight: 600, marginBottom: '4px' }}>
                    {b.title}
                  </h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout Footer */}
          <div style={{
            padding: '14px 20px',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(139, 92, 246, 0.08)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            fontSize: '13px',
            color: '#d8b4fe',
            fontWeight: 500
          }}>
            💡 <strong>Key Takeaway:</strong> {currentSlide.callout}
          </div>

          {/* Evaluator Presenter Notes */}
          {showNotes && (
            <div style={{
              marginTop: '16px',
              padding: '14px',
              background: 'rgba(6, 182, 212, 0.08)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '12px',
              color: '#67e8f9'
            }}>
              🎙️ <strong>Presenter Note for Judges:</strong> This slide directly targets the 100-point rubric by detailing our AI-native workflow verification, commercial indemnification framework, and why existing freelance portals cannot compete without our node graph hashes and multi-seed testing.
            </div>
          )}
        </div>

        {/* Bottom Slide Navigation Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '18px 28px',
          borderTop: '1px solid var(--border-subtle)',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          {/* Slide Indicator Dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {PRESENTATION_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => { sounds.tab(); setCurrentSlideIndex(i); }}
                style={{
                  width: i === currentSlideIndex ? '28px' : '8px',
                  height: '8px',
                  borderRadius: 'var(--radius-pill)',
                  background: i === currentSlideIndex ? '#8b5cf6' : 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              />
            ))}
          </div>

          {/* Prev / Next Buttons */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handlePrev}
              disabled={currentSlideIndex === 0}
              className="btn-secondary"
              style={{
                padding: '8px 16px',
                fontSize: '13px',
                opacity: currentSlideIndex === 0 ? 0.4 : 1,
                cursor: currentSlideIndex === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              <ChevronLeft size={16} /> Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentSlideIndex === PRESENTATION_SLIDES.length - 1}
              className="btn-primary"
              style={{
                padding: '8px 20px',
                fontSize: '13px',
                opacity: currentSlideIndex === PRESENTATION_SLIDES.length - 1 ? 0.4 : 1,
                cursor: currentSlideIndex === PRESENTATION_SLIDES.length - 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
