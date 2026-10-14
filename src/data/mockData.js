// Comprehensive dataset for NEURALIS AI Content Creator Marketplace

export const CREATORS = [
  {
    id: 'creator-elena',
    name: 'Elena Rostova',
    handle: '@elena_neural',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
    title: 'Generative Creative Director & High-Fashion AI Filmmaker',
    location: 'Paris, France / Remote',
    rating: 4.98,
    reviewCount: 42,
    completedProjects: 57,
    hourlyRate: 140,
    projectBaseRate: 4500,
    turnaroundDays: '4-7 days',
    bio: 'Former luxury art director at L\'Oréal turned AI visual auteur. Specializing in high-fashion campaigns, photorealistic fluid dynamics, and commercial product spots with custom LoRA fine-tuning and reproducible ComfyUI workflows.',
    specialization: 'Luxury & Fashion Commercials',
    contentTypes: ['Cinematic Video', 'Product Stills', 'Lookbooks'],
    tools: ['Flux.1 Pro', 'Midjourney v6.1', 'ComfyUI', 'Topaz Photo AI', 'Runway Gen-3'],
    skills: [
      'Multi-Character Consistency',
      'LoRA Fine-Tuning',
      'Fluid Dynamics Simulation',
      'High-Res 8K Upscaling',
      'Commercial Licensing',
      'Color Grading & DaVinci'
    ],
    verificationSignals: {
      isVerifiedCreator: true,
      verifiedBadgeText: 'Master AI Director',
      workflowVerified: true,
      workflowAuditScore: 99.4,
      commercialIndemnityPassed: true,
      cleanDatasetGuarantee: true,
      apiSignatureVerified: true,
      avgReproducibilityScore: '99.4%'
    },
    clientLogos: ['Vogue AI Edition', 'L\'Aura Paris', 'Balenciaga Concept Lab', 'Aura Botanicals'],
    portfolio: [
      {
        id: 'port-1',
        title: 'AUREA: Molten Gold & Botanical Parfum',
        category: 'Luxury Commercial',
        image: '/portfolio/luxury_perfume.jpg',
        aspectRatio: '16:9 & 9:16',
        duration: '0:30 Commercial Cut',
        description: 'Commercial film spot showcasing high-viscosity molten gold swirling around the bespoke Aurea perfume bottle with organic emerald orchids and micro-droplet physics.',
        toolsUsed: ['Flux.1 Dev', 'ComfyUI Depth Rig', 'Topaz Gigapixel 8K', 'DaVinci Neural Grading'],
        commercialCleared: true,
        licenseType: 'Full Commercial Buyout + Indemnity',
        workflowDetails: {
          pipeline: 'Flux.1 Dev Latent -> ControlNet Depth (Custom 3D Mesh) -> Inpaint Masking -> 4x Latent Upscale -> Topaz Frame Polish',
          prompt: 'High-end luxury perfume commercial still, minimalist obsidian and glass perfume bottle floating in swirling viscous molten liquid gold and dark emerald water, delicate botanical orchids and micro water droplets, volumetric studio lighting, photorealistic luxury advertising, 8k octane render',
          negativePrompt: 'blurry, plastic, low resolution, bad geometry, distorted text, stock photo, watermark, duplicate bottle',
          seed: 884719203,
          cfgScale: 4.2,
          steps: 38,
          sampler: 'Euler A / Karras',
          reproducibilityScore: 99.6,
          comfyUiNodesCount: 24,
          workflowHash: 'sha256:7f8a9c2b4e5d6a1f89c03b8e721a9d'
        }
      },
      {
        id: 'port-2',
        title: 'Cyber-Silk Vogue Editorial Lookbook',
        category: 'Fashion Campaign',
        image: '/portfolio/cyberpunk_fashion.jpg',
        aspectRatio: '16:9 & 4:5',
        duration: 'Editorial Print Series',
        description: 'High-fashion editorial portraiture series blending bespoke holographic metallic textiles with subtle biometric cranial cybernetics for avant-garde print and digital lookbooks.',
        toolsUsed: ['Midjourney v6.1', 'FaceID Consistency LoRA', 'Photoshop Generative Fill'],
        commercialCleared: true,
        licenseType: 'Global Commercial Master',
        workflowDetails: {
          pipeline: 'Midjourney v6.1 Raw Style -> Reactor Face Swap / Character Anchor -> Custom Silk LoRA pass -> High-frequency Texture Polish',
          prompt: 'Vogue editorial fashion photography, high fashion female cyborg model wearing flowing iridescent holographic silk coat, intricate subtle geometric gold cybernetic implants along temple, dramatic studio key light, photorealistic, 8k portrait, cinematic fashion campaign',
          negativePrompt: 'deformed, cartoon, low quality, oversaturated, amateurish, extra limbs, bad eyes',
          seed: 194829144,
          cfgScale: 5.0,
          steps: 40,
          sampler: 'DPM++ 2M SDE',
          reproducibilityScore: 98.9,
          comfyUiNodesCount: 18,
          workflowHash: 'sha256:1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c'
        }
      },
      {
        id: 'port-7',
        title: 'AURÉLIEN: High Jewelry & Atelier AI Campaign',
        category: 'Ultra-Luxury Editorial',
        image: '/portfolio/luxury_atelier.jpg',
        aspectRatio: '16:9',
        duration: 'High Jewelry Print & Digital Master',
        description: 'Ultra-luxury high jewelry campaign featuring sapphire and diamond collar necklaces on silk velour, with raytraced ambient occlusion and editorial typography.',
        toolsUsed: ['Midjourney v6.0 raw', 'Flux.1 Pro', 'ACEScg Cinematic Grade', 'Custom Jewelry LoRA'],
        commercialCleared: true,
        licenseType: 'Exclusive Haute Joaillerie Buyout',
        workflowDetails: {
          pipeline: 'Midjourney v6.0 Raw -> Flux.1 Pro Custom Inpainting -> Jewelry Specular Node -> 8K Latent Polish',
          prompt: 'Premium UI/UX website mockup, ultra-luxury aesthetic, minimalist layout, elegant typography featuring a bold serif header for contrast and clean high-end geometric sans-serif navigation text. Sophisticated editorial design, asymmetrical grid layout, rich textures, deep cinematic lighting, soft shadows, 8k resolution, photorealistic website layout template, presentation on a sleek dark background',
          negativePrompt: 'blurry, fake gems, noisy reflections, low dynamic range, low detail, warped setting',
          seed: 492019482,
          cfgScale: 5.0,
          steps: 42,
          sampler: 'DPM++ 2M Karras',
          reproducibilityScore: 99.8,
          comfyUiNodesCount: 28,
          workflowHash: 'sha256:e1a90c4f8b2d3e5a6c7b8d9e0f1a2b'
        }
      }
    ]
  },
  {
    id: 'creator-kenji',
    name: 'Kenji Takahashi',
    handle: '@kenji_cinematics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
    title: 'AI Cinematographer & Generative Motion Designer',
    location: 'Tokyo, Japan / Los Angeles',
    rating: 4.99,
    reviewCount: 58,
    completedProjects: 74,
    hourlyRate: 165,
    projectBaseRate: 6000,
    turnaroundDays: '5-9 days',
    bio: 'Cinema-trained director combining 10 years of visual effects with generative video pipelines (Runway Gen-3, Kling 1.5, ComfyUI AnimateDiff). Creator of award-winning viral sci-fi teasers and hypercar motion campaigns.',
    specialization: 'Cinematic Action & Automotive',
    contentTypes: ['Cinematic Video', '3D Motion', 'Trailers'],
    tools: ['Runway Gen-3 Alpha', 'Kling AI Pro', 'ComfyUI', 'Topaz Video AI', 'DaVinci Resolve'],
    skills: [
      'Camera Motion Rigging',
      'Temporal Motion Consistency',
      '4K 60fps Interpolation',
      'Anamorphic Lens Simulation',
      'Prompt Architecture',
      'VFX Compositing'
    ],
    verificationSignals: {
      isVerifiedCreator: true,
      verifiedBadgeText: 'Elite AI Cinematographer',
      workflowVerified: true,
      workflowAuditScore: 98.9,
      commercialIndemnityPassed: true,
      cleanDatasetGuarantee: true,
      apiSignatureVerified: true,
      avgReproducibilityScore: '98.9%'
    },
    clientLogos: ['Hyperion Motors', 'Cyberpunk Studio', 'Tokyo Pulse', 'Red Bull AI Lab'],
    portfolio: [
      {
        id: 'port-3',
        title: 'Neo-Tokyo Midnight Hypercar Pursuit',
        category: 'Automotive Cinema',
        image: '/portfolio/tokyo_hypercar.jpg',
        aspectRatio: '16:9 & 2.39:1 Anamorphic',
        duration: '0:45 Cinematic Trailer',
        description: 'Anamorphic action spot featuring a custom prototype electric hypercar drifting through rain-drenched Shinjuku neon corridors with authentic camera tracking and reflection physics.',
        toolsUsed: ['Runway Gen-3 Alpha', 'Flux.1 Keyframe', 'Kling AI 1.5', 'Topaz Video 60fps'],
        commercialCleared: true,
        licenseType: 'Full Commercial Buyout + Indemnity',
        workflowDetails: {
          pipeline: 'Flux.1 Anamorphic Keyframe -> Runway Gen-3 Image-to-Video (Camera Yaw +4, Zoom +2, Speed 1.2) -> Kling 1.5 Motion Extension -> Topaz Chronos 60fps Frame Interpolation -> ACEScg Color Grading',
          prompt: 'Cinematic film still of a sleek obsidian electric hypercar speeding through Tokyo rain at night, neon reflections on wet asphalt, glowing purple and cyan cybernetic lights, ultra photorealistic, 8k resolution, anamorphic lens flare, motion blur, Unreal Engine 5 render style',
          negativePrompt: 'toy car, 3d cartoon, low poly, artifacting, jitter, warping, broken reflections',
          seed: 492019382,
          cfgScale: 6.0,
          steps: 45,
          sampler: 'Euler A Turbo',
          reproducibilityScore: 98.7,
          comfyUiNodesCount: 32,
          workflowHash: 'sha256:8899aabbccddeeff00112233445566'
        }
      },
      {
        id: 'port-4',
        title: 'Aurora X-1: Kinetic Levitation Sneaker',
        category: '3D Product Commercial',
        image: '/portfolio/cyber_sneaker.jpg',
        aspectRatio: '16:9 & 9:16 Vertical',
        duration: '0:30 Product Teaser',
        description: 'Dynamic product deconstruction commercial revealing internal kinetic air pods, magnetic levitation soles, and woven optic cables in a zero-gravity laboratory chamber.',
        toolsUsed: ['ComfyUI ControlNet', 'Flux.1 Pro', 'Blender Depth Map', 'After Effects'],
        commercialCleared: true,
        licenseType: 'Enterprise Unlimited Commercial',
        workflowDetails: {
          pipeline: 'Blender 3D Camera Rotation Pass -> ControlNet LineArt & Depth Conditioning -> Flux.1 Pro High-Res Inpaint -> Multi-angle Seed Synchronization',
          prompt: 'Product commercial advertisement of an impossible futuristic floating sneaker deconstructed into glowing kinetic pneumatic cushions and fiber-optic mesh, magnetic levitation, dark sleek titanium and neon violet accents, high contrast studio commercial lighting, 8k render',
          negativePrompt: 'distorted geometry, dirty background, blurry logos, uneven sole, bad perspective',
          seed: 673910245,
          cfgScale: 4.8,
          steps: 35,
          sampler: 'DPM++ 3M SDE Karras',
          reproducibilityScore: 99.2,
          comfyUiNodesCount: 28,
          workflowHash: 'sha256:3344556677889900aabbccddeeff11'
        }
      }
    ]
  },
  {
    id: 'creator-maya',
    name: 'Maya Lin',
    handle: '@maya_3dworlds',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=80',
    title: 'Stylized 3D Character Animator & Virtual Worlds Creator',
    location: 'San Francisco, CA / Vancouver',
    rating: 4.96,
    reviewCount: 36,
    completedProjects: 49,
    hourlyRate: 125,
    projectBaseRate: 3800,
    turnaroundDays: '4-6 days',
    bio: 'Former Pixar rendering artist pioneering stylized AI animation pipelines. Specialist in emotive character rigging, cross-scene consistency, and magical family-friendly 3D aesthetics using Luma, SDXL, and custom Gaussian Splats.',
    specialization: 'Stylized 3D & Character Animation',
    contentTypes: ['3D Animation', 'Character Design', 'Short Films'],
    tools: ['Luma Dream Machine', 'ComfyUI', 'SDXL LoRA', 'Blender', 'ElevenLabs'],
    skills: [
      'Character Consistency',
      'Multi-Angle LoRA Rigging',
      'Stylized 3D Rendering',
      'Facial Rig & Lipsync',
      'Interactive Splatting',
      'Audio Sync'
    ],
    verificationSignals: {
      isVerifiedCreator: true,
      verifiedBadgeText: 'Verified Character Architect',
      workflowVerified: true,
      workflowAuditScore: 99.1,
      commercialIndemnityPassed: true,
      cleanDatasetGuarantee: true,
      apiSignatureVerified: true,
      avgReproducibilityScore: '99.1%'
    },
    clientLogos: ['Chrono Games', 'Wonderland Studios', 'Boba Interactive', 'Storyverse Media'],
    portfolio: [
      {
        id: 'port-5',
        title: 'Rusty: The Cyber Red Panda Companion',
        category: '3D Character Animation',
        image: '/portfolio/stylized_creature.jpg',
        aspectRatio: '16:9 & 1:1',
        duration: '1:00 Game Teaser',
        description: 'Full multi-scene animated teaser introducing an adorable biomechanical red panda companion exploring an enchanted bioluminescent moss forest with emotive micro-expressions.',
        toolsUsed: ['Luma Dream Machine', 'SDXL Character LoRA', 'Blender 4.0', 'ElevenLabs Sound FX'],
        commercialCleared: true,
        licenseType: 'Full Game IP Transfer & Commercial',
        workflowDetails: {
          pipeline: 'Character Reference Sheet (6 Orthographic Angles) -> Custom LoRA Weight 0.85 -> Luma Motion Vector Conditioning -> Micro-facial Inpainting -> Ambient Spatial Audio Mastering',
          prompt: 'Award-winning 3D character animation render of an adorable bioluminescent robotic red panda companion in a lush enchanted moss forest, soft glowing whiskers, Pixar Disney render quality, raytraced subsurface scattering, octane render, vivid colors',
          negativePrompt: 'ugly, mutant, frightening, uncanny valley, extra limbs, bad fur, noise, low resolution',
          seed: 391820491,
          cfgScale: 5.2,
          steps: 42,
          sampler: 'Heun Karras',
          reproducibilityScore: 99.3,
          comfyUiNodesCount: 30,
          workflowHash: 'sha256:5566778899aabbccddeeff00112233'
        }
      }
    ]
  },
  {
    id: 'creator-marcus',
    name: 'Marcus Vance',
    handle: '@marcus_voice_ai',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
    title: 'Generative Audio Engineer & Voice Architect',
    location: 'London, UK / New York',
    rating: 4.94,
    reviewCount: 29,
    completedProjects: 44,
    hourlyRate: 95,
    projectBaseRate: 2200,
    turnaroundDays: '2-4 days',
    bio: 'Pioneering voice clone actor and multilingual generative sound designer. Trusted by Spotify and Duolingo for commercial synthetic voiceover, lip sync matching, and dynamic ambient soundscapes.',
    specialization: 'Generative Audio & Multilingual Voice',
    contentTypes: ['Audio & Voiceover', 'Sound Design', 'Lipsync'],
    tools: ['ElevenLabs v3', 'AudioCraft', 'Suno v3.5', 'Wav2Lip Pro', 'ProTools'],
    skills: [
      'Voice Cloning & Licensing',
      'Multilingual Accent Rigging',
      'Generative Music Production',
      'Dynamic Dialogue Lipsync',
      'Commercial Voice Indemnity'
    ],
    verificationSignals: {
      isVerifiedCreator: true,
      verifiedBadgeText: 'Verified Voice Actor & Engineer',
      workflowVerified: true,
      workflowAuditScore: 97.8,
      commercialIndemnityPassed: true,
      cleanDatasetGuarantee: true,
      apiSignatureVerified: true,
      avgReproducibilityScore: '97.8%'
    },
    clientLogos: ['Spotify Sound Lab', 'Duolingo Studios', 'Wired Audio', 'Metropolis Podcasts'],
    portfolio: [
      {
        id: 'port-6',
        title: 'Global Cinematic Voiceover Suite',
        category: 'Synthetic Voice & Audio',
        image: '/portfolio/luxury_perfume.jpg',
        aspectRatio: 'Audio Master',
        duration: '12 Language Localized Cuts',
        description: 'Complete voiceover localization package recorded via cleared synthetic voice actor models across English, French, Japanese, German, and Spanish with accurate emotional cadences.',
        toolsUsed: ['ElevenLabs Voice Model', 'AudioCraft FX', 'ProTools'],
        commercialCleared: true,
        licenseType: 'Commercial Voice Talent Release',
        workflowDetails: {
          pipeline: 'Script Prompt Engineering -> ElevenLabs Cloned Voice (Actor Consent Hash #4819) -> Pitch Modulation -> Dynamic Range Compression -> WAV 24-bit 96kHz Delivery',
          prompt: 'Rich velvet cinematic British narrator voice, warm authority, subtle pause before key brand slogan, zero metallic artifacting',
          negativePrompt: 'robotic, monotone, clipping, breath pops, pitch jitter',
          seed: 120491823,
          cfgScale: 1.0,
          steps: 20,
          sampler: 'Neural WaveNet',
          reproducibilityScore: 98.2,
          comfyUiNodesCount: 14,
          workflowHash: 'sha256:aabbccddeeff001122334455667788'
        }
      }
    ]
  },
  {
    id: 'creator-aria',
    name: 'Aria Thorne',
    handle: '@aria_synth',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80',
    title: 'Architectural AI Designer & Dreamlike Worlds Director',
    location: 'Milan, Italy / Zurich',
    rating: 4.97,
    reviewCount: 31,
    completedProjects: 40,
    hourlyRate: 150,
    projectBaseRate: 5000,
    turnaroundDays: '4-7 days',
    bio: 'Architect and computational visualist crafting hyper-aesthetic architectural concept spots, surreal living spaces, and luxury hospitality brand films using Flux.1 and ControlNet geometry.',
    specialization: 'Architectural Visualization & Luxury Spaces',
    contentTypes: ['Product Stills', 'Cinematic Video', 'Concept Art'],
    tools: ['Flux.1 Pro', 'ComfyUI', 'ControlNet Depth', 'Midjourney v6.1', 'Rhino 3D'],
    skills: [
      'Architectural Geometry Consistency',
      'Realistic Photometric Lighting',
      'ControlNet Segmentation',
      'Ultra-Res 16K Upscaling',
      'CAD-to-Generative Pipeline'
    ],
    verificationSignals: {
      isVerifiedCreator: true,
      verifiedBadgeText: 'Certified Architecture Lead',
      workflowVerified: true,
      workflowAuditScore: 99.5,
      commercialIndemnityPassed: true,
      cleanDatasetGuarantee: true,
      apiSignatureVerified: true,
      avgReproducibilityScore: '99.5%'
    },
    clientLogos: ['Foster & Partners AI Lab', 'B&B Italia', 'Wallpaper* Magazine', 'Aman Resorts'],
    portfolio: [
      {
        id: 'port-7',
        title: 'Floating Obsidian Nordic Fjord Villa',
        category: 'Architectural Concept',
        image: '/portfolio/tokyo_hypercar.jpg',
        aspectRatio: '16:9 & 21:9 Ultra-Wide',
        duration: 'Architectural Visualization Stills',
        description: 'Surreal sustainable residence cantilevered above stormy Norwegian fjords with interior warm amber fires, floor-to-ceiling smart glass, and northern lights reflection physics.',
        toolsUsed: ['Flux.1 Pro', 'Rhino Depth Map', 'Topaz Photo AI'],
        commercialCleared: true,
        licenseType: 'Unlimited Commercial Architecture Rights',
        workflowDetails: {
          pipeline: 'Rhino 3D Massing Export -> ControlNet Depth Pass -> Flux.1 Pro Texture Synthesis -> Ambient Weather LoRA -> 16K Latent Tile Render',
          prompt: 'Cantilevered minimalist black obsidian luxury villa over arctic Norwegian fjord at twilight, glowing floor to ceiling windows, aurora borealis reflecting on dark water, ultra photorealistic architectural photography',
          negativePrompt: 'distorted straight lines, warped glass, unrealistic gravity, grainy, oversaturated',
          seed: 928371029,
          cfgScale: 4.5,
          steps: 40,
          sampler: 'DPM++ 2M Karras',
          reproducibilityScore: 99.7,
          comfyUiNodesCount: 22,
          workflowHash: 'sha256:eeff00112233445566778899aabbcc'
        }
      }
    ]
  },
  {
    id: 'creator-devon',
    name: 'Devon Cruz',
    handle: '@devon_gen',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=240&q=80',
    title: 'High-CTR AI Ads Director & Viral Short-Form Specialist',
    location: 'Austin, TX / Miami',
    rating: 4.92,
    reviewCount: 48,
    completedProjects: 89,
    hourlyRate: 85,
    projectBaseRate: 1500,
    turnaroundDays: '24-48 hours',
    bio: 'Growth hacker and rapid AI producer creating viral TikTok, Instagram Reels, and YouTube Shorts for D2C brands. Generates 50+ ad iterations with automated voiceover and dynamic kinetic typography.',
    specialization: 'Viral Short-Form & D2C Advertising',
    contentTypes: ['Short-Form Video', 'Reels/TikTok Ads', 'UGC Simulation'],
    tools: ['Runway Gen-3', 'Pika 1.0', 'CapCut AI', 'Midjourney v6', 'ElevenLabs'],
    skills: [
      'Rapid Turnaround (24h)',
      'Hook Optimization (First 3s)',
      '9:16 Mobile Native Formatting',
      'Dynamic Kinetic Subtitles',
      'Multi-Variant A/B Testing'
    ],
    verificationSignals: {
      isVerifiedCreator: true,
      verifiedBadgeText: 'Top Performer (98% On-Time)',
      workflowVerified: true,
      workflowAuditScore: 96.5,
      commercialIndemnityPassed: true,
      cleanDatasetGuarantee: true,
      apiSignatureVerified: true,
      avgReproducibilityScore: '96.5%'
    },
    clientLogos: ['Gymshark Growth', 'Hims AI Studio', 'Magic Spoon', 'Liquid I.V.'],
    portfolio: [
      {
        id: 'port-8',
        title: 'Cyberpunk Sneaker Drop: Viral 9:16 Hook Ad',
        category: 'Social Video Ad',
        image: '/portfolio/cyber_sneaker.jpg',
        aspectRatio: '9:16 Vertical',
        duration: '0:15 TikTok Video Ad',
        description: 'Explosive 15-second social video engineered for 80%+ hook retention rate with instant floating sneaker explosion, pulsing bass synth, and neon kinetic text overlay.',
        toolsUsed: ['Runway Gen-3', 'CapCut Pro AI', 'ElevenLabs Hype Voice'],
        commercialCleared: true,
        licenseType: 'Digital Paid Social Commercial Rights',
        workflowDetails: {
          pipeline: 'Keyframe Generation -> Runway Image-to-Video Speed Burst -> Dynamic Beat Marker Sync -> Auto-caption Generation with Glowing Neon Strokes',
          prompt: 'Hyper-kinetic product commercial 9:16 vertical view of floating glowing futuristic neon sneaker exploding into pieces then reassembling to beat drop, strobe studio lighting',
          negativePrompt: 'slow motion, boring, bad typography, low resolution, watermark',
          seed: 582910381,
          cfgScale: 7.0,
          steps: 28,
          sampler: 'Euler A',
          reproducibilityScore: 97.4,
          comfyUiNodesCount: 16,
          workflowHash: 'sha256:00112233445566778899aabbccddee'
        }
      }
    ]
  }
];

export const INITIAL_BRIEFS = [
  {
    id: 'brief-1',
    brandName: 'Aura Botanicals & Parfums',
    brandLogo: '🌸',
    title: 'Molten Gold Botanical Parfum Global Launch Campaign',
    status: 'Accepting Proposals',
    budget: '$8,500 - $12,000',
    deadline: '14 Days Remaining',
    submissionCount: 8,
    contentType: 'Cinematic Video + Still Series',
    visualStyle: 'Dark Luxury, Molten Gold, Viscous Liquids, Macro Florals',
    format: '16:9 Cinematic (3840x2160) + 9:16 Vertical Cut (1080x1920)',
    objective: 'Create a 30s hero commercial and 5 key visual prints for our new signature fragrance. Must blend photorealistic fluid physics of swirling liquid gold with realistic dark emerald orchid flora.',
    modelStackRecommended: ['Flux.1 Dev / Pro', 'Runway Gen-3 Alpha', 'ComfyUI Depth ControlNet', 'Topaz Video 60fps'],
    commercialRequirements: [
      'Full Commercial Copyright Assignment (Work-for-hire)',
      'Model License Clearance (Indemnified training dataset verification)',
      'Delivery of Raw Generation Seeds, Prompts & ComfyUI Workflow JSON',
      'Mutual Non-Disclosure Agreement (NDA) Prior to Raw Assets',
      'ProRes 422HQ Clean Master + Alpha Channel Pass'
    ],
    milestones: [
      { step: 'Moodboard & Prompt Architecture Approval', payment: '20% ($2,000)' },
      { step: 'Keyframe Stills & Liquid Simulation Sign-off', payment: '30% ($3,000)' },
      { step: '4K 60fps Master Cut & Workflow Reproducibility Verification', payment: '50% ($5,000)' }
    ]
  },
  {
    id: 'brief-2',
    brandName: 'Hyperion Automotive',
    brandLogo: '⚡',
    title: 'Neo-Tokyo Midnight Run: Prototype Electric Hypercar Teaser',
    status: 'Reviewing Shortlist',
    budget: '$12,000 - $16,000',
    deadline: '8 Days Remaining',
    submissionCount: 14,
    contentType: 'Cinematic Action Trailer',
    visualStyle: 'Cyberpunk Cinema, Wet Asphalt Reflections, Neon Violet/Cyan, Anamorphic Flaring',
    format: '2.39:1 Anamorphic Ultra-Wide (4K DCI) + 9:16 Social Cut',
    objective: 'Produce a 45s high-octane cinematic teaser trailer announcing our next-generation electric hypercar drifting through Tokyo night rain. Must maintain strict vehicle silhouette consistency across 8 different camera angles.',
    modelStackRecommended: ['Flux.1 Pro Keyframes', 'Runway Gen-3 Image-to-Video', 'Kling 1.5 Motion Control', 'DaVinci ACEScg'],
    commercialRequirements: [
      'Exclusive Worldwide Automotive Commercial Rights',
      'Zero Third-Party Trademark Contamination (Strict Negative Prompting)',
      'Verification of Reproducibility via Platform Seed Check',
      'Sound Design & Dolby Atmos Mixed Audio Track Included'
    ],
    milestones: [
      { step: '3D Silhouette Consistency Rig & Angle Tests', payment: '25% ($3,500)' },
      { step: 'Rough Cut with Temp Sound & Camera Motion Check', payment: '35% ($4,900)' },
      { step: 'Color-graded 4K Master + Seed Delivery Package', payment: '40% ($5,600)' }
    ]
  },
  {
    id: 'brief-3',
    brandName: 'Luminary Footwear Lab',
    brandLogo: '👟',
    title: 'Kinetic Levitation Sneaker: 3D Exploded View Commercial',
    status: 'Accepting Proposals',
    budget: '$6,000 - $8,500',
    deadline: '18 Days Remaining',
    submissionCount: 6,
    contentType: '3D Product Commercial',
    visualStyle: 'High-Tech Studio, Magnetic Levitation, Fiber-Optics, Kinetic Deconstruction',
    format: '1:1 Square (2160x2160) + 9:16 Instagram Reels (1080x1920)',
    objective: 'Showcase the inner engineering of our flagship pneumatic cushion running shoe. The sneaker should float in mid-air and smoothly expand into exploded layers with glowing light guides.',
    modelStackRecommended: ['ComfyUI ControlNet Depth', 'Flux.1 Schnell / Dev', 'After Effects Kinetic VFX'],
    commercialRequirements: [
      'Commercial Digital Ads & In-Store LED Wall Clearance',
      'ComfyUI Workflow Node Graph Deliverable with Custom Checkpoints',
      'Indemnity against generative training copyright claims'
    ],
    milestones: [
      { step: 'Exploded View LineArt & Style Alignment', payment: '30% ($2,250)' },
      { step: 'Final 4K 60fps Motion Render & Audio Sync', payment: '70% ($5,250)' }
    ]
  },
  {
    id: 'brief-4',
    brandName: 'Chrono Interactive Games',
    brandLogo: '🎮',
    title: 'Stylized Creature Mascot Animation Series (6 Episodes)',
    status: 'Accepting Proposals',
    budget: '$15,000 - $20,000',
    deadline: '25 Days Remaining',
    submissionCount: 11,
    contentType: '3D Character Animation',
    visualStyle: 'Pixar / Ghibli Stylized, Bioluminescent Forest, Rich Warm Fur Shader',
    format: '16:9 Landscape (4K) + 9:16 Shorts',
    objective: 'Develop 6 animated 20-second vignettes featuring our in-game companion Rusty the robot red panda. Character facial expressions, fur color, and metallic accents must remain 100% consistent across all scenes.',
    modelStackRecommended: ['Luma Dream Machine', 'SDXL Character Consistency LoRA', 'Blender 3D Mesh Guide'],
    commercialRequirements: [
      'Perpetual Video Game Promotional IP Assignment',
      'Trained LoRA Weights and Training Dataset Delivery',
      'Platform Verified Workflow Certificate'
    ],
    milestones: [
      { step: 'LoRA Training & 10-Seed Character Benchmark Test', payment: '20% ($3,500)' },
      { step: 'Vignettes 1-3 Completed & Approved', payment: '40% ($7,000)' },
      { step: 'Vignettes 4-6 & Delivery of Master LoRA Checkpoint', payment: '40% ($7,000)' }
    ]
  }
];

export const BRIEF_BUILDER_PRESETS = [
  {
    id: 'preset-car',
    title: 'Futuristic Electric Hypercar Campaign',
    roughIdea: 'We need an anamorphic cinematic film teaser of an ultra-sleek black electric hypercar speeding through Tokyo rain at night with neon reflections on wet asphalt and glowing purple taillights.',
    type: 'Cinematic Automotive Trailer'
  },
  {
    id: 'preset-perfume',
    title: 'Luxury Molten Gold & Botanical Serum',
    roughIdea: 'A high-end luxury perfume commercial spot with a floating obsidian glass bottle surrounded by swirling liquid gold, dark emerald water, and delicate dewy orchids with studio lighting.',
    type: 'Luxury Brand Commercial'
  },
  {
    id: 'preset-sneaker',
    title: 'Magnetic Levitation Sneaker Product Reveal',
    roughIdea: 'A high-tech product commercial of an impossible floating running shoe deconstructing into glowing pneumatic cushions and fiber-optic mesh in a sleek dark laboratory chamber.',
    type: '3D Product Commercial'
  },
  {
    id: 'preset-character',
    title: 'Whimsical 3D Mascot Character Animation',
    roughIdea: 'An award-winning 3D character animation teaser of an adorable glowing robotic red panda in an enchanted moss forest, Pixar quality with emotive eyes and soft fur.',
    type: 'Stylized 3D Character Animation'
  }
];

export const PRESENTATION_SLIDES = [
  {
    id: 1,
    slideNumber: '01 / 05',
    tag: 'THE PROBLEM STATEMENT',
    title: 'Why Traditional Freelance Platforms Fail AI Creators & Brands',
    bullets: [
      {
        icon: 'AlertTriangle',
        title: 'Zero Workflow Verification',
        desc: 'Upwork and Fiverr cannot verify if work was generated by authentic prompt workflows, reproducible seeds, or stolen artwork.'
      },
      {
        icon: 'Lock',
        title: 'Commercial Copyright & Indemnity Black Hole',
        desc: 'Enterprise brands cannot risk copyright lawsuits from unvetted AI models trained on infringing datasets without commercial indemnity.'
      },
      {
        icon: 'Layers',
        title: 'Lack of AI-Native Creative Primitives',
        desc: 'Traditional platforms lack fields for LoRAs, ComfyUI node graphs, CFG scales, aspect ratios, seeds, and multi-generation revision loops.'
      }
    ],
    callout: 'Market Gap: Brands are spending billions on generative AI campaigns, but currently rely on discord DMs and unverified portfolios.'
  },
  {
    id: 2,
    slideNumber: '02 / 05',
    tag: 'THE SOLUTION: NEURALIS',
    title: 'The First AI-Native Operating System for Generative Production',
    bullets: [
      {
        icon: 'ShieldCheck',
        title: 'Cryptographic Proof-of-Workflow',
        desc: 'Every portfolio item carries verified generation hashes, ComfyUI node graph JSON, model checkpoint provenance, and seed locking.'
      },
      {
        icon: 'Sparkles',
        title: 'AI-Assisted Structured Brief Engine',
        desc: 'Brands transform a one-sentence rough idea into an enterprise brief with recommended tool stacks, aspect ratios, and milestone escrow.'
      },
      {
        icon: 'CheckCircle2',
        title: 'Enterprise Commercial Clearance & Indemnity',
        desc: 'Automated compliance checklist covering commercial model licenses, work-for-hire copyright transfer, and raw asset delivery.'
      }
    ],
    callout: 'Result: Brands commission top 1% generative directors with 100% legal clearance and reproducible quality guarantees.'
  },
  {
    id: 3,
    slideNumber: '03 / 05',
    tag: 'DATA MODEL ARCHITECTURE',
    title: 'Engineered Around Generative AI Realities',
    bullets: [
      {
        icon: 'UserCheck',
        title: 'Creator Profile Schema',
        desc: 'Captures specialized tool stacks (Flux, Runway, Kling), verified model certifications, reproducibility benchmark scores, and hourly/project rates.'
      },
      {
        icon: 'Film',
        title: 'AI Portfolio Item Schema',
        desc: 'Deep metadata store: Prompt, negative prompt, model version, sampler, CFG, seed, ComfyUI JSON, upscaler pass, and license tier.'
      },
      {
        icon: 'FileText',
        title: 'Creative Brief Schema',
        desc: 'Structured campaign specifications: Objective, aspect ratios (9:16, 16:9, 2.39:1), visual style keywords, model recommendations, and milestone releases.'
      }
    ],
    callout: 'Extensible JSON schema design supporting Webhooks, automated API hash verification, and reproducible batch inference.'
  },
  {
    id: 4,
    slideNumber: '04 / 05',
    tag: 'BONUS VERIFICATION SIGNALS',
    title: 'The 4-Pillar Trust & Verification Framework',
    bullets: [
      {
        icon: 'Cpu',
        title: '1. Node Graph & API Signature Audit',
        desc: 'Direct platform validation of creator ComfyUI node pipelines and authorized enterprise API logs (Midjourney, Runway, Flux).'
      },
      {
        icon: 'Award',
        title: '2. Multi-Seed Benchmark Testing',
        desc: 'Creators submit prompt tests across 10 randomized seeds to calculate an algorithmic Style Adherence & Consistency Score (e.g. 99.4%).'
      },
      {
        icon: 'FileCheck',
        title: '3. Clean Dataset & Commercial Indemnity',
        desc: 'Creators contractually certify models used are trained on ethically sourced datasets with platform-backed legal commercial indemnity.'
      }
    ],
    callout: 'Trust Signal Badges are visible on creator cards and portfolios, giving brands instant confidence before committing escrow.'
  },
  {
    id: 5,
    slideNumber: '05 / 05',
    tag: 'BUSINESS MODEL & EXECUTION',
    title: 'Monetization & Roadmap to Scale',
    bullets: [
      {
        icon: 'TrendingUp',
        title: 'Milestone Escrow Fee (10% - 15%)',
        desc: 'Commission on completed commercial campaigns with automated milestone release upon deliverable verification.'
      },
      {
        icon: 'Shield',
        title: 'Enterprise Commercial Clearance Tier',
        desc: 'Premium legal and indemnification package with guaranteed legal warranty for Fortune 500 brand marketing teams.'
      },
      {
        icon: 'Zap',
        title: 'Compute & Cloud ComfyUI Hosting',
        desc: 'Creators execute verified reproducible renders directly on NEURALIS cloud GPU clusters for zero-drift client handoff.'
      }
    ],
    callout: 'Goal: Become the definitive global marketplace and escrow infrastructure for generative AI creative production.'
  }
];

export const DATA_MODEL_SPECS = {
  creatorProfile: {
    title: 'CreatorProfile Schema',
    description: 'Models an AI-native creative professional with verified tool credentials, style benchmarks, and specialization attributes.',
    schema: {
      id: "String (UUID / 'creator-elena')",
      name: "String",
      handle: "String",
      title: "String",
      location: "String",
      specialization: "Enum: ['Luxury & Fashion', 'Cinematic Automotive', 'Stylized 3D Animation', 'Generative Audio', 'Architectural Viz', 'Viral Short-Form']",
      contentTypes: "Array<Enum: ['Cinematic Video', '3D Animation', 'Product Stills', 'Audio & Voice', 'Lookbooks']>",
      tools: "Array<String: ['Flux.1 Pro', 'Runway Gen-3', 'Midjourney v6.1', 'Kling AI', 'ComfyUI', 'Topaz AI', 'ElevenLabs']>",
      skills: "Array<String: ['Multi-Character Consistency', 'LoRA Training', 'Camera Rigging', 'Depth ControlNet', 'Voice Cloning']>",
      verificationSignals: {
        isVerifiedCreator: "Boolean",
        verifiedBadgeText: "String",
        workflowVerified: "Boolean",
        workflowAuditScore: "Float (0.0 - 100.0)",
        commercialIndemnityPassed: "Boolean",
        cleanDatasetGuarantee: "Boolean",
        apiSignatureVerified: "Boolean",
        avgReproducibilityScore: "String ('99.4%')"
      },
      pricing: {
        hourlyRate: "Number (USD)",
        projectBaseRate: "Number (USD)",
        turnaroundDays: "String"
      },
      portfolioItems: "Array<PortfolioItem>"
    }
  },
  portfolioItem: {
    title: 'AIPortfolioItem Schema',
    description: 'Detailed schema capturing AI-generated media alongside its full generative prompt architecture, seed locking, and ComfyUI workflow graph.',
    schema: {
      id: "String (UUID)",
      title: "String",
      category: "String",
      image: "String (URL / asset path)",
      aspectRatio: "Enum: ['16:9', '9:16', '1:1', '4:5', '2.39:1 Anamorphic', '21:9 Ultra-Wide']",
      duration: "String ('0:30 Commercial Cut')",
      commercialCleared: "Boolean",
      licenseType: "Enum: ['Full Commercial Buyout + Indemnity', 'Global Commercial Master', 'Digital Paid Social', 'Enterprise Unlimited']",
      workflowDetails: {
        pipeline: "String (Human-readable generative node pipeline sequence)",
        prompt: "String (Full positive generative prompt text)",
        negativePrompt: "String (Strict negative filters used)",
        model: "String ('Flux.1 Dev / Pro' / 'Runway Gen-3')",
        seed: "Integer (e.g. 884719203)",
        cfgScale: "Float (e.g. 4.2)",
        steps: "Integer (e.g. 38)",
        sampler: "String ('Euler A / Karras')",
        reproducibilityScore: "Float (99.6%)",
        comfyUiNodesCount: "Integer (24)",
        workflowHash: "String (SHA-256 cryptographic signature)",
        rawWorkflowJsonExport: "Object (Complete downloadable ComfyUI node graph)"
      }
    }
  },
  creativeBrief: {
    title: 'CreativeBrief Schema',
    description: 'Comprehensive brand campaign brief capturing artistic, technical, aspect ratio, and enterprise commercial-use requirements.',
    schema: {
      id: "String (UUID)",
      brandName: "String",
      title: "String",
      objective: "String",
      contentType: "Enum: ['Cinematic Video', '3D Product Commercial', 'Social Video Ads', 'Still Visuals', 'Audio & Sound Design']",
      visualStyle: "String (Style keywords, color palette, camera direction)",
      aspectRatios: "Array<String: ['16:9', '9:16', '1:1', '2.39:1']>",
      budgetRange: "String ('$8,500 - $12,000')",
      deadline: "String ('14 Days')",
      recommendedModelStack: "Array<String>",
      commercialRequirements: {
        copyrightAssignment: "Boolean (Full Work-for-hire transfer)",
        commercialIndemnity: "Boolean (Hold harmless against training data copyright claims)",
        modelLikenessRelease: "Boolean (Signed consent for synthetic face/voice clones)",
        rawDeliverablesPackage: "Array<String: ['ProRes 422HQ Clean Master', 'Raw Generation Seeds', 'ComfyUI Workflow JSON']>",
        nonDisclosureAgreement: "Boolean"
      },
      milestones: "Array<{ step: String, payment: String, status: Enum: ['Pending', 'In Progress', 'Completed'] }>"
    }
  }
};
