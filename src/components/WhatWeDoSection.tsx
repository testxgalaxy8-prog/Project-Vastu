import React, { useState, useEffect } from 'react';
import { ServiceType, PageType } from '../types';
import { SERVICES_DATA, DIRECTIONAL_ZONES } from '../data/vastuData';
import { Home as HomeIcon, Building2, Factory, ShoppingCart, PhoneCall, CheckCircle2, AlertTriangle, Compass, ArrowRight, Sparkles } from 'lucide-react';

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
        <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300">
          Professional Consultation & Guidance
        </span>
        <h1 className="font-['Cinzel_Decorative'] text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold">
          What We Do
        </h1>
        <p className="font-['Marcellus'] text-stone-700 text-base sm:text-lg leading-relaxed">
          Whether you are building, buying, renovating, or planning a commercial or industrial space, <strong className="text-emerald-950 font-bold">VASTU RITAM</strong> offers guidance rooted in classical principles and practical understanding.
        </p>
      </div>

      {/* Tabs with exact user specification:
          Inactive tabs -> White background with a thin green border.
          Active tab -> Soft green fill with red border.
          Every click will open explanation below.
      */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-amber-200/80 pb-6">
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
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer font-serif flex items-center gap-2 ${
                isActive
                  ? 'bg-emerald-50/95 border-2 border-red-600 text-red-950 font-bold shadow-md scale-105'
                  : 'bg-white border border-emerald-700/60 text-emerald-900 hover:bg-emerald-50/50 hover:border-emerald-800'
              }`}
            >
              <span className={isActive ? 'text-red-600' : 'text-emerald-700'}>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Service Details Display: Every click opens explanation below */}
      {currentServiceData && (
        <div className="bg-white rounded-3xl border border-amber-200/90 shadow-sm p-6 sm:p-10 animate-in fade-in duration-200 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="border-b border-amber-100 pb-4">
                <span className="text-xs uppercase font-serif text-amber-800 tracking-wider font-bold">
                  {currentServiceData.sanskrit}
                </span>
                <h2 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  {currentServiceData.title}
                </h2>
                <p className="text-sm font-['Rozha_One'] text-red-800 mt-1">
                  {currentServiceData.tagline}
                </p>
              </div>

              <p className="font-['Marcellus'] text-stone-700 text-base sm:text-lg leading-relaxed">
                {currentServiceData.intro}
              </p>

              <div>
                <h3 className="font-['Cinzel_Decorative'] text-lg font-bold text-stone-900 mb-3">
                  Key Shastric Focus Areas & Deliverables:
                </h3>
                <div className="space-y-3">
                  {currentServiceData.focusAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 font-['Marcellus'] text-sm sm:text-base text-stone-800"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-700 to-amber-700 text-white font-serif font-bold text-sm shadow-md hover:from-red-800 hover:to-amber-800 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Consultation for {currentServiceData.title}</span>
                </button>

                <button
                  onClick={() => onNavigate('gyan-kosh')}
                  className="px-5 py-3 rounded-xl border border-emerald-700 bg-white text-emerald-900 font-serif text-sm font-semibold hover:bg-emerald-50 transition-all cursor-pointer"
                >
                  Browse Related Treatises in Library
                </button>
              </div>
            </div>

            {/* Right Card: Non-Destructive Methodology */}
            <div className="lg:col-span-4 bg-gradient-to-b from-amber-50 to-white rounded-2xl p-6 border border-amber-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Our Consultation Ethos</span>
              </div>
              <h4 className="font-['Cinzel_Decorative'] text-lg text-stone-900 font-bold">
                Non-Destructive & Architectural
              </h4>
              <p className="font-['Marcellus'] text-stone-700 text-sm leading-relaxed">
                We work harmoniously within structural limitations. No irrational knocking down of beams or pillars. Instead, we optimize functional room allocation, elemental frequencies (light, ventilation, color resonances), and mental clarity.
              </p>
              <div className="p-3.5 bg-white rounded-xl border border-amber-200 text-xs font-['Marcellus'] text-stone-600 space-y-1.5">
                <div className="flex items-center gap-2 text-stone-900 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  <span>CAD Floor Plan Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-stone-900 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Solar & Magnetic Orientation</span>
                </div>
                <div className="flex items-center gap-2 text-stone-900 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  <span>Clear, Rational Explanations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive 9-Zone Spatial Matrix Explorer */}
      <div className="bg-amber-50/50 rounded-3xl border border-amber-200 p-6 sm:p-10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-widest text-emerald-800 uppercase bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            Interactive Directional Matrix
          </span>
          <h3 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl text-stone-900 font-bold">
            The 9 Spatial Zones & Elemental Dynamics
          </h3>
          <p className="font-['Marcellus'] text-stone-600 text-sm sm:text-base">
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
                className={`p-3 sm:p-4 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                  isSelected
                    ? 'bg-emerald-50 border-2 border-red-600 shadow-md scale-105 text-red-950 font-bold'
                    : 'bg-white border-emerald-700/40 text-emerald-950 hover:bg-emerald-50/30'
                }`}
              >
                <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500">
                  {zone.direction}
                </span>
                <span className="font-['Cinzel_Decorative'] text-sm sm:text-base font-bold mt-1">
                  {zone.code}
                </span>
                <span className="text-[11px] font-serif text-amber-900 line-clamp-1">
                  {zone.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Zone Detailed Explanation Card */}
        {activeZone && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-amber-200 shadow-sm max-w-3xl mx-auto text-left space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-100 pb-3">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded">
                  {activeZone.direction} Quadrant ({activeZone.code})
                </span>
                <h4 className="font-['Cinzel_Decorative'] text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                  {activeZone.name}
                </h4>
              </div>
              <div className="text-right">
                <span className="text-xs text-emerald-800 font-serif font-semibold block">
                  Element: {activeZone.element}
                </span>
                <span className="text-xs text-stone-500 font-serif block">
                  Ruling Divinity: {activeZone.deity}
                </span>
              </div>
            </div>

            <div className="space-y-3 font-['Marcellus'] text-sm sm:text-base">
              <div>
                <strong className="text-stone-900">Energy & Spatial Attributes:</strong>
                <p className="text-stone-700 mt-0.5">{activeZone.attributes}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <strong className="text-emerald-950 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Recommended Spatial Allocations:
                </strong>
                <p className="text-emerald-900 mt-1 text-sm">{activeZone.recommendation}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-red-50/70 border border-red-200">
                <strong className="text-red-950 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  Classical Cautions to Avoid:
                </strong>
                <p className="text-red-900 mt-1 text-sm">{activeZone.caution}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Need Guidance? Consult Tab CTA Banner */}
      <div className="bg-gradient-to-r from-red-900 via-amber-900 to-stone-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2">
          <span className="text-xs uppercase font-serif tracking-widest text-amber-300 font-bold">
            Need Guidance?
          </span>
          <h3 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl font-bold text-amber-100">
            Consult VASTU RITAM Today
          </h3>
          <p className="font-['Marcellus'] text-amber-200/90 text-sm sm:text-base max-w-xl">
            Have a residential blueprint, office space, or prospective plot you wish to evaluate? Speak directly with our research scholar and consultation team.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="whitespace-nowrap px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-serif font-bold text-sm sm:text-base shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center gap-2"
        >
          <PhoneCall className="w-5 h-5 text-red-900" />
          <span>Consult VASTU RITAM</span>
        </button>
      </div>
    </div>
  );
};
