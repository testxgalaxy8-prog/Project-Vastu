import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, ArrowRight, X } from 'lucide-react';
import { PageType } from '../types';
import { VastuRitamLogo } from './VastuRitamLogo';

interface IntroAnimationProps {
  onComplete: (targetPage?: PageType) => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  // Fast, respectful sequence progression (decreased animation time as requested)
  useEffect(() => {
    // Step 0: Diya ignites & golden aura spreads (0ms)
    // Step 1: Palm leaf folio unrolls (150ms)
    const timer1 = setTimeout(() => setStep(1), 150);

    // Step 2: Sacred emblem emerges (350ms)
    const timer2 = setTimeout(() => setStep(2), 350);

    // Auto-transition completes in ~3 seconds total (fast & snappy)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete('home');
          return 100;
        }
        return prev + 3.5; // reaches 100 in ~2.8 seconds
      });
    }, 100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-radial from-[#1e1008] via-[#140a04] to-[#080402] text-amber-100 overflow-hidden select-none">
      {/* Background Rotating Golden Mandala with Traditional Kumkum & Haridra Halos */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Soft Sacred Haridra & Kumkum Aura Field */}
        <div className="w-[500px] h-[500px] sm:w-[750px] sm:h-[750px] rounded-full bg-gradient-to-r from-amber-500/25 via-red-600/15 to-emerald-700/10 blur-[80px] animate-aura-pulse" />

        {/* Slow Rotating Golden Sacred Mandala */}
        <div className="absolute w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] opacity-20 animate-spin-slow">
          <svg viewBox="0 0 400 400" className="w-full h-full text-amber-400 fill-current">
            <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8,6" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="2" />
            {[...Array(24)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 15} 200 200)`}>
                <line x1="200" y1="20" x2="200" y2="70" stroke="currentColor" strokeWidth="1" />
                <circle cx="200" cy="50" r="3" fill="currentColor" />
              </g>
            ))}
            <polygon points="200,40 338,280 62,280" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="200,360 338,120 62,120" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Immediate Skip / Enter Button Top Right */}
      <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-50 flex items-center gap-3">
        <button
          onClick={() => onComplete('home')}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-950/70 hover:bg-amber-900 border border-amber-400/60 text-amber-200 hover:text-white text-xs font-serif transition-all cursor-pointer backdrop-blur-md shadow-md"
        >
          <span>Skip to Website</span>
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Central Card */}
      <div className="relative z-10 max-w-3xl w-full mx-4 sm:mx-6 flex flex-col items-center text-center">
        
        {/* Sacred Flame Diya Header in Traditional Brass & Kumkum */}
        <div className="mb-3 flex flex-col items-center">
          <div className="relative w-12 h-11 flex items-center justify-center">
            {/* Glowing Sacred Agni Flame */}
            <div className="absolute -top-2 w-6 h-8 bg-gradient-to-t from-red-600 via-amber-400 to-yellow-100 rounded-full filter blur-[1px] animate-pulse" />
            <div className="absolute -top-1 w-2.5 h-4 bg-white rounded-full" />
            {/* Traditional Tamra/Panchaloha Diya Base */}
            <svg viewBox="0 0 32 32" className="w-9 h-9 relative z-10 mt-3 drop-shadow-[0_0_15px_rgba(245,158,11,0.9)]">
              <path d="M6,22 C6,27 26,27 26,22 C26,20 6,20 6,22 Z" fill="#b45309" stroke="#78350f" strokeWidth="1.2" />
              <ellipse cx="16" cy="21.5" rx="7" ry="2" fill="#d97706" />
            </svg>
          </div>
          <span className="text-[11px] font-['Yatra_One'] tracking-[0.2em] text-amber-400 mt-1">
            ॥ ऋतं सत्यं परं ब्रह्म ॥
          </span>
        </div>

        {/* The Ancient Manuscript Folio Card in Traditional Sandalwood (Chandan) Ivory */}
        <div
          className={`w-full rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-500 ${
            step >= 1
              ? 'opacity-100 scale-100 golden-aura-strong'
              : 'opacity-0 scale-95'
          }`}
          style={{
            backgroundColor: '#fdfbf7',
            backgroundImage: `
              radial-gradient(ellipse at center, rgba(251, 191, 36, 0.18) 0%, rgba(245, 158, 11, 0.05) 55%, transparent 100%)
            `,
            boxShadow: '0 0 50px rgba(245, 158, 11, 0.3), inset 0 0 20px rgba(217, 119, 6, 0.08)',
            border: '2px solid #d97706',
          }}
        >
          {/* Subtle Manuscript Thread Holes (Sutra-Randhra) representing authentic palm leaf folios */}
          <div className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#3a1d0c] border border-amber-600/70 shadow-inner hidden sm:block" />
          <div className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#3a1d0c] border border-amber-600/70 shadow-inner hidden sm:block" />

          {/* Manuscript Inscription Content */}
          <div className="max-w-xl mx-auto space-y-3.5 text-stone-900">
            {/* Sanskrit Inscribed Header in Sacred Kumkum Red */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-[1.5px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-red-800" />
              <span className="font-['Yatra_One'] text-xl sm:text-2xl text-red-900 tracking-wide">
                ॥ वास्तु रितम् ॥
              </span>
              <span className="h-[1.5px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-red-800" />
            </div>

            {/* Authentic Trademark Emblem with Radiant Halo */}
            <div className="relative mx-auto my-1 flex items-center justify-center">
              <VastuRitamLogo variant="emblem" size={82} className="drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
              <div className="absolute inset-0 rounded-full border border-amber-400/80 animate-ping opacity-25 pointer-events-none" />
            </div>

            {/* Title & Core Shastric Principle in Traditional Sacred Colors */}
            <h1 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl md:text-4xl font-black text-stone-950 tracking-wider">
              <span className="text-red-800">VASTU</span> <span className="text-emerald-900">RITAM</span>
            </h1>

            <p className="font-['Rozha_One'] text-base sm:text-lg text-red-900 leading-snug">
              “We do not begin with remedies. We begin with understanding.”
            </p>

            <p className="font-['Marcellus'] text-xs sm:text-sm text-stone-800 leading-relaxed max-w-lg mx-auto">
              Preserving and applying classical Vastu Shastra with authentic textual rigor, environmental physics, and transparent architectural wisdom.
            </p>

            {/* Quick Action Gateways in Traditional Colors */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* Primary Gateway: Gyan-Kosh Library in Traditional Tulsi Green */}
              <button
                onClick={() => onComplete('gyan-kosh')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 text-amber-100 border-2 border-amber-400 font-['Marcellus'] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>Enter Vastu Gyan-Kosh (Library)</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              </button>

              {/* Secondary Gateway: Enter Sanctuary in Traditional Kumkum & Gold */}
              <button
                onClick={() => onComplete('home')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-800 to-amber-800 hover:from-red-900 hover:to-amber-900 text-amber-50 border border-amber-400 font-['Marcellus'] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Enter Sanctuary Now</span>
                <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Snappy Fast Progress Bar */}
        <div className="w-56 mt-4 space-y-1">
          <div className="w-full bg-stone-900/90 rounded-full h-1.5 overflow-hidden border border-amber-500/40">
            <div
              className="bg-gradient-to-r from-red-600 via-amber-400 to-emerald-500 h-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-serif text-amber-300/80">
            <span>Entering VASTU RITAM</span>
            <span>{Math.max(1, Math.ceil((100 - progress) / 35))}s</span>
          </div>
        </div>

      </div>
    </div>
  );
};
