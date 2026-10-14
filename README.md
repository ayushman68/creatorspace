# NEURALIS — AI Content Creator Marketplace
> **Where Brands Commission Proven AI Visionaries.**  
> The first AI-native creative marketplace engineered around prompt architectures, reproducible ComfyUI node graphs, locked seeds, and enterprise commercial indemnity. Inspired by modern dark luxury aesthetics (Ascora).

---

## 🌟 Overview & Problem Statement
Generative AI tools (Flux, Midjourney, Runway Gen-3, Kling AI, Luma Dream Machine, ComfyUI, ElevenLabs) have created an entirely new category of creative professionals: AI filmmakers, prompt architects, and 3D animators. 

However, traditional freelance platforms fail to serve AI workflows because:
- **No Workflow Verification**: Inability to verify authentic prompt workflows, reproducibility, or seed locking.
- **Commercial Copyright Risk**: Lack of legal commercial indemnity for brands using generative media.
- **Missing AI Primitives**: No schema fields for LoRAs, node graphs, CFG scales, or multi-generation revision pipelines.

**NEURALIS** solves this by providing cryptographic workflow verification, an AI-assisted brief builder, multi-dimensional creator discovery, and quality-gated milestone escrow.

---

## 🚀 Key Features

### 1. Creator Profiles & AI Portfolios (30% Scope)
- Showcases videos, animations, and graphics with deep technical AI metadata.
- **Workflow Inspection**: Displays exact prompt architectures, negative prompts, model versions, seeds, samplers, CFG scales, and ComfyUI node counts.
- **Reproducible Exports**: Direct 1-click download of reproducible workflow JSON files.

### 2. Brand & Agency Briefs (20% Scope)
- Structured creative briefs capturing campaign objectives, budgets, deadlines, and multi-format aspect ratios (16:9 4K, 9:16 vertical, 2.39:1 anamorphic, 1:1 square).
- **Commercial Indemnity Checklist**: Work-for-hire copyright transfer, dataset provenance guarantees, synthetic actor likeness releases, and ProRes 422HQ clean master deliverables.

### 3. Creator Search & Multi-Faceted Filtering (25% Scope)
- Filter by AI Tools (Runway Gen-3, Flux.1 Pro, Midjourney v6, Kling AI, ComfyUI, ElevenLabs).
- Filter by Skills (Multi-Character Consistency, LoRA Fine-Tuning, Camera Motion Rigging, Voice Cloning).
- Filter by Specializations & Verification Status with graceful empty-state handling.

### 4. User Experience & Dual Personas (15% Scope)
- **Brand Mode ⇄ Creator Studio Mode**: Seamless switching between commissioning work and managing creator workflows.
- **Audio Feedback**: Subtle Web Audio API synth sound effects with mute toggle.
- **Dark Luxury Aesthetics**: Deep void `#07070b` theme with ambient aurora gradients and glassmorphism.

### 5. Pitch Deck & Presentation (10% Scope)
- Built-in interactive 5-slide presentation deck accessible via the top navigation and floating widget.
- Includes presenter notes toggle and keyboard navigation (`←` / `→`).

### 6. Bonus Features (Capped at 5-10 Points)
- **4-Layer Creator Verification Signals**: API signatures, ComfyUI node graph auditing, 10-seed reproducibility benchmark testing, and clean dataset commercial indemnity.
- **AI-Assisted Brief Builder**: Generative engine that transforms single-sentence rough ideas into structured briefs with instant starter presets.

---

## 📦 Data Model Schemas
Full specifications for `CreatorProfile`, `AIPortfolioItem`, `CreativeBrief`, and `CommercialRequirements` are accessible in the on-screen **Data Model Spec Inspector** and documented in [ai_creator_marketplace_spec.md](ai_creator_marketplace_spec.md).

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
git clone https://github.com/ayushman68/creatorspace.git
cd creatorspace
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: Vanilla CSS (Custom Design System with CSS variables and glassmorphism)
- **Icons**: Lucide React
- **Audio**: Web Audio API (zero external sound dependencies)
- **Animations**: Canvas Confetti & CSS Keyframe Auroras

