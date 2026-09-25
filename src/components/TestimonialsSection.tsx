import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/vastuData';
import { Testimonial } from '../types';
import { Quote, Star, Sparkles, Building2, User, HardHat, Compass, Home as HomeIcon } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Architect', 'Engineer', 'Interior Designer', 'Homeowner', 'Commercial'];

  const filteredTestimonials = selectedCategory === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300">
          Collaborator & Client Reflections
        </span>
        <h1 className="font-['Cinzel_Decorative'] text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold">
          Testimonials & Experiences
        </h1>
        <p className="font-['Marcellus'] text-stone-700 text-base sm:text-lg leading-relaxed">
          Hear from practicing architects, civil engineers, interior designers, and property owners who have experienced the clarity, calm, and scientific integrity of <strong className="text-emerald-950 font-bold">VASTU RITAM</strong>.
        </p>
      </div>

      {/* Filter Tabs using the exact prompt tab styling:
          Inactive tabs -> White background with a thin green border.
          Active tab -> Soft green fill with red border.
          Every click will open explanation below.
      */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-amber-200/80 pb-6">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm transition-all cursor-pointer font-serif flex items-center gap-2 ${
                isActive
                  ? 'bg-emerald-50/95 border-2 border-red-600 text-red-950 font-bold shadow-md scale-105'
                  : 'bg-white border border-emerald-700/60 text-emerald-900 hover:bg-emerald-50/50 hover:border-emerald-800'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-red-600' : 'bg-emerald-700'}`} />
              <span>{cat === 'All' ? 'All Collaborators' : cat}</span>
            </button>
          );
        })}
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {filteredTestimonials.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl bg-white border border-amber-200 p-6 sm:p-7 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-amber-500 to-red-600" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Quote className="w-8 h-8 text-amber-500/40" />
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <p className="font-['Marcellus'] text-stone-700 text-sm sm:text-base leading-relaxed italic">
                “{item.quote}”
              </p>
            </div>

            <div className="pt-6 border-t border-amber-100 mt-6 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-700 to-amber-700 text-white font-serif font-bold text-sm flex items-center justify-center shadow-xs shrink-0">
                {item.avatarInitials}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-['Cinzel_Decorative'] font-bold text-stone-900 text-sm truncate">
                  {item.name}
                </h4>
                <p className="text-xs text-stone-500 font-serif truncate">
                  {item.designation} {item.organization ? `· ${item.organization}` : ''}
                </p>
                <p className="text-[11px] text-emerald-800 font-serif">
                  {item.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Professional Collaboration Notice */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto space-y-3">
        <h3 className="font-['Cinzel_Decorative'] text-xl font-bold text-stone-900">
          Are you an Architect, Civil Engineer, or Builder?
        </h3>
        <p className="font-['Marcellus'] text-stone-700 text-sm sm:text-base">
          VASTU RITAM welcomes continuous peer collaboration. We review structural designs, apartment master plans, and site layouts on CAD/BIM without imposing superstition or architectural compromise.
        </p>
      </div>
    </div>
  );
};
