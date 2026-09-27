import React from 'react';
import { AI_VIDEOS, AIVideo } from '../data/portfolioData';
import { Play, Clock, Sparkles } from 'lucide-react';

interface VideoShowcaseProps {
  onPlayVideo: (video: AIVideo) => void;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ onPlayVideo }) => {
  return (
    <section id="ai-videos" className="py-28 bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#EFECE6]/40 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#B8863B] font-semibold mb-3">
              <span className="w-6 h-[1.5px] bg-[#B8863B]" />
              <span>SYNTHETIC MOTION VAULT</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white dark:text-white light:text-[#0B0B0B] tracking-tight uppercase">
              AI VIDEOS
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
            High-concept AI video projects featuring continuous camera momentum, character fidelity, and acoustic sound design.
          </p>
        </div>

        {/* 2x2 Large Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AI_VIDEOS.map((video) => (
            <div
              key={video.id}
              onClick={() => onPlayVideo(video)}
              className="group relative bg-[#121212] dark:bg-[#121212] light:bg-white border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 cursor-pointer overflow-hidden transition-all duration-300 hover:border-[#B8863B] shadow-xl hover:shadow-[0_10px_35px_rgba(184,134,59,0.15)]"
            >
              {/* Video Poster with aspect ratio */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                <img
                  src={video.poster}
                  alt={video.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Dark gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-neutral-700/60 text-[11px] font-mono text-neutral-200">
                  <Clock className="w-3 h-3 text-[#B8863B]" />
                  <span>{video.duration}</span>
                </div>

                {/* Category & Aspect Ratio badge */}
                <div className="absolute top-4 left-4 text-[10px] font-mono tracking-widest uppercase text-neutral-400 bg-black/60 px-2 py-0.5 border border-neutral-800">
                  {video.aspectRatio} · {video.type}
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-black/70 border border-white/30 text-white group-hover:bg-[#B8863B] group-hover:text-black group-hover:scale-110 transition-all duration-200 shadow-2xl backdrop-blur-sm">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Live Preview Pill on Hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="font-mono text-[10px] tracking-wider uppercase text-black bg-[#B8863B] px-2.5 py-1 font-semibold">
                    WATCH IN 4K
                  </span>
                </div>
              </div>

              {/* Bottom Card Meta Details */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white dark:text-white light:text-[#0B0B0B] group-hover:text-[#D4A85B] transition-colors line-clamp-1">
                    {video.title}
                  </h3>
                  <span className="font-mono text-xs text-neutral-500 font-semibold">{video.year}</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-400 light:text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                  {video.shortDescription}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200">
                  {video.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono text-neutral-500"
                    >
                      #{tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
