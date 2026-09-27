import React, { useState } from 'react';
import { ArrowUpRight, Play, Film } from 'lucide-react';
import { WHAT_I_CREATE_CATEGORIES, CategoryPreview, SELECTED_PROJECTS, ProjectCaseStudy } from '../data/portfolioData';

interface WhatICreateProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
  onPlayVideo: (project: ProjectCaseStudy) => void;
}

export const WhatICreate: React.FC<WhatICreateProps> = ({
  onSelectProject,
  onPlayVideo,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeCategory = WHAT_I_CREATE_CATEGORIES[selectedIndex];
  // Match with a project from SELECTED_PROJECTS
  const matchedProject = SELECTED_PROJECTS[selectedIndex % SELECTED_PROJECTS.length];

  return (
    <section id="what-i-create" className="py-28 bg-[#0B0B0B] dark:bg-[#0B0B0B] light:bg-[#F7F5F0] border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#B8863B] font-semibold mb-3">
            <span className="w-6 h-[1.5px] bg-[#B8863B]" />
            <span>GENRE & FORMAT SPECTRUM</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white dark:text-white light:text-[#0B0B0B] tracking-tight uppercase">
            WHAT I CREATE
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 dark:text-neutral-400 light:text-neutral-600 max-w-2xl">
            Hover each category below to preview cinematic styles, technical formats, and project treatments.
          </p>
        </div>

        {/* 2-Column Interactive Layout: Categories List (Left) + Dynamic Cinematic Preview (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Categories List (6 cols) */}
          <div className="lg:col-span-6 space-y-3">
            {WHAT_I_CREATE_CATEGORIES.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={item.category}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => setSelectedIndex(idx)}
                  className={`p-6 border transition-all duration-300 cursor-pointer relative ${
                    isSelected
                      ? 'bg-neutral-900/90 dark:bg-neutral-900/90 light:bg-white border-[#B8863B] shadow-[0_0_25px_rgba(184,134,59,0.15)] translate-x-2'
                      : 'bg-neutral-950/40 dark:bg-neutral-950/40 light:bg-neutral-100/70 border-neutral-800/70 dark:border-neutral-800/70 light:border-neutral-300 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#B8863B] font-bold">
                          0{idx + 1}
                        </span>
                        <h3 className={`font-display font-extrabold text-xl sm:text-2xl uppercase tracking-tight transition-colors ${
                          isSelected
                            ? 'text-white dark:text-white light:text-black'
                            : 'text-neutral-400 dark:text-neutral-400 light:text-neutral-600'
                        }`}>
                          {item.category}
                        </h3>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-neutral-400 dark:text-neutral-400 light:text-neutral-600 pl-7">
                        {item.tagline}
                      </p>
                    </div>

                    <ArrowUpRight className={`w-5 h-5 transition-transform ${
                      isSelected ? 'text-[#B8863B] translate-x-1 -translate-y-1' : 'text-neutral-600'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Cinematic Preview (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] sm:aspect-[2.39/1] overflow-hidden bg-black border border-[#B8863B]/60 shadow-2xl group">
              {/* Autoplay Preview Video */}
              <video
                key={activeCategory.sampleVideo}
                src={activeCategory.sampleVideo}
                poster={activeCategory.samplePoster}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter contrast-105"
              />

              {/* Dark Vignette Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Category Info Overlay */}
              <div className="absolute top-4 left-4 z-20">
                <span className="font-mono text-[11px] tracking-widest uppercase text-[#B8863B] bg-black/80 backdrop-blur-md px-3 py-1 border border-[#B8863B]/40 font-bold">
                  {activeCategory.category}
                </span>
              </div>

              {/* Format Tag */}
              <div className="absolute top-4 right-4 z-20 font-mono text-[10px] tracking-wider text-neutral-300 bg-black/80 backdrop-blur-md px-2.5 py-1 border border-white/10 uppercase">
                {activeCategory.format}
              </div>

              {/* Bottom Card Content & Watch Project CTA */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-md">
                  <p className="text-xs text-neutral-300 dark:text-neutral-300 light:text-neutral-200 line-clamp-2 leading-relaxed">
                    {activeCategory.description}
                  </p>
                </div>

                <button
                  onClick={() => onPlayVideo(matchedProject)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#B8863B] hover:bg-[#D4A85B] text-black font-semibold text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(184,134,59,0.35)] shrink-0 active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>WATCH PROJECT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
