import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Layers, 
  Film, 
  ShieldCheck, 
  Cpu, 
  DollarSign, 
  Clock, 
  FileCheck, 
  ArrowRight,
  Maximize2,
  Palette,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRIEF_BUILDER_PRESETS } from '../data/mockData';
import { sounds } from '../utils/audio';

export default function BriefBuilder({ onBriefPublished, onNavigateToBriefs }) {
  const [roughIdea, setRoughIdea] = useState(BRIEF_BUILDER_PRESETS[0].roughIdea);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedBrief, setGeneratedBrief] = useState(null);
  const [published, setPublished] = useState(false);

  const handleSelectPreset = (preset) => {
    sounds.click();
    setRoughIdea(preset.roughIdea);
    setGeneratedBrief(null);
    setPublished(false);
  };

  const handleGenerateBrief = () => {
    if (!roughIdea.trim()) return;

    sounds.aiChime();
    setIsGenerating(true);
    setGeneratedBrief(null);
    setPublished(false);

    // Realistic generative AI synthesis simulation
    setTimeout(() => {
      let title = 'Next-Gen Commercial Campaign';
      let contentType = 'Cinematic Video + Social Cut';
      let visualStyle = 'Futuristic High-Contrast, Anamorphic Flaring, Dark Luxury';
      let aspectRatios = ['16:9 Cinematic (3840x2160)', '9:16 Social Vertical (1080x1920)'];
      let modelStack = ['Flux.1 Pro', 'Runway Gen-3 Alpha', 'ComfyUI ControlNet', 'Topaz Video 60fps'];
      let budget = '$8,500 - $12,000';
      let timeline = '10 - 14 Days';
      let palette = ['#07070b', '#8b5cf6', '#06b6d4', '#d8b4fe'];

      const lower = roughIdea.toLowerCase();
      if (lower.includes('car') || lower.includes('hypercar') || lower.includes('vehicle')) {
        title = 'Neo-Tokyo Midnight Hypercar Action Spot';
        contentType = 'Cinematic Automotive Commercial';
        visualStyle = 'Cyberpunk Cinema, Wet Asphalt Reflections, Neon Violet/Cyan, Anamorphic Flaring';
        aspectRatios = ['2.39:1 Anamorphic Ultra-Wide', '9:16 Social Cut'];
        modelStack = ['Flux.1 Pro Keyframes', 'Runway Gen-3 Image-to-Video', 'Kling 1.5 Motion Vector', 'DaVinci ACEScg'];
        budget = '$12,000 - $16,000';
        timeline = '12 Days';
        palette = ['#07070b', '#8b5cf6', '#06b6d4', '#e2e8f0'];
      } else if (lower.includes('perfume') || lower.includes('gold') || lower.includes('serum') || lower.includes('luxury')) {
        title = 'Aurea Molten Gold & Botanical Parfum Commercial';
        contentType = 'Luxury Brand Commercial + 8K Stills';
        visualStyle = 'Dark Luxury, Viscous Liquid Gold, Macro Florals, Volumetric Studio Light';
        aspectRatios = ['16:9 Landscape (4K DCI)', '9:16 Reels/TikTok (1080x1920)', '1:1 Square'];
        modelStack = ['Flux.1 Dev', 'ComfyUI Depth ControlNet', 'Topaz Photo AI 8K', 'DaVinci Neural Grading'];
        budget = '$9,000 - $13,500';
        timeline = '10 Days';
        palette = ['#07070b', '#f59e0b', '#10b981', '#fef08a'];
      } else if (lower.includes('sneaker') || lower.includes('shoe') || lower.includes('product')) {
        title = 'Kinetic Levitation Sneaker: 3D Deconstruction Spot';
        contentType = '3D Product Commercial';
        visualStyle = 'High-Tech Studio, Magnetic Levitation, Pneumatic Fiber-Optics, Kinetic Exploded View';
        aspectRatios = ['1:1 Square (2160x2160)', '9:16 Vertical (1080x1920)'];
        modelStack = ['Blender Depth Map', 'ComfyUI LineArt Pass', 'Flux.1 Pro', 'After Effects VFX'];
        budget = '$6,500 - $9,000';
        timeline = '8 Days';
        palette = ['#07070b', '#d946ef', '#06b6d4', '#ffffff'];
      } else if (lower.includes('red panda') || lower.includes('creature') || lower.includes('animation') || lower.includes('character')) {
        title = 'Rusty The Cyber Mascot: Enchanted Forest Teaser';
        contentType = 'Stylized 3D Character Animation';
        visualStyle = 'Pixar/Ghibli Aesthetic, Bioluminescent Moss Forest, Emotive Character Fur Shader';
        aspectRatios = ['16:9 Landscape (3840x2160)', '9:16 Shorts'];
        modelStack = ['Luma Dream Machine', 'SDXL Character LoRA (Weight 0.85)', 'ElevenLabs Sound FX', 'Blender'];
        budget = '$10,000 - $15,000';
        timeline = '14 Days';
        palette = ['#07070b', '#10b981', '#f97316', '#38bdf8'];
      }

      setGeneratedBrief({
        id: 'brief-' + Date.now(),
        brandName: 'Your Brand / Creative Agency',
        title,
        contentType,
        visualStyle,
        aspectRatios,
        objective: `Execute a verified generative campaign based on: "${roughIdea}". Deliver high-production assets adhering strictly to camera motion guidelines, prompt seed locking, and zero artifacting.`,
        modelStackRecommended: modelStack,
        budget,
        timeline,
        colorPalette: palette,
        commercialRequirements: [
          'Full Commercial Copyright Assignment (Work-for-hire)',
          'AI Model Commercial Indemnity (Ethically clean datasets)',
          'Model & Synthetic Actor Likeness Release signed',
          'Delivery of Raw Generation Seeds, Prompts & ComfyUI Workflow JSON',
          'ProRes 422HQ Clean Master + Alpha Channel Pass',
          'Mutual Non-Disclosure Agreement (NDA)'
        ],
        milestones: [
          { step: 'Moodboard & Prompt Architecture Sign-off', payment: '25%' },
          { step: 'Keyframe Stills & Seed Locking Approval', payment: '35%' },
          { step: '4K Master Cut & ComfyUI Reproducibility Verification', payment: '40%' }
        ]
      });

      setIsGenerating(false);
      sounds.success();
    }, 1200);
  };

  const handlePublishBrief = () => {
    sounds.success();
    setPublished(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
    if (onBriefPublished) {
      onBriefPublished(generatedBrief);
    }
  };

  return (
    <section id="brief-builder-section" style={{ paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '1060px' }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="pill-badge ai-sparkle" style={{ fontSize: '11px', padding: '4px 14px' }}>
              <Sparkles size={13} color="#c084fc" /> BONUS FEATURE • AI-ASSISTED BRIEF BUILDER
            </span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: '#fff', letterSpacing: '-0.03em', marginBottom: '12px' }}>
            Turn Any Rough Idea Into a Structured AI Brief
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '640px', margin: '0 auto' }}>
            Enter a single sentence concept. Our generative engine transforms it into an enterprise 
            commercial specification with recommended model stacks, aspect ratios, and indemnity terms.
          </p>
        </div>

        {/* Input Box Card */}
        <div className="glass-card" style={{ padding: '28px', marginBottom: '32px' }}>
          {/* Quick Presets */}
          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
              TRY A SAMPLE PRODUCTION PROMPT:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {BRIEF_BUILDER_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  style={{
                    background: roughIdea === preset.roughIdea ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${roughIdea === preset.roughIdea ? 'rgba(139, 92, 246, 0.4)' : 'var(--border-subtle)'}`,
                    color: roughIdea === preset.roughIdea ? '#d8b4fe' : 'var(--text-secondary)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '12px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {preset.title}
                </button>
              ))}
            </div>
          </div>

          {/* Text Area */}
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <textarea
              rows={4}
              placeholder="Describe your creative vision (e.g. 'We need a 30s cinematic commercial for our electric hypercar drifting through Tokyo rain at night with glowing violet neon reflections and anamorphic lens flares')..."
              value={roughIdea}
              onChange={(e) => setRoughIdea(e.target.value)}
              style={{
                width: '100%',
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                color: '#fff',
                fontSize: '14.5px',
                lineHeight: 1.6,
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'var(--font-body)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
            />
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              ⚡ Automatically generates: Content Type, Aspect Ratios, Model Stack, Milestones, and Indemnity Checklist.
            </span>

            <button
              onClick={handleGenerateBrief}
              disabled={isGenerating || !roughIdea.trim()}
              className="btn-primary"
              style={{
                padding: '12px 28px',
                fontSize: '14px',
                background: isGenerating ? 'rgba(255, 255, 255, 0.2)' : 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                color: '#ffffff',
                boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)'
              }}
            >
              <Sparkles size={16} />
              <span>{isGenerating ? 'Synthesizing Structured Brief...' : '✨ Generate Structured Brief with AI'}</span>
            </button>
          </div>
        </div>

        {/* AI Synthesis Result Card */}
        {generatedBrief && (
          <div 
            className="glass-card" 
            style={{ 
              padding: '36px', 
              background: 'linear-gradient(180deg, rgba(20, 20, 32, 0.9) 0%, rgba(10, 10, 16, 0.95) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.4)',
              boxShadow: '0 20px 60px -10px rgba(139, 92, 246, 0.25)',
              animation: 'scale-up 0.3s ease-out'
            }}
          >
            {/* Header Badge & Title */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '16px',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '20px',
              marginBottom: '24px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span className="pill-badge verified" style={{ fontSize: '11px', padding: '3px 10px' }}>
                    <CheckCircle2 size={12} /> AI SYNTHESIS COMPLETED
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    Est. Budget: <strong style={{ color: '#fff' }}>{generatedBrief.budget}</strong> • Timeline: <strong style={{ color: '#fff' }}>{generatedBrief.timeline}</strong>
                  </span>
                </div>
                <h3 className="font-display" style={{ fontSize: '26px', color: '#fff', fontWeight: 700 }}>
                  {generatedBrief.title}
                </h3>
              </div>

              {/* Publish Action Button */}
              <div>
                {published ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="pill-badge verified" style={{ fontSize: '13px', padding: '8px 16px' }}>
                      <Check size={14} /> Brief Published to Marketplace!
                    </span>
                    <button
                      onClick={() => { sounds.click(); onNavigateToBriefs(); }}
                      className="btn-secondary"
                      style={{ fontSize: '12px' }}
                    >
                      View in Active Briefs →
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handlePublishBrief}
                    className="btn-primary"
                    style={{ padding: '12px 24px', fontSize: '14px' }}
                  >
                    <Send size={15} />
                    <span>Publish Brief to Marketplace</span>
                  </button>
                )}
              </div>
            </div>

            {/* Campaign Objective */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 600 }}>
                CAMPAIGN OBJECTIVE &amp; SCOPE
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                {generatedBrief.objective}
              </p>
            </div>

            {/* Structured Specifications Grid (20% Scope Evaluation Criteria) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              marginBottom: '28px'
            }}>
              {/* Content Type & Formats */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '18px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Film size={15} color="#06b6d4" />
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#fff' }}>CONTENT TYPE &amp; RATIOS</span>
                </div>
                <p style={{ fontSize: '13.5px', color: '#67e8f9', fontWeight: 600, marginBottom: '8px' }}>
                  {generatedBrief.contentType}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {generatedBrief.aspectRatios.map((ratio, idx) => (
                    <span key={idx} style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Maximize2 size={11} color="var(--text-muted)" /> {ratio}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended AI Tool Stack */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '18px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Cpu size={15} color="#8b5cf6" />
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#fff' }}>RECOMMENDED MODEL STACK</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                  {generatedBrief.modelStackRecommended.map((model, idx) => (
                    <span 
                      key={idx}
                      className="pill-badge"
                      style={{ fontSize: '11px', background: 'rgba(139, 92, 246, 0.1)', color: '#d8b4fe' }}
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Style & Color Palette */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '18px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Palette size={15} color="#f59e0b" />
                  <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#fff' }}>VISUAL STYLE &amp; PALETTE</span>
                </div>
                <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                  {generatedBrief.visualStyle}
                </p>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {generatedBrief.colorPalette.map((color, idx) => (
                    <div 
                      key={idx}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        background: color,
                        border: '1px solid rgba(255,255,255,0.2)'
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Commercial-Use & Licensing Checklist (Essential Scope!) */}
            <div style={{
              background: 'rgba(16, 185, 129, 0.04)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <ShieldCheck size={17} color="#10b981" />
                <h4 style={{ fontSize: '13.5px', color: '#34d399', fontWeight: 700 }}>
                  COMMERCIAL-USE &amp; INDEMNITY REQUIREMENTS
                </h4>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '8px'
              }}>
                {generatedBrief.commercialRequirements.map((req, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={13} color="#10b981" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Escrow Milestone Distribution */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '20px'
            }}>
              <h4 style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 600 }}>
                QUALITY-GATED MILESTONE ESCROW RELEASES
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                {generatedBrief.milestones.map((ms, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>MILESTONE 0{idx + 1}</span>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#34d399' }}>{ms.payment}</span>
                    </div>
                    <p style={{ fontSize: '12.5px', color: '#fff', fontWeight: 500 }}>
                      {ms.step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
