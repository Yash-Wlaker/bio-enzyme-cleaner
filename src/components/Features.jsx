import React from 'react';
import { Leaf, ShieldCheck, Heart, Trash, Scale, Coins, Sparkles, Droplet } from 'lucide-react';

export default function Features() {
  const benefits = [
    {
      title: '100% Eco-Friendly',
      desc: 'Formulated completely from citrus organic matter, utilizing zero synthetic chemicals, artificial pigments, or phosphates.',
      icon: Leaf,
    },
    {
      title: '99.8% Biodegradable',
      desc: 'Breaks down fully into harmless elements in local sewer and soil environments in less than 72 hours post-usage.',
      icon: ShieldCheck,
    },
    {
      title: 'Completely Non-Toxic',
      desc: 'Absolutely zero chemical fumes or VOCs. Extremely safe for homes with infants, pregnant women, and companion pets.',
      icon: Heart,
    },
    {
      title: 'Landfill Waste Reduction',
      desc: 'Directly diverts municipal fruit waste from organic rot, mitigating hazardous methane emissions from city landfills.',
      icon: Trash,
    },
    {
      title: 'Circular & Sustainable',
      desc: 'A circular product lifecycle where kitchen waste cleans the home and discharges nutrients to feed sewer pipes and plants.',
      icon: Scale,
    },
    {
      title: 'Highly Cost-Efficient',
      desc: 'Manufactured from zero-cost raw peels and jaggery, costing less than ₹15 per liter of highly-concentrated cleaner.',
      icon: Coins,
    },
    {
      title: 'Multi-Purpose Agent',
      desc: 'Naturally acts as a high-performance floor detergent, toilet sanitizer, dish soap, pesticide, and laundry degreaser.',
      icon: Sparkles,
    },
    {
      title: 'Ecosystem & Water-Safe',
      desc: 'Neutralizes toxic sulfur compounds in household graywater, keeping waterways free of foam and nourishing marine life.',
      icon: Droplet,
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-[#050b07] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-emerald-950/10 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
            Uncompromising Ecological Standards
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Our biotechnology does not compromise on cleaning power while preserving absolute biocompatibility.
          </p>
        </div>

        {/* 8-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="glass-card p-6 rounded-3xl border border-slate-900 text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="mb-6 w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading mb-3 group-hover:text-primary-light transition-colors duration-200">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans">
                    {benefit.desc}
                  </p>
                </div>
                
                {/* Tech indicator bottom */}
                <div className="border-t border-slate-900 mt-6 pt-3 flex justify-between items-center text-[9px] font-mono text-slate-500 opacity-60">
                  <span>BIO-COMPATIBLE</span>
                  <span>SECURE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
