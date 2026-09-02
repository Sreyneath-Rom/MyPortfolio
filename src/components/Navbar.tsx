import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Github, Linkedin, Facebook, Mail } from 'lucide-react';
import { NAV_LINKS } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollProgress((scrollTop / scrollHeight) * 100);
    };

    window.addEventListener('scroll', updateScrollState);
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed inset-x-0 top-0 z-50 mb-4">
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 h-1 w-full overflow-hidden bg-white/5 pointer-events-none">
        <motion.div
          className="h-full bg-brand-primary"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 md:px-6">
        <nav
          className={`
            flex items-center justify-between
            px-6 py-3
            rounded-2xl md:rounded-full
            transition-all duration-500
            ${isScrolled ? 'glass-sheet shadow-2xl scale-[1.01]' : 'bg-transparent'}
          `}
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-app-text group"
          >
            <motion.span 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-sm font-black text-white"
            >
              S
            </motion.span>

            <span className="hidden text-xl font-bold tracking-tight sm:inline">
              SREYNEATH
              <span className="text-brand-primary">
                .ROM
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center rounded-full border border-white/5 bg-white/5 p-1 backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`
                      relative px-5 py-2
                      text-[10px] font-bold uppercase tracking-[0.15em]
                      transition-all
                      ${isActive ? 'text-white' : 'text-app-text/40 hover:text-app-text'}
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute inset-0 rounded-full bg-brand-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </motion.a>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden lg:block glass-pill hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Mobile Actions Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleMenu}
              className="relative z-50 w-11 h-11 flex flex-col items-center justify-center gap-1.5 focus:outline-none group"
              aria-label="Toggle Menu"
            >
              <div className={`w-6 h-0.5 bg-app-text rounded-full transition-all duration-300 transform origin-center ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-app-text rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'}`} />
              <div className={`w-6 h-0.5 bg-app-text rounded-full transition-all duration-300 transform origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 w-full h-screen bg-app-bg/95 backdrop-blur-2xl p-8 md:hidden z-40 flex flex-col pt-24 overflow-hidden"
          >
            {/* Background Glow */}
            <motion.div 
               animate={{ 
                 scale: [1, 1.3, 1], 
                 rotate: [0, 180, 0],
                 opacity: [0.1, 0.2, 0.1]
               }}
               transition={{ duration: 15, repeat: Infinity }}
               className="absolute top-1/4 -right-32 w-96 h-96 bg-brand-primary rounded-full blur-[120px] pointer-events-none" 
            />
            
            <div className="flex flex-col h-full relative z-10">
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="text-4xl font-display font-black py-4 flex items-center justify-between text-app-text transition-all active:translate-x-2">
                       <span className="relative">
                         {link.name}
                         <span className="absolute -bottom-1 left-0 w-0 h-1 bg-brand-primary transition-all duration-300 group-active:w-full" />
                       </span>
                       <ChevronRight size={32} className="text-brand-primary/40 group-active:text-brand-primary" />
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-12 space-y-8">
                <p className="text-[10px] font-bold text-app-text/30 uppercase tracking-[0.3em]">Connect With Me</p>
                <div className="flex gap-4">
                  {[
                    { icon: <Github size={20} />, href: "https://github.com/Sreyneath-Rom" },
                    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/sreyneath-rom-69b2a5321/" },
                    { icon: <Facebook size={20} />, href: "https://www.facebook.com/neath1fly" },
                    { icon: <Mail size={20} />, href: "mailto:romsreyneath4@gmail.com" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-2xl glass-pill flex items-center justify-center text-app-text/60 border-white/5 active:bg-brand-primary active:text-white"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-secondary/10 blur-[80px] rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
