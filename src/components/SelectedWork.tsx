import React, { useState } from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { SELECTED_PROJECTS, ProjectCaseStudy } from '../data/portfolioData';

interface SelectedWorkProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
  onPlayVideo: (project: ProjectCaseStudy) => void;
}

const CATEGORIES = [
  'ALL',
  'AI SHORT FILM',
  'AI COMMERCIAL',
  'AI MUSIC VIDEO',
  'AI PRODUCT VIDEO',
  'AI SOCIAL CONTENT',
  'AI CINEMATIC EDIT',
] as const;

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onSelectProject,
  onPlayVideo,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filteredProjects = activeFilter === 'ALL'
    ? SELECTED_PROJECTS
    : SELECTED_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-20 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Filter Tabs — Clean unboxed text with golden indicator */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-16 pb-4 border-b border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200">
        {CATEGORIES.map((cat) => {
          const isActive = activeFilter === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer relative py-2 ${
                isActive
                  ? 'text-[#D4A85B] dark:text-[#D4A85B] light:text-[#6F4A24] font-bold'
                  : 'text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-white dark:hover:text-white light:hover:text-black'
              }`}
            >
              <span>{cat}</span>
              {isActive && (
                <span className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-[#B8863B] shadow-[0_0_10px_rgba(184,134,59,0.8)]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Large Cinematic Video Projects Layout (Film Archive Feel) */}
      <div className="space-y-20">
        {filteredProjects.map((project, idx) => {
          const isHovered = hoveredProjectId === project.id;
          return (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-950/40 dark:bg-neutral-950/40 light:bg-neutral-50/70 border border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-300 p-4 sm:p-8 transition-all duration-300 hover:border-[#B8863B]/60"
            >
              {/* Left / Dominant Video Preview (7 cols) */}
              <div 
                onClick={() => onPlayVideo(project)}
                className="lg:col-span-8 relative aspect-[16/9] sm:aspect-[2.39/1] overflow-hidden bg-black border border-neutral-800/80 cursor-pointer group/vid"
              >
                {/* Poster / Live Video */}
                {project.heroMedia?.type === 'video' && project.heroMedia?.url ? (
                  <video
                    src={project.heroMedia.url}
                    poster={project.thumbnail}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovered ? 'scale-105' : 'scale-100'
                    }`}
                  />
                ) : (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovered ? 'scale-105' : 'scale-100'
                    }`}
                  />
                )}

                {/* Ambient Dark Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Big Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => onPlayVideo(project)}
                    className="group/btn flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-black/70 hover:bg-[#B8863B] text-white hover:text-black border border-white/30 hover:border-[#B8863B] transition-all duration-200 cursor-pointer backdrop-blur-md shadow-2xl active:scale-95"
                    aria-label={`Play ${project.title}`}
                  >
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1 transition-transform group-hover/btn:scale-110" />
                  </button>
                </div>
              </div>

              {/* Right / Information & Editorial Details (4 cols) */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#B8863B] font-semibold mb-2">
                    <span>{project.category}</span>
                    <span className="text-neutral-500">·</span>
                    <span className="text-neutral-400">{project.year}</span>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white dark:text-white light:text-[#0B0B0B] group-hover:text-[#D4A85B] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Human Role & Tools */}
                <div className="pt-4 border-t border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 space-y-2">
                  <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-400 light:text-neutral-600 uppercase">
                    <span className="text-[#B8863B] font-semibold">ROLE: </span>
                    {project.role}
                  </div>
                  <div className="flex flex-wrap gap-2 text-[10px] font-mono text-neutral-400">
                    {project.tools.map((t) => (
                      <span key={t} className="text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onPlayVideo(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#B8863B] hover:bg-[#D4A85B] transition-all cursor-pointer shadow-sm active:scale-98"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>PLAY VIDEO</span>
                  </button>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-mono tracking-wider uppercase text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-white dark:hover:text-white light:hover:text-black border border-neutral-700/80 hover:border-[#B8863B] transition-all cursor-pointer"
                    title="Watch Project Case Study"
                  >
                    <span>CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B8863B]" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
