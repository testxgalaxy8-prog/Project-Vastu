import React, { useState, useEffect } from 'react';
import { LibraryCategory, DictionaryTerm, Article, Handbook, MythItem } from '../types';
import { SHABD_KOSH_DATA, PRAKARAN_ARTICLES, HANDBOOKS_DATA, MYTHS_DATA } from '../data/vastuData';
import { BookOpen, Search, Filter, Sparkles, BookMarked, Video, HelpCircle, CheckCircle2, XCircle, ArrowRight, Play, FileText, ChevronRight } from 'lucide-react';

interface GyanKoshSectionProps {
  initialCategory?: LibraryCategory;
}

export const GyanKoshSection: React.FC<GyanKoshSectionProps> = ({
  initialCategory = 'shabd-kosh',
}) => {
  const [activeCategory, setActiveCategory] = useState<LibraryCategory>(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDictFilter, setSelectedDictFilter] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeMythId, setActiveMythId] = useState<string>('1');

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300">
          Vedic Repository & Intellectual Archive
        </span>
        <h1 className="font-['Cinzel'] font-black text-3xl sm:text-4xl md:text-5xl text-stone-950 tracking-wide">
          VASTU GYAN-KOSH <span className="font-['Marcellus'] font-normal text-amber-900 text-2xl sm:text-3xl md:text-4xl">(LIBRARY)</span>
        </h1>
        <p className="font-['Rozha_One'] text-xl sm:text-2xl text-red-900">
          “We do not aspire to have the most answers. We aspire to cultivate the clearest understanding.”
        </p>
        <p className="font-['Marcellus'] text-stone-600 text-sm sm:text-base">
          A dedicated intellectual sanctuary for architects, students, researchers, and discerning homeowners seeking classical Shastric wisdom uncorrupted by commercial trends.
        </p>
      </div>

      {/* Tabs with exact user specification:
          Inactive tabs -> White background with a thin green border.
          Active tab -> Soft green fill with red border.
          Every click will open explanation below.
      */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-amber-200/80 pb-6">
        {libraryTabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id);
                setSelectedArticle(null);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer font-serif flex items-center gap-2 ${
                isActive
                  ? 'bg-emerald-50/95 border-2 border-red-600 text-red-950 font-bold shadow-md scale-105'
                  : 'bg-white border border-emerald-700/60 text-emerald-900 hover:bg-emerald-50/50 hover:border-emerald-800'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-red-600' : 'bg-emerald-700'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Area: Every click opens explanation below */}
      <div className="bg-[#fdfaf3] rounded-3xl border-2 border-amber-300/90 shadow-md golden-aura-glow p-6 sm:p-10 animate-in fade-in duration-200 text-left relative overflow-hidden">
        {/* Subtle Manuscript Thread Holes (Sutra-Randhra) representing authentic palm leaf folios */}
        <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-[#3a1d0c] border border-amber-600/70 shadow-inner hidden md:block" />
        <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-[#3a1d0c] border border-amber-600/70 shadow-inner hidden md:block" />
        
        {/* Category 1: Vastu Shabd-Kosh (Dictionary) */}
        {activeCategory === 'shabd-kosh' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-100 pb-5">
              <div>
                <span className="text-xs uppercase font-serif text-amber-800 tracking-wider font-bold">
                  वास्तु शब्दकोशः
                </span>
                <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  Vastu Shabd-Kosh (Classical Lexicon)
                </h2>
                <p className="font-['Marcellus'] text-stone-600 text-sm mt-1">
                  Comprehensive glossary of classical Sanskrit architectural terms, metaphysical concepts, and spatial definitions.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search Sanskrit term or concept..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-['Marcellus']"
                />
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-2 items-center text-xs font-serif">
              <span className="text-stone-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Category:
              </span>
              {['All', 'Directions', 'Cosmology', 'Architecture', 'Measures'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedDictFilter(cat)}
                  className={`px-3 py-1 rounded-full border transition-all cursor-pointer ${
                    selectedDictFilter === cat
                      ? 'bg-emerald-800 text-white border-emerald-900 font-bold'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Dictionary Term Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
              {filteredTerms.map((item) => (
                <div
                  key={item.id}
                  className="bg-amber-50/40 rounded-2xl p-5 border border-amber-200/90 shadow-2xs hover:border-emerald-600 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded font-bold">
                        {item.category}
                      </span>
                      {item.scripturalReference && (
                        <span className="text-[11px] text-stone-500 font-serif italic truncate max-w-[140px]">
                          {item.scripturalReference}
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline gap-2 mb-2">
                      <h3 className="font-['Cinzel_Decorative'] font-bold text-stone-900 text-base sm:text-lg">
                        {item.term}
                      </h3>
                      <span className="text-sm font-['Yatra_One'] text-emerald-800">
                        {item.sanskrit}
                      </span>
                    </div>

                    <p className="font-['Marcellus'] text-stone-700 text-xs sm:text-sm leading-relaxed mb-3">
                      {item.meaning}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-amber-200/60 text-xs font-['Marcellus'] text-emerald-950 bg-white/70 p-2.5 rounded-lg border border-emerald-100">
                    <strong className="block text-[11px] text-emerald-900 uppercase font-serif">
                      Architectural Significance:
                    </strong>
                    <span className="text-stone-700">{item.architecturalSignificance}</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredTerms.length === 0 && (
              <div className="p-12 text-center text-stone-500 font-['Marcellus']">
                No Sanskrit terms found matching "{searchTerm}". Try another keyword or clear filter.
              </div>
            )}
          </div>
        )}

        {/* Category 2: Prakaran (Scholarly Treatises / Articles) */}
        {activeCategory === 'prakaran' && (
          <div className="space-y-6">
            <div className="border-b border-amber-100 pb-5">
              <span className="text-xs uppercase font-serif text-amber-800 tracking-wider font-bold">
                प्रकरणानि · शोध-निबन्धाः
              </span>
              <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Prakaran (Scholarly Treatises)
              </h2>
              <p className="font-['Marcellus'] text-stone-600 text-sm mt-1">
                Rigorous textual studies linking classical treatises (Mayamatam, Manasara, Samarangana Sutradhara) to contemporary environmental physics.
              </p>
            </div>

            {selectedArticle ? (
              /* Reading View */
              <div className="space-y-6 max-w-3xl mx-auto bg-amber-50/30 p-6 sm:p-8 rounded-2xl border border-amber-200">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-xs font-serif font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
                >
                  ← Back to all treatises
                </button>

                <div>
                  <div className="flex items-center gap-2 text-xs font-serif text-amber-900 mb-2">
                    <span className="bg-amber-100 px-2 py-0.5 rounded">{selectedArticle.category}</span>
                    <span>·</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                  <h3 className="font-['Cinzel_Decorative'] text-2xl font-bold text-stone-900">
                    {selectedArticle.title}
                  </h3>
                  {selectedArticle.sanskritTitle && (
                    <div className="text-base font-['Yatra_One'] text-red-800 mt-1">
                      {selectedArticle.sanskritTitle}
                    </div>
                  )}
                  <div className="text-xs text-stone-500 font-serif mt-1">
                    Authored by: {selectedArticle.author}
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 font-['Marcellus'] text-sm text-emerald-900">
                  <strong>Key Shastric Takeaway:</strong> {selectedArticle.keyTakeaway}
                </div>

                <div className="font-['Marcellus'] text-stone-800 text-base leading-relaxed space-y-4 whitespace-pre-line border-t border-amber-200 pt-4">
                  {selectedArticle.content}
                </div>

                <div className="pt-4 border-t border-amber-200 text-center">
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-5 py-2 rounded-lg bg-stone-900 text-white font-serif text-xs font-semibold cursor-pointer"
                  >
                    Close Treatise
                  </button>
                </div>
              </div>
            ) : (
              /* Articles Listing */
              <div className="space-y-5">
                {PRAKARAN_ARTICLES.map((article) => (
                  <div
                    key={article.id}
                    className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200 hover:border-emerald-700 transition-all shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
                  >
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex items-center gap-2 text-xs font-serif text-amber-900">
                        <span className="bg-amber-100 px-2.5 py-0.5 rounded-full font-bold">{article.category}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="font-['Cinzel_Decorative'] text-xl font-bold text-stone-900">
                        {article.title}
                      </h3>
                      <p className="font-['Marcellus'] text-stone-700 text-sm leading-relaxed">
                        {article.summary}
                      </p>
                      <div className="text-xs text-emerald-900 font-serif italic">
                        {article.author}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="px-5 py-2.5 rounded-xl border border-emerald-700 bg-white text-emerald-950 font-serif text-xs font-bold hover:bg-emerald-50 transition-all flex items-center gap-1.5 shrink-0 cursor-pointer self-start md:self-center"
                    >
                      <span>Read Treatise</span>
                      <ChevronRight className="w-4 h-4 text-emerald-700" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Category 3: Handbooks */}
        {activeCategory === 'handbooks' && (
          <div className="space-y-6">
            <div className="border-b border-amber-100 pb-5">
              <span className="text-xs uppercase font-serif text-amber-800 tracking-wider font-bold">
                हस्तपुस्तिका
              </span>
              <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Handbooks & Field Guides
              </h2>
              <p className="font-['Marcellus'] text-stone-600 text-sm mt-1">
                Systematic, practical reference publications prepared by VASTU RITAM for practicing professionals and property buyers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HANDBOOKS_DATA.map((hb) => (
                <div
                  key={hb.id}
                  className="rounded-2xl bg-amber-50/40 p-6 border border-amber-200/90 shadow-2xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-serif text-stone-500">
                      <span className="bg-white px-2 py-0.5 rounded border border-amber-200 text-amber-900 font-bold">
                        {hb.targetAudience}
                      </span>
                      <span>{hb.pages} pages</span>
                    </div>

                    <h3 className="font-['Cinzel_Decorative'] text-lg font-bold text-stone-900">
                      {hb.title}
                    </h3>
                    <p className="text-xs font-serif text-stone-600 italic">
                      {hb.subtitle}
                    </p>
                    <p className="font-['Marcellus'] text-stone-700 text-xs sm:text-sm leading-relaxed">
                      {hb.summary}
                    </p>

                    <div className="pt-2">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-stone-500 block mb-1.5 font-serif">
                        Included Topics:
                      </span>
                      <ul className="text-xs font-['Marcellus'] text-stone-800 space-y-1">
                        {hb.topics.map((t, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-amber-200">
                    <button
                      onClick={() => alert(`"${hb.title}" is available for study and academic review via VASTU RITAM consultation desk.`)}
                      className="w-full py-2 px-3 rounded-lg border border-emerald-700 bg-white text-emerald-950 font-serif text-xs font-bold hover:bg-emerald-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Request Publication Copy</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category 4: Videos */}
        {activeCategory === 'videos' && (
          <div className="space-y-6">
            <div className="border-b border-amber-100 pb-5">
              <span className="text-xs uppercase font-serif text-amber-800 tracking-wider font-bold">
                दृश्य-माध्यम · दृश्य शिक्षणम्
              </span>
              <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Videos & Visual Discourse
              </h2>
              <p className="font-['Marcellus'] text-stone-600 text-sm mt-1">
                Visual educational series deconstructing classical principles, orientation diagrams, and architectural case studies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Deconstructing the Vastu Purusha Mandala",
                  duration: "24:15",
                  level: "Masterclass",
                  topic: "The 81-Square Paramashayika grid explained mathematically and thermodynamically.",
                  thumbnail: "/hero-sanctuary.jpg",
                },
                {
                  title: "The Logic of the North-East (Ishanya)",
                  duration: "18:40",
                  level: "Foundations",
                  topic: "Why the morning sun, infrared vs ultraviolet rays, and magnetic prana dictate water and light in Ishanya.",
                  thumbnail: "/hero-sanctuary.jpg",
                },
                {
                  title: "Dismantling the South Door Fear",
                  duration: "21:05",
                  level: "Critical Study",
                  topic: "Classical textual analysis of Brihat Samhita & Mayamatam on South entrance padas (Vitatha & Grihakshata).",
                  thumbnail: "/hero-sanctuary.jpg",
                },
              ].map((vid, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-amber-200 bg-amber-50/30 group">
                  <div className="relative h-44 bg-stone-900 overflow-hidden">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-stone-950/40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-stone-900/90 text-white text-[11px] px-2 py-0.5 rounded font-mono">
                      {vid.duration}
                    </span>
                    <span className="absolute top-2 left-2 bg-amber-500 text-stone-950 text-[10px] font-bold px-2 py-0.5 rounded uppercase font-serif">
                      {vid.level}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <h4 className="font-['Cinzel_Decorative'] font-bold text-stone-900 text-base">
                      {vid.title}
                    </h4>
                    <p className="font-['Marcellus'] text-stone-700 text-xs leading-relaxed">
                      {vid.topic}
                    </p>
                    <div className="pt-2 text-xs font-serif text-emerald-800 font-semibold flex items-center gap-1">
                      <span>Available on Official YouTube Channel</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category 5: Vastu Myths and Misconceptions */}
        {activeCategory === 'myths' && (
          <div className="space-y-6">
            <div className="border-b border-amber-100 pb-5">
              <span className="text-xs uppercase font-serif text-red-800 tracking-wider font-bold">
                भ्रान्ति-निवारणम्
              </span>
              <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Vastu Myths and Misconceptions
              </h2>
              <p className="font-['Marcellus'] text-stone-600 text-sm mt-1">
                Reclaiming authentic Vastu by dismantling widespread superstitions, commercial fear-tactics, and unscientific distortions.
              </p>
            </div>

            <div className="space-y-4">
              {MYTHS_DATA.map((myth) => (
                <div
                  key={myth.id}
                  className="rounded-2xl border border-amber-200 overflow-hidden shadow-2xs transition-all"
                >
                  <div className="p-5 sm:p-6 bg-red-50/50 border-b border-red-100 flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-serif uppercase tracking-widest text-red-800 font-bold block">
                        Popular Misconception / Myth #{myth.id}
                      </span>
                      <h4 className="font-['Cinzel_Decorative'] text-base sm:text-lg font-bold text-red-950 mt-0.5">
                        “{myth.myth}”
                      </h4>
                      <p className="text-xs text-stone-600 font-['Marcellus'] mt-1">
                        <strong>Context:</strong> {myth.misconceptionContext}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 bg-emerald-50/30 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <div className="space-y-1 font-['Marcellus']">
                        <span className="text-[11px] font-serif uppercase tracking-widest text-emerald-800 font-bold block">
                          The Classical Textual Truth
                        </span>
                        <p className="text-stone-800 text-sm sm:text-base leading-relaxed">
                          {myth.classicalTruth}
                        </p>
                      </div>
                    </div>

                    <div className="pl-8 text-xs font-['Marcellus'] text-stone-600 space-y-1">
                      <div>
                        <strong className="text-stone-900 font-serif">Scriptural Authority:</strong> {myth.scripturalPrinciple}
                      </div>
                      <div>
                        <strong className="text-red-900 font-serif">Harm Caused by Blind Myth:</strong> {myth.practicalHarm}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
