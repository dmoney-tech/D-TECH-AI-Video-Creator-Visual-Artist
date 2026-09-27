import React, { useState, useRef, useEffect } from 'react';
import {
  Film,
  Scissors,
  Clapperboard,
  BookOpen,
  Globe2,
  Smartphone,
  Check,
  ArrowRight,
  Play,
  Maximize2
} from 'lucide-react';
import { WHAT_I_DO_SERVICES, BRAND } from '../data/portfolioData';

interface ServicesProps {
  onOpenInquiry: () => void;
}

const INTRO_VIDEO_URL = 'https://res.cloudinary.com/r47dziu3/video/upload/v1790536369/Ai_video.mp4';

export const Services: React.FC<ServicesProps> = ({ onOpenInquiry }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Attempt autoplay muted on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const handleTogglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);

    // If unmuting while paused, resume playback smoothly
    if (!nextMuted && videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration) {
        setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleToggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

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
    <section
      id="services"
      className="py-24 sm:py-32 bg-[#09090B] dark:bg-[#09090B] light:bg-[#FAF8F5] border-t border-[#8C6228]/25 relative overflow-hidden text-white font-sans"
    >
      {/* Subtle Futuristic Section Atmosphere: Dark Neutral with Golden-Brown Ambient Light and Faint Grid */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft top-center radial golden-brown ambient glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-[#B8863B]/[0.06] blur-[150px] rounded-full" />
        {/* Secondary soft bronze rim lighting */}
        <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#8C6228]/[0.04] blur-[160px] rounded-full" />
        {/* Faint futuristic technical grid with subtle golden tint */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(184,134,59,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,134,59,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_35%,#000_65%,transparent_100%)] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#D4A85B] font-semibold mb-3">
              <span className="w-6 h-[1.5px] bg-[#B8863B]" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              WHAT I DO WITH{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A85B] via-[#FAF6EE] to-[#B8863B]">
                AI
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            Bridging cutting-edge generative neural models with precision post-production, sound architecture, and intentional editorial pacing.
          </p>
        </div>

        {/* AI INTRODUCTION VIDEO CONTAINER */}
        <div className="mb-20 sm:mb-24">
          {/* Futuristic Border Wrapper with Golden-Brown Rim, Soft Glow & Subtle Light Sweep */}
          <div
            ref={containerRef}
            onClick={handleTogglePlay}
            className="group relative rounded-2xl sm:rounded-3xl p-[1.5px] bg-gradient-to-b from-[#D4A85B]/50 via-[#8C6228]/25 to-[#B8863B]/40 shadow-[0_0_40px_rgba(184,134,59,0.12),0_20px_50px_rgba(0,0,0,0.85)] hover:shadow-[0_0_55px_rgba(184,134,59,0.22),0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-500 overflow-hidden cursor-pointer select-none"
          >
            {/* Subtle Animated Golden Light Sweep */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl z-10">
              <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#FAF6EE]/15 to-transparent animate-gold-sweep" />
            </div>

            {/* Glowing Corner Accents (Futuristic Golden Brackets) */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-[#D4A85B]/80 rounded-tl pointer-events-none z-30" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-[#D4A85B]/80 rounded-tr pointer-events-none z-30" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-[#D4A85B]/80 rounded-bl pointer-events-none z-30" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-[#D4A85B]/80 rounded-br pointer-events-none z-30" />

            {/* Inner Dark Surface & Video Canvas */}
            <div className="relative rounded-[calc(1rem-1.5px)] sm:rounded-[calc(1.5rem-1.5px)] overflow-hidden bg-black/95 aspect-[16/9] sm:aspect-[2.1/1] md:aspect-[2.35/1] flex items-center justify-center">
              {/* Actual Cloudinary HTML5 Video */}
              <video
                ref={videoRef}
                src={INTRO_VIDEO_URL}
                poster={BRAND.heroPoster}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                className="w-full h-full object-cover filter contrast-[1.03] brightness-95 transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />

              {/* Cinematic Vignette Overlay (preserves original video clarity) */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 z-10" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25 z-10" />

              {/* Subtle top inner border highlight sheen */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FAF6EE]/30 to-transparent z-20" />





              {/* Central Play Button Overlay (shown when paused) */}
              {!isPlaying && (
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTogglePlay(e);
                    }}
                    className="pointer-events-auto flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/75 hover:bg-black/90 text-white border border-[#D4A85B]/70 hover:border-[#FAF6EE] backdrop-blur-md shadow-[0_0_35px_rgba(184,134,59,0.35)] hover:shadow-[0_0_55px_rgba(184,134,59,0.55)] transition-all duration-300 hover:scale-105 cursor-pointer group/play"
                    aria-label="Play introduction video"
                  >
                    <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-white text-white ml-1 transition-transform group-hover/play:scale-110" />
                  </button>
                </div>
              )}

              {/* Bottom Video Controls - Minimal corner fullscreen */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center justify-end pointer-events-auto">
                <button
                  type="button"
                  onClick={handleToggleFullscreen}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white border border-neutral-700/60 hover:border-[#D4A85B]/60 backdrop-blur-md transition-all cursor-pointer shadow-lg"
                  title="Toggle Fullscreen"
                  aria-label="Toggle Fullscreen"
                >
                  <Maximize2 className="w-4 h-4 text-neutral-300 hover:text-white" />
                </button>
              </div>

              {/* Luminous Golden-Brown Progress Line at the very bottom */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-white/10 z-20">
                <div
                  className="h-full bg-gradient-to-r from-[#8C6228] via-[#B8863B] to-[#D4A85B] shadow-[0_0_10px_rgba(184,134,59,0.85)] transition-all duration-150 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Existing AI Service Cards Grid (Preserved in full with golden-brown accents) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHAT_I_DO_SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-[#0F0F12]/95 border border-neutral-800/80 flex flex-col justify-between group hover:border-[#B8863B]/60 transition-all duration-300 relative shadow-sm hover:shadow-[0_0_30px_rgba(184,134,59,0.12)]"
            >
              <div>
                {/* Header row with icon & number */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800/70">
                  <div className="p-3 bg-neutral-900 border border-neutral-800 group-hover:border-[#B8863B]/60 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="font-mono text-sm tracking-wider text-[#B8863B] font-bold">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#D4A85B] transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Summary */}
                <p className="text-sm font-semibold text-neutral-300 mb-3">
                  {service.summary}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Deliverables Bullet List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-neutral-800/50">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#B8863B] font-semibold block mb-2">
                    DELIVERABLES:
                  </span>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#D4A85B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools row & action */}
              <div className="pt-4 border-t border-neutral-800/70 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-neutral-400">
                  {service.tools.map((t) => (
                    <span key={t}>#{t}</span>
                  ))}
                </div>

                <button
                  type="button"
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
