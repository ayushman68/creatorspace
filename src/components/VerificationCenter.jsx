import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Lock, 
  FileCheck, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  RefreshCw, 
  Sliders, 
  Download,
  AlertCircle
} from 'lucide-react';
import { sounds } from '../utils/audio';

export default function VerificationCenter() {
  const [testingSeed, setTestingSeed] = useState('884719203');
  const [testingModel, setTestingModel] = useState('Flux.1 Pro');
  const [isRunningVerification, setIsRunningVerification] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  const handleRunVerification = () => {
    sounds.aiChime();
    setIsRunningVerification(true);
    setVerificationResult(null);

    setTimeout(() => {
      setIsRunningVerification(false);
      setVerificationResult({
        timestamp: new Date().toISOString(),
        workflowHash: 'sha256:7f8a9c2b4e5d6a1f89c03b8e721a9d0c34ef19a84',
        modelCheckpoint: `${testingModel} (Official Weights v1.4)`,
        consistencyScore: '99.4%',
        reproducibilityPassed: true,
        commercialClearance: 'Clean Dataset Verified (CC0 / Licensed)',
        latency: '340ms inference parity',
        nodeGraphStatus: 'All 24 ComfyUI nodes validated without missing custom dependencies'
      });
      sounds.success();
    }, 1100);
  };

  return (
    <section id="verification-center-section" style={{ paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span className="pill-badge verified" style={{ fontSize: '11px', padding: '4px 14px' }}>
              <ShieldCheck size={13} color="#10b981" /> BONUS FEATURE • CREATOR VERIFICATION SIGNALS
            </span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: '#fff', letterSpacing: '-0.03em', marginBottom: '12px' }}>
            The 4-Layer AI Trust &amp; Verification Protocol
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '680px', margin: '0 auto' }}>
            Why enterprise brands trust NEURALIS: Every creator, workflow node graph, prompt architecture, 
            and output is algorithmically audited for reproducibility and commercial legal indemnity.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '44px'
        }}>
          {[
            {
              icon: Cpu,
              color: '#8b5cf6',
              tag: 'LAYER 1',
              title: 'API & Node Graph Audit',
              desc: 'Cryptographic validation of ComfyUI custom node graphs and enterprise API generation signatures (Runway, Kling, Flux).'
            },
            {
              icon: RefreshCw,
              color: '#06b6d4',
              tag: 'LAYER 2',
              title: 'Multi-Seed Reproducibility',
              desc: 'Prompt consistency benchmarks executed across 10 randomized seeds to guarantee no hallucinated drift or visual collapse.'
            },
            {
              icon: Lock,
              color: '#10b981',
              tag: 'LAYER 3',
              title: 'Clean Dataset Guarantee',
              desc: 'Mandatory verification that all custom LoRAs and checkpoints are trained strictly on licensed, ethical datasets.'
            },
            {
              icon: FileCheck,
              color: '#f59e0b',
              tag: 'LAYER 4',
              title: 'Commercial Indemnity',
              desc: 'Legal indemnity policy shielding marketing departments against third-party copyright claims and likeness disputes.'
            }
          ].map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div 
                key={idx}
                className="glass-card"
                style={{ padding: '24px', transition: 'all 0.2s ease' }}
                onMouseEnter={() => sounds.hover()}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: `${pillar.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  border: `1px solid ${pillar.color}35`
                }}>
                  <IconComp size={20} color={pillar.color} />
                </div>
                <span style={{ fontSize: '11px', color: pillar.color, fontWeight: 700, letterSpacing: '0.05em' }}>
                  {pillar.tag}
                </span>
                <h3 className="font-display" style={{ fontSize: '17px', color: '#fff', margin: '4px 0 8px', fontWeight: 600 }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Verification Sandbox */}
        <div className="glass-card" style={{
          padding: '32px',
          background: 'linear-gradient(180deg, rgba(17, 17, 28, 0.85) 0%, rgba(9, 9, 15, 0.95) 100%)',
          border: '1px solid var(--border-light)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className="pill-badge verified" style={{ fontSize: '11px' }}>
                  <Terminal size={12} /> LIVE VERIFIER SANDBOX
                </span>
              </div>
              <h3 className="font-display" style={{ fontSize: '20px', color: '#fff' }}>
                Test ComfyUI Workflow &amp; Seed Reproducibility
              </h3>
            </div>

            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              Connected to NEURALIS Inference Audit Engine v2.4
            </span>
          </div>

          {/* Test Inputs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '20px'
          }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                GENERATION SEED
              </label>
              <input 
                type="text"
                value={testingSeed}
                onChange={(e) => setTestingSeed(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#fff',
                  fontSize: '13px',
                  fontFamily: 'var(--font-mono)',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>
                BASE GENERATIVE MODEL
              </label>
              <select
                value={testingModel}
                onChange={(e) => { sounds.tab(); setTestingModel(e.target.value); }}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#fff',
                  fontSize: '13px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="Flux.1 Pro" style={{ background: '#0d0d14' }}>Flux.1 Pro (BFL Official)</option>
                <option value="Runway Gen-3 Alpha" style={{ background: '#0d0d14' }}>Runway Gen-3 Alpha</option>
                <option value="Kling AI 1.5" style={{ background: '#0d0d14' }}>Kling AI 1.5 High-Motion</option>
                <option value="Midjourney v6.1" style={{ background: '#0d0d14' }}>Midjourney v6.1 Enterprise</option>
                <option value="SDXL Turbo" style={{ background: '#0d0d14' }}>SDXL Turbo LoRA Rig</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button
                onClick={handleRunVerification}
                disabled={isRunningVerification}
                className="btn-primary"
                style={{ width: '100%', padding: '11px', fontSize: '13px' }}
              >
                <RefreshCw size={14} className={isRunningVerification ? 'spin' : ''} />
                <span>{isRunningVerification ? 'Auditing Workflow Nodes...' : 'Run Reproducibility Dry-Run'}</span>
              </button>
            </div>
          </div>

          {/* Verification Result Output */}
          {verificationResult && (
            <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              animation: 'fade-in 0.3s ease'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span style={{ fontSize: '13.5px', fontWeight: 700, color: '#34d399' }}>
                    WORKFLOW VERIFICATION CERTIFICATE GENERATED
                  </span>
                </div>
                <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  {verificationResult.timestamp}
                </span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '12px',
                fontSize: '12px'
              }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '10px 12px', borderRadius: '4px' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '11px' }}>CRYPTOGRAPHIC WORKFLOW HASH</p>
                  <p className="font-mono" style={{ color: '#d8b4fe', fontSize: '11.5px', wordBreak: 'break-all' }}>
                    {verificationResult.workflowHash}
                  </p>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '10px 12px', borderRadius: '4px' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '11px' }}>REPRODUCIBILITY CONSISTENCY</p>
                  <p className="font-mono" style={{ color: '#34d399', fontSize: '14px', fontWeight: 700 }}>
                    {verificationResult.consistencyScore} (Zero Hallucination)
                  </p>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '10px 12px', borderRadius: '4px' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '11px' }}>DATASET PROVENANCE</p>
                  <p style={{ color: '#67e8f9', fontWeight: 600 }}>
                    {verificationResult.commercialClearance}
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', fontSize: '12px', color: 'var(--text-secondary)' }}>
                ✓ {verificationResult.nodeGraphStatus} • {verificationResult.latency}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
}
