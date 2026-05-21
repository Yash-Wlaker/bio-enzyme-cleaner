import React, { useState } from 'react';
import { ArrowRight, Leaf, RefreshCw, Layers, Award, Sparkles } from 'lucide-react';

export default function Solution() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: '1. Organic Waste Sourcing',
      subtitle: 'Sorting Citrus & Fruit Peels',
      desc: 'We salvage nitrogen-rich fruit peels and vegetable waste from municipal kitchens, juice shops, and processing units, redirecting them from rotting in toxic landfills.',
      icon: Leaf,
      badge: 'WASTE INPUT',
      color: 'from-amber-500/20 to-orange-500/10 text-amber-400 border-amber-500/20',
      glow: 'shadow-amber-500/10',
    },
    {
      title: '2. Anaerobic Fermentation',
      subtitle: '90-Day Microbial Aging',
      desc: 'Peels are mixed with water and jaggery (crude sugar) in sealed bioreactors. Natural yeasts and bacteria ferment the mixture, generating lactic acid and alcohol.',
      icon: RefreshCw,
      badge: 'BIO-PROCESS',
      color: 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/20',
      glow: 'shadow-emerald-500/10',
    },
    {
      title: '3. Biochemical Extraction',
      subtitle: 'Filtration & Enzyme Concentration',
      desc: 'The fermented substrate is filtered to extract a highly concentrated cocktail of active natural enzymes (amylases, proteases, lipases) and organic acids.',
      icon: Layers,
      badge: 'EXTRACTION',
      color: 'from-blue-500/20 to-indigo-500/10 text-blue-400 border-blue-500/20',
      glow: 'shadow-blue-500/10',
    },
    {
      title: '4. Bio-Enzyme Cleaner',
      subtitle: 'Zero-Waste Multipurpose Concentrate',
      desc: 'A powerful, premium-grade cleaning solution that breaks down oils, proteins, and pathogen grids, leaving behind a soil-enriching, water-safe residue.',
      icon: Award,
      badge: 'PRODUCT OUT',
      color: 'from-primary/20 to-secondary/10 text-primary-light border-primary/20',
      glow: 'shadow-primary/10',
    },
  ];

  return (
    <section id="solution" className="relative py-24 bg-gradient-to-b from-[#0a140f] to-[#050b07] overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-emerald-950/20 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary-light" />
            <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">Our Sustainable Innovation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
            The Circular Economy of Clean
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            We close the loop of household waste by converting organic waste materials into chemical-free, biodegradable, medical-grade cleaners.
          </p>
        </div>

        {/* Process Flow Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Step selectors */}
          <div className="lg:col-span-6 space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    isSelected 
                      ? `bg-gradient-to-r ${step.color} border-slate-700/50 shadow-lg ${step.glow} scale-[1.02]`
                      : 'bg-dark-card border-slate-900/60 text-slate-400 hover:bg-slate-900/30 hover:border-slate-800/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-xl border ${
                        isSelected ? 'bg-dark-bg/60 border-white/10' : 'bg-slate-900/80 border-slate-800'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className={`font-bold font-heading text-lg ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {step.title}
                      </h3>
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${
                      isSelected ? 'bg-dark-bg/85 text-primary-light' : 'bg-slate-950 text-slate-500'
                    }`}>
                      {step.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-mono mb-1">{step.subtitle}</p>
                  
                  {/* Expand content if active */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    isSelected ? 'max-h-36 opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Circle economy infographic mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-8 rounded-[40px] border border-primary/10 bg-dark-card/60 backdrop-blur-md shadow-2xl">
              
              {/* Spinning circular background flow */}
              <div className="absolute inset-4 rounded-full border border-dashed border-primary/20 animate-spin-slow" />
              
              {/* Outer orbit arrows */}
              <svg className="absolute w-[85%] h-[85%] opacity-20 text-primary-light" viewBox="0 0 100 100">
                <path d="M 50 10 A 40 40 0 0 1 90 50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 90 50 A 40 40 0 0 1 50 90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 50 90 A 40 40 0 0 1 10 50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M 10 50 A 40 40 0 0 1 50 10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
              </svg>

              {/* Core interactive dashboard visual */}
              <div className="text-center space-y-4 z-10 p-6 rounded-full w-[240px] h-[240px] border border-primary/30 bg-[#07130b] flex flex-col justify-center items-center shadow-[0_0_40px_rgba(16,185,129,0.15)] animate-float">
                <Leaf className="w-12 h-12 text-primary-light mb-2 animate-bounce" style={{ animationDuration: '4s' }} />
                <h4 className="text-lg font-bold font-heading text-white">Closed Loop System</h4>
                <p className="text-xs text-slate-400 max-w-[180px] leading-normal font-sans">
                  Organic materials decompose, releasing natural acid-based enzymes that clean without chemically altering the biosphere.
                </p>
                <div className="inline-flex items-center space-x-1 text-[10px] font-mono text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 mt-3">
                  <span>CIRCULARITY VERIFIED</span>
                </div>
              </div>

              {/* Orbital Nodes mapping to current steps */}
              <div className={`absolute top-[8%] left-[50%] -translate-x-1/2 w-10 h-10 rounded-xl bg-dark-bg border flex items-center justify-center transition-all duration-300 ${
                activeStep === 0 ? 'border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-110' : 'border-slate-800'
              }`}>
                <Leaf className={`w-5 h-5 ${activeStep === 0 ? 'text-amber-400' : 'text-slate-600'}`} />
              </div>

              <div className={`absolute right-[8%] top-[50%] -translate-y-1/2 w-10 h-10 rounded-xl bg-dark-bg border flex items-center justify-center transition-all duration-300 ${
                activeStep === 1 ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)] scale-110' : 'border-slate-800'
              }`}>
                <RefreshCw className={`w-5 h-5 ${activeStep === 1 ? 'text-emerald-400' : 'text-slate-600'}`} />
              </div>

              <div className={`absolute bottom-[8%] left-[50%] -translate-x-1/2 w-10 h-10 rounded-xl bg-dark-bg border flex items-center justify-center transition-all duration-300 ${
                activeStep === 2 ? 'border-blue-500 shadow-[0_0_15px_rgba(14,165,233,0.4)] scale-110' : 'border-slate-800'
              }`}>
                <Layers className={`w-5 h-5 ${activeStep === 2 ? 'text-blue-400' : 'text-slate-600'}`} />
              </div>

              <div className={`absolute left-[8%] top-[50%] -translate-y-1/2 w-10 h-10 rounded-xl bg-dark-bg border flex items-center justify-center transition-all duration-300 ${
                activeStep === 3 ? 'border-primary shadow-[0_0_15px_rgba(16,185,129,0.4)] scale-110' : 'border-slate-800'
              }`}>
                <Award className={`w-5 h-5 ${activeStep === 3 ? 'text-primary-light' : 'text-slate-600'}`} />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
