import React from 'react';
import { ArrowUpRight, Film, Mail, Sparkles } from 'lucide-react';
import { BRAND } from '../data/portfolioData';
import heroPoster from '../assets/images/hero_cinematic_scifi_1790369763150.jpg';

interface ContactCTAProps {
  onOpenInquiry: () => void;
  onViewWork: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenInquiry, onViewWork }) => {
  return (
    <section id="contact" className="relative min-h-[70vh] py-32 overflow-hidden flex items-center justify-center border-t border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-300">
      {/* Background Looping Cinematic AI-Generated Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          src="https://res.cloudinary.com/r47dziu3/video/upload/v1790374824/AI_filmmaker_showreel_sequences_20260925231912.mp4"
          poster={heroPoster}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.25] contrast-125 scale-105"
        />
        {/* Dark Overlays for Pristine Legibility */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        <div className="pointer-events-none absolute inset-0 bg-[#B8863B]/10 mix-blend-screen" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-20">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#B8863B] font-semibold mb-6">
          <span className="w-6 h-[1.5px] bg-[#B8863B]" />
          <span>COLLABORATION & COMMISSIONS</span>
          <span className="w-6 h-[1.5px] bg-[#B8863B]" />
        </div>

        {/* Large Heading: GOT AN IDEA FOR A VIDEO? */}
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.03em] text-white leading-[0.98] mb-6 uppercase">
          GOT AN IDEA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A85B] via-[#B8863B] to-[#6F4A24]">
            FOR A VIDEO?
          </span>
        </h2>

        {/* Supporting text */}
        <p className="max-w-2xl mx-auto text-lg sm:text-2xl text-neutral-300 font-normal leading-relaxed mb-10">
          Let's turn your idea into a cinematic AI-powered video.
        </p>

        {/* Action Button: LET'S CREATE */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#B8863B] hover:bg-[#D4A85B] text-black font-extrabold text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-[0_0_35px_rgba(184,134,59,0.5)] hover:shadow-[0_0_50px_rgba(184,134,59,0.7)] active:scale-95"
          >
            <span>LET'S CREATE</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onViewWork}
            className="px-8 py-5 bg-black/80 hover:bg-white/10 text-white font-mono text-xs tracking-wider uppercase border border-white/20 hover:border-[#B8863B] transition-all cursor-pointer backdrop-blur-md"
          >
            EXPLORE ARCHIVE
          </button>
        </div>

        <div className="mt-12 text-xs font-mono tracking-widest uppercase text-neutral-400">
          SHORT FILMS · COMMERCIALS · MUSIC VIDEOS · PRODUCT VISUALS · SOCIAL CONTENT
        </div>
      </div>
    </section>
  );
};
