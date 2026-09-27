import React, { useState } from 'react';
import { VISUAL_DEV_GALLERY, VisualDevItem } from '../data/portfolioData';
import { Maximize2, Layers } from 'lucide-react';

interface ImageGalleryProps {
  onOpenLightbox: (image: any, index: number) => void;
}

const DEV_CATEGORIES = [
  'ALL',
  'Character Concept',
  'Environment Concept',
  'Storyboard',
  'Cinematic Frame',
  'Product Concept',
  'Visual Experiment',
] as const;

export const ImageGallery: React.FC<ImageGalleryProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredItems =
    activeCategory === 'ALL'
      ? VISUAL_DEV_GALLERY
      : VISUAL_DEV_GALLERY.filter((item) => item.category === activeCategory);

  return (
    <section id="visual-dev" className="py-28 bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#EFECE6]/40 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#B8863B] font-semibold mb-3">
              <span className="w-6 h-[1.5px] bg-[#B8863B]" />
              <span>PRE-PRODUCTION ARCHIVE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white dark:text-white light:text-[#0B0B0B] tracking-tight uppercase">
              AI VISUAL DEVELOPMENT
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
              Every cinematic video begins with rigorous visual development. These character turnarounds, lighting studies, storyboards, and texture benchmarks establish continuity before camera generation begins.
            </p>
            <div className="mt-2 text-xs font-mono text-[#B8863B] uppercase tracking-wider font-semibold">
              SUPPORTING THE VIDEO-PRODUCTION PIPELINE
            </div>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {DEV_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#B8863B] text-black border-[#B8863B] font-bold shadow-[0_0_15px_rgba(184,134,59,0.3)]'
                    : 'bg-[#121212] dark:bg-[#121212] light:bg-white text-neutral-400 dark:text-neutral-400 light:text-neutral-600 border-neutral-800 dark:border-neutral-800 light:border-neutral-300 hover:text-white hover:border-[#B8863B]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid of Visual Dev Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, idx)}
              className="group relative overflow-hidden bg-neutral-950 border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-300 cursor-pointer hover:border-[#B8863B] transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Label */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#B8863B] bg-black/80 backdrop-blur-md px-2.5 py-1 border border-white/10 font-bold">
                    {item.category}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-black/80 text-white flex items-center justify-center border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5 text-[#B8863B]" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <h3 className="font-display font-bold text-base text-white group-hover:text-[#D4A85B] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-300 line-clamp-2 mt-1 leading-snug">
                    {item.description}
                  </p>
                  <div className="mt-2 font-mono text-[10px] text-neutral-400">
                    {item.tools}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
