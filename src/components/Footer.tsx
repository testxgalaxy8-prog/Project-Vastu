import React from 'react';
import { PageType, DiscoverTab } from '../types';
import { Sparkles, Phone, Mail, Youtube, Twitter, Heart, Sliders } from 'lucide-react';
import { VastuRitamLogo } from './VastuRitamLogo';

interface FooterProps {
  onNavigate: (page: PageType, subTab?: string) => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onReplayIntro }) => {
  return (
    <footer className="bg-gradient-to-b from-[#2D1B14] via-[#1D110D] to-[#120A07] text-[#FFF7ED] border-t-2 border-[#D4A72C] pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Gold & Vermilion Border Ribbon */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#6B1F1F] via-[#D4A72C] to-[#0F5C55]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Col 1: Emblem & Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <VastuRitamLogo variant="emblem" size={68} />
              <div>
                <span className="font-['Cinzel_Decorative'] font-black text-2xl text-[#FFF7ED] block tracking-wider">
                  VASTU RITAM
                </span>
                <span className="text-xs font-['Yatra_One'] text-[#D4A72C]">
                  वास्तु रितम् · ॥ संतुलनात् समृद्धिः सुखम् ॥
                </span>
              </div>
            </div>

            <p className="font-['Marcellus'] text-xs sm:text-sm text-[#E8D3A8] leading-relaxed max-w-md">
              An institution dedicated to the study, practice, dissemination and consultation of authentic Vastu knowledge. Rooted in classical wisdom and guided by thoughtful research.
            </p>

            <div className="pt-2">
              <span className="text-xs font-serif uppercase tracking-widest text-[#D4A72C] font-bold block mb-1">
                Our Foundational Ideal
              </span>
              <p className="font-['Rozha_One'] text-base text-[#E88A16] italic">
                “We do not begin with remedies. We begin with understanding.”
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 font-['Marcellus'] text-xs sm:text-sm">
            <h4 className="font-['Cinzel_Decorative'] text-sm uppercase tracking-wider text-[#D4A72C] font-bold border-b border-[#D4A72C]/40 pb-2">
              Sections
            </h4>
            <ul className="space-y-2 text-[#E8D3A8]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FFF7ED] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('discover', 'meaning')}
                  className="hover:text-[#FFF7ED] transition-colors cursor-pointer"
                >
                  The Meaning (Vastu & Ritam)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('discover', 'philosophy')}
                  className="hover:text-[#FFF7ED] transition-colors cursor-pointer"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('discover', 'emblem')}
                  className="hover:text-[#FFF7ED] transition-colors cursor-pointer text-[#D4A72C] font-bold"
                >
                  Our Emblem · Our Identity
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('what-we-do')}
                  className="hover:text-[#FFF7ED] transition-colors cursor-pointer"
                >
                  What We Do (Services)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gyan-kosh')}
                  className="hover:text-[#FFF7ED] transition-colors cursor-pointer"
                >
                  Vastu Gyan-Kosh (Library)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('testimonials')}
                  className="hover:text-[#FFF7ED] transition-colors cursor-pointer"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admin')}
                  className="text-[#D4A72C] hover:text-[#FFF7ED] transition-colors cursor-pointer flex items-center gap-1 font-serif"
                >
                  <Sliders className="w-3 h-3 text-[#E88A16]" />
                  <span>Advertisement Admin Console</span>
                </button>
              </li>
              {onReplayIntro && (
                <li>
                  <button
                    onClick={onReplayIntro}
                    className="text-[#E88A16] hover:text-[#D4A72C] transition-colors cursor-pointer flex items-center gap-1 font-serif"
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
            <h4 className="font-['Cinzel_Decorative'] text-sm uppercase tracking-wider text-[#D4A72C] font-bold border-b border-[#D4A72C]/40 pb-2">
              Contact & Channels
            </h4>

            <div className="space-y-2 text-[#E8D3A8]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4A72C] shrink-0" />
                <a href="tel:+919820018272" className="hover:text-white transition-colors">
                  +91 98200 18272 / +91 98200 45678
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4A72C] shrink-0" />
                <a href="mailto:contact@vasturitam.com" className="hover:text-white transition-colors">
                  contact@vasturitam.com
                </a>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#6B1F1F] text-[#FFF7ED] border border-[#D4A72C]/60 hover:bg-[#B94E2C] transition-colors text-xs font-serif"
                >
                  <Youtube className="w-3.5 h-3.5 text-[#E88A16]" />
                  <span>YouTube</span>
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#283B63] text-[#FFF7ED] border border-[#D4A72C]/60 hover:bg-[#1E2D4C] transition-colors text-xs font-serif"
                >
                  <Twitter className="w-3.5 h-3.5 text-sky-400" />
                  <span>X (Twitter)</span>
                </a>
              </div>
            </div>

            <div className="pt-3 text-[11px] text-[#E8D3A8]/70 font-serif">
              Collaborations welcome from registered Architects (COA), Civil Structural Engineers, and Researchers.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D4A72C]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Marcellus'] text-[#E8D3A8]/70 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} VASTU RITAM. All Rights Reserved. Toward Harmony through Authentic Vastu Knowledge.
          </div>
          <div className="flex items-center gap-3">
            <span className="font-['Yatra_One'] text-[#D4A72C] text-xs">॥ शान्तिः शान्तिः शान्तिः ॥</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
