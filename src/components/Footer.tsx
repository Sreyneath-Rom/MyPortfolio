import React from 'react';
import { 
  Heart, 
  Github, 
  Linkedin, 
  Facebook, 
  Mail, 
  ArrowUp, 
  Code2
} from 'lucide-react';
import { NAV_LINKS, PROJECTS_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const topProjects = PROJECTS_DATA.slice(0, 4);

  return (
    <footer className="relative z-10 pt-16 pb-12 px-4 md:px-8 neu-card rounded-t-[40px]! rounded-b-none! border-x-0 border-b-0 overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-brand-primary/30 to-transparent pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-app-border/40">
          <div className="flex items-center gap-2 text-xs font-bold text-app-text/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for new full-time software engineering roles & design collaborations</span>
          </div>

          <button
            onClick={scrollToTop}
            className="neu-pill px-4 py-2 flex items-center gap-2 text-xs font-bold text-app-text/80 hover:text-brand-primary cursor-pointer transition-all"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <div className="w-6 h-6 rounded-full neu-circle-btn text-brand-primary flex items-center justify-center">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-11 h-11 neu-circle-btn rounded-full flex items-center justify-center text-brand-primary font-black text-lg group-hover:scale-105 transition-transform">
                R
              </div>
              <div>
                <span className="text-xl font-display font-bold tracking-tight text-app-text">
                  ROM<span className="text-brand-primary">.SREYNEATH</span>
                </span>
                <div className="text-[10px] uppercase font-bold tracking-widest text-app-text/40">
                  Frontend Developer & UI/UX Designer
                </div>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-app-text/70 leading-relaxed max-w-sm">
              Crafting high-performance digital experiences with a focus on clean code, responsive architectures, and tactile Neumorphic design systems.
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://github.com/Sreyneath-Rom"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl neu-circle-btn text-app-text hover:text-brand-primary flex items-center justify-center cursor-pointer transition-all"
                aria-label="GitHub profile"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/sreyneath-rom-69b2a5321/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl neu-circle-btn text-app-text hover:text-sky-400 flex items-center justify-center cursor-pointer transition-all"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.facebook.com/flamingo1fly/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl neu-circle-btn text-app-text hover:text-blue-400 flex items-center justify-center cursor-pointer transition-all"
                aria-label="Facebook profile"
              >
                <Facebook size={16} />
              </a>
              <a
                href="mailto:romsreyneath4@gmail.com"
                className="w-9 h-9 rounded-xl neu-circle-btn text-app-text hover:text-emerald-400 flex items-center justify-center cursor-pointer transition-all"
                aria-label="Send direct email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-app-text/40">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-app-text/70">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-brand-primary transition-colors flex items-center gap-2 py-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-primary/50" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-app-text/40">
              Featured Systems
            </h4>
            <ul className="space-y-2.5 text-xs text-app-text/70">
              {topProjects.map((p) => (
                <li key={p.id}>
                  <a
                    href="#projects"
                    className="hover:text-brand-primary transition-colors flex items-center justify-between group"
                  >
                    <span className="truncate pr-2">{p.title}</span>
                    <span className="text-[10px] text-app-text/40 font-mono group-hover:text-brand-primary shrink-0">
                      {p.category.split(' ')[0]}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-app-text/40">
              Engineering Stack
            </h4>
            
            <div className="p-4 rounded-2xl neu-inset space-y-3">
              <div className="text-xs font-bold text-app-text flex items-center gap-2">
                <Code2 size={16} className="text-brand-primary" />
                Modern Web Standards
              </div>
              <p className="text-[11px] text-app-text/70 leading-relaxed">
                Built with React 19, TypeScript, Vite, Tailwind CSS, Motion animations, and custom dual-shadow Neumorphic tokens.
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {['React 19', 'TypeScript', 'Tailwind', 'Motion'].map(t => (
                  <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded-md neu-pill text-app-text/60">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-app-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-app-text/50">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Rom Sreyneath.</span>
            <span>All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};