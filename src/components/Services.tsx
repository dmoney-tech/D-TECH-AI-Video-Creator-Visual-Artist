import React from 'react';
import { Film, Scissors, Clapperboard, BookOpen, Globe2, Smartphone, Check, ArrowRight } from 'lucide-react';
import { WHAT_I_DO_SERVICES, WhatIDoService } from '../data/portfolioData';

interface ServicesProps {
  onOpenInquiry: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenInquiry }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'ai-video-creation':
        return <Film className="w-5 h-5 text-[#B8863B]" />;
      case 'ai-video-editing':
        return <Scissors className="w-5 h-5 text-[#B8863B]" />;
      case 'ai-commercials':
        return <Clapperboard className="w-5 h-5 text-[#B8863B]" />;
      case 'ai-storytelling':
        return <BookOpen className="w-5 h-5 text-[#B8863B]" />;
      case 'ai-character-world-building':
        return <Globe2 className="w-5 h-5 text-[#B8863B]" />;
      case 'ai-social-media-content':
        return <Smartphone className="w-5 h-5 text-[#B8863B]" />;
      default:
        return <Film className="w-5 h-5 text-[#B8863B]" />;
    }
  };

  return (
    <section id="services" className="py-28 bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#EFECE6]/40 border-t border-neutral-800/40 dark:border-neutral-800/40 light:border-[#EDE7DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#B8863B] font-semibold mb-3">
              <span className="w-5 h-[1.5px] bg-[#B8863B]" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white dark:text-white light:text-[#0B0B0B] tracking-tight uppercase">
              WHAT I DO WITH AI
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
            Bridging cutting-edge generative neural models with precision post-production, sound architecture, and intentional editorial pacing.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHAT_I_DO_SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-[#121212] dark:bg-[#121212] light:bg-white border border-neutral-800/80 dark:border-neutral-800/80 light:border-[#EDE7DC] flex flex-col justify-between group hover:border-[#B8863B] transition-all duration-300 relative shadow-sm hover:shadow-2xl"
            >
              <div>
                {/* Header row with icon & number */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800/60 dark:border-neutral-800/60 light:border-[#EDE7DC]">
                  <div className="p-3 bg-neutral-900 dark:bg-neutral-900 light:bg-[#F7F5F0] border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 group-hover:border-[#B8863B]/60 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="font-mono text-sm tracking-wider text-[#B8863B] font-bold">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white dark:text-white light:text-[#0B0B0B] group-hover:text-[#D4A85B] transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Summary */}
                <p className="text-sm font-semibold text-neutral-300 dark:text-neutral-300 light:text-neutral-800 mb-3">
                  {service.summary}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables Bullet List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-neutral-800/50 dark:border-neutral-800/50 light:border-neutral-200">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#B8863B] font-semibold block mb-2">
                    DELIVERABLES:
                  </span>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300 dark:text-neutral-300 light:text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-[#B8863B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools row & action */}
              <div className="pt-4 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-500">
                  {service.tools.map((t) => (
                    <span key={t}>#{t}</span>
                  ))}
                </div>

                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-1 text-xs font-mono tracking-wider uppercase text-[#B8863B] hover:text-[#D4A85B] transition-colors cursor-pointer"
                >
                  <span>INQUIRE</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
