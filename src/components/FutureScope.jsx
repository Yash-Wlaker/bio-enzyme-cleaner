import React from 'react';
import { Target, Cpu, RefreshCw, Landmark, Zap, Compass } from 'lucide-react';

export default function FutureScope() {
  const milestones = [
    {
      phase: 'PHASE 01 // Q3 2026',
      title: 'AI-Sensing Bioreactors',
      desc: 'Integrating electronic noses and pH sensor grids into industrial fermentation vats to monitor enzyme yield, chemical balance, and ester production in real-time.',
      icon: Cpu,
    },
    {
      phase: 'PHASE 02 // Q1 2027',
      title: 'IoT-Dispensing Stations',
      desc: 'Launching automated zero-waste vending kiosks in metropolitan grocery markets. Customers fill reusable containers, avoiding secondary packaging plastic.',
      icon: RefreshCw,
    },
    {
      phase: 'PHASE 03 // Q4 2027',
      title: 'Smart City Sewer Remediation',
      desc: 'Collaborating with civic municipal bodies to feed active enzymes into residential sewage hubs, naturally dissolving sludge blocks and digesting pathogens.',
      icon: Landmark,
    },
    {
      phase: 'PHASE 04 // Q2 2028',
      title: 'Hyperlocal Peeling Hubs',
      desc: 'Linking trash pickup systems with organic waste separators. Partnering with restaurants and juice stores to buy fruit peels, paying in carbon credits.',
      icon: Target,
    },
  ];

  return (
    <section id="futurescope" className="relative py-24 bg-gradient-to-b from-[#0a140f] to-[#050b07] overflow-hidden">
      
      {/* Background neon lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-950/5 blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Compass className="w-4 h-4 text-primary-light" />
            <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">Vision & Roadmap</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
            Scaling Circular Biotech
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Our technology roadmap maps out integration into modern smart-cities, industrial sewage networks, and packaging-free distribution systems.
          </p>
        </div>

        {/* Roadmap Timeline Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting line (Desktop only) */}
          <div className="hidden lg:block absolute top-[90px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-primary/30 to-secondary/30 -z-10" />

          {milestones.map((milestone, idx) => {
            const Icon = milestone.icon;
            return (
              <div key={milestone.title} className="flex flex-col text-left space-y-6 relative group">
                
                {/* Timeline node circle */}
                <div className="w-12 h-12 rounded-2xl bg-dark-bg border border-slate-800 flex items-center justify-center text-primary-light group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 relative">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="absolute -bottom-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                </div>

                <div className="glass-panel p-6 rounded-3xl border border-slate-900 flex-1 hover:border-primary/20 transition-all duration-300">
                  <span className="text-[9px] font-mono text-primary font-bold tracking-wider uppercase">
                    {milestone.phase}
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading mt-2 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
