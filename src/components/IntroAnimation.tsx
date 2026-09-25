import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, ArrowRight, X, Volume2, VolumeX } from 'lucide-react';
import { PageType } from '../types';
import { VastuRitamLogo } from './VastuRitamLogo';

interface IntroAnimationProps {
  onComplete: (targetPage?: PageType) => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  // Sequence progression
  useEffect(() => {
    // Step 0: Diya ignites & golden aura spreads (0ms)
    // Step 1: Palm leaf folio unrolls & sloka is inscribed (700ms)
    const timer1 = setTimeout(() => setStep(1), 700);

    // Step 2: Emblem and knowledgebase invitation emerges (1800ms)
    const timer2 = setTimeout(() => setStep(2), 1800);

    // Progress bar over 9 seconds for auto-transition
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete('home');
          return 100;
        }
        return prev + 1.25;
      });
    }, 100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-radial from-[#1e130a] via-[#120a05] to-[#080402] text-amber-100 overflow-hidden select-none">
      {/* Background Rotating Golden Mandala & Cosmic Rays */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Soft Golden Aura Field */}
        <div className="w-[500px] h-[500px] sm:w-[750px] sm:h-[750px] rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-600/15 to-red-600/10 blur-[80px] animate-aura-pulse" />

        {/* Slow Rotating Golden Sacred Mandala */}
        <div className="absolute w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] opacity-15 animate-spin-slow">
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

      {/* Skip Button Top Right */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
        <button
          onClick={() => onComplete('home')}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 border border-amber-500/40 text-amber-200 hover:text-white text-xs font-serif transition-all cursor-pointer backdrop-blur-md"
        >
          <span>Skip Intro</span>
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Central Container */}
      <div className="relative z-10 max-w-4xl w-full mx-4 sm:mx-6 flex flex-col items-center text-center">
        
        {/* Sacred Flame Diya Header */}
        <div className="mb-4 flex flex-col items-center">
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Glowing Flame */}
            <div className="absolute -top-2 w-6 h-9 bg-gradient-to-t from-amber-500 via-yellow-300 to-white rounded-full filter blur-[1px] animate-pulse" />
            <div className="absolute -top-1 w-3 h-5 bg-white rounded-full" />
            {/* Diya Base */}
            <svg viewBox="0 0 32 32" className="w-9 h-9 relative z-10 mt-3 drop-shadow-[0_0_12px_rgba(245,158,11,0.8)]">
              <path d="M6,22 C6,27 26,27 26,22 C26,20 6,20 6,22 Z" fill="#d97706" stroke="#b45309" strokeWidth="1" />
              <ellipse cx="16" cy="21.5" rx="7" ry="2" fill="#78350f" />
            </svg>
          </div>
          <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-amber-400 mt-1">
            ॥ ऋतं सत्यं परं ब्रह्म ॥
          </span>
        </div>

        {/* The Ancient Palm Leaf Folio (Tada-Patra) */}
        <div
          className={`w-full rounded-2xl p-6 sm:p-10 relative overflow-hidden transition-all duration-1000 ${
            step >= 1
              ? 'opacity-100 scale-100 golden-aura-strong'
              : 'opacity-0 scale-95'
          }`}
          style={{
            backgroundColor: '#e7d6b8',
            backgroundImage: `
              radial-gradient(ellipse at center, rgba(251, 191, 36, 0.25) 0%, rgba(180, 83, 9, 0.08) 50%, rgba(69, 26, 3, 0.25) 100%),
              repeating-linear-gradient(0deg, rgba(120, 53, 15, 0.06) 0px, rgba(120, 53, 15, 0.06) 1px, transparent 1px, transparent 4px),
              url('/palm-leaf-texture.jpg')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 0 50px rgba(245, 158, 11, 0.4), inset 0 0 30px rgba(120, 53, 15, 0.3)',
            border: '2px solid #b45309',
          }}
        >
          {/* Subtle Manuscript Thread Holes (Sutra-Randhra) representing authentic palm leaf folios */}
          <div className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#3a1d0c] border border-amber-600/70 shadow-inner hidden sm:block" />
          <div className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#3a1d0c] border border-amber-600/70 shadow-inner hidden sm:block" />

          {/* Manuscript Inscription Content */}
          <div className="max-w-2xl mx-auto space-y-4 text-stone-900">
            {/* Sanskrit Inscribed Header */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-800" />
              <span className="font-['Yatra_One'] text-xl sm:text-2xl text-red-900 tracking-wide animate-ink-glow">
                ॥ वास्तु रितम् ॥
              </span>
              <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-800" />
            </div>

            {/* Emblem with Radiant Halo */}
            <div className="relative mx-auto my-2 flex items-center justify-center">
              <VastuRitamLogo variant="emblem" size={88} className="drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
              <div className="absolute inset-0 rounded-full border border-amber-400/80 animate-ping opacity-20 pointer-events-none" />
            </div>

            {/* Title & Core Shastric Principle */}
            <h1 className="font-['Cinzel_Decorative'] text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-950 tracking-wider">
              VASTU RITAM
            </h1>

            <p className="font-['Rozha_One'] text-lg sm:text-xl text-red-950">
              “We do not begin with remedies. We begin with understanding.”
            </p>

            <p className="font-['Marcellus'] text-xs sm:text-sm md:text-base text-stone-800 leading-relaxed max-w-xl mx-auto font-medium">
              An institution dedicated to the preservation, scholarly research, and authentic application of classical Vastu Shastra. Bridging timeless textual wisdom with modern architecture.
            </p>

            {/* Two Enticing Gateways to Knowledge */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              {/* Primary Gateway: Gyan-Kosh Library */}
              <button
                onClick={() => onComplete('gyan-kosh')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-stone-900 text-amber-200 border-2 border-emerald-600 hover:border-amber-400 font-['Marcellus'] font-bold text-sm sm:text-base shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer group scale-102"
              >
                <BookOpen className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
                <span>Enter Vastu Gyan-Kosh (Library)</span>
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
              </button>

              {/* Secondary Gateway: Full Sanctuary */}
              <button
                onClick={() => onComplete('home')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/90 hover:bg-white text-stone-950 border border-stone-400 font-['Marcellus'] font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Explore VASTU RITAM</span>
                <ArrowRight className="w-4 h-4 text-red-700 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar & Auto-Enter Indicator */}
        <div className="w-64 mt-6 space-y-1.5">
          <div className="w-full bg-stone-900/80 rounded-full h-1.5 overflow-hidden border border-amber-500/30">
            <div
              className="bg-gradient-to-r from-red-600 via-amber-400 to-emerald-400 h-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-serif text-amber-300/70">
            <span>Knowledge Sanctuary</span>
            <span>Entering in {Math.max(0, Math.ceil((100 - progress) / 12))}s</span>
          </div>
        </div>

      </div>
    </div>
  );
};
