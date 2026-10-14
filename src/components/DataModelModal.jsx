import React, { useState } from 'react';
import { 
  X, 
  Database, 
  Copy, 
  Check, 
  FileCode, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Download
} from 'lucide-react';
import { DATA_MODEL_SPECS } from '../data/mockData';
import { sounds } from '../utils/audio';

export default function DataModelModal({ onClose }) {
  const [activeSchemaTab, setActiveSchemaTab] = useState('creatorProfile');
  const [copied, setCopied] = useState(false);

  const currentSpec = DATA_MODEL_SPECS[activeSchemaTab] || DATA_MODEL_SPECS.creatorProfile;

  const handleCopyJson = () => {
    sounds.click();
    navigator.clipboard.writeText(JSON.stringify(currentSpec.schema, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '920px', maxHeight: '90vh' }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 28px',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="pill-badge" style={{ fontSize: '11px', background: 'rgba(6, 182, 212, 0.1)', color: '#67e8f9' }}>
                <Database size={12} /> DELIVERABLE SPECIFICATION
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Architecture &amp; Entity Schemas
              </span>
            </div>
            <h3 className="font-display" style={{ fontSize: '22px', color: '#fff', fontWeight: 700 }}>
              AI Marketplace Data Model Specification
            </h3>
          </div>

          <button onClick={() => { sounds.click(); onClose(); }} className="btn-icon">
            <X size={18} color="#fff" />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px 28px' }}>
          {/* Architecture Explanatory Note (Deliverables requirement) */}
          <div style={{
            background: 'rgba(139, 92, 246, 0.06)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            borderRadius: 'var(--radius-md)',
            padding: '16px 20px',
            marginBottom: '20px'
          }}>
            <h4 style={{ fontSize: '13.5px', color: '#d8b4fe', fontWeight: 600, marginBottom: '6px' }}>
              Architectural Design Note on AI Creative Primitives
            </h4>
            <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Traditional freelance models represent jobs as freeform text and deliverables as generic files. 
              NEURALIS introduces first-class generative primitives: <strong>Prompt Architecture</strong>, 
              <strong>Locked Inference Seeds</strong>, <strong>ComfyUI Graph JSON</strong>, and 
              <strong>Commercial Indemnity Verification</strong>. This architecture ensures complete temporal 
              reproducibility across generations and guarantees zero copyright contamination for enterprise brands.
            </p>
          </div>

          {/* Schema Selector Tabs */}
          <div style={{
            display: 'flex',
            gap: '8px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '12px',
            marginBottom: '20px'
          }}>
            <button
              onClick={() => { sounds.tab(); setActiveSchemaTab('creatorProfile'); }}
              style={{
                background: activeSchemaTab === 'creatorProfile' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                color: activeSchemaTab === 'creatorProfile' ? '#fff' : 'var(--text-secondary)',
                border: 'none',
                padding: '7px 14px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              1. CreatorProfile Schema
            </button>

            <button
              onClick={() => { sounds.tab(); setActiveSchemaTab('portfolioItem'); }}
              style={{
                background: activeSchemaTab === 'portfolioItem' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                color: activeSchemaTab === 'portfolioItem' ? '#fff' : 'var(--text-secondary)',
                border: 'none',
                padding: '7px 14px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              2. AIPortfolioItem Schema
            </button>

            <button
              onClick={() => { sounds.tab(); setActiveSchemaTab('creativeBrief'); }}
              style={{
                background: activeSchemaTab === 'creativeBrief' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                color: activeSchemaTab === 'creativeBrief' ? '#fff' : 'var(--text-secondary)',
                border: 'none',
                padding: '7px 14px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              3. CreativeBrief Schema
            </button>
          </div>

          {/* Active Schema Viewer */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div>
                <h4 className="font-display" style={{ fontSize: '16px', color: '#fff' }}>
                  {currentSpec.title}
                </h4>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  {currentSpec.description}
                </p>
              </div>

              <button
                onClick={handleCopyJson}
                className="btn-secondary"
                style={{ fontSize: '11.5px', padding: '6px 12px' }}
              >
                {copied ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                <span>{copied ? 'Copied Schema!' : 'Copy JSON'}</span>
              </button>
            </div>

            {/* Code Block */}
            <div style={{
              background: '#050508',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '16px 20px',
              maxHeight: '360px',
              overflowY: 'auto'
            }}>
              <pre className="font-mono" style={{ fontSize: '12px', color: '#a5f3fc', lineHeight: 1.6, margin: 0 }}>
                {JSON.stringify(currentSpec.schema, null, 2)}
              </pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '16px 28px',
          borderTop: '1px solid var(--border-subtle)',
          background: 'rgba(255, 255, 255, 0.02)'
        }}>
          <button onClick={() => { sounds.click(); onClose(); }} className="btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
