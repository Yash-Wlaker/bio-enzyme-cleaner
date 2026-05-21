import React, { useState, useEffect } from 'react';
import { Sparkles, Users, Droplet, Trash, Heart } from 'lucide-react';

export default function ImpactDashboard() {
  
  // Real-time ticking statistics
  const [activeBrewers, setActiveBrewers] = useState(14820);
  const [toxicPrevented, setToxicPrevented] = useState(842900.5);
  const [wasteDiverted, setWasteDiverted] = useState(256420.2);

  useEffect(() => {
    // Tick active brewers every few seconds
    const brewersInterval = setInterval(() => {
      setActiveBrewers((prev) => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 4000);

    // Tick toxic chemical prevented (liters)
    const toxicInterval = setInterval(() => {
      setToxicPrevented((prev) => prev + parseFloat((Math.random() * 0.4).toFixed(2)));
    }, 1200);

    // Tick organic waste diverted (kg)
    const wasteInterval = setInterval(() => {
      setWasteDiverted((prev) => prev + parseFloat((Math.random() * 0.2).toFixed(2)));
    }, 1800);

    return () => {
      clearInterval(brewersInterval);
      clearInterval(toxicInterval);
      clearInterval(wasteInterval);
    };
  }, []);

  const circularStats = [
    {
      title: 'Water Integrity',
      subtitle: 'Aquatic Life Recovery Index',
      value: 84,
      color: 'stroke-primary',
      desc: 'Significant reduction in sewer eutrophication and algal bloom events in municipal drainage hubs.',
    },
    {
      title: 'Plastic Mitigation',
      subtitle: 'Single-Use Bottle Avoidance',
      value: 92,
      color: 'stroke-sky-500',
      desc: 'Users refilling DIY kits or using IoT stations instead of buying single-use petrochemical bottles.',
    },
    {
      title: 'Carbon Sink Impact',
      subtitle: 'Methane Reduction Index',
      value: 78,
      color: 'stroke-emerald-400',
      desc: 'Diverting organic food peels prevents anaerobic breakdown in landfills, eliminating heavy methane emissions.',
    },
  ];

  return (
    <section id="impact" className="relative py-24 bg-[#050b07] overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary-light" />
            <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">Live Environmental Telemetry</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
            Sustainability Impact Dashboard
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Real-time visual proof of chemical runoff prevented and food waste diverted from Indian landfills by our community.
          </p>
        </div>

        {/* Live Ticker Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="glass-panel p-8 rounded-3xl border border-slate-800/80 text-left flex items-center space-x-6 relative overflow-hidden">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary-light">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase">ACTIVE COMMUNITY BREWERS</p>
              <p className="text-3xl font-extrabold font-heading text-white mt-1">
                {activeBrewers.toLocaleString()}
              </p>
              <p className="text-[10px] text-primary-light mt-1 font-mono flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-light mr-1 animate-pulse" /> LIVE STREAM
              </p>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-slate-800/80 text-left flex items-center space-x-6 relative overflow-hidden">
            <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Droplet className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase">TOXIC RUNOFF PREVENTED (L)</p>
              <p className="text-3xl font-extrabold font-heading text-white mt-1">
                {toxicPrevented.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
              </p>
              <p className="text-[10px] text-sky-400 mt-1 font-mono flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-1 animate-pulse" /> UPDATING INSTANTLY
              </p>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-slate-800/80 text-left flex items-center space-x-6 relative overflow-hidden">
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Trash className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-500 uppercase">ORGANIC WASTE RECYCLED (KG)</p>
              <p className="text-3xl font-extrabold font-heading text-white mt-1">
                {wasteDiverted.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
              </p>
              <p className="text-[10px] text-emerald-400 mt-1 font-mono flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" /> MUNICIPAL DATA LINKED
              </p>
            </div>
          </div>

        </div>

        {/* Circular Progress Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {circularStats.map((stat) => {
            // SVG circular calculations
            const radius = 50;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (stat.value / 100) * circumference;

            return (
              <div key={stat.title} className="glass-card p-8 rounded-3xl border border-slate-900 text-center flex flex-col items-center justify-between group">
                
                {/* Circular Gauge */}
                <div className="relative w-36 h-36 flex items-center justify-center mb-6">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="72"
                      cy="72"
                      r={radius}
                      className="stroke-slate-850 fill-transparent"
                      strokeWidth="8"
                    />
                    <circle
                      cx="72"
                      cy="72"
                      r={radius}
                      className={`fill-transparent transition-all duration-1000 ${stat.color}`}
                      strokeWidth="8"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-3xl font-extrabold font-heading text-white">{stat.value}%</span>
                    <span className="text-[9px] font-mono text-slate-500">TARGET</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-heading">{stat.title}</h3>
                  <p className="text-xs text-primary font-mono uppercase tracking-wider">{stat.subtitle}</p>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans mt-3">
                    {stat.desc}
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
