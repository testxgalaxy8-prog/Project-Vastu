import React, { useState, useEffect } from 'react';
import { DiscoverTab } from '../types';
import { InteractiveEmblem } from './InteractiveEmblem';
import { FOUNDER_INFO, PHILOSOPHY_PRINCIPLES, COLLABORATORS_DATA } from '../data/vastuData';
import { BookOpen, CheckCircle, Shield, Award, Sparkles, GraduationCap, Compass, Users, Target, Eye } from 'lucide-react';
import { VastuRitamLogo } from './VastuRitamLogo';

interface DiscoverSectionProps {
  initialTab?: DiscoverTab;
}

export const DiscoverSection: React.FC<DiscoverSectionProps> = ({ initialTab = 'meaning' }) => {
  const [activeTab, setActiveTab] = useState<DiscoverTab>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const tabs: { id: DiscoverTab; label: string; sanskrit?: string }[] = [
    { id: 'meaning', label: 'The Meaning', sanskrit: 'अर्थ-विमर्शः' },
    { id: 'philosophy', label: 'Our Philosophy', sanskrit: 'दर्शनम्' },
    { id: 'why-us', label: 'Why VASTU RITAM?', sanskrit: 'किमर्थम्?' },
    { id: 'collaborators', label: 'Our Collaborators', sanskrit: 'सहयोगिनः' },
    { id: 'mission-vision', label: 'Our Mission & Vision', sanskrit: 'लक्ष्यम्' },
    { id: 'founder', label: 'Founder & Research Scholar', sanskrit: 'संस्थापकः' },
    { id: 'emblem', label: 'Our Emblem · Identity', sanskrit: 'प्रतीकम्' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300">
          The Institution & Foundations
        </span>
        <h1 className="font-['Cinzel_Decorative'] text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold">
          Discover VASTU RITAM
        </h1>
        <p className="font-['Marcellus'] text-stone-600 text-sm sm:text-base">
          Rooted in classical wisdom, guided by thoughtful research, and committed to advancing the harmonious design of living and working spaces.
        </p>
      </div>

      {/* Tabs with exact user specification:
          Inactive tabs -> White background with a thin green border.
          Active tab -> Soft green fill with red border.
          Every click will open explanation below.
      */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-amber-200/80 pb-6">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer font-serif flex items-center gap-2 ${
                isActive
                  ? 'bg-emerald-50/95 border-2 border-red-600 text-red-950 font-bold shadow-md scale-105'
                  : 'bg-white border border-emerald-700/60 text-emerald-900 hover:bg-emerald-50/50 hover:border-emerald-800'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-red-600' : 'bg-emerald-600'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Area: Every click opens explanation below */}
      <div className="bg-white rounded-3xl border border-amber-200/90 shadow-sm p-6 sm:p-10 md:p-12 transition-all">
        
        {/* Tab 1: The Meaning */}
        {activeTab === 'meaning' && (
          <div className="space-y-8 animate-in fade-in duration-200 text-left">
            <div className="border-b border-amber-100 pb-5">
              <span className="text-xs uppercase font-serif text-amber-800 tracking-wider">Etymology & Concept</span>
              <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl text-stone-900 font-bold mt-1">
                The Meaning: Vastu (वास्तु) & Ritam (रितम्)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vastu Definition */}
              <div className="bg-amber-50/60 rounded-2xl p-6 sm:p-8 border border-amber-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-['Yatra_One'] text-emerald-800">वास्तु</span>
                  <span className="text-stone-400">|</span>
                  <h3 className="font-['Cinzel_Decorative'] text-xl font-bold text-stone-900">Vastu</h3>
                </div>
                <p className="font-['Marcellus'] text-stone-700 text-base leading-relaxed">
                  The word <strong className="text-stone-900">Vastu (वास्तु)</strong> refers to the science of harmonious living spaces. It explores the relationship between human life, nature, the built environment, and the principles that govern their balance. Derived from the Sanskrit root <span className="italic text-emerald-900 font-bold">vas</span> (to dwell or reside), it encompasses the soil, the building envelope, the air, and the celestial rhythms that cradle human existence.
                </p>
              </div>

              {/* Ritam Definition */}
              <div className="bg-emerald-50/50 rounded-2xl p-6 sm:p-8 border border-emerald-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-['Yatra_One'] text-red-800">रितम्</span>
                  <span className="text-stone-400">|</span>
                  <h3 className="font-['Cinzel_Decorative'] text-xl font-bold text-stone-900">Ritam</h3>
                </div>
                <p className="font-['Marcellus'] text-stone-700 text-base leading-relaxed">
                  <strong className="text-stone-900">Ritam (रितम्)</strong> is an ancient Vedic concept signifying the universal order that sustains creation. It represents the natural rhythm through which the cosmos maintains balance, harmony, and truth. Unlike arbitrary rules, <em>Ritam</em> is the cosmic law that governs the rising of the sun, the change of seasons, the flow of waters, and the moral order of existence.
                </p>
              </div>
            </div>

            {/* Synthesis */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-100/70 via-emerald-50/70 to-amber-50/70 border border-amber-300">
              <h4 className="font-['Cinzel_Decorative'] text-lg font-bold text-stone-900 mb-2">
                The Synthesis: VASTU RITAM
              </h4>
              <p className="font-['Marcellus'] text-stone-800 text-base sm:text-lg leading-relaxed">
                Together, <strong className="text-emerald-950 font-bold">VASTU RITAM</strong> embodies the pursuit of understanding, applying, and advancing Vastu in alignment with this eternal order. It reflects a commitment to preserving classical wisdom while continually seeking deeper knowledge through study, research, and thoughtful practice.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Our Philosophy */}
        {activeTab === 'philosophy' && (
          <div className="space-y-8 animate-in fade-in duration-200 text-left">
            <div className="border-b border-amber-100 pb-5">
              <span className="text-xs uppercase font-serif text-amber-800 tracking-wider">Guiding Creed</span>
              <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl text-stone-900 font-bold mt-1">
                Our Philosophy
              </h2>
            </div>

            {/* Central Pillar Quote */}
            <div className="bg-amber-100/60 rounded-2xl p-6 sm:p-8 border-l-4 border-red-600 text-stone-900">
              <blockquote className="font-['Rozha_One'] text-2xl sm:text-3xl text-red-950 mb-3">
                “We do not begin with remedies. We begin with understanding.”
              </blockquote>
              <p className="font-['Marcellus'] text-stone-800 text-base sm:text-lg leading-relaxed">
                At VASTU RITAM, we believe that Vastu is a science of spatial harmony rooted in observation, experience, logic, and philosophical inquiry. It is not a collection of superstitions, fear-driven prescriptions, or one-size-fits-all remedies. True understanding of Vastu comes not from memorising rules, but from understanding the principles that govern the relationship between space, nature, and human life.
              </p>
            </div>

            {/* Three Foundational Principles */}
            <div>
              <h3 className="font-['Cinzel_Decorative'] text-xl font-bold text-stone-900 mb-4">
                Our Approach is Founded on Three Principles:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PHILOSOPHY_PRINCIPLES.map((principle) => (
                  <div
                    key={principle.number}
                    className="rounded-2xl p-6 border-2 border-emerald-700/30 bg-white hover:border-emerald-700 transition-all shadow-xs"
                  >
                    <div className="text-2xl font-serif font-black text-emerald-800 mb-2">
                      {principle.number}
                    </div>
                    <div className="text-xs text-amber-900 font-serif font-bold mb-1">
                      {principle.sanskrit}
                    </div>
                    <h4 className="font-['Cinzel_Decorative'] text-lg font-bold text-stone-900 mb-3">
                      {principle.title}
                    </h4>
                    <p className="font-['Marcellus'] text-stone-700 text-sm sm:text-base leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Empowerment Message */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200">
              <p className="font-['Marcellus'] text-stone-700 text-base leading-relaxed">
                We believe that Vastu should empower people through understanding rather than dependence. Our objective is not merely to recommend changes to a building, but to cultivate a deeper appreciation of the principles that shape harmonious spaces. <strong className="text-stone-900">When the principles are understood, the recommendations become self-evident.</strong>
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Why VASTU RITAM? */}
        {activeTab === 'why-us' && (
          <div className="space-y-6 animate-in fade-in duration-200 text-left">
            <div className="border-b border-amber-100 pb-5">
              <span className="text-xs uppercase font-serif text-amber-800 tracking-wider">The Need of the Hour</span>
              <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl text-stone-900 font-bold mt-1">
                Why VASTU RITAM?
              </h2>
            </div>

            <div className="space-y-4 font-['Marcellus'] text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                Today, information about Vastu is more accessible than ever before, yet genuine understanding often remains fragmented. Classical principles, modern interpretations, practical experiences, and popular advice frequently exist side by side, making it difficult for students, professionals, and homeowners to distinguish enduring principles from temporary trends.
              </p>

              <div className="p-5 rounded-xl bg-amber-50 border-l-4 border-amber-600 font-serif text-amber-950 font-bold text-lg">
                VASTU RITAM was established to bridge this gap.
              </div>

              <p>
                Our purpose is to create a structured, authentic, and intellectually honest institution for the study and application of Vastu—one that preserves classical wisdom, encourages research and thoughtful inquiry, and presents knowledge in a form that is relevant to contemporary architecture, construction, and living.
              </p>

              <p>
                We believe that Vastu deserves the same seriousness that is accorded to any enduring body of knowledge: careful study, respectful interpretation, open dialogue, and responsible application.
              </p>

              <p>
                Consultation is therefore only one aspect of our work; the larger mission is to build a trusted repository of knowledge for architects, engineers, designers, builders, students, researchers, and all those seeking a deeper understanding of harmonious spaces.
              </p>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950 to-stone-900 text-amber-100 shadow-md">
                <p className="font-['Rozha_One'] text-lg sm:text-xl text-amber-200">
                  “VASTU RITAM exists not because Vastu lacks relevance, but because authentic understanding deserves a home where tradition, research, and practical wisdom can meet.”
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Our Collaborators */}
        {activeTab === 'collaborators' && (
          <div className="space-y-8 animate-in fade-in duration-200 text-left">
            <div className="border-b border-amber-100 pb-5">
              <span className="text-xs uppercase font-serif text-amber-800 tracking-wider">Ecosystem of Practice</span>
              <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl text-stone-900 font-bold mt-1">
                Our Collaborators
              </h2>
              <p className="font-['Marcellus'] text-stone-600 text-sm sm:text-base mt-1">
                We work side-by-side with multidisciplinary experts to ensure Vastu principles enhance modern structural, environmental, and residential goals.
              </p>
            </div>

            <div className="space-y-8">
              {COLLABORATORS_DATA.map((collabGroup, idx) => (
                <div key={idx} className="bg-amber-50/40 rounded-2xl p-6 sm:p-8 border border-amber-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase font-serif font-bold text-red-900 tracking-wider bg-red-100 px-2 py-0.5 rounded">
                      {collabGroup.sanskrit}
                    </span>
                  </div>
                  <h3 className="font-['Cinzel_Decorative'] text-xl font-bold text-stone-900 mb-2">
                    {collabGroup.category}
                  </h3>
                  <p className="font-['Marcellus'] text-stone-600 text-sm mb-6">
                    {collabGroup.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {collabGroup.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="bg-white rounded-xl p-4 border border-amber-200/80 shadow-xs">
                        <div className="flex items-center gap-2 font-['Cinzel_Decorative'] font-bold text-stone-900 text-base mb-1">
                          <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                          <span>{item.role}</span>
                        </div>
                        <p className="font-['Marcellus'] text-stone-700 text-xs sm:text-sm pl-6 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Our Mission and Vision */}
        {activeTab === 'mission-vision' && (
          <div className="space-y-8 animate-in fade-in duration-200 text-left">
            <div className="border-b border-amber-100 pb-5">
              <span className="text-xs uppercase font-serif text-amber-800 tracking-wider">Purpose & Horizon</span>
              <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl text-stone-900 font-bold mt-1">
                Our Mission & Vision
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-amber-50 to-white border-2 border-emerald-700/40 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-900">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-serif uppercase tracking-wider font-bold text-emerald-900">
                  ध्येयम् · Our Mission
                </span>
                <h3 className="font-['Cinzel_Decorative'] text-2xl font-bold text-stone-900">
                  Making Authentic Vastu Accessible
                </h3>
                <p className="font-['Marcellus'] text-stone-700 text-base">
                  To make authentic Vastu knowledge accessible through:
                </p>

                <ul className="space-y-2.5 font-['Marcellus'] text-stone-800 text-sm sm:text-base">
                  {[
                    "Systematic learning",
                    "Thoughtful research",
                    "Practical interpretation",
                    "Educational publications",
                    "Visual learning",
                    "Professional consultation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-amber-200">
                  <p className="font-['Rozha_One'] text-red-900 text-lg">
                    “Our objective is to help individuals understand not only what to do, but also why.”
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-red-50/40 to-white border-2 border-red-700/40 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-900">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-serif uppercase tracking-wider font-bold text-red-900">
                  दृष्टिकोणम् · Our Vision
                </span>
                <h3 className="font-['Cinzel_Decorative'] text-2xl font-bold text-stone-900">
                  A Respected Classical Centre
                </h3>

                <p className="font-['Marcellus'] text-stone-700 text-base leading-relaxed">
                  To develop <strong className="text-stone-900">VASTU RITAM</strong> into a trusted centre for Vastu knowledge where architects, interior designers, civil engineers, builders, researchers, educators, homeowners, students and practitioners can find reliable guidance rooted in classical wisdom and interpreted with intellectual integrity.
                </p>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <p className="font-['Marcellus'] text-stone-800 text-sm sm:text-base leading-relaxed">
                    We aspire to build an enduring institution that contributes to the preservation, study, and advancement of Vastu for generations to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Founder and Research Scholar */}
        {activeTab === 'founder' && (
          <div className="space-y-8 animate-in fade-in duration-200 text-left">
            <div className="border-b border-amber-100 pb-5">
              <span className="text-xs uppercase font-serif text-amber-800 tracking-wider">Leadership & Academic Background</span>
              <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl text-stone-900 font-bold mt-1">
                Founder and Research Scholar
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Profile Card */}
              <div className="lg:col-span-4 bg-gradient-to-b from-amber-50 to-white rounded-2xl p-6 border border-amber-200 shadow-xs text-center flex flex-col items-center">
                <div className="mb-4">
                  <VastuRitamLogo variant="emblem" size={96} />
                </div>
                <h3 className="font-['Cinzel_Decorative'] text-xl font-bold text-stone-900">
                  {FOUNDER_INFO.title}
                </h3>
                <span className="text-xs font-serif uppercase tracking-wider text-emerald-800 block mt-1 font-bold">
                  {FOUNDER_INFO.institution}
                </span>

                <div className="mt-4 pt-4 border-t border-amber-200 text-xs font-['Marcellus'] text-stone-600 space-y-1">
                  <div>Vedic Architectural Hermeneutics</div>
                  <div>Empirical Spatial Modeling</div>
                  <div>Shastric Textual Analysis</div>
                </div>
              </div>

              {/* Qualifications & Areas of Interest */}
              <div className="lg:col-span-8 space-y-6">
                {/* Academic Qualifications */}
                <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-200">
                  <h4 className="font-['Cinzel_Decorative'] text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-amber-700" />
                    <span>Academic Qualifications</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {FOUNDER_INFO.qualifications.map((qual, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-amber-200 shadow-2xs font-['Marcellus'] text-sm text-stone-800">
                        <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span className="font-semibold">{qual}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Areas of Interest */}
                <div className="bg-emerald-50/40 rounded-2xl p-6 border border-emerald-200">
                  <h4 className="font-['Cinzel_Decorative'] text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
                    <Compass className="w-5 h-5 text-emerald-700" />
                    <span>Areas of Interest</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {FOUNDER_INFO.areasOfInterest.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-lg bg-white border border-emerald-300 text-stone-800 text-xs sm:text-sm font-['Marcellus'] shadow-2xs"
                      >
                        ✦ {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Analytical Approach */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 text-stone-700 font-['Marcellus'] text-sm sm:text-base leading-relaxed">
                  {FOUNDER_INFO.bio}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 7: Our Emblem / Identity */}
        {activeTab === 'emblem' && (
          <div className="animate-in fade-in duration-200">
            <InteractiveEmblem />
          </div>
        )}

      </div>
    </div>
  );
};
