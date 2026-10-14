import React, { useState } from 'react';
import { 
  X, 
  Cpu, 
  Copy, 
  Check, 
  Download, 
  ShieldCheck, 
  Layers, 
  Sliders, 
  Terminal, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { sounds } from '../utils/audio';

export default function WorkflowInspectorModal({ portfolioItem, creator, onClose }) {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);

  if (!portfolioItem) return null;

  const { workflowDetails } = portfolioItem;

  const handleCopyPrompt = () => {
    sounds.click();
    navigator.clipboard.writeText(workflowDetails.prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleDownloadWorkflow = () => {
    sounds.click();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(workflowDetails, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${portfolioItem.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_workflow.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '960px', maxHeight: '92vh', display: 'flex', flexDirection: 'column' }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 28px',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="pill-badge verified" style={{ fontSize: '11px', padding: '3px 10px' }}>
                <ShieldCheck size={12} /> REPRODUCIBLE GENERATIVE NODE GRAPH
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {portfolioItem.workflowDetails.comfyUiNodesCount} Executed Nodes
              </span>
            </div>
            <h3 className="font-display" style={{ fontSize: '20px', color: '#fff', fontWeight: 700 }}>
              {portfolioItem.title}
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button onClick={handleDownloadWorkflow} className="btn-secondary" style={{ fontSize: '12px', padding: '6px 14px' }}>
              <Download size={13} />
              <span>Export Node JSON</span>
            </button>
            <button onClick={() => { sounds.click(); onClose(); }} className="btn-icon">
              <X size={18} color="#fff" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '24px 28px', overflowY: 'auto', flex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '24px'
          }}>
            {/* Visual Asset Preview */}
            <div>
              <div style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                aspectRatio: '16/9',
                border: '1px solid var(--border-subtle)',
                position: 'relative',
                marginBottom: '12px'
              }}>
                <img 
                  src={portfolioItem.image} 
                  alt={portfolioItem.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  background: 'rgba(7, 7, 11, 0.85)',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: '#34d399',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}>
                  {workflowDetails.reproducibilityScore}% REPRODUCIBILITY
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)' }}>
                <span>Creator: <strong style={{ color: '#fff' }}>{creator ? creator.name : 'Verified Director'}</strong></span>
                <span>Format: <strong style={{ color: '#67e8f9' }}>{portfolioItem.aspectRatio}</strong></span>
              </div>
            </div>

            {/* Core Seed & Inference Metrics */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '12px 14px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)'
              }}>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '3px' }}>PIPELINE SEQUENCE</p>
                <p style={{ fontSize: '12.5px', color: '#fff', lineHeight: 1.4 }}>
                  {workflowDetails.pipeline}
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px'
              }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                  <span style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>LOCKED SEED</span>
                  <p className="font-mono" style={{ fontSize: '14px', color: '#67e8f9', fontWeight: 600 }}>
                    {workflowDetails.seed}
                  </p>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                  <span style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>CFG SCALE</span>
                  <p className="font-mono" style={{ fontSize: '14px', color: '#fff', fontWeight: 600 }}>
                    {workflowDetails.cfgScale}
                  </p>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                  <span style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>SAMPLER &amp; SCHEDULER</span>
                  <p className="font-mono" style={{ fontSize: '13px', color: '#d8b4fe', fontWeight: 500 }}>
                    {workflowDetails.sampler}
                  </p>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                  <span style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>STEPS COUNT</span>
                  <p className="font-mono" style={{ fontSize: '14px', color: '#fff', fontWeight: 600 }}>
                    {workflowDetails.steps} Steps
                  </p>
                </div>
              </div>

              <div style={{
                background: 'rgba(139, 92, 246, 0.05)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)'
              }}>
                <p style={{ fontSize: '10.5px', color: 'var(--text-muted)' }}>SHA-256 WORKFLOW HASH</p>
                <p className="font-mono" style={{ fontSize: '11px', color: '#c084fc', wordBreak: 'break-all' }}>
                  {workflowDetails.workflowHash}
                </p>
              </div>
            </div>
          </div>

          {/* Prompts Section */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '11.5px', color: 'var(--text-muted)', fontWeight: 600 }}>
                AUTHENTIC GENERATIVE PROMPT:
              </span>
              <button
                onClick={handleCopyPrompt}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: copiedPrompt ? '#34d399' : '#c084fc',
                  fontSize: '11.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer'
                }}
              >
                {copiedPrompt ? <Check size={11} /> : <Copy size={11} />}
                <span>{copiedPrompt ? 'Copied Prompt!' : 'Copy Prompt'}</span>
              </button>
            </div>
            <div style={{
              background: '#050508',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              padding: '14px 16px'
            }}>
              <p className="font-mono" style={{ fontSize: '12.5px', color: '#f4f4f7', lineHeight: 1.5 }}>
                {workflowDetails.prompt}
              </p>
            </div>
          </div>

          {workflowDetails.negativePrompt && (
            <div style={{ marginBottom: '20px' }}>
              <span style={{ fontSize: '11.5px', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                NEGATIVE CONSTRAINTS / FILTERING:
              </span>
              <div style={{
                background: '#050508',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px 16px'
              }}>
                <p className="font-mono" style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.5 }}>
                  {workflowDetails.negativePrompt}
                </p>
              </div>
            </div>
          )}

          {/* Visual Node Diagram Representation */}
          <div>
            <span style={{ fontSize: '11.5px', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
              COMFYUI NODE EXECUTION FLOW:
            </span>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              overflowX: 'auto',
              padding: '12px 8px',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}>
              {['CheckpointLoader', 'CLIPTextEncode', 'ControlNetApply', 'KSampler (Euler A)', 'VAEDecode', 'UltimateSDUpscale', 'ColorGradeACES'].map((node, i) => (
                <React.Fragment key={i}>
                  <div style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    background: i === 3 ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${i === 3 ? 'rgba(139, 92, 246, 0.5)' : 'var(--border-subtle)'}`,
                    fontSize: '11px',
                    fontWeight: 600,
                    color: i === 3 ? '#d8b4fe' : '#fff',
                    whiteSpace: 'nowrap',
                    textAlign: 'center'
                  }}>
                    {node}
                  </div>
                  {i < 6 && <ArrowRight size={12} color="var(--text-muted)" style={{ flexShrink: 0 }} />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 28px',
          borderTop: '1px solid var(--border-subtle)',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <span style={{ fontSize: '12px', color: '#34d399', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={14} /> Full Commercial Buyout &amp; Model Indemnity Cleared
          </span>
          <button onClick={() => { sounds.click(); onClose(); }} className="btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
