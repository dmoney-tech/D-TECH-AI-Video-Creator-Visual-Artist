import React, { useState, useRef } from 'react';
import { Play, Volume2, VolumeX, Award } from 'lucide-react';
import { FEATURED_FILM, AIVideo } from '../data/portfolioData';

interface FeaturedFilmProps {
  onWatchFullProject: (video: AIVideo) => void;
}

export const FeaturedFilm: React.FC<FeaturedFilmProps> = ({ onWatchFullProject }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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



          {/* Bottom Controls */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2">

              <button
                onClick={toggleMute}
                className="flex items-center justify-center w-9 h-9 bg-black/70 hover:bg-[#B8863B] text-white hover:text-black border border-white/20 transition-all cursor-pointer backdrop-blur-md"
                title={isMuted ? 'Sound on' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#D4A85B]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Underneath: Title, Description & Watch Full Project CTA */}
        <div className="max-w-4xl space-y-4">
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
      </div>
    </section>
  );
};
