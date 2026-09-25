import React, { useState, useEffect } from 'react';
import { Sparkles, Wind, Volume2, VolumeX } from 'lucide-react';

interface DivineBackgroundProps {
  petalsEnabled?: boolean;
}

export const DivineBackground: React.FC<DivineBackgroundProps> = ({ petalsEnabled = true }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);

  // Synthesize peaceful ambient Vedic drone (Tanpura/Flute warm harmonics via Web Audio API)
  const toggleAmbientSound = () => {
    if (!isPlayingAudio) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 3);
        masterGain.connect(ctx.destination);

        // Warm root drone (Sa - D / 146.83 Hz)
        const osc1 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(146.83, ctx.currentTime);

        // Fifth drone (Pa - A / 220 Hz)
        const osc2 = ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(220, ctx.currentTime);

        // Octave drone (Sa high / 293.66 Hz)
        const osc3 = ctx.createOscillator();
        osc3.type = 'sine';
        osc3.frequency.setValueAtTime(293.66, ctx.currentTime);

        const subGain = ctx.createGain();
        subGain.gain.value = 0.5;

        osc1.connect(subGain);
        osc2.connect(subGain);
        osc3.connect(subGain);
        subGain.connect(masterGain);

        osc1.start();
        osc2.start();
        osc3.start();

        setAudioCtx(ctx);
        setGainNode(masterGain);
        setIsPlayingAudio(true);
      } catch (err) {
        console.error('Audio initialization error:', err);
      }
    } else {
      if (audioCtx && gainNode) {
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1);
        setTimeout(() => {
          audioCtx.close();
          setAudioCtx(null);
          setGainNode(null);
          setIsPlayingAudio(false);
        }, 1000);
      } else {
        setIsPlayingAudio(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtx) {
        audioCtx.close();
      }
    };
  }, [audioCtx]);

  // Generate deterministic floating marigold petals
  const petals = [
    { left: '4%', delay: '0s', duration: '14s', size: 18, color: '#f59e0b' },
    { left: '12%', delay: '4s', duration: '18s', size: 22, color: '#ea580c' },
    { left: '22%', delay: '2s', duration: '16s', size: 16, color: '#f59e0b' },
    { left: '35%', delay: '7s', duration: '20s', size: 20, color: '#fbbf24' },
    { left: '48%', delay: '1s', duration: '15s', size: 24, color: '#ea580c' },
    { left: '60%', delay: '5s', duration: '19s', size: 17, color: '#f59e0b' },
    { left: '72%', delay: '3s', duration: '17s', size: 21, color: '#fbbf24' },
    { left: '84%', delay: '8s', duration: '21s', size: 19, color: '#ea580c' },
    { left: '94%', delay: '2.5s', duration: '16s', size: 23, color: '#f59e0b' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Slow-Moving Vedic Mandala in Background */}
      <div className="absolute -top-40 -right-40 w-[650px] h-[650px] md:w-[850px] md:h-[850px] opacity-[0.06] select-none pointer-events-none animate-spin-slow">
        <svg viewBox="0 0 400 400" className="w-full h-full text-amber-900 fill-current">
          <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6,4" />
          <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
          {/* 16 Petals Mandala */}
          {[...Array(16)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 22.5} 200 200)`}>
              <path d="M200,40 Q215,100 200,160 Q185,100 200,40" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="200" cy="90" r="4" fill="currentColor" />
            </g>
          ))}
          {/* 8-fold Yantra Geometry */}
          <polygon points="200,60 321,270 79,270" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <polygon points="200,340 321,130 79,130" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] md:w-[750px] md:h-[750px] opacity-[0.05] select-none pointer-events-none animate-spin-slow-reverse">
        <svg viewBox="0 0 400 400" className="w-full h-full text-amber-900 fill-current">
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8,6" />
          {[...Array(12)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 200 200)`}>
              <path d="M200,50 C230,100 230,150 200,180 C170,150 170,100 200,50" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </g>
          ))}
          <rect x="130" y="130" width="140" height="140" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="130" y="130" width="140" height="140" transform="rotate(45 200 200)" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Floating Marigold Petals */}
      {petalsEnabled && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {petals.map((p, idx) => (
            <div
              key={idx}
              className="absolute top-0 opacity-0"
              style={{
                left: p.left,
                animation: `float-petal ${p.duration} linear infinite`,
                animationDelay: p.delay,
              }}
            >
              {/* Marigold Petal SVG */}
              <svg
                width={p.size}
                height={p.size * 1.3}
                viewBox="0 0 24 32"
                fill={p.color}
                className="drop-shadow-[0_2px_4px_rgba(217,119,6,0.25)]"
              >
                <path d="M12,0 C18,6 24,16 22,24 C20,30 14,32 12,32 C10,32 4,30 2,24 C0,16 6,6 12,0 Z" />
                <path d="M12,4 C14,10 16,18 12,28" stroke="#fef3c7" strokeWidth="0.8" fill="none" opacity="0.6" />
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Rhythmic Incense Smoke & Golden Diya (Bottom Right Fixed Shrine) */}
      <div className="fixed bottom-4 right-5 pointer-events-auto z-40 hidden md:flex items-center gap-3 bg-amber-50/90 backdrop-blur-md px-3.5 py-2 rounded-full border border-amber-300/80 shadow-md">
        {/* Sacred Diya with Flickering Flame & Smoke */}
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Smoke Swirl 1 */}
          <div
            className="absolute -top-3 left-3 w-3 h-8 bg-gradient-to-t from-stone-400/40 via-stone-300/20 to-transparent rounded-full filter blur-[1.5px]"
            style={{ animation: 'incense-smoke 4.5s ease-out infinite' }}
          />
          {/* Smoke Swirl 2 */}
          <div
            className="absolute -top-5 left-2 w-4 h-10 bg-gradient-to-t from-stone-400/30 via-stone-200/15 to-transparent rounded-full filter blur-[2px]"
            style={{ animation: 'incense-smoke 6s ease-out infinite', animationDelay: '2.2s' }}
          />

          {/* Diya Base */}
          <svg viewBox="0 0 32 32" className="w-7 h-7">
            {/* Brass Diya Bowl */}
            <path d="M6,22 C6,27 26,27 26,22 C26,20 6,20 6,22 Z" fill="#b45309" stroke="#78350f" strokeWidth="1" />
            <path d="M8,22 C8,25 24,25 24,22 C24,21 8,21 8,22 Z" fill="#d97706" />
            {/* Oil & Wick */}
            <ellipse cx="16" cy="21.5" rx="7" ry="2" fill="#92400e" />
            <line x1="16" y1="21.5" x2="16" y2="17" stroke="#451a03" strokeWidth="1.5" />
            {/* Glowing Flame */}
            <path
              d="M16,10 C18,14 19,16 16,19 C13,16 14,14 16,10 Z"
              fill="#f59e0b"
              className="animate-pulse"
            />
            <path
              d="M16,12 C17,15 17.5,16 16,18 C14.5,16 15,15 16,12 Z"
              fill="#fef08a"
            />
          </svg>
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[11px] font-serif font-bold text-amber-950 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping inline-block" />
            Ritam Ambience
          </span>
          <span className="text-[9px] text-amber-800 tracking-wider">Vedic Stillness</span>
        </div>

        {/* Ambient Audio Toggle */}
        <button
          onClick={toggleAmbientSound}
          title={isPlayingAudio ? "Mute Tanpura Meditation Drone" : "Play Vedic Tanpura Drone"}
          className={`p-1.5 rounded-full transition-all text-xs flex items-center justify-center ${
            isPlayingAudio 
              ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-300' 
              : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
          }`}
        >
          {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
