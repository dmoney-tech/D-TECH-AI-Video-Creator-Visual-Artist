import React, { useEffect } from 'react';
import { ProjectCaseStudy } from '../../data/portfolioData';
import { X, ArrowRight, Play, CheckCircle2 } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onNextProject: () => void;
  onPlayHeroVideo: (project: ProjectCaseStudy) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onNextProject,
  onPlayHeroVideo,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNextProject();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNextProject]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl animate-fadeIn flex justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl my-8 sm:my-12 mx-4 bg-[#0E0E0E] text-white border border-neutral-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0E0E0E]/95 backdrop-blur-md border-b border-neutral-800">
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-[#B8863B] font-bold">PROJECT {project.number}</span>
            <span className="text-neutral-500">/</span>
            <span className="text-neutral-300">{project.category}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNextProject}
              className="text-xs font-mono text-neutral-400 hover:text-[#B8863B] flex items-center gap-1.5 transition-colors cursor-pointer px-3 py-1 border border-neutral-800 hover:border-[#B8863B]/60"
            >
              <span>NEXT PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 rounded-full border border-neutral-800 hover:border-[#B8863B] flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Hero Visual */}
        <div className="relative aspect-[16/9] w-full bg-black group overflow-hidden">
          <img
            src={project.heroMedia.poster}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-black/40 to-transparent" />

          {/* Play Video Trigger */}
          <button
            onClick={() => onPlayHeroVideo(project)}
            className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#0B0B0B]/85 backdrop-blur-md border border-[#B8863B] flex items-center justify-center text-[#D4A85B] hover:scale-110 hover:bg-[#B8863B] hover:text-black transition-all duration-300 shadow-[0_0_35px_rgba(184,134,59,0.4)] cursor-pointer"
            title="Play cinematic film cut"
          >
            <Play className="w-6 h-6 fill-current ml-1" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-xs uppercase tracking-widest text-[#B8863B] font-mono">
              {project.year} · {project.client}
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white mt-1">
              {project.title}
            </h1>
            <p className="text-sm text-neutral-300 max-w-2xl mt-2">{project.tagline}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-12">
          {/* Metadata quick stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 border border-neutral-800 bg-[#141414] text-xs font-mono">
            <div>
              <span className="text-neutral-500 block mb-1">ROLE</span>
              <span className="text-neutral-200">{project.role}</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-1">CLIENT / VENUE</span>
              <span className="text-neutral-200">{project.client}</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-1">YEAR</span>
              <span className="text-neutral-200">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-500 block mb-1">RUNTIME</span>
              <span className="text-neutral-200">{project.duration || 'Variable'}</span>
            </div>
          </div>

          {/* Section: The Idea */}
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#B8863B] font-semibold mb-3">
              <span className="w-4 h-[1px] bg-[#B8863B]" />
              <span>THE IDEA</span>
            </div>
            <h2 className="font-display font-bold text-2xl text-white mb-3">
              Core Concept & Direction
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {project.idea}
            </p>
          </div>

          {/* Section: The Story */}
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#B8863B] font-semibold mb-3">
              <span className="w-4 h-[1px] bg-[#B8863B]" />
              <span>THE STORY</span>
            </div>
            <h2 className="font-display font-bold text-2xl text-white mb-3">
              Narrative Architecture
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {project.story}
            </p>
          </div>

          {/* Section: The Creative Process */}
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#B8863B] font-semibold mb-3">
              <span className="w-4 h-[1px] bg-[#B8863B]" />
              <span>THE CREATIVE PROCESS</span>
            </div>
            <h2 className="font-display font-bold text-2xl text-white mb-3">
              Neural Synthesis & Directed Iteration
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
              {project.process}
            </p>

            {/* Tools list */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block mb-3">
                TOOLS USED ON THIS PIECE
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-xs font-mono bg-neutral-900 border border-neutral-700 text-[#D4A85B]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Final Result & Key Highlights */}
          <div className="pt-8 border-t border-neutral-800">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#B8863B] font-semibold mb-3">
              <span className="w-4 h-[1px] bg-[#B8863B]" />
              <span>FINAL RESULT</span>
            </div>
            <h2 className="font-display font-bold text-2xl text-white mb-3">
              Outcome & Impact
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
              {project.finalResult.overview}
            </p>

            <div className="space-y-3 mb-8">
              {project.finalResult.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#B8863B] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Media Gallery items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.finalResult.mediaItems.map((item, idx) => (
                <div key={idx} className="border border-neutral-800 bg-black overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="w-full aspect-[16/9] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <p className="p-3 text-xs font-mono text-neutral-400 bg-neutral-950 border-t border-neutral-900">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="pt-8 border-t border-neutral-800 flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              ← RETURN TO ARCHIVE
            </button>
            <button
              onClick={onNextProject}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-widest text-black bg-[#B8863B] hover:bg-[#D4A85B] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>NEXT PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
