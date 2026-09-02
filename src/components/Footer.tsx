import React from 'react';
import { Heart, Github } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-20 px-6 border-t border-white/5 glass-sheet relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
          {/* Brand/Logo Area */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#hero" className="flex items-center gap-2 group mb-2">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-black text-xl group-hover:scale-110 transition-transform">S</div>
              <span className="text-xl font-display font-bold tracking-tight text-app-text">
                SREYNEATH<span className="text-brand-primary">.ROM</span>
              </span>
            </a>
            <p className="text-sm text-app-text/40 text-center md:text-left max-w-[280px] leading-relaxed">
              Crafting high-performance digital experiences with a focus on clean code and intuitive design.
            </p>
          </div>

          {/* Quick Links / Sitemap */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-[0.2em] text-app-text/50">
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-brand-primary transition-colors hover:translate-y-[-2px]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Source / Credits */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Sreyneath-Rom" 
                target="_blank" 
                rel="noreferrer"
                className="glass-pill !px-4 !py-2 flex items-center gap-2 text-[10px] hover:bg-brand-primary hover:text-white transition-all"
              >
                <Github size={14} /> GitHub Profile
              </a>
            </div>
            <div className="text-[11px] text-app-text/30 font-medium font-mono">
              MADE WITH <Heart size={10} className="inline mx-1 text-rose-500 animate-pulse" /> & REACT
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[11px] font-bold uppercase tracking-widest text-app-text/30">
            © {new Date().getFullYear()} Sreyneath Rom. All rights reserved.
          </div>
          <div className="flex gap-6">
            <p className="text-[11px] font-bold text-app-text/20 uppercase tracking-widest italic">Built for the future</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
