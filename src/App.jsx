import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import MetricSparklineCards from './components/MetricSparklineCards';
import HeroSection from './components/HeroSection';
import CreatorSearch from './components/CreatorSearch';
import CreatorProfileModal from './components/CreatorProfileModal';
import BriefBuilder from './components/BriefBuilder';
import ActiveBriefs from './components/ActiveBriefs';
import VerificationCenter from './components/VerificationCenter';
import PitchDeckModal from './components/PitchDeckModal';
import DataModelModal from './components/DataModelModal';
import CreatorStudioView from './components/CreatorStudioView';
import WorkflowInspectorModal from './components/WorkflowInspectorModal';
import AuthModal, { DEMO_USERS } from './components/AuthModal';
import { CREATORS, INITIAL_BRIEFS } from './data/mockData';
import { sounds } from './utils/audio';
import { Sparkles, ShieldCheck, Database, Presentation, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('discover'); // 'discover', 'briefs', 'brief-builder', 'verification', 'creator-studio'
  const [userMode, setUserMode] = useState('brand'); // 'brand', 'creator'
  const [currentUser, setCurrentUser] = useState(DEMO_USERS.brand);
  const [briefs, setBriefs] = useState(INITIAL_BRIEFS);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [inspectingWorkflowItem, setInspectingWorkflowItem] = useState(null);
  const [inspectingCreator, setInspectingCreator] = useState(null);
  const [showPitchDeck, setShowPitchDeck] = useState(false);
  const [showDataModel, setShowDataModel] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authDefaultRole, setAuthDefaultRole] = useState('brand');

  const handleBriefPublished = (newBrief) => {
    setBriefs([newBrief, ...briefs]);
  };

  const handleInspectWorkflow = (item, creator) => {
    sounds.openModal();
    setInspectingWorkflowItem(item);
    setInspectingCreator(creator);
  };

  const handleOpenAuthModal = (role = 'brand') => {
    sounds.openModal();
    setAuthDefaultRole(role);
    setShowAuthModal(true);
  };

  const handleSignIn = (user) => {
    setCurrentUser(user);
    setUserMode(user.type);
    if (user.type === 'creator') {
      setActiveTab('creator-studio');
    } else {
      setActiveTab('discover');
    }
  };

  const handleSwitchPersona = (targetRole) => {
    sounds.click();
    const newUser = DEMO_USERS[targetRole] || DEMO_USERS.brand;
    setCurrentUser(newUser);
    setUserMode(targetRole);
    if (targetRole === 'creator') {
      setActiveTab('creator-studio');
    } else {
      setActiveTab('discover');
    }
  };

  return (
    <div className="app-layout">
      {/* Ambient Aurora Glows */}
      <div className="ambient-mesh">
        <div className="aurora-orb aurora-1" />
        <div className="aurora-orb aurora-2" />
        <div className="aurora-orb aurora-3" />
      </div>

      {/* Grid Pattern Mesh */}
      <div className="grid-overlay" />

      {/* Mobile Sidebar Backdrop */}
      {sidebarOpen && (
        <div 
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Left Vertical Navigation Sidebar (Quantix Pinterest Template) */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userMode={userMode}
        setUserMode={setUserMode}
        currentUser={currentUser}
        onOpenAuthModal={handleOpenAuthModal}
        onOpenPitchDeck={() => setShowPitchDeck(true)}
        onOpenDataModel={() => setShowDataModel(true)}
        onOpenCreateBrief={() => setActiveTab('brief-builder')}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main App Layout */}
      <div className="app-main-layout">
        {/* Top Header with Live Cluster Ticker & Global Actions */}
        <TopHeader
          activeTab={activeTab}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          onOpenCreateBrief={() => setActiveTab('brief-builder')}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          currentUser={currentUser}
          onOpenAuthModal={handleOpenAuthModal}
          onSwitchPersona={handleSwitchPersona}
        />

        {/* Dashboard Content Area */}
        <main className="dashboard-content-area" style={{ position: 'relative', zIndex: 2 }}>
          {/* Quantix SVG Curved Sparkline Metrics Row */}
          <MetricSparklineCards />

          {/* Hero Banner for Discover Tab */}
          {activeTab === 'discover' && (
            <HeroSection
              onExploreCreators={() => {
                const el = document.getElementById('creator-discovery');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onStartBriefBuilder={() => setActiveTab('brief-builder')}
              onOpenVerification={() => setActiveTab('verification')}
              onOpenInspector={() => {
                handleInspectWorkflow(CREATORS[1].portfolio[0], CREATORS[1]);
              }}
            />
          )}

          {/* Tab 1: Discover Creators (30% Scope & 25% Discovery) */}
          {activeTab === 'discover' && (
            <CreatorSearch
              externalSearchQuery={searchQuery}
              onSelectCreator={(creator) => setSelectedCreator(creator)}
              onInspectWorkflow={handleInspectWorkflow}
            />
          )}

          {/* Tab 2: Active Brand Briefs (20% Scope) */}
          {activeTab === 'briefs' && (
            <ActiveBriefs
              briefs={briefs}
              onCreateBriefClick={() => setActiveTab('brief-builder')}
            />
          )}

          {/* Tab 3: AI-Assisted Brief Builder (Bonus Credit) */}
          {activeTab === 'brief-builder' && (
            <BriefBuilder
              onBriefPublished={handleBriefPublished}
              onNavigateToBriefs={() => setActiveTab('briefs')}
            />
          )}

          {/* Tab 4: Verification Signals & Trust Center (Bonus Credit) */}
          {activeTab === 'verification' && (
            <VerificationCenter />
          )}

          {/* Tab 5: Creator Studio View (Creator Persona UX) */}
          {activeTab === 'creator-studio' && (
            <CreatorStudioView
              onInspectWorkflow={handleInspectWorkflow}
            />
          )}
        </main>

        {/* Footer (Quantix / Ascora Bottom Credits) */}
        <footer style={{
          borderTop: '1px solid var(--border-subtle)',
          background: 'rgba(5, 5, 10, 0.95)',
          padding: '32px 32px',
          marginTop: 'auto',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className="font-cinzel" style={{ fontSize: '16px', fontWeight: 700, color: '#fff', letterSpacing: '0.08em' }}>
                  NEURALIS ATELIER
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  • AI Content Creator Marketplace
                </span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Quantix Architecture • Dual Persona Protocol (Brand Agency &amp; Creator Studio) • Cryptographic Seed Reproducibility.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: 'var(--text-secondary)' }}>
              <span 
                onClick={() => { sounds.click(); setShowDataModel(true); }}
                style={{ cursor: 'pointer', color: '#67e8f9' }}
              >
                Data Model
              </span>
              <span 
                onClick={() => { sounds.click(); setShowPitchDeck(true); }}
                style={{ cursor: 'pointer', color: '#d8b4fe' }}
              >
                Pitch Deck (10%)
              </span>
              <span 
                onClick={() => { sounds.click(); setActiveTab('verification'); }}
                style={{ cursor: 'pointer', color: '#34d399' }}
              >
                Verification Engine
              </span>
              <span 
                onClick={() => handleOpenAuthModal(currentUser.type)}
                style={{ cursor: 'pointer', color: '#fef08a' }}
              >
                Account Auth
              </span>
            </div>
          </div>
        </footer>
      </div>

      {/* Modals & Overlays */}
      {selectedCreator && (
        <CreatorProfileModal
          creator={selectedCreator}
          onClose={() => setSelectedCreator(null)}
          onInspectWorkflow={handleInspectWorkflow}
        />
      )}

      {inspectingWorkflowItem && (
        <WorkflowInspectorModal
          portfolioItem={inspectingWorkflowItem}
          creator={inspectingCreator}
          onClose={() => {
            setInspectingWorkflowItem(null);
            setInspectingCreator(null);
          }}
        />
      )}

      {showPitchDeck && (
        <PitchDeckModal
          onClose={() => setShowPitchDeck(false)}
        />
      )}

      {showDataModel && (
        <DataModelModal
          onClose={() => setShowDataModel(false)}
        />
      )}

      {/* Dual Persona Sign In / Register Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        currentUser={currentUser}
        onSignIn={handleSignIn}
        defaultRole={authDefaultRole}
      />

      {/* Global Evaluation Quick-Nav Floating Widget */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(10, 10, 16, 0.9)',
        border: '1px solid var(--border-light)',
        padding: '6px 12px',
        borderRadius: 'var(--radius-pill)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7)'
      }}>
        <button
          onClick={() => { sounds.openModal(); setShowPitchDeck(true); }}
          style={{
            background: 'rgba(139, 92, 246, 0.2)',
            color: '#d8b4fe',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            padding: '5px 12px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '11.5px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          <Presentation size={13} />
          <span>Pitch Deck (10%)</span>
        </button>

        <button
          onClick={() => { sounds.openModal(); setShowDataModel(true); }}
          style={{
            background: 'rgba(6, 182, 212, 0.15)',
            color: '#67e8f9',
            border: '1px solid rgba(6, 182, 212, 0.35)',
            padding: '5px 12px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '11.5px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          <Database size={13} />
          <span>Data Model Spec</span>
        </button>

        <button
          onClick={() => handleOpenAuthModal(currentUser.type)}
          style={{
            background: 'rgba(212, 175, 55, 0.15)',
            color: '#fef08a',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            padding: '5px 12px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '11.5px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          <span>Sign In / Switch</span>
        </button>
      </div>
    </div>
  );
}
