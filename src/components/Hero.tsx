import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import heroPoster from '../assets/images/hero_cinematic_scifi_1790369763150.jpg';

interface HeroProps {
  onViewWork: () => void;
  onOpenInquiry: () => void;
  onOpenHeroVideo: () => void;
  onReplayIntro?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewWork,
  onOpenInquiry,
  onOpenHeroVideo,
  onReplayIntro,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Subtle scroll animation effect for the typography ticker
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollProgress(scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden">
      {/* Subtle ambient golden background aura */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] w-[650px] h-[650px] rounded-full bg-[#B8863B]/10 blur-[140px] dark:opacity-40 light:opacity-20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[40%] -left-32 w-[550px] h-[550px] rounded-full bg-[#6F4A24]/10 blur-[150px] dark:opacity-30 light:opacity-15"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Main Headline */}
        <div className="max-w-5xl mb-8">
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-[5.5rem] tracking-[-0.03em] leading-[0.95] text-white dark:text-white light:text-[#0B0B0B] text-balance">
            I TURN IDEAS <br />
            INTO CINEMATIC <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A85B] via-[#B8863B] to-[#6F4A24]">
              AI VIDEOS.
            </span>
          </h1>
        </div>

        {/* Supporting text & CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg sm:text-xl text-neutral-300 dark:text-neutral-300 light:text-neutral-700 max-w-2xl leading-relaxed">
              I create, edit and transform ideas into cinematic videos using AI, creative direction and modern post-production.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onViewWork}
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black bg-[#B8863B] hover:bg-[#D4A85B] transition-all duration-200 shadow-[0_0_25px_rgba(184,134,59,0.3)] hover:shadow-[0_0_35px_rgba(184,134,59,0.5)] cursor-pointer active:scale-[0.99]"
              >
                <span>WATCH MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenInquiry}
                className="px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white dark:text-white light:text-[#0B0B0B] bg-transparent border border-[#B8863B] hover:bg-[#B8863B]/10 hover:border-[#D4A85B] transition-all duration-200 cursor-pointer active:scale-[0.99]"
              >
                LET'S CREATE
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:flex flex-col justify-end items-end text-right font-mono text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-500 space-y-1 pt-4">
            <div className="text-[#B8863B] font-semibold tracking-wider">GENERATIVE CINEMATOGRAPHY</div>
            <div>FROM PROMPT TO PICTURE</div>
            <div>FROM IDEA TO FINAL CUT</div>
          </div>
        </div>

        {/* Large Cinematic Video Visual */}
        <div className="relative w-full group">
          <div
            onClick={onOpenHeroVideo}
            className="relative w-full aspect-[16/9] sm:aspect-[2.39/1] overflow-hidden bg-neutral-950 border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-300 shadow-2xl cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Play full cinematic video"
          >
            {/* Live Autoplaying Looping Stream Video */}
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/r47dziu3/video/upload/v1790374824/AI_filmmaker_showreel_sequences_20260925231912.mp4"
              poster={heroPoster}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover filter contrast-105"
            />

            {/* Subtle Gradient Overlays for Cinematic Atmosphere */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-70" />
          </div>

          {/* Under Hero Video: Animated Typography */}
          <div className="mt-8 overflow-hidden py-4 border-y border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200">
            <div
              className="flex items-center justify-center gap-6 text-center font-display font-bold text-sm sm:text-base md:text-xl tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-400 light:text-neutral-600 transition-transform duration-300"
              style={{
                transform: `translateX(${(scrollProgress % 400) * -0.15}px)`,
              }}
            >
              <span className="text-white dark:text-white light:text-black font-extrabold">AI VIDEO CREATION</span>
              <span className="text-[#B8863B] font-mono text-sm">+</span>
              <span className="text-white dark:text-white light:text-black font-extrabold">AI EDITING</span>
              <span className="text-[#B8863B] font-mono text-sm">+</span>
              <span className="text-white dark:text-white light:text-black font-extrabold">STORYTELLING</span>
              <span className="text-[#B8863B] font-mono text-sm hidden sm:inline">·</span>
              <span className="hidden sm:inline text-xs font-mono tracking-widest text-[#B8863B]">CREATED WITH AI. CRAFTED THROUGH EDITING.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
