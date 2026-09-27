/**
 * Portfolio Data Model & CMS Structure
 * AI Video Creator & AI Video Editor
 */

import heroSciFi from '../assets/images/hero_cinematic_scifi_1790369763150.jpg';
import cyberMonk from '../assets/images/portrait_cyber_monk_1790369774899.jpg';
import fashionGold from '../assets/images/fashion_gold_noir_1790369786295.jpg';
import directorPortrait from '../assets/images/creator_director_portrait_1790369796890.jpg';
import productGold from '../assets/images/commercial_product_gold_1790374070408.jpg';
import envGold from '../assets/images/cinematic_env_gold_1790374083328.jpg';

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  category: 'AI SHORT FILM' | 'AI COMMERCIAL' | 'AI MUSIC VIDEO' | 'AI PRODUCT VIDEO' | 'AI SOCIAL CONTENT' | 'AI CINEMATIC EDIT';
  tagline: string;
  year: string;
  client: string;
  role: string;
  duration?: string;
  thumbnail: string;
  heroMedia: {
    type: 'video' | 'image';
    url: string;
    poster: string;
  };
  idea: string;
  story: string;
  process: string;
  tools: string[];
  finalResult: {
    overview: string;
    highlights: string[];
    mediaItems: {
      type: 'image' | 'video';
      url: string;
      caption: string;
    }[];
  };
  featured: boolean;
}

export interface AIVideo {
  id: string;
  title: string;
  type: string;
  category: string;
  duration: string;
  year: string;
  shortDescription: string;
  poster: string;
  videoUrl: string;
  toolsUsed: string[];
  aspectRatio: '16:9' | '2.39:1' | '9:16';
  directorNotes: string;
}

export interface WhatIDoService {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  tools: string[];
  image: string;
}

export interface VisualDevItem {
  id: string;
  title: string;
  category: 'Character Concept' | 'Environment Concept' | 'Storyboard' | 'Cinematic Frame' | 'Product Concept' | 'Visual Experiment';
  description: string;
  image: string;
  aspectRatio: string;
  tools: string;
  seed: string;
}

export interface ProcessStage {
  number: string;
  name: string;
  summary: string;
  details: string;
  humanCraft: string;
  tools: string[];
}

export interface EditComparisonItem {
  id: string;
  title: string;
  category: string;
  description: string;
  rawLabel: string;
  finalLabel: string;
  rawVideoUrl: string;
  finalVideoUrl: string;
  rawPoster: string;
  finalPoster: string;
  breakdown: {
    aiGen: string;
    creativeDirection: string;
    editing: string;
    color: string;
    soundDesign: string;
    vfx: string;
  };
}

export interface CategoryPreview {
  category: string;
  tagline: string;
  description: string;
  sampleVideo: string;
  samplePoster: string;
  format: string;
  ratio: string;
}

export interface ToolkitTool {
  name: string;
  type: 'AI Video Engine' | 'Generative Image & Concept' | 'Post-Production & Assembly' | 'VFX & Motion Design' | 'Color & Sound';
  description: string;
  primaryUse: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  year: string;
  isPlaceholder?: boolean;
}

// Brand constants
export const BRAND = {
  name: 'D. TECH',
  fullName: 'Daniel Tech',
  title: 'AI Video Creator & AI Video Editor',
  accent: '#B8863B',
  reelVideoUrl: 'https://res.cloudinary.com/r47dziu3/video/upload/v1790374824/AI_filmmaker_showreel_sequences_20260925231912.mp4',
  heroPoster: heroSciFi,
  portrait: 'https://res.cloudinary.com/r47dziu3/image/upload/v1790377448/WhatsApp_Image_2026-06-25_at_1.51.46_AM.jpg',
};

export const CREATOR_PROFILE = {
  name: 'D. TECH',
  role: 'AI Video Creator • AI Video Editor',
  headline: 'I TURN IDEAS INTO CINEMATIC AI VIDEOS.',
  supportingText: 'I create, edit and transform ideas into cinematic videos using AI, creative direction and modern post-production.',
  bio: "I'm an AI video creator and video editor turning complex concepts into cinematic, emotionally compelling films. I bridge state-of-the-art generative video diffusion with high-end editorial craft, sound architecture, and intentional color grading.",
  coreMessage: 'I use AI to create the visuals, but creative direction and editing turn those visuals into a finished story.',
  heroVideo: 'https://res.cloudinary.com/r47dziu3/video/upload/v1790374824/AI_filmmaker_showreel_sequences_20260925231912.mp4',
  heroPoster: heroSciFi,
  socials: [
    { name: 'Instagram', url: 'https://instagram.com', handle: '@dtech.aivideo' },
    { name: 'YouTube', url: 'https://youtube.com', handle: 'D. Tech AI Cinema' },
    { name: 'TikTok', url: 'https://tiktok.com', handle: '@dtech.film' },
    { name: 'LinkedIn', url: 'https://linkedin.com', handle: 'Daniel Tech' },
    { name: 'Email', url: 'mailto:contact@dtech-aivideo.com', handle: 'contact@dtech-aivideo.com' },
  ]
};

// 1. SELECTED AI VIDEO WORK
export const SELECTED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'project-solaris',
    number: '01',
    title: 'THE LAST JOURNEY',
    category: 'AI SHORT FILM',
    tagline: 'An atmospheric sci-fi odyssey exploring humanity’s final terrestrial beacon.',
    year: '2026',
    client: 'Independent AI Film Showcase',
    role: 'AI Video Creator, Director & Video Editor',
    duration: '04:18',
    thumbnail: heroSciFi,
    heroMedia: {
      type: 'video',
      url: 'https://res.cloudinary.com/r47dziu3/video/upload/v1790445008/watch_video.mp4',
      poster: heroSciFi
    },
    idea: 'Exploring human isolation against monolithic extraterrestrial architecture. The goal was to build the deliberate, heavy camera momentum of 70mm anamorphic cinema using generative diffusion.',
    story: 'Centuries after atmospheric collapse, a lone courier traverses the Obsidian Expanse to reignite the Sol-Core beacon, guided only by acoustic resonance relics.',
    process: 'Structured across a 6-week iterative pipeline. Initial character references were tuned in ComfyUI, dynamic zero-gravity dust currents animated in Runway Gen-3 and Kling 1.5, followed by precision speed ramps and color mastering in Premiere Pro.',
    tools: ['Runway Gen-3', 'Kling 1.5', 'ComfyUI', 'Premiere Pro', 'After Effects'],
    finalResult: {
      overview: 'Screened at international generative film screenings; acclaimed for frame-to-frame character consistency, tactile sound design, and deep golden-hour lighting.',
      highlights: [
        'Anamorphic 2.39:1 cinema framing with custom optical aberrations',
        'Frame-to-frame character costume continuity across 42 generated shots',
        'Spatial audio composition synchronized to volumetric atmospheric mist'
      ],
      mediaItems: [
        { type: 'image', url: heroSciFi, caption: 'Establishing landscape: The Obsidian Spire at golden twilight' },
        { type: 'image', url: cyberMonk, caption: 'Character detail: Acoustic courier in golden brass resonance harness' }
      ]
    },
    featured: true
  },
  {
    id: 'project-aurelia',
    number: '02',
    title: 'AURELIA: LIQUID GOLD',
    category: 'AI COMMERCIAL',
    tagline: 'Next-generation luxury perfumery campaign designed with fluid dynamics.',
    year: '2026',
    client: 'Maison Aurelia Paris',
    role: 'AI Creative Director, Video Creator & Editor',
    duration: '00:45',
    thumbnail: fashionGold,
    heroMedia: {
      type: 'video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      poster: fashionGold
    },
    idea: 'Translating the sensory weight of molten amber and golden agarwood into visual poetry without the physical constraints of traditional macro stages.',
    story: 'A droplet of distilled amber suspended in zero gravity blooms into a golden silk gown, reflecting the radiant warmth of nocturnal Mediterranean heat.',
    process: 'Trained high-viscosity fluid dynamic control nets in Flux.1 and converted high-resolution keyframes into 60fps slow-motion motion vectors with Sora and Runway. Master color graded in DaVinci Resolve.',
    tools: ['Flux.1 Pro', 'Runway Gen-3', 'Sora', 'Premiere Pro', 'DaVinci Resolve'],
    finalResult: {
      overview: 'Digital-first luxury campaign that achieved 3.4M organic impressions and redefined how high jewelry and perfumery can harness generative storytelling.',
      highlights: [
        'Ultra-precise subsurface scattering on molten gold surfaces',
        'Micro-texture fidelity resembling 8K RED macro camera captures',
        'Zero-gravity fluid simulation seamlessly transitioning into haute couture fabric'
      ],
      mediaItems: [
        { type: 'image', url: fashionGold, caption: 'Key Visual: The Molten Silk Silhouette' },
        { type: 'image', url: productGold, caption: 'Product visual: Amber bottle encased in molten brass' }
      ]
    },
    featured: true
  },
  {
    id: 'project-resonance',
    number: '03',
    title: 'CHRONOS: ECHOES IN LIGHT',
    category: 'AI MUSIC VIDEO',
    tagline: 'An audiovisual symphony synchronizing synthetic light architecture to modular synths.',
    year: '2026',
    client: 'Ghostly International Collective',
    role: 'Audiovisual Director & Lead Video Editor',
    duration: '03:45',
    thumbnail: envGold,
    heroMedia: {
      type: 'video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      poster: envGold
    },
    idea: 'Visualizing acoustic frequencies as expanding volumetric monoliths that crumble and reconstruct in mathematical tempo.',
    story: 'A subterranean cathedral where each piano key activates pillars of molten light, illuminating ancient monolithic glyphs.',
    process: 'Extracted audio MIDI stems and mapped velocity curves to prompt weights and camera zoom coordinates in TouchDesigner and ComfyUI for frame-perfect musical synchronicity.',
    tools: ['ComfyUI', 'Runway Gen-3', 'Premiere Pro', 'After Effects', 'Ableton Live'],
    finalResult: {
      overview: 'Achieved complete audio-reactive cohesion where visual pacing directly mirrored acoustic tension and release.',
      highlights: [
        'MIDI-driven latency-free lighting triggers',
        'Organic transformation of stone surfaces into liquid gold',
        'Over 1.2M views on electronic music channels'
      ],
      mediaItems: [
        { type: 'image', url: envGold, caption: 'Frequency chamber at peak resonance' }
      ]
    },
    featured: true
  },
  {
    id: 'project-zenith',
    number: '04',
    title: 'HORIZON CHRONOMETER',
    category: 'AI PRODUCT VIDEO',
    tagline: 'Precision mechanical watch visual showcasing impossible macro physics.',
    year: '2026',
    client: 'Vanguard Horology Geneva',
    role: 'AI Video Creator & Product Editor',
    duration: '00:30',
    thumbnail: productGold,
    heroMedia: {
      type: 'video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      poster: productGold
    },
    idea: 'Showcasing the inner tourbillon movement of a luxury timepiece passing through microscopic gravity waves.',
    story: 'Extreme close-up flight inside the ruby gears, sapphire crystals, and brushed titanium plates of a master horology watch.',
    process: 'Created photoreal metallic CAD-prompted anchor frames in Flux.1 and Sora, animated camera track-ins using Kling Pro, and assembled the multi-shot sequence with ticking audio sound design.',
    tools: ['Flux.1', 'Kling Pro', 'Premiere Pro', 'Photoshop'],
    finalResult: {
      overview: 'Delivered in dual 16:9 widescreen and 9:16 vertical formats for luxury timepiece marketing displays.',
      highlights: [
        'Sub-millimeter gear escapement motion fidelity',
        'Reflective sapphire crystal glare matching real studio lighting',
        'High-impact sound design with mechanical ticking and acoustic bass drops'
      ],
      mediaItems: [
        { type: 'image', url: productGold, caption: 'Tourbillon cage illuminated by rim light' }
      ]
    },
    featured: false
  },
  {
    id: 'project-sol-pulse',
    number: '05',
    title: 'THE DUNE DRIFT',
    category: 'AI SOCIAL CONTENT',
    tagline: 'High-energy vertical short-form cinematic edit crafted for viral engagement.',
    year: '2026',
    client: 'Future Motion Lab',
    role: 'AI Video Editor & Motion Designer',
    duration: '00:22',
    thumbnail: fashionGold,
    heroMedia: {
      type: 'video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      poster: fashionGold
    },
    idea: 'Speed-ramped cinematic visual hooks designed to achieve immediate 3-second retention on TikTok and Instagram Reels.',
    story: 'A cybernetic nomad riding gravitational waves across a neon-infused desert storm.',
    process: 'Combined rapid 0.3s shot cuts, dynamic whip pans generated in Kling, matched action transitions, and heavy bass drops in Premiere Pro.',
    tools: ['Kling', 'Premiere Pro', 'CapCut Pro', 'After Effects'],
    finalResult: {
      overview: 'Over 2.8M views across TikTok and Reels with a 78% average watch time.',
      highlights: [
        'Optimized for mobile vertical 9:16 viewing',
        'Seamless loop transition at the start and end',
        'Dynamic text typography overlays with cinematic kinetic motion'
      ],
      mediaItems: [
        { type: 'image', url: fashionGold, caption: 'Vertical hero frame: Desert nomad in motion' }
      ]
    },
    featured: false
  },
  {
    id: 'project-archivist',
    number: '06',
    title: 'THE BRASS ASCETIC',
    category: 'AI CINEMATIC EDIT',
    tagline: 'Precision character continuity and dramatic editorial montage.',
    year: '2026',
    client: 'Anthology of Machine Mythologies',
    role: 'Director, AI Video Creator & Editor',
    duration: '02:30',
    thumbnail: cyberMonk,
    heroMedia: {
      type: 'video',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      poster: cyberMonk
    },
    idea: 'Fusing Byzantine iconography, Tibetan metalcraft, and cybernetic cranial implants into an emotional narrative edit.',
    story: 'In an orbital sanctuary, the Custodian maintains memory cylinders of forgotten human poetry, reciting verses into copper resonators that pulse with golden light.',
    process: 'Constructed multi-angle IP-Adapter reference sheets for character consistency across all facial expressions and lighting schemes. Rendered subtle eye saccades and micro-expressions using advanced neural motion warping.',
    tools: ['Midjourney', 'ComfyUI', 'Kling', 'Premiere Pro', 'DaVinci Resolve'],
    finalResult: {
      overview: 'Demonstrated complete visual identity and anatomical consistency across varying focal lengths from extreme macro eye closeups to wide ritual altar ceremonies.',
      highlights: [
        'Consistent brass filigree patterns across 100% of camera angles',
        'Realistic eye micro-motions and skin pore subsurface scattering',
        'Custom ceremonial acoustic soundscape'
      ],
      mediaItems: [
        { type: 'image', url: cyberMonk, caption: 'Hero Portrait: The Brass Ascetic in ceremonial meditation' },
        { type: 'image', url: envGold, caption: 'Ceremonial chamber illuminated by golden light' }
      ]
    },
    featured: false
  }
];

// 2. WHAT I DO WITH AI (Services)
export const WHAT_I_DO_SERVICES: WhatIDoService[] = [
  {
    id: 'ai-video-creation',
    number: '01',
    title: 'AI VIDEO CREATION',
    summary: 'Turning ideas and concepts into cinematic AI-generated video.',
    description: 'Developing complete visual concepts from script to screen. Generating high-resolution cinematic sequences with realistic motion, dynamic camera angles, and atmospheric lighting.',
    deliverables: [
      'High-retention cinematic trailers & short films',
      'Frame-to-frame character and scene consistency',
      '4K upscaled delivery in 16:9 or 2.39:1 anamorphic formats',
      'Custom motion prompt architectures'
    ],
    tools: ['Runway Gen-3', 'Kling', 'Sora', 'ComfyUI'],
    image: heroSciFi
  },
  {
    id: 'ai-video-editing',
    number: '02',
    title: 'AI VIDEO EDITING',
    summary: 'Transforming raw AI-generated footage into polished professional content.',
    description: 'Raw AI footage is inherently imperfect. Through selective cutting, speed ramping, optical flow stabilization, and montage pacing, raw clips become finished film sequences.',
    deliverables: [
      'Narrative rhythm, shot pacing, and matched cuts',
      'Optical flow stabilization & artifact removal',
      'Master color grading and golden-hour tone mapping',
      'Multichannel audio mixing and sound design'
    ],
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Topaz Video AI'],
    image: fashionGold
  },
  {
    id: 'ai-commercials',
    number: '03',
    title: 'AI COMMERCIALS',
    summary: 'Creating cinematic AI-powered advertisements and product campaigns.',
    description: 'Commercial direction that bypasses physical filming constraints while delivering luxury-tier production value for perfume, automotive, high-tech, and fashion brands.',
    deliverables: [
      'Impossible camera motions & macro fluid visual effects',
      'Rapid campaign iteration with photorealistic fidelity',
      'Multi-platform aspect ratios (9:16 vertical + 16:9 broadcast)',
      'Digital-first campaign visual identity'
    ],
    tools: ['Flux.1', 'Runway Gen-3', 'Premiere Pro', 'Sora'],
    image: productGold
  },
  {
    id: 'ai-storytelling',
    number: '04',
    title: 'AI STORYTELLING',
    summary: 'Building characters, worlds and narratives using generative video.',
    description: 'Human narrative vision meets machine synthesis. Scriptwriting, cinematic storyboards, pacing architectures, and emotional character arcs that captivate audiences.',
    deliverables: [
      'Cinematic scriptwriting & treatment development',
      'Visual storyboards and tone bibles',
      'Pacing curves and dynamic camera choreography',
      'Narrative voiceover writing & voice direction'
    ],
    tools: ['ElevenLabs', 'ComfyUI', 'Premiere Pro', 'Midjourney'],
    image: cyberMonk
  },
  {
    id: 'ai-character-world-building',
    number: '05',
    title: 'AI CHARACTER & WORLD BUILDING',
    summary: 'Creating unique characters, environments and visual worlds.',
    description: 'Developing persistent, multi-angle fictional characters and architecturally consistent imaginary worlds across dozens of interconnected scenes.',
    deliverables: [
      'Multi-angle character turnarounds & identity models',
      '360° architectural concept guides & environment bibles',
      'Prop & costume design specifications',
      'Visual continuity documentation'
    ],
    tools: ['Midjourney', 'ComfyUI IP-Adapter', 'Flux.1', 'Photoshop'],
    image: envGold
  },
  {
    id: 'ai-social-media-content',
    number: '06',
    title: 'AI SOCIAL MEDIA CONTENT',
    summary: 'Creating short-form cinematic content for social platforms.',
    description: 'Crafting high-impact 9:16 vertical videos with explosive opening hooks, kinetic typography, and audio-reactive pacing engineered for viral engagement.',
    deliverables: [
      'Vertical 9:16 Reels, TikTok & Shorts formats',
      'Retention-focused 3-second opening visual hooks',
      'Seamless looping transitions',
      'Kinetic typography & dynamic subtitles'
    ],
    tools: ['Kling Pro', 'Premiere Pro', 'CapCut Pro', 'After Effects'],
    image: fashionGold
  }
];

// 3. FROM AI GENERATION TO FINAL CUT Workflow
export const WORKFLOW_STAGES = [
  { step: '01', title: 'IDEA', subtitle: 'Concept & Brief', desc: 'Narrative conception, aesthetic guardrails, visual moodboards, and director’s treatment.' },
  { step: '02', title: 'AI GENERATION', subtitle: 'Shot Creation', desc: 'Prompt engineering, custom model checkpoints, and neural motion video generation.' },
  { step: '03', title: 'EDITING', subtitle: 'Pacing & Montage', desc: 'Selecting best takes, trimming artifacts, speed ramping, and building emotional rhythm.' },
  { step: '04', title: 'SOUND DESIGN', subtitle: 'Acoustic Architecture', desc: 'Foley, atmospheric room tones, bass drops, and custom-composed score synchronization.' },
  { step: '05', title: 'COLOR', subtitle: 'Cinematic Grade', desc: 'Balancing black points, golden-hour tone curves, film grain emulations, and LUT mastering.' },
  { step: '06', title: 'FINAL VIDEO', subtitle: 'Master Delivery', desc: 'High-bitrate 4K encoding, aspect ratio deliverables, and theatrical-grade presentation.' },
];

export const WORKFLOW_HUMAN_CRAFT = [
  { role: 'Creative Direction', description: 'Establishing lighting logic, camera lenses, costume language, and cinematic references.' },
  { role: 'Shot Selection', description: 'Curating the single best frame sequence out of dozens of generative seed candidates.' },
  { role: 'Editing & Pacing', description: 'Constructing narrative momentum, cutting on action, and removing synthetic jitter.' },
  { role: 'Sound Design', description: 'Layering tactile foley, sub-bass rumbles, and acoustic depth that AI cannot generate.' },
  { role: 'Color Grading', description: 'Unifying disparate neural outputs into one cohesive anamorphic color world.' },
  { role: 'Visual Effects & Clean-up', description: 'Stabilizing temporal artifacts, fixing hand anomalies, and blending optical flares.' },
];

// 4. SEE THE EDIT (Interactive Comparison Data)
export const SEE_THE_EDIT_SAMPLES: EditComparisonItem[] = [
  {
    id: 'edit-1',
    title: 'THE OBSIDIAN COURIER // DESERT SEQUENCE',
    category: 'AI SHORT FILM',
    description: 'Notice how the raw AI generation has inconsistent motion drift and flat digital lighting. Through optical flow re-timing, golden tone grading, atmospheric grain, and layered acoustic sound, it becomes cinema.',
    rawLabel: 'RAW AI GENERATION',
    finalLabel: 'FINAL EDIT',
    rawVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    finalVideoUrl: 'https://res.cloudinary.com/r47dziu3/video/upload/v1790374824/AI_filmmaker_showreel_sequences_20260925231912.mp4',
    rawPoster: heroSciFi,
    finalPoster: heroSciFi,
    breakdown: {
      aiGen: 'Kling 1.5 prompt-to-video with heavy camera forward drift prompt.',
      creativeDirection: 'Framed with 35mm anamorphic ratio, low-angle horizon line.',
      editing: 'Trimmed 2.4s of head-jitter, applied 120% speed ramp on impact beat.',
      color: 'Custom DaVinci Resolve gold/obsidian split-toning with 35mm 500T film grain.',
      soundDesign: 'Synthesizer sub-bass drone, wind whistle, and heavy boots in sand foley.',
      vfx: 'Optical stabilization in After Effects to remove synthetic micro-wobble.'
    }
  },
  {
    id: 'edit-2',
    title: 'AURELIA // ZERO GRAVITY GOLDEN AMBER',
    category: 'AI COMMERCIAL',
    description: 'Raw diffusion struggled with viscosity physics. Through dynamic time-remapping, multi-layer compositing, and pristine macro audio, the shot transformed into luxury perfection.',
    rawLabel: 'RAW AI GENERATION',
    finalLabel: 'FINAL EDIT',
    rawVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    finalVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    rawPoster: productGold,
    finalPoster: productGold,
    breakdown: {
      aiGen: 'Flux.1 still frame animated into 4-second motion vector with Runway Gen-3.',
      creativeDirection: 'Macro studio lighting inspired by Cartier and Tom Ford cinematography.',
      editing: 'Cut on the exact droplet apex, matched to rhythmic heartbeat audio swell.',
      color: 'Deep obsidian blacks, saturated 24k gold highlights with soft halation.',
      soundDesign: 'Acoustic glass ping, resonant low-end chime, and delicate fluid ripple.',
      vfx: 'Subsurface scattering enhancement and lens flare tracking.'
    }
  },
  {
    id: 'edit-3',
    title: 'THE SACRED ARCHIVIST // TEMPLE AWAKENING',
    category: 'AI CINEMATIC EDIT',
    description: 'Transforming a static character portrait into a moving, breathing performance through micro-motion timing, eye light speculars, and resonant Tibetan bowl acoustics.',
    rawLabel: 'RAW AI GENERATION',
    finalLabel: 'FINAL EDIT',
    rawVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    finalVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    rawPoster: cyberMonk,
    finalPoster: cyberMonk,
    breakdown: {
      aiGen: 'Midjourney v6.1 character seed brought to life via Runway Gen-3 camera push.',
      creativeDirection: 'Sacred brass iconography paired with cyberpunk cybernetic headwear.',
      editing: 'Held on steady breath beat, seamless cut into wide architectural reveal.',
      color: 'Warm candlelight brass balance against cold deep slate blue shadows.',
      soundDesign: 'Metallic resonance hum, ambient monastery reverb, and breathing foley.',
      vfx: 'Added realistic eye specular reflections to eliminate the "AI stare".'
    }
  }
];

// 5. WHAT I CREATE (Categories with hover preview)
export const WHAT_I_CREATE_CATEGORIES: CategoryPreview[] = [
  {
    category: 'AI SHORT FILMS',
    tagline: 'High-concept narratives with emotional character arcs',
    description: 'Sci-fi epics, psychological thrillers, and speculative mythology films produced end-to-end with generative tools and theatrical editing.',
    sampleVideo: 'https://res.cloudinary.com/r47dziu3/video/upload/v1790374824/AI_filmmaker_showreel_sequences_20260925231912.mp4',
    samplePoster: heroSciFi,
    format: '2.39:1 Anamorphic Cinema',
    ratio: '2.39:1'
  },
  {
    category: 'AI COMMERCIALS',
    tagline: 'Luxury, tech, and automotive advertising campaigns',
    description: 'Impossible product visual effects, macro fluid dynamics, and futuristic automotive visuals tailored for forward-thinking brands.',
    sampleVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    samplePoster: fashionGold,
    format: '16:9 Broadcast & 9:16 Social',
    ratio: '16:9'
  },
  {
    category: 'AI MUSIC VIDEOS',
    tagline: 'Hypnotic audiovisual synchronization and surrealism',
    description: 'Music-reactive world transformations, psychedelic architecture, and beat-matched pacing created for electronic, ambient, and indie artists.',
    sampleVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    samplePoster: envGold,
    format: '2.39:1 Cinema & 1:1 Square',
    ratio: '2.39:1'
  },
  {
    category: 'AI PRODUCT VIDEOS',
    tagline: 'Impossible camera angles and macro precision',
    description: 'Showcasing industrial design, timepieces, luxury cosmetics, and conceptual tech hardware without physical manufacturing constraints.',
    sampleVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    samplePoster: productGold,
    format: '16:9 4K UHD Master',
    ratio: '16:9'
  },
  {
    category: 'AI SOCIAL VIDEOS',
    tagline: 'High-retention 9:16 vertical content for Instagram & TikTok',
    description: 'Engineered for viral engagement with 3-second hook mechanics, kinetic typography, dynamic whip pans, and seamless loops.',
    sampleVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    samplePoster: fashionGold,
    format: '9:16 Mobile Vertical',
    ratio: '9:16'
  },
  {
    category: 'AI CINEMATIC STORIES',
    tagline: 'Deep worldbuilding, persistent characters, and lore',
    description: 'Serial storytelling, visual novels, and worldbuilding documentaries that introduce persistent characters and imaginary civilisations.',
    sampleVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    samplePoster: cyberMonk,
    format: '2.39:1 Narrative Cut',
    ratio: '2.39:1'
  }
];

// 6. FEATURED AI FILM
export const FEATURED_FILM = {
  title: 'THE LAST JOURNEY',
  subheading: 'Official Festival Selection · Autonomous AI Narrative Film',
  duration: '04:18',
  year: '2026',
  aspectRatio: '2.39:1 Anamorphic',
  videoUrl: 'https://res.cloudinary.com/r47dziu3/video/upload/v1790445008/watch_video.mp4',
  poster: heroSciFi,
  description: 'Centuries after atmospheric collapse, a lone courier traverses the Obsidian Expanse to reignite the Sol-Core beacon. Guided only by acoustic resonance relics, she must confront the mirages left behind by ancient terraformers.',
  roles: [
    { title: 'AI VIDEO CREATION', detail: 'Custom LoRA checkpoints, prompt architecture, neural camera paths' },
    { title: 'CREATIVE DIRECTION', detail: 'Visual tone bible, 70mm lens references, golden-hour lighting language' },
    { title: 'VIDEO EDITING', detail: 'Shot curation, montage rhythm, speed ramping, temporal stabilization' },
    { title: 'SOUND DESIGN', detail: 'Sub-bass atmospheric drone, spatial acoustic foley, voiceover mastering' }
  ],
  awards: [
    'Zurich AI Film Festival 2026 — Winner, Best Cinematography',
    'Synthetic Cinema Showcase — Official Selection',
    'Future Vision Paris — Outstanding Editorial Craft'
  ]
};

// 7. AI VISUAL DEVELOPMENT
export const VISUAL_DEV_GALLERY: VisualDevItem[] = [
  {
    id: 'vis-1',
    title: 'The Brass Custodian // Master Turnaround',
    category: 'Character Concept',
    description: 'Full-profile character study exploring sacred brass filigree, subdermal acoustic ports, and weathered ceremonial habits.',
    image: cyberMonk,
    aspectRatio: '3:4',
    tools: 'Midjourney v6.1 + ComfyUI IP-Adapter',
    seed: '84920418'
  },
  {
    id: 'vis-2',
    title: 'The Obsidian Spire at Twilight',
    category: 'Environment Concept',
    description: 'Atmospheric terraforming spire anchoring into obsidian salt flats under low golden-hour radiation.',
    image: heroSciFi,
    aspectRatio: '16:9',
    tools: 'Flux.1 Dev + ControlNet',
    seed: '99201452'
  },
  {
    id: 'vis-3',
    title: 'Molten Silk Haute Couture Movement',
    category: 'Cinematic Frame',
    description: 'Dynamic textile physics simulation study capturing zero-gravity amber silk reacting to thermal air currents.',
    image: fashionGold,
    aspectRatio: '4:3',
    tools: 'Midjourney v6.1 + LoRA',
    seed: '19482012'
  },
  {
    id: 'vis-4',
    title: 'Resonance Vessel Chronometer',
    category: 'Product Concept',
    description: 'Precision luxury timepiece featuring an exposed tourbillon cage encased in sculpted aged bronze and obsidian sapphire.',
    image: productGold,
    aspectRatio: '1:1',
    tools: 'Flux.1 Pro',
    seed: '44910283'
  },
  {
    id: 'vis-5',
    title: 'Subterranean Frequency Chamber',
    category: 'Storyboard',
    description: 'Beat 14 storyboard keyframe establishing the acoustic resonance altar before the light beams awaken.',
    image: envGold,
    aspectRatio: '16:9',
    tools: 'Midjourney + Photoshop Layout',
    seed: '58201948'
  },
  {
    id: 'vis-6',
    title: 'Optical Aberration & Flare Benchmark',
    category: 'Visual Experiment',
    description: 'Testing vintage anamorphic horizontal streak flares and edge falloff across neural motion keyframes.',
    image: heroSciFi,
    aspectRatio: '2.39:1',
    tools: 'Runway Gen-3 + After Effects',
    seed: '73921004'
  }
];

// 8. AI TOOLKIT
export const AI_TOOLKIT_ITEMS: ToolkitTool[] = [
  { name: 'Kling', type: 'AI Video Engine', description: 'Advanced physics, dynamic camera motions, and high-framerate realistic character actions.', primaryUse: 'Cinematic motion & camera pans' },
  { name: 'Runway', type: 'AI Video Engine', description: 'Industry-standard Gen-3 video diffusion for atmospheric landscapes, slow-motion fluids, and lighting.', primaryUse: 'Atmospheric generation & camera choreography' },
  { name: 'Sora', type: 'AI Video Engine', description: 'High-coherence world physics and multi-subject interaction sequences.', primaryUse: 'World simulation & complex scenes' },
  { name: 'Midjourney', type: 'Generative Image & Concept', description: 'Exceptional artistic composition, editorial lighting, texture nuance, and aesthetic direction.', primaryUse: 'Visual development & keyframe anchors' },
  { name: 'Flux', type: 'Generative Image & Concept', description: 'Cutting-edge open weights for photorealistic anatomy, fine typography, and micro-textures.', primaryUse: 'Photorealistic character & product anchors' },
  { name: 'ComfyUI', type: 'AI Video Engine', description: 'Node-based modular pipeline for LoRA fine-tuning, ControlNets, IP-Adapter consistency, and upscaling.', primaryUse: 'Character consistency & workflow automation' },
  { name: 'Premiere Pro', type: 'Post-Production & Assembly', description: 'Core timeline assembly, montage pacing, speed curves, dialogue cuts, and master delivery.', primaryUse: 'Editorial rhythm, montage & final cut' },
  { name: 'After Effects', type: 'VFX & Motion Design', description: 'Optical flow stabilization, artifact removal, synthetic grain compositing, and lens flares.', primaryUse: 'VFX clean-up, stabilization & motion graphics' },
  { name: 'Photoshop', type: 'Generative Image & Concept', description: 'Keyframe pre-generation matting, texture painting, color balance, and storyboard compositing.', primaryUse: 'Pre-production matting & image clean-up' },
];

// 9. CREATIVE PROCESS (5 Stages)
export const CREATIVE_PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    name: 'CONCEPT',
    summary: 'Develop the idea, story and visual direction.',
    details: 'Every cinematic video begins with a narrative hypothesis. We define the emotional core, visual references, lighting rules, costume language, and cinematic pacing before touching an AI tool.',
    humanCraft: 'Scriptwriting, visual treatment, moodboards, director’s vision',
    tools: ['Concept Treatments', 'Visual Moodboards', 'Style References']
  },
  {
    number: '02',
    name: 'GENERATE',
    summary: 'Create AI-generated visuals and video shots.',
    details: 'Using targeted prompt architectures and fine-tuned models, we generate high-resolution keyframes and translate them into moving video shots with camera momentum and physical realism.',
    humanCraft: 'Seed selection, prompt calibration, motion vector direction',
    tools: ['Runway Gen-3', 'Kling', 'Sora', 'Flux', 'ComfyUI']
  },
  {
    number: '03',
    name: 'DIRECT',
    summary: 'Shape the shots, characters, camera movement and visual storytelling.',
    details: 'AI generation produces raw options, but a director shapes the narrative arc. We enforce character consistency across angles, curate camera focal lengths, and select the precise moments that serve the story.',
    humanCraft: 'Character continuity, lens choice, performance curation',
    tools: ['IP-Adapter', 'ControlNet', 'Multi-Angle Prompts']
  },
  {
    number: '04',
    name: 'EDIT',
    summary: 'Assemble the footage, refine pacing, add sound, color and effects.',
    details: 'This is where raw AI footage becomes a finished film. We trim artifacts, execute speed ramps, align cuts on musical beats, design custom acoustic soundscapes, and color grade in DaVinci Resolve.',
    humanCraft: 'Rhythm, cutting on action, foley sound design, color LUTs, VFX stabilization',
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Ableton']
  },
  {
    number: '05',
    name: 'DELIVER',
    summary: 'Create the final polished cinematic video.',
    details: 'Upscaling through neural temporal models, final mastering in 4K ProRes or web delivery formats, and packaging tailored aspect ratios for theater screens, broadcast, or vertical mobile feeds.',
    humanCraft: 'Quality control, aspect ratio adaptations, master export optimization',
    tools: ['Topaz Video AI', 'Master ProRes 422HQ', '4K Widescreen / 9:16 Vertical']
  }
];

// 10. TESTIMONIALS
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: "Working with Daniel completely redefined how we produce commercial film content. He doesn't just prompt pretty visuals; he edits with the precision and rhythm of an experienced Hollywood director.",
    clientName: 'Camille Laurent',
    role: 'Creative Director',
    company: 'Maison Aurelia Paris',
    year: '2026',
    isPlaceholder: true
  },
  {
    id: 'test-2',
    quote: "Most AI creators generate random 4-second loops that lack narrative connection. Daniel brought a fully realized character universe and delivered a festival-winning short film in three weeks.",
    clientName: 'Marcus Vance',
    role: 'Festival Curator',
    company: 'Vanguard Cinema Forum',
    year: '2026',
    isPlaceholder: true
  },
  {
    id: 'test-3',
    quote: "The speed of AI combined with real video editing craft. The before/after difference between the raw generation and Daniel's final sound-designed cut is extraordinary.",
    clientName: 'Elena Rostova',
    role: 'Head of Marketing',
    company: 'Aetheria Sound Systems',
    year: '2025',
    isPlaceholder: true
  }
];

// 11. AI VIDEOS ARCHIVE (for modal player & showcase)
export const AI_VIDEOS: AIVideo[] = SELECTED_PROJECTS.map((proj) => ({
  id: proj.id,
  title: proj.title,
  type: proj.category,
  category: proj.category,
  duration: proj.duration || '02:00',
  year: proj.year,
  shortDescription: proj.tagline,
  poster: proj.thumbnail,
  videoUrl: proj.heroMedia.url,
  toolsUsed: proj.tools,
  aspectRatio: '2.39:1' as const,
  directorNotes: proj.idea
}));
