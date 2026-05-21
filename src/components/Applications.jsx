import React, { useState } from 'react';
import { Home, Droplet, Sprout, Hammer, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Applications() {
  const [activeTab, setActiveTab] = useState(0);

  const applications = [
    {
      title: 'Floor Care & Disinfection',
      desc: 'Cleans, degreases, and leaves a lingering natural citrus fragrance. Ideal for premium marble, granite, wood, and ceramic tiles.',
      icon: Home,
      dilution: '10ml per 1 Liter of water (1:100)',
      chemistry: 'Limonene oils dissolve dust binders, while amylase enzymes digest complex starch stains without stripping marble sealants.',
      efficiency: '99.2%',
    },
    {
      title: 'Sanitary & Toilet Cleaner',
      desc: 'Removes hard-water scaling and neutralizes uric acid odors without burning skin or corroding piping.',
      icon: Sparkles,
      dilution: 'Apply undiluted directly, brush and rinse after 15 mins',
      chemistry: 'Citric acid and acetic acid dissolve calcium carbonate deposits, while lipase bacteria digests fat layers supporting pathogenic grids.',
      efficiency: '98.7%',
    },
    {
      title: 'Dishwashing & Degreasing',
      desc: 'Cuts through grease, oil crusts, and protein residues. Leaves glassware sparkling with zero chemical films.',
      icon: Droplet,
      dilution: 'Mix 1:10 with water or use directly on tough grease',
      chemistry: 'Lipase enzymes catalyze lipids into soluble fatty acids and glycerol, allowing grease to wash away cleanly in cold water.',
      efficiency: '99.8%',
    },
    {
      title: 'Agricultural & Plant Care',
      desc: 'Acts as a natural bio-pesticide, soil restorer, and plant growth catalyst. Suppresses spider mites and mold.',
      icon: Sprout,
      dilution: 'Mix 2ml per 1 Liter of water (1:500) for foliar spray',
      chemistry: 'Natural enzymes dissolve outer protective shells of garden insects while organic acids act as iron and zinc chelating agents.',
      efficiency: '88.5%',
    },
    {
      title: 'Wastewater Treatment',
      desc: 'Cleans kitchen sinks, removes grease trap clogs, and purifies sewage graywater lines.',
      icon: Droplet,
      dilution: 'Pour 100ml directly into clogged drains weekly',
      chemistry: 'Active bacterial enzymes continuously digest complex sewage sludge, reducing Biochemical Oxygen Demand (BOD) by up to 60%.',
      efficiency: '94.0%',
    },
    {
      title: 'Heavy Industrial Cleaning',
      desc: 'Designed for hotel kitchens, machinery degreasing, and food processing plant floor maintenance.',
      icon: Hammer,
      dilution: 'Mix 1:20 with hot water for pressure washing',
      chemistry: 'Industrial-grade concentrate with elevated protease and lipase enzymes to quickly break down animal tallow and mineral grease.',
      efficiency: '99.5%',
    },
  ];

  return (
    <section id="applications" className="relative py-24 bg-[#050b07] overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full bg-emerald-950/10 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
            Commercial & Industrial Scalability
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            From household kitchen counters to industrial wastewater treatment systems, Bio-Enzyme Cleaners adapt to every application.
          </p>
        </div>

        {/* Tab Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Tab Selectors */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {applications.map((app, idx) => {
              const Icon = app.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={app.title}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-white border-transparent shadow-[0_4px_20px_rgba(16,185,129,0.25)] scale-[1.01]'
                      : 'bg-dark-card border-slate-900 text-slate-400 hover:border-slate-800'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2.5 rounded-xl ${
                      isActive ? 'bg-dark-bg/40 text-white' : 'bg-slate-950 text-primary-light'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm md:text-base font-heading">{app.title}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'rotate-90 text-white' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Tab Content Details */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-[32px] border border-slate-800/80 text-left min-h-[380px] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Heading */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    APPLICATION PROTOCOL
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mt-3">
                    {applications[activeTab].title}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-mono text-slate-500">CLEANING RATING</p>
                  <p className="text-xl font-bold text-primary-light font-heading">{applications[activeTab].efficiency}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {applications[activeTab].desc}
              </p>

              {/* Dilution instructions */}
              <div className="p-5 rounded-2xl bg-dark-bg/60 border border-slate-850">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-heading">
                  RECOMMENDED DILUTION
                </p>
                <p className="text-sm font-bold text-white font-sans">
                  {applications[activeTab].dilution}
                </p>
              </div>

              {/* Biological/Chemistry Mechanism */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-heading">
                  BIOCHEMICAL MECHANISM
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {applications[activeTab].chemistry}
                </p>
              </div>

            </div>

            {/* Verification label */}
            <div className="border-t border-slate-850 pt-6 mt-8 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary mr-1" />
                VERIFIED BIODEGRADABLE LIFE CYCLE
              </span>
              <span>TEST INDEX: ISO 14001</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
