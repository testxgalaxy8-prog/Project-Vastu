/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType, DiscoverTab, ServiceType, LibraryCategory } from './types';
import { Navbar } from './components/Navbar';
import { DivineBackground } from './components/DivineBackground';
import { DivineCursor } from './components/DivineCursor';
import { IntroAnimation } from './components/IntroAnimation';
import { HomeSection } from './components/HomeSection';
import { DiscoverSection } from './components/DiscoverSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { GyanKoshSection } from './components/GyanKoshSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { AdminPanel } from './components/AdminPanel';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [discoverSubTab, setDiscoverSubTab] = useState<DiscoverTab>('meaning');
  const [serviceSubTab, setServiceSubTab] = useState<ServiceType>('residential');
  const [gyanKoshSubTab, setGyanKoshSubTab] = useState<LibraryCategory>('shabd-kosh');
  const [petalsEnabled, setPetalsEnabled] = useState<boolean>(true);
  
  // Show intro animation on domain search / initial visit
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    // Check if intro has already been shown in this session
    try {
      const hasSeen = sessionStorage.getItem('vastu_ritam_intro_seen');
      return !hasSeen;
    } catch {
      return true;
    }
  });

  const handleCompleteIntro = (targetPage: PageType = 'home') => {
    try {
      sessionStorage.setItem('vastu_ritam_intro_seen', 'true');
    } catch (e) {
      console.warn('Session storage inaccessible:', e);
    }
    setShowIntro(false);
    if (targetPage) {
      setCurrentPage(targetPage);
    }
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  // Smooth scroll to top on page navigation
  const handleNavigate = (page: PageType, subTab?: string) => {
    setCurrentPage(page);

    if (page === 'discover' && subTab) {
      setDiscoverSubTab(subTab as DiscoverTab);
    } else if (page === 'what-we-do' && subTab) {
      setServiceSubTab(subTab as ServiceType);
    } else if (page === 'gyan-kosh' && subTab) {
      setGyanKoshSubTab(subTab as LibraryCategory);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1A0F0A] text-[#FFF7ED] flex flex-col font-['Marcellus'] relative overflow-x-hidden selection:bg-[#E88A16] selection:text-[#2D1B14]">
      {/* Intro Animation on arrival / domain search */}
      {showIntro && (
        <IntroAnimation onComplete={handleCompleteIntro} />
      )}

      {/* Custom Divine Mouse Cursor Effects */}
      <DivineCursor />

      {/* Subtle Slow-Moving Mandalas, Floating Marigold Petals & Incense Smoke Background */}
      <DivineBackground petalsEnabled={petalsEnabled} />

      {/* Top Navbar with Dropdown Menus */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        petalsEnabled={petalsEnabled}
        onTogglePetals={() => setPetalsEnabled((prev) => !prev)}
        onReplayIntro={handleReplayIntro}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1 relative z-10">
        {currentPage === 'home' && (
          <HomeSection onNavigate={handleNavigate} onReplayIntro={handleReplayIntro} />
        )}

        {currentPage === 'discover' && (
          <DiscoverSection initialTab={discoverSubTab} />
        )}

        {currentPage === 'what-we-do' && (
          <WhatWeDoSection
            initialService={serviceSubTab}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'gyan-kosh' && (
          <GyanKoshSection
            initialCategory={gyanKoshSubTab}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'testimonials' && (
          <TestimonialsSection />
        )}

        {currentPage === 'contact' && (
          <ContactSection />
        )}

        {currentPage === 'admin' && (
          <AdminPanel onNavigate={handleNavigate} />
        )}
      </main>

      {/* Sacred Footer with Emblem, Links, and Sanskrit Invocations */}
      <Footer onNavigate={handleNavigate} onReplayIntro={handleReplayIntro} />
    </div>
  );
}
