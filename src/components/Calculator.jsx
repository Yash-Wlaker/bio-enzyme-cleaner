import React, { useState, useMemo } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Scale, Droplets, Flame, BarChart3, Leaf, Wind } from 'lucide-react';

export default function Calculator() {
  const [wasteWeight, setWasteWeight] = useState(5); // Default 5kg

  // Calculations based on 10:3:1 ratio
  // 3 parts waste : 10 parts water : 1 part jaggery
  // 1kg waste requires: 3.33L water, 0.33kg (333g) jaggery. Wait, the user prompt says:
  // "1kg Fruit Peels -> Water Needed: 3.3L, Jaggery Needed: 100g"
  // Let's stick EXACTLY to the user's ratio formula example:
  // "Example: 1kg Fruit Peels -> Water Needed: 3.3L, Jaggery Needed: 100g, Fermentation Time: 90 Days"
  // Water = weight * 3.3
  // Jaggery = weight * 100 (in grams)
  const waterNeeded = useMemo(() => (wasteWeight * 3.3).toFixed(1), [wasteWeight]);
  const jaggeryNeeded = useMemo(() => (wasteWeight * 100), [wasteWeight]); // in grams
  
  // Custom estimated impact metrics
  const enzymeYield = useMemo(() => (wasteWeight * 0.9).toFixed(1), [wasteWeight]); // 90% yield after solids precipitate
  const carbonOffset = useMemo(() => (wasteWeight * 2.2).toFixed(1), [wasteWeight]); // 2.2kg CO2 equivalent avoided from landfills
  const plasticBottlesSaved = useMemo(() => Math.floor(wasteWeight * 1.8), [wasteWeight]); // equivalent standard 500ml bottles

  // Chart data: Fermentation kinetics mapping over 90 days
  const chartData = useMemo(() => {
    const data = [];
    for (let day = 0; day <= 90; day += 10) {
      // Math formulas simulating pH drop and enzyme concentration rise
      const ph = (6.5 - (3.0 * (1 - Math.exp(-day / 20)))).toFixed(2);
      const enzymes = Math.round(100 * (1 / (1 + Math.exp(-(day - 35) / 12))));
      const alcohol = Math.round(40 * Math.sin((day / 90) * Math.PI) * Math.exp(-day / 65));
      data.push({
        Day: `Day ${day}`,
        'pH Level': parseFloat(ph),
        'Enzyme Concentration (%)': enzymes,
        'Est. Alcohol Vol (%)': alcohol,
      });
    }
    return data;
  }, []);

  return (
    <section id="calculator" className="relative py-24 bg-gradient-to-b from-[#08120b] to-[#050b07] overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Scale className="w-4 h-4 text-primary-light" />
            <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">Smart Waste Calculator</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
            Evaluate Your Eco Impact
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Enter your projected organic food/citrus waste load and calculate the exact chemical ingredients and environmental savings in real-time.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Sliders & Ingredients */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Input Slider Panel */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-800/80 text-left space-y-6">
              <h3 className="text-lg font-bold font-heading text-white flex items-center">
                <Leaf className="w-5 h-5 text-primary mr-2" />
                Raw Organic Waste Input
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center font-mono">
                  <span className="text-xs text-slate-400">CITRUS & VEG PEELS</span>
                  <span className="text-2xl font-bold text-primary-light">{wasteWeight} kg</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={wasteWeight}
                  onChange={(e) => setWasteWeight(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>1 kg</span>
                  <span>50 kg</span>
                  <span>100 kg</span>
                </div>
              </div>
            </div>

            {/* Formula Ingredient Output Panel */}
            <div className="glass-panel p-8 rounded-3xl border border-slate-800/80 text-left space-y-6 flex-1">
              <h3 className="text-lg font-bold font-heading text-white flex items-center">
                <Droplets className="w-5 h-5 text-primary mr-2" />
                Required Ingredients (10:3:1)
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-dark-bg/60 border border-slate-800/80">
                  <p className="text-[10px] font-mono text-slate-500 uppercase">WATER REQUIRED</p>
                  <p className="text-2xl font-bold font-heading text-white mt-1">{waterNeeded} L</p>
                  <p className="text-[10px] text-slate-400 mt-1">Decanted / Tap water</p>
                </div>

                <div className="p-4 rounded-2xl bg-dark-bg/60 border border-slate-800/80">
                  <p className="text-[10px] font-mono text-slate-500 uppercase">JAGGERY REQUIRED</p>
                  <p className="text-2xl font-bold font-heading text-white mt-1">
                    {jaggeryNeeded >= 1000 ? `${(jaggeryNeeded / 1000).toFixed(2)} kg` : `${jaggeryNeeded} g`}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">Crude unrefined sugar</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#09170e] border border-primary/20 flex justify-between items-center">
                <div>
                  <p className="text-[10px] font-mono text-primary uppercase">ESTIMATED MATURATION</p>
                  <p className="text-xl font-bold font-heading text-white mt-0.5">90 Days</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded bg-primary/20 border border-primary/30 text-[9px] font-mono text-primary-light">
                    ANAEROBIC STABLE
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Recharts Dashboard Analytics */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between space-y-8">
            
            {/* Header Telemetry */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold font-heading text-white flex items-center">
                  <BarChart3 className="w-5 h-5 text-primary mr-2" />
                  Fermentation Simulation Kinetics
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Real-time biochemical trajectory over the 90-day aging window
                </p>
              </div>
              <div className="flex items-center space-x-1.5 text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                <span>SIMULATED V2.1</span>
              </div>
            </div>

            {/* Recharts Area Chart */}
            <div className="w-full h-[220px] text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPh" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorEnzymes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="Day" stroke="#64748b" fontSize={9} />
                  <YAxis stroke="#64748b" fontSize={9} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0a160f', 
                      borderColor: 'rgba(16, 185, 129, 0.2)',
                      borderRadius: '12px',
                      color: '#f8fafc',
                      fontSize: '11px'
                    }} 
                  />
                  <Legend verticalAlign="top" height={36} iconType="circle" iconSize={6} />
                  <Area type="monotone" dataKey="pH Level" stroke="#0ea5e9" strokeWidth={2} fillOpacity={1} fill="url(#colorPh)" />
                  <Area type="monotone" dataKey="Enzyme Concentration (%)" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorEnzymes)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Simulated Ecological Savings Panel */}
            <div className="border-t border-slate-800/80 pt-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center">
                <Wind className="w-3.5 h-3.5 text-primary mr-1" /> Estimated Environmental Savings
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-slate-500 font-mono">CONCENTRATE YIELD</p>
                  <p className="text-lg font-bold text-white font-heading mt-1">{enzymeYield} L</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono">CO₂ EQUIV. REDUCED</p>
                  <p className="text-lg font-bold text-primary-light font-heading mt-1">{carbonOffset} kg</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono">PLASTIC BOTTLES SAVED</p>
                  <p className="text-lg font-bold text-sky-400 font-heading mt-1">{plasticBottlesSaved} units</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
