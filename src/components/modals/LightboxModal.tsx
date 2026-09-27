import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Terminal, Layers } from 'lucide-react';

export interface LightboxImageItem {
  id: string;
  title: string;
  category: string;
  year?: string;
  description: string;
  image: string;
  aspectRatio: string;
  promptExcerpt?: string;
  tools: string;
  seed: string;
}

interface LightboxModalProps {
  image: LightboxImageItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  image,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    if (image) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose, onNext, onPrev]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="w-full max-w-6xl mx-auto flex items-center justify-between z-20 pb-4 border-b border-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 text-[11px] font-mono uppercase bg-[#B8863B] text-black font-semibold">
            {image.category}
          </span>
          <h2 className="font-display font-bold text-lg sm:text-xl text-white">
            {image.title}
          </h2>
          <span className="text-xs font-mono text-neutral-400">{image.year || '2026'}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#B8863B] flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage with Nav arrows */}
      <div
        className="relative flex-grow flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          onClick={onPrev}
          aria-label="Previous visual"
          className="absolute left-2 sm:left-6 z-10 w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-neutral-800 hover:border-[#B8863B] flex items-center justify-center text-neutral-300 hover:text-white transition-all cursor-pointer shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Center Display Image */}
        <div className="max-w-5xl max-h-[70vh] flex items-center justify-center">
          <img
            src={image.image}
            alt={image.title}
            className="max-w-full max-h-[70vh] object-contain shadow-2xl border border-neutral-800"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          aria-label="Next visual"
          className="absolute right-2 sm:right-6 z-10 w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-neutral-800 hover:border-[#B8863B] flex items-center justify-center text-neutral-300 hover:text-white transition-all cursor-pointer shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Technical & Visual Dev Metadata Panel */}
      <div
        className="w-full max-w-6xl mx-auto pt-4 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-12 gap-4 text-xs z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:col-span-6 space-y-1">
          <p className="text-neutral-300 text-sm">{image.description}</p>
          <div className="flex items-center gap-3 text-neutral-500 font-mono text-[11px] pt-1">
            <span>ASPECT: {image.aspectRatio}</span>
            <span className="text-[#B8863B]">·</span>
            <span>SEED: {image.seed}</span>
          </div>
        </div>

        <div className="md:col-span-6 flex flex-col justify-between">
          <div className="p-3 bg-neutral-950 border border-neutral-800 font-mono text-[11px] text-neutral-400 space-y-1">
            <div className="flex items-center gap-1.5 text-[#D4A85B] font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>VISUAL DEVELOPMENT METADATA:</span>
            </div>
            <p className="text-neutral-300 truncate">
              {image.promptExcerpt ? `"${image.promptExcerpt}"` : 'Pre-production keyframe anchor for camera motion generation.'}
            </p>
            <div className="flex items-center justify-between text-neutral-500 pt-1 border-t border-neutral-900">
              <span className="flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#B8863B]" />
                {image.tools}
              </span>
              <span className="text-neutral-400">LATENT EXIF VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
