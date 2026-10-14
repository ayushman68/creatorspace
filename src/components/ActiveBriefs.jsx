import React, { useState } from 'react';
import { 
  Briefcase, 
  DollarSign, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Film, 
  X, 
  Send,
  Layers,
  Sparkles,
  Maximize2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

export default function ActiveBriefs({ briefs, onCreateBriefClick }) {
  const [selectedBrief, setSelectedBrief] = useState(null);
  const [proposalSubmitted, setProposalSubmitted] = useState(false);
  const [proposalForm, setProposalForm] = useState({
    proposedRate: '$8,500',
    turnaroundDays: '7 days',
    workflowPitch: 'We will use custom LoRA character consistency pass with Flux.1 Pro + Runway Gen-3 camera rigging, delivery in ProRes 422HQ + reproducible ComfyUI workflow JSON.'
  });

  const handleOpenBrief = (brief) => {
    sounds.openModal();
    setSelectedBrief(brief);
    setProposalSubmitted(false);
  };

  const handleCloseModal = () => {
    sounds.click();
    setSelectedBrief(null);
  };

  const handleSubmitProposal = (e) => {
    e.preventDefault();
    sounds.success();
    setProposalSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="active-briefs-section" style={{ paddingBottom: '100px' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '36px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="pill-badge verified" style={{ fontSize: '11px' }}>
                <Briefcase size={12} /> BRAND &amp; AGENCY COMMISSION EXCHANGE
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {briefs.length} Commercial Briefs Available
              </span>
            </div>
            <h2 className="font-display" style={{ fontSize: '32px', color: '#fff', letterSpacing: '-0.03em' }}>
              Active Brand Briefs
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
              Commercial briefs published by brands and agencies seeking vetted AI generative directors.
            </p>
          </div>

          <button 
            onClick={() => { sounds.click(); onCreateBriefClick(); }}
            className="btn-primary"
            style={{ padding: '12px 24px', fontSize: '13.5px' }}
          >
            <Sparkles size={15} color="#8b5cf6" />
            <span>Publish New Brief</span>
          </button>
        </div>

        {/* Briefs Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '24px'
        }}>
          {briefs.map((brief) => (
            <div 
              key={brief.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={() => sounds.hover()}
            >
              <div>
                {/* Brand & Status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px'
                    }}>
                      {brief.brandLogo || '🏢'}
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>
                      {brief.brandName}
                    </span>
                  </div>

                  <span className="pill-badge" style={{
                    fontSize: '11px',
                    padding: '3px 8px',
                    color: brief.status.includes('Accepting') ? '#34d399' : '#f59e0b',
                    borderColor: brief.status.includes('Accepting') ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'
                  }}>
                    {brief.status}
                  </span>
                </div>

                {/* Brief Title */}
                <h3 className="font-display" style={{ fontSize: '18px', color: '#fff', fontWeight: 600, marginBottom: '10px', lineHeight: 1.3 }}>
                  {brief.title}
                </h3>

                {/* Objective Teaser */}
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  marginBottom: '16px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {brief.objective}
                </p>

                {/* Content Type & Formats */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  <span className="pill-badge" style={{ fontSize: '11px', background: 'rgba(6, 182, 212, 0.1)', color: '#67e8f9' }}>
                    <Film size={11} /> {brief.contentType}
                  </span>
                  <span className="pill-badge" style={{ fontSize: '11px' }}>
                    <Maximize2 size={11} /> {brief.format || '16:9 & 9:16'}
                  </span>
                </div>

                {/* Recommended Model Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '18px' }}>
                  {(brief.modelStackRecommended || []).slice(0, 3).map((tool, idx) => (
                    <span 
                      key={idx}
                      style={{
                        fontSize: '11px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                  {(brief.modelStackRecommended || []).length > 3 && (
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', alignSelf: 'center' }}>
                      +{(brief.modelStackRecommended.length - 3)} more
                    </span>
                  )}
                </div>
              </div>

              {/* Footer: Budget & Action */}
              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}>
                <div>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#34d399', fontFamily: 'var(--font-display)' }}>
                    {brief.budget}
                  </span>
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={11} /> {brief.deadline}
                  </p>
                </div>

                <button 
                  onClick={() => handleOpenBrief(brief)}
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '12.5px' }}
                >
                  <span>Review &amp; Apply</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Brief Drawer / Modal */}
        {selectedBrief && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '840px', padding: '32px' }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span className="pill-badge" style={{ fontSize: '11px' }}>
                      {selectedBrief.brandName}
                    </span>
                    <span className="pill-badge verified" style={{ fontSize: '11px' }}>
                      {selectedBrief.status}
                    </span>
                  </div>
                  <h3 className="font-display" style={{ fontSize: '24px', color: '#fff', fontWeight: 700 }}>
                    {selectedBrief.title}
                  </h3>
                </div>

                <button onClick={handleCloseModal} className="btn-icon">
                  <X size={18} color="#fff" />
                </button>
              </div>

              {/* Budget, Deadline, Proposals count */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '14px 18px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '24px',
                border: '1px solid var(--border-subtle)'
              }}>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>BUDGET ESCROW</span>
                  <p style={{ fontSize: '16px', fontWeight: 700, color: '#34d399', fontFamily: 'var(--font-display)' }}>
                    {selectedBrief.budget}
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>TIMELINE</span>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>
                    {selectedBrief.deadline}
                  </p>
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>FORMAT &amp; ASPECT RATIO</span>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: '#67e8f9' }}>
                    {selectedBrief.format}
                  </p>
                </div>
              </div>

              {/* Objective */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 600 }}>
                  CAMPAIGN SPECIFICATIONS
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  {selectedBrief.objective}
                </p>
              </div>

              {/* Commercial Requirements Checklist */}
              <div style={{
                background: 'rgba(16, 185, 129, 0.04)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: 'var(--radius-md)',
                padding: '18px',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <ShieldCheck size={16} color="#10b981" />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#34d399' }}>
                    COMMERCIAL CLEARANCE &amp; REPRODUCIBILITY TERMS
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {(selectedBrief.commercialRequirements || []).map((req, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={13} color="#10b981" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Proposal Section */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
                {proposalSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px',
                      border: '1px solid rgba(16, 185, 129, 0.4)'
                    }}>
                      <CheckCircle2 size={24} color="#10b981" />
                    </div>
                    <h4 className="font-display" style={{ fontSize: '18px', color: '#fff', marginBottom: '4px' }}>
                      Application Dispatched to {selectedBrief.brandName}!
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '16px' }}>
                      The agency review board has received your pitch and portfolio verification token.
                    </p>
                    <button onClick={handleCloseModal} className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitProposal}>
                    <h4 className="font-display" style={{ fontSize: '17px', color: '#fff', marginBottom: '12px' }}>
                      Submit Proposal for this Brief
                    </h4>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '11.5px', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600 }}>
                          YOUR PROPOSED BUDGET
                        </label>
                        <input 
                          type="text"
                          value={proposalForm.proposedRate}
                          onChange={(e) => setProposalForm({ ...proposalForm, proposedRate: e.target.value })}
                          required
                          style={{
                            width: '100%',
                            padding: '9px 12px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-sm)',
                            color: '#fff',
                            fontSize: '13px',
                            outline: 'none'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '11.5px', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600 }}>
                          ESTIMATED TURNAROUND
                        </label>
                        <input 
                          type="text"
                          value={proposalForm.turnaroundDays}
                          onChange={(e) => setProposalForm({ ...proposalForm, turnaroundDays: e.target.value })}
                          required
                          style={{
                            width: '100%',
                            padding: '9px 12px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-sm)',
                            color: '#fff',
                            fontSize: '13px',
                            outline: 'none'
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: '18px' }}>
                      <label style={{ display: 'block', fontSize: '11.5px', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600 }}>
                        GENERATIVE WORKFLOW PITCH &amp; MODEL APPROACH
                      </label>
                      <textarea
                        rows={3}
                        value={proposalForm.workflowPitch}
                        onChange={(e) => setProposalForm({ ...proposalForm, workflowPitch: e.target.value })}
                        required
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-sm)',
                          color: '#fff',
                          fontSize: '13px',
                          outline: 'none',
                          resize: 'vertical'
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                      <button type="button" onClick={handleCloseModal} className="btn-secondary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                        Cancel
                      </button>
                      <button type="submit" className="btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
                        <Send size={13} />
                        <span>Submit Application</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
