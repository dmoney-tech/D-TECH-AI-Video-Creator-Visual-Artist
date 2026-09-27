import React, { useState } from 'react';
import { CREATIVE_PROCESS_STAGES, ProcessStage } from '../data/portfolioData';
import { ArrowRight, Sparkles, Check, ChevronRight } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const activeStage = CREATIVE_PROCESS_STAGES[activeStageIndex];

  return (
    <section id="process" className="py-28 bg-[#0B0B0B] dark:bg-[#0B0B0B] light:bg-[#F7F5F0] border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#B8863B] font-semibold mb-3">
            <span className="w-6 h-[1.5px] bg-[#B8863B]" />
            <span>DIRECTOR’S METHODOLOGY</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white dark:text-white light:text-[#0B0B0B] tracking-tight uppercase">
            HOW I TURN AN IDEA INTO A VIDEO
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 dark:text-neutral-400 light:text-neutral-600 max-w-2xl">
            A structured 5-stage cinematic pipeline taking a concept from initial script to finished, color-graded, sound-designed video.
          </p>
        </div>

        {/* 5 Stage Horizontal Selector Bar with Animated Transition */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {CREATIVE_PROCESS_STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-5 text-left border transition-all duration-300 cursor-pointer relative ${
                  isActive
                    ? 'bg-neutral-900 dark:bg-neutral-900 light:bg-white border-[#B8863B] shadow-[0_0_20px_rgba(184,134,59,0.2)]'
                    : 'bg-neutral-950/40 dark:bg-neutral-950/40 light:bg-neutral-100/70 border-neutral-800 dark:border-neutral-800 light:border-neutral-300 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${
                    isActive ? 'text-[#B8863B]' : 'text-neutral-400'
                  }`}>
                    STAGE {stage.number}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#B8863B]" />}
                </div>

                <h3 className={`font-display font-extrabold text-lg uppercase tracking-tight ${
                  isActive ? 'text-white dark:text-white light:text-black' : 'text-neutral-400 dark:text-neutral-400 light:text-neutral-600'
                }`}>
                  {stage.name}
                </h3>

                <p className="text-[11px] text-neutral-400 dark:text-neutral-400 light:text-neutral-600 line-clamp-2 mt-1 leading-snug">
                  {stage.summary}
                </p>

                {/* Bottom Active Glow Bar */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B8863B]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Deep Dive Card with Animated Transition */}
        <div className="p-8 sm:p-12 bg-neutral-950/80 dark:bg-neutral-950/80 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 relative overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Number, Title, Detailed Description (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm tracking-widest text-[#B8863B] font-bold">
                  STAGE {activeStage.number} // 05
                </span>
                <span className="w-8 h-[1px] bg-[#B8863B]/60" />
                <span className="font-mono text-xs text-neutral-400 uppercase">
                  {activeStage.summary}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-5xl text-white dark:text-white light:text-[#0B0B0B] uppercase">
                {activeStage.number} — {activeStage.name}
              </h3>

              <p className="text-base sm:text-lg text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed">
                {activeStage.details}
              </p>

              {/* Human Craft Element */}
              <div className="p-5 bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-neutral-100 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
                <span className="font-mono text-xs tracking-wider uppercase text-[#B8863B] font-semibold block mb-1">
                  HUMAN EDITORIAL CRAFT:
                </span>
                <p className="text-sm text-neutral-200 dark:text-neutral-200 light:text-neutral-800">
                  {activeStage.humanCraft}
                </p>
              </div>
            </div>

            {/* Right Column: Stage Deliverables & Next Stage Action (5 cols) */}
            <div className="lg:col-span-5 bg-neutral-900/40 dark:bg-neutral-900/40 light:bg-neutral-50 p-6 sm:p-8 border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 space-y-6">
              <div>
                <span className="font-mono text-xs tracking-widest uppercase text-neutral-400 block mb-3">
                  PRIMARY TOOLS & PLATFORMS
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeStage.tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-black/60 dark:bg-black/60 light:bg-white border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 font-mono text-xs text-[#D4A85B]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200 flex items-center justify-between">
                <button
                  onClick={() => setActiveStageIndex((prev) => (prev + 1) % CREATIVE_PROCESS_STAGES.length)}
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#B8863B] hover:text-[#D4A85B] transition-colors cursor-pointer"
                >
                  <span>NEXT STAGE</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <span className="font-mono text-xs text-neutral-500">
                  {activeStageIndex + 1} OF 5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
