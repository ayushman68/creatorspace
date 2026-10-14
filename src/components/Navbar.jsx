import React, { useState } from 'react';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  Layers, 
  Briefcase, 
  Users, 
  Presentation, 
  Database,
  ArrowRight,
  Menu,
  X,
  Compass
} from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  userMode, 
  setUserMode, 
  onOpenPitchDeck, 
  onOpenDataModel,
  onOpenCreateBrief
}) {
  const [isMuted, setIsMuted] = useState(sounds.isMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  const handleTabClick = (tabId) => {
    sounds.tab();
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  const handleModeSwitch = () => {
    sounds.click();
    const nextMode = userMode === 'brand' ? 'creator' : 'brand';
    setUserMode(nextMode);
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '72px',
      background: 'rgba(7, 7, 11, 0.75)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-subtle)',
      zIndex: 50,
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
      }}>
        {/* Brand Mark */}
        <div 
          onClick={() => handleTabClick('discover')} 
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', userSelect: 'none' }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px -2px rgba(139, 92, 246, 0.6)'
          }}>
            <Sparkles size={20} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="font-display" style={{ fontSize: '19px', fontWeight: 700, letterSpacing: '-0.03em', color: '#fff' }}>
                NEURALIS
              </span>
              <span style={{
                fontSize: '10px',
                fontWeight: 600,
                textTransform: 'uppercase',
                padding: '2px 6px',
                borderRadius: '4px',
                background: 'rgba(139, 92, 246, 0.15)',
                color: '#c084fc',
                letterSpacing: '0.06em',
                border: '1px solid rgba(139, 92, 246, 0.25)'
              }}>
                AI OS
              </span>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.1 }}>
              AI Content Creator Marketplace
            </p>
          </div>
        </div>

        {/* Central Nav Tabs (Desktop) */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '4px',
          background: 'rgba(255, 255, 255, 0.03)',
          padding: '4px 6px',
          borderRadius: 'var(--radius-pill)',
          border: '1px solid var(--border-subtle)'
        }} className="desktop-nav">
          <button
            onClick={() => handleTabClick('discover')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 16px',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              background: activeTab === 'discover' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
              color: activeTab === 'discover' ? '#fff' : 'var(--text-secondary)',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            <Compass size={14} />
            <span>Discover Creators</span>
          </button>

          <button
            onClick={() => handleTabClick('briefs')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 16px',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              background: activeTab === 'briefs' ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
              color: activeTab === 'briefs' ? '#fff' : 'var(--text-secondary)',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            <Briefcase size={14} />
            <span>Active Briefs</span>
          </button>

          <button
            onClick={() => handleTabClick('brief-builder')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 16px',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              background: activeTab === 'brief-builder' ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
              color: activeTab === 'brief-builder' ? '#d8b4fe' : 'var(--text-secondary)',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              position: 'relative'
            }}
          >
            <Sparkles size={14} color="#c084fc" />
            <span>AI Brief Builder</span>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#c084fc',
              boxShadow: '0 0 6px #c084fc'
            }} />
          </button>

          <button
            onClick={() => handleTabClick('verification')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 16px',
              borderRadius: 'var(--radius-pill)',
              border: 'none',
              background: activeTab === 'verification' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
              color: activeTab === 'verification' ? '#34d399' : 'var(--text-secondary)',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            <ShieldCheck size={14} color="#34d399" />
            <span>Verification Signals</span>
          </button>

          {userMode === 'creator' && (
            <button
              onClick={() => handleTabClick('creator-studio')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 16px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                background: activeTab === 'creator-studio' ? 'rgba(6, 182, 212, 0.18)' : 'transparent',
                color: activeTab === 'creator-studio' ? '#67e8f9' : 'var(--text-secondary)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Layers size={14} color="#67e8f9" />
              <span>My Creator Studio</span>
            </button>
          )}
        </nav>

        {/* Right Actions: Sound, Role Switcher, Pitch Deck, Data Model, CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Mute/Sound Button (Ascora feature) */}
          <button 
            onClick={handleToggleSound}
            className="btn-icon"
            title={isMuted ? 'Unmute interface sounds' : 'Mute interface sounds'}
            aria-label="Sound toggle"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {/* Presentation Slides & Data Model inspector buttons */}
          <button
            onClick={() => {
              sounds.openModal();
              onOpenPitchDeck();
            }}
            className="btn-secondary"
            style={{ fontSize: '12px', padding: '6px 12px', display: 'none' }}
            id="pitch-deck-btn"
          >
            <Presentation size={14} color="#8b5cf6" />
            <span>Deck (10%)</span>
          </button>

          <button
            onClick={() => {
              sounds.openModal();
              onOpenDataModel();
            }}
            className="btn-secondary"
            style={{ fontSize: '12px', padding: '6px 12px', display: 'none' }}
            id="data-model-btn"
          >
            <Database size={14} color="#06b6d4" />
            <span>Data Model</span>
          </button>

          {/* Persona Switcher Toggle */}
          <button
            onClick={handleModeSwitch}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: userMode === 'brand' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(6, 182, 212, 0.12)',
              border: `1px solid ${userMode === 'brand' ? 'var(--border-subtle)' : 'rgba(6, 182, 212, 0.3)'}`,
              borderRadius: 'var(--radius-pill)',
              cursor: 'pointer',
              color: userMode === 'brand' ? 'var(--text-secondary)' : '#67e8f9',
              fontSize: '12px',
              fontWeight: 600,
              transition: 'all 0.2s ease'
            }}
            title="Switch between Brand View and Creator Studio view"
          >
            <Users size={14} />
            <span>{userMode === 'brand' ? 'Brand Mode' : 'Creator Mode'}</span>
          </button>

          {/* Action CTA */}
          <button 
            onClick={() => {
              sounds.click();
              if (userMode === 'brand') {
                onOpenCreateBrief();
              } else {
                handleTabClick('creator-studio');
              }
            }}
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '13px' }}
          >
            <span>{userMode === 'brand' ? 'Post a Brief' : 'Submit Portfolio'}</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="btn-icon mobile-menu-btn"
            style={{ display: 'none' }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          background: '#0a0a10',
          borderBottom: '1px solid var(--border-light)',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          zIndex: 49
        }}>
          <button 
            onClick={() => handleTabClick('discover')} 
            className="btn-secondary" 
            style={{ justifyContent: 'flex-start' }}
          >
            <Compass size={16} /> Discover Creators
          </button>
          <button 
            onClick={() => handleTabClick('briefs')} 
            className="btn-secondary" 
            style={{ justifyContent: 'flex-start' }}
          >
            <Briefcase size={16} /> Active Brand Briefs
          </button>
          <button 
            onClick={() => handleTabClick('brief-builder')} 
            className="btn-secondary" 
            style={{ justifyContent: 'flex-start', color: '#c084fc' }}
          >
            <Sparkles size={16} /> ✨ AI-Assisted Brief Builder
          </button>
          <button 
            onClick={() => handleTabClick('verification')} 
            className="btn-secondary" 
            style={{ justifyContent: 'flex-start', color: '#34d399' }}
          >
            <ShieldCheck size={16} /> Verification & Trust Center
          </button>
          <div style={{ display: 'flex', gap: '8px', paddingTop: '8px', borderTop: '1px solid var(--border-subtle)' }}>
            <button 
              onClick={() => { onOpenPitchDeck(); setMobileMenuOpen(false); }} 
              className="btn-secondary" 
              style={{ flex: 1, fontSize: '12px' }}
            >
              <Presentation size={14} /> Pitch Deck
            </button>
            <button 
              onClick={() => { onOpenDataModel(); setMobileMenuOpen(false); }} 
              className="btn-secondary" 
              style={{ flex: 1, fontSize: '12px' }}
            >
              <Database size={14} /> Data Model
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          #pitch-deck-btn { display: inline-flex !important; }
          #data-model-btn { display: inline-flex !important; }
        }
        @media (max-width: 991px) {
          .mobile-menu-btn { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
