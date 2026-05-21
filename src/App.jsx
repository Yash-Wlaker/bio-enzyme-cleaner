import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Science from './components/Science';
import Calculator from './components/Calculator';
import Features from './components/Features';
import Applications from './components/Applications';
import MarketAnalysis from './components/MarketAnalysis';
import ImpactDashboard from './components/ImpactDashboard';
import FutureScope from './components/FutureScope';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-white">
      {/* 3D-like Enzyme/Chemical Floating Particle Simulator Canvas */}
      <ParticleBackground />

      {/* Sticky Premium Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Cinematic Hero Segment */}
        <Hero />

        {/* The Dark Ecological Warning Grid */}
        <Problem />

        {/* Circular Solution Flow */}
        <Solution />

        {/* 10:3:1 Formula & Reaction Biochemistry */}
        <Science />

        {/* Real-time Impact Waste Calculator Dashboard */}
        <Calculator />

        {/* Features & Benefits cards */}
        <Features />

        {/* Applications sectors (Floor, Toilet, Ag Tech, Industrial) */}
        <Applications />

        {/* Investor Pitch Opportunity & Competitor Position Table */}
        <MarketAnalysis />

        {/* Live-ticking Impact Statistics */}
        <ImpactDashboard />

        {/* Growth Roadmap & Commercial refilling hubs */}
        <FutureScope />
      </main>

      {/* Footer & Founders details */}
      <Footer />
    </div>
  );
}

export default App;
