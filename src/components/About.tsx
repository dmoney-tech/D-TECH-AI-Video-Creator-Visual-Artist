import React from 'react';
import { CREATOR_PROFILE, BRAND } from '../data/portfolioData';
import { Film, Scissors, Sparkles, Wand2, Music, Palette, Check } from 'lucide-react';

interface AboutProps {
  onOpenInquiry: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  const pillars = [
    { title: 'AI Video Generation', desc: 'Synthesizing world environments, high-framerate character actions, and cinematic lighting.' },
    { title: 'Creative Direction', desc: 'Crafting the artistic vision, camera lens selections, framing rules, and visual style guides.' },
    { title: 'Cinematic Storytelling', desc: 'Writing compelling character journeys, narrative beats, and emotional pacing architectures.' },
    { title: 'Video Editing', desc: 'Precision montage, rhythmic speed ramping, matched action cuts, and removing AI motion jitters.' },
    { title: 'Sound Design & Foley', desc: 'Building multi-channel acoustic depth, atmospheric room tone, spatial foley, and score sync.' },
    { title: 'Post-Production & Color', desc: 'Master DaVinci Resolve grading, optical stabilization, film grain emulations, and 4K delivery.' },
  ];

  return (
    <section id="about" className="py-28 bg-[#0B0B0B] dark:bg-[#0B0B0B] light:bg-[#F7F5F0] border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#B8863B] font-semibold mb-3">
            <span className="w-6 h-[1.5px] bg-[#B8863B]" />
            <span>DIRECTOR PROFILE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white dark:text-white light:text-[#0B0B0B] tracking-tight uppercase">
            I'M AN AI VIDEO CREATOR
          </h2>
        </div>

        {/* 2-Column Spread: Portrait & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Creator Portrait (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-950 border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-300 shadow-2xl group">
              <img
                src="https://res.cloudinary.com/r47dziu3/image/upload/v1790377448/WhatsApp_Image_2026-06-25_at_1.51.46_AM.jpg"
                alt="AI Video Creator & Editor portrait"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-[#B8863B] font-mono font-bold block mb-1">
                  AI FILMMAKER & VIDEO EDITOR
                </span>
                <p className="font-display font-extrabold text-2xl text-white">
                  {BRAND.name}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  Autonomous AI Cinema · Commercial Video · Global Delivery
                </p>
              </div>
            </div>
          </div>

          {/* Bio & Core Message (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Core Message Callout */}
            <div className="p-6 bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white border-l-2 border-[#B8863B] border-y border-r border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
              <p className="font-display font-bold text-xl sm:text-2xl text-white dark:text-white light:text-black leading-snug">
                “I use AI to create the visuals, but creative direction and editing turn those visuals into a finished story.”
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
              I am an AI video creator and video editor dedicated to turning ideas and scripts into finished cinematic video content. In a landscape crowded with isolated 4-second AI animations and prompt experiments, I focus on the complete filmmaking discipline: character consistency, intentional camera motion, dramatic narrative arcs, rhythmic editing, and immersive soundscapes.
            </p>

            <p className="text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
              Generative video diffusion is the most versatile virtual camera ever built, but it has no inherent sense of human empathy, pacing, or storytelling. By integrating custom neural pipelines with classical cinematic direction and precision non-linear editing, I transform raw machine generations into polished, broadcast-ready films, commercials, and visual worlds.
            </p>

            {/* 6 Capabilities Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {pillars.map((p) => (
                <div key={p.title} className="p-3 bg-neutral-950/60 dark:bg-neutral-950/60 light:bg-neutral-100 border border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Check className="w-3.5 h-3.5 text-[#B8863B] shrink-0" />
                    <span className="font-mono text-xs text-white dark:text-white light:text-black font-semibold uppercase">
                      {p.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 dark:text-neutral-400 light:text-neutral-600 pl-5 leading-normal">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenInquiry}
                className="px-8 py-3.5 bg-[#B8863B] hover:bg-[#D4A85B] text-black font-semibold text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(184,134,59,0.35)] active:scale-95"
              >
                START A PROJECT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
