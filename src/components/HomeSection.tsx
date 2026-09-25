import React from 'react';
import { PageType } from '../types';
import { InteractiveEmblem } from './InteractiveEmblem';
import { VastuRitamLogo } from './VastuRitamLogo';
import { AdBanner } from './AdBanner';
import { BookOpen, PhoneCall, Compass, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, Home as HomeIcon, Award } from 'lucide-react';
import { DIRECTIONAL_ZONES } from '../data/vastuData';

interface HomeSectionProps {
  onNavigate: (page: PageType, subTab?: string) => void;
  onReplayIntro?: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate, onReplayIntro }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section: Rich Deep Maroon → Terracotta Gradient with Subtle Vastu Geometry */}
      <section className="relative overflow-hidden pt-6 md:pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="section-hero-maroon rounded-3xl p-6 sm:p-10 lg:p-14 border-2 border-[#D4A72C]/80 shadow-2xl relative overflow-hidden bg-vastu-grid text-[#FFF7ED]">
          
          {/* Subtle Ambient Mandala Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#E88A16]/25 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#B94E2C]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Mission, Vision, and Call to Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Sacred Heading Kicker with Replay Intro option */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-['Marcellus'] text-[#D4A72C] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#E88A16]" />
                  <span>Dedicated Institution for Classical Vastu Research & Practice</span>
                </div>
                {onReplayIntro && (
                  <button
                    onClick={onReplayIntro}
                    className="text-xs font-serif text-[#D4A72C] hover:text-[#FFF7ED] underline flex items-center gap-1 cursor-pointer bg-[#6B1F1F] px-3 py-1 rounded-lg border border-[#D4A72C]/60 transition-colors shadow-sm"
                  >
                    <span>Replay Intro</span>
                  </button>
                )}
              </div>

              <div className="space-y-2">
                <h1 className="font-['Cinzel_Decorative'] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-[#FFF7ED] leading-tight drop-shadow-md">
                  Towards Harmony through <br className="hidden sm:block" />
                  <span className="gold-gradient-text">Authentic Vastu Knowledge</span>
                </h1>
                <div className="flex items-center gap-3 pt-1">
                  <span className="text-xl sm:text-2xl font-['Yatra_One'] text-[#D4A72C]">वास्तु रितम्</span>
                  <span className="text-[#D4A72C]/60">|</span>
                  <span className="text-base sm:text-lg font-['Rozha_One'] text-[#E88A16]">
                    ॥ संतुलनात् समृद्धिः सुखम् ॥
                  </span>
                </div>
              </div>

              <p className="font-['Marcellus'] text-base sm:text-lg text-[#E8D3A8] leading-relaxed max-w-2xl font-normal drop-shadow-xs">
                <strong className="text-[#FFF7ED] font-bold">VASTU RITAM</strong> is an institution dedicated to the study, practice, dissemination and consultation of authentic Vastu knowledge. Rooted in classical wisdom and guided by thoughtful research, we seek to advance the understanding and application of Vastu in the design and development of harmonious living and working spaces.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#2D1B14]/80 border border-[#D4A72C]/70 text-[#FFF7ED] text-sm sm:text-base font-['Marcellus'] leading-relaxed shadow-lg">
                <p>
                  Our primary collaborators include <span className="font-semibold text-[#D4A72C]">architects, civil engineers, interior designers, builders, developers</span> and other professionals associated with the built environment. We also serve <span className="font-semibold text-[#E88A16]">homeowners, property owners, business owners, students, teachers and researchers</span> seeking a deeper understanding of Vastu.
                </p>
              </div>

              {/* Two High-Contrast Heritage Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onNavigate('gyan-kosh')}
                  className="px-6 py-3.5 rounded-xl font-['Marcellus'] text-base font-bold bg-[#E88A16] hover:bg-[#D97706] text-[#2D1B14] border-2 border-[#D4A72C] transition-all shadow-xl hover:shadow-[0_0_25px_rgba(232,138,22,0.5)] flex items-center gap-2.5 cursor-pointer group"
                >
                  <BookOpen className="w-5 h-5 text-[#2D1B14] group-hover:scale-110 transition-transform" />
                  <span>Explore Vastu Gyan-Kosh (Library)</span>
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-xl font-['Marcellus'] text-base font-bold bg-[#0F5C55] hover:bg-[#167A68] text-[#FFF7ED] border-2 border-[#D4A72C] transition-all shadow-xl hover:shadow-[0_0_25px_rgba(15,92,85,0.5)] flex items-center gap-2 cursor-pointer group"
                >
                  <PhoneCall className="w-5 h-5 text-[#D4A72C] group-hover:scale-110 transition-transform" />
                  <span>Consult VASTU RITAM</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Sacred Sanctuary Imagery & Emblem Visual */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden border-2 border-[#D4A72C] shadow-2xl bg-[#2D1B14] p-3 group">
                {/* Sacred Temple Background Image */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-3 border border-[#D4A72C]/40">
                  <img
                    src="/hero-sanctuary.jpg"
                    alt="Vedic Temple Sanctuary Ambience"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A] via-[#1A0F0A]/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-serif uppercase tracking-widest text-[#D4A72C] block">Vedic Architecture</span>
                    <p className="font-['Rozha_One'] text-lg text-[#FFF7ED]">“We do not begin with remedies. We begin with understanding.”</p>
                  </div>
                </div>

                {/* Emblem Stamp Banner */}
                <div className="flex items-center gap-3.5 p-3.5 bg-gradient-to-r from-[#3B1111] to-[#2D1B14] rounded-2xl border border-[#D4A72C]/70 shadow-md">
                  <VastuRitamLogo variant="emblem" size={60} />
                  <div className="text-left flex-1 min-w-0">
                    <span className="font-['Cinzel',serif] font-bold text-sm text-[#FFF7ED] block">
                      VASTU RITAM EMBLEM
                    </span>
                    <span className="text-xs text-[#E8D3A8] font-serif block truncate">
                      9-Fold Mandala, Vastu Purusha, Lotus & Stem
                    </span>
                  </div>
                  <button
                    onClick={() => onNavigate('discover', 'emblem')}
                    className="text-xs font-bold text-[#D4A72C] hover:text-[#FFF7ED] underline cursor-pointer shrink-0"
                  >
                    Inspect →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classical Palm Leaf Archive Section: Alternating Sand, Teal, Terracotta & Sand Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-terracotta-rich rounded-3xl p-6 sm:p-10 border-2 border-[#D4A72C] shadow-2xl golden-aura-glow relative overflow-hidden text-left bg-mandala-pattern text-[#FFF7ED]">
          {/* Subtle Manuscript Thread Holes (Sutra-Randhra) representing authentic palm leaf folios */}
          <div className="absolute top-8 left-6 w-3.5 h-3.5 rounded-full bg-[#1A0F0A] border-2 border-[#D4A72C] shadow-inner hidden md:block" />
          <div className="absolute top-8 right-6 w-3.5 h-3.5 rounded-full bg-[#1A0F0A] border-2 border-[#D4A72C] shadow-inner hidden md:block" />

          {/* Top Intro: Dual Column with High-Contrast Typography & Framed Authentic Manuscript Exhibit */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            <div className="lg:col-span-7 space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#D4A72C] font-bold">
                <BookOpen className="w-3.5 h-3.5 text-[#E88A16]" />
                <span>ताड़पत्र ग्रन्थावलिः · The Classical Palm Leaf Archive</span>
              </div>

              <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl md:text-4xl text-[#FFF7ED] font-black leading-tight drop-shadow-md">
                An Intellectual Knowledgebase <br className="hidden sm:inline" />
                Rooted in Ancient Palm Leaf Treatises
              </h2>

              <p className="font-['Marcellus'] text-[#E8D3A8] text-sm sm:text-base leading-relaxed">
                Before the advent of modern paper or commercial remedies, master Vedic architects (Sthapatis) inscribed environmental, astronomical, and spatial truths onto palm-leaf folios (<em>Tada-patra</em>). <strong className="text-[#FFF7ED] font-bold">VASTU RITAM</strong> preserves, translates, and demystifies these classical root texts for contemporary architecture.
              </p>
            </div>

            {/* Dedicated Framed Museum Exhibit of Authentic Palm Leaf Folio */}
            <div className="lg:col-span-5">
              <div className="bg-[#2D1B14] rounded-2xl p-3 border-2 border-[#D4A72C] shadow-2xl">
                <div className="relative rounded-xl overflow-hidden aspect-[16/8] bg-stone-900 border border-[#D4A72C]/50">
                  <img
                    src="/palm-leaf-texture.jpg"
                    alt="Authentic Classical Sanskrit Palm-Leaf Folio (Tada-Patra)"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-3 right-3 text-[11px] font-serif text-[#D4A72C] italic truncate text-center">
                    Authentic 11th Century Palm Leaf Inscription (Tada-Patra)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Classical Manuscript Treatises Display:
              Exact requested rhythm: Maroon section → Sand card → Teal card → Terracotta card → Sand card
              with gold outlines and dark brown / high contrast text!
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {/* Card 1: Sand Card */}
            <div
              onClick={() => onNavigate('gyan-kosh', 'prakaran')}
              className="p-5 rounded-2xl bg-[#E8D3A8] text-[#2D1B14] border-2 border-[#D4A72C] shadow-xl hover:scale-102 hover:shadow-2xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-serif mb-1">
                  <span className="text-[#6B1F1F] font-bold uppercase tracking-wider">Classical Era</span>
                  <span className="font-['Yatra_One'] text-[#0F5C55] text-sm">मयमतम्</span>
                </div>
                <h3 className="font-['Cinzel_Decorative'] font-black text-[#2D1B14] text-base group-hover:text-[#6B1F1F] transition-colors">
                  Mayamatam
                </h3>
                <p className="font-['Marcellus'] text-[#3A2318] text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                  Solar vectors, orientation (Dik-Sadhana), and town planning grids.
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#D4A72C]/60 text-xs font-serif text-[#6B1F1F] font-bold flex items-center justify-between">
                <span>Explore Treatise</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Card 2: Teal Card */}
            <div
              onClick={() => onNavigate('gyan-kosh', 'prakaran')}
              className="p-5 rounded-2xl bg-[#0F5C55] text-[#FFF7ED] border-2 border-[#D4A72C] shadow-xl hover:scale-102 hover:shadow-2xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-serif mb-1">
                  <span className="text-[#E88A16] font-bold uppercase tracking-wider">11th Century (Raja Bhoja)</span>
                  <span className="font-['Yatra_One'] text-[#D4A72C] text-sm">समराङ्गण सूत्रधार</span>
                </div>
                <h3 className="font-['Cinzel_Decorative'] font-black text-[#FFF7ED] text-base group-hover:text-[#FDE68A] transition-colors">
                  Samarangana Sutradhara
                </h3>
                <p className="font-['Marcellus'] text-[#E8D3A8] text-xs sm:text-sm mt-2 leading-relaxed">
                  Thermodynamics, courtyards (Angana), and natural stack-effect cooling.
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#D4A72C]/40 text-xs font-serif text-[#D4A72C] font-bold flex items-center justify-between">
                <span>Explore Treatise</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Card 3: Terracotta Card */}
            <div
              onClick={() => onNavigate('gyan-kosh', 'shabd-kosh')}
              className="p-5 rounded-2xl bg-[#B94E2C] text-[#FFF7ED] border-2 border-[#D4A72C] shadow-xl hover:scale-102 hover:shadow-2xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-serif mb-1">
                  <span className="text-[#D4A72C] font-bold uppercase tracking-wider">Vedic Canon</span>
                  <span className="font-['Yatra_One'] text-[#FFF7ED] text-sm">मानसार शिल्पशास्त्रम्</span>
                </div>
                <h3 className="font-['Cinzel_Decorative'] font-black text-[#FFF7ED] text-base group-hover:text-[#FDE68A] transition-colors">
                  Manasara
                </h3>
                <p className="font-['Marcellus'] text-[#FDE68A] text-xs sm:text-sm mt-2 leading-relaxed">
                  Proportional mathematics, Ayadi Shadvarga, and structural harmony.
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#D4A72C]/40 text-xs font-serif text-[#FFF7ED] font-bold flex items-center justify-between">
                <span>Explore Treatise</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Card 4: Sand Card */}
            <div
              onClick={() => onNavigate('gyan-kosh', 'myths')}
              className="p-5 rounded-2xl bg-[#E8D3A8] text-[#2D1B14] border-2 border-[#D4A72C] shadow-xl hover:scale-102 hover:shadow-2xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-serif mb-1">
                  <span className="text-[#6B1F1F] font-bold uppercase tracking-wider">6th Century (Varahamihira)</span>
                  <span className="font-['Yatra_One'] text-[#0F5C55] text-sm">बृहत्संहिता</span>
                </div>
                <h3 className="font-['Cinzel_Decorative'] font-black text-[#2D1B14] text-base group-hover:text-[#6B1F1F] transition-colors">
                  Brihat Samhita
                </h3>
                <p className="font-['Marcellus'] text-[#3A2318] text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                  Vedic astrology, geomagnetism, and entrance door padas (Veedhi-Shoola).
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#D4A72C]/60 text-xs font-serif text-[#6B1F1F] font-bold flex items-center justify-between">
                <span>Explore Treatise</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>

          {/* Quick Jump Bar into Knowledgebase Sections */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#D4A72C]/60 bg-[#2D1B14]/80 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-[#E8D3A8] text-xs sm:text-sm font-serif">
              <Sparkles className="w-4 h-4 text-[#D4A72C]" />
              <span>Explore our curated sections:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onNavigate('gyan-kosh', 'shabd-kosh')}
                className="px-3.5 py-1.5 rounded-lg bg-[#E8D3A8] hover:bg-[#F4E8CE] text-[#2D1B14] font-serif text-xs font-bold transition-colors cursor-pointer border border-[#D4A72C]"
              >
                Vastu Shabd-Kosh (Dictionary)
              </button>
              <button
                onClick={() => onNavigate('gyan-kosh', 'prakaran')}
                className="px-3.5 py-1.5 rounded-lg bg-[#0F5C55] hover:bg-[#167A68] text-[#FFF7ED] font-serif text-xs font-bold transition-colors cursor-pointer border border-[#D4A72C]"
              >
                Prakaran (Scholarly Treatises)
              </button>
              <button
                onClick={() => onNavigate('gyan-kosh', 'myths')}
                className="px-3.5 py-1.5 rounded-lg bg-[#6B1F1F] hover:bg-[#B94E2C] text-[#FFF7ED] font-serif text-xs font-bold transition-colors cursor-pointer border border-[#D4A72C]"
              >
                Vastu Myths & Truths
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsored Partner Showcase Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdBanner placement="library-top" />
      </section>

      {/* Foundational Vedic Philosophy: Rich Sandstone Background with Tri-Color Heritage Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-sandstone-rich rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#D4A72C] shadow-2xl text-center text-[#2D1B14]">
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-2 text-xs font-serif uppercase tracking-widest text-[#6B1F1F] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#B94E2C]" />
              <span>Foundational Vedic Philosophy · मूल-सिद्धान्ताः</span>
            </div>
            <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl md:text-4xl text-[#2D1B14] font-black mt-3">
              Our Motto · ध्येयवाक्यम्
            </h2>
            <p className="font-['Rozha_One'] text-xl sm:text-2xl text-[#6B1F1F] mt-2">
              ॥ संतुलन · समृद्धि · सौख्यम् ॥
            </p>
            <p className="font-['Marcellus'] text-sm sm:text-base text-[#3A2318] mt-1 font-medium">
              These three ideals form the foundation of every consultation, publication, and educational initiative undertaken by VASTU RITAM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* 1. Santulan (Balance) - Deep Teal Heritage Card */}
            <div className="bg-[#0F5C55] rounded-2xl p-6 border-2 border-[#D4A72C] shadow-xl text-[#FFF7ED] relative overflow-hidden group hover:scale-102 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[#2D1B14] border border-[#D4A72C] flex items-center justify-center text-[#D4A72C] mb-4 font-['Yatra_One'] text-2xl shadow-md">
                सं
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-[#D4A72C]">
                Pillar I · प्रथम सोपानम्
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-xl text-[#FFF7ED] font-black mt-1">
                संतुलन (Balance)
              </h3>
              <p className="font-['Marcellus'] text-[#E8D3A8] text-sm sm:text-base mt-3 leading-relaxed">
                Balance forms the foundation of every space and leads to Prosperity. When elemental energies (Earth, Water, Fire, Air, Space) resonate in equilibrium, physical and psychological tension naturally subsides.
              </p>
            </div>

            {/* 2. Samriddhi (Prosperity) - Terracotta Heritage Card */}
            <div className="bg-[#B94E2C] rounded-2xl p-6 border-2 border-[#D4A72C] shadow-xl text-[#FFF7ED] relative overflow-hidden group hover:scale-102 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[#2D1B14] border border-[#D4A72C] flex items-center justify-center text-[#E88A16] mb-4 font-['Yatra_One'] text-2xl shadow-md">
                समृ
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-[#FDE68A]">
                Pillar II · द्वितीय सोपानम्
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-xl text-[#FFF7ED] font-black mt-1">
                समृद्धि (Prosperity)
              </h3>
              <p className="font-['Marcellus'] text-[#FFF7ED] text-sm sm:text-base mt-3 leading-relaxed">
                Prosperity arises when balance allows life and work to flourish and therefore nurtures Well-being. Genuine prosperity encompasses clear intellect, vocational momentum, financial stability, and joyful endeavors.
              </p>
            </div>

            {/* 3. Saukhyam (Well-Being) - Deep Maroon Heritage Card */}
            <div className="bg-[#6B1F1F] rounded-2xl p-6 border-2 border-[#D4A72C] shadow-xl text-[#FFF7ED] relative overflow-hidden group hover:scale-102 transition-transform">
              <div className="w-12 h-12 rounded-xl bg-[#2D1B14] border border-[#D4A72C] flex items-center justify-center text-[#D4A72C] mb-4 font-['Yatra_One'] text-2xl shadow-md">
                सौ
              </div>
              <div className="text-xs uppercase tracking-wider font-bold text-[#E8D3A8]">
                Pillar III · तृतीय सोपानम्
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-xl text-[#FFF7ED] font-black mt-1">
                सौख्यम् (Well-Being)
              </h3>
              <p className="font-['Marcellus'] text-[#E8D3A8] text-sm sm:text-base mt-3 leading-relaxed">
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

      {/* Core Philosophy Banner: Muted Indigo & Saffron */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-indigo-deep rounded-3xl p-8 sm:p-12 border-2 border-[#D4A72C] shadow-2xl relative overflow-hidden text-[#FFF7ED]">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-[#D4A72C] font-['Yatra_One'] text-sm tracking-widest uppercase">
              Classical Integrity vs Commercial Myths
            </span>
            <h2 className="font-['Rozha_One'] text-2xl sm:text-3xl md:text-4xl text-[#FFF7ED] leading-snug">
              “We do not begin with remedies. <br />
              We begin with understanding.”
            </h2>
            <p className="font-['Marcellus'] text-[#E8D3A8] text-sm sm:text-base leading-relaxed">
              At VASTU RITAM, we believe that Vastu is a science of spatial harmony rooted in observation, experience, logic, and philosophical inquiry. It is not a collection of superstitions, fear-driven prescriptions, or one-size-fits-all remedies.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('discover', 'philosophy')}
                className="px-6 py-3 rounded-xl bg-[#E88A16] hover:bg-[#D97706] text-[#2D1B14] font-bold text-sm border-2 border-[#D4A72C] shadow-lg transition-all cursor-pointer"
              >
                Read Our Complete Philosophy →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spatial Orientation: Deep Teal Background with Colorful Heritage Quadrants */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-teal-heritage rounded-3xl p-6 sm:p-10 border-2 border-[#D4A72C] shadow-2xl text-[#FFF7ED]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-2 text-xs font-serif uppercase tracking-widest text-[#D4A72C] font-bold">
              <Compass className="w-3.5 h-3.5 text-[#E88A16]" />
              <span>Spatial Orientation & The Five Elements · पञ्च-महाभूतानि</span>
            </div>
            <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl text-[#FFF7ED] font-black mt-3">
              The Nine Sacred Spatial Zones (Navakhanda)
            </h2>
            <p className="font-['Marcellus'] text-[#E8D3A8] text-sm sm:text-base mt-2">
              Explore how each cardinal and diagonal direction interacts with the Pancha Mahabhuta (Earth, Water, Fire, Air, Space) to shape human life and architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIRECTIONAL_ZONES.slice(0, 6).map((zone, idx) => {
              // Alternating heritage color schemes for the cards
              const cardStyles = [
                'bg-[#B94E2C] text-[#FFF7ED] border-[#D4A72C]', // Terracotta
                'bg-[#E8D3A8] text-[#2D1B14] border-[#D4A72C]', // Sand
                'bg-[#6B1F1F] text-[#FFF7ED] border-[#D4A72C]', // Maroon
                'bg-[#283B63] text-[#FFF7ED] border-[#D4A72C]', // Indigo
                'bg-[#2D1B14] text-[#FFF7ED] border-[#E88A16]', // Dark Brown / Gold
                'bg-[#093732] text-[#FFF7ED] border-[#D4A72C]', // Deep Teal
              ];
              const style = cardStyles[idx % cardStyles.length];

              return (
                <div
                  key={zone.code}
                  className={`rounded-2xl p-5 border-2 shadow-lg hover:scale-102 transition-transform text-left ${style}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#2D1B14]/40 border border-current font-mono">
                      {zone.direction}
                    </span>
                    <span className="text-xs font-serif font-bold uppercase tracking-wider">{zone.element}</span>
                  </div>
                  <h4 className="font-['Cinzel_Decorative'] font-bold text-lg">
                    {zone.name}
                  </h4>
                  <p className="text-xs font-['Marcellus'] mt-1 opacity-90">
                    <strong>Deity:</strong> {zone.deity}
                  </p>
                  <p className="text-xs font-['Marcellus'] mt-2 leading-relaxed">
                    <strong>Recommendation:</strong> {zone.recommendation}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('what-we-do')}
              className="text-sm font-bold text-[#D4A72C] hover:text-[#FFF7ED] underline font-serif cursor-pointer"
            >
              View All 9 Zones & Planning Guidelines in "What We Do" →
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Consultation Banner in Terracotta & Maroon Gradient */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#B94E2C] via-[#6B1F1F] to-[#4A1515] border-2 border-[#D4A72C] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-2xl text-[#FFF7ED]">
          <div className="space-y-2">
            <h3 className="font-['Cinzel_Decorative'] text-xl sm:text-2xl text-[#FFF7ED] font-black">
              Planning a New Project, Renovation, or Property Purchase?
            </h3>
            <p className="font-['Marcellus'] text-[#E8D3A8] text-sm sm:text-base">
              Consult with VASTU RITAM for reasoned, non-destructive guidance grounded in classical texts and architectural reality.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="whitespace-nowrap px-7 py-3.5 rounded-xl bg-[#E88A16] hover:bg-[#D97706] text-[#2D1B14] font-serif font-bold border-2 border-[#D4A72C] shadow-xl hover:shadow-[0_0_20px_rgba(232,138,22,0.6)] transition-all flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#2D1B14]" />
            <span>Consult VASTU RITAM</span>
          </button>
        </div>
      </section>
    </div>
  );
};
