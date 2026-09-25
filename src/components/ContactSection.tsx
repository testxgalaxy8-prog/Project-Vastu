import React, { useState } from 'react';
import { Phone, Mail, Youtube, Twitter, MessageSquare, Clock, MapPin, CheckCircle2, Send, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Residential Apartment',
    city: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300">
          Connect & Consult
        </span>
        <h1 className="font-['Cinzel_Decorative'] text-3xl sm:text-4xl md:text-5xl text-stone-900 font-bold">
          Contact VASTU RITAM
        </h1>
        <p className="font-['Marcellus'] text-stone-700 text-base sm:text-lg leading-relaxed">
          We appreciate your interest in <strong className="text-emerald-950 font-bold">VASTU RITAM</strong>. Whether you are seeking a consultation, have a research query, wish to collaborate, or simply have a question, we would be pleased to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Details & Valuable Social Links */}
        <div className="lg:col-span-5 space-y-6 text-left">
          {/* Contact Details Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm space-y-6">
            <h3 className="font-['Cinzel_Decorative'] text-xl font-bold text-stone-900 border-b border-amber-100 pb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block" />
              <span>Direct Channels</span>
            </h3>

            {/* Mobile Numbers */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-serif uppercase tracking-wider text-stone-500 font-bold block">
                  Mobile Number
                </span>
                <a
                  href="tel:+919820018272"
                  className="font-['Marcellus'] text-base font-bold text-stone-900 hover:text-emerald-800 block"
                >
                  +91 98200 18272
                </a>
                <a
                  href="tel:+919820045678"
                  className="font-['Marcellus'] text-sm text-stone-600 hover:text-emerald-800 block"
                >
                  +91 98200 45678 (Consultation Desk)
                </a>
                <span className="text-xs text-emerald-800 font-serif block">
                  WhatsApp Available for Blueprint Sharing
                </span>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-serif uppercase tracking-wider text-stone-500 font-bold block">
                  Email Address
                </span>
                <a
                  href="mailto:contact@vasturitam.com"
                  className="font-['Marcellus'] text-base font-bold text-stone-900 hover:text-emerald-800 block"
                >
                  contact@vasturitam.com
                </a>
                <a
                  href="mailto:consultation@vasturitam.com"
                  className="font-['Marcellus'] text-sm text-stone-600 hover:text-emerald-800 block"
                >
                  consultation@vasturitam.com
                </a>
              </div>
            </div>

            {/* Official Social Links (Only those that add value: YouTube, X) */}
            <div className="pt-4 border-t border-amber-100 space-y-3">
              <span className="text-xs font-serif uppercase tracking-wider text-amber-900 font-bold block">
                Official Knowledge Channels
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* YouTube Link */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-red-50 border border-red-200 text-red-900 hover:bg-red-100 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                    <Youtube className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-['Cinzel_Decorative'] font-bold text-xs block">YouTube</span>
                    <span className="text-[11px] text-stone-600 font-serif">@VastuRitam</span>
                  </div>
                </a>

                {/* X / Twitter Link */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-stone-100 border border-stone-300 text-stone-900 hover:bg-stone-200 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center shrink-0">
                    <Twitter className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-['Cinzel_Decorative'] font-bold text-xs block">X (Twitter)</span>
                    <span className="text-[11px] text-stone-600 font-serif">@VastuRitam</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Consultation Hours & Timings */}
            <div className="pt-4 border-t border-amber-100 flex items-start gap-3 text-xs font-['Marcellus'] text-stone-600">
              <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900 block font-serif">Consultation Timings:</strong>
                <span>Monday – Saturday: 10:00 AM – 6:30 PM (IST)</span>
                <span className="block text-stone-500">Prior appointment required for in-depth architectural floor plan audit.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Inquiry Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm text-left">
          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-2xl font-bold text-stone-900">
                Thank You for Reaching Out
              </h3>
              <p className="font-['Marcellus'] text-stone-700 text-base max-w-md mx-auto">
                We have received your message. Our research and consultation desk will review your requirements and connect with you on your provided contact details promptly.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl border border-emerald-700 bg-emerald-50 text-emerald-950 font-serif text-xs font-bold hover:bg-emerald-100 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-amber-100 pb-3">
                <span className="text-xs uppercase font-serif text-amber-800 tracking-wider font-bold">
                  Schedule Consultation or Academic Collaboration
                </span>
                <h3 className="font-['Cinzel_Decorative'] text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                  Send a Message to VASTU RITAM
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-stone-700 font-bold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ar. Rajesh Sharma / Meera Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-['Marcellus'] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-stone-700 font-bold mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98XXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-['Marcellus'] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-stone-700 font-bold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-['Marcellus'] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-stone-700 font-bold mb-1">
                    Property / Inquiry Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-['Marcellus'] text-sm bg-white"
                  >
                    <option>Residential Apartment / Villa</option>
                    <option>Commercial Office / Retail</option>
                    <option>Industrial Factory / Plant</option>
                    <option>Vastu Before You Buy (Pre-Purchase)</option>
                    <option>Architect / Civil Engineer Collaboration</option>
                    <option>Academic Research & Publications</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-stone-700 font-bold mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai, Bengaluru, Ahmedabad, London"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-['Marcellus'] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-stone-700 font-bold mb-1">
                  Describe Your Space or Query *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please share details such as current building stage (blueprint planning, construction, renovation, or lived-in space)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-['Marcellus'] text-sm"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-700 via-amber-700 to-amber-800 text-white font-serif font-bold text-sm sm:text-base shadow-md hover:from-red-800 hover:to-amber-900 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to VASTU RITAM</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
