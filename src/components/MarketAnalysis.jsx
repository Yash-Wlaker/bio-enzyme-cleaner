import React, { useMemo } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { TrendingUp, Award, DollarSign, BarChart2, ShieldAlert, Sparkles, Building, ShoppingBag, Eye } from 'lucide-react';

export default function MarketAnalysis() {
  
  // Recharts Data: Indian Eco-Cleaning market size in ₹ Crores (2026 - 2032)
  const growthData = useMemo(() => [
    { Year: '2026', 'Traditional Chemicals': 4500, 'Eco-Friendly Bio-Enzymes': 1200 },
    { Year: '2027', 'Traditional Chemicals': 4700, 'Eco-Friendly Bio-Enzymes': 1600 },
    { Year: '2028', 'Traditional Chemicals': 4850, 'Eco-Friendly Bio-Enzymes': 2200 },
    { Year: '2029', 'Traditional Chemicals': 4900, 'Eco-Friendly Bio-Enzymes': 3100 },
    { Year: '2030', 'Traditional Chemicals': 4950, 'Eco-Friendly Bio-Enzymes': 4300 },
    { Year: '2031', 'Traditional Chemicals': 5000, 'Eco-Friendly Bio-Enzymes': 5700 },
    { Year: '2032', 'Traditional Chemicals': 5050, 'Eco-Friendly Bio-Enzymes': 7400 },
  ], []);

  const businessChannels = [
    {
      title: 'D2C DIY Kits',
      desc: 'Sell eco-fermenter jars with pre-measured jaggery and active microbial starters. Empowers households to brew active cleaner for ₹15/L.',
      icon: ShoppingBag,
      target: 'Urban Households',
    },
    {
      title: 'IoT Refill Stations',
      desc: 'Vending stations in smart societies where residents bring old bottles and purchase bio-enzyme concentrate on-tap via digital pay.',
      icon: Sparkles,
      target: 'Premium Societies',
    },
    {
      title: 'B2B Bulk Supply',
      desc: 'White-labeled high-enzyme concentrate supplied directly to commercial chains, corporate offices, hotels, and schools.',
      icon: Building,
      target: 'Commercial Chains',
    },
  ];

  return (
    <section id="market" className="relative py-24 bg-gradient-to-b from-[#050b07] to-[#0a140f] overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-emerald-950/10 blur-[130px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <TrendingUp className="w-4 h-4 text-primary-light" />
            <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">Investor Pitch & Market Opportunity</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">
            Capturing the Eco-Tech Shift
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Rapid urbanization, rising toxicity awareness, and municipal landfill mandates are driving a massive transition from petrochemical cleaners to bio-enzymes.
          </p>
        </div>

        {/* Top Pitch Deck Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-panel p-8 rounded-3xl border border-slate-800/80 text-left">
            <p className="text-xs font-mono text-slate-500 uppercase">PROJECTED ECO-TAM (INDIA 2030)</p>
            <p className="text-4xl font-extrabold font-heading text-white mt-2">₹7,400 Cr</p>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              The Indian cleaning products industry is shifting rapidly. Eco-cleaners are the fastest growing niche.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-3xl border border-slate-800/80 text-left">
            <p className="text-xs font-mono text-slate-500 uppercase">PROJECTED CAGR (2026-2032)</p>
            <p className="text-4xl font-extrabold font-heading text-primary-light mt-2">24.5%</p>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Consistently outperforming traditional synthetic chemical cleaners, which are stagnant at 4.2% CAGR.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-3xl border border-slate-800/80 text-left">
            <p className="text-xs font-mono text-slate-500 uppercase">CONSUMER DEMAND DRIFT</p>
            <p className="text-4xl font-extrabold font-heading text-sky-400 mt-2">82%</p>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Of metropolitan consumers indicate a active preference for bio-degradable, chemical-free home solutions.
            </p>
          </div>
        </div>

        {/* Market growth chart & Business Models */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Chart Panel */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between text-left space-y-6">
            <div>
              <h3 className="text-xl font-bold font-heading text-white flex items-center">
                <BarChart2 className="w-5 h-5 text-primary mr-2" />
                Market Share Projections (₹ Crores)
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Eco-Friendly bio-enzyme cleaners are projected to capture over 50% of the household cleaner market share by 2032.
              </p>
            </div>

            <div className="w-full h-[250px] text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={growthData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorChemicals" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorEco" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="Year" stroke="#64748b" fontSize={9} />
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
                  <Area type="monotone" dataKey="Traditional Chemicals" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorChemicals)" />
                  <Area type="monotone" dataKey="Eco-Friendly Bio-Enzymes" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorEco)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Business Opportunity Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {businessChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div key={channel.title} className="glass-panel p-5 rounded-2xl border border-slate-800/80 text-left flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary-light mt-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-white font-heading text-sm md:text-base">{channel.title}</h4>
                      <span className="text-[9px] font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                        {channel.target}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2">{channel.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Brand Comparison Matrix Table */}
        <div className="glass-panel p-6 md:p-8 rounded-3xl border border-slate-800/80 text-left overflow-x-auto">
          <h3 className="text-xl font-bold font-heading text-white mb-6 flex items-center">
            <Award className="w-5 h-5 text-primary mr-2" />
            Competitive Positioning Matrix
          </h3>
          
          <table className="w-full text-xs md:text-sm text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-850 text-slate-500 font-mono text-[10px]">
                <th className="py-4 px-3">BRAND / SOLUTION</th>
                <th className="py-4 px-3 text-center">COST / LITER</th>
                <th className="py-4 px-3 text-center">BIODEGRADABILITY</th>
                <th className="py-4 px-3 text-center">LANDFILL WASTE DIVERTER</th>
                <th className="py-4 px-3 text-center">DIY SCALABILITY</th>
                <th className="py-4 px-3 text-right">PHOSPHATE CONTENT</th>
              </tr>
            </thead>
            <tbody>
              
              {/* Row 1: Traditional Chemicals */}
              <tr className="border-b border-slate-850 hover:bg-slate-900/10 transition-colors">
                <td className="py-4 px-3 font-semibold text-red-400">Commercial Synthetics</td>
                <td className="py-4 px-3 text-center">₹150 - ₹250</td>
                <td className="py-4 px-3 text-center text-red-500 font-bold">Low (&lt; 20%)</td>
                <td className="py-4 px-3 text-center text-red-500 font-bold">None (0%)</td>
                <td className="py-4 px-3 text-center text-slate-400">None</td>
                <td className="py-4 px-3 text-right text-red-400 font-bold">High (Surfactants)</td>
              </tr>

              {/* Row 2: Miracle Enzyme */}
              <tr className="border-b border-slate-850 hover:bg-slate-900/10 transition-colors">
                <td className="py-4 px-3 font-semibold text-slate-300">Miracle Enzyme</td>
                <td className="py-4 px-3 text-center">₹300 - ₹450</td>
                <td className="py-4 px-3 text-center text-primary-light">High (95%)</td>
                <td className="py-4 px-3 text-center text-slate-400">Moderate</td>
                <td className="py-4 px-3 text-center text-slate-400">No</td>
                <td className="py-4 px-3 text-right text-primary-light">Zero</td>
              </tr>

              {/* Row 3: Satopradhan */}
              <tr className="border-b border-slate-850 hover:bg-slate-900/10 transition-colors">
                <td className="py-4 px-3 font-semibold text-slate-300">Satopradhan / Dhanyam</td>
                <td className="py-4 px-3 text-center">₹220 - ₹350</td>
                <td className="py-4 px-3 text-center text-primary-light">High (96%)</td>
                <td className="py-4 px-3 text-center text-slate-400">Moderate</td>
                <td className="py-4 px-3 text-center text-slate-400">No</td>
                <td className="py-4 px-3 text-right text-primary-light">Zero</td>
              </tr>

              {/* Row 4: Swadeshi Bio-Enzyme */}
              <tr className="border-b border-slate-850 hover:bg-slate-900/10 transition-colors">
                <td className="py-4 px-3 font-semibold text-slate-300">Swadeshi Bio-Enzyme</td>
                <td className="py-4 px-3 text-center">₹120 - ₹200</td>
                <td className="py-4 px-3 text-center text-primary-light">High (98%)</td>
                <td className="py-4 px-3 text-center text-primary-light">High (DIY base)</td>
                <td className="py-4 px-3 text-center text-slate-400">Manual Kits</td>
                <td className="py-4 px-3 text-right text-primary-light">Zero</td>
              </tr>

              {/* Row 5: OUR PROJECT */}
              <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                <td className="py-4 px-3 font-extrabold text-white flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-light mr-1.5 animate-pulse" />
                  Bio-Enzyme Cleaner (Ours)
                </td>
                <td className="py-4 px-3 text-center font-bold text-primary-light">₹10 - ₹15 (DIY)</td>
                <td className="py-4 px-3 text-center font-bold text-primary-light">Ultra (99.8%)</td>
                <td className="py-4 px-3 text-center font-bold text-primary-light">Maximum (100%)</td>
                <td className="py-4 px-3 text-center font-bold text-primary-light">Smart Refills & DIY App</td>
                <td className="py-4 px-3 text-right font-bold text-primary-light">Zero</td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
