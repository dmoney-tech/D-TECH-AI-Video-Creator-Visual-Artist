import React, { useState } from 'react';
import { Play, Sparkles, Megaphone, PenTool, ArrowRight } from 'lucide-react';
import { AIVideo } from '../data/portfolioData';

// Generated photorealistic project images matching the reference design
import travelImg from '../assets/images/cinematic_travel_edit_1790536542978.jpg';
import portraitImg from '../assets/images/ai_portrait_series_1790536553921.jpg';
import socialImg from '../assets/images/social_media_content_1790536564574.jpg';
import brandingImg from '../assets/images/brand_identity_design_1790536578519.jpg';
import youtubeImg from '../assets/images/youtube_video_edit_1790536589692.jpg';
import creativeImg from '../assets/images/ai_creative_visuals_1790536599592.jpg';

export interface FeaturedProject {
  id: string;
  title: string;
  category: 'Video Editing' | 'AI Content' | 'Social Media' | 'Branding';
  badgeLabel: string;
  badgeType: 'video' | 'ai' | 'social' | 'branding';
  description: string;
  image: string;
  videoUrl: string;
  duration?: string;
  year?: string;
}

export const FEATURED_PROJECTS_DATA: FeaturedProject[] = [
  {
    id: 'cinematic-travel-edit',
    title: 'Cinematic Travel Edit',
    category: 'Video Editing',
    badgeLabel: 'Video Editing',
    badgeType: 'video',
    description: 'A short cinematic video that captures the beauty of nature and adventure.',
    image: travelImg,
    videoUrl: 'https://res.cloudinary.com/r47dziu3/video/upload/v1790445008/watch_video.mp4',
    duration: '01:45',
    year: '2026',
  },
  {
    id: 'ai-portrait-series',
    title: 'AI Portrait Series',
    category: 'AI Content',
    badgeLabel: 'AI Content',
    badgeType: 'ai',
    description: 'Stunning AI-generated portraits with unique styles and creativity.',
    image: portraitImg,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    duration: '00:50',
    year: '2026',
  },
  {
    id: 'social-media-content',
    title: 'Social Media Content',
    category: 'Social Media',
    badgeLabel: 'Social Media',
    badgeType: 'social',
    description: 'Scroll-stopping videos and graphics designed for engagement.',
    image: socialImg,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    duration: '00:30',
    year: '2026',
  },
  {
    id: 'brand-identity-design',
    title: 'Brand Identity Design',
    category: 'Branding',
    badgeLabel: 'Branding',
    badgeType: 'branding',
    description: 'Modern and clean brand visuals for businesses and creators.',
    image: brandingImg,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    duration: '01:15',
    year: '2026',
  },
  {
    id: 'youtube-video-edit',
    title: 'YouTube Video Edit',
    category: 'Video Editing',
    badgeLabel: 'Video Editing',
    badgeType: 'video',
    description: 'Engaging edits with smooth transitions, color grading and sound design.',
    image: youtubeImg,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: '02:30',
    year: '2026',
  },
  {
    id: 'ai-creative-visuals',
    title: 'AI Creative Visuals',
    category: 'AI Content',
    badgeLabel: 'AI Content',
    badgeType: 'ai',
    description: 'Conceptual AI visuals for brands, products and personal projects.',
    image: creativeImg,
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    duration: '01:20',
    year: '2026',
  },
];

const CATEGORIES = [
  'All',
  'Video Editing',
  'AI Content',
  'Social Media',
  'Branding',
] as const;

type CategoryType = typeof CATEGORIES[number];

interface FeaturedProjectsProps {
  onPlayVideo: (video: AIVideo) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onPlayVideo }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  const filteredProjects = activeCategory === 'All'
    ? FEATURED_PROJECTS_DATA
    : FEATURED_PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const handleCardClick = (project: FeaturedProject) => {
    onPlayVideo({
      id: project.id,
      title: project.title,
      type: project.category,
      category: project.category,
      duration: project.duration || '01:30',
      year: project.year || '2026',
      shortDescription: project.description,
      poster: project.image,
      videoUrl: project.videoUrl,
      toolsUsed: ['Kling', 'Runway', 'Premiere Pro', 'DaVinci Resolve'],
      aspectRatio: '16:9',
      directorNotes: project.description,
    });
  };

  const renderBadgeIcon = (type: FeaturedProject['badgeType']) => {
    switch (type) {
      case 'video':
        return <Play className="w-2.5 h-2.5 fill-[#D4A85B] text-[#D4A85B]" />;
      case 'ai':
        return <Sparkles className="w-2.5 h-2.5 text-[#D4A85B]" />;
      case 'social':
        return <Megaphone className="w-2.5 h-2.5 text-[#D4A85B]" />;
      case 'branding':
        return <PenTool className="w-2.5 h-2.5 text-[#D4A85B]" />;
    }
  };

  return (
    <section
      id="ai-videos"
      className="relative py-24 sm:py-32 px-6 sm:px-8 w-full bg-[#120D07] overflow-hidden border-t border-[#B8863B]/20"
    >
      {/* Scroll anchor aliases for smooth navigation */}
      <span id="projects" className="absolute -top-24" aria-hidden="true" />
      <span id="work" className="absolute -top-24" aria-hidden="true" />

      {/* Atmospheric Golden Brown Lighting Background */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-[#B8863B]/10 blur-[150px] opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-[-100px] w-[500px] h-[500px] rounded-full bg-[#8C6226]/12 blur-[140px] opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 w-[450px] h-[450px] rounded-full bg-[#D4A85B]/10 blur-[140px] opacity-50"
        aria-hidden="true"
      />

      {/* Subtle Golden Tech Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #B8863B 1px, transparent 1px), linear-gradient(to bottom, #B8863B 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />

      {/* Subtle light sweep beam */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4A85B]/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Section Header with Eyebrow, Heading & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          {/* Left Column: Titles */}
          <div className="max-w-xl">
            {/* Section Eyebrow */}
            <div className="text-[11px] font-mono font-semibold tracking-[0.2em] text-[#D4A85B] uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8863B] shadow-[0_0_6px_#B8863B]" />
              <span>MY WORK</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-[34px] text-white tracking-tight leading-tight">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D89F] via-[#D4A85B] to-[#B8863B]">
                Projects
              </span>
            </h2>

            {/* Supporting Description */}
            <p className="mt-2.5 text-xs sm:text-[13px] text-[#D5C7B5]/85 leading-relaxed max-w-lg">
              A collection of creative projects where I turn ideas into powerful visual stories.
              From cinematic edits to AI-enhanced content, every project is built with purpose and passion.
            </p>
          </div>

          {/* Right Column: Category Filters Pill Bar */}
          <div className="flex items-center overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            <div className="inline-flex items-center p-1 rounded-full bg-[#1C140C]/90 border border-[#B8863B]/30 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] gap-1 shrink-0">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-medium tracking-normal transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#B8863B] text-black font-semibold shadow-[0_0_15px_rgba(184,134,59,0.5)] scale-100'
                        : 'text-[#C4B5A0] hover:text-white hover:bg-white/5 active:scale-95'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3-Column Responsive Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              className="group relative flex flex-col rounded-3xl overflow-hidden bg-gradient-to-b from-[#1C140C]/95 via-[#150E07]/95 to-[#0F0B06]/98 border border-[#B8863B]/25 hover:border-[#D4A85B]/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_40px_rgba(184,134,59,0.22)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer backdrop-blur-xl"
            >
              {/* Golden Energy Border Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-inset ring-[#D4A85B]/40 shadow-[inset_0_0_20px_rgba(184,134,59,0.15)]" />

              {/* Card Image Visual Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Smooth Dark Gradient Overlay for optimal readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#150E07] via-black/35 to-black/15 pointer-events-none" />

                {/* Top-Left Category Glass Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#181008]/85 backdrop-blur-md border border-[#B8863B]/35 text-[10px] sm:text-[11px] font-medium tracking-wide text-[#F5D89F] shadow-[0_0_10px_rgba(184,134,59,0.2)] group-hover:border-[#D4A85B]/50 group-hover:shadow-[0_0_15px_rgba(184,134,59,0.4)] transition-all duration-200">
                  {renderBadgeIcon(project.badgeType)}
                  <span>{project.badgeLabel}</span>
                </div>
              </div>

              {/* Bottom Card Content: Title, Description & Circular Arrow Button */}
              <div className="p-4 sm:p-5 flex items-end justify-between gap-3 mt-auto">
                <div className="flex-1 min-w-0 pr-2">
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-[#F5D89F] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-xs text-[#A89E8E] leading-normal line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Circular Glass Arrow Button with Glowing Border */}
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[#2A1D0E]/80 group-hover:bg-[#B8863B] text-[#D4A85B] group-hover:text-black border border-[#B8863B]/50 group-hover:border-[#D4A85B] transition-all duration-300 backdrop-blur-md shadow-[0_0_12px_rgba(184,134,59,0.25)] group-hover:shadow-[0_0_18px_rgba(212,168,91,0.6)] shrink-0 active:scale-95"
                  aria-label={`Open ${project.title}`}
                >
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
