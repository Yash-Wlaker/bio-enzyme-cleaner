import React, { useState } from 'react';
import { Microscope, Beaker, Calendar, Star, CheckCircle, Zap } from 'lucide-react';

export default function Science() {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [dirtCleaned, setDirtCleaned] = useState(false);

  const formulaParts = [
    {
      ratio: '10',
      name: 'Water',
      role: 'Solvent & Carrier',
      detail: 'Serves as the medium for microbial migration and hydrolysis reactions. Soft tap water or rainwater works best.',
    },
    {
      ratio: '3',
      name: 'Citrus Peels',
      role: 'Enzyme & Oil Base',
      detail: 'Citrus peels (orange, lemon, sweet lime) contain limonene, a natural solvent, and host wild yeasts on their skins.',
    },
    {
      ratio: '1',
      name: 'Jaggery / Sugar',
      role: 'Microbial Feedstock',
      detail: 'Unrefined cane sugar (jaggery) provides glucose and vital trace minerals to trigger rapid fermentation.',
    },
  ];

  const phases = [
    {
      day: 'Days 1 - 30',
      title: 'Acidic Fermentation',
      bio: 'Lactic Acid Bacteria (LAB) dominate. Microbes feed on jaggery sugars, producing lactic acid and acetic acid. pH drops rapidly to ~4.0, sterilizing the medium.',
      status: 'High Microbial Activity',
    },
    {
      day: 'Days 31 - 60',
      title: 'Alcoholic Synthesis',
      bio: 'Wild yeasts convert remaining hexose sugars into ethanol. Alcohol reacts with organic acids, forming sweet citrus-scented esters (limonene esters).',
      status: 'Esterification Peak',
    },
    {
      day: 'Days 61 - 90',
      title: 'Enzyme Maturation',
      bio: 'Proteases, amylases, and lipases accumulate as bacterial cells lyse. Limonene dissolves entirely. Solid residues precipitate, leaving a amber liquid.',
      status: 'Ready for Filtration',
    },
  ];

  return (
    <section id="science" className="relative py-24 bg-gradient-to-b from-[#050b07] to-[#08120b] overflow-hidden">
      
      {/* Background lab aesthetics */}
      <div className="absolute top-10 left-10 w-[200px] h-[200px] border border-primary/5 rounded-full -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] border border-primary/5 rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Microscope className="w-4 h-4 text-primary-light" />
            <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">How Bio Enzyme Cleaner Works</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
            Biotech in the Kitchen
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            A precise chemical equation driven by fermentation that unlocks natural surfactants and active dirt-eating catalysts.
          </p>
        </div>

        {/* 10:3:1 Formula Dashboard */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-800/80 mb-16">
          <h3 className="text-xl font-bold text-white font-heading mb-8 flex items-center">
            <Beaker className="w-5 h-5 text-primary mr-2" />
            The Golden Ratio: 10:3:1 Formula
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formulaParts.map((part) => (
              <div key={part.name} className="relative p-6 rounded-2xl bg-dark-bg/60 border border-slate-800/60 text-left group hover:border-primary/30 transition-colors duration-300">
                <div className="absolute -top-6 right-6 text-5xl font-black font-heading text-slate-800/50 group-hover:text-primary/20 transition-colors duration-300">
                  {part.ratio}x
                </div>
                <h4 className="text-lg font-bold text-white mb-1 font-heading">{part.name}</h4>
                <p className="text-xs text-primary font-mono uppercase tracking-wider mb-4">{part.role}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{part.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lab Grid: Fermentation Timeline & Catalyst Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Phase 1: Fermentation Timeline */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-slate-800/80 text-left flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white font-heading mb-6 flex items-center">
                <Calendar className="w-5 h-5 text-primary mr-2" />
                Anaerobic Fermentation Timeline
              </h3>

              <div className="flex space-x-2 mb-8 bg-dark-bg/50 p-1.5 rounded-xl border border-slate-800/80">
                {phases.map((phase, idx) => (
                  <button
                    key={phase.day}
                    onClick={() => setSelectedPhase(idx)}
                    className={`flex-1 text-center py-2.5 rounded-lg text-xs font-semibold font-heading transition-all duration-200 ${
                      selectedPhase === idx
                        ? 'bg-primary text-white shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {phase.day}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-primary">
                  <Star className="w-4 h-4 fill-primary" />
                  <span className="text-sm font-bold font-mono uppercase">{phases[selectedPhase].status}</span>
                </div>
                <h4 className="text-2xl font-bold text-white font-heading">{phases[selectedPhase].title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{phases[selectedPhase].bio}</p>
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-6 mt-8 flex justify-between items-center text-xs font-mono text-slate-400">
              <span>REACTOR CONDITIONS: ANAEROBIC</span>
              <span>FINAL pH: 3.5 - 4.2</span>
            </div>
          </div>

          {/* Phase 2: Enzyme Action Interactive Lab */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-slate-800/80 text-left flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white font-heading mb-2 flex items-center">
                <Zap className="w-5 h-5 text-primary mr-2" />
                Grease Breakdown Simulation
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Understand how enzymes actively catalyze and dissolve heavy grease and proteins.
              </p>

              {/* Simulation Screen */}
              <div className="relative aspect-square w-full rounded-2xl border border-slate-800/80 bg-dark-bg/60 overflow-hidden flex flex-col justify-center items-center p-6">
                
                {/* Microscopic grid lines */}
                <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />

                {!dirtCleaned ? (
                  <div className="space-y-6 text-center z-10 flex flex-col items-center">
                    {/* Dirt Molecule */}
                    <div className="relative w-24 h-24 rounded-full bg-amber-900/60 border-2 border-amber-800 flex items-center justify-center animate-pulse">
                      <span className="text-xs font-bold text-amber-300 font-mono">TRIGLYCERIDES</span>
                      {/* Floating Enzyme attackers */}
                      <div className="absolute -top-4 -left-4 w-6 h-6 rounded-full bg-primary/20 border border-primary text-[10px] flex items-center justify-center text-primary-light font-bold">Lip</div>
                      <div className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full bg-secondary/20 border border-secondary text-[10px] flex items-center justify-center text-sky-400 font-bold">Pro</div>
                    </div>
                    <button
                      onClick={() => setDirtCleaned(true)}
                      className="px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-xs hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all"
                    >
                      Release Active Enzymes
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6 text-center z-10 flex flex-col items-center">
                    {/* Dissolved Dirt */}
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[10px] text-primary-light font-mono">Fatty</div>
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[10px] text-primary-light font-mono">Acid</div>
                      <div className="w-8 h-8 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center text-[10px] text-sky-400 font-mono">Glyc</div>
                    </div>
                    <div className="flex items-center space-x-1 text-primary-light font-bold text-xs bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Grease Cleared at 100% Efficiency</span>
                    </div>
                    <button
                      onClick={() => setDirtCleaned(false)}
                      className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
                    >
                      Reset Simulation
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-white">How it works:</span> Lipase cuts lipids (oils), Protease breaks protein chains (food residue), and Amylase splits starches. Safe for marble, tiles, metal, and fabric.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
