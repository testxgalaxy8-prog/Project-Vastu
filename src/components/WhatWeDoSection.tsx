import React, { useState, useEffect } from 'react';
import { ServiceType, PageType } from '../types';
import { SERVICES_DATA, DIRECTIONAL_ZONES } from '../data/vastuData';
import { Home as HomeIcon, Building2, Factory, ShoppingCart, PhoneCall, CheckCircle2, AlertTriangle, Compass, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface WhatWeDoSectionProps {
  initialService?: ServiceType;
  onNavigate: (page: PageType, subTab?: string) => void;
}

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({
  initialService = 'residential',
  onNavigate,
}) => {
  const [activeService, setActiveService] = useState<ServiceType>(initialService);
  const [selectedDirection, setSelectedDirection] = useState<string>('NE');

  useEffect(() => {
    if (initialService) {
      setActiveService(initialService);
    }
  }, [initialService]);

  const serviceTabs: { id: ServiceType; label: string; icon: React.ReactNode }[] = [
    { id: 'residential', label: 'Residential Vastu', icon: <HomeIcon className="w-4 h-4" /> },
    { id: 'commercial', label: 'Commercial Vastu', icon: <Building2 className="w-4 h-4" /> },
    { id: 'industrial', label: 'Industrial Vastu', icon: <Factory className="w-4 h-4" /> },
    { id: 'before-you-buy', label: 'Vastu Before You Buy', icon: <ShoppingCart className="w-4 h-4" /> },
    { id: 'consultation', label: 'Consult VASTU RITAM', icon: <PhoneCall className="w-4 h-4" /> },
  ];

  const currentServiceData = SERVICES_DATA.find((s) => s.id === activeService);
  const activeZone = DIRECTIONAL_ZONES.find((z) => z.code === selectedDirection) || DIRECTIONAL_ZONES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-serif uppercase tracking-widest text-[#D4A72C] font-bold">
          <Sparkles className="w-3.5 h-3.5 text-[#E88A16]" />
          <span>Professional Consultation & Classical Guidance</span>
          <span className="text-[#D4A72C]/60">·</span>
          <span className="text-[#E8D3A8]">वास्तु परामर्शः</span>
        </div>
        <h1 className="font-['Cinzel_Decorative'] text-3xl sm:text-4xl md:text-5xl text-[#FFF7ED] font-black drop-shadow-md">
          What We Do
        </h1>
        <p className="font-['Marcellus'] text-[#E8D3A8] text-base sm:text-lg leading-relaxed">
          Whether you are building, buying, renovating, or planning a commercial or industrial space, <strong className="text-[#FFF7ED] font-bold">VASTU RITAM</strong> offers guidance rooted in classical principles and practical architectural understanding.
        </p>
      </div>

      {/* Tabs with Rich Indian Heritage Aesthetic:
          Inactive tabs -> Deep Dark Brown with Antique Gold border and warm sand text.
          Active tab -> Saffron fill with Deep Maroon border and dark brown text.
      */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b-2 border-[#D4A72C]/40 pb-6">
        {serviceTabs.map((tab) => {
          const isActive = activeService === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                if (tab.id === 'consultation') {
                  onNavigate('contact');
                } else {
                  setActiveService(tab.id);
                }
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer font-serif flex items-center gap-2 shadow-md ${
                isActive
                  ? 'bg-[#E88A16] text-[#2D1B14] border-2 border-[#6B1F1F] font-black scale-105 shadow-[0_0_15px_rgba(232,138,22,0.4)]'
                  : 'bg-[#2D1B14] border-2 border-[#D4A72C]/70 text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED]'
              }`}
            >
              <span className={isActive ? 'text-[#6B1F1F]' : 'text-[#D4A72C]'}>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Service Details Display: Deep Teal / Peacock Green Rich Heritage Panel */}
      {currentServiceData && (
        <div className="section-teal-heritage rounded-3xl border-2 border-[#D4A72C] shadow-2xl p-6 sm:p-10 md:p-12 animate-in fade-in duration-200 text-left relative overflow-hidden bg-vastu-grid text-[#FFF7ED]">
          {/* Subtle Manuscript Thread Holes */}
          <div className="absolute top-6 left-6 w-3.5 h-3.5 rounded-full bg-[#1A0F0A] border-2 border-[#D4A72C] shadow-inner hidden md:block" />
          <div className="absolute top-6 right-6 w-3.5 h-3.5 rounded-full bg-[#1A0F0A] border-2 border-[#D4A72C] shadow-inner hidden md:block" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="border-b-2 border-[#D4A72C]/40 pb-4">
                <span className="text-xs uppercase font-serif text-[#D4A72C] tracking-wider font-bold">
                  {currentServiceData.sanskrit}
                </span>
                <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl font-black text-[#FFF7ED] mt-1">
                  {currentServiceData.title}
                </h2>
                <p className="text-sm sm:text-base font-['Rozha_One'] text-[#E88A16] mt-1">
                  {currentServiceData.tagline}
                </p>
              </div>

              <p className="font-['Marcellus'] text-[#E8D3A8] text-base sm:text-lg leading-relaxed">
                {currentServiceData.intro}
              </p>

              <div>
                <h3 className="font-['Cinzel_Decorative'] text-lg sm:text-xl font-bold text-[#FFF7ED] mb-3">
                  Key Shastric Focus Areas & Deliverables:
                </h3>
                <div className="space-y-3">
                  {currentServiceData.focusAreas.map((area, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 p-3.5 rounded-xl border-2 shadow-md font-['Marcellus'] text-sm sm:text-base transition-transform hover:scale-101 ${
                          isEven
                            ? 'bg-[#E8D3A8] text-[#2D1B14] border-[#D4A72C]'
                            : 'bg-[#2D1B14] text-[#FFF7ED] border-[#D4A72C]/70'
                        }`}
                      >
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${isEven ? 'text-[#0F5C55]' : 'text-[#E88A16]'}`} />
                        <span className={isEven ? 'font-medium' : ''}>{area}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-xl bg-[#E88A16] hover:bg-[#D97706] text-[#2D1B14] font-serif font-bold text-sm border-2 border-[#D4A72C] shadow-xl hover:shadow-[0_0_20px_rgba(232,138,22,0.5)] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#2D1B14]" />
                  <span>Request Consultation for {currentServiceData.title}</span>
                </button>

                <button
                  onClick={() => onNavigate('gyan-kosh')}
                  className="px-5 py-3.5 rounded-xl bg-[#6B1F1F] hover:bg-[#B94E2C] text-[#FFF7ED] font-serif text-sm font-bold border-2 border-[#D4A72C] shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-[#D4A72C]" />
                  <span>Browse Related Treatises in Library</span>
                </button>
              </div>
            </div>

            {/* Right Card: Non-Destructive Methodology in Warm Sandstone Panel */}
            <div className="lg:col-span-4 bg-[#E8D3A8] text-[#2D1B14] rounded-2xl p-6 border-2 border-[#D4A72C] shadow-2xl space-y-4">
              <div className="flex items-center gap-2 text-[#6B1F1F] font-bold text-xs uppercase tracking-wider font-serif">
                <Sparkles className="w-4 h-4 text-[#0F5C55]" />
                <span>Our Consultation Ethos</span>
              </div>
              <h4 className="font-['Cinzel_Decorative'] text-lg text-[#2D1B14] font-black">
                Non-Destructive & Architectural
              </h4>
              <p className="font-['Marcellus'] text-[#3A2318] text-sm leading-relaxed font-medium">
                We work harmoniously within structural limitations. No irrational knocking down of beams or pillars. Instead, we optimize functional room allocation, elemental frequencies (light, ventilation, color resonances), and mental clarity.
              </p>
              <div className="p-4 bg-[#2D1B14] rounded-xl border border-[#D4A72C] text-xs font-['Marcellus'] text-[#E8D3A8] space-y-2">
                <div className="flex items-center gap-2 text-[#FFF7ED] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#E88A16]" />
                  <span>CAD Floor Plan Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-[#FFF7ED] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#0F5C55]" />
                  <span>Solar & Magnetic Orientation</span>
                </div>
                <div className="flex items-center gap-2 text-[#FFF7ED] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#D4A72C]" />
                  <span>Clear, Rational Explanations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive 9-Zone Spatial Matrix Explorer: Rich Terracotta / Sandstone Panel */}
      <div className="section-terracotta-rich rounded-3xl border-2 border-[#D4A72C] shadow-2xl p-6 sm:p-10 space-y-8 text-[#FFF7ED] bg-mandala-pattern">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-serif uppercase tracking-widest text-[#D4A72C] font-bold">
            <Compass className="w-4 h-4 text-[#E88A16]" />
            <span>Interactive Directional Matrix</span>
            <span className="text-[#D4A72C]/60">·</span>
            <span>दिक्-साधनम्</span>
          </div>
          <h3 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl text-[#FFF7ED] font-black">
            The 9 Spatial Zones & Elemental Dynamics
          </h3>
          <p className="font-['Marcellus'] text-[#E8D3A8] text-sm sm:text-base">
            Click on any directional zone to inspect its elemental ruler, Shastric recommendations, and cautionary guidelines.
          </p>
        </div>

        {/* 3x3 Grid Compass Selector */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-xl mx-auto">
          {DIRECTIONAL_ZONES.map((zone) => {
            const isSelected = selectedDirection === zone.code;
            return (
              <button
                key={zone.code}
                onClick={() => setSelectedDirection(zone.code)}
                className={`p-3 sm:p-4 rounded-xl border-2 text-center transition-all cursor-pointer flex flex-col items-center justify-center shadow-md ${
                  isSelected
                    ? 'bg-[#E88A16] border-[#6B1F1F] text-[#2D1B14] font-black scale-105 shadow-[0_0_20px_rgba(232,138,22,0.5)]'
                    : 'bg-[#2D1B14] border-[#D4A72C]/70 text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED]'
                }`}
              >
                <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${
                  isSelected ? 'text-[#6B1F1F]' : 'text-[#D4A72C]'
                }`}>
                  {zone.direction}
                </span>
                <span className="font-['Cinzel_Decorative'] text-base sm:text-lg font-black mt-0.5">
                  {zone.code}
                </span>
                <span className={`text-[11px] font-serif line-clamp-1 ${
                  isSelected ? 'text-[#2D1B14]' : 'text-[#E8D3A8]'
                }`}>
                  {zone.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Zone Detailed Explanation Card: Warm Sandstone Panel with Strong Contrast */}
        {activeZone && (
          <div className="bg-[#E8D3A8] text-[#2D1B14] rounded-2xl p-6 sm:p-8 border-2 border-[#D4A72C] shadow-2xl max-w-3xl mx-auto text-left space-y-4 animate-in fade-in duration-150">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#D4A72C]/60 pb-3">
              <div>
                <span className="text-xs uppercase font-serif font-bold text-[#FFF7ED] bg-[#6B1F1F] px-2.5 py-0.5 rounded border border-[#D4A72C]">
                  {activeZone.direction} Quadrant ({activeZone.code})
                </span>
                <h4 className="font-['Cinzel_Decorative'] text-xl sm:text-2xl font-black text-[#2D1B14] mt-1.5">
                  {activeZone.name}
                </h4>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#0F5C55] font-serif font-bold block">
                  Element: {activeZone.element}
                </span>
                <span className="text-xs text-[#6B1F1F] font-serif font-semibold block">
                  Ruling Divinity: {activeZone.deity}
                </span>
              </div>
            </div>

            <div className="space-y-3 font-['Marcellus'] text-sm sm:text-base">
              <div>
                <strong className="text-[#2D1B14] font-bold">Energy & Spatial Attributes:</strong>
                <p className="text-[#3A2318] mt-0.5 leading-relaxed font-medium">{activeZone.attributes}</p>
              </div>

              {/* Recommended: Deep Teal Box */}
              <div className="p-4 rounded-xl bg-[#0F5C55] text-[#FFF7ED] border-2 border-[#D4A72C] shadow-md">
                <strong className="text-[#D4A72C] flex items-center gap-1.5 font-serif uppercase tracking-wider text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A72C]" />
                  Recommended Spatial Allocations:
                </strong>
                <p className="mt-1 text-sm text-[#FFF7ED] leading-relaxed">{activeZone.recommendation}</p>
              </div>

              {/* Caution: Deep Maroon Box */}
              <div className="p-4 rounded-xl bg-[#6B1F1F] text-[#FFF7ED] border-2 border-[#D4A72C] shadow-md">
                <strong className="text-[#FDE68A] flex items-center gap-1.5 font-serif uppercase tracking-wider text-xs">
                  <AlertTriangle className="w-4 h-4 text-[#FDE68A]" />
                  Classical Cautions to Avoid:
                </strong>
                <p className="mt-1 text-sm text-[#FFF7ED] leading-relaxed">{activeZone.caution}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Need Guidance? Consult Tab CTA Banner in Rich Deep Maroon & Terracotta */}
      <div className="bg-gradient-to-r from-[#6B1F1F] via-[#B94E2C] to-[#2D1B14] border-2 border-[#D4A72C] rounded-3xl p-8 sm:p-10 text-[#FFF7ED] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2">
          <span className="text-xs uppercase font-serif tracking-widest text-[#D4A72C] font-bold">
            Need Guidance? · मार्गदर्शनम्
          </span>
          <h3 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl font-black text-[#FFF7ED]">
            Consult VASTU RITAM Today
          </h3>
          <p className="font-['Marcellus'] text-[#E8D3A8] text-sm sm:text-base max-w-xl">
            Have a residential blueprint, office space, or prospective plot you wish to evaluate? Speak directly with our research scholar and consultation team.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="whitespace-nowrap px-8 py-3.5 rounded-xl bg-[#E88A16] hover:bg-[#D97706] text-[#2D1B14] font-serif font-bold text-sm sm:text-base border-2 border-[#D4A72C] shadow-xl hover:shadow-[0_0_20px_rgba(232,138,22,0.6)] transition-all cursor-pointer flex items-center gap-2"
        >
          <PhoneCall className="w-5 h-5 text-[#2D1B14]" />
          <span>Consult VASTU RITAM</span>
        </button>
      </div>
    </div>
  );
};
