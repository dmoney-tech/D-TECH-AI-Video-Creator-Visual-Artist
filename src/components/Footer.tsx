import React from 'react';
import { BRAND } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'AI VIDEOS', href: '#ai-videos' },
    { label: 'SERVICES', href: '#services' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Email', href: 'mailto:contact@dtech-aivideo.com' },
  ];

  return (
    <footer className="relative bg-[#070707] dark:bg-[#070707] light:bg-[#EAE7DF] border-t border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-300 pt-16 pb-12">
      {/* Golden top hairline */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B8863B] to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-12">
          {/* Creator Name & Roles */}
          <div>
            <span
              onClick={handleScrollToTop}
              className="font-display font-extrabold text-2xl tracking-widest text-white dark:text-white light:text-[#0B0B0B] hover:text-[#B8863B] transition-colors cursor-pointer block mb-2"
            >
              {BRAND.name}
            </span>
            <div className="space-y-0.5 font-mono text-xs tracking-wider uppercase text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
              <p className="text-[#D4A85B] font-semibold">AI VIDEO CREATOR</p>
              <p className="text-neutral-300 dark:text-neutral-300 light:text-neutral-700">AI VIDEO EDITOR</p>
              <p className="text-[11px] text-neutral-500 pt-1">GENERATIVE FILMMAKING · CINEMATIC AI</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-500 block mb-3">
              NAVIGATION
            </span>
            <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs font-mono tracking-wider uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-[#B8863B] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links Placeholders */}
          <div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-500 block mb-3">
              CONNECT & NETWORK
            </span>
            <div className="flex flex-wrap gap-4 text-xs font-mono">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 dark:text-neutral-400 light:text-neutral-600 hover:text-[#B8863B] transition-colors underline decoration-neutral-800 hover:decoration-[#B8863B] underline-offset-4"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {currentYear} {BRAND.name}. All cinematic rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>AI-GENERATED. HUMAN-DIRECTED.</span>
            <button
              onClick={handleScrollToTop}
              className="hover:text-[#B8863B] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
