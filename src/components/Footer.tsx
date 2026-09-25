import React from 'react';
import { PageType, DiscoverTab } from '../types';
import { Sparkles, Phone, Mail, Youtube, Twitter, Heart } from 'lucide-react';
import { VastuRitamLogo } from './VastuRitamLogo';

interface FooterProps {
  onNavigate: (page: PageType, subTab?: string) => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onReplayIntro }) => {
  return (
    <footer className="bg-gradient-to-b from-[#211611] to-[#140c09] text-amber-100 border-t-2 border-amber-600/50 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Gold Border Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-amber-400 to-red-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Col 1: Emblem & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <VastuRitamLogo variant="emblem" size={68} />
              <div>
                <span className="font-['Cinzel',serif] font-black text-2xl text-amber-200 block tracking-wider">
                  VASTU RITAM
                </span>
                <span className="text-xs font-['Yatra_One'] text-amber-400">
                  वास्तु रितम् · ॥ संतुलनात् समृद्धिः सुखम् ॥
                </span>
              </div>
            </div>

            <p className="font-['Marcellus'] text-xs sm:text-sm text-amber-200/80 leading-relaxed max-w-md">
              An institution dedicated to the study, practice, dissemination and consultation of authentic Vastu knowledge. Rooted in classical wisdom and guided by thoughtful research.
            </p>

            <div className="pt-2">
              <span className="text-xs font-serif uppercase tracking-widest text-amber-400/90 font-bold block mb-1">
                Our Foundational Ideal
              </span>
              <p className="font-['Rozha_One'] text-base text-amber-100 italic">
                “We do not begin with remedies. We begin with understanding.”
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 font-['Marcellus'] text-xs sm:text-sm">
            <h4 className="font-['Cinzel_Decorative'] text-sm uppercase tracking-wider text-amber-300 font-bold border-b border-amber-800/60 pb-2">
              Sections
            </h4>
            <ul className="space-y-2 text-amber-200/80">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-100 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('discover', 'meaning')}
                  className="hover:text-amber-100 transition-colors cursor-pointer"
                >
                  The Meaning (Vastu & Ritam)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('discover', 'philosophy')}
                  className="hover:text-amber-100 transition-colors cursor-pointer"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('discover', 'emblem')}
                  className="hover:text-amber-100 transition-colors cursor-pointer"
                >
                  Our Emblem · Our Identity
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('what-we-do')}
                  className="hover:text-amber-100 transition-colors cursor-pointer"
                >
                  What We Do (Services)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gyan-kosh')}
                  className="hover:text-amber-100 transition-colors cursor-pointer"
                >
                  Vastu Gyan-Kosh (Library)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-amber-100 transition-colors cursor-pointer"
                >
                  Testimonials
                </button>
              </li>
              {onReplayIntro && (
                <li>
                  <button
                    onClick={onReplayIntro}
                    className="text-amber-400 hover:text-amber-200 transition-colors cursor-pointer flex items-center gap-1 font-serif"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Replay Divine Intro</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Contact & Knowledge Channels (4 cols) */}
          <div className="lg:col-span-4 space-y-3 font-['Marcellus'] text-xs sm:text-sm">
            <h4 className="font-['Cinzel_Decorative'] text-sm uppercase tracking-wider text-amber-300 font-bold border-b border-amber-800/60 pb-2">
              Contact & Channels
            </h4>

            <div className="space-y-2 text-amber-200/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919820018272" className="hover:text-white transition-colors">
                  +91 98200 18272 / +91 98200 45678
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:contact@vasturitam.com" className="hover:text-white transition-colors">
                  contact@vasturitam.com
                </a>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/80 text-amber-200 border border-red-800/60 hover:bg-red-900 transition-colors text-xs font-serif"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-400" />
                  <span>YouTube</span>
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/90 text-amber-200 border border-stone-700/60 hover:bg-stone-800 transition-colors text-xs font-serif"
                >
                  <Twitter className="w-3.5 h-3.5 text-sky-400" />
                  <span>X (Twitter)</span>
                </a>
              </div>
            </div>

            <div className="pt-3 text-[11px] text-amber-300/60 font-serif">
              Collaborations welcome from registered Architects (COA), Civil Structural Engineers, and Researchers.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-amber-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Marcellus'] text-amber-300/60 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} VASTU RITAM. All Rights Reserved. Toward Harmony through Authentic Vastu Knowledge.
          </div>
          <div className="flex items-center gap-3">
            <span className="font-['Yatra_One'] text-amber-400 text-xs">॥ शान्तिः शान्तिः शान्तिः ॥</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
