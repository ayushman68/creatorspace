# NEURALIS ATELIER — AI Content Creator Marketplace
> **Where Luxury Brands Commission Proven AI Visionaries.**  
> The premier AI-native creative marketplace engineered around prompt architectures, reproducible ComfyUI node graphs, locked seeds, and enterprise commercial indemnity. Styled with a dark luxury editorial aesthetic and the Quantix glassmorphic dashboard architecture.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/ayushman68/creatorspace)

---

## 🌟 Overview & Problem Statement
Generative AI tools (Flux.1 Pro, Midjourney v6.1, Runway Gen-3, Kling AI, Luma Dream Machine, ComfyUI, ElevenLabs) have created an entirely new category of creative professionals: AI filmmakers, prompt architects, and 3D animators. 

However, traditional freelance platforms fail to serve AI workflows because:
- **No Workflow Verification**: Inability to verify authentic prompt workflows, reproducibility, or seed locking.
- **Commercial Copyright Risk**: Lack of legal commercial indemnity for brands using generative media.
- **Missing AI Primitives**: No schema fields for LoRAs, node graphs, CFG scales, or multi-generation revision pipelines.

**NEURALIS ATELIER** solves this by providing cryptographic workflow verification, an AI-assisted brief builder, multi-dimensional creator discovery, and quality-gated milestone escrow under a luxury editorial experience.

---

## 🏛️ Ultra-Luxury Editorial Design & Quantix Architecture

Inspired by ultra-luxury editorial design and the dark glassmorphic Quantix dashboard template:
- **Obsidian Vertical Sidebar (260px)**: Left-aligned fixed navigation with organized sections (*Atelier Directory*, *Editorial Studio*, *Specifications & Docs*), notification badges, active glow pills, and persona switcher.
- **Live AI Cluster Telemetry Ticker**: Real-time status bar tracking `FLUX.1 PRO: 2.1s LATENCY`, `RUNWAY GEN-3: OPERATIONAL`, `VERIFIED REPRODUCIBILITY: 99.4%`, and `ESCROW IN VAULT: $4,820,400`.
- **Quantix Metric Sparkline Cards**: 4-card analytics overview featuring custom glowing SVG curved sparkline charts with gradient fills and percentage change indicators.
- **Editorial High-Contrast Typography**: Roman serif **Cinzel** for atelier titles, **Playfair Display** and **Cormorant Garamond** for dramatic italic gold headlines, paired with **Outfit** and **Plus Jakarta Sans** for tracked geometric navigation.
- **Deep Cinematic Lighting & Soft Shadows**: Multi-layered ambient lighting, obsidian surfaces (`#07070b`, `#0d0e14`), subtle gold gradients, and soft directional drop shadows.

---

## 🚀 Complete 100-Point Rubric & Features

### 1. Creator Profiles & AI Portfolios (30% Scope)
- Showcases videos, animations, and graphics with deep technical AI metadata.
- **Workflow Inspection**: Displays exact prompt architectures, negative prompts, model versions, seeds, samplers, CFG scales, and ComfyUI node counts.
- **Reproducible Exports**: Direct 1-click download of reproducible workflow JSON files.
- **Haute Joaillerie & High-End Campaigns**: Includes verified campaigns like *Aurea Molten Gold Parfum*, *AURÉLIEN High Jewelry Atelier*, and *Neo-Tokyo Drift Prototype*.

### 2. Brand & Agency Briefs (20% Scope)
- Structured creative briefs capturing campaign objectives, budgets, deadlines, and multi-format aspect ratios (16:9 4K, 9:16 vertical, 2.39:1 anamorphic, 1:1 square).
- **Commercial Indemnity Checklist**: Work-for-hire copyright transfer, dataset provenance guarantees, synthetic actor likeness releases, and ProRes 422HQ clean master deliverables.

### 3. Creator Search & Multi-Faceted Filtering (25% Scope)
- Filter by AI Tools (Runway Gen-3, Flux.1 Pro, Midjourney v6.1, Kling AI, ComfyUI, ElevenLabs).
- Filter by Skills (Multi-Character Consistency, LoRA Fine-Tuning, Camera Motion Rigging, Voice Cloning).
- Filter by Specializations & Verification Status with graceful empty-state handling.
- **Global Header Search**: Search input dynamically linked with creator directory and tool filters.

### 4. User Experience & Dual-Persona Authentication (15% Scope)
- **Brand Agency View ⇄ Creator Studio View**: Explicit interfaces for commissioning brands vs AI generative directors.
- **Dual-Persona Sign In System**:
  - **Brand Sign In**: Access escrow vault ($125,000 balance), commission verified directors, and generate structured briefs (Demo user: *Jason Vance*).
  - **Creator Sign In**: Manage published LoRAs, ComfyUI node graphs, view pending milestone payouts ($24,500), and inspect reproducibility audit scores (Demo user: *Elena Rostova*).
  - **1-Click Evaluator Sign-In**: Frictionless persona switching for evaluators alongside custom corporate email/password authentication.
- **Audio Feedback**: Subtle Web Audio API synth sound effects with mute toggle.

### 5. Pitch Deck & Presentation (10% Scope)
- Built-in interactive 5-slide presentation deck accessible via the sidebar, top navigation, and floating widget.
- Includes presenter notes toggle and keyboard navigation (`←` / `→`).

### 6. Bonus Features (Capped at 5-10 Points)
- **4-Layer Creator Verification Signals (+5%)**: API signatures, ComfyUI node graph auditing, 10-seed reproducibility benchmark testing, and clean dataset commercial indemnity. Includes interactive **Dry-Run Reproducibility Sandbox**.
- **AI-Assisted Brief Builder (+5%)**: Generative engine that transforms single-sentence rough ideas into structured briefs with instant starter presets.

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
- **Styling**: Vanilla CSS (Ultra-Luxury Design System with CSS variables and glassmorphism)
- **Typography**: Google Fonts (Cinzel, Playfair Display, Cormorant Garamond, Outfit, Plus Jakarta Sans, JetBrains Mono)
- **Icons**: Lucide React
- **Audio**: Web Audio API (zero external sound dependencies)
- **Animations**: Canvas Confetti & CSS Keyframe Auroras
