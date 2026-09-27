import React, { useState, useEffect, useRef } from 'react';
import { FastForward, Volume2, VolumeX } from 'lucide-react';
import heroSciFi from '../assets/images/hero_cinematic_scifi_1790369763150.jpg';
import cyberMonk from '../assets/images/portrait_cyber_monk_1790369774899.jpg';
import productGold from '../assets/images/commercial_product_gold_1790374070408.jpg';
import fashionGold from '../assets/images/fashion_gold_noir_1790369786295.jpg';
import envGold from '../assets/images/cinematic_env_gold_1790374083328.jpg';

interface CinematicIntroProps {
  onComplete: () => void;
}

interface Shot {
  id: number;
  label: string;
  category: string;
  image: string;
  durationMs: number;
}

const INTRO_SHOTS: Shot[] = [
  {
    id: 1,
    label: '01 // AI CHARACTER CLOSE-UP',
    category: 'SYNTHETIC CHARACTER',
    image: cyberMonk,
    durationMs: 1400,
  },
  {
    id: 2,
    label: '02 // CINEMATIC ENVIRONMENT',
    category: 'PROCEDURAL ARCHITECTURE',
    image: heroSciFi,
    durationMs: 1300,
  },
  {
    id: 3,
    label: '03 // DRAMATIC CAMERA MOVEMENT',
    category: 'ATMOSPHERIC SCALE',
    image: envGold,
    durationMs: 1300,
  },
  {
    id: 4,
    label: '04 // AI COMMERCIAL & PRODUCT SHOT',
    category: 'LUXURY MOTION',
    image: productGold,
    durationMs: 1300,
  },
  {
    id: 5,
    label: '05 // EDITORIAL PACING & FASHION',
    category: 'FLUID DYNAMICS',
    image: fashionGold,
    durationMs: 1300,
  },
  {
    id: 6,
    label: '06 // FINISHED EDITED SEQUENCE',
    category: 'FINAL CUT',
    image: heroSciFi,
    durationMs: 1600,
  },
];

const TOTAL_DURATION_MS = INTRO_SHOTS.reduce((acc, s) => acc + s.durationMs, 0);

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [currentShotIndex, setCurrentShotIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [phase, setPhase] = useState<'creator' | 'editor' | 'transition'>('creator');
  
  const startTimeRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Subtle cinematic sub-bass rumble
  const startAudioDrone = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(110, ctx.currentTime);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(55, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(73.4, ctx.currentTime + 6.0);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.2);
      gain.gain.setValueAtTime(0.08, ctx.currentTime + 6.0);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 7.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
      setIsAudioEnabled(true);
    } catch {
      // Audio autoplay blocked
    }
  };

  const stopAudio = () => {
    try {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.25);
      }
      setTimeout(() => {
        if (oscillatorRef.current) {
          oscillatorRef.current.stop();
          oscillatorRef.current.disconnect();
        }
        if (audioCtxRef.current) {
          audioCtxRef.current.close();
        }
      }, 300);
      setIsAudioEnabled(false);
    } catch {
      // Audio cleanup error
    }
  };

  const handleSkip = () => {
    setIsFadingOut(true);
    stopAudio();
    setTimeout(() => {
      onComplete();
    }, 400);
  };

  // Keyboard shortcut: ESC or Space to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.code === 'Space') {
        e.preventDefault();
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Frame timing loop
  useEffect(() => {
    let animId: number;

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const pct = Math.min((elapsed / TOTAL_DURATION_MS) * 100, 100);
      setProgress(pct);

      // Phase transitions:
      // 0 - 45%: "AI VIDEO CREATOR"
      // 45 - 85%: "AI VIDEO EDITOR"
      // 85 - 100%: smooth fade transition
      if (pct < 45) {
        setPhase('creator');
      } else if (pct < 85) {
        setPhase('editor');
      } else {
        setPhase('transition');
      }

      // Calculate which shot we are currently on
      let accumulated = 0;
      let targetIndex = 0;
      for (let i = 0; i < INTRO_SHOTS.length; i++) {
        accumulated += INTRO_SHOTS[i].durationMs;
        if (elapsed <= accumulated) {
          targetIndex = i;
          break;
        }
        if (i === INTRO_SHOTS.length - 1) {
          targetIndex = INTRO_SHOTS.length - 1;
        }
      }
      setCurrentShotIndex(targetIndex);

      if (elapsed >= TOTAL_DURATION_MS) {
        setIsFadingOut(true);
        stopAudio();
        setTimeout(() => {
          onComplete();
        }, 500);
      } else {
        animId = requestAnimationFrame(step);
      }
    };

    animId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(animId);
      stopAudio();
    };
  }, []);

  const currentShot = INTRO_SHOTS[currentShotIndex];

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0B0B0B] flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Cinematic AI Video Showreel Intro"
    >
      {/* 2.39:1 Cinema Letterbox Bars */}
      <div className="absolute top-0 left-0 right-0 h-10 sm:h-16 bg-black z-30 border-b border-white/5 flex items-center justify-between px-6 font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-white font-semibold">REC // 4K 60FPS</span>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="hidden sm:inline text-neutral-400">RAW AI SHOWREEL</span>
        </div>
        <div className="flex items-center gap-4 text-neutral-400">
          <span>{currentShot.label}</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-16 bg-black z-30 border-t border-white/5 flex items-center justify-between px-6 font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
        <div className="flex items-center gap-3">
          <span className="text-[#B8863B] font-semibold">ASPECT: 2.39:1 ANAMORPHIC</span>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="hidden sm:inline text-neutral-400">DIFFUSION + VIDEO EDITING</span>
        </div>
        <div>
          <span>PROGRESS: {Math.round(progress)}%</span>
        </div>
      </div>

      {/* Background Visual Layer: Real video stream + high-res cinematic fallbacks */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Cloudinary Stream Video with Fallback to Shot Image */}
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/r47dziu3/video/upload/v1790374824/AI_filmmaker_showreel_sequences_20260925231912.mp4"
          poster={currentShot.image}
          autoPlay
          muted={!isAudioEnabled}
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[2000ms] filter brightness-90 contrast-110"
        />

        {/* Film grain and anamorphic horizontal lens flare simulation */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 z-10" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)] z-10" />

        {/* Golden cinematic ambient accent glow */}
        <div className="pointer-events-none absolute inset-0 bg-[#B8863B]/10 mix-blend-screen z-10" />

        {/* Minimal Typography Overlay */}
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <div className="overflow-hidden mb-3">
            <p className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#B8863B] font-semibold">
              GENERATIVE FILMMAKING · PRECISION EDITING
            </p>
          </div>

          <div className="h-20 sm:h-28 flex items-center justify-center">
            {phase === 'creator' && (
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-[-0.03em] text-white animate-fade-in drop-shadow-[0_0_30px_rgba(184,134,59,0.3)]">
                AI VIDEO CREATOR
              </h1>
            )}

            {phase === 'editor' && (
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-[-0.03em] text-white animate-fade-in drop-shadow-[0_0_30px_rgba(184,134,59,0.3)]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A85B] via-[#B8863B] to-[#6F4A24]">
                  AI VIDEO EDITOR
                </span>
              </h1>
            )}

            {phase === 'transition' && (
              <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-300">
                TRANSITIONING TO MASTER CUT...
              </p>
            )}
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 font-mono tracking-widest uppercase mt-4">
            FROM PROMPT TO PICTURE · FROM IDEA TO FINAL CUT
          </p>
        </div>
      </div>

      {/* Controls: Skip & Audio */}
      <div className="absolute bottom-16 sm:bottom-20 right-6 sm:right-10 z-40 flex items-center gap-3">
        <button
          onClick={isAudioEnabled ? stopAudio : startAudioDrone}
          className="flex items-center gap-2 px-3 py-1.5 bg-black/70 hover:bg-[#B8863B]/20 border border-neutral-700/80 hover:border-[#B8863B] text-neutral-300 hover:text-white text-xs font-mono tracking-wider transition-all cursor-pointer backdrop-blur-md"
          title="Toggle Cinematic Audio"
        >
          {isAudioEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#B8863B]" />
              <span className="hidden sm:inline">SOUND ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
              <span className="hidden sm:inline">ENABLE SOUND</span>
            </>
          )}
        </button>

        <button
          onClick={handleSkip}
          className="flex items-center gap-2 px-4 py-1.5 bg-[#B8863B] hover:bg-[#D4A85B] text-black font-semibold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(184,134,59,0.4)] active:scale-95"
          title="Skip to portfolio (ESC)"
        >
          <span>SKIP INTRO</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Progress Bar Line */}
      <div className="absolute bottom-10 sm:bottom-16 left-0 right-0 h-[2px] bg-neutral-900 z-30">
        <div
          className="h-full bg-gradient-to-r from-[#6F4A24] via-[#B8863B] to-[#D4A85B] transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
