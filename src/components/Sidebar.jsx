import React from 'react';
import { 
  Sparkles, 
  Compass, 
  Briefcase, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Presentation, 
  Database, 
  Users, 
  Volume2, 
  VolumeX, 
  Sliders, 
  FileText, 
  TrendingUp,
  Settings,
  X,
  Lock,
  ChevronRight
} from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  userMode, 
  setUserMode, 
  onOpenPitchDeck, 
  onOpenDataModel,
  onOpenCreateBrief,
  isOpen,
  onClose
}) {
  const isMuted = sounds.isMuted();

  const handleNav = (tabId) => {
    sounds.tab();
    setActiveTab(tabId);
    if (onClose) onClose();
  };

  const handleToggleSound = () => {
    sounds.toggleMute();
    // re-render handled by state in parent or local force update
  };

  const handleToggleMode = () => {
    sounds.click();
    setUserMode(userMode === 'brand' ? 'creator' : 'brand');
  };

  return (
    <aside className={`sidebar-container ${isOpen ? 'open' : ''}`} style={{
      width: '260px',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      background: '#0a0b12',
      borderRight: '1px solid rgba(255, 255, 255, 0.07)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 60,
      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      userSelect: 'none'
    }}>
      {/* Brand Header */}
      <div style={{
        padding: '24px 20px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div 
          onClick={() => handleNav('discover')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 18px rgba(139, 92, 246, 0.5)'
          }}>
            <Sparkles size={18} color="#fff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="font-display" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em' }}>
                NEURALIS
              </span>
              <span style={{
                fontSize: '9px',
                fontWeight: 700,
                padding: '2px 5px',
                borderRadius: '4px',
                background: 'rgba(139, 92, 246, 0.15)',
                color: '#c084fc',
                border: '1px solid rgba(139, 92, 246, 0.3)'
              }}>
                PRO
              </span>
            </div>
            <p style={{ fontSize: '10.5px', color: 'var(--text-muted)', lineHeight: 1.1 }}>
              AI Creative Marketplace
            </p>
          </div>
        </div>

        {onClose && (
          <button onClick={onClose} className="btn-icon mobile-close-btn" style={{ display: 'none' }}>
            <X size={16} />
          </button>
        )}
      </div>

      {/* Navigation Links (Matching Quantix style) */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
        {/* SECTION 1: MARKETPLACE & DISCOVERY */}
        <div>
          <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.35)', letterSpacing: '0.08em', padding: '0 10px 6px', display: 'block' }}>
            MARKETPLACE
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <button
              onClick={() => handleNav('discover')}
              className={`sidebar-nav-item ${activeTab === 'discover' ? 'active' : ''}`}
            >
              <Compass size={16} />
              <span>Discover Creators</span>
            </button>

            <button
              onClick={() => handleNav('briefs')}
              className={`sidebar-nav-item ${activeTab === 'briefs' ? 'active' : ''}`}
            >
              <Briefcase size={16} />
              <span>Active Briefs</span>
              <span className="sidebar-pill">4 Open</span>
            </button>

            <button
              onClick={() => handleNav('brief-builder')}
              className={`sidebar-nav-item ${activeTab === 'brief-builder' ? 'active' : ''}`}
              style={{ color: activeTab === 'brief-builder' ? '#fff' : '#d8b4fe' }}
            >
              <Sparkles size={16} color="#c084fc" />
              <span>AI Brief Builder</span>
              <span className="sidebar-pill" style={{ background: 'rgba(139, 92, 246, 0.25)', color: '#c084fc' }}>
                AI ✨
              </span>
            </button>

            <button
              onClick={() => handleNav('verification')}
              className={`sidebar-nav-item ${activeTab === 'verification' ? 'active' : ''}`}
              style={{ color: activeTab === 'verification' ? '#fff' : '#34d399' }}
            >
              <ShieldCheck size={16} color="#10b981" />
              <span>Verification Center</span>
            </button>
          </div>
        </div>

        {/* SECTION 2: CREATOR STUDIO */}
        <div>
          <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.35)', letterSpacing: '0.08em', padding: '0 10px 6px', display: 'block' }}>
            CREATOR STUDIO
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <button
              onClick={() => handleNav('creator-studio')}
              className={`sidebar-nav-item ${activeTab === 'creator-studio' ? 'active' : ''}`}
            >
              <Layers size={16} color="#67e8f9" />
              <span>My Portfolios &amp; LoRAs</span>
            </button>

            <button
              onClick={() => handleNav('creator-studio')}
              className="sidebar-nav-item"
            >
              <Cpu size={16} />
              <span>ComfyUI Node Graphs</span>
            </button>

            <button
              onClick={() => handleNav('creator-studio')}
              className="sidebar-nav-item"
            >
              <Lock size={16} />
              <span>Escrow Milestones</span>
              <span className="sidebar-pill" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399' }}>
                $4.8M
              </span>
            </button>
          </div>
        </div>

        {/* SECTION 3: PLATFORM & EVALUATION */}
        <div>
          <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.35)', letterSpacing: '0.08em', padding: '0 10px 6px', display: 'block' }}>
            EVALUATION &amp; DOCS
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <button
              onClick={() => { sounds.openModal(); onOpenPitchDeck(); }}
              className="sidebar-nav-item"
            >
              <Presentation size={16} color="#8b5cf6" />
              <span>Pitch Deck (10%)</span>
              <ChevronRight size={13} style={{ marginLeft: 'auto', opacity: 0.5 }} />
            </button>

            <button
              onClick={() => { sounds.openModal(); onOpenDataModel(); }}
              className="sidebar-nav-item"
            >
              <Database size={16} color="#06b6d4" />
              <span>Data Model Spec</span>
              <ChevronRight size={13} style={{ marginLeft: 'auto', opacity: 0.5 }} />
            </button>

            <button
              onClick={() => handleNav('verification')}
              className="sidebar-nav-item"
            >
              <FileText size={16} />
              <span>Commercial Indemnity</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Profile & Mode Switcher */}
      <div style={{
        padding: '16px',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        background: 'rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {/* Mode Toggle Button */}
        <button
          onClick={handleToggleMode}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 12px',
            background: userMode === 'brand' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(6, 182, 212, 0.1)',
            border: `1px solid ${userMode === 'brand' ? 'var(--border-subtle)' : 'rgba(6, 182, 212, 0.3)'}`,
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            color: userMode === 'brand' ? '#fff' : '#67e8f9',
            fontSize: '12px',
            fontWeight: 600,
            transition: 'all 0.2s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={14} />
            <span>{userMode === 'brand' ? 'Brand Agency View' : 'Creator Studio View'}</span>
          </div>
          <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Switch</span>
        </button>

        {/* User Card */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80" 
                alt="Jason Vance"
                style={{ width: '34px', height: '34px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <span style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 6px #10b981'
              }} />
            </div>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#fff', lineHeight: 1.1 }}>
                Jason Vance
              </p>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                {userMode === 'brand' ? 'Agency Lead' : 'AI Filmmaker'}
              </p>
            </div>
          </div>

          <button
            onClick={handleToggleSound}
            className="btn-icon"
            style={{ width: '30px', height: '30px' }}
            title={isMuted ? 'Unmute sounds' : 'Mute sounds'}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>
      </div>
    </aside>
  );
}
