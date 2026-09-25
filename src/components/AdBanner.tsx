import React, { useEffect, useState } from 'react';
import { Advertisement, AdPlacement } from '../types';
import { adService } from '../services/adService';
import { ExternalLink, Sparkles, Building2 } from 'lucide-react';

interface AdBannerProps {
  placement: AdPlacement;
  customAd?: Advertisement;
  className?: string;
  onAdClick?: (ad: Advertisement) => void;
}

export const AdBanner: React.FC<AdBannerProps> = ({
  placement,
  customAd,
  className = '',
  onAdClick,
}) => {
  const [ad, setAd] = useState<Advertisement | null>(customAd || null);

  useEffect(() => {
    if (customAd) {
      setAd(customAd);
      return;
    }

    const loadAd = () => {
      const available = adService.getByPlacement(placement);
      if (available.length > 0) {
        // Pick one (randomized or first)
        const chosen = available[Math.floor(Math.random() * available.length)];
        setAd(chosen);
        adService.recordImpression(chosen.id);
      } else {
        setAd(null);
      }
    };

    loadAd();

    // Listen for updates from Admin panel
    const handleUpdate = () => loadAd();
    window.addEventListener('vastu_ritam_ads_updated', handleUpdate);
    return () => {
      window.removeEventListener('vastu_ritam_ads_updated', handleUpdate);
    };
  }, [placement, customAd]);

  if (!ad) {
    return null;
  }

  const handleClick = (e: React.MouseEvent) => {
    adService.recordClick(ad.id);
    if (onAdClick) {
      onAdClick(ad);
    }
  };

  // 1. In-Article Reading Flow Placement (Wide, elegant palm-leaf framed card)
  if (placement === 'article-inline') {
    return (
      <aside
        className={`my-8 p-5 sm:p-6 rounded-2xl bg-[#fbf5e8] border-2 border-amber-300 shadow-md golden-aura-glow select-none relative overflow-hidden transition-all hover:border-amber-500 ${className}`}
        aria-label="Sponsored Content"
      >
        {/* Subtle decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/15 via-red-500/5 to-transparent pointer-events-none rounded-bl-3xl" />

        <div className="flex items-center justify-between gap-2 border-b border-amber-200/80 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-serif tracking-widest font-bold px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-950 border border-amber-400/70">
              {ad.badge || 'Sponsored Partner'}
            </span>
            <span className="text-xs text-stone-500 font-serif">·</span>
            <span className="text-xs font-serif text-stone-700 font-bold">{ad.clientName}</span>
          </div>

          <span className="text-[10px] font-serif text-stone-600 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Patron Showcase</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {ad.imageUrl && (
            <div className="w-full sm:w-44 h-32 shrink-0 rounded-xl overflow-hidden bg-stone-100 border border-amber-300 shadow-xs relative">
              <img
                src={ad.imageUrl}
                alt={ad.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  // Fallback if broken image URL
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          )}

          <div className="flex-1 space-y-2 min-w-0">
            <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-stone-950 leading-snug">
              {ad.title}
            </h4>
            <p className="font-['Marcellus'] text-xs sm:text-sm text-stone-700 leading-relaxed line-clamp-2">
              {ad.tagline || ad.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={ad.targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-red-800 to-amber-800 hover:from-red-900 hover:to-amber-900 text-amber-50 font-serif font-bold text-xs shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <span>{ad.ctaText || 'Learn More'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-[11px] font-serif text-stone-500 italic">
                Verified client of VASTU RITAM Network
              </span>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  // 2. Sidebar Placement (Compact vertical card)
  if (placement === 'article-sidebar') {
    return (
      <div
        className={`p-4 rounded-2xl bg-[#faf3e3] border border-amber-300 shadow-sm relative overflow-hidden text-left ${className}`}
      >
        <div className="flex items-center justify-between text-[10px] uppercase font-serif tracking-wider text-amber-900 mb-2">
          <span className="bg-amber-200/70 px-2 py-0.5 rounded font-bold">{ad.badge || 'Sponsored'}</span>
          <span className="text-stone-400">Ad</span>
        </div>

        {ad.imageUrl && (
          <div className="w-full h-32 rounded-lg overflow-hidden bg-stone-100 border border-amber-200 mb-3">
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="text-[11px] font-serif font-bold text-stone-500 mb-0.5">
          {ad.clientName}
        </div>
        <h5 className="font-['Cinzel',serif] text-sm font-bold text-stone-900 leading-snug mb-1">
          {ad.title}
        </h5>
        <p className="font-['Marcellus'] text-xs text-stone-700 leading-relaxed mb-3 line-clamp-3">
          {ad.tagline}
        </p>

        <a
          href={ad.targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="w-full py-2 px-3 rounded-lg bg-emerald-900 hover:bg-emerald-950 text-amber-100 font-serif font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <span>{ad.ctaText || 'Visit Client'}</span>
          <ExternalLink className="w-3 h-3 text-amber-300" />
        </a>
      </div>
    );
  }

  // 3. Top Banner (Wide strip banner at top of library or section)
  if (placement === 'library-top') {
    return (
      <div
        className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#faf3e3] via-[#fdfbf6] to-[#faf3e3] border border-amber-300/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-left ${className}`}
      >
        <div className="flex items-center gap-3.5 min-w-0">
          {ad.imageUrl && (
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-amber-300 bg-white">
              <img
                src={ad.imageUrl}
                alt={ad.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="min-w-0 space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-serif font-bold text-amber-900 uppercase bg-amber-200/80 px-2 py-0.5 rounded">
                {ad.badge || 'Sponsored Partner'}
              </span>
              <span className="text-xs font-serif text-stone-600 font-semibold">{ad.clientName}</span>
            </div>
            <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-stone-950 truncate">
              {ad.title}
            </h4>
            <p className="font-['Marcellus'] text-xs text-stone-700 truncate max-w-xl">
              {ad.tagline}
            </p>
          </div>
        </div>

        <a
          href={ad.targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-900 hover:from-emerald-900 hover:to-emerald-950 text-amber-100 font-serif font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 shrink-0"
        >
          <span>{ad.ctaText || 'Learn More'}</span>
          <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
        </a>
      </div>
    );
  }

  // 4. Footer Banner Placement
  return (
    <div
      className={`p-4 rounded-xl bg-stone-900 text-amber-100 border border-amber-500/40 shadow-md flex items-center justify-between gap-4 ${className}`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <Building2 className="w-5 h-5 text-amber-400 shrink-0" />
        <div className="min-w-0">
          <span className="text-[10px] text-amber-400 font-serif uppercase tracking-wider block">
            {ad.clientName} · {ad.badge}
          </span>
          <p className="text-xs font-serif text-amber-100 truncate">{ad.title}</p>
        </div>
      </div>
      <a
        href={ad.targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-serif font-bold shrink-0 transition-colors"
      >
        {ad.ctaText || 'Visit'}
      </a>
    </div>
  );
};

export const AdvertisementBanner = AdBanner;
export type AdvertisementBannerProps = AdBannerProps;

