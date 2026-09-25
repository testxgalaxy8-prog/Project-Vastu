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
    <div className="bg-[#faf4e6] border-2 border-amber-300/80 rounded-3xl p-5 sm:p-8 md:p-10 shadow-md golden-aura-glow">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="text-xs font-semibold tracking-widest text-amber-900 uppercase bg-amber-200/70 px-3.5 py-1 rounded-full border border-amber-300">
          Sacred Symbolism & Epistemology
        </span>
        <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl md:text-4xl text-stone-950 mt-2 font-black tracking-wide">
          Our Emblem · Our Identity
        </h3>
        <p className="font-['Marcellus'] text-sm sm:text-base text-stone-700 mt-2">
          Every element of the official <strong className="font-bold text-emerald-950">VASTU RITAM</strong> trademark emblem has been chosen with sacred purpose. Click on any section of the emblem below or use the tabs to reveal its timeless philosophical meaning.
        </p>
      </div>

      {/* Tabs with exact user specification:
          Inactive tabs -> White background with a thin green border.
          Active tab -> Soft green fill with red border.
          Every click will open explanation below.
      */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
        {EMBLEM_EXPLANATIONS.map((section) => {
          const isActive = section.id === activeSectionId;
          return (
            <button
              key={section.id}
              onClick={() => setActiveSectionId(section.id)}
              className={`px-3.5 sm:px-4 py-2 text-xs sm:text-sm rounded-xl transition-all cursor-pointer font-serif flex items-center gap-2 ${
                isActive
                  ? 'bg-emerald-50/95 border-2 border-red-600 text-red-950 font-bold shadow-md scale-105'
                  : 'bg-white border border-emerald-700/60 text-emerald-900 hover:bg-emerald-50/50 hover:border-emerald-800'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-red-600' : 'bg-emerald-700'}`} />
              <span>{section.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Real Trademark Logo with Clickable Hotspots + Dynamic Explanation Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: The Authentic Trademark Logo with Interactive Hotspot Overlays */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[380px] sm:max-w-[440px] aspect-square rounded-3xl bg-white p-4 sm:p-5 border-2 border-amber-300/90 shadow-xl golden-aura-glow select-none group">
            
            {/* The Actual Official Registered Trademark Logo Image */}
            <img
              src="/trademark-logo.jpg"
              alt="VASTU RITAM Official Registered Trademark Logo"
              className="w-full h-full object-contain select-none"
            />

            {/* Precision Interactive SVG Overlay Over the Real Logo */}
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full cursor-pointer pointer-events-auto"
            >
              {/* Hotspot 1: The Blooming Lotus in North-East (top right, ~x:280, y:50) */}
              <g
                onClick={() => setActiveSectionId('lotus')}
                className="cursor-pointer"
              >
                <circle
                  cx="285"
                  cy="48"
                  r="45"
                  fill={activeSectionId === 'lotus' ? 'rgba(236, 72, 153, 0.28)' : 'transparent'}
                  stroke={activeSectionId === 'lotus' ? '#db2777' : 'rgba(219, 39, 119, 0.35)'}
                  strokeWidth={activeSectionId === 'lotus' ? '3' : '1.5'}
                  strokeDasharray={activeSectionId === 'lotus' ? 'none' : '4,3'}
                  className="hover:stroke-pink-600 hover:fill-pink-500/15 transition-all"
                />
                {activeSectionId === 'lotus' && (
                  <circle
                    cx="285"
                    cy="48"
                    r="48"
                    fill="none"
                    stroke="#f472b6"
                    strokeWidth="1.5"
                    className="animate-ping opacity-60"
                  />
                )}
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
                  stroke={activeSectionId === 'stem' ? '#b45309' : 'transparent'}
                  strokeWidth={activeSectionId === 'stem' ? '6' : '0'}
                  className="hover:stroke-amber-600/40 hover:stroke-[3px] transition-all"
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
                  fill={activeSectionId === 'mandala' ? 'rgba(16, 185, 129, 0.2)' : 'transparent'}
                  stroke={activeSectionId === 'mandala' ? '#059669' : 'rgba(16, 185, 129, 0.3)'}
                  strokeWidth={activeSectionId === 'mandala' ? '2.5' : '1'}
                  strokeDasharray={activeSectionId === 'mandala' ? 'none' : '5,3'}
                  className="hover:stroke-emerald-600 hover:fill-emerald-500/10 transition-all"
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
                  fill={activeSectionId === 'purusha' ? 'rgba(234, 88, 12, 0.24)' : 'transparent'}
                  stroke={activeSectionId === 'purusha' ? '#ea580c' : 'rgba(234, 88, 12, 0.35)'}
                  strokeWidth={activeSectionId === 'purusha' ? '3' : '1'}
                  strokeDasharray={activeSectionId === 'purusha' ? 'none' : '4,3'}
                  className="hover:stroke-orange-600 hover:fill-orange-500/15 transition-all"
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
                  fill={activeSectionId === 'colours' ? 'rgba(22, 163, 74, 0.35)' : 'transparent'}
                  stroke={activeSectionId === 'colours' ? '#16a34a' : 'rgba(22, 163, 74, 0.4)'}
                  strokeWidth={activeSectionId === 'colours' ? '3' : '1.5'}
                />
                {/* Right Red Arc Marker */}
                <circle
                  cx="325"
                  cy="175"
                  r="18"
                  fill={activeSectionId === 'colours' ? 'rgba(220, 38, 38, 0.35)' : 'transparent'}
                  stroke={activeSectionId === 'colours' ? '#dc2626' : 'rgba(220, 38, 38, 0.4)'}
                  strokeWidth={activeSectionId === 'colours' ? '3' : '1.5'}
                />
              </g>

              {/* Hotspot 6: The Motto & Sanskrit Typography (Bottom ~y:290-390) */}
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
                  fill={activeSectionId === 'motto' ? 'rgba(185, 28, 28, 0.18)' : 'transparent'}
                  stroke={activeSectionId === 'motto' ? '#b91c1c' : 'rgba(185, 28, 28, 0.3)'}
                  strokeWidth={activeSectionId === 'motto' ? '2.5' : '1'}
                  strokeDasharray={activeSectionId === 'motto' ? 'none' : '4,3'}
                  className="hover:stroke-red-700 hover:fill-red-500/10 transition-all"
                />
              </g>
            </svg>

            {/* Interactive hint badge */}
            <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-stone-900 text-amber-200 text-[11px] font-serif px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap border border-amber-500/40">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Click any element on the official logo to inspect</span>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Explanation Card (Every click opens explanation below/beside) */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-300 shadow-md relative overflow-hidden transition-all">
            {/* Sacred Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-amber-500 to-red-600" />

            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs uppercase tracking-wider font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                {activeItem.badge}
              </span>
              <span className="text-xs text-stone-500 font-serif italic">
                {activeItem.subheading}
              </span>
            </div>

            <h4 className="font-['Cinzel',serif] text-xl sm:text-2xl text-stone-950 font-bold mb-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-600 inline-block" />
              {activeItem.title}
            </h4>

            <div className="font-['Marcellus'] text-stone-800 leading-relaxed text-sm sm:text-base space-y-3 whitespace-pre-line border-t border-amber-100 pt-4">
              {activeItem.explanation}
            </div>

            {/* Quick Interactive Selector Chips */}
            <div className="mt-6 pt-4 border-t border-stone-100">
              <span className="text-xs text-stone-500 block mb-2 font-serif">Quickly explore other emblem dimensions:</span>
              <div className="flex flex-wrap gap-1.5">
                {EMBLEM_EXPLANATIONS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSectionId(item.id)}
                    className={`text-xs px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                      item.id === activeSectionId
                        ? 'bg-red-50 text-red-950 border-red-500 font-bold'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
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
