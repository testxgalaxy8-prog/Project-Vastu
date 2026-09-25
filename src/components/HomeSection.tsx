import React from 'react';
import { PageType } from '../types';
import { InteractiveEmblem } from './InteractiveEmblem';
import { VastuRitamLogo } from './VastuRitamLogo';
import { BookOpen, PhoneCall, Compass, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, Home as HomeIcon, Award } from 'lucide-react';
import { DIRECTIONAL_ZONES } from '../data/vastuData';

interface HomeSectionProps {
  onNavigate: (page: PageType, subTab?: string) => void;
  onReplayIntro?: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate, onReplayIntro }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Mission, Vision, and Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Sacred Heading Badge with Replay Intro option */}
            <div className="inline-flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-200/70 border border-amber-400 text-amber-950 text-xs sm:text-sm font-['Marcellus'] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Dedicated Institution for Classical Vastu Research & Practice</span>
              </div>
              {onReplayIntro && (
                <button
                  onClick={onReplayIntro}
                  className="text-xs font-serif text-amber-800 hover:text-amber-950 underline flex items-center gap-1 cursor-pointer bg-amber-100/60 px-2.5 py-1 rounded-full border border-amber-300"
                >
                  <span>Replay Intro</span>
                </button>
              )}
            </div>

            <div className="space-y-2">
              <h1 className="font-['Cinzel_Decorative'] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-stone-950 leading-tight">
                Towards Harmony through <br className="hidden sm:block" />
                <span className="gold-gradient-text">Authentic Vastu Knowledge</span>
              </h1>
              <div className="flex items-center gap-3 pt-1">
                <span className="text-xl sm:text-2xl font-['Yatra_One'] text-emerald-900">वास्तु रितम्</span>
                <span className="text-amber-700/60">|</span>
                <span className="text-base sm:text-lg font-['Rozha_One'] text-red-900">
                  ॥ संतुलनात् समृद्धिः सुखम् ॥
                </span>
              </div>
            </div>

            <p className="font-['Marcellus'] text-base sm:text-lg text-stone-800 leading-relaxed max-w-2xl font-medium">
              <strong className="text-stone-950 font-bold">VASTU RITAM</strong> is an institution dedicated to the study, practice, dissemination and consultation of authentic Vastu knowledge. Rooted in classical wisdom and guided by thoughtful research, we seek to advance the understanding and application of Vastu in the design and development of harmonious living and working spaces.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-amber-100/60 border border-amber-300/80 text-stone-900 text-sm sm:text-base font-['Marcellus'] leading-relaxed shadow-xs">
              <p>
                Our primary collaborators include <span className="font-semibold text-emerald-950">architects, civil engineers, interior designers, builders, developers</span> and other professionals associated with the built environment. We also serve <span className="font-semibold text-red-950">homeowners, property owners, business owners, students, teachers and researchers</span> seeking a deeper understanding of Vastu.
              </p>
            </div>

            {/* Explicit Two Tabs / Buttons requested in prompt */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onNavigate('gyan-kosh')}
                className="px-6 py-3.5 rounded-xl font-['Marcellus'] text-base font-bold border-2 border-emerald-800 bg-[#f7eedc] text-emerald-950 hover:bg-emerald-100/70 hover:border-emerald-900 transition-all shadow-md flex items-center gap-2.5 cursor-pointer group"
              >
                <BookOpen className="w-5 h-5 text-emerald-800 group-hover:scale-110 transition-transform" />
                <span>Explore Vastu Gyan-Kosh (Library)</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-xl font-['Marcellus'] text-base font-bold bg-gradient-to-r from-red-800 via-amber-800 to-amber-900 text-amber-50 hover:from-red-900 hover:to-amber-950 transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer group"
              >
                <PhoneCall className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
                <span>Consult VASTU RITAM</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Sacred Sanctuary Imagery & Emblem Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden border-2 border-amber-300 shadow-xl bg-white p-3 group">
              {/* Sacred Temple Background Image */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-3">
                <img
                  src="/hero-sanctuary.jpg"
                  alt="Vedic Temple Sanctuary Ambience"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-serif uppercase tracking-widest text-amber-300 block">Vedic Architecture</span>
                  <p className="font-['Rozha_One'] text-lg text-amber-100">“We do not begin with remedies. We begin with understanding.”</p>
                </div>
              </div>

              {/* Emblem Stamp Banner */}
              <div className="flex items-center gap-3.5 p-3.5 bg-amber-100/80 rounded-2xl border border-amber-300 shadow-xs">
                <VastuRitamLogo variant="emblem" size={60} />
                <div className="text-left flex-1 min-w-0">
                  <span className="font-['Cinzel',serif] font-bold text-sm text-stone-950 block">
                    VASTU RITAM EMBLEM
                  </span>
                  <span className="text-xs text-stone-700 font-serif block truncate">
                    9-Fold Mandala, Vastu Purusha, Lotus & Stem
                  </span>
                </div>
                <button
                  onClick={() => onNavigate('discover', 'emblem')}
                  className="text-xs font-bold text-emerald-900 hover:text-emerald-950 underline cursor-pointer shrink-0"
                >
                  Inspect →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ancient Palm Leaf Manuscript Knowledgebase Showcase (Tada-Patra) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl p-6 sm:p-10 border-2 border-amber-500/80 shadow-xl golden-aura-glow relative overflow-hidden text-left"
          style={{
            backgroundColor: '#f5ead5',
            backgroundImage: `
              radial-gradient(circle at 50% 20%, rgba(251, 191, 36, 0.25) 0%, rgba(217, 119, 6, 0.08) 55%, transparent 75%),
              repeating-linear-gradient(0deg, rgba(146, 64, 14, 0.04) 0px, rgba(146, 64, 14, 0.04) 1px, transparent 1px, transparent 4px),
              url('/palm-leaf-texture.jpg')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Subtle Manuscript Thread Holes (Sutra-Randhra) representing authentic palm leaf folios */}
          <div className="absolute top-8 left-6 w-3 h-3 rounded-full bg-[#3a1d0c] border border-amber-600/70 shadow-inner hidden md:block" />
          <div className="absolute top-8 right-6 w-3 h-3 rounded-full bg-[#3a1d0c] border border-amber-600/70 shadow-inner hidden md:block" />

          <div className="max-w-3xl space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/10 border border-amber-800/30 text-amber-950 text-xs font-serif font-bold">
              <BookOpen className="w-3.5 h-3.5 text-amber-800" />
              <span>ताड़पत्र ग्रन्थावलिः · The Classical Palm Leaf Archive</span>
            </div>
            <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl md:text-4xl text-stone-950 font-bold leading-tight">
              An Intellectual Knowledgebase <br className="hidden sm:inline" />
              Rooted in Ancient Palm Leaf Treatises
            </h2>
            <p className="font-['Marcellus'] text-stone-800 text-sm sm:text-base leading-relaxed">
              Before the advent of modern paper or commercial remedies, master Vedic architects (Sthapatis) inscribed environmental, astronomical, and spatial truths onto palm-leaf folios (<em>Tada-patra</em>). <strong className="text-emerald-950 font-bold">VASTU RITAM</strong> preserves, translates, and demystifies these classical root texts for contemporary architecture.
            </p>
          </div>

          {/* 4 Core Classical Manuscript Treatises Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                title: "Mayamatam",
                sanskrit: "मयमतम्",
                century: "Classical Era",
                focus: "Solar vectors, orientation (Dik-Sadhana), and town planning grids.",
                subTab: "prakaran",
              },
              {
                title: "Samarangana Sutradhara",
                sanskrit: "समराङ्गण सूत्रधार",
                century: "11th Century (Raja Bhoja)",
                focus: "Thermodynamics, courtyards (Angana), and natural stack-effect cooling.",
                subTab: "prakaran",
              },
              {
                title: "Manasara",
                sanskrit: "मानसार शिल्पशास्त्रम्",
                century: "Vedic Canon",
                focus: "Proportional mathematics, Ayadi Shadvarga, and structural harmony.",
                subTab: "shabd-kosh",
              },
              {
                title: "Brihat Samhita",
                sanskrit: "बृहत्संहिता",
                century: "6th Century (Varahamihira)",
                focus: "Vedic astrology, geomagnetism, and entrance door padas (Veedhi-Shoola).",
                subTab: "myths",
              },
            ].map((manuscript, i) => (
              <div
                key={i}
                onClick={() => onNavigate('gyan-kosh', manuscript.subTab)}
                className="p-5 rounded-2xl bg-[#faf3e3]/95 border border-amber-400/90 shadow-xs hover:border-red-700 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-serif text-stone-500 mb-1">
                    <span className="text-amber-900 font-bold uppercase">{manuscript.century}</span>
                    <span className="font-['Yatra_One'] text-emerald-800 text-sm">{manuscript.sanskrit}</span>
                  </div>
                  <h3 className="font-['Cinzel_Decorative'] font-bold text-stone-900 text-base group-hover:text-red-900 transition-colors">
                    {manuscript.title}
                  </h3>
                  <p className="font-['Marcellus'] text-stone-700 text-xs sm:text-sm mt-2 leading-relaxed">
                    {manuscript.focus}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-amber-200/70 text-xs font-serif text-emerald-900 font-bold flex items-center justify-between">
                  <span>Explore Treatise</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Jump Bar into Knowledgebase Sections */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-amber-300/80 bg-white/70 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-stone-900 text-xs sm:text-sm font-serif">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Explore our curated sections:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onNavigate('gyan-kosh', 'shabd-kosh')}
                className="px-3.5 py-1.5 rounded-lg bg-amber-100/90 hover:bg-amber-200 text-amber-950 font-serif text-xs font-bold transition-colors cursor-pointer border border-amber-300"
              >
                Vastu Shabd-Kosh (Dictionary)
              </button>
              <button
                onClick={() => onNavigate('gyan-kosh', 'prakaran')}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-100/90 hover:bg-emerald-200 text-emerald-950 font-serif text-xs font-bold transition-colors cursor-pointer border border-emerald-300"
              >
                Prakaran (Scholarly Treatises)
              </button>
              <button
                onClick={() => onNavigate('gyan-kosh', 'myths')}
                className="px-3.5 py-1.5 rounded-lg bg-red-100/90 hover:bg-red-200 text-red-950 font-serif text-xs font-bold transition-colors cursor-pointer border border-red-300"
              >
                Vastu Myths & Truths
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-white to-amber-50/50 rounded-3xl p-6 sm:p-10 border border-amber-200 shadow-sm text-center">
          <div className="max-w-3xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Foundational Vedic Philosophy
            </span>
            <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl md:text-4xl text-stone-900 font-bold mt-2">
              Our Motto · ध्येयवाक्यम्
            </h2>
            <p className="font-['Rozha_One'] text-xl sm:text-2xl text-red-900 mt-2">
              ॥ संतुलन · समृद्धि · सौख्यम् ॥
            </p>
            <p className="font-['Marcellus'] text-sm sm:text-base text-stone-600 mt-1">
              These three ideals form the foundation of every consultation, publication, and educational initiative undertaken by VASTU RITAM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* 1. Santulan (Balance) */}
            <div className="bg-white rounded-2xl p-6 border-2 border-emerald-600/30 shadow-xs relative overflow-hidden group hover:border-emerald-600 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 mb-4 font-['Yatra_One'] text-2xl">
                सं
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-emerald-800">
                Pillar I · प्रथम सोपानम्
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-xl text-stone-900 font-bold mt-1">
                संतुलन (Balance)
              </h3>
              <p className="font-['Marcellus'] text-stone-700 text-sm sm:text-base mt-3 leading-relaxed">
                Balance forms the foundation of every space and leads to Prosperity. When elemental energies (Earth, Water, Fire, Air, Space) resonate in equilibrium, physical and psychological tension naturally subsides.
              </p>
            </div>

            {/* 2. Samriddhi (Prosperity) */}
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-600/30 shadow-xs relative overflow-hidden group hover:border-amber-600 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 mb-4 font-['Yatra_One'] text-2xl">
                समृ
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-amber-800">
                Pillar II · द्वितीय सोपानम्
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-xl text-stone-900 font-bold mt-1">
                समृद्धि (Prosperity)
              </h3>
              <p className="font-['Marcellus'] text-stone-700 text-sm sm:text-base mt-3 leading-relaxed">
                Prosperity arises when balance allows life and work to flourish and therefore nurtures Well-being. Genuine prosperity encompasses clear intellect, vocational momentum, financial stability, and joyful endeavors.
              </p>
            </div>

            {/* 3. Saukhyam (Well-Being) */}
            <div className="bg-white rounded-2xl p-6 border-2 border-red-600/30 shadow-xs relative overflow-hidden group hover:border-red-600 transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-800 mb-4 font-['Yatra_One'] text-2xl">
                सौ
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-red-800">
                Pillar III · तृतीय सोपानम्
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-xl text-stone-900 font-bold mt-1">
                सौख्यम् (Well-Being)
              </h3>
              <p className="font-['Marcellus'] text-stone-700 text-sm sm:text-base mt-3 leading-relaxed">
                Well-Being is the ultimate objective—a state of physical comfort, mental peace, and holistic harmony. A building should not only protect its inhabitants from the elements, but replenish their spirits daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Emblem Section (Every click opens explanation below!) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveEmblem />
      </section>

      {/* Core Philosophy Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 text-white p-8 sm:p-12 border border-amber-600/40 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-amber-400 font-['Yatra_One'] text-sm tracking-widest uppercase">
              Classical Integrity vs Commercial Myths
            </span>
            <h2 className="font-['Rozha_One'] text-2xl sm:text-3xl md:text-4xl text-amber-100 leading-snug">
              “We do not begin with remedies. <br />
              We begin with understanding.”
            </h2>
            <p className="font-['Marcellus'] text-amber-200/90 text-sm sm:text-base leading-relaxed">
              At VASTU RITAM, we believe that Vastu is a science of spatial harmony rooted in observation, experience, logic, and philosophical inquiry. It is not a collection of superstitions, fear-driven prescriptions, or one-size-fits-all remedies.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('discover', 'philosophy')}
                className="px-5 py-2.5 rounded-lg bg-amber-500 text-stone-950 font-bold text-sm hover:bg-amber-400 transition-colors cursor-pointer"
              >
                Read Our Complete Philosophy →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Directional Matrix Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-semibold tracking-widest text-emerald-800 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Spatial Orientation & The Five Elements
          </span>
          <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl text-stone-900 font-bold mt-2">
            The Nine Sacred Spatial Zones (Navakhanda)
          </h2>
          <p className="font-['Marcellus'] text-stone-600 text-sm sm:text-base mt-2">
            Explore how each cardinal and diagonal direction interacts with the Pancha Mahabhuta (Earth, Water, Fire, Air, Space) to shape human life and architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIRECTIONAL_ZONES.slice(0, 6).map((zone) => (
            <div
              key={zone.code}
              className="bg-white rounded-xl p-5 border border-amber-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all text-left"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono">
                  {zone.direction}
                </span>
                <span className="text-xs font-serif text-emerald-800 font-semibold">{zone.element}</span>
              </div>
              <h4 className="font-['Cinzel_Decorative'] font-bold text-stone-900 text-lg">
                {zone.name}
              </h4>
              <p className="text-xs text-stone-600 font-['Marcellus'] mt-1">
                <strong>Deity:</strong> {zone.deity}
              </p>
              <p className="text-xs text-stone-700 font-['Marcellus'] mt-2">
                <strong>Recommendation:</strong> {zone.recommendation}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => onNavigate('what-we-do')}
            className="text-sm font-semibold text-emerald-800 hover:text-emerald-950 underline font-serif cursor-pointer"
          >
            View All 9 Zones & Planning Guidelines in "What We Do" →
          </button>
        </div>
      </section>

      {/* Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-100/70 border border-amber-300 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="font-['Cinzel_Decorative'] text-xl sm:text-2xl text-stone-900 font-bold">
              Planning a New Project, Renovation, or Property Purchase?
            </h3>
            <p className="font-['Marcellus'] text-stone-700 text-sm sm:text-base">
              Consult with VASTU RITAM for reasoned, non-destructive guidance grounded in classical texts and architectural reality.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="whitespace-nowrap px-6 py-3.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-serif font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Consult VASTU RITAM</span>
          </button>
        </div>
      </section>
    </div>
  );
};
