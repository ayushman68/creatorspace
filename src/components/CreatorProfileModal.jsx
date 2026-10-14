import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  Copy, 
  Download, 
  Clock, 
  Layers, 
  FileText, 
  Lock, 
  Send,
  Sliders,
  DollarSign,
  Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

export default function CreatorProfileModal({ creator, onClose, onInspectWorkflow }) {
  const [activeTab, setActiveTab] = useState('portfolio'); // 'portfolio', 'hire', 'verification'
  const [copiedPromptId, setCopiedPromptId] = useState(null);
  const [commissionForm, setCommissionForm] = useState({
    projectTitle: 'Molten Gold Luxury Campaign Spot',
    contentType: 'Cinematic Video',
    aspectRatio: '16:9 & 9:16',
    offeredBudget: creator ? creator.projectBaseRate : 5000,
    deadlineDays: 7,
    notes: 'Need 4K ProRes delivery + reproducible ComfyUI workflow files with locked seeds.'
  });
  const [commissionSent, setCommissionSent] = useState(false);

  if (!creator) return null;

  const handleCopyPrompt = (text, id) => {
    sounds.click();
    navigator.clipboard.writeText(text);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  const handleSendCommission = (e) => {
    e.preventDefault();
    sounds.success();
    setCommissionSent(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleDownloadWorkflowJson = (item) => {
    sounds.click();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(item.workflowDetails, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${item.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_workflow.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '980px', maxHeight: '92vh' }}
      >
        {/* Header Cover Bar */}
        <div style={{
          height: '140px',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(6, 182, 212, 0.3) 50%, rgba(7, 7, 11, 0.95) 100%)',
          position: 'relative',
          padding: '24px'
        }}>
          <button
            onClick={() => { sounds.click(); onClose(); }}
            className="btn-icon"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'rgba(0, 0, 0, 0.5)',
              borderColor: 'rgba(255, 255, 255, 0.2)'
            }}
          >
            <X size={18} color="#fff" />
          </button>
        </div>

        {/* Profile Card Header Info */}
        <div style={{ padding: '0 32px 24px', position: 'relative' }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginTop: '-50px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px' }}>
              <div style={{ position: 'relative' }}>
                <img 
                  src={creator.avatar} 
                  alt={creator.name}
                  style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid #0d0d14',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.6)'
                  }}
                />
                {creator.verificationSignals.isVerifiedCreator && (
                  <div style={{
                    position: 'absolute',
                    bottom: '4px',
                    right: '4px',
                    background: '#10b981',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 10px rgba(16, 185, 129, 0.8)'
                  }}>
                    <CheckCircle2 size={15} color="#000" />
                  </div>
                )}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h2 className="font-display" style={{ fontSize: '26px', color: '#fff', fontWeight: 700 }}>
                    {creator.name}
                  </h2>
                  <span className="pill-badge verified" style={{ fontSize: '11px', padding: '3px 10px' }}>
                    <ShieldCheck size={12} /> {creator.verificationSignals.verifiedBadgeText}
                  </span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>
                  {creator.handle} • {creator.title} • {creator.location}
                </p>
              </div>
            </div>

            {/* Top Right Quick Actions */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => { sounds.tab(); setActiveTab('hire'); }}
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '13.5px' }}
              >
                <Sparkles size={14} color="#8b5cf6" />
                <span>Commission Creator</span>
              </button>
            </div>
          </div>

          {/* Verification Highlights Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.025)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 18px',
            marginBottom: '24px'
          }}>
            <div>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>REPRODUCIBILITY SCORE</p>
              <p style={{ fontSize: '15px', fontWeight: 700, color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                {creator.verificationSignals.avgReproducibilityScore} (10 Seeds)
              </p>
            </div>
            <div>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>COMMERCIAL CLEARANCE</p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#67e8f9' }}>
                100% Indemnified &amp; Clean Dataset
              </p>
            </div>
            <div>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>RATES &amp; TURNAROUND</p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>
                ${creator.hourlyRate}/hr • Base ${creator.projectBaseRate} ({creator.turnaroundDays})
              </p>
            </div>
            <div>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>REVIEWS &amp; RATING</p>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Star size={13} fill="#f59e0b" /> {creator.rating} ({creator.reviewCount} Brand Reviews)
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div style={{
            display: 'flex',
            gap: '8px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '12px',
            marginBottom: '24px'
          }}>
            <button
              onClick={() => { sounds.tab(); setActiveTab('portfolio'); }}
              style={{
                background: activeTab === 'portfolio' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                color: activeTab === 'portfolio' ? '#fff' : 'var(--text-secondary)',
                border: 'none',
                padding: '8px 16px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              AI Portfolios &amp; Pipelines ({creator.portfolio.length})
            </button>
            <button
              onClick={() => { sounds.tab(); setActiveTab('verification'); }}
              style={{
                background: activeTab === 'verification' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                color: activeTab === 'verification' ? '#34d399' : 'var(--text-secondary)',
                border: 'none',
                padding: '8px 16px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Verification Audit &amp; Tools
            </button>
            <button
              onClick={() => { sounds.tab(); setActiveTab('hire'); }}
              style={{
                background: activeTab === 'hire' ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
                color: activeTab === 'hire' ? '#d8b4fe' : 'var(--text-secondary)',
                border: 'none',
                padding: '8px 16px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Commission / Contract Brief
            </button>
          </div>

          {/* TAB 1: PORTFOLIO & WORKFLOWS */}
          {activeTab === 'portfolio' && (
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {creator.portfolio.map((item) => (
                  <div 
                    key={item.id}
                    className="glass-card"
                    style={{ padding: '24px', background: 'rgba(15, 15, 24, 0.8)' }}
                  >
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: '24px',
                      alignItems: 'start'
                    }}>
                      {/* Media Image */}
                      <div>
                        <div style={{
                          borderRadius: 'var(--radius-md)',
                          overflow: 'hidden',
                          aspectRatio: '16/9',
                          position: 'relative',
                          border: '1px solid var(--border-subtle)',
                          marginBottom: '12px'
                        }}>
                          <img 
                            src={item.image} 
                            alt={item.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <span style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            background: 'rgba(7, 7, 11, 0.85)',
                            padding: '4px 10px',
                            borderRadius: 'var(--radius-pill)',
                            fontSize: '11px',
                            fontWeight: 600,
                            color: '#34d399',
                            border: '1px solid rgba(16, 185, 129, 0.3)'
                          }}>
                            {item.licenseType}
                          </span>
                        </div>

                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            onClick={() => { sounds.openModal(); onInspectWorkflow(item, creator); }}
                            className="btn-primary"
                            style={{ flex: 1, padding: '8px 14px', fontSize: '12px' }}
                          >
                            <Sliders size={13} />
                            <span>Inspect Full Node Graph</span>
                          </button>
                          <button
                            onClick={() => handleDownloadWorkflowJson(item)}
                            className="btn-secondary"
                            style={{ padding: '8px 14px', fontSize: '12px' }}
                            title="Download reproducible ComfyUI workflow JSON"
                          >
                            <Download size={13} />
                            <span>JSON</span>
                          </button>
                        </div>
                      </div>

                      {/* Technical AI Metadata (30% Scope Requirement) */}
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                          <div>
                            <span style={{ fontSize: '11px', color: '#c084fc', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>
                              {item.category} • {item.aspectRatio}
                            </span>
                            <h3 className="font-display" style={{ fontSize: '19px', color: '#fff', fontWeight: 700 }}>
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: 1.5 }}>
                          {item.description}
                        </p>

                        {/* Generative Pipeline */}
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '12px',
                          marginBottom: '12px'
                        }}>
                          <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600 }}>
                            GENERATIVE WORKFLOW PIPELINE:
                          </p>
                          <p style={{ fontSize: '12px', color: '#f4f4f7', lineHeight: 1.4 }}>
                            {item.workflowDetails.pipeline}
                          </p>
                        </div>

                        {/* Prompt used with 1-click Copy */}
                        <div style={{
                          background: 'rgba(0, 0, 0, 0.4)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '12px',
                          marginBottom: '14px',
                          position: 'relative'
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                            <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>
                              PROMPT ARCHITECTURE:
                            </span>
                            <button
                              onClick={() => handleCopyPrompt(item.workflowDetails.prompt, item.id)}
                              style={{
                                background: 'transparent',
                                border: 'none',
                                color: copiedPromptId === item.id ? '#34d399' : 'var(--text-secondary)',
                                fontSize: '11px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                cursor: 'pointer'
                              }}
                            >
                              <Copy size={11} /> {copiedPromptId === item.id ? 'Copied!' : 'Copy Prompt'}
                            </button>
                          </div>
                          <p className="font-mono" style={{ fontSize: '11.5px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                            "{item.workflowDetails.prompt}"
                          </p>
                        </div>

                        {/* Node Settings Grid */}
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, 1fr)',
                          gap: '8px',
                          fontSize: '11px',
                          color: 'var(--text-muted)'
                        }}>
                          <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '6px 8px', borderRadius: '4px' }}>
                            SEED: <span className="font-mono" style={{ color: '#fff' }}>{item.workflowDetails.seed}</span>
                          </div>
                          <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '6px 8px', borderRadius: '4px' }}>
                            CFG: <span className="font-mono" style={{ color: '#fff' }}>{item.workflowDetails.cfgScale}</span>
                          </div>
                          <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '6px 8px', borderRadius: '4px' }}>
                            STEPS: <span className="font-mono" style={{ color: '#fff' }}>{item.workflowDetails.steps}</span>
                          </div>
                          <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '6px 8px', borderRadius: '4px' }}>
                            SAMPLER: <span className="font-mono" style={{ color: '#fff' }}>{item.workflowDetails.sampler}</span>
                          </div>
                          <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '6px 8px', borderRadius: '4px' }}>
                            NODES: <span className="font-mono" style={{ color: '#fff' }}>{item.workflowDetails.comfyUiNodesCount} nodes</span>
                          </div>
                          <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '6px 8px', borderRadius: '4px' }}>
                            REPRO: <span className="font-mono" style={{ color: '#34d399' }}>{item.workflowDetails.reproducibilityScore}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: VERIFICATION & CREDENTIALS */}
          {activeTab === 'verification' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="glass-card" style={{ padding: '24px' }}>
                <h4 className="font-display" style={{ fontSize: '18px', color: '#fff', marginBottom: '14px' }}>
                  Platform Verification &amp; Trust Credentials
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <CheckCircle2 size={16} color="#10b981" />
                      <strong style={{ fontSize: '13.5px', color: '#fff' }}>ComfyUI Node Integrity</strong>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      Passed algorithmic workflow dry-run with zero external drift. Node graph hash matches registered model weights.
                    </p>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Lock size={16} color="#06b6d4" />
                      <strong style={{ fontSize: '13.5px', color: '#fff' }}>Commercial Indemnity Guarantee</strong>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      Backed by platform-verified commercial tier. All generative base models are enterprise-licensed with clean training data.
                    </p>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Cpu size={16} color="#8b5cf6" />
                      <strong style={{ fontSize: '13.5px', color: '#fff' }}>Multi-Seed Benchmark Test</strong>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      Audited across 10 randomized seed generations: 99.4% style adherence score. Zero temporal jitter on video outputs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Tools & Skills Breakdown */}
              <div className="glass-card" style={{ padding: '24px' }}>
                <h4 className="font-display" style={{ fontSize: '17px', color: '#fff', marginBottom: '14px' }}>
                  Tool Stack &amp; Model Proficiencies
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {creator.tools.map((tool, idx) => (
                    <span 
                      key={idx}
                      className="pill-badge"
                      style={{ padding: '6px 14px', fontSize: '12.5px', background: 'rgba(139, 92, 246, 0.1)', color: '#d8b4fe' }}
                    >
                      <Cpu size={13} /> {tool} (Enterprise API Verified)
                    </span>
                  ))}
                </div>

                <h4 className="font-display" style={{ fontSize: '17px', color: '#fff', marginBottom: '14px' }}>
                  Core Generative Skills
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {creator.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="pill-badge verified"
                      style={{ padding: '6px 14px', fontSize: '12.5px' }}
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: COMMISSION / DIRECT HIRE FORM */}
          {activeTab === 'hire' && (
            <div className="glass-card" style={{ padding: '28px' }}>
              {commissionSent ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    border: '1px solid rgba(16, 185, 129, 0.4)'
                  }}>
                    <CheckCircle2 size={32} color="#10b981" />
                  </div>
                  <h3 className="font-display" style={{ fontSize: '22px', color: '#fff', marginBottom: '8px' }}>
                    Commission Proposal Dispatched!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '480px', margin: '0 auto 24px' }}>
                    Your campaign requirements, commercial indemnity terms, and budget offer have been transmitted to {creator.name}.
                    Average response time: <strong>under 2 hours</strong>.
                  </p>
                  <button
                    onClick={() => { sounds.click(); setCommissionSent(false); setActiveTab('portfolio'); }}
                    className="btn-primary"
                  >
                    Back to Portfolio
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendCommission}>
                  <div style={{ marginBottom: '20px' }}>
                    <h4 className="font-display" style={{ fontSize: '20px', color: '#fff', marginBottom: '6px' }}>
                      Commission {creator.name}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                      Commission directly into quality-gated milestone escrow with guaranteed reproducible seed deliverables.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                        CAMPAIGN TITLE
                      </label>
                      <input 
                        type="text"
                        value={commissionForm.projectTitle}
                        onChange={(e) => setCommissionForm({ ...commissionForm, projectTitle: e.target.value })}
                        required
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
                        OFFERED BUDGET (USD)
                      </label>
                      <input 
                        type="number"
                        value={commissionForm.offeredBudget}
                        onChange={(e) => setCommissionForm({ ...commissionForm, offeredBudget: Number(e.target.value) })}
                        required
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
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                        ASPECT RATIO / FORMAT
                      </label>
                      <select
                        value={commissionForm.aspectRatio}
                        onChange={(e) => setCommissionForm({ ...commissionForm, aspectRatio: e.target.value })}
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
                      >
                        <option value="16:9 & 9:16" style={{ background: '#0d0d14' }}>16:9 Landscape + 9:16 Vertical Cut</option>
                        <option value="16:9 Cinematic (3840x2160)" style={{ background: '#0d0d14' }}>16:9 Cinematic (3840x2160)</option>
                        <option value="9:16 Social (1080x1920)" style={{ background: '#0d0d14' }}>9:16 Social (1080x1920)</option>
                        <option value="2.39:1 Anamorphic" style={{ background: '#0d0d14' }}>2.39:1 Anamorphic Ultra-Wide</option>
                        <option value="1:1 Square" style={{ background: '#0d0d14' }}>1:1 Square (2160x2160)</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                        TARGET TURNAROUND (DAYS)
                      </label>
                      <input 
                        type="number"
                        value={commissionForm.deadlineDays}
                        onChange={(e) => setCommissionForm({ ...commissionForm, deadlineDays: Number(e.target.value) })}
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
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                      CAMPAIGN OBJECTIVE &amp; SEED REQUIREMENTS
                    </label>
                    <textarea 
                      rows={3}
                      value={commissionForm.notes}
                      onChange={(e) => setCommissionForm({ ...commissionForm, notes: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#fff',
                        fontSize: '13.5px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  {/* Commercial Checklist Badges */}
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.05)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '24px'
                  }}>
                    <p style={{ fontSize: '12px', color: '#34d399', fontWeight: 600, marginBottom: '6px' }}>
                      INCLUDED COMMERCIAL PROTECTION:
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                      <span>✓ Full Commercial Copyright Transfer (Work-for-hire)</span>
                      <span>✓ Platform Indemnity against AI model dataset disputes</span>
                      <span>✓ Delivery of raw reproducible generation seeds &amp; ComfyUI node graphs</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setActiveTab('portfolio')}
                      className="btn-secondary"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ padding: '12px 26px', fontSize: '14px' }}
                    >
                      <Send size={14} />
                      <span>Dispatch Commission Proposal</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
