import React, { useState, useRef, useEffect } from 'react';
import { PageType, DiscoverTab, ServiceType, LibraryCategory } from '../types';
import { ChevronDown, Menu, X, Sparkles, Compass, BookOpen, MessageSquare, PhoneCall, Award, Layers } from 'lucide-react';

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
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleSubNavigate = (page: PageType, subTab?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(page, subTab);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fbf5e8]/95 backdrop-blur-md border-b border-amber-400/70 shadow-xs">
      {/* Top Divine Sanskrit Motto Ribbon */}
      <div className="bg-gradient-to-r from-emerald-950 via-amber-950 to-red-950 text-amber-100 py-1 px-4 text-xs font-serif tracking-widest text-center flex items-center justify-between border-b border-amber-600/40">
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-amber-200/80">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Classical Research & Spatial Science</span>
        </div>

        <div className="mx-auto flex items-center gap-2">
          <span className="text-amber-300 font-['Yatra_One'] tracking-wide">॥ वास्तु रितम् ॥</span>
          <span className="text-amber-400/70 hidden md:inline">·</span>
          <span className="text-amber-200/90 font-['Rozha_One'] text-xs hidden md:inline">संतुलन · समृद्धि · सौख्यम्</span>
        </div>

        <div className="flex items-center gap-3">
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              title="Replay Ancient Palm Leaf Intro Animation"
              className="text-[11px] text-amber-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer bg-amber-900/60 hover:bg-amber-900 px-2 py-0.5 rounded border border-amber-500/40"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Intro</span>
            </button>
          )}

          <button
            onClick={onTogglePetals}
            title={petalsEnabled ? "Pause Marigold Petals" : "Enable Floating Marigold Petals"}
            className="text-[11px] text-amber-200 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-amber-400" />
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
            className="cursor-pointer group shrink-0 transition-transform group-hover:scale-102"
          >
            <VastuRitamLogo variant="horizontal" size={56} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 shrink-0">
            {/* 1. Home */}
            <button
              onClick={() => handleSubNavigate('home')}
              className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-['Marcellus'] rounded-lg transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'text-red-950 font-bold bg-amber-200/70 border border-red-600/70 shadow-2xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-amber-100/60'
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
                className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-['Marcellus'] rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  currentPage === 'discover'
                    ? 'text-red-950 font-bold bg-amber-200/70 border border-red-600/70 shadow-2xs'
                    : 'text-stone-800 hover:text-stone-950 hover:bg-amber-100/60'
                }`}
              >
                <span>Discover Vastu Ritam</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
              </button>

              {activeDropdown === 'discover' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-amber-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-serif font-bold text-amber-800 uppercase tracking-wider border-b border-amber-100">
                    Origins & Epistemology
                  </div>
                  <button
                    onClick={() => handleSubNavigate('discover', 'meaning')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-red-900 flex items-center justify-between"
                  >
                    <span>The Meaning (वास्तु + रितम्)</span>
                  </button>
                  <button
                    onClick={() => handleSubNavigate('discover', 'philosophy')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-red-900 flex items-center justify-between"
                  >
                    <span>Our Philosophy (3 Principles)</span>
                  </button>
                  <button
                    onClick={() => handleSubNavigate('discover', 'why-us')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-red-900 flex items-center justify-between"
                  >
                    <span>Why VASTU RITAM?</span>
                  </button>
                  <button
                    onClick={() => handleSubNavigate('discover', 'collaborators')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-red-900 flex items-center justify-between"
                  >
                    <span>Our Collaborators</span>
                  </button>
                  <button
                    onClick={() => handleSubNavigate('discover', 'mission-vision')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-red-900 flex items-center justify-between"
                  >
                    <span>Mission & Vision</span>
                  </button>
                  <button
                    onClick={() => handleSubNavigate('discover', 'founder')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-red-900 flex items-center justify-between"
                  >
                    <span>Founder & Research Scholar</span>
                  </button>
                  <div className="border-t border-amber-100 mt-1 pt-1">
                    <button
                      onClick={() => handleSubNavigate('discover', 'emblem')}
                      className="w-full text-left px-4 py-2 text-xs sm:text-sm text-emerald-900 font-semibold hover:bg-emerald-50 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
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
                className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-['Marcellus'] rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  currentPage === 'what-we-do'
                    ? 'text-red-950 font-bold bg-amber-200/70 border border-red-600/70 shadow-2xs'
                    : 'text-stone-800 hover:text-stone-950 hover:bg-amber-100/60'
                }`}
              >
                <span>What We Do</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
              </button>

              {activeDropdown === 'what-we-do' && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-amber-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-serif font-bold text-amber-800 uppercase tracking-wider border-b border-amber-100">
                    Consultation & Spatial Planning
                  </div>
                  <button
                    onClick={() => handleSubNavigate('what-we-do', 'residential')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-red-900"
                  >
                    Residential Vastu
                  </button>
                  <button
                    onClick={() => handleSubNavigate('what-we-do', 'commercial')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-red-900"
                  >
                    Commercial Vastu
                  </button>
                  <button
                    onClick={() => handleSubNavigate('what-we-do', 'industrial')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-red-900"
                  >
                    Industrial Vastu
                  </button>
                  <button
                    onClick={() => handleSubNavigate('what-we-do', 'before-you-buy')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-red-900"
                  >
                    Vastu Before You Buy
                  </button>
                  <div className="border-t border-amber-100 mt-1 pt-1">
                    <button
                      onClick={() => handleSubNavigate('what-we-do', 'consultation')}
                      className="w-full text-left px-4 py-2 text-xs sm:text-sm text-red-900 font-semibold hover:bg-red-50 flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-red-600" />
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
                className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-['Marcellus'] rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  currentPage === 'gyan-kosh'
                    ? 'text-red-950 font-bold bg-amber-200/70 border border-red-600/70 shadow-2xs'
                    : 'text-stone-800 hover:text-stone-950 hover:bg-amber-100/60'
                }`}
              >
                <span>Vastu Gyan-Kosh (Library)</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
              </button>

              {activeDropdown === 'gyan-kosh' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-amber-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-serif font-bold text-amber-800 uppercase tracking-wider border-b border-amber-100">
                    Scholarly Repository
                  </div>
                  <button
                    onClick={() => handleSubNavigate('gyan-kosh', 'shabd-kosh')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-red-900 flex items-center justify-between"
                  >
                    <span>Vastu Shabd-Kosh (Dictionary)</span>
                    <span className="text-[10px] text-amber-800 font-serif">शब्‍दकोश</span>
                  </button>
                  <button
                    onClick={() => handleSubNavigate('gyan-kosh', 'prakaran')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-red-900 flex items-center justify-between"
                  >
                    <span>Prakaran (Scholarly Articles)</span>
                    <span className="text-[10px] text-amber-800 font-serif">प्रकरण</span>
                  </button>
                  <button
                    onClick={() => handleSubNavigate('gyan-kosh', 'handbooks')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-red-900"
                  >
                    Handbooks & Guides
                  </button>
                  <button
                    onClick={() => handleSubNavigate('gyan-kosh', 'videos')}
                    className="w-full text-left px-4 py-2 text-xs sm:text-sm text-stone-700 hover:bg-amber-50 hover:text-red-900"
                  >
                    Videos & Visual Learning
                  </button>
                  <div className="border-t border-amber-100 mt-1 pt-1">
                    <button
                      onClick={() => handleSubNavigate('gyan-kosh', 'myths')}
                      className="w-full text-left px-4 py-2 text-xs sm:text-sm text-amber-950 font-semibold hover:bg-amber-50 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>Vastu Myths & Misconceptions</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Testimonials */}
            <button
              onClick={() => handleSubNavigate('testimonials')}
              className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-['Marcellus'] rounded-lg transition-colors cursor-pointer ${
                currentPage === 'testimonials'
                  ? 'text-red-950 font-bold bg-amber-200/70 border border-red-600/70 shadow-2xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-amber-100/60'
              }`}
            >
              Testimonials
            </button>

            {/* 6. Contact */}
            <button
              onClick={() => handleSubNavigate('contact')}
              className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-['Marcellus'] rounded-lg transition-colors cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-red-950 font-bold bg-amber-200/70 border border-red-600/70 shadow-2xs'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-amber-100/60'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={() => handleSubNavigate('contact')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-800 via-amber-800 to-amber-900 text-amber-50 hover:from-red-900 hover:to-amber-950 font-['Marcellus'] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
              <span>Consult VASTU RITAM</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-amber-100/60 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fdfbf7] border-b border-amber-200 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <button
            onClick={() => handleSubNavigate('home')}
            className={`w-full text-left py-2 px-3 rounded-lg text-sm font-['Marcellus'] ${
              currentPage === 'home' ? 'bg-amber-100 text-red-950 font-bold' : 'text-stone-800'
            }`}
          >
            Home
          </button>

          {/* Discover Submenu */}
          <div className="border-t border-amber-100 pt-2">
            <div className="px-3 py-1 text-xs font-bold text-amber-900 uppercase">Discover Vastu Ritam</div>
            <div className="pl-4 space-y-1">
              <button onClick={() => handleSubNavigate('discover', 'meaning')} className="block w-full text-left py-1 text-xs text-stone-700">The Meaning</button>
              <button onClick={() => handleSubNavigate('discover', 'philosophy')} className="block w-full text-left py-1 text-xs text-stone-700">Our Philosophy</button>
              <button onClick={() => handleSubNavigate('discover', 'why-us')} className="block w-full text-left py-1 text-xs text-stone-700">Why VASTU RITAM?</button>
              <button onClick={() => handleSubNavigate('discover', 'collaborators')} className="block w-full text-left py-1 text-xs text-stone-700">Our Collaborators</button>
              <button onClick={() => handleSubNavigate('discover', 'mission-vision')} className="block w-full text-left py-1 text-xs text-stone-700">Mission and Vision</button>
              <button onClick={() => handleSubNavigate('discover', 'founder')} className="block w-full text-left py-1 text-xs text-stone-700">Founder and Research Scholar</button>
              <button onClick={() => handleSubNavigate('discover', 'emblem')} className="block w-full text-left py-1 text-xs font-bold text-emerald-900">Our Emblem / Identity</button>
            </div>
          </div>

          {/* What We Do Submenu */}
          <div className="border-t border-amber-100 pt-2">
            <div className="px-3 py-1 text-xs font-bold text-amber-900 uppercase">What We Do</div>
            <div className="pl-4 space-y-1">
              <button onClick={() => handleSubNavigate('what-we-do', 'residential')} className="block w-full text-left py-1 text-xs text-stone-700">Residential Vastu</button>
              <button onClick={() => handleSubNavigate('what-we-do', 'commercial')} className="block w-full text-left py-1 text-xs text-stone-700">Commercial Vastu</button>
              <button onClick={() => handleSubNavigate('what-we-do', 'industrial')} className="block w-full text-left py-1 text-xs text-stone-700">Industrial Vastu</button>
              <button onClick={() => handleSubNavigate('what-we-do', 'before-you-buy')} className="block w-full text-left py-1 text-xs text-stone-700">Vastu Before You Buy</button>
              <button onClick={() => handleSubNavigate('what-we-do', 'consultation')} className="block w-full text-left py-1 text-xs font-bold text-red-900">Consult VASTU RITAM</button>
            </div>
          </div>

          {/* Gyan-Kosh Submenu */}
          <div className="border-t border-amber-100 pt-2">
            <div className="px-3 py-1 text-xs font-bold text-amber-900 uppercase">Vastu Gyan-Kosh (Library)</div>
            <div className="pl-4 space-y-1">
              <button onClick={() => handleSubNavigate('gyan-kosh', 'shabd-kosh')} className="block w-full text-left py-1 text-xs text-stone-700">Vastu Shabd-Kosh (Dictionary)</button>
              <button onClick={() => handleSubNavigate('gyan-kosh', 'prakaran')} className="block w-full text-left py-1 text-xs text-stone-700">Prakaran (Scholarly Treatises)</button>
              <button onClick={() => handleSubNavigate('gyan-kosh', 'handbooks')} className="block w-full text-left py-1 text-xs text-stone-700">Handbooks</button>
              <button onClick={() => handleSubNavigate('gyan-kosh', 'videos')} className="block w-full text-left py-1 text-xs text-stone-700">Videos</button>
              <button onClick={() => handleSubNavigate('gyan-kosh', 'myths')} className="block w-full text-left py-1 text-xs font-bold text-amber-900">Myths and Misconceptions</button>
            </div>
          </div>

          <button
            onClick={() => handleSubNavigate('testimonials')}
            className={`w-full text-left py-2 px-3 rounded-lg text-sm font-['Marcellus'] ${
              currentPage === 'testimonials' ? 'bg-amber-100 text-red-950 font-bold' : 'text-stone-800'
            }`}
          >
            Testimonials
          </button>

          <button
            onClick={() => handleSubNavigate('contact')}
            className={`w-full text-left py-2 px-3 rounded-lg text-sm font-['Marcellus'] ${
              currentPage === 'contact' ? 'bg-amber-100 text-red-950 font-bold' : 'text-stone-800'
            }`}
          >
            Contact VASTU RITAM
          </button>
        </div>
      )}
    </header>
  );
};
