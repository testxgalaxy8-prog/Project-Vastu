import React from 'react';

interface VastuRitamLogoProps {
  className?: string;
  size?: number | string;
  variant?: 'emblem' | 'full' | 'horizontal';
  showText?: boolean;
}

export const VastuRitamLogo: React.FC<VastuRitamLogoProps> = ({
  className = '',
  size = 64,
  variant = 'horizontal',
  showText = true,
}) => {
  // Dimension handling
  const numSize = typeof size === 'number' ? size : parseInt(size as string, 10) || 64;

  // 1. Emblem Only Variant (Just the circular emblem cropped/fitted with pristine quality)
  if (variant === 'emblem') {
    return (
      <div
        style={{ width: numSize, height: numSize }}
        className={`relative shrink-0 select-none overflow-hidden rounded-full bg-white shadow-xs border border-amber-300/80 flex items-center justify-center ${className}`}
      >
        <img
          src="/trademark-logo.jpg"
          alt="VASTU RITAM Official Trademark Emblem"
          className="w-[128%] h-[128%] max-w-none object-cover -translate-y-[10%]"
        />
      </div>
    );
  }

  // 2. Full Trademark Lockup Variant (The entire trademark: circular emblem + 3-line official typography)
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div
          style={{ width: typeof size === 'number' ? size : 280 }}
          className="relative max-w-full aspect-square bg-white rounded-3xl p-3 shadow-md border-2 border-amber-300/80 golden-aura-glow"
        >
          <img
            src="/trademark-logo.jpg"
            alt="VASTU RITAM Official Registered Trademark Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    );
  }

  // 3. Horizontal Header / Navbar Variant
  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 select-none ${className}`}>
      {/* Crisp Circular Emblem */}
      <div
        style={{ width: numSize, height: numSize }}
        className="relative shrink-0 overflow-hidden rounded-full bg-white shadow-xs border-2 border-amber-400/90 flex items-center justify-center p-0.5"
      >
        <img
          src="/trademark-logo.jpg"
          alt="VASTU RITAM Official Emblem"
          className="w-[126%] h-[126%] max-w-none object-cover -translate-y-[10%]"
        />
      </div>

      {/* Typography Lockup perfectly reflecting the trademark */}
      {showText && (
        <div className="flex flex-col text-left justify-center min-w-0">
          {/* Line 1: VASTU RITAM + वास्तु रितम् */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-['Cinzel',serif] font-black text-lg sm:text-xl lg:text-2xl tracking-wider leading-none">
              <span className="text-red-700">VASTU</span>{' '}
              <span className="text-emerald-800">RITAM</span>
            </span>
            <span className="font-['Yatra_One',serif] text-xs sm:text-sm text-emerald-900 px-1.5 py-0.5 rounded bg-emerald-100/70 border border-emerald-300/80 leading-none">
              वास्तु रितम्
            </span>
          </div>

          {/* Line 2: Towards Harmony through Authentic Vastu Knowledge */}
          <div className="text-[10px] sm:text-[11px] font-['Marcellus',serif] text-amber-950 font-medium tracking-wide mt-1 line-clamp-1">
            Towards Harmony through Authentic Vastu Knowledge
          </div>
        </div>
      )}
    </div>
  );
};
