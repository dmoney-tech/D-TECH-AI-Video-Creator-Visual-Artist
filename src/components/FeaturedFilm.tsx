import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Award, Maximize2, Sparkles } from 'lucide-react';
import { FEATURED_FILM, AIVideo } from '../data/portfolioData';

interface FeaturedFilmProps {
  onWatchFullProject: (video: AIVideo) => void;
}

export const FeaturedFilm: React.FC<FeaturedFilmProps> = ({ onWatchFullProject }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleOpenPlayer = () => {
    onWatchFullProject({
      id: 'featured-the-last-journey',
      title: FEATURED_FILM.title,
      type: 'Featured AI Film (Festival Premiere)',
      category: 'AI SHORT FILM',
      duration: FEATURED_FILM.duration,
      year: FEATURED_FILM.year,
      shortDescription: FEATURED_FILM.description,
      poster: FEATURED_FILM.poster,
      videoUrl: FEATURED_FILM.videoUrl,
      toolsUsed: ['Runway Gen-3', 'Kling', 'ComfyUI', 'Premiere Pro', 'DaVinci Resolve'],
      aspectRatio: '2.39:1',
      directorNotes: 'Screened at Zurich AI Film Festival 2026. Custom film grain overlay, anamorphic lens flares, and spatial acoustic foley.'
    });
  };

  return (
    <section id="featured-film" className="py-28 bg-[#090909] dark:bg-[#090909] light:bg-[#EAE7DF]/40 border-t border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Festival Laurels & Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#B8863B]/40 bg-black/60 backdrop-blur-md mb-6">
            <Award className="w-4 h-4 text-[#D4A85B]" />
            <span className="font-mono text-xs tracking-widest text-[#D4A85B] uppercase font-semibold">
              FILM FESTIVAL SELECTION · ZURICH 2026
            </span>
            <Award className="w-4 h-4 text-[#D4A85B]" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white dark:text-white light:text-[#0B0B0B] tracking-tight uppercase">
            FEATURED AI FILM
          </h2>
          <p className="mt-3 text-xs sm:text-sm font-mono tracking-widest text-neutral-400 dark:text-neutral-400 light:text-neutral-600 uppercase">
            {FEATURED_FILM.subheading}
          </p>
        </div>

        {/* Large Cinematic AI Video Presentation */}
        <div className="relative aspect-[16/9] sm:aspect-[2.39/1] overflow-hidden bg-black border border-neutral-800 dark:border-neutral-800 light:border-neutral-300 shadow-2xl mb-12 group">
          <video
            ref={videoRef}
            src={FEATURED_FILM.videoUrl}
            poster={FEATURED_FILM.poster}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover filter contrast-105"
          />

          {/* Cinematic Vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

          {/* Top Left Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 font-mono text-[11px] text-neutral-300 bg-black/75 backdrop-blur-md px-3 py-1 border border-white/10 uppercase">
            <span className="text-[#B8863B] font-bold">PREMIERE CUT</span>
            <span>·</span>
            <span>{FEATURED_FILM.duration}</span>
            <span>·</span>
            <span>{FEATURED_FILM.aspectRatio}</span>
          </div>

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              onClick={handleOpenPlayer}
              className="pointer-events-auto flex items-center justify-center w-20 h-20 bg-black/70 hover:bg-[#B8863B] text-white hover:text-black border border-white/20 hover:border-[#B8863B] transition-all cursor-pointer backdrop-blur-md shadow-2xl group-hover:scale-105"
              aria-label="Watch Full Film"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="flex items-center justify-center w-9 h-9 bg-black/70 hover:bg-[#B8863B] text-white hover:text-black border border-white/20 transition-all cursor-pointer backdrop-blur-md"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                className="flex items-center justify-center w-9 h-9 bg-black/70 hover:bg-[#B8863B] text-white hover:text-black border border-white/20 transition-all cursor-pointer backdrop-blur-md"
                title={isMuted ? 'Sound on' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#D4A85B]" />}
              </button>
            </div>

            <button
              onClick={handleOpenPlayer}
              className="flex items-center gap-2 px-4 py-2 bg-black/80 hover:bg-[#B8863B] text-white hover:text-black border border-white/20 hover:border-[#B8863B] text-xs font-mono tracking-wider uppercase transition-all cursor-pointer backdrop-blur-md"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">THEATRICAL EXPAND</span>
            </button>
          </div>
        </div>

        {/* Underneath: Title, Description, Roles & Watch Full Project CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Project title & description (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white dark:text-white light:text-[#0B0B0B] uppercase">
              {FEATURED_FILM.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
              {FEATURED_FILM.description}
            </p>

            <div className="pt-4 flex flex-wrap gap-2">
              {FEATURED_FILM.awards.map((award, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                  <Award className="w-3.5 h-3.5 text-[#B8863B]" />
                  <span>{award}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={handleOpenPlayer}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#B8863B] hover:bg-[#D4A85B] text-black font-semibold text-xs tracking-widest uppercase transition-all cursor-pointer shadow-[0_0_20px_rgba(184,134,59,0.35)] active:scale-95"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>WATCH FULL PROJECT</span>
              </button>
            </div>
          </div>

          {/* Right: Creator Roles (5 cols) */}
          <div className="lg:col-span-5 bg-neutral-950/70 dark:bg-neutral-950/70 light:bg-white border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 p-6 space-y-4">
            <div className="font-mono text-xs tracking-widest uppercase text-[#B8863B] font-bold pb-2 border-b border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200">
              PRODUCTION CREDITS & ROLES
            </div>

            <div className="space-y-3">
              {FEATURED_FILM.roles.map((r) => (
                <div key={r.title} className="text-xs">
                  <span className="font-mono uppercase text-white dark:text-white light:text-black font-bold block mb-0.5">
                    {r.title}
                  </span>
                  <span className="text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                    {r.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
