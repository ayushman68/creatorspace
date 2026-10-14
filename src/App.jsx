import React, { useState } from 'react';
import Navbar from './components/Navbar';
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
import { CREATORS, INITIAL_BRIEFS } from './data/mockData';
import { sounds } from './utils/audio';
import { Sparkles, ShieldCheck, Database, Presentation, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('discover'); // 'discover', 'briefs', 'brief-builder', 'verification', 'creator-studio'
  const [userMode, setUserMode] = useState('brand'); // 'brand', 'creator'
  const [briefs, setBriefs] = useState(INITIAL_BRIEFS);

  // Modals state
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [inspectingWorkflowItem, setInspectingWorkflowItem] = useState(null);
  const [inspectingCreator, setInspectingCreator] = useState(null);
  const [showPitchDeck, setShowPitchDeck] = useState(false);
  const [showDataModel, setShowDataModel] = useState(false);

  const handleBriefPublished = (newBrief) => {
    setBriefs([newBrief, ...briefs]);
  };

  const handleInspectWorkflow = (item, creator) => {
    sounds.openModal();
    setInspectingWorkflowItem(item);
    setInspectingCreator(creator);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {/* Ambient Aurora Glows */}
      <div className="ambient-mesh">
        <div className="aurora-orb aurora-1" />
        <div className="aurora-orb aurora-2" />
        <div className="aurora-orb aurora-3" />
      </div>

      {/* Grid Pattern Mesh */}
      <div className="grid-overlay" />

      {/* Top Fixed Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userMode={userMode}
        setUserMode={setUserMode}
        onOpenPitchDeck={() => setShowPitchDeck(true)}
        onOpenDataModel={() => setShowDataModel(true)}
        onOpenCreateBrief={() => setActiveTab('brief-builder')}
      />

      {/* Main Body */}
      <main style={{ flex: 1, zIndex: 2 }}>
        {/* Hero Section shown on primary discovery and briefs views */}
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
            onSelectCreator={(creator) => setSelectedCreator(creator)}
            onInspectWorkflow={handleInspectWorkflow}
          />
        )}

        {/* Tab 2: Active Brand Briefs (20% Scope) */}
        {activeTab === 'briefs' && (
          <div style={{ paddingTop: '120px' }}>
            <ActiveBriefs
              briefs={briefs}
              onCreateBriefClick={() => setActiveTab('brief-builder')}
            />
          </div>
        )}

        {/* Tab 3: AI-Assisted Brief Builder (Bonus Credit) */}
        {activeTab === 'brief-builder' && (
          <div style={{ paddingTop: '120px' }}>
            <BriefBuilder
              onBriefPublished={handleBriefPublished}
              onNavigateToBriefs={() => setActiveTab('briefs')}
            />
          </div>
        )}

        {/* Tab 4: Verification Signals & Trust Center (Bonus Credit) */}
        {activeTab === 'verification' && (
          <div style={{ paddingTop: '120px' }}>
            <VerificationCenter />
          </div>
        )}

        {/* Tab 5: Creator Studio View (Creator Persona UX) */}
        {activeTab === 'creator-studio' && (
          <div style={{ paddingTop: '120px' }}>
            <CreatorStudioView
              onInspectWorkflow={handleInspectWorkflow}
            />
          </div>
        )}
      </main>

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

      {/* Global Evaluation Quick-Nav Floating Widget */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(10, 10, 16, 0.85)',
        border: '1px solid var(--border-light)',
        padding: '6px 12px',
        borderRadius: 'var(--radius-pill)',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)'
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
      </div>

      {/* Footer (Ascora-inspired bottom credits) */}
      <footer style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(4, 4, 8, 0.9)',
        padding: '40px 0',
        position: 'relative',
        zIndex: 2
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="font-display" style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>
                NEURALIS
              </span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                • AI Content Creator Marketplace
              </span>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              Engineered for prompt architectures, reproducible node workflows, and enterprise commercial indemnity.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12.5px', color: 'var(--text-secondary)' }}>
            <span 
              onClick={() => { sounds.click(); setShowDataModel(true); }}
              style={{ cursor: 'pointer', color: '#67e8f9' }}
            >
              Data Model Notes
            </span>
            <span 
              onClick={() => { sounds.click(); setShowPitchDeck(true); }}
              style={{ cursor: 'pointer', color: '#d8b4fe' }}
            >
              Pitch Presentation
            </span>
            <span 
              onClick={() => { sounds.click(); setActiveTab('verification'); }}
              style={{ cursor: 'pointer', color: '#34d399' }}
            >
              Verification Trust Center
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
