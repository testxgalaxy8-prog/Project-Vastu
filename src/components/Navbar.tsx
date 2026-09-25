import React, { useState, useRef, useEffect } from 'react';
import { PageType, DiscoverTab, ServiceType, LibraryCategory } from '../types';
import { ChevronDown, Menu, X, Sparkles, Compass, BookOpen, MessageSquare, PhoneCall, Award, Layers, Sliders } from 'lucide-react';

import { VastuRitamLogo } from './VastuRitamLogo';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType, subTab?: string) => void;
  petalsEnabled: boolean;
  onTogglePetals: () => void;
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  petalsEnabled,
  onTogglePetals,
  onReplayIntro,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSubNavigate = (page: PageType, subTab?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(page, subTab);
  };

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-[#3B1111] via-[#4A1515] to-[#2D1B14] border-b-2 border-[#D4A72C]/70 shadow-xl">
      {/* Top Divine Sanskrit Motto Ribbon */}
      <div className="bg-[#2D1B14]/90 text-[#E8D3A8] py-1 px-4 text-xs font-serif tracking-widest text-center flex items-center justify-between border-b border-[#D4A72C]/30">
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#E8D3A8]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#167A68]" />
          <span>Classical Research & Spatial Science</span>
        </div>

        <div className="mx-auto flex items-center gap-2">
          <span className="text-[#D4A72C] font-['Yatra_One'] tracking-wide">॥ वास्तु रितम् ॥</span>
          <span className="text-[#D4A72C]/70 hidden md:inline">·</span>
          <span className="text-[#E8D3A8] font-['Rozha_One'] text-xs hidden md:inline">संतुलन · समृद्धि · सौख्यम्</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => handleSubNavigate('admin')}
            title="Advertisement Admin Console"
            className="text-[11px] text-[#D4A72C] hover:text-[#FFF7ED] flex items-center gap-1 transition-colors cursor-pointer bg-[#0F5C55] hover:bg-[#167A68] px-2 py-0.5 rounded border border-[#D4A72C]/50"
          >
            <Sliders className="w-3 h-3 text-[#D4A72C]" />
            <span>Ad Admin</span>
          </button>

          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              title="Replay Ancient Palm Leaf Intro Animation"
              className="text-[11px] text-[#D4A72C] hover:text-[#FFF7ED] flex items-center gap-1 transition-colors cursor-pointer bg-[#6B1F1F] hover:bg-[#B94E2C] px-2 py-0.5 rounded border border-[#D4A72C]/40"
            >
              <Sparkles className="w-3 h-3 text-[#D4A72C]" />
              <span>Intro</span>
            </button>
          )}

          <button
            onClick={onTogglePetals}
            title={petalsEnabled ? "Pause Marigold Petals" : "Enable Floating Marigold Petals"}
            className="text-[11px] text-[#E8D3A8] hover:text-[#FFF7ED] flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-[#D4A72C]" />
            <span className="hidden sm:inline">{petalsEnabled ? "Petals: On" : "Petals: Off"}</span>
          </button>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[82px] py-2 sm:py-2.5 gap-4">
          {/* Official Logo & Brand Identity */}
          <div
            onClick={() => handleSubNavigate('home')}
            className="cursor-pointer group shrink-0 transition-transform group-hover:scale-102 bg-[#2D1B14]/40 px-3 py-1.5 rounded-2xl border border-[#D4A72C]/30 shadow-sm"
          >
            <VastuRitamLogo variant="horizontal" size={56} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 shrink-0">
            {/* 1. Home */}
            <button
              onClick={() => handleSubNavigate('home')}
              className={`px-3 py-1.5 text-xs xl:text-sm font-['Marcellus'] rounded-lg transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'text-[#2D1B14] font-bold bg-[#E88A16] border border-[#D4A72C] shadow-sm'
                  : 'text-[#E8D3A8] hover:text-[#FFF7ED] hover:bg-[#6B1F1F]/60'
              }`}
            >
              Home
            </button>

            {/* 2. Discover Vastu Ritam (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('discover')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleSubNavigate('discover')}
                className={`px-3 py-1.5 text-xs xl:text-sm font-['Marcellus'] rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  currentPage === 'discover'
                    ? 'text-[#2D1B14] font-bold bg-[#E88A16] border border-[#D4A72C] shadow-sm'
                    : 'text-[#E8D3A8] hover:text-[#FFF7ED] hover:bg-[#6B1F1F]/60'
                }`}
              >
                <span>Discover Vastu Ritam</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#D4A72C]" />
              </button>

              {activeDropdown === 'discover' && (
                <div className="absolute top-full left-0 w-72 bg-[#2D1B14] rounded-xl shadow-2xl border-2 border-[#D4A72C] py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-serif font-bold text-[#E88A16] uppercase tracking-wider border-b border-[#D4A72C]/30">
                    Origins & Epistemology
                  </div>
                  <button
                    onClick={() => handleSubNavigate('discover', 'meaning')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED] flex items-center justify-between"
                  >
                    <span>The Meaning (वास्तु + रितम्)</span>
                  </button>
                  <button
                    onClick={() => handleSubNavigate('discover', 'philosophy')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED] flex items-center justify-between"
                  >
                    <span>Our Philosophy (3 Principles)</span>
                  </button>
                  <button
                    onClick={() => handleSubNavigate('discover', 'why-us')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED] flex items-center justify-between"
                  >
                    <span>Why VASTU RITAM?</span>
                  </button>
                  <button
                    onClick={() => handleSubNavigate('discover', 'collaborators')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED] flex items-center justify-between"
                  >
                    <span>Our Collaborators</span>
                  </button>
                  <button
                    onClick={() => handleSubNavigate('discover', 'mission-vision')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED] flex items-center justify-between"
                  >
                    <span>Mission & Vision</span>
                  </button>
                  <button
                    onClick={() => handleSubNavigate('discover', 'founder')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED] flex items-center justify-between"
                  >
                    <span>Founder & Research Scholar</span>
                  </button>
                  <div className="border-t border-[#D4A72C]/30 mt-1 pt-1">
                    <button
                      onClick={() => handleSubNavigate('discover', 'emblem')}
                      className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#D4A72C] font-semibold hover:bg-[#0F5C55] hover:text-[#FFF7ED] flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#E88A16]" />
                      <span>Our Emblem · Our Identity (Interactive)</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. What we do (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('what-we-do')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleSubNavigate('what-we-do')}
                className={`px-3 py-1.5 text-xs xl:text-sm font-['Marcellus'] rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  currentPage === 'what-we-do'
                    ? 'text-[#2D1B14] font-bold bg-[#E88A16] border border-[#D4A72C] shadow-sm'
                    : 'text-[#E8D3A8] hover:text-[#FFF7ED] hover:bg-[#6B1F1F]/60'
                }`}
              >
                <span>What We Do</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#D4A72C]" />
              </button>

              {activeDropdown === 'what-we-do' && (
                <div className="absolute top-full left-0 w-64 bg-[#2D1B14] rounded-xl shadow-2xl border-2 border-[#D4A72C] py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-serif font-bold text-[#E88A16] uppercase tracking-wider border-b border-[#D4A72C]/30">
                    Consultation & Spatial Planning
                  </div>
                  <button
                    onClick={() => handleSubNavigate('what-we-do', 'residential')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED]"
                  >
                    Residential Vastu
                  </button>
                  <button
                    onClick={() => handleSubNavigate('what-we-do', 'commercial')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED]"
                  >
                    Commercial Vastu
                  </button>
                  <button
                    onClick={() => handleSubNavigate('what-we-do', 'industrial')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED]"
                  >
                    Industrial Vastu
                  </button>
                  <button
                    onClick={() => handleSubNavigate('what-we-do', 'before-you-buy')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED]"
                  >
                    Vastu Before You Buy
                  </button>
                  <div className="border-t border-[#D4A72C]/30 mt-1 pt-1">
                    <button
                      onClick={() => handleSubNavigate('what-we-do', 'consultation')}
                      className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#D4A72C] font-semibold hover:bg-[#6B1F1F] hover:text-[#FFF7ED] flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#E88A16]" />
                      <span>Consult VASTU RITAM</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Vastu Gyan-Kosh (Library) (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('gyan-kosh')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleSubNavigate('gyan-kosh')}
                className={`px-3 py-1.5 text-xs xl:text-sm font-['Marcellus'] rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  currentPage === 'gyan-kosh'
                    ? 'text-[#2D1B14] font-bold bg-[#E88A16] border border-[#D4A72C] shadow-sm'
                    : 'text-[#E8D3A8] hover:text-[#FFF7ED] hover:bg-[#6B1F1F]/60'
                }`}
              >
                <span>Vastu Gyan-Kosh (Library)</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#D4A72C]" />
              </button>

              {activeDropdown === 'gyan-kosh' && (
                <div className="absolute top-full left-0 w-72 bg-[#2D1B14] rounded-xl shadow-2xl border-2 border-[#D4A72C] py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-serif font-bold text-[#E88A16] uppercase tracking-wider border-b border-[#D4A72C]/30">
                    Scholarly Repository
                  </div>
                  <button
                    onClick={() => handleSubNavigate('gyan-kosh', 'shabd-kosh')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED] flex items-center justify-between"
                  >
                    <span>Vastu Shabd-Kosh (Dictionary)</span>
                    <span className="text-[10px] text-[#D4A72C] font-serif">शब्‍दकोश</span>
                  </button>
                  <button
                    onClick={() => handleSubNavigate('gyan-kosh', 'prakaran')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED] flex items-center justify-between"
                  >
                    <span>Prakaran (Scholarly Articles)</span>
                    <span className="text-[10px] text-[#D4A72C] font-serif">प्रकरण</span>
                  </button>
                  <button
                    onClick={() => handleSubNavigate('gyan-kosh', 'handbooks')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED]"
                  >
                    Handbooks & Guides
                  </button>
                  <button
                    onClick={() => handleSubNavigate('gyan-kosh', 'videos')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED]"
                  >
                    Videos & Visual Learning
                  </button>
                  <div className="border-t border-[#D4A72C]/30 mt-1 pt-1">
                    <button
                      onClick={() => handleSubNavigate('gyan-kosh', 'myths')}
                      className="w-full text-left px-4 py-2 text-xs sm:text-sm text-[#D4A72C] font-semibold hover:bg-[#6B1F1F] hover:text-[#FFF7ED] flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#E88A16]" />
                      <span>Vastu Myths & Misconceptions</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Testimonials */}
            <button
              onClick={() => handleSubNavigate('testimonials')}
              className={`px-3 py-1.5 text-xs xl:text-sm font-['Marcellus'] rounded-lg transition-colors cursor-pointer ${
                currentPage === 'testimonials'
                  ? 'text-[#2D1B14] font-bold bg-[#E88A16] border border-[#D4A72C] shadow-sm'
                  : 'text-[#E8D3A8] hover:text-[#FFF7ED] hover:bg-[#6B1F1F]/60'
              }`}
            >
              Testimonials
            </button>

            {/* 6. Contact */}
            <button
              onClick={() => handleSubNavigate('contact')}
              className={`px-3 py-1.5 text-xs xl:text-sm font-['Marcellus'] rounded-lg transition-colors cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-[#2D1B14] font-bold bg-[#E88A16] border border-[#D4A72C] shadow-sm'
                  : 'text-[#E8D3A8] hover:text-[#FFF7ED] hover:bg-[#6B1F1F]/60'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action CTA in Saffron & Terracotta */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={() => handleSubNavigate('contact')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#E88A16] via-[#B94E2C] to-[#6B1F1F] text-[#FFF7ED] font-['Marcellus'] font-bold text-xs sm:text-sm border border-[#D4A72C] shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4A72C]" />
              <span>Consult VASTU RITAM</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#E8D3A8] hover:text-[#FFF7ED] hover:bg-[#6B1F1F]/60 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4A72C]" /> : <Menu className="w-6 h-6 text-[#D4A72C]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2D1B14] border-t-2 border-[#D4A72C] px-4 pt-2 pb-6 space-y-2 shadow-2xl">
          <button
            onClick={() => handleSubNavigate('home')}
            className={`w-full text-left py-2 px-3 rounded-lg text-sm font-['Marcellus'] ${
              currentPage === 'home' ? 'bg-[#E88A16] text-[#2D1B14] font-bold' : 'text-[#E8D3A8]'
            }`}
          >
            Home
          </button>

          {/* Discover Submenu */}
          <div className="border-t border-[#D4A72C]/30 pt-2">
            <div className="px-3 py-1 text-xs font-bold text-[#E88A16] uppercase">Discover Vastu Ritam</div>
            <div className="pl-4 space-y-1">
              <button onClick={() => handleSubNavigate('discover', 'meaning')} className="block w-full text-left py-1 text-xs text-[#E8D3A8] hover:text-[#FFF7ED]">The Meaning</button>
              <button onClick={() => handleSubNavigate('discover', 'philosophy')} className="block w-full text-left py-1 text-xs text-[#E8D3A8] hover:text-[#FFF7ED]">Our Philosophy</button>
              <button onClick={() => handleSubNavigate('discover', 'why-us')} className="block w-full text-left py-1 text-xs text-[#E8D3A8] hover:text-[#FFF7ED]">Why VASTU RITAM?</button>
              <button onClick={() => handleSubNavigate('discover', 'collaborators')} className="block w-full text-left py-1 text-xs text-[#E8D3A8] hover:text-[#FFF7ED]">Our Collaborators</button>
              <button onClick={() => handleSubNavigate('discover', 'mission-vision')} className="block w-full text-left py-1 text-xs text-[#E8D3A8] hover:text-[#FFF7ED]">Mission and Vision</button>
              <button onClick={() => handleSubNavigate('discover', 'founder')} className="block w-full text-left py-1 text-xs text-[#E8D3A8] hover:text-[#FFF7ED]">Founder and Research Scholar</button>
              <button onClick={() => handleSubNavigate('discover', 'emblem')} className="block w-full text-left py-1 text-xs font-bold text-[#D4A72C]">Our Emblem / Identity</button>
            </div>
          </div>

          {/* What We Do Submenu */}
          <div className="border-t border-[#D4A72C]/30 pt-2">
            <div className="px-3 py-1 text-xs font-bold text-[#E88A16] uppercase">What We Do</div>
            <div className="pl-4 space-y-1">
              <button onClick={() => handleSubNavigate('what-we-do', 'residential')} className="block w-full text-left py-1 text-xs text-[#E8D3A8] hover:text-[#FFF7ED]">Residential Vastu</button>
              <button onClick={() => handleSubNavigate('what-we-do', 'commercial')} className="block w-full text-left py-1 text-xs text-[#E8D3A8] hover:text-[#FFF7ED]">Commercial Vastu</button>
              <button onClick={() => handleSubNavigate('what-we-do', 'industrial')} className="block w-full text-left py-1 text-xs text-[#E8D3A8] hover:text-[#FFF7ED]">Industrial Vastu</button>
              <button onClick={() => handleSubNavigate('what-we-do', 'before-you-buy')} className="block w-full text-left py-1 text-xs text-[#E8D3A8] hover:text-[#FFF7ED]">Vastu Before You Buy</button>
              <button onClick={() => handleSubNavigate('what-we-do', 'consultation')} className="block w-full text-left py-1 text-xs font-bold text-[#D4A72C]">Consult VASTU RITAM</button>
            </div>
          </div>

          {/* Gyan-Kosh Submenu */}
          <div className="border-t border-[#D4A72C]/30 pt-2">
            <div className="px-3 py-1 text-xs font-bold text-[#E88A16] uppercase">Vastu Gyan-Kosh (Library)</div>
            <div className="pl-4 space-y-1">
              <button onClick={() => handleSubNavigate('gyan-kosh', 'shabd-kosh')} className="block w-full text-left py-1 text-xs text-[#E8D3A8] hover:text-[#FFF7ED]">Vastu Shabd-Kosh (Dictionary)</button>
              <button onClick={() => handleSubNavigate('gyan-kosh', 'prakaran')} className="block w-full text-left py-1 text-xs text-[#E8D3A8] hover:text-[#FFF7ED]">Prakaran (Scholarly Treatises)</button>
              <button onClick={() => handleSubNavigate('gyan-kosh', 'handbooks')} className="block w-full text-left py-1 text-xs text-[#E8D3A8] hover:text-[#FFF7ED]">Handbooks</button>
              <button onClick={() => handleSubNavigate('gyan-kosh', 'videos')} className="block w-full text-left py-1 text-xs text-[#E8D3A8] hover:text-[#FFF7ED]">Videos</button>
              <button onClick={() => handleSubNavigate('gyan-kosh', 'myths')} className="block w-full text-left py-1 text-xs font-bold text-[#D4A72C]">Myths and Misconceptions</button>
            </div>
          </div>

          <button
            onClick={() => handleSubNavigate('testimonials')}
            className={`w-full text-left py-2 px-3 rounded-lg text-sm font-['Marcellus'] ${
              currentPage === 'testimonials' ? 'bg-[#E88A16] text-[#2D1B14] font-bold' : 'text-[#E8D3A8]'
            }`}
          >
            Testimonials
          </button>

          <button
            onClick={() => handleSubNavigate('contact')}
            className={`w-full text-left py-2 px-3 rounded-lg text-sm font-['Marcellus'] ${
              currentPage === 'contact' ? 'bg-[#E88A16] text-[#2D1B14] font-bold' : 'text-[#E8D3A8]'
            }`}
          >
            Contact VASTU RITAM
          </button>
        </div>
      )}
    </header>
  );
};
