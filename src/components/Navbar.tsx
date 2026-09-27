import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/portfolioData';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'AI VIDEOS', href: '#ai-videos' },
    { label: 'SERVICES', href: '#services' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#' || href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0B]/90 dark:bg-[#0B0B0B]/90 light:bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#27272A]/40 dark:border-[#27272A]/40 light:border-[#EDE7DC] py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Creator Name */}
        <a
          href="#"
          className="font-display font-extrabold tracking-wider text-lg sm:text-xl text-white dark:text-white light:text-[#0B0B0B] hover:text-[#B8863B] transition-all duration-200 whitespace-nowrap flex items-center gap-2 group"
        >
          <span>{BRAND.name}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B8863B] group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(184,134,59,0.7)]" />
          <span className="hidden lg:inline text-[11px] font-mono tracking-widest text-neutral-400 dark:text-neutral-400 light:text-neutral-500 uppercase border-l border-neutral-700/60 dark:border-neutral-700/60 light:border-neutral-300 pl-2 ml-1">
            AI VIDEO CREATOR & EDITOR
          </span>
        </a>

        {/* Minimal Navigation Links: WORK, AI VIDEOS, SERVICES, ABOUT, CONTACT */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-[#B8863B] dark:hover:text-[#B8863B] light:hover:text-[#B8863B] transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B8863B] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right side: THEME TOGGLE + LET'S CREATE */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="flex items-center justify-center w-9 h-9 border border-neutral-700/60 dark:border-neutral-800 light:border-[#EDE7DC] bg-neutral-900/60 dark:bg-neutral-900/60 light:bg-white text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-[#B8863B] hover:border-[#B8863B]/60 transition-all cursor-pointer"
            title={`Current: ${theme === 'dark' ? 'Dark' : 'Light'} Mode. Click to switch.`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#D4A85B] transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-[#6F4A24] transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Primary CTA: LET'S CREATE */}
          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#B8863B] hover:bg-[#D4A85B] transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(184,134,59,0.35)] cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>LET'S CREATE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden flex items-center justify-center w-9 h-9 border border-neutral-700 dark:border-neutral-800 light:border-neutral-300 text-neutral-300 dark:text-neutral-300 light:text-neutral-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B0B]/98 dark:bg-[#0B0B0B]/98 light:bg-[#F7F5F0]/98 border-b border-neutral-800 dark:border-neutral-800 light:border-neutral-200 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 text-sm font-semibold tracking-wider uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-neutral-300 dark:text-neutral-300 light:text-neutral-700 hover:text-[#B8863B] py-2 border-b border-neutral-800/50 dark:border-neutral-800/50 light:border-neutral-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="mt-2 w-full py-3 bg-[#B8863B] text-black text-center text-xs font-semibold uppercase tracking-widest"
            >
              LET'S CREATE
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
