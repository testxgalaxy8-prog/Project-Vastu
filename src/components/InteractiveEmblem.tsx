import React, { useState } from 'react';
import { EMBLEM_EXPLANATIONS } from '../data/vastuData';
import { Sparkles, Info, CheckCircle2, Compass, Layers } from 'lucide-react';

interface InteractiveEmblemProps {
  initialActiveId?: string;
}

export const InteractiveEmblem: React.FC<InteractiveEmblemProps> = ({ initialActiveId = 'lotus' }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(initialActiveId);

  const activeItem = EMBLEM_EXPLANATIONS.find(item => item.id === activeSectionId) || EMBLEM_EXPLANATIONS[0];

  return (
    <div className="section-indigo-deep border-2 border-[#D4A72C] rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl golden-aura-strong text-[#FFF7ED]">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="text-xs font-bold tracking-widest text-[#2D1B14] uppercase bg-[#E88A16] px-4 py-1.5 rounded-full border border-[#D4A72C] shadow-md">
          Sacred Symbolism & Epistemology
        </span>
        <h3 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl md:text-4xl text-[#FFF7ED] mt-3 font-black tracking-wide drop-shadow-md">
          Our Emblem · Our Identity
        </h3>
        <p className="font-['Marcellus'] text-sm sm:text-base text-[#E8D3A8] mt-2">
          Every element of the official <strong className="font-bold text-[#D4A72C]">VASTU RITAM</strong> trademark emblem has been chosen with sacred purpose. Click on any section of the emblem below or use the tabs to reveal its timeless philosophical meaning.
        </p>
      </div>

      {/* Heritage Interactive Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
        {EMBLEM_EXPLANATIONS.map((section) => {
          const isActive = section.id === activeSectionId;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSectionId(section.id)}
              className={`px-4 py-2 text-xs sm:text-sm rounded-xl transition-all cursor-pointer font-serif flex items-center gap-2 shadow-md ${
                isActive
                  ? 'bg-[#E88A16] text-[#2D1B14] border-2 border-[#6B1F1F] font-black scale-105 shadow-[0_0_15px_rgba(232,138,22,0.4)]'
                  : 'bg-[#2D1B14] border-2 border-[#D4A72C]/60 text-[#E8D3A8] hover:bg-[#6B1F1F] hover:text-[#FFF7ED]'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#6B1F1F]' : 'bg-[#D4A72C]'}`} />
              <span>{section.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Real Trademark Logo with Clickable Hotspots + Dynamic Explanation Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: The Authentic Trademark Logo with Interactive Hotspot Overlays */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-square rounded-3xl bg-[#2D1B14] p-4 sm:p-5 border-2 border-[#D4A72C] shadow-2xl select-none group">
            
            {/* The Actual Official Registered Trademark Logo Image */}
            <div className="w-full h-full flex items-center justify-center p-2 rounded-2xl bg-white/95 border border-[#D4A72C]/50">
              <img
                src="/vastu-ritam-logo.jpg"
                alt="Official Registered Trademark Emblem of VASTU RITAM"
                className="w-full h-full object-contain filter contrast-105"
              />
            </div>

            {/* SVG Interactive Hotspot Overlay Map */}
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-4 sm:inset-5 w-[calc(100%-2rem)] sm:w-[calc(100%-2.5rem)] h-[calc(100%-2rem)] sm:h-[calc(100%-2.5rem)] pointer-events-auto"
            >
              {/* Hotspot 1: The Blooming Sacred Lotus (Padma) */}
              <g
                onClick={() => setActiveSectionId('lotus')}
                className="cursor-pointer"
              >
                <circle
                  cx="200"
                  cy="75"
                  r="52"
                  fill={activeSectionId === 'lotus' ? 'rgba(232, 138, 22, 0.3)' : 'transparent'}
                  stroke={activeSectionId === 'lotus' ? '#D4A72C' : 'rgba(212, 167, 44, 0.4)'}
                  strokeWidth={activeSectionId === 'lotus' ? '3' : '1.5'}
                  strokeDasharray={activeSectionId === 'lotus' ? 'none' : '4,3'}
                  className="hover:stroke-[#E88A16] hover:fill-[#E88A16]/20 transition-all"
                />
              </g>

              {/* Hotspot 2: The Unfinished Stem Brushstroke Circle */}
              <g
                onClick={() => setActiveSectionId('stem')}
                className="cursor-pointer"
              >
                <circle
                  cx="200"
                  cy="150"
                  r="125"
                  fill="none"
                  stroke={activeSectionId === 'stem' ? '#D4A72C' : 'transparent'}
                  strokeWidth={activeSectionId === 'stem' ? '6' : '0'}
                  className="hover:stroke-[#E88A16] hover:stroke-[3px] transition-all"
                  strokeDasharray="8,6"
                />
              </g>

              {/* Hotspot 3: The 3x3 Mandala Grid */}
              <g
                onClick={() => setActiveSectionId('mandala')}
                className="cursor-pointer"
              >
                <rect
                  x="115"
                  y="65"
                  width="170"
                  height="170"
                  fill={activeSectionId === 'mandala' ? 'rgba(15, 92, 85, 0.3)' : 'transparent'}
                  stroke={activeSectionId === 'mandala' ? '#0F5C55' : 'rgba(15, 92, 85, 0.4)'}
                  strokeWidth={activeSectionId === 'mandala' ? '3' : '1'}
                  strokeDasharray={activeSectionId === 'mandala' ? 'none' : '5,3'}
                  className="hover:stroke-[#167A68] hover:fill-[#0F5C55]/20 transition-all"
                />
              </g>

              {/* Hotspot 4: The Seated Vastu Purusha in Center */}
              <g
                onClick={() => setActiveSectionId('purusha')}
                className="cursor-pointer"
              >
                <circle
                  cx="200"
                  cy="155"
                  r="62"
                  fill={activeSectionId === 'purusha' ? 'rgba(185, 78, 44, 0.35)' : 'transparent'}
                  stroke={activeSectionId === 'purusha' ? '#B94E2C' : 'rgba(185, 78, 44, 0.4)'}
                  strokeWidth={activeSectionId === 'purusha' ? '3.5' : '1'}
                  strokeDasharray={activeSectionId === 'purusha' ? 'none' : '4,3'}
                  className="hover:stroke-[#B94E2C] hover:fill-[#B94E2C]/20 transition-all"
                />
              </g>

              {/* Hotspot 5: The Colours (Red & Green circle indicators) */}
              <g
                onClick={() => setActiveSectionId('colours')}
                className="cursor-pointer"
              >
                {/* Left Green Arc Marker */}
                <circle
                  cx="75"
                  cy="150"
                  r="18"
                  fill={activeSectionId === 'colours' ? 'rgba(22, 122, 104, 0.4)' : 'transparent'}
                  stroke={activeSectionId === 'colours' ? '#167A68' : 'rgba(22, 122, 104, 0.4)'}
                  strokeWidth={activeSectionId === 'colours' ? '3' : '1.5'}
                />
                {/* Right Red Arc Marker */}
                <circle
                  cx="325"
                  cy="175"
                  r="18"
                  fill={activeSectionId === 'colours' ? 'rgba(185, 78, 44, 0.4)' : 'transparent'}
                  stroke={activeSectionId === 'colours' ? '#B94E2C' : 'rgba(185, 78, 44, 0.4)'}
                  strokeWidth={activeSectionId === 'colours' ? '3' : '1.5'}
                />
              </g>

              {/* Hotspot 6: The Motto & Sanskrit Typography */}
              <g
                onClick={() => setActiveSectionId('motto')}
                className="cursor-pointer"
              >
                <rect
                  x="40"
                  y="290"
                  width="320"
                  height="100"
                  rx="10"
                  fill={activeSectionId === 'motto' ? 'rgba(107, 31, 31, 0.3)' : 'transparent'}
                  stroke={activeSectionId === 'motto' ? '#6B1F1F' : 'rgba(107, 31, 31, 0.4)'}
                  strokeWidth={activeSectionId === 'motto' ? '2.5' : '1'}
                  strokeDasharray={activeSectionId === 'motto' ? 'none' : '4,3'}
                  className="hover:stroke-[#6B1F1F] hover:fill-[#6B1F1F]/20 transition-all"
                />
              </g>
            </svg>

            {/* Interactive hint badge in Saffron & Gold */}
            <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-[#2D1B14] text-[#D4A72C] text-[11px] font-serif px-4 py-1 rounded-full shadow-xl flex items-center gap-1.5 whitespace-nowrap border border-[#D4A72C]">
              <Sparkles className="w-3 h-3 text-[#E88A16]" />
              <span>Click any element on the official logo to inspect</span>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Explanation Card in Warm Sand with Dark Brown & Maroon Typography */}
        <div className="lg:col-span-6">
          <div className="bg-[#E8D3A8] text-[#2D1B14] rounded-3xl p-6 sm:p-8 border-2 border-[#D4A72C] shadow-2xl relative overflow-hidden transition-all text-left">
            {/* Sacred Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#6B1F1F] via-[#D4A72C] to-[#0F5C55]" />

            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#FFF7ED] bg-[#6B1F1F] px-3.5 py-1 rounded-full border border-[#D4A72C]">
                {activeItem.badge}
              </span>
              <span className="text-xs text-[#6B1F1F] font-serif italic font-bold">
                {activeItem.subheading}
              </span>
            </div>

            <h4 className="font-['Cinzel_Decorative'] text-xl sm:text-2xl text-[#2D1B14] font-black mb-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#6B1F1F] inline-block" />
              {activeItem.title}
            </h4>

            <div className="font-['Marcellus'] text-[#2D1B14] leading-relaxed text-sm sm:text-base space-y-3 whitespace-pre-line border-t-2 border-[#D4A72C]/40 pt-4 font-normal">
              {activeItem.explanation}
            </div>

            {/* Quick Interactive Selector Chips */}
            <div className="mt-6 pt-4 border-t-2 border-[#D4A72C]/40">
              <span className="text-xs text-[#4A2616] block mb-2 font-serif font-bold">Quickly explore other emblem dimensions:</span>
              <div className="flex flex-wrap gap-2">
                {EMBLEM_EXPLANATIONS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSectionId(item.id)}
                    className={`text-xs px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                      item.id === activeSectionId
                        ? 'bg-[#6B1F1F] text-[#FFF7ED] border-[#D4A72C] font-black shadow-md'
                        : 'bg-[#2D1B14] text-[#E8D3A8] border-[#D4A72C]/60 hover:bg-[#B94E2C] hover:text-[#FFF7ED]'
                    }`}
                  >
                    {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
