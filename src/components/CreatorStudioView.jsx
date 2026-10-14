import React, { useState } from 'react';
import { 
  Layers, 
  Upload, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Plus, 
  DollarSign, 
  Clock, 
  FileCheck,
  Send,
  Eye,
  Sliders
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

export default function CreatorStudioView({ onInspectWorkflow }) {
  const [studioTab, setStudioTab] = useState('portfolio'); // 'portfolio', 'add-item', 'verification', 'invites'
  const [newTitle, setNewTitle] = useState('');
  const [newPrompt, setNewPrompt] = useState('');
  const [newModel, setNewModel] = useState('Flux.1 Pro');
  const [newSeed, setNewSeed] = useState('749201842');
  const [newCategory, setNewCategory] = useState('Cinematic Video');
  const [addedItems, setAddedItems] = useState([]);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleUploadItem = (e) => {
    e.preventDefault();
    sounds.success();

    const newItem = {
      id: 'custom-' + Date.now(),
      title: newTitle || 'Cybernetic Vision Study #09',
      category: newCategory,
      image: '/portfolio/cyberpunk_fashion.jpg',
      aspectRatio: '16:9 & 9:16',
      duration: '0:30 4K Master',
      commercialCleared: true,
      licenseType: 'Full Commercial Buyout + Indemnity',
      workflowDetails: {
        pipeline: `${newModel} -> ControlNet -> Latent Upscale 4x`,
        prompt: newPrompt || 'High fashion cyborg model with glowing holographic textiles',
        seed: Number(newSeed),
        cfgScale: 4.5,
        steps: 36,
        sampler: 'Euler A',
        reproducibilityScore: 99.2,
        comfyUiNodesCount: 22,
        workflowHash: 'sha256:d8a9c2b4e5f6a1b2c3d4e5f6a7b8c9d0'
      }
    };

    setAddedItems([newItem, ...addedItems]);
    setSubmittedSuccess(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmittedSuccess(false);
      setStudioTab('portfolio');
      setNewTitle('');
      setNewPrompt('');
    }, 1500);
  };

  return (
    <section id="creator-studio-section" style={{ paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '32px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="pill-badge" style={{ fontSize: '11px', background: 'rgba(6, 182, 212, 0.1)', color: '#67e8f9' }}>
                <Layers size={12} /> CREATOR OPERATING STUDIO
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Director Portal • Elena Rostova (@elena_neural)
              </span>
            </div>
            <h2 className="font-display" style={{ fontSize: '32px', color: '#fff', letterSpacing: '-0.03em' }}>
              Creator Studio &amp; Workflow Publisher
            </h2>
          </div>

          <button 
            onClick={() => { sounds.tab(); setStudioTab('add-item'); }}
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '13px' }}
          >
            <Plus size={14} />
            <span>Publish New AI Generation</span>
          </button>
        </div>

        {/* Studio Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '12px',
          marginBottom: '28px'
        }}>
          <button
            onClick={() => { sounds.tab(); setStudioTab('portfolio'); }}
            style={{
              background: studioTab === 'portfolio' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              color: studioTab === 'portfolio' ? '#fff' : 'var(--text-secondary)',
              border: 'none',
              padding: '8px 18px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            My Published Portfolio ({2 + addedItems.length})
          </button>

          <button
            onClick={() => { sounds.tab(); setStudioTab('add-item'); }}
            style={{
              background: studioTab === 'add-item' ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
              color: studioTab === 'add-item' ? '#d8b4fe' : 'var(--text-secondary)',
              border: 'none',
              padding: '8px 18px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            + Publish Workflow &amp; Seed
          </button>

          <button
            onClick={() => { sounds.tab(); setStudioTab('verification'); }}
            style={{
              background: studioTab === 'verification' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
              color: studioTab === 'verification' ? '#34d399' : 'var(--text-secondary)',
              border: 'none',
              padding: '8px 18px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Verification Status (99.4%)
          </button>

          <button
            onClick={() => { sounds.tab(); setStudioTab('invites'); }}
            style={{
              background: studioTab === 'invites' ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
              color: studioTab === 'invites' ? '#67e8f9' : 'var(--text-secondary)',
              border: 'none',
              padding: '8px 18px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '13.5px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Brand Invitations (3 Pending)
          </button>
        </div>

        {/* Tab 1: Published Items */}
        {studioTab === 'portfolio' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {/* Added custom items first */}
            {addedItems.map((item) => (
              <div key={item.id} className="glass-card" style={{ padding: '20px' }}>
                <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', aspectRatio: '16/9', marginBottom: '14px', position: 'relative' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(16,185,129,0.9)', color: '#000', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: 'var(--radius-pill)' }}>
                    NEWLY VERIFIED
                  </span>
                </div>
                <h4 className="font-display" style={{ fontSize: '17px', color: '#fff', marginBottom: '6px' }}>{item.title}</h4>
                <p className="font-mono" style={{ fontSize: '11px', color: '#c084fc', marginBottom: '12px' }}>SEED: {item.workflowDetails.seed}</p>
                <button onClick={() => onInspectWorkflow(item, { name: 'Elena Rostova' })} className="btn-secondary" style={{ width: '100%', fontSize: '12px' }}>
                  <Sliders size={13} /> Inspect Pipeline
                </button>
              </div>
            ))}

            {/* Standard preloaded items */}
            <div className="glass-card" style={{ padding: '20px' }}>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', aspectRatio: '16/9', marginBottom: '14px' }}>
                <img src="/portfolio/luxury_perfume.jpg" alt="Aurea Parfum" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 className="font-display" style={{ fontSize: '17px', color: '#fff', marginBottom: '6px' }}>
                AUREA: Molten Gold &amp; Botanical Parfum
              </h4>
              <p className="font-mono" style={{ fontSize: '11px', color: '#34d399', marginBottom: '12px' }}>
                SEED: 884719203 • REPRODUCIBILITY: 99.6%
              </p>
              <button 
                onClick={() => onInspectWorkflow({
                  title: 'AUREA: Molten Gold & Botanical Parfum',
                  image: '/portfolio/luxury_perfume.jpg',
                  aspectRatio: '16:9 & 9:16',
                  workflowDetails: {
                    pipeline: 'Flux.1 Dev Latent -> ControlNet Depth (Custom 3D Mesh) -> 4x Latent Upscale',
                    prompt: 'High-end luxury perfume commercial still, minimalist obsidian and glass perfume bottle floating in swirling viscous molten liquid gold and dark emerald water, delicate botanical orchids',
                    seed: 884719203,
                    cfgScale: 4.2,
                    steps: 38,
                    sampler: 'Euler A / Karras',
                    reproducibilityScore: 99.6,
                    comfyUiNodesCount: 24,
                    workflowHash: 'sha256:7f8a9c2b4e5d6a1f89c03b8e721a9d'
                  }
                }, { name: 'Elena Rostova' })}
                className="btn-secondary" 
                style={{ width: '100%', fontSize: '12px' }}
              >
                <Sliders size={13} /> Inspect Pipeline
              </button>
            </div>

            <div className="glass-card" style={{ padding: '20px' }}>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', aspectRatio: '16/9', marginBottom: '14px' }}>
                <img src="/portfolio/cyberpunk_fashion.jpg" alt="Cyber-Silk Lookbook" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 className="font-display" style={{ fontSize: '17px', color: '#fff', marginBottom: '6px' }}>
                Cyber-Silk Vogue Editorial Lookbook
              </h4>
              <p className="font-mono" style={{ fontSize: '11px', color: '#34d399', marginBottom: '12px' }}>
                SEED: 194829144 • REPRODUCIBILITY: 98.9%
              </p>
              <button 
                onClick={() => onInspectWorkflow({
                  title: 'Cyber-Silk Vogue Editorial Lookbook',
                  image: '/portfolio/cyberpunk_fashion.jpg',
                  aspectRatio: '16:9 & 4:5',
                  workflowDetails: {
                    pipeline: 'Midjourney v6.1 Raw Style -> Reactor Face Swap / Character Anchor -> Custom Silk LoRA pass',
                    prompt: 'Vogue editorial fashion photography, high fashion female cyborg model wearing flowing iridescent holographic silk coat',
                    seed: 194829144,
                    cfgScale: 5.0,
                    steps: 40,
                    sampler: 'DPM++ 2M SDE',
                    reproducibilityScore: 98.9,
                    comfyUiNodesCount: 18,
                    workflowHash: 'sha256:1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c'
                  }
                }, { name: 'Elena Rostova' })}
                className="btn-secondary" 
                style={{ width: '100%', fontSize: '12px' }}
              >
                <Sliders size={13} /> Inspect Pipeline
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Publish New AI Generation Form */}
        {studioTab === 'add-item' && (
          <div className="glass-card" style={{ padding: '32px', maxWidth: '780px', margin: '0 auto' }}>
            <h3 className="font-display" style={{ fontSize: '22px', color: '#fff', marginBottom: '6px' }}>
              Publish AI Generation to Marketplace
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Upload your generative asset along with authentic prompt parameters and ComfyUI workflow JSON for algorithmic verification.
            </p>

            <form onSubmit={handleUploadItem}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                    PROJECT / PIECE TITLE
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Luminary Neon Sneaker Campaign"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      fontSize: '13.5px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                    BASE GENERATIVE MODEL
                  </label>
                  <select
                    value={newModel}
                    onChange={(e) => setNewModel(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      fontSize: '13.5px',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Flux.1 Pro" style={{ background: '#0d0d14' }}>Flux.1 Pro (BFL)</option>
                    <option value="Runway Gen-3 Alpha" style={{ background: '#0d0d14' }}>Runway Gen-3 Alpha</option>
                    <option value="Kling AI 1.5" style={{ background: '#0d0d14' }}>Kling AI 1.5</option>
                    <option value="Midjourney v6.1" style={{ background: '#0d0d14' }}>Midjourney v6.1</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                    LOCKED GENERATION SEED
                  </label>
                  <input
                    type="text"
                    required
                    value={newSeed}
                    onChange={(e) => setNewSeed(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#67e8f9',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13.5px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                    CONTENT CATEGORY
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#fff',
                      fontSize: '13.5px',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Cinematic Video" style={{ background: '#0d0d14' }}>Cinematic Video</option>
                    <option value="3D Product Render" style={{ background: '#0d0d14' }}>3D Product Render</option>
                    <option value="High Fashion Lookbook" style={{ background: '#0d0d14' }}>High Fashion Lookbook</option>
                    <option value="Stylized Character Animation" style={{ background: '#0d0d14' }}>Stylized Character Animation</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                  AUTHENTIC POSITIVE PROMPT
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Enter the complete prompt string with weights and style modifiers..."
                  value={newPrompt}
                  onChange={(e) => setNewPrompt(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#fff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12.5px',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button type="button" onClick={() => setStudioTab('portfolio')} className="btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn-primary" style={{ padding: '12px 26px' }}>
                  <Upload size={14} />
                  <span>Verify &amp; Publish Generation</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 3: Verification Audit */}
        {studioTab === 'verification' && (
          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <ShieldCheck size={28} color="#10b981" />
              <div>
                <h3 className="font-display" style={{ fontSize: '20px', color: '#fff' }}>
                  Creator Verification Tier: Master AI Director
                </h3>
                <p style={{ fontSize: '13px', color: '#34d399' }}>
                  All 4 Verification Layers Active &amp; Verified
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>BENCHMARK ADHERENCE</p>
                <p style={{ fontSize: '22px', fontWeight: 700, color: '#34d399', fontFamily: 'var(--font-mono)' }}>99.4%</p>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Tested across 10 random seeds without visual collapse.</p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>COMMERCIAL INDEMNITY</p>
                <p style={{ fontSize: '22px', fontWeight: 700, color: '#67e8f9', fontFamily: 'var(--font-mono)' }}>PASSED</p>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Enterprise commercial insurance policy active.</p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>ON-TIME DELIVERY</p>
                <p style={{ fontSize: '22px', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-mono)' }}>100%</p>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>57 completed brand campaigns with zero disputes.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Brand Invitations */}
        {studioTab === 'invites' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { brand: 'Balenciaga AI Lab', title: 'Cyber-Couture Paris Fashion Week Teaser', budget: '$14,000', deadline: '5 days', format: '16:9 + 9:16' },
              { brand: 'Porsche Design', title: 'Mission-E Aerodynamic Particle Simulation', budget: '$18,500', deadline: '10 days', format: '2.39:1 Anamorphic' },
              { brand: 'Vogue Singapore', title: 'Holographic Silk Cover Feature Story', budget: '$9,200', deadline: '7 days', format: '4:5 Editorial Print' }
            ].map((inv, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#c084fc', fontWeight: 600 }}>{inv.brand}</span>
                  <h4 className="font-display" style={{ fontSize: '16px', color: '#fff' }}>{inv.title}</h4>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Budget: <strong style={{ color: '#34d399' }}>{inv.budget}</strong> • Format: {inv.format} • Turnaround: {inv.deadline}</p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => sounds.click()} className="btn-secondary" style={{ fontSize: '12px' }}>Decline</button>
                  <button onClick={() => { sounds.success(); confetti(); }} className="btn-primary" style={{ fontSize: '12px' }}>Accept &amp; Open Escrow</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
