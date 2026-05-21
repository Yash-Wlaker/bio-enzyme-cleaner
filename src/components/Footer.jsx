import React, { useState } from 'react';
import { Mail, Send, Compass, User, Globe } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const team = [
    {
      name: 'Dr. Aarav Sharma',
      role: 'Biotech Lead & R&D',
      credentials: 'M.Tech Microbiology',
      bio: 'Pioneered the low-pH anaerobic fermentation protocols for vegetable and fruit peel substrates.',
    },
    {
      name: 'Neha Patel',
      role: 'UI/UX & Systems Designer',
      credentials: 'B.Des Sustainable Systems',
      bio: 'Architected the circular waste collection logistics and user-facing interactive calculators.',
    },
    {
      name: 'Vikram Singh',
      role: 'Business Operations',
      credentials: 'MBA Clean Tech Innovation',
      bio: 'Manages municipal partnership programs, investor outreach, and refill vending licensing.',
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#030805] pt-24 pb-12 overflow-hidden border-t border-slate-900">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Startup Team Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              MEET THE INNOVATORS
            </span>
            <h3 className="text-2xl font-bold font-heading text-white mt-3">
              The BioEnzyme Startup Team
            </h3>
            <p className="text-slate-400 text-xs mt-2 leading-relaxed">
              Bridging biochemistry, product design, and clean-tech entrepreneurship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="glass-panel p-6 rounded-3xl border border-slate-900 text-left flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base font-heading">{member.name}</h4>
                  <p className="text-[10px] text-primary font-mono mt-0.5">{member.role}</p>
                  <p className="text-[9px] text-slate-500 font-mono mt-0.5">{member.credentials}</p>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand, Quote, and Newsletter split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-slate-900 pt-16 pb-12 items-start">
          
          {/* Brand & Quote */}
          <div className="lg:col-span-5 text-left space-y-6">
            <a href="#" className="flex items-center space-x-2">
              <Compass className="w-6 h-6 text-primary" />
              <span className="text-lg font-heading font-bold text-white tracking-tight">
                BioEnzyme<span className="text-primary">Cleaner</span>
              </span>
            </a>
            <p className="text-xl italic font-heading text-slate-300 tracking-wide">
              “Cleaner Home, Greener Planet.”
            </p>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              A national-level green-tech innovation prototype designed to replace toxic domestic chemicals with sustainable, waste-diverted biological enzymes.
            </p>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
              Project Context
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs text-slate-400">
              <span className="hover:text-primary transition-colors cursor-pointer">Science Documentation</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Municipal Waste Data Link</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Sewer Remediation Studies</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Pitch Deck PDF</span>
            </div>
          </div>

          {/* Interactive Newsletter */}
          <div className="lg:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
              Request Startup Deck
            </h4>
            <p className="text-xs text-slate-500 leading-normal">
              Enter your email to receive our comprehensive commercialization proposal, IRR forecasts, and technical whitepaper.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <input
                  type="email"
                  required
                  placeholder="investor@funds.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-dark-bg border border-slate-800 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 rounded-xl bg-primary text-white hover:bg-primary-hover flex items-center justify-center transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary-light text-xs text-center font-semibold">
                Pitch deck request sent successfully! Check your inbox.
              </div>
            )}
          </div>

        </div>

        {/* Copyright & Meta info */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-slate-500">
          <p>© 2026 BioEnzyme Cleaner Inc. Developed for the National Clean-Tech Hackathon.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-primary transition-colors cursor-pointer flex items-center">
              <Mail className="w-3.5 h-3.5 mr-1" /> contact@bioenzyme.org
            </span>
            <span className="hover:text-primary transition-colors cursor-pointer flex items-center">
              <Globe className="w-3.5 h-3.5 mr-1" /> bioenzyme.org
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
