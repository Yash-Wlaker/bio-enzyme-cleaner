import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, ShieldAlert, TrendingUp, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Problem', href: '#problem' },
    { name: 'Our Solution', href: '#solution' },
    { name: 'The Science', href: '#science' },
    { name: 'Waste Calculator', href: '#calculator' },
    { name: 'Market Opportunity', href: '#market' },
    { name: 'Impact Dashboard', href: '#impact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-dark-bg/85 backdrop-blur-md border-b border-primary/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary p-[1px]">
            <div className="w-full h-full rounded-xl bg-dark-bg flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-tr group-hover:from-primary/20 group-hover:to-secondary/20">
              <Leaf className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="absolute inset-0 rounded-xl bg-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-xl font-heading font-bold tracking-tight text-white">
            BioEnzyme<span className="text-primary">Cleaner</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#market"
            className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-primary to-primary-hover hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 group overflow-hidden border border-primary/30"
          >
            <Sparkles className="w-4 h-4 mr-2 text-yellow-300 animate-pulse" />
            Investor Deck
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-dark-bg/95 backdrop-blur-lg border-l border-primary/25 shadow-2xl z-40 transform transition-transform duration-300 md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-20 px-6 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-primary transition-colors py-2 border-b border-slate-800/50"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#market"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary to-primary-hover text-white font-medium text-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
          >
            Investor Deck
          </a>
        </div>
      </div>
    </nav>
  );
}
