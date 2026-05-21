import React, { useState } from 'react';
import { ShieldAlert, Droplet, Trash2, Eye, Frown, Users, Flame } from 'lucide-react';

export default function Problem() {
  const [activeTab, setActiveTab] = useState('chemicals');

  const statistics = [
    {
      id: 'water',
      label: 'Urban Waterways Polluted',
      value: '78%',
      desc: 'Formulated with phosphates and surfactants, commercial cleaners cause severe eutrophication and devastate aquatic life.',
      icon: Droplet,
      color: 'border-red-500/30 text-red-400',
    },
    {
      id: 'health',
      label: 'Chronic Health Risks',
      value: '4.5x',
      desc: 'Inhalation of VOCs and dermal exposure to synthetic fragrances trigger chronic asthma, dermatological issues, and endocrine disruptions.',
      icon: Users,
      color: 'border-amber-500/30 text-amber-400',
    },
    {
      id: 'plastic',
      label: 'Single-Use Plastics Dumped',
      value: '1.2B',
      desc: 'Over 1.2 billion plastic cleaning product bottles end up in Indian landfills and oceans annually, taking 500+ years to degrade.',
      icon: Trash2,
      color: 'border-orange-500/30 text-orange-400',
    },
  ];

  return (
    <section id="problem" className="relative py-24 bg-gradient-to-b from-[#050b07] to-[#0a140f] overflow-hidden border-t border-slate-900">
      
      {/* Decorative red grid blur */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-red-950/15 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/30 border border-red-500/25">
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <span className="text-xs font-semibold text-red-300 uppercase tracking-wider">The Ecological crisis</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
            Why Traditional Cleaners Are <span className="text-red-500">Harmful</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Commercial cleaning products are built on cheap synthetic chemistry, causing catastrophic side-effects to human health and local water ecosystems.
          </p>
        </div>

        {/* Dynamic Warning Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                className={`glass-panel p-8 rounded-3xl border transition-all duration-300 relative group overflow-hidden ${stat.color} hover:border-red-500/40 hover:shadow-[0_10px_30px_rgba(239,68,68,0.1)]`}
              >
                {/* Tech corner accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500/20 group-hover:border-red-500/50 transition-colors duration-300 rounded-tr-3xl" />
                
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-red-950/20 border border-red-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-black font-heading tracking-tight">{stat.value}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-heading">{stat.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{stat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive Before vs After Visualizer */}
        <div className="glass-panel p-6 md:p-10 rounded-[32px] border border-slate-800/80">
          <h3 className="text-2xl font-bold font-heading text-white mb-6 text-left flex items-center">
            <Flame className="w-5 h-5 text-red-500 mr-2 animate-pulse" />
            Environmental Impact Visualizer
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visualizer Toggles */}
            <div className="lg:col-span-4 flex flex-col space-y-4 text-left">
              <p className="text-sm text-slate-400 mb-2">
                Click below to compare the chemical lifecycle of mainstream cleaners versus bio-enzyme solutions.
              </p>
              
              <button
                onClick={() => setActiveTab('chemicals')}
                className={`px-6 py-4 rounded-2xl border text-left transition-all duration-200 ${
                  activeTab === 'chemicals'
                    ? 'bg-red-950/30 border-red-500/40 text-red-300 shadow-[inset_0_0_10px_rgba(239,68,68,0.15)]'
                    : 'bg-transparent border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <p className="font-semibold text-sm">Synthetic Chemical Cycle</p>
                <p className="text-xs opacity-70 mt-1">Petrochemical mining → Toxic mixing → High chemical runoff</p>
              </button>

              <button
                onClick={() => setActiveTab('bio')}
                className={`px-6 py-4 rounded-2xl border text-left transition-all duration-200 ${
                  activeTab === 'bio'
                    ? 'bg-primary/10 border-primary/40 text-primary-light shadow-[inset_0_0_10px_rgba(16,185,129,0.15)]'
                    : 'bg-transparent border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <p className="font-semibold text-sm">Bio-Enzyme Circular Cycle</p>
                <p className="text-xs opacity-70 mt-1">Fruit waste collection → Natural fermentation → Plant nutrient runoff</p>
              </button>
            </div>

            {/* Visual Display */}
            <div className="lg:col-span-8 relative aspect-[16/9] w-full rounded-2xl border border-slate-800/80 overflow-hidden flex items-center justify-center bg-[#070e0a]">
              
              {activeTab === 'chemicals' ? (
                <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-t from-red-950/40 to-transparent">
                  
                  {/* Top telemetry */}
                  <div className="flex justify-between items-center text-xs font-mono text-red-400">
                    <span className="flex items-center"><ShieldAlert className="w-4 h-4 mr-1 text-red-500 animate-pulse" /> TOXIC RUNOFF DETECTED</span>
                    <span>HAZARD INDEX: 9.4/10</span>
                  </div>

                  {/* Chemical Graphics (Custom SVG Representation) */}
                  <div className="my-auto flex justify-center space-x-6 items-center">
                    <svg className="w-24 h-24 text-red-500/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <div className="text-left space-y-1">
                      <p className="text-lg font-bold text-red-300 font-heading">Bio-Accumulation</p>
                      <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                        Chemicals like Triclosan and phthalates do not degrade. They accumulate in fish, enter the food chain, and are returned to humans in drinking water.
                      </p>
                    </div>
                  </div>

                  {/* Warning ticker */}
                  <div className="border-t border-red-900/40 pt-3 text-[11px] font-mono text-slate-500 text-left">
                    SENSITIVE WATERWAYS // BIO-HAZARDS: TRICLOSAN, PHOSPHATE EUTROPHICATION, CHLORINE GAS
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-t from-primary/20 to-transparent">
                  
                  {/* Top telemetry */}
                  <div className="flex justify-between items-center text-xs font-mono text-primary-light">
                    <span className="flex items-center"><Droplet className="w-4 h-4 mr-1 text-primary animate-pulse" /> BIO-LOGICAL INTEGRITY SECURE</span>
                    <span>HAZARD INDEX: 0.0/10</span>
                  </div>

                  {/* Eco Graphics (Custom SVG Representation) */}
                  <div className="my-auto flex justify-center space-x-6 items-center">
                    <svg className="w-24 h-24 text-primary/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-left space-y-1">
                      <p className="text-lg font-bold text-primary-light font-heading">Nutrient Restorative Lifecycle</p>
                      <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                        As the bio-enzyme drain water enters sewers, it actively digests pipe sludge, suppresses pathogenic bacteria, and releases nutrients that fertilize aquatic flora.
                      </p>
                    </div>
                  </div>

                  {/* Eco ticker */}
                  <div className="border-t border-primary/20 pt-3 text-[11px] font-mono text-slate-500 text-left">
                    CIRCULAR NUTRIENTS // ENZYMES: AMYLASE, LIPASE, PROTEASE // BIO-COMPATIBLE RUNOFF
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
