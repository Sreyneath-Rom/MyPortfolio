import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, User, LayoutGrid, Briefcase, Mail, ArrowUpRight
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onSectionSelect?: (id: string) => void;
  theme?: string;
}

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#hero', icon: Home },
  { id: 'about', label: 'About', href: '#about', icon: User },
  { id: 'projects', label: 'Projects', href: '#projects', icon: LayoutGrid },
  { id: 'experience', label: 'Experience', href: '#experience', icon: Briefcase },
  { id: 'contact', label: 'Contact', href: '#contact', icon: Mail },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionSelect }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const updateScrollState = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 25);
          const scrollTop = document.documentElement.scrollTop;
          const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string, href: string) => {
    e.preventDefault();
    onSectionSelect?.(id);
    const element = document.getElementById(id);
    if (element) {
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const headerOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      window.location.hash = href;
    }
  };

  const currentActiveId = activeSection || 'hero';
  const springTransition = {
    type: 'spring' as const,
    stiffness: 380,
    damping: 30,
    mass: 0.6,
  };

  return (
    <>
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 h-[2.5px] w-full overflow-hidden bg-app-text/5 pointer-events-none z-50">
        <motion.div
          className="h-full bg-brand-primary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* TOP HEADER */}
      <header className="fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out pointer-events-none">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-3 sm:pt-4">
          <nav
            className={`
              flex items-center justify-between
              px-3.5 py-2 sm:px-5 sm:py-2.5 md:py-2 md:px-6
              rounded-2xl md:rounded-full
              pointer-events-auto
              transition-all duration-500 ease-out
              ${isScrolled 
                ? 'neu-card-sm rounded-full! shadow-xl backdrop-blur-xl bg-app-bg/90 border border-app-text/10' 
                : 'bg-transparent border border-transparent'
              }
            `}
          >
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, 'hero', '#hero')}
              className="flex items-center gap-2.5 text-app-text group cursor-pointer shrink-0"
            >
              <motion.span 
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full neu-circle-btn text-brand-primary font-black text-sm sm:text-base shadow-md"
              >
                R
              </motion.span>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base md:text-lg font-display font-bold tracking-tight text-app-text leading-tight group-hover:text-brand-primary transition-colors duration-300">
                  ROM<span className="text-brand-primary">.SREYNEATH</span>
                </span>
                <span className="hidden lg:inline-block text-[9px] uppercase font-bold tracking-widest text-app-text/45">
                  Frontend Developer
                </span>
              </div>
            </a>

            {/* Desktop Capsule Dock */}
            <div className="hidden md:flex items-center justify-center">
              <motion.div 
                layout
                transition={springTransition}
                className="flex items-center gap-1 sm:gap-1.5 p-1.5 neu-nav-dock rounded-full"
                role="navigation"
                aria-label="Desktop and Tablet Navigation"
              >
                {NAV_ITEMS.map((item) => {
                  const isActive = currentActiveId === item.id;
                  const Icon = item.icon;
                  return (
                    <motion.a
                      layout
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id, item.href)}
                      transition={springTransition}
                      className={`
                        group relative flex items-center justify-center rounded-full cursor-pointer select-none
                        ${isActive 
                          ? 'px-4 py-2 text-white' 
                          : 'w-10 h-10 text-app-text/55 hover:text-app-text hover:bg-app-text/5'
                        }
                      `}
                      aria-label={item.label}
                    >
                      {isActive && (
                        <>
                          <motion.div
                            layoutId="desktop-capsule-active-glow"
                            className="absolute -inset-0.5 rounded-full bg-brand-primary/30 blur-md pointer-events-none"
                            transition={springTransition}
                          />
                          <motion.div
                            layoutId="desktop-capsule-active-pill"
                            className="absolute inset-0 neu-nav-active-pill rounded-full"
                            transition={springTransition}
                          />
                        </>
                      )}
                      <div className="relative z-10 flex items-center gap-2">
                        <motion.div
                          animate={{ scale: isActive ? 1.05 : 1 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0"
                        >
                          <Icon 
                            size={17} 
                            className={`transition-colors duration-200 ${
                              isActive 
                                ? 'text-white stroke-[2.2]' 
                                : 'text-app-text/60 stroke-[1.8] group-hover:text-app-text'
                            }`} 
                          />
                        </motion.div>
                        <AnimatePresence mode="popLayout" initial={false}>
                          {isActive && (
                            <motion.span
                              key={item.id}
                              initial={{ opacity: 0, x: -6, filter: 'blur(3px)' }}
                              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                              exit={{ opacity: 0, x: 6, filter: 'blur(3px)' }}
                              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                              className="text-xs font-bold text-white tracking-wide whitespace-nowrap overflow-hidden"
                            >
                              {item.label}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                      {!isActive && (
                        <span className="pointer-events-none absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-200 px-2 py-0.5 rounded-md bg-app-text text-app-bg text-[10px] font-bold shadow-lg whitespace-nowrap border border-app-text/10 z-30">
                          {item.label}
                        </span>
                      )}
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full neu-pill text-[10px] font-bold text-emerald-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available</span>
              </span>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact', '#contact')}
                className="neu-btn-purple px-4 sm:px-5 py-2 text-xs font-bold rounded-full text-white transition-all duration-300 cursor-pointer shadow-md inline-flex items-center gap-1.5 active:scale-95"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE BOTTOM DOCK */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden pointer-events-auto select-none">
        <motion.nav 
          layout
          transition={springTransition}
          className="flex items-center gap-1 p-1.5 neu-nav-dock rounded-full"
          aria-label="Mobile Bottom Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentActiveId === item.id;
            const Icon = item.icon;
            return (
              <motion.a
                layout
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id, item.href)}
                transition={springTransition}
                className={`
                  relative flex items-center justify-center rounded-full cursor-pointer select-none
                  ${isActive 
                    ? 'px-3.5 py-2 text-white' 
                    : 'w-10 h-10 text-app-text/55 hover:text-app-text active:scale-95'
                  }
                `}
                aria-label={item.label}
              >
                {isActive && (
                  <>
                    <motion.div
                      layoutId="mobile-capsule-active-glow"
                      className="absolute -inset-0.5 rounded-full bg-brand-primary/25 blur-md pointer-events-none"
                      transition={springTransition}
                    />
                    <motion.div
                      layoutId="mobile-capsule-active-pill"
                      className="absolute inset-0 neu-nav-active-pill rounded-full"
                      transition={springTransition}
                    />
                  </>
                )}
                <div className="relative z-10 flex items-center gap-1.5">
                  <motion.div
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <Icon 
                      size={18} 
                      className={`transition-colors duration-200 ${
                        isActive 
                          ? 'text-white stroke-[2.2]' 
                          : 'text-app-text/60 stroke-[1.8]'
                      }`} 
                    />
                  </motion.div>
                  <AnimatePresence mode="popLayout" initial={false}>
                    {isActive && (
                      <motion.span
                        key={item.id}
                        initial={{ opacity: 0, x: -6, filter: 'blur(3px)' }}
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, x: 6, filter: 'blur(3px)' }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xs font-bold text-white tracking-wide whitespace-nowrap overflow-hidden"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.a>
            );
          })}
        </motion.nav>
      </div>
    </>
  );
};