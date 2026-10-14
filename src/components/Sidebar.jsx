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
  currentUser,
  onOpenAuthModal,
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
  };

  const handleToggleMode = () => {
    sounds.click();
    if (onOpenAuthModal) {
      onOpenAuthModal(userMode === 'brand' ? 'creator' : 'brand');
    } else {
      setUserMode(userMode === 'brand' ? 'creator' : 'brand');
    }
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
              <span className="font-cinzel" style={{ fontSize: '17px', fontWeight: 800, color: '#fff', letterSpacing: '0.12em' }}>
                NEURALIS
              </span>
              <span style={{
                fontSize: '9px',
                fontWeight: 700,
                padding: '2px 5px',
                borderRadius: '4px',
                background: 'rgba(212, 175, 55, 0.15)',
                color: '#fef08a',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                letterSpacing: '0.06em'
              }}>
                ATELIER
              </span>
            </div>
            <p style={{ fontSize: '10px', color: 'var(--text-muted)', lineHeight: 1.1, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Haute Creative Marketplace
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
          <span className="editorial-nav-label" style={{ color: 'rgba(212, 175, 55, 0.7)', padding: '0 10px 8px', display: 'block' }}>
            ATELIER DIRECTORY
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
          <span className="editorial-nav-label" style={{ color: 'rgba(212, 175, 55, 0.7)', padding: '0 10px 8px', display: 'block' }}>
            EDITORIAL STUDIO
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
          <span className="editorial-nav-label" style={{ color: 'rgba(212, 175, 55, 0.7)', padding: '0 10px 8px', display: 'block' }}>
            SPECIFICATIONS &amp; DOCS
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
        {/* Mode Toggle & Sign In Switcher */}
        <button
          onClick={handleToggleMode}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 12px',
            background: currentUser?.type === 'brand' ? 'rgba(139, 92, 246, 0.12)' : 'rgba(6, 182, 212, 0.12)',
            border: `1px solid ${currentUser?.type === 'brand' ? 'rgba(139, 92, 246, 0.35)' : 'rgba(6, 182, 212, 0.35)'}`,
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            color: currentUser?.type === 'brand' ? '#c084fc' : '#67e8f9',
            fontSize: '12px',
            fontWeight: 600,
            transition: 'all 0.2s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={14} />
            <span>{currentUser?.type === 'brand' ? 'Brand Agency View' : 'Creator Studio View'}</span>
          </div>
          <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Switch / Sign In</span>
        </button>

        {/* User Card */}
        <div 
          onClick={() => { sounds.click(); if (onOpenAuthModal) onOpenAuthModal(currentUser?.type); }}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: 'var(--radius-sm)',
            transition: 'background 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src={currentUser?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80"} 
                alt={currentUser?.name || "User"}
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
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#fff', lineHeight: 1.1, margin: 0 }}>
                {currentUser?.name || 'Jason Vance'}
              </p>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0 }}>
                {currentUser?.type === 'brand' ? (currentUser?.organization || 'Agency Lead') : (currentUser?.organization || 'Master Director')}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); handleToggleSound(); }}
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
