import React, { useRef, useState, useEffect } from 'react';
import { AIVideo } from '../../data/portfolioData';
import { Play, Pause, Volume2, VolumeX, Maximize, X, Sparkles, RotateCcw } from 'lucide-react';

interface VideoPlayerModalProps {
  video: AIVideo | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [aspect, setAspect] = useState<'fit' | 'fill'>('fit');
  const [showControls, setShowControls] = useState<boolean>(true);
  const controlsTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };
    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
      if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    };
  }, [video, onClose]);

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

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
    videoRef.current.play().catch(() => {
      // Autoplay with sound might be prevented by browser policy
      setIsPlaying(false);
    });
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const time = parseFloat(e.target.value);
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const val = parseFloat(e.target.value);
    videoRef.current.volume = val;
    setVolume(val);
    if (val === 0) {
      setIsMuted(true);
      videoRef.current.muted = true;
    } else if (isMuted) {
      setIsMuted(false);
      videoRef.current.muted = false;
    }
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2500);
  };

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="w-full max-w-6xl mx-auto flex items-center justify-between z-20 pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 text-[11px] font-mono uppercase bg-[#B8863B] text-black font-semibold">
            {video.type}
          </span>
          <h2 className="font-display font-bold text-lg sm:text-xl text-white">
            {video.title}
          </h2>
          <span className="hidden sm:inline text-xs font-mono text-neutral-400">
            {video.year} · {video.aspectRatio}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close cinematic player"
          className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-700 hover:border-[#B8863B] flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Video Screen Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
        className="relative w-full max-w-6xl mx-auto aspect-[16/9] bg-black overflow-hidden border border-neutral-800 shadow-2xl flex items-center justify-center group cursor-pointer"
      >
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.poster}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          className={`w-full h-full ${aspect === 'fill' ? 'object-cover' : 'object-contain'}`}
        />

        {/* Center Play/Pause Pulsing indicator on click */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
            <div className="w-20 h-20 rounded-full bg-black/80 backdrop-blur-md border border-[#B8863B] flex items-center justify-center text-[#D4A85B] shadow-[0_0_40px_rgba(184,134,59,0.5)]">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
          </div>
        )}

        {/* Cinematic Transport Controls Overlay */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 sm:p-6 transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Progress Timeline Scrubber */}
          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-300 w-12 text-right">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-neutral-800 rounded-none appearance-none cursor-pointer accent-[#B8863B]"
            />
            <span className="text-xs font-mono text-neutral-400 w-12">
              {formatTime(duration)}
            </span>
          </div>

          {/* Bottom Controls Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-700 hover:border-[#B8863B] flex items-center justify-center text-white cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              {/* Restart button */}
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play();
                    setIsPlaying(true);
                  }
                }}
                title="Restart"
                className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Volume & Mute */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="text-neutral-300 hover:text-[#B8863B] transition-colors cursor-pointer"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-rose-400" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 sm:w-24 h-1 bg-neutral-800 rounded-none appearance-none cursor-pointer accent-[#B8863B]"
                />
              </div>
            </div>

            {/* Right Tools / Meta */}
            <div className="flex items-center gap-4">
              <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono text-[#D4A85B]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{video.toolsUsed.join(' · ')}</span>
              </span>

              {/* Aspect toggle */}
              <button
                onClick={() => setAspect(aspect === 'fit' ? 'fill' : 'fit')}
                className="text-[11px] font-mono px-2 py-1 bg-neutral-900 border border-neutral-700 text-neutral-300 hover:border-[#B8863B] cursor-pointer"
              >
                {aspect === 'fit' ? 'CROP FILL' : 'LETTERBOX'}
              </button>

              {/* Fullscreen Button */}
              <button
                onClick={handleFullscreen}
                aria-label="Toggle Fullscreen"
                className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Director Notes / Bottom Caption */}
      <div
        className="w-full max-w-6xl mx-auto pt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-neutral-400 border-t border-neutral-900 gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="max-w-2xl text-neutral-300">
          <strong className="text-[#B8863B] font-mono">DIRECTOR'S NOTE:</strong> {video.directorNotes}
        </p>
        <span className="text-[11px] font-mono text-neutral-500 whitespace-nowrap">
          SPACE to toggle play · ESC to exit
        </span>
      </div>
    </div>
  );
};
