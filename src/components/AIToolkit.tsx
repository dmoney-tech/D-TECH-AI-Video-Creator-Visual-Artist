import React from 'react';
import { AI_TOOLKIT_ITEMS } from '../data/portfolioData';
import { Cpu, Film, Sparkles, Sliders } from 'lucide-react';

export const AIToolkit: React.FC = () => {
  return (
    <section id="toolkit" className="py-24 max-w-7xl mx-auto px-6 sm:px-8 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#B8863B] font-semibold mb-3">
            <span className="w-6 h-[1.5px] bg-[#B8863B]" />
            <span>PRODUCTION ARSENAL</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white dark:text-white light:text-[#0B0B0B] tracking-tight uppercase">
            AI TOOLKIT
          </h2>
        </div>
        <p className="max-w-md text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
          The curated stack powering neural generation, character consistency, dynamic camera motion, and master post-production.
        </p>
      </div>

      {/* Editorial Tool Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {AI_TOOLKIT_ITEMS.map((tool, idx) => (
          <div
            key={tool.name}
            className="p-7 bg-neutral-950/40 dark:bg-neutral-950/40 light:bg-white border border-neutral-800/70 dark:border-neutral-800/70 light:border-neutral-200 hover:border-[#B8863B] transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-[#B8863B] font-bold">
                0{idx + 1}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 dark:text-neutral-400 light:text-neutral-600 border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 px-2.5 py-0.5">
                {tool.type}
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl text-white dark:text-white light:text-black group-hover:text-[#D4A85B] transition-colors">
              {tool.name}
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
              {tool.description}
            </p>

            <div className="mt-5 pt-3 border-t border-neutral-800/50 dark:border-neutral-800/50 light:border-neutral-200 flex items-center justify-between text-[11px] font-mono">
              <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-500 uppercase">ROLE:</span>
              <span className="text-[#B8863B] font-medium">{tool.primaryUse}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
