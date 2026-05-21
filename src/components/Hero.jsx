import React from 'react';
import { ArrowRight, Play, Activity, Droplets, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden gradient-bg-hero">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[100px] -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[120px] -z-10 animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copywriting */}
        <div className="lg:col-span-7 space-y-8 text-left z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">
              National Hackathon Excellence Prototype
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-tight tracking-tight text-white">
            Transforming Organic Waste into <span className="gradient-text-earth">Eco-Friendly Cleaners</span>
          </h1>

          <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
            Our biotechnology platform converts kitchen and agricultural organic waste into active bio-enzyme cleaning solutions. A circular economy alternative designed to replace toxic chemical cleaners entirely.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#solution"
              className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-hover shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>Explore Solution</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#impact"
              className="px-8 py-4 rounded-xl font-semibold text-slate-300 hover:text-white glass-panel hover:bg-slate-800/40 transition-all duration-300 flex items-center justify-center space-x-2 border border-slate-700/50"
            >
              <Play className="w-4 h-4 fill-slate-300 group-hover:fill-white text-transparent mr-1" />
              <span>View Impact</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/60 max-w-md">
            <div>
              <p className="text-2xl font-bold font-heading text-white">100%</p>
              <p className="text-xs text-slate-400">Non-Toxic</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-heading text-primary-light">3.3x</p>
              <p className="text-xs text-slate-400">Waste Recycled</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-heading text-secondary">Zero</p>
              <p className="text-xs text-slate-400">Chemical Runoff</p>
            </div>
          </div>
        </div>

        {/* Right Side: Animated Product Mockup */}
        <div className="lg:col-span-5 flex justify-center z-10">
          <div className="relative w-full max-w-[380px] aspect-[4/5] flex items-center justify-center animate-float">
            
            {/* Tech background frame */}
            <div className="absolute inset-0 rounded-[40px] border border-primary/20 bg-dark-card backdrop-blur-md p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-10 rounded-[40px]" />

              {/* Top Tech Indicator */}
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span className="flex items-center"><Activity className="w-3.5 h-3.5 text-primary mr-1 animate-pulse" /> SYSTEM: STABLE</span>
                <span>MODEL: BE-V1.0</span>
              </div>

              {/* Visual Interactive Bottle representation */}
              <div className="relative flex-1 flex items-center justify-center my-6">
                
                {/* Outer Bottle Glass Shape */}
                <div className="relative w-[150px] h-[250px] border-2 border-white/20 rounded-[28px] bg-white/5 backdrop-blur-[6px] shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col justify-end">
                  
                  {/* Bottle Neck */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40px] h-[30px] border-2 border-b-0 border-white/20 rounded-t-lg bg-white/5" />
                  
                  {/* Fluid liquid inside (animated wave) */}
                  <div className="relative w-full h-[65%] bg-gradient-to-t from-primary/40 to-primary-light/35 border-t border-primary/50 animate-pulse flex flex-col justify-start items-center">
                    
                    {/* Bubbles in liquid */}
                    <div className="absolute bottom-4 left-6 w-3 h-3 rounded-full bg-white/30 blur-[1px] animate-bounce" style={{ animationDuration: '4s' }} />
                    <div className="absolute bottom-16 right-8 w-2 h-2 rounded-full bg-white/40 blur-[1px] animate-bounce" style={{ animationDuration: '3s' }} />
                    <div className="absolute bottom-24 left-1/2 w-4 h-4 rounded-full bg-white/25 blur-[1px] animate-bounce" style={{ animationDuration: '5s' }} />
                    
                    {/* Floating label inside */}
                    <div className="mt-8 px-3 py-1 rounded bg-dark-bg/80 border border-primary/40 text-[9px] font-mono text-primary-light">
                      BIO-ENZYME
                    </div>
                  </div>
                </div>

                {/* Floating biotech labels around the bottle */}
                <div className="absolute -left-10 top-12 glass-panel px-3 py-2 rounded-xl text-left border border-primary/30 flex items-center space-x-2 animate-float" style={{ animationDelay: '1s' }}>
                  <Leaf className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono">Organic Base</p>
                    <p className="text-xs font-bold text-white">Citrus Peels</p>
                  </div>
                </div>

                <div className="absolute -right-10 bottom-16 glass-panel px-3 py-2 rounded-xl text-left border border-secondary/30 flex items-center space-x-2 animate-float-delayed">
                  <Droplets className="w-4 h-4 text-secondary" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono">Fermentation</p>
                    <p className="text-xs font-bold text-white">pH 4.0 - 4.5</p>
                  </div>
                </div>

              </div>

              {/* Bottom Telemetry */}
              <div className="border-t border-slate-800/80 pt-3 flex justify-between items-center">
                <div>
                  <p className="text-[9px] font-mono text-slate-500">ENZYME COUNT</p>
                  <p className="text-sm font-bold text-white font-mono">1.2 × 10⁸ CFU/ml</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-mono text-slate-500">BIODEGRADABILITY</p>
                  <p className="text-sm font-bold text-primary-light font-mono">99.8%</p>
                </div>
              </div>

            </div>

            {/* Glowing rings behind container */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-primary/10 to-secondary/10 blur-xl -z-10 opacity-70" />
          </div>
        </div>

      </div>

      {/* Decorative Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-1">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-[#050b07]"></path>
        </svg>
      </div>

    </section>
  );
}
