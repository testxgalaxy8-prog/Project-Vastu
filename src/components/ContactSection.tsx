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
        <div className="flex items-center justify-center gap-2 text-xs font-serif uppercase tracking-widest text-[#D4A72C] font-bold">
          <Sparkles className="w-3.5 h-3.5 text-[#E88A16]" />
          <span>Connect & Consult · सम्पर्क-सूत्रम्</span>
        </div>
        <h1 className="font-['Cinzel_Decorative'] text-3xl sm:text-4xl md:text-5xl text-[#FFF7ED] font-black drop-shadow-md">
          Contact VASTU RITAM
        </h1>
        <p className="font-['Marcellus'] text-[#E8D3A8] text-base sm:text-lg leading-relaxed">
          We appreciate your interest in <strong className="text-[#FFF7ED] font-bold">VASTU RITAM</strong>. Whether you are seeking a consultation, have a research query, wish to collaborate, or simply have a question, we would be pleased to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Details & Valuable Social Links (Deep Teal / Dark Brown Panel) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          {/* Contact Details Card */}
          <div className="section-teal-heritage rounded-3xl p-6 sm:p-8 border-2 border-[#D4A72C] shadow-2xl space-y-6 text-[#FFF7ED]">
            <h3 className="font-['Cinzel_Decorative'] text-xl sm:text-2xl font-black text-[#FFF7ED] border-b-2 border-[#D4A72C]/40 pb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E88A16] inline-block" />
              <span>Direct Channels</span>
            </h3>

            {/* Mobile Numbers */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#2D1B14] border border-[#D4A72C] shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#E88A16] flex items-center justify-center text-[#2D1B14] shrink-0 font-bold">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-serif uppercase tracking-wider text-[#D4A72C] font-bold block">
                  Mobile Number
                </span>
                <a
                  href="tel:+919820018272"
                  className="font-['Marcellus'] text-base font-bold text-[#FFF7ED] hover:text-[#E88A16] block transition-colors"
                >
                  +91 98200 18272
                </a>
                <a
                  href="tel:+919820045678"
                  className="font-['Marcellus'] text-sm text-[#E8D3A8] hover:text-[#FFF7ED] block transition-colors"
                >
                  +91 98200 45678 (Consultation Desk)
                </a>
                <span className="text-xs text-[#FDE68A] font-serif block pt-0.5">
                  ✦ WhatsApp Available for Blueprint Sharing
                </span>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#2D1B14] border border-[#D4A72C] shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#B94E2C] flex items-center justify-center text-[#FFF7ED] shrink-0 font-bold">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-serif uppercase tracking-wider text-[#D4A72C] font-bold block">
                  Email Address
                </span>
                <a
                  href="mailto:contact@vasturitam.com"
                  className="font-['Marcellus'] text-base font-bold text-[#FFF7ED] hover:text-[#E88A16] block transition-colors"
                >
                  contact@vasturitam.com
                </a>
                <a
                  href="mailto:consultation@vasturitam.com"
                  className="font-['Marcellus'] text-sm text-[#E8D3A8] hover:text-[#FFF7ED] block transition-colors"
                >
                  consultation@vasturitam.com
                </a>
              </div>
            </div>

            {/* Official Social Links */}
            <div className="pt-2 border-t-2 border-[#D4A72C]/40 space-y-3">
              <span className="text-xs font-serif uppercase tracking-wider text-[#D4A72C] font-bold block">
                Official Knowledge Channels
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* YouTube Link */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#6B1F1F] border-2 border-[#D4A72C] text-[#FFF7ED] hover:bg-[#B94E2C] transition-all shadow-md group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FFF7ED] text-[#6B1F1F] flex items-center justify-center shrink-0">
                    <Youtube className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="font-['Cinzel_Decorative'] font-black text-xs block text-[#FFF7ED]">YouTube</span>
                    <span className="text-[11px] text-[#E8D3A8] font-serif">@VastuRitam</span>
                  </div>
                </a>

                {/* X / Twitter Link */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#283B63] border-2 border-[#D4A72C] text-[#FFF7ED] hover:bg-[#1B2945] transition-all shadow-md group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FFF7ED] text-[#283B63] flex items-center justify-center shrink-0">
                    <Twitter className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="font-['Cinzel_Decorative'] font-black text-xs block text-[#FFF7ED]">X (Twitter)</span>
                    <span className="text-[11px] text-[#E8D3A8] font-serif">@VastuRitam</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Consultation Hours & Timings */}
            <div className="pt-3 border-t-2 border-[#D4A72C]/40 flex items-start gap-3 text-xs font-['Marcellus'] text-[#E8D3A8]">
              <Clock className="w-4 h-4 text-[#D4A72C] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#FFF7ED] block font-serif text-sm">Consultation Timings:</strong>
                <span>Monday – Saturday: 10:00 AM – 6:30 PM (IST)</span>
                <span className="block text-[#D4A72C] mt-0.5 font-medium">Prior appointment required for in-depth architectural floor plan audit.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Inquiry Form (Warm Sandstone Panel) */}
        <div className="lg:col-span-7 bg-[#E8D3A8] text-[#2D1B14] rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#D4A72C] shadow-2xl text-left">
          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#0F5C55] text-[#D4A72C] border-2 border-[#D4A72C] flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-['Cinzel_Decorative'] text-2xl font-black text-[#2D1B14]">
                Thank You for Reaching Out
              </h3>
              <p className="font-['Marcellus'] text-[#3A2318] text-base max-w-md mx-auto leading-relaxed">
                We have received your message. Our research and consultation desk will review your requirements and connect with you on your provided contact details promptly.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl border-2 border-[#6B1F1F] bg-[#6B1F1F] text-[#FFF7ED] font-serif text-xs font-bold hover:bg-[#B94E2C] transition-all cursor-pointer shadow-md"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b-2 border-[#D4A72C]/60 pb-3">
                <span className="text-xs uppercase font-serif text-[#6B1F1F] tracking-wider font-bold">
                  Schedule Consultation or Academic Collaboration
                </span>
                <h3 className="font-['Cinzel_Decorative'] text-xl sm:text-2xl font-black text-[#2D1B14] mt-1">
                  Send a Message to VASTU RITAM
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#2D1B14] font-bold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ar. Rajesh Sharma / Meera Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-[#D4A72C] bg-[#FFFDF9] text-[#2D1B14] placeholder:text-[#3A2318]/50 focus:outline-none focus:ring-2 focus:ring-[#E88A16] font-['Marcellus'] text-sm shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#2D1B14] font-bold mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98XXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-[#D4A72C] bg-[#FFFDF9] text-[#2D1B14] placeholder:text-[#3A2318]/50 focus:outline-none focus:ring-2 focus:ring-[#E88A16] font-['Marcellus'] text-sm shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#2D1B14] font-bold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-[#D4A72C] bg-[#FFFDF9] text-[#2D1B14] placeholder:text-[#3A2318]/50 focus:outline-none focus:ring-2 focus:ring-[#E88A16] font-['Marcellus'] text-sm shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-[#2D1B14] font-bold mb-1">
                    Property / Inquiry Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-[#D4A72C] bg-[#FFFDF9] text-[#2D1B14] focus:outline-none focus:ring-2 focus:ring-[#E88A16] font-['Marcellus'] text-sm shadow-inner cursor-pointer"
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
                <label className="block text-xs font-serif uppercase tracking-wider text-[#2D1B14] font-bold mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai, Bengaluru, Ahmedabad, London"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-[#D4A72C] bg-[#FFFDF9] text-[#2D1B14] placeholder:text-[#3A2318]/50 focus:outline-none focus:ring-2 focus:ring-[#E88A16] font-['Marcellus'] text-sm shadow-inner"
                />
              </div>

              <div>
                <label className="block text-xs font-serif uppercase tracking-wider text-[#2D1B14] font-bold mb-1">
                  Describe Your Space or Query *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please share details such as current building stage (blueprint planning, construction, renovation, or lived-in space)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border-2 border-[#D4A72C] bg-[#FFFDF9] text-[#2D1B14] placeholder:text-[#3A2318]/50 focus:outline-none focus:ring-2 focus:ring-[#E88A16] font-['Marcellus'] text-sm shadow-inner"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#E88A16] hover:bg-[#D97706] text-[#2D1B14] font-serif font-black text-sm sm:text-base border-2 border-[#6B1F1F] shadow-xl hover:shadow-[0_0_25px_rgba(232,138,22,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#2D1B14]" />
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
