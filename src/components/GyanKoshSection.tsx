import React, { useState, useEffect } from 'react';
import { LibraryCategory, DictionaryTerm, Article, Handbook, MythItem, PageType } from '../types';
import { SHABD_KOSH_DATA, PRAKARAN_ARTICLES, HANDBOOKS_DATA, MYTHS_DATA } from '../data/vastuData';
import {
  BookOpen,
  Search,
  Filter,
  Sparkles,
  BookMarked,
  Video,
  HelpCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Play,
  FileText,
  ChevronRight,
  Sliders,
  Eye,
  EyeOff,
  Maximize2,
  Minimize2,
  Type,
  X,
  ArrowLeft,
  Clock,
  User,
  Share2
} from 'lucide-react';
import { AdvertisementBanner } from './AdBanner';

interface GyanKoshSectionProps {
  initialCategory?: LibraryCategory;
  onNavigate?: (page: PageType, subTab?: string) => void;
}

export const GyanKoshSection: React.FC<GyanKoshSectionProps> = ({
  initialCategory = 'shabd-kosh',
  onNavigate,
}) => {
  const [activeCategory, setActiveCategory] = useState<LibraryCategory>(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDictFilter, setSelectedDictFilter] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeMythId, setActiveMythId] = useState<string>('1');

  // Reading Mode State & Typography Controls
  const [isReadingMode, setIsReadingMode] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const libraryTabs: { id: LibraryCategory; label: string; sanskrit: string }[] = [
    { id: 'shabd-kosh', label: 'Vastu Shabd-Kosh (Dictionary)', sanskrit: 'वास्तु शब्दकोशः' },
    { id: 'prakaran', label: 'Prakaran (Articles)', sanskrit: 'प्रकरणानि' },
    { id: 'handbooks', label: 'Handbooks', sanskrit: 'हस्तपुस्तिका' },
    { id: 'videos', label: 'Videos', sanskrit: 'दृश्य-माध्यम' },
    { id: 'myths', label: 'Vastu Myths & Misconceptions', sanskrit: 'भ्रान्ति-निवारणम्' },
  ];

  // Filter dictionary terms
  const filteredTerms = SHABD_KOSH_DATA.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sanskrit.includes(searchTerm) ||
      item.meaning.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedDictFilter === 'All' || item.category === selectedDictFilter;
    return matchesSearch && matchesCategory;
  });

  // Typography font size class helper
  const getFontSizeClasses = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg sm:text-xl leading-relaxed sm:leading-[2.1]';
      case 'xlarge':
        return 'text-xl sm:text-2xl leading-loose sm:leading-[2.3]';
      default:
        return 'text-base sm:text-lg leading-relaxed sm:leading-[1.9]';
    }
  };

  /**
   * Renders the article body with the AdvertisementBanner placed at a logical breakpoint
   */
  const renderArticleContentWithAds = (content: string) => {
    const rawParagraphs = content.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
    const paragraphs =
      rawParagraphs.length === 1 && rawParagraphs[0].includes('\n')
        ? rawParagraphs[0].split(/\n/).map((p) => p.trim()).filter(Boolean)
        : rawParagraphs;

    const breakpointIndex = paragraphs.length > 2 ? 2 : 1;
    const firstBlock = paragraphs.slice(0, breakpointIndex);
    const secondBlock = paragraphs.slice(breakpointIndex);

    return (
      <div className={`space-y-6 ${getFontSizeClasses()} font-['Marcellus'] text-[#2D1B14]`}>
        {/* First block of paragraphs */}
        {firstBlock.map((para, idx) => (
          <p
            key={`p-start-${idx}`}
            className={`text-[#2D1B14] leading-relaxed ${
              idx === 0
                ? 'first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-black first-letter:text-[#6B1F1F] first-letter:mr-2.5 first-letter:float-left first-letter:leading-none'
                : ''
            }`}
          >
            {para}
          </p>
        ))}

        {/* Logical Breakpoint: In-Article Advertisement Banner */}
        <div className="my-8 py-2 not-prose select-none">
          <div className="flex items-center gap-2 mb-2 justify-center">
            <span className="h-[1.5px] w-10 bg-[#D4A72C]" />
            <span className="text-[10px] font-serif uppercase tracking-widest text-[#2D1B14] font-bold bg-[#E88A16] px-3 py-1 rounded-full border border-[#D4A72C]">
              Sponsored Architectural Resource
            </span>
            <span className="h-[1.5px] w-10 bg-[#D4A72C]" />
          </div>
          <AdvertisementBanner placement="article-inline" />
        </div>

        {/* Second block of paragraphs */}
        {secondBlock.map((para, idx) => (
          <p key={`p-end-${idx}`} className="text-[#2D1B14] leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    );
  };

  /**
   * Component for the Article Detail Reading Experience
   */
  const renderArticleReader = (isModal: boolean = false) => {
    if (!selectedArticle) return null;

    return (
      <article
        className={`w-full bg-[#F4E5C7] text-[#2D1B14] rounded-3xl border-2 border-[#D4A72C] shadow-2xl golden-aura-strong p-6 sm:p-10 md:p-12 text-left relative overflow-hidden transition-all ${
          isModal ? 'max-w-3xl my-auto animate-in zoom-in-95 duration-200' : 'max-w-4xl mx-auto'
        }`}
      >
        {/* Subtle Manuscript Accent Ribbon in Saffron & Maroon */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#6B1F1F] via-[#E88A16] to-[#0F5C55]" />

        {/* Top Reading Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#D4A72C]/60 pb-4 mb-6">
          <button
            onClick={() => {
              if (isModal) {
                setIsReadingMode(false);
              }
              setSelectedArticle(null);
            }}
            className="text-xs font-serif font-bold text-[#FFF7ED] bg-[#6B1F1F] hover:bg-[#B94E2C] flex items-center gap-1.5 cursor-pointer px-3.5 py-1.5 rounded-xl border border-[#D4A72C] shadow-md transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#D4A72C]" />
            <span>Back to Treatises</span>
          </button>

          {/* Reading Experience Controls */}
          <div className="flex items-center gap-2">
            {/* Font Size Adjuster */}
            <div className="flex items-center bg-[#2D1B14] rounded-xl border border-[#D4A72C] p-0.5 text-xs font-serif text-[#FFF7ED] shadow-sm">
              <span className="px-2 text-[#E8D3A8] text-[10px] uppercase font-bold flex items-center gap-1">
                <Type className="w-3 h-3 text-[#D4A72C]" />
                <span className="hidden sm:inline">Text</span>
              </span>
              <button
                onClick={() => setFontSize('normal')}
                title="Default text size"
                className={`px-2 py-0.5 rounded-lg text-xs cursor-pointer ${
                  fontSize === 'normal' ? 'bg-[#E88A16] text-[#2D1B14] font-bold' : 'text-[#E8D3A8]'
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                title="Large text size"
                className={`px-2 py-0.5 rounded-lg text-xs cursor-pointer ${
                  fontSize === 'large' ? 'bg-[#E88A16] text-[#2D1B14] font-bold' : 'text-[#E8D3A8]'
                }`}
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                title="Extra large text size"
                className={`px-2 py-0.5 rounded-lg text-xs cursor-pointer ${
                  fontSize === 'xlarge' ? 'bg-[#E88A16] text-[#2D1B14] font-bold' : 'text-[#E8D3A8]'
                }`}
              >
                A++
              </button>
            </div>

            {/* Reading Mode Focus Toggle */}
            <button
              onClick={() => setIsReadingMode(!isReadingMode)}
              title={isReadingMode ? 'Exit Distraction-Free Reading Mode' : 'Enter Distraction-Free Reading Mode'}
              className={`px-3 py-1.5 rounded-xl font-serif text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md ${
                isReadingMode
                  ? 'bg-[#B94E2C] text-[#FFF7ED] border border-[#D4A72C]'
                  : 'bg-[#0F5C55] text-[#FFF7ED] border border-[#D4A72C]'
              }`}
            >
              {isReadingMode ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-[#D4A72C]" />
                  <span className="hidden sm:inline">Exit Focus</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-[#D4A72C]" />
                  <span>Reading Mode</span>
                </>
              )}
            </button>

            {isModal && (
              <button
                onClick={() => setIsReadingMode(false)}
                className="p-1.5 rounded-xl bg-[#2D1B14] hover:bg-[#6B1F1F] text-[#D4A72C] border border-[#D4A72C] transition-colors cursor-pointer"
                title="Close Focus View"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Article Meta Header */}
        <div className="space-y-2 mb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-serif">
            <span className="bg-[#6B1F1F] text-[#FFF7ED] font-bold px-3 py-1 rounded-full border border-[#D4A72C]">
              {selectedArticle.category}
            </span>
            <span className="text-[#6B1F1F]">·</span>
            <span className="flex items-center gap-1 text-[#2D1B14] font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#B94E2C]" />
              <span>{selectedArticle.readTime}</span>
            </span>
            <span className="text-[#6B1F1F]">·</span>
            <span className="flex items-center gap-1 text-[#0F5C55] font-bold">
              <User className="w-3.5 h-3.5 text-[#0F5C55]" />
              <span>{selectedArticle.author}</span>
            </span>
          </div>

          <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl lg:text-4xl font-black text-[#2D1B14] leading-tight">
            {selectedArticle.title}
          </h2>

          {selectedArticle.sanskritTitle && (
            <div className="text-lg sm:text-xl font-['Yatra_One'] text-[#6B1F1F] pt-0.5">
              ॥ {selectedArticle.sanskritTitle} ॥
            </div>
          )}
        </div>

        {/* Key Shastric Takeaway Quote Card in Terracotta/Gold */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#2D1B14] to-[#3B1111] rounded-2xl border-l-4 border-[#E88A16] border-y border-r border-[#D4A72C] mb-8 font-['Marcellus'] text-sm sm:text-base text-[#FFF7ED] shadow-xl">
          <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#D4A72C] font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#E88A16]" />
            <span>Key Shastric Principle:</span>
          </div>
          <p className="italic leading-relaxed text-[#E8D3A8]">{selectedArticle.keyTakeaway}</p>
        </div>

        {/* Main Article Content with In-Article Advertisement at Breakpoint */}
        <div className="border-t-2 border-[#D4A72C]/40 pt-6">
          {renderArticleContentWithAds(selectedArticle.content)}
        </div>

        {/* Article Reading Footer & Next Steps */}
        <div className="mt-10 pt-6 border-t-2 border-[#D4A72C]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-serif text-[#4A2616] italic text-center sm:text-left font-medium">
            Published under the research auspices of VASTU RITAM Academic Repository.
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (isModal) {
                  setIsReadingMode(false);
                }
                setSelectedArticle(null);
              }}
              className="px-6 py-2.5 rounded-xl bg-[#6B1F1F] hover:bg-[#B94E2C] text-[#FFF7ED] font-serif text-xs font-bold border border-[#D4A72C] shadow-md transition-all cursor-pointer"
            >
              Close Treatise
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className={`space-y-10 transition-colors duration-300 py-6`}>
      {/* Dimmed Background Overlay when Reading Mode is Active on an Open Article */}
      {selectedArticle && isReadingMode && (
        <div
          className="fixed inset-0 z-50 bg-[#1A0F0A]/90 backdrop-blur-md overflow-y-auto p-3 sm:p-6 md:p-8 flex justify-center items-start animate-in fade-in duration-300"
          aria-modal="true"
          role="dialog"
        >
          {renderArticleReader(true)}
        </div>
      )}

      {/* Main Header & Repository Intro on Rich Heritage Grounding */}
      <div className="text-center max-w-3xl mx-auto space-y-3 px-4 sm:px-6">
        <span className="text-xs font-bold tracking-widest text-[#2D1B14] uppercase bg-[#E88A16] px-4 py-1 rounded-full border-2 border-[#D4A72C] shadow-md">
          Vedic Repository & Intellectual Archive
        </span>
        <h1 className="font-['Cinzel_Decorative'] font-black text-3xl sm:text-4xl md:text-5xl text-[#FFF7ED] tracking-wide drop-shadow-md">
          VASTU GYAN-KOSH <span className="font-['Marcellus'] font-normal text-[#D4A72C] text-2xl sm:text-3xl md:text-4xl">(LIBRARY)</span>
        </h1>
        <p className="font-['Rozha_One'] text-xl sm:text-2xl text-[#E88A16]">
          “We do not aspire to have the most answers. We aspire to cultivate the clearest understanding.”
        </p>
        <p className="font-['Marcellus'] text-[#E8D3A8] text-sm sm:text-base leading-relaxed">
          A dedicated intellectual sanctuary for architects, students, researchers, and discerning homeowners seeking classical Shastric wisdom uncorrupted by commercial trends.
        </p>
      </div>

      {/* Sponsored Partner Banner at top of Library */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdvertisementBanner placement="library-top" />
      </div>

      {/* Heritage Colored Library Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#D4A72C]/40 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 flex-1">
          {libraryTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id);
                  setSelectedArticle(null);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer font-serif flex items-center gap-2 shadow-md ${
                  isActive
                    ? 'bg-[#E88A16] text-[#2D1B14] border-2 border-[#6B1F1F] font-black scale-105 shadow-[0_0_15px_rgba(232,138,22,0.4)]'
                    : 'bg-[#2D1B14] border-2 border-[#D4A72C]/70 text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED]'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#6B1F1F]' : 'bg-[#D4A72C]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Secondary Action Toolbar: Reading Mode Switch & Ad Admin */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsReadingMode(!isReadingMode)}
            title={isReadingMode ? 'Disable Reading Mode' : 'Enable Focused Reading Mode'}
            className={`px-3.5 py-2 rounded-xl font-serif text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md ${
              isReadingMode
                ? 'bg-[#B94E2C] text-[#FFF7ED] border border-[#D4A72C]'
                : 'bg-[#2D1B14] hover:bg-[#6B1F1F] text-[#E8D3A8] border border-[#D4A72C]/60'
            }`}
          >
            {isReadingMode ? (
              <>
                <Eye className="w-3.5 h-3.5 text-[#D4A72C]" />
                <span>Reading Mode ON</span>
              </>
            ) : (
              <>
                <EyeOff className="w-3.5 h-3.5 text-[#D4A72C]" />
                <span>Reading Mode</span>
              </>
            )}
          </button>

          {onNavigate && (
            <button
              onClick={() => onNavigate('admin')}
              title="Open Advertisement Admin Console"
              className="px-3.5 py-2 rounded-xl bg-[#0F5C55] hover:bg-[#167A68] text-[#FFF7ED] border border-[#D4A72C] font-serif text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
            >
              <Sliders className="w-3.5 h-3.5 text-[#D4A72C]" />
              <span>Ad Admin</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area Container in Deep Teal & Peacock Green */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-teal-heritage rounded-3xl border-2 border-[#D4A72C] shadow-2xl p-6 sm:p-10 animate-in fade-in duration-200 text-left relative overflow-hidden bg-vastu-grid text-[#FFF7ED]">
          {/* Subtle Manuscript Thread Holes */}
          <div className="absolute top-6 left-6 w-3.5 h-3.5 rounded-full bg-[#1A0F0A] border-2 border-[#D4A72C] shadow-inner hidden md:block" />
          <div className="absolute top-6 right-6 w-3.5 h-3.5 rounded-full bg-[#1A0F0A] border-2 border-[#D4A72C] shadow-inner hidden md:block" />

          {/* Category 1: Vastu Shabd-Kosh (Dictionary) */}
          {activeCategory === 'shabd-kosh' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#D4A72C]/40 pb-5">
                <div>
                  <span className="text-xs uppercase font-serif text-[#D4A72C] tracking-wider font-bold">
                    वास्तु शब्दकोशः
                  </span>
                  <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl font-black text-[#FFF7ED] mt-1">
                    Vastu Shabd-Kosh (Classical Lexicon)
                  </h2>
                  <p className="font-['Marcellus'] text-[#E8D3A8] text-sm mt-1">
                    Comprehensive glossary of classical Sanskrit architectural terms, metaphysical concepts, and spatial definitions.
                  </p>
                </div>

                {/* Search Bar in Rich Heritage Styling */}
                <div className="relative w-full md:w-72">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4A72C]" />
                  <input
                    type="text"
                    placeholder="Search Sanskrit term or concept..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-[#D4A72C] bg-[#2D1B14] text-xs font-['Marcellus'] text-[#FFF7ED] placeholder:text-[#E8D3A8]/60 focus:outline-[#E88A16]"
                  />
                </div>
              </div>

              {/* Category Filter Chips in Rich Heritage Colors */}
              <div className="flex flex-wrap gap-2">
                {['All', 'Foundations & Energy', 'Spatial Matrix', 'Deities & Cosmography', 'Architectural Math'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedDictFilter(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-serif transition-colors cursor-pointer border shadow-sm ${
                      selectedDictFilter === cat
                        ? 'bg-[#E88A16] text-[#2D1B14] font-black border-[#D4A72C]'
                        : 'bg-[#2D1B14] border-[#D4A72C]/60 text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Terms Grid: Alternating Sandstone, Terracotta, Maroon & Indigo Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredTerms.map((item, idx) => {
                  const cardStyles = [
                    'bg-[#E8D3A8] text-[#2D1B14] border-[#D4A72C]', // Sand
                    'bg-[#B94E2C] text-[#FFF7ED] border-[#D4A72C]', // Terracotta
                    'bg-[#6B1F1F] text-[#FFF7ED] border-[#D4A72C]', // Maroon
                    'bg-[#283B63] text-[#FFF7ED] border-[#D4A72C]', // Indigo
                    'bg-[#2D1B14] text-[#FFF7ED] border-[#E88A16]', // Dark Brown
                  ];
                  const currentStyle = cardStyles[idx % cardStyles.length];
                  const isLightCard = currentStyle.includes('#E8D3A8');

                  return (
                    <div
                      key={item.id}
                      className={`p-5 rounded-2xl border-2 shadow-lg space-y-3 hover:scale-102 transition-transform ${currentStyle}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] font-serif uppercase tracking-wider px-2 py-0.5 rounded font-bold ${
                          isLightCard ? 'bg-[#6B1F1F] text-[#FFF7ED]' : 'bg-[#E88A16] text-[#2D1B14]'
                        }`}>
                          {item.category}
                        </span>
                        <span className={`text-xs font-serif ${isLightCard ? 'text-[#6B1F1F]' : 'text-[#D4A72C]'}`}>
                          #{item.id}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-['Cinzel_Decorative'] text-lg font-black leading-snug">
                          {item.term}
                        </h3>
                        <div className={`text-sm font-['Yatra_One'] ${isLightCard ? 'text-[#0F5C55]' : 'text-[#D4A72C]'}`}>
                          {item.sanskrit}
                        </div>
                      </div>

                      <p className="font-['Marcellus'] text-xs sm:text-sm leading-relaxed">
                        {item.meaning}
                      </p>

                      <div className={`pt-2 border-t text-[11px] font-serif italic ${
                        isLightCard ? 'border-[#D4A72C]/60 text-[#3A2318]' : 'border-[#D4A72C]/40 text-[#E8D3A8]'
                      }`}>
                        Ref: {item.scripturalReference}
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredTerms.length === 0 && (
                <div className="p-12 text-center text-[#E8D3A8] font-['Marcellus'] bg-[#2D1B14]/80 rounded-2xl border border-[#D4A72C]">
                  No Sanskrit terms found matching "{searchTerm}". Try another keyword or clear filter.
                </div>
              )}
            </div>
          )}

          {/* Category 2: Prakaran (Scholarly Treatises / Articles) */}
          {activeCategory === 'prakaran' && (
            <div className="space-y-6">
              <div className="border-b-2 border-[#D4A72C]/40 pb-5">
                <span className="text-xs uppercase font-serif text-[#D4A72C] tracking-wider font-bold">
                  प्रकरणानि · शोध-निबन्धाः
                </span>
                <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl font-black text-[#FFF7ED] mt-1">
                  Prakaran (Scholarly Treatises)
                </h2>
                <p className="font-['Marcellus'] text-[#E8D3A8] text-sm mt-1">
                  Rigorous textual studies linking classical treatises (Mayamatam, Manasara, Samarangana Sutradhara) to contemporary environmental physics.
                </p>
              </div>

              {/* Embedded Reading View or Articles Listing */}
              {selectedArticle && !isReadingMode ? (
                renderArticleReader(false)
              ) : (
                /* Articles Directory Listing in Alternating Sand & Terracotta Cards */
                <div className="space-y-5">
                  {PRAKARAN_ARTICLES.map((article, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div
                        key={article.id}
                        className={`p-6 rounded-2xl border-2 border-[#D4A72C] shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:scale-101 transition-transform ${
                          isEven ? 'bg-[#E8D3A8] text-[#2D1B14]' : 'bg-[#B94E2C] text-[#FFF7ED]'
                        }`}
                      >
                        <div className="space-y-2 max-w-2xl text-left">
                          <div className="flex items-center gap-2 text-xs font-serif">
                            <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                              isEven ? 'bg-[#6B1F1F] text-[#FFF7ED]' : 'bg-[#2D1B14] text-[#D4A72C]'
                            }`}>
                              {article.category}
                            </span>
                            <span>·</span>
                            <span className={`flex items-center gap-1 font-semibold ${isEven ? 'text-[#3A2318]' : 'text-[#E8D3A8]'}`}>
                              <Clock className="w-3.5 h-3.5" />
                              <span>{article.readTime}</span>
                            </span>
                          </div>
                          <h3 className="font-['Cinzel_Decorative'] text-xl font-black leading-snug">
                            {article.title}
                          </h3>
                          {article.sanskritTitle && (
                            <div className={`text-sm font-['Yatra_One'] ${isEven ? 'text-[#6B1F1F]' : 'text-[#FDE68A]'}`}>
                              ॥ {article.sanskritTitle} ॥
                            </div>
                          )}
                          <p className="font-['Marcellus'] text-sm leading-relaxed">
                            {article.summary}
                          </p>
                          <div className={`text-xs font-serif italic pt-1 ${isEven ? 'text-[#0F5C55]' : 'text-[#D4A72C]'}`}>
                            Authored by: {article.author}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
                          <button
                            onClick={() => {
                              setSelectedArticle(article);
                              setIsReadingMode(false);
                            }}
                            className={`px-4 py-2.5 rounded-xl border-2 font-serif text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md ${
                              isEven
                                ? 'bg-[#6B1F1F] text-[#FFF7ED] border-[#D4A72C] hover:bg-[#B94E2C]'
                                : 'bg-[#E88A16] text-[#2D1B14] border-[#D4A72C] hover:bg-[#D97706]'
                            }`}
                          >
                            <span>Read Treatise</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => {
                              setSelectedArticle(article);
                              setIsReadingMode(true);
                            }}
                            title="Open in Distraction-Free Reading Mode"
                            className="px-3.5 py-2.5 rounded-xl bg-[#2D1B14] hover:bg-[#0F5C55] text-[#D4A72C] border-2 border-[#D4A72C] font-serif text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                          >
                            <Maximize2 className="w-3.5 h-3.5 text-[#D4A72C]" />
                            <span className="hidden sm:inline">Focus Mode</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Category 3: Handbooks */}
          {activeCategory === 'handbooks' && (
            <div className="space-y-6">
              <div className="border-b-2 border-[#D4A72C]/40 pb-5">
                <span className="text-xs uppercase font-serif text-[#D4A72C] tracking-wider font-bold">
                  हस्तपुस्तिका
                </span>
                <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl font-black text-[#FFF7ED] mt-1">
                  Classical Handbooks & Field Guides
                </h2>
                <p className="font-['Marcellus'] text-[#E8D3A8] text-sm mt-1">
                  Structured reference manuals for professionals, architectural students, civil engineers, and prospective home purchasers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {HANDBOOKS_DATA.map((hb, idx) => {
                  const cardThemes = [
                    'bg-[#E8D3A8] text-[#2D1B14]',
                    'bg-[#B94E2C] text-[#FFF7ED]',
                    'bg-[#6B1F1F] text-[#FFF7ED]',
                  ];
                  const currentTheme = cardThemes[idx % cardThemes.length];
                  const isLight = currentTheme.includes('#E8D3A8');

                  return (
                    <div
                      key={hb.id}
                      className={`p-6 rounded-2xl border-2 border-[#D4A72C] shadow-xl flex flex-col justify-between space-y-4 hover:scale-102 transition-transform ${currentTheme}`}
                    >
                      <div className="space-y-3">
                        <span className={`text-[11px] font-serif uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full ${
                          isLight ? 'bg-[#6B1F1F] text-[#FFF7ED]' : 'bg-[#E88A16] text-[#2D1B14]'
                        }`}>
                          {hb.targetAudience}
                        </span>
                        <h3 className="font-['Cinzel_Decorative'] text-lg font-black leading-snug">
                          {hb.title}
                        </h3>
                        <p className={`font-['Marcellus'] text-xs italic ${isLight ? 'text-[#6B1F1F]' : 'text-[#FDE68A]'}`}>
                          {hb.subtitle}
                        </p>
                        <p className="font-['Marcellus'] text-xs leading-relaxed">
                          {hb.summary}
                        </p>

                        <div className="space-y-1 pt-2">
                          <span className="text-[11px] font-serif font-bold block">
                            Included Modules:
                          </span>
                          <ul className="text-xs font-['Marcellus'] space-y-1">
                            {hb.topics.map((t, topicIdx) => (
                              <li key={topicIdx} className="flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-[#6B1F1F]' : 'bg-[#D4A72C]'}`} />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className={`pt-4 border-t text-xs font-serif flex items-center justify-between ${
                        isLight ? 'border-[#D4A72C]/60 text-[#3A2318]' : 'border-[#D4A72C]/40 text-[#E8D3A8]'
                      }`}>
                        <span>{hb.pages} Folio Pages</span>
                        <button
                          onClick={() => alert(`Opening ${hb.title}. Complete handbook text will be displayed in repository.`)}
                          className={`px-4 py-1.5 rounded-xl font-bold border transition-colors cursor-pointer ${
                            isLight
                              ? 'bg-[#6B1F1F] text-[#FFF7ED] border-[#D4A72C] hover:bg-[#B94E2C]'
                              : 'bg-[#E88A16] text-[#2D1B14] border-[#D4A72C] hover:bg-[#D97706]'
                          }`}
                        >
                          Read Handbook
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Category 4: Videos */}
          {activeCategory === 'videos' && (
            <div className="space-y-6">
              <div className="border-b-2 border-[#D4A72C]/40 pb-5">
                <span className="text-xs uppercase font-serif text-[#D4A72C] tracking-wider font-bold">
                  दृश्य-माध्यम
                </span>
                <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl font-black text-[#FFF7ED] mt-1">
                  Video Archives & Recorded Discourses
                </h2>
                <p className="font-['Marcellus'] text-[#E8D3A8] text-sm mt-1">
                  Scholarly discussions, architectural case evaluations, and debunking sessions recorded at academic forums.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'The Thermodynamics of Traditional Courtyards vs Contemporary HVAC',
                    duration: '28:40',
                    instructor: 'Dr. R. Sharma & VASTU RITAM Fellowship',
                    thumbnail: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
                  },
                  {
                    title: 'Reading the Mayamatam: Ground Preparation & Bhumi-Pariksha',
                    duration: '35:15',
                    instructor: 'Classical Sanskrit Research Group',
                    thumbnail: 'https://images.unsplash.com/photo-1599818816942-0268ec349479?auto=format&fit=crop&w=800&q=80',
                  },
                ].map((vid, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border-2 border-[#D4A72C] overflow-hidden bg-[#2D1B14] shadow-xl group"
                  >
                    <div className="relative aspect-video bg-stone-900 overflow-hidden">
                      <img
                        src={vid.thumbnail}
                        alt={vid.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A] via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#E88A16] text-[#2D1B14] border-2 border-[#D4A72C] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-3 right-3 bg-[#2D1B14]/90 border border-[#D4A72C]/60 text-[#D4A72C] text-xs font-serif px-2.5 py-0.5 rounded-md">
                        {vid.duration}
                      </span>
                    </div>

                    <div className="p-5 space-y-2 text-left">
                      <h3 className="font-['Cinzel_Decorative'] text-base font-bold text-[#FFF7ED] leading-snug">
                        {vid.title}
                      </h3>
                      <p className="text-xs font-serif text-[#D4A72C]">
                        {vid.instructor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category 5: Myths & Misconceptions */}
          {activeCategory === 'myths' && (
            <div className="space-y-6">
              <div className="border-b-2 border-[#D4A72C]/40 pb-5">
                <span className="text-xs uppercase font-serif text-[#D4A72C] tracking-wider font-bold">
                  भ्रान्ति-निवारणम्
                </span>
                <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl font-black text-[#FFF7ED] mt-1">
                  Vastu Myths & Commercial Superstitions
                </h2>
                <p className="font-['Marcellus'] text-[#E8D3A8] text-sm mt-1">
                  Evidence-based dispelling of fear-mongering falsehoods fabricated by sensationalist commercial practitioners.
                </p>
              </div>

              <div className="space-y-4">
                {MYTHS_DATA.map((myth) => {
                  const isExpanded = activeMythId === myth.id;
                  return (
                    <div
                      key={myth.id}
                      className="rounded-2xl border-2 border-[#D4A72C] overflow-hidden bg-[#2D1B14] shadow-xl transition-all"
                    >
                      <button
                        onClick={() => setActiveMythId(isExpanded ? '' : myth.id)}
                        className="w-full p-5 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#3B1111] transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-serif font-bold text-[#2D1B14] uppercase bg-[#E88A16] px-2.5 py-0.5 rounded border border-[#D4A72C]">
                              Common Fallacy
                            </span>
                            <span className="text-xs text-[#D4A72C] font-serif">#{myth.id}</span>
                          </div>
                          <h3 className="font-['Cinzel_Decorative'] text-base font-bold text-[#FFF7ED]">
                            {myth.myth}
                          </h3>
                        </div>

                        <span
                          className={`w-7 h-7 rounded-full bg-[#E88A16] text-[#2D1B14] font-bold flex items-center justify-center shrink-0 transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="p-5 bg-[#3B1111]/80 border-t-2 border-[#D4A72C]/40 space-y-4 text-xs sm:text-sm font-['Marcellus'] text-[#FFF7ED] animate-in fade-in duration-150 text-left">
                          <div className="p-4 bg-[#0F5C55] rounded-xl border border-[#D4A72C] text-[#FFF7ED] space-y-1 shadow-md">
                            <strong className="text-[#D4A72C] block font-serif uppercase tracking-wider text-xs">
                              Authentic Classical Reality:
                            </strong>
                            <p className="leading-relaxed">{myth.classicalTruth}</p>
                          </div>

                          <div className="space-y-1 text-[#E8D3A8]">
                            <strong className="text-[#FDE68A] block font-serif">
                              Architectural & Scientific Reasoning:
                            </strong>
                            <p className="leading-relaxed">{myth.scripturalPrinciple}</p>
                          </div>

                          <div className="space-y-1 text-[#FFF7ED] bg-[#6B1F1F] p-3 rounded-xl border border-[#D4A72C]">
                            <strong className="block font-serif text-[#FDE68A]">
                              Practical & Psychological Harm:
                            </strong>
                            <p className="leading-relaxed">{myth.practicalHarm}</p>
                          </div>

                          <div className="text-[11px] font-serif text-[#D4A72C] italic pt-1 border-t border-[#D4A72C]/40">
                            Context: {myth.misconceptionContext}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
