import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WORKFLOW_STAGES, WORKFLOW_HUMAN_CRAFT } from '../data/portfolioData';

export const FromAiToFinalCut: React.FC = () => {
  return (
    <section id="workflow" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* 5. Section Header: FROM AI GENERATION TO FINAL CUT */}
      <div className="mb-16">
        <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#B8863B] font-semibold mb-3">
          <span className="w-6 h-[1.5px] bg-[#B8863B]" />
          <span>PRODUCTION PIPELINE</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white dark:text-white light:text-[#0B0B0B] tracking-tight uppercase">
          FROM AI GENERATION TO FINAL CUT
        </h2>
        <p className="mt-4 text-base sm:text-lg text-neutral-400 dark:text-neutral-400 light:text-neutral-600 max-w-3xl leading-relaxed">
          AI generation is only the raw clay. The creator shapes the pacing, color, sound architecture, and storytelling that turns raw diffusion into cinema.
        </p>
      </div>

      {/* Workflow Diagram Banner */}
      <div className="mb-16 p-6 sm:p-8 bg-neutral-950/60 dark:bg-neutral-950/60 light:bg-neutral-100 border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-300">
        <div className="flex items-center justify-between mb-4 border-b border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-300 pb-3">
          <span className="font-mono text-xs tracking-widest text-[#B8863B] font-semibold uppercase">
            END-TO-END WORKFLOW SEQUENCE
          </span>
          <span className="text-xs font-mono text-neutral-500">6 PHASES</span>
        </div>

        {/* The 6 steps: IDEA → AI GENERATION → EDITING → SOUND DESIGN → COLOR → FINAL VIDEO */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-2">
          {WORKFLOW_STAGES.map((st, i) => (
            <div key={st.step} className="flex flex-col space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#B8863B] font-bold">{st.step}</span>
                {i < WORKFLOW_STAGES.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-neutral-600 hidden lg:inline" />
                )}
              </div>
              <h4 className="font-display font-bold text-sm text-white dark:text-white light:text-black">
                {st.title}
              </h4>
              <p className="text-[11px] text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Human Craft Explanation Grid */}
      <div>
        <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-[#B8863B] font-semibold mb-6">
          THE HUMAN CRAFT BEYOND THE PROMPT:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WORKFLOW_HUMAN_CRAFT.map((item) => (
            <div
              key={item.role}
              className="p-5 bg-[#121212] dark:bg-[#121212] light:bg-white border border-neutral-800/70 dark:border-neutral-800/70 light:border-neutral-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8863B]" />
                <h4 className="font-bold text-sm text-white dark:text-white light:text-black">
                  {item.role}
                </h4>
              </div>
              <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
