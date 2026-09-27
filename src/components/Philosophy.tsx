import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="why-ai-video" className="py-32 relative overflow-hidden border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#B8863B]/10 blur-[160px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Subtle Section Kicker */}
        <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#B8863B] font-semibold mb-6">
          <span className="w-8 h-[1px] bg-[#B8863B]" />
          <span>EDITORIAL PERSPECTIVE</span>
          <span className="w-8 h-[1px] bg-[#B8863B]" />
        </div>

        {/* Heading: WHY AI VIDEO? */}
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white dark:text-white light:text-[#0B0B0B] tracking-tight uppercase mb-8">
          WHY AI VIDEO?
        </h2>

        {/* Core Emphasized Statement */}
        <div className="my-8">
          <p className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] uppercase leading-tight text-white dark:text-white light:text-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A85B] via-[#B8863B] to-[#6F4A24]">
              AI-GENERATED.
            </span>{' '}
            <br />
            <span>HUMAN-DIRECTED.</span>
          </p>
        </div>

        {/* Short Statement */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-neutral-300 dark:text-neutral-300 light:text-neutral-700 leading-relaxed font-normal mt-8">
          Artificial intelligence allows ideas to move from concept to visual storytelling faster than ever in the history of cinema. Yet neural networks possess neither emotional intent nor editorial taste. Creating a video that resonates requires human creative direction, shot selection, dramatic pacing, sound design, and post-production.
        </p>

        <div className="mt-10 inline-flex items-center gap-3 text-xs tracking-widest uppercase font-mono text-neutral-400">
          <span className="text-[#B8863B]">CREATED WITH AI</span>
          <span>·</span>
          <span className="text-[#B8863B]">CRAFTED THROUGH EDITING</span>
        </div>
      </div>
    </section>
  );
};
