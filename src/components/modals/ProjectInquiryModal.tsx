import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'AI Commercial',
    budget: '$15,000 – $35,000',
    timeline: 'Within 1-2 Months',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate instantaneous, pristine transmission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const projectTypes = [
    'AI Commercial',
    'AI Film / Narrative Short',
    'Haute Couture / Fashion Visual',
    'AI Character & World Building',
    'Creative AI Consulting / Pipeline',
    'Experimental Media / Other',
  ];

  const budgetTiers = [
    '$5,000 – $15,000',
    '$15,000 – $35,000',
    '$35,000 – $75,000',
    '$75,000+ (Feature / Comprehensive)',
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0E0E0E] text-white border border-neutral-800 shadow-2xl p-6 sm:p-10 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top close button */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-800 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#B8863B] font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIRECTORIAL INQUIRY</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              LET'S CREATE
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close inquiry modal"
            className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#B8863B] flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#B8863B]/20 border border-[#B8863B] flex items-center justify-center text-[#D4A85B] mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white">
              Inquiry Dispatched
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, {formData.name}. Valen Kane’s studio typically reviews project treatments within 24 hours. A private treatment link and scheduling link will be sent to <span className="text-[#D4A85B]">{formData.email}</span>.
            </p>
            <div className="pt-6">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#B8863B] hover:bg-[#D4A85B] transition-colors cursor-pointer"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-xs font-mono">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-neutral-400 uppercase tracking-wider block">
                  YOUR NAME *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Elena Rostova"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#141414] border border-neutral-800 p-3 text-neutral-200 focus:border-[#B8863B] focus:outline-none transition-colors font-sans text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 uppercase tracking-wider block">
                  EMAIL ADDRESS *
                </label>
                <input
                  required
                  type="email"
                  placeholder="elena@studio.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#141414] border border-neutral-800 p-3 text-neutral-200 focus:border-[#B8863B] focus:outline-none transition-colors font-sans text-sm"
                />
              </div>
            </div>

            {/* Company / Brand */}
            <div className="space-y-1.5">
              <label className="text-neutral-400 uppercase tracking-wider block">
                ORGANIZATION / BRAND / STUDIO
              </label>
              <input
                type="text"
                placeholder="e.g. Maison de Luxe or Independent Film"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-[#141414] border border-neutral-800 p-3 text-neutral-200 focus:border-[#B8863B] focus:outline-none transition-colors font-sans text-sm"
              />
            </div>

            {/* Project Type Selector */}
            <div className="space-y-2">
              <label className="text-neutral-400 uppercase tracking-wider block">
                PROJECT CLASSIFICATION
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {projectTypes.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setFormData({ ...formData, projectType: type })}
                    className={`p-2.5 text-left border text-xs font-mono transition-colors cursor-pointer truncate ${
                      formData.projectType === type
                        ? 'bg-[#B8863B] text-black border-[#B8863B] font-bold'
                        : 'bg-[#141414] text-neutral-300 border-neutral-800 hover:border-neutral-600'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget & Timeline Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-neutral-400 uppercase tracking-wider block">
                  BUDGET RANGE
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#141414] border border-neutral-800 p-3 text-neutral-200 focus:border-[#B8863B] focus:outline-none transition-colors font-sans text-sm cursor-pointer"
                >
                  {budgetTiers.map((b) => (
                    <option key={b} value={b} className="bg-neutral-900 text-white">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-neutral-400 uppercase tracking-wider block">
                  TIMELINE
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-[#141414] border border-neutral-800 p-3 text-neutral-200 focus:border-[#B8863B] focus:outline-none transition-colors font-sans text-sm cursor-pointer"
                >
                  <option value="Urgent (< 3 Weeks)" className="bg-neutral-900 text-white">
                    Urgent (&lt; 3 Weeks)
                  </option>
                  <option value="Within 1-2 Months" className="bg-neutral-900 text-white">
                    Within 1-2 Months
                  </option>
                  <option value="Flexible / Q3-Q4" className="bg-neutral-900 text-white">
                    Flexible / Q3-Q4
                  </option>
                </select>
              </div>
            </div>

            {/* Narrative Vision / Message */}
            <div className="space-y-1.5">
              <label className="text-neutral-400 uppercase tracking-wider block">
                CREATIVE VISION / BRIEF *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your story, aesthetic references, target platforms, or specific ideas..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#141414] border border-neutral-800 p-3 text-neutral-200 focus:border-[#B8863B] focus:outline-none transition-colors font-sans text-sm leading-relaxed"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-xs font-semibold uppercase tracking-widest text-black bg-[#B8863B] hover:bg-[#D4A85B] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
              >
                {loading ? (
                  <span>TRANSMITTING BRIEF...</span>
                ) : (
                  <>
                    <span>SUBMIT PROJECT BRIEF</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
