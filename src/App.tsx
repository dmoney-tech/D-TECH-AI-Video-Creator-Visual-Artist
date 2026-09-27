/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Services } from './components/Services';
import { FromAiToFinalCut } from './components/FromAiToFinalCut';
import { FeaturedFilm } from './components/FeaturedFilm';
import { ImageGallery } from './components/ImageGallery';
import { AIToolkit } from './components/AIToolkit';
import { Process } from './components/Process';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { Testimonials } from './components/Testimonials';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

// Intro & Modals
import { CinematicIntro } from './components/CinematicIntro';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { VideoPlayerModal } from './components/modals/VideoPlayerModal';
import { LightboxModal, LightboxImageItem } from './components/modals/LightboxModal';
import { ProjectInquiryModal } from './components/modals/ProjectInquiryModal';

// Data
import {
  SELECTED_PROJECTS,
  AI_VIDEOS,
  VISUAL_DEV_GALLERY,
  ProjectCaseStudy,
  AIVideo,
} from './data/portfolioData';

export function PortfolioContent() {
  // Show intro reel on first visit per session, or allow manual replay anytime
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    try {
      const hasViewed = sessionStorage.getItem('dtech_ai_intro_seen');
      return hasViewed !== 'true';
    } catch {
      return true;
    }
  });

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [activeVideo, setActiveVideo] = useState<AIVideo | null>(null);
  const [lightboxState, setLightboxState] = useState<{
    image: LightboxImageItem;
    index: number;
  } | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState<boolean>(false);

  const handleIntroComplete = () => {
    try {
      sessionStorage.setItem('dtech_ai_intro_seen', 'true');
    } catch {
      // Storage unavailable
    }
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  // Scroll to work section
  const handleViewWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open Hero showreel video
  const handleOpenHeroVideo = () => {
    setActiveVideo(AI_VIDEOS[0]);
  };

  // Play video from a project case study
  const handlePlayProjectVideo = (project: ProjectCaseStudy) => {
    const matchedVideo = AI_VIDEOS.find((v) => v.title.toLowerCase().includes(project.title.toLowerCase())) || {
      id: project.id,
      title: project.title.toUpperCase(),
      type: project.category,
      category: project.category,
      duration: project.duration || '02:00',
      year: project.year,
      shortDescription: project.tagline,
      poster: project.thumbnail,
      videoUrl: project.heroMedia.url,
      toolsUsed: project.tools,
      aspectRatio: '2.39:1' as const,
      directorNotes: project.idea,
    };
    setActiveVideo(matchedVideo);
  };

  // Next project navigation within Case Study Modal
  const handleNextProject = () => {
    if (!selectedCaseStudy) return;
    const currentIndex = SELECTED_PROJECTS.findIndex((p) => p.id === selectedCaseStudy.id);
    const nextIndex = (currentIndex + 1) % SELECTED_PROJECTS.length;
    setSelectedCaseStudy(SELECTED_PROJECTS[nextIndex]);
  };

  // Lightbox Next/Prev handlers
  const handleNextImage = () => {
    if (!lightboxState) return;
    const nextIndex = (lightboxState.index + 1) % VISUAL_DEV_GALLERY.length;
    setLightboxState({ image: VISUAL_DEV_GALLERY[nextIndex], index: nextIndex });
  };

  const handlePrevImage = () => {
    if (!lightboxState) return;
    const prevIndex = (lightboxState.index - 1 + VISUAL_DEV_GALLERY.length) % VISUAL_DEV_GALLERY.length;
    setLightboxState({ image: VISUAL_DEV_GALLERY[prevIndex], index: prevIndex });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] dark:bg-[#0B0B0B] light:bg-[#F7F5F0] text-white dark:text-white light:text-[#0B0B0B] transition-colors duration-300 selection:bg-[#B8863B] selection:text-white">
      {/* 5-10s Homepage Cinematic AI Video Intro / Showreel */}
      {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}

      {/* 2. Navigation */}
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onViewWork={handleViewWork}
          onOpenInquiry={() => setInquiryOpen(true)}
          onOpenHeroVideo={handleOpenHeroVideo}
          onReplayIntro={handleReplayIntro}
        />

        {/* 2. About (I'm An AI Video Creator) */}
        <About onOpenInquiry={() => setInquiryOpen(true)} />

        {/* 3. Featured Projects Showcase (Replaced with Reference Layout) */}
        <FeaturedProjects onPlayVideo={(video) => setActiveVideo(video)} />

        {/* 4. What I Do With AI */}
        <Services onOpenInquiry={() => setInquiryOpen(true)} />

        {/* 5 & 6. From AI Generation To Final Cut + See The Edit */}
        <FromAiToFinalCut />


        {/* 8. Featured AI Film (Festival Presentation) */}
        <FeaturedFilm onWatchFullProject={(video) => setActiveVideo(video)} />

        {/* 9. AI Visual Development */}
        <ImageGallery
          onOpenLightbox={(item, index) => setLightboxState({ image: item, index })}
        />

        {/* 10. AI Toolkit */}
        <AIToolkit />

        {/* 11. Creative Process (How I Turn An Idea Into A Video) */}
        <Process />

        {/* 12. Why AI Video? (AI-Generated. Human-Directed.) */}
        <Philosophy />

        {/* 14. What Clients Say (Testimonials) */}
        <Testimonials />

        {/* 15. Final CTA (Got An Idea For A Video?) */}
        <ContactCTA
          onOpenInquiry={() => setInquiryOpen(true)}
          onViewWork={handleViewWork}
        />
      </main>

      {/* 16. Minimal Footer */}
      <Footer />

      {/* Modals */}
      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onNextProject={handleNextProject}
        onPlayHeroVideo={handlePlayProjectVideo}
      />

      {/* Cinematic Custom Video Player Modal */}
      <VideoPlayerModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

      {/* High-Resolution Lightbox Viewer */}
      <LightboxModal
        image={lightboxState?.image || null}
        onClose={() => setLightboxState(null)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />

      {/* Interactive Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
