import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Play, 
  Zap,
  Sliders,
  FileCheck,
  Workflow
} from 'lucide-react';
import { sounds } from '../utils/audio';

export default function HeroSection({ onExploreCreators, onStartBriefBuilder, onOpenVerification, onOpenInspector }) {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 'pipeline',
      name: 'Generative Pipeline',
      icon: Cpu,
      title: 'Reproducible Node Workflows',
      desc: 'Verify exact ComfyUI node graphs, model checkpoints, ControlNet rigs, and locked seeds before commissioning.'
    },
    {
      id: 'brief',
      name: 'AI Brief Synthesis',
      icon: Sparkles,
      title: 'Turn Ideas into Structured Briefs',
      desc: 'Auto-generate recommended model stacks, exact aspect ratios (9:16 / 16:9), and commercial compliance checklists.'
    },
    {
      id: 'indemnity',
      name: 'Commercial Indemnity',
      icon: ShieldCheck,
      title: '100% Copyright Clearance',
      desc: 'Contractually certified clean datasets, synthetic actor likeness releases, and enterprise work-for-hire transfers.'
    },
    {
      id: 'escrow',
      name: 'Milestone Delivery',
      icon: Layers,
      title: 'Quality-Gated Escrow',
      desc: 'Funds released only after prompt reproducibility benchmarks and 4K ProRes master deliveries pass validation.'
    }
  ];

  return (
    <section style={{
      paddingTop: '130px',
      paddingBottom: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Editorial Eyebrow */}
        <div className="editorial-eyebrow">
          <span>ATELIER FOR GENERATIVE DIRECTORS &amp; CINEMATIC AI • EST. 2026</span>
        </div>

        {/* Top Announcement Tag */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
          <div 
            onClick={() => { sounds.hover(); onOpenVerification(); }}
            className="pill-badge verified" 
            style={{ cursor: 'pointer', padding: '6px 18px', fontSize: '12.5px' }}
          >
            <span className="status-dot" />
            <span style={{ letterSpacing: '0.04em' }}>Ultra-Luxury AI Production Protocol</span>
            <span style={{ color: 'var(--text-muted)' }}>|</span>
            <span style={{ color: '#fff', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              4-Layer Verification Engine <ArrowRight size={12} />
            </span>
          </div>
        </div>

        {/* Main Hero Headline (Editorial Bold Serif Contrast) */}
        <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto' }}>
          <h1 className="editorial-hero-title">
            Where Luxury Brands Commission <br />
            <span className="editorial-hero-accent">Proven AI Visionaries.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            maxWidth: '720px',
            margin: '0 auto 36px',
            fontWeight: 400
          }}>
            The premier editorial marketplace connecting global maisons, automotive innovators, and creative agencies with vetted AI filmmakers and prompt architects. Featuring verified ComfyUI node graphs, locked seeds, and 100% commercial copyright indemnity.
          </p>

          {/* Action CTAs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '64px'
          }}>
            <button 
              onClick={() => { sounds.click(); onExploreCreators(); }}
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '15px' }}
            >
              <span>Discover Verified Creators</span>
              <ArrowRight size={16} />
            </button>

            <button 
              onClick={() => { sounds.click(); onStartBriefBuilder(); }}
              className="btn-secondary"
              style={{ padding: '14px 26px', fontSize: '15px', color: '#d8b4fe', borderColor: 'rgba(139, 92, 246, 0.35)' }}
            >
              <Sparkles size={16} color="#c084fc" />
              <span>Generate Brief with AI</span>
            </button>
          </div>
        </div>

        {/* Generative Production Stream Diagram (Ascora-inspired flow) */}
        <div className="glass-card" style={{
          padding: '36px',
          background: 'linear-gradient(180deg, rgba(17, 17, 28, 0.85) 0%, rgba(9, 9, 15, 0.95) 100%)',
          border: '1px solid var(--border-light)',
          position: 'relative',
          marginBottom: '50px'
        }}>
          {/* Header Row of the Stream */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '30px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '20px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className="pill-badge ai-sparkle" style={{ fontSize: '11px', padding: '3px 10px' }}>
                  <Workflow size={12} /> PROOF-OF-WORKFLOW STREAM
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Verified Generative Pipeline #4829-FLUX-RUNWAY
                </span>
              </div>
              <h3 className="font-display" style={{ fontSize: '20px', color: '#fff' }}>
                How NEURALIS Verifies Authentic AI Production
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button 
                onClick={() => { sounds.click(); onOpenVerification(); }}
                className="btn-secondary" 
                style={{ fontSize: '12px', padding: '6px 14px' }}
              >
                <ShieldCheck size={14} color="#10b981" />
                <span>Verify Node Signatures</span>
              </button>
            </div>
          </div>

          {/* Flow Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'center'
          }}>
            {/* Left 5 Data Stream Pipelines */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Prompt Architecture & Seed Locking', model: 'Multi-modal prompt + negative weights', color: '#8b5cf6' },
                { label: 'Base Generative Models', model: 'Flux.1 Pro / Runway Gen-3 / Kling 1.5', color: '#06b6d4' },
                { label: 'Custom Style & Character LoRAs', model: '99.4% Multi-angle consistency rig', color: '#ec4899' },
                { label: 'ComfyUI ControlNet & Motion Vectors', model: 'Depth pass + camera yaw/zoom control', color: '#f59e0b' },
                { label: '8K Latent Upscale & 60fps Interpolation', model: 'Topaz Video AI + DaVinci ACEScg grade', color: '#10b981' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all 0.2s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={() => sounds.hover()}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: item.color,
                      boxShadow: `0 0 10px ${item.color}`
                    }} />
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>{item.label}</p>
                      <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.model}</p>
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', color: item.color, fontFamily: 'var(--font-mono)' }}>
                    PASSED ✓
                  </span>
                </div>
              ))}
            </div>

            {/* Right Side: The Live Verified Commercial Deliverable Card */}
            <div style={{
              background: 'rgba(10, 10, 16, 0.85)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              padding: '20px',
              boxShadow: '0 20px 50px -10px rgba(139, 92, 246, 0.2)',
              position: 'relative'
            }}>
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                aspectRatio: '16/9',
                marginBottom: '16px'
              }}>
                <img 
                  src="/portfolio/tokyo_hypercar.jpg" 
                  alt="Hypercar verified generation" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  display: 'flex',
                  gap: '6px'
                }}>
                  <span className="pill-badge verified" style={{ fontSize: '11px', background: 'rgba(7,7,11,0.85)' }}>
                    <ShieldCheck size={12} color="#10b981" /> VERIFIED RUNWAY GEN-3
                  </span>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: 'rgba(7, 7, 11, 0.85)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: '#67e8f9',
                  border: '1px solid rgba(6, 182, 212, 0.3)'
                }}>
                  SEED: 492019382
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div>
                    <h4 className="font-display" style={{ fontSize: '16px', color: '#fff' }}>
                      Neo-Tokyo Hypercar Night Pursuit
                    </h4>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      Creator: Kenji Takahashi (@kenji_cinematics)
                    </p>
                  </div>
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#34d399',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    99.4% MATCH
                  </span>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '12px',
                  marginBottom: '14px',
                  border: '1px solid var(--border-subtle)'
                }}>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '4px', fontSize: '11px' }}>
                    CRYPTOGRAPHIC NODE SIGNATURE:
                  </p>
                  <p className="font-mono" style={{ color: '#d8b4fe', fontSize: '11px', wordBreak: 'break-all' }}>
                    sha256:7f8a9c2b4e5d6a1f89c03b8e721a9d0c34ef
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    onClick={() => { sounds.openModal(); onOpenInspector && onOpenInspector(); }}
                    className="btn-primary" 
                    style={{ flex: 1, padding: '8px 12px', fontSize: '12px' }}
                  >
                    <Sliders size={13} />
                    <span>Inspect AI Node Graph</span>
                  </button>
                  <button 
                    onClick={() => { sounds.click(); onExploreCreators(); }}
                    className="btn-secondary" 
                    style={{ padding: '8px 12px', fontSize: '12px' }}
                  >
                    <span>View Portfolio</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Feature Tour Tabs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            marginTop: '32px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            {stages.map((stg, i) => {
              const IconComp = stg.icon;
              const isSelected = activeStage === i;
              return (
                <div 
                  key={stg.id}
                  onClick={() => {
                    sounds.tab();
                    setActiveStage(i);
                  }}
                  style={{
                    padding: '14px',
                    borderRadius: 'var(--radius-md)',
                    background: isSelected ? 'rgba(139, 92, 246, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${isSelected ? 'rgba(139, 92, 246, 0.35)' : 'var(--border-subtle)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <IconComp size={15} color={isSelected ? '#c084fc' : 'var(--text-muted)'} />
                    <span style={{ fontSize: '13px', fontWeight: 600, color: isSelected ? '#fff' : 'var(--text-secondary)' }}>
                      {stg.name}
                    </span>
                  </div>
                  <p style={{ fontSize: '11.5px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {stg.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Stat Metric Banners */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px'
        }}>
          {[
            { metric: '2,450+', label: 'Verified AI Creators', sub: 'Filmmakers, 3D animators, prompt architects' },
            { metric: '99.4%', label: 'Seed Reproducibility', sub: 'Tested across 10 randomized node seeds' },
            { metric: '100%', label: 'Commercial Indemnity', sub: 'Ethically trained model datasets & NDA' },
            { metric: '$4.8M+', label: 'Commissioned Campaigns', sub: 'In escrow with milestone release' }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{ padding: '22px 24px' }}
            >
              <h3 className="font-display" style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '4px',
                letterSpacing: '-0.03em'
              }}>
                {stat.metric}
              </h3>
              <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>
                {stat.label}
              </p>
              <p style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
