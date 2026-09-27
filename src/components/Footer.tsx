import React, { useState } from 'react';
import { Mail, MapPin, Globe, Send, Check, Instagram } from 'lucide-react';

// Recognizable official-style SVG icon for WhatsApp
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [policyModal, setPolicyModal] = useState<'privacy' | 'terms' | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#' || href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  const servicesList = [
    'Video Editing',
    'Color Grading',
    'Motion Graphics',
    'Social Media Content',
    'YouTube Edits',
  ];

  const contactItems = [
    {
      icon: Mail,
      text: 'Shobowaledaniel476@gmail.com',
      href: 'mailto:Shobowaledaniel476@gmail.com',
    },
    {
      icon: MapPin,
      text: 'Lagos, Nigeria',
      href: '#',
    },
    {
      icon: Globe,
      text: 'www.dtech.com',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/shobowale336?stkn=eXd3ZXhvM2UyZ21p&utm_source=qr',
      icon: Instagram,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/9122521328',
      icon: WhatsAppIcon,
    },
  ];

  return (
    <footer className="relative bg-[#130E08] text-[#D8CFBF] font-sans overflow-hidden border-t border-[#B8863B]/30">
      {/* Ambient Radial Lights & Futuristic Background Depth in Warm Golden Brown */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep golden-brown radial gradients */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-[#B8863B]/15 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#8C6226]/20 rounded-full blur-[100px] translate-y-1/2" />

        {/* Faint technical grid lines in subtle golden tone */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(184, 134, 59, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(184, 134, 59, 0.5) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Futuristic Curved Corner Flourishes in Golden Brown */}
        {/* Bottom Left Curve Flourish */}
        <svg
          className="absolute -bottom-10 -left-10 w-72 h-72 text-[#B8863B]/15 pointer-events-none select-none"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M-20 180 C 60 170, 140 130, 160 30"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <path
            d="M-10 190 C 70 175, 150 120, 175 10"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <path
            d="M0 200 C 80 180, 160 110, 190 -10"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.6"
          />
        </svg>

        {/* Bottom Right Curve Flourish */}
        <svg
          className="absolute -bottom-10 -right-10 w-80 h-80 text-[#D4A85B]/15 pointer-events-none select-none"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M220 180 C 140 170, 60 130, 40 30"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="5 3"
          />
          <path
            d="M210 190 C 130 175, 50 120, 25 10"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <path
            d="M200 200 C 120 180, 40 110, 10 -10"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeOpacity="0.6"
          />
        </svg>

        {/* Subtle traveling energy line on top border in golden brown */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B8863B]/60 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-8">
        {/* Main 5-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          {/* Column 1: Brand Area (Left, span 3) */}
          <div className="lg:col-span-3 space-y-4">
            {/* D Tech Logo */}
            <a
              href="#home"
              onClick={(e) => handleScrollToSection(e, '#home')}
              className="inline-flex items-center gap-3 group focus:outline-none"
            >
              {/* Stylized Modern Golden Brown Emblem */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#E5B869]/30 via-[#B8863B]/20 to-transparent p-[1px] shadow-[0_0_15px_rgba(184,134,59,0.25)] group-hover:shadow-[0_0_24px_rgba(184,134,59,0.45)] transition-all duration-300">
                <div className="w-full h-full rounded-xl bg-[#1A130B]/90 backdrop-blur-md flex items-center justify-center border border-[#B8863B]/40">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                    {/* Stylized geometric D polygon with play angle */}
                    <path
                      d="M6 4.5h6a7.5 7.5 0 0 1 7.5 7.5v0a7.5 7.5 0 0 1-7.5 7.5H6V4.5z"
                      stroke="url(#emblemGradGold)"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                    <polygon
                      points="10,8.5 15,12 10,15.5"
                      fill="url(#emblemGradGold)"
                    />
                    <defs>
                      <linearGradient id="emblemGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F5D89F" />
                        <stop offset="50%" stopColor="#D4A85B" />
                        <stop offset="100%" stopColor="#8C6226" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#E5B869] transition-colors">
                  DTech
                </span>
              </div>
            </a>

            {/* Brand Statement */}
            <p className="text-[13px] text-[#A89E8E] font-normal leading-relaxed max-w-xs">
              Turning Ideas Into Visual Stories.
            </p>

            {/* Social Media Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="group relative w-8 h-8 rounded-lg bg-[#1C140C]/90 hover:bg-[#2B1F13] border border-[#3F2E1B] hover:border-[#B8863B] flex items-center justify-center text-[#A89E8E] hover:text-[#F5D89F] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(184,134,59,0.35)]"
                  >
                    <IconComponent className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (Middle Left, span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[14px] font-bold text-white tracking-wide flex items-center gap-2">
              <span>Quick Links</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8863B] shadow-[0_0_6px_rgba(184,134,59,0.85)]" />
            </h4>
            <ul className="space-y-2 text-[13px] text-[#A89E8E]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="hover:text-[#F5D89F] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-150 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B8863B]/0 group-hover:bg-[#B8863B] transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Middle, span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[14px] font-bold text-white tracking-wide flex items-center gap-2">
              <span>Services</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8863B] shadow-[0_0_6px_rgba(184,134,59,0.85)]" />
            </h4>
            <ul className="space-y-2 text-[13px] text-[#A89E8E]">
              {servicesList.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollToSection(e, '#services')}
                    className="hover:text-[#F5D89F] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-150 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#B8863B]/0 group-hover:bg-[#B8863B] transition-colors" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch (Middle Right, span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[14px] font-bold text-white tracking-wide flex items-center gap-2">
              <span>Get In Touch</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8863B] shadow-[0_0_6px_rgba(184,134,59,0.85)]" />
            </h4>
            <ul className="space-y-3 text-[13px] text-[#A89E8E]">
              {contactItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="group flex items-start sm:items-center gap-2.5 hover:text-white transition-colors"
                      title={item.text}
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#1C140C]/90 border border-[#3F2E1B] group-hover:border-[#B8863B]/60 flex items-center justify-center flex-shrink-0 text-[#D4A85B] group-hover:text-[#F5D89F] transition-colors mt-0.5 sm:mt-0">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span className="break-all text-[12px] sm:text-[13px] leading-snug">{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 5: Join My Journey / Newsletter (Right, span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[14px] font-bold text-white tracking-wide flex items-center gap-2">
              <span>Join My Journey</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8863B] shadow-[0_0_6px_rgba(184,134,59,0.85)]" />
            </h4>
            <p className="text-[12px] text-[#A89E8E] leading-relaxed">
              Get updates on new projects, tips and creative content.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubscribe} className="pt-1">
              <div className="relative flex items-center rounded-full bg-[#1A120A]/90 border border-[#3F2E1B] focus-within:border-[#B8863B] focus-within:shadow-[0_0_16px_rgba(184,134,59,0.25)] transition-all p-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-transparent px-3.5 py-1.5 text-xs text-white placeholder-[#8C8070] focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-[#B8863B] via-[#C99745] to-[#8C6226] hover:from-[#D4A85B] hover:to-[#A3742C] text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_14px_rgba(184,134,59,0.4)] hover:shadow-[0_0_20px_rgba(184,134,59,0.6)] transition-all active:scale-95"
                >
                  {subscribed ? (
                    <Check className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <Send className="w-3.5 h-3.5 text-white -translate-x-[0.5px] translate-y-[0.5px]" />
                  )}
                </button>
              </div>

              {subscribed && (
                <p className="text-[11px] text-[#E5B869] pt-1.5 pl-2 flex items-center gap-1 font-medium">
                  <Check className="w-3 h-3" /> Thanks for joining the journey!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Divider with subtle Golden Brown glow */}
        <div className="relative pt-6 border-t border-[#2D2012]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B8863B]/60 to-transparent" />

          {/* Bottom Copyright & Legal Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#8C8070]">
            <p>© 2025 D Tech. All rights reserved.</p>

            <div className="flex items-center gap-3 text-[12px]">
              <button
                onClick={() => setPolicyModal('privacy')}
                className="hover:text-[#D4A85B] transition-colors"
              >
                Privacy Policy
              </button>
              <span className="text-[#3F2E1B]">|</span>
              <button
                onClick={() => setPolicyModal('terms')}
                className="hover:text-[#D4A85B] transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightweight Legal Modal for Privacy Policy / Terms */}
      {policyModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setPolicyModal(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#171009] border border-[#B8863B]/40 rounded-2xl p-6 sm:p-8 text-left shadow-[0_0_40px_rgba(184,134,59,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-white mb-2">
              {policyModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <p className="text-xs text-[#A89E8E] leading-relaxed mb-6">
              {policyModal === 'privacy'
                ? 'Your privacy is paramount. Any email provided for inquiry or newsletter dispatch is kept strictly confidential and will never be shared, sold, or distributed to third parties.'
                : 'All cinematic sequences, generative media, and edit breakdowns displayed are original creative works directed and edited by D Tech. Reproduction without permission is prohibited.'}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setPolicyModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#2A1E12] hover:bg-[#3D2C1B] border border-[#B8863B]/30 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
