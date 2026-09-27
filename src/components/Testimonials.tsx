import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, User } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-28 bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#EAE7DF]/40 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#B8863B] font-semibold mb-3">
              <span className="w-6 h-[1.5px] bg-[#B8863B]" />
              <span>COLLABORATOR FEEDBACK</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white dark:text-white light:text-[#0B0B0B] tracking-tight uppercase">
              WHAT CLIENTS SAY
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-400 dark:text-neutral-400 light:text-neutral-600 leading-relaxed">
            Feedback from creative agencies, brand directors, and festival curators on cinematic AI video delivery.
          </p>
        </div>

        {/* 3 Testimonials in a clean editorial row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 bg-neutral-950/70 dark:bg-neutral-950/70 light:bg-white border border-neutral-800/80 dark:border-neutral-800/80 light:border-neutral-200 flex flex-col justify-between relative group hover:border-[#B8863B] transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-6 h-6 text-[#B8863B]" />
                  {item.isPlaceholder && (
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 bg-neutral-900 dark:bg-neutral-900 light:bg-neutral-100 px-2 py-0.5 border border-neutral-800 dark:border-neutral-800 light:border-neutral-200">
                      Sample Testimonial
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base text-neutral-300 dark:text-neutral-300 light:text-neutral-700 italic leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800/60 dark:border-neutral-800/60 light:border-neutral-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-900 dark:bg-neutral-900 light:bg-neutral-100 border border-[#B8863B]/60 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-[#B8863B]" />
                </div>

                <div>
                  <p className="font-display font-bold text-sm sm:text-base text-white dark:text-white light:text-[#0B0B0B]">
                    {item.clientName}
                  </p>
                  <p className="text-xs text-[#B8863B] font-medium">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
