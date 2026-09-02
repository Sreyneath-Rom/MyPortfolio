import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Typed from 'typed.js';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  User, 
  Briefcase, 
  GraduationCap, 
  ChevronRight,
  Menu,
  X,
  MapPin,
  Download,
  Sun,
  Moon,
  Coffee,
  Palette,
  Facebook,
  Clock,
  Target,
  Award,
  Heart,
  Zap,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

// --- Types ---
type Theme = 'dark' | 'light' | 'midnight' | 'nord';
interface Project {
  id: number;
  title: string;
  category: 'Work Experience' | 'School Project' | 'Personal Project';
  shortDescription: string;
  description: string;
  problemSolved: string;
  roleDescription: string;
  impact: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
}

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'Work Experience' | 'School Project' | 'Internship' | 'Personal Project';
}

// --- Components ---

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-neutral-950/40 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="glass-card w-full max-w-4xl max-h-[92vh] overflow-y-auto relative shadow-[0_0_50px_rgba(0,0,0,0.3)] group"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-3 md:p-2 bg-app-bg/50 backdrop-blur-md md:bg-transparent border border-white/10 md:border-none hover:bg-app-text/10 rounded-full transition-colors z-10 text-app-text min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X size={24} className="md:w-5 md:h-5" />
        </button>

        <div className="aspect-video w-full overflow-hidden border-b border-card-border">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-5 sm:p-7 md:p-10 lg:p-12">
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-6">
            {project.tech.map(t => (
              <span key={t} className="text-[10px] md:text-xs font-bold px-2.5 py-1 md:px-3 md:py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-lg uppercase tracking-wider text-brand-primary">
                {t}
              </span>
            ))}
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-black mb-4 md:mb-6 tracking-tighter text-app-text leading-[1.1]">{project.title}</h3>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-10 text-base">
            <div className="md:col-span-2 space-y-6 md:space-y-10">
              <div>
                <h4 className="text-sm md:text-base text-app-text font-bold mb-2 md:mb-3 flex items-center gap-3">
                  <User size={18} className="text-brand-primary" /> My Role
                </h4>
                <p className="text-app-text/70 leading-relaxed font-normal text-base md:text-lg">{project.roleDescription}</p>
              </div>

              <div>
                <h4 className="text-sm md:text-base text-app-text font-bold mb-2 md:mb-3 flex items-center gap-3">
                  <Cpu size={18} className="text-brand-primary" /> The Problem
                </h4>
                <p className="text-app-text/70 leading-relaxed font-normal text-base md:text-lg">{project.problemSolved}</p>
              </div>

              <div>
                <h4 className="text-sm md:text-base text-app-text font-bold mb-2 md:mb-3 flex items-center gap-3">
                  <Briefcase size={18} className="text-brand-primary" /> The Solution & Impact
                </h4>
                <p className="text-app-text/70 leading-relaxed font-normal text-base md:text-lg">{project.impact}</p>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="p-4 md:p-5 bg-white/5 rounded-2xl border border-card-border">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-app-text/40 mb-2 md:mb-3">Category</h4>
                <p className="text-app-text font-medium text-base md:text-lg">{project.category}</p>
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                <a href={project.link} className="flex items-center justify-center gap-2 md:gap-3 px-6 py-3.5 md:px-8 md:py-4 min-h-[48px] bg-brand-primary text-white rounded-2xl font-bold hover:opacity-90 transition-all shadow-xl shadow-brand-primary/20 text-base md:text-lg">
                  Live Demo <ExternalLink size={18} />
                </a>
                <a href={project.github} className="flex items-center justify-center gap-2 md:gap-3 px-6 py-3.5 md:px-8 md:py-4 min-h-[48px] glass-card hover:bg-app-text/10 transition-all font-bold text-app-text text-base md:text-lg">
                  View Source <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
// ================================
// THEMES
// ================================

const THEMES = [
  {
    id: 'dark',
    name: 'Dark',
    icon: <Moon size={16} />,
    color: 'bg-[#0b0b0c]',
  },
  {
    id: 'light',
    name: 'Light',
    icon: <Sun size={16} />,
    color: 'bg-[#f5f7fb]',
  },
  {
    id: 'midnight',
    name: 'Midnight',
    icon: <Palette size={16} />,
    color: 'bg-[#020617]',
  },
  {
    id: 'nord',
    name: 'Nord',
    icon: <Palette size={16} />,
    color: 'bg-[#2e3440]',
  },
] as const;


// ================================
// NAVIGATION LINKS
// ================================

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];


// ================================
// NAVBAR COMPONENT
// ================================

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // ================================
  // EFFECTS
  // ================================

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollTop =
        document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollProgress(
        (scrollTop / scrollHeight) * 100
      );
    };

    window.addEventListener('scroll', updateScrollState);

    return () => {
      window.removeEventListener(
        'scroll',
        updateScrollState
      );
    };
  }, []);

  // ================================
  // HELPERS
  // ================================

  const toggleMenu = () =>
    setIsMenuOpen((prev) => !prev);

  // ================================
  // RENDER
  // ================================

  return (
    <header className="fixed inset-x-0 top-0 z-50 mb-4 ">
      {/* Progress Bar */}
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
            ${
              isScrolled
                ? 'glass-sheet shadow-2xl scale-[1.01]'
                : 'bg-transparent'
            }
          `}
        >
          {/* Logo */}
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

          {/* Mobile Actions */}
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 w-full h-screen bg-app-bg/95 backdrop-blur-2xl p-8 md:hidden z-40 flex flex-col pt-24 overflow-hidden"
          >
            {/* Background Decor */}
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

            {/* Bottom decoration */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-secondary/10 blur-[80px] rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const FloatingThemeSwitcher = ({ currentTheme, onThemeChange }: { currentTheme: Theme; onThemeChange: (t: Theme) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentThemeIcon = THEMES.find(t => t.id === currentTheme)?.icon;

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col gap-2 p-2 glass-card rounded-3xl shadow-2xl border-white/10 min-w-40 backdrop-blur-3xl"
          >
            <p className="text-[9px] font-bold text-app-text/30 uppercase tracking-[0.2em] px-3 pt-3 pb-1">Appearance</p>
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
                className={`
                  flex w-full items-center gap-3
                  rounded-2xl px-4 py-2.5
                  text-xs font-bold transition-all
                  ${currentTheme === theme.id ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'text-app-text hover:bg-white/5'}
                `}
              >
                <div className={`h-4 w-4 rounded-full border border-white/10 ${theme.color}`} />
                {theme.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-3xl glass-sheet shadow-2xl border-white/10 transition-all duration-500 overflow-hidden relative group ${isOpen ? 'rotate-90 bg-brand-primary text-white shadow-brand-primary/20' : 'text-app-text hover:bg-brand-primary/5'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <motion.div
           animate={{ rotate: isOpen ? 0 : 0 }}
           className="relative z-10"
        >
          {currentThemeIcon}
        </motion.div>
      </motion.button>
    </div>
  );
};

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Welcome to My Portfolio',
        'Explore My IT Journey',
        'My Name is Sreyneath'
        
      ],
      typeSpeed: 70,
      backSpeed: 30,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="relative pt-16 pb-20 px-6 overflow-hidden">
      {/* Background Glows for Liquid Glass Effect */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-brand-primary/30 blur-[130px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [0, -80, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-brand-secondary/20 blur-[150px] rounded-full pointer-events-none" 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.6 // Delay to let background glows settle
              }
            }
          }}
          className="lg:w-2/3 text-center lg:text-left"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-brand-primary mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            Open for Opportunities
          </motion.div>
          
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
            }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[1.1] md:leading-[1.05] mb-6 text-app-text min-h-[3.2em] md:min-h-[2.1em] text-balance"
          >
            <span ref={el}></span>
          </motion.h1>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
            }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-brand-primary/40 relative overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]" />
              View My Work <ChevronRight size={18} />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 glass-card font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-app-text"
            >
              Download Resume <Download size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.4 }}
          className="lg:w-2/5 flex justify-center mt-12 lg:mt-0 relative"
        >
          <div className="relative group">
            {/* Decorative Background Elements */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.15, 0.3, 0.15]
              }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute inset-0 w-72 h-72 md:w-[450px] md:h-[450px] bg-brand-primary/40 rounded-full blur-[100px] -translate-x-12 md:-translate-x-20 -translate-y-12 md:-translate-y-20 pointer-events-none" 
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
                opacity: [0.1, 0.25, 0.1]
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute inset-0 w-72 h-72 md:w-[400px] md:h-[400px] bg-brand-secondary/30 rounded-full blur-[100px] translate-x-12 md:translate-x-20 translate-y-12 md:translate-y-20 pointer-events-none" 
            />
            
            {/* Interactive Floating Tech Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:-top-8 md:-right-8 z-20 glass-pill p-3 md:p-4 shadow-2xl border-white/20 group-hover:border-brand-primary/50 transition-colors"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                <Code2 size={24} className="text-brand-primary" />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-8 md:-bottom-12 md:-left-12 z-20 glass-card p-4 md:p-5 rounded-3xl shadow-2xl border-white/20 group-hover:border-brand-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-secondary/10 rounded-full flex items-center justify-center">
                  <Palette size={20} className="text-brand-secondary" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-app-text opacity-40">Creative</p>
                  <p className="text-xs md:text-sm font-bold text-app-text text-sky-600">Web Designer</p>
                </div>
              </div>
            </motion.div>

            {/* Main Profile Container - Liquid Glass Frame */}
            <div className="relative w-64 h-64 md:w-[380px] md:h-[380px] rounded-[48px] md:rounded-[64px] p-2 md:p-3 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] backdrop-blur-md group-hover:scale-[1.02] transition-transform duration-700">
              <div className="relative w-full h-full rounded-[40px] md:rounded-[54px] overflow-hidden border border-white/10 shadow-inner">
                
                  <img 
                    src="/IMG_1503.PNG" 
                    alt="Sreyneath Rom profile" 
                    className="w-full h-full object-cover grayscale-[10%] contrast-110"
                    referrerPolicy="no-referrer"
                  />
                
                
                {/* Advanced Light/Glass Effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-transparent to-white/10 pointer-events-none transition-opacity duration-700 group-hover:opacity-60" />
                
                <motion.div 
                  animate={{ 
                    top: ['-100%', '200%'],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none opacity-50"
                />
              </div>
            </div>

            {/* Experience Floating Tag */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute top-1/3 -right-8 md:-right-16 glass-pill px-4 py-3 shadow-2xl border-white/10 hidden md:flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white scale-90">
                <Heart size={14} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-app-text/40 uppercase tracking-tighter">Passion</p>
                <p className="text-xs font-black text-brand-primary uppercase">Code & Design</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

     
    </section>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | Project['category']>('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "High School Management System",
      category: "Personal Project",
      shortDescription: "A modern role-based High School Management System frontend built for Varin High School.",
      description: "A modern role-based High School Management System frontend built for Varin High School. The application provides separate workflows for Administrators, Teachers, and Students, with centralized authentication, school configuration, academic management, attendance, schedules, homework, quizzes, grades, reports, and communication.",
      problemSolved: "Varin High School required an integrated, intuitive, and modern digital platform to replace fragmented paper systems and manual tracking for administrative operations, class schedules, gradebook calculation, student attendance, quizzes, and faculty-student communication.",
      roleDescription: "Sole UX/UI Designer & Full Frontend Developer. Handled the entire UX/UI design process (user flows, wireframes, and design system in Figma) and developed the full responsive frontend architecture with role-based routing and centralized state management.",
      impact: "Successfully designed and engineered separate role-tailored dashboards for Admins, Teachers, and Students with real-time academic workflows, attendance logs, quiz & homework management, and comprehensive reporting.",
      tech: [
        "React 19",
        "TypeScript",
        "Vite",
        "Tailwind CSS 4",
        "React Router",
        "Context API",
        "Redux Toolkit",
        "Lucide React",
        "Fetch API",
        "Express.js",
        "MySQL / MariaDB"
      ],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
      link: "https://github.com/Sreyneath-Rom/School-Management",
      github: "https://github.com/Sreyneath-Rom/School-Management"
    },
    {
      id: 2,
      title: "Cakery Charm",
      category: "Personal Project",
      shortDescription: "A modern artisan bakery and cafe app built with Flutter, featuring tactile Neumorphic UI design.",
      description: "A modern artisan bakery and cafe application built entirely with Flutter, featuring interactive product menus, combo showcases, courier delivery ordering, and a tactile, soft Neumorphic design system. Includes dual-axis soft light & shadow elevations, Hero Combo Carousel, filterable Artisan Product Catalog across Bread, Cake, Sandwich, and Drink with instant search, and real-time interactive cart and delivery checkout.",
      problemSolved: "Traditional bakery ordering apps often feel flat and generic, lacking the warm, tactile sensory craftsmanship and delight of visiting an authentic artisan bakery.",
      roleDescription: "Sole UX/UI Designer & Flutter Developer. Designed the full soft Neumorphic design system (NeuTheme) with custom elevation math, and developed the Flutter application with Provider state management, interactive cart drawer, combo carousel, and delivery checkout workflows.",
      impact: "Engineered a responsive, tactile cross-platform Flutter application featuring custom Neumorphic widgets, dynamic multi-category filtering, real-time subtotal calculations, and Phnom Penh delivery ordering.",
      tech: [
        "Flutter",
        "Dart",
        "Neumorphic UI",
        "Provider",
        "Mobile App",
        "UI/UX Design",
        "Figma"
      ],
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
      link: "https://github.com/Sreyneath-Rom",
      github: "https://github.com/Sreyneath-Rom"
    },
    {
      id: 3,
      title: "Media Studio Pro (ឧបករណ៍មេឌៀកម្រិតខ្ពស់)",
      category: "Personal Project",
      shortDescription: "A modern multimedia suite for downloading, extracting, editing, and processing video, audio, and image content.",
      description: "A comprehensive multimedia suite available both as a high-performance Web Application (React 18 + TypeScript + Tailwind CSS) and as a standalone Desktop GUI (Python Tkinter + yt-dlp + OpenCV + pydub). Features YouTube/TikTok/Instagram/Facebook 4K downloading, playlist batch processing, pure audio stream extraction with bitrate control, 100% browser-native AI background removal & matting with dual-pane comparison, precision video frame micro-stepping (-1s, -0.1s, +0.1s, +1s), interactive audio waveform visualizer/trimmer, real-time activity terminal logs, and complete bilingual localization in English and Khmer (ភាសាខ្មែរ).",
      problemSolved: "Content creators and media professionals frequently juggle separate, ad-heavy, privacy-invasive online tools for downloading, audio slicing, frame snapshotting, and background removal.",
      roleDescription: "Full-Stack Developer & UX/UI Designer. Designed the streamlined bilingual studio interface with dark/light themes, built browser-native Web Audio/Canvas processing engines and AI matting, and authored the Python desktop application with yt-dlp, OpenCV, and pydub pipelines.",
      impact: "Unified 10 essential creative media tools into a single private, zero-server-upload application with bilingual English/Khmer support and cross-platform web & desktop workflows.",
      tech: [
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Python",
        "Tkinter",
        "yt-dlp",
        "OpenCV",
        "pydub",
        "Web Audio API",
        "HTML5 Canvas",
        "Bilingual (Khmer/EN)"
      ],
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
      link: "https://github.com/Sreyneath-Rom",
      github: "https://github.com/Sreyneath-Rom"
    },
    {
      id: 4,
      title: "Farm Control Mobile App (VC2)",
      category: "School Project",
      shortDescription: "Smart farm monitoring & automation mobile application built with Expo and React Native.",
      description: "A modern mobile application for managing and controlling smart agricultural farm systems (Farm Control VC2). Built with Expo and Expo Router for file-based routing, React Native Elements for UI components, and modern Vector Icons for intuitive sensor and hardware controls.",
      problemSolved: "Agricultural operators and smart farms needed an accessible, centralized mobile interface to monitor environmental metrics and control automated farm hardware in real-time.",
      roleDescription: "Mobile Developer & UI Designer. Architected the file-based Expo Router system, implemented responsive UI components with React Native Elements, integrated vector icon sets, and established testing workflows with Expo Go, Android Emulator, and iOS Simulator.",
      impact: "Delivered a lightweight, reliable mobile application for smart farm telemetry and hardware automation with modular architecture and clean UX.",
      tech: [
        "React Native",
        "Expo",
        "Expo Router",
        "TypeScript",
        "React Native Elements",
        "Vector Icons",
        "Mobile App"
      ],
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
      link: "https://github.com/Sreyneath-Rom",
      github: "https://github.com/Sreyneath-Rom"
    },
    {
      id: 5,
      title: "Pos System",
      category: "School Project",
      shortDescription: "A comprehensive point-of-sale system built as a capstone school project.",
      description: "Monitored server performance and resolved infrastructure issues. Configured environments for development, testing, and production. Designed responsive UIs with HTML, CSS, JavaScript and Bootstrap 5.",
      problemSolved: "Businesses needed a reliable way to manage transactions and inventory in real-time.",
      roleDescription: "DevOps & Frontend. Fetched and processed data using PHP and a connected database while ensuring server stability.",
      impact: "Developed a fully functional POS environment used for school demonstrations and small business simulations.",
      tech: ["PHP", "MySQL", "JavaScript", "Bootstrap 5", "DevOps"],
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
      link: "https://github.com/Sreyneath-Rom",
      github: "https://github.com/Sreyneath-Rom"
    },
    {
      id: 6,
      title: "Inventory Management App",
      category: "School Project",
      shortDescription: "Modernizing internal workflows with real-time tracking.",
      description: "Designed responsive UIs; created wireframes and mockups using Figma. Collaborated with developers to ensure design consistency. Handled data interactions with JavaScript.",
      roleDescription: "Lead Designer. Focused on auditing legacy systems and redesigning the core dashboard for better accessibility.",
      problemSolved: "Manual inventory tracking was slow and error-prone.",
      impact: "Improved tracking efficiency and reduced data entry errors by 40% through intuitive UX.",
      tech: ["Figma", "UI/UX", "JavaScript", "HTML/CSS"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      link: "https://github.com/Sreyneath-Rom",
      github: "https://github.com/Sreyneath-Rom"
    },
    {
      id: 7,
      title: "Video Download Tool",
      category: "School Project",
      shortDescription: "Efficient video downloading tool with custom configuration.",
      description: "Led a team of 3 in building a video downloader tool. Defined workflow, delegated tasks and integrated JSON-based configuration.",
      roleDescription: "Team Leader. Managed project deadlines and technical integration of various downloader APIs.",
      problemSolved: "Users needed a centralized, simple interface to download educational videos for offline viewing.",
      impact: "Successfully delivered a cross-platform tool used by students for offline study.",
      tech: ["Team Leadership", "JSON", "JavaScript", "Project Management"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      link: "https://github.com/Sreyneath-Rom",
      github: "https://github.com/Sreyneath-Rom"
    },
    {
      id: 8,
      title: "Bakery Shop Website",
      category: "School Project",
      shortDescription: "A delightful responsive website for a local bakery.",
      description: "Designed a responsive bakery website using SASS and consistent visual patterns to highlight product quality.",
      roleDescription: "Full Designer. Created the visual identity, color palette, and layout structure.",
      problemSolved: "The bakery lacked an online presence to showcase their daily fresh products.",
      impact: "Increased brand awareness and provided customers with a digital menu.",
      tech: ["SASS", "Responsive Design", "UI Design", "Figma"],
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      link: "https://github.com/Sreyneath-Rom",
      github: "https://github.com/Sreyneath-Rom"
    },
    {
      id: 9,
      title: "Brochure Design",
      category: "School Project",
      shortDescription: "Marketing brochures that communicate brand value clearly.",
      description: "Created marketing brochures using Figma and applied branding guidelines to ensure consistent messaging.",
      roleDescription: "Graphic/UI Designer. Translated complex service offerings into readable and attractive brochure layouts.",
      problemSolved: "Need for high-quality marketing materials for service advertising.",
      impact: "Produced versatile marketing assets used across multiple campaigns.",
      tech: ["Figma", "Branding", "Layout Design", "Visual Arts"],
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      link: "https://github.com/Sreyneath-Rom",
      github: "https://github.com/Sreyneath-Rom"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const ProjectSkeleton = () => (
    <div className="glass-card overflow-hidden animate-pulse bg-app-bg border-card-border h-full">
      <div className="aspect-video bg-app-text/10" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-app-text/10 rounded-lg w-3/4" />
        <div className="space-y-2">
          <div className="h-3 bg-app-text/5 rounded w-full" />
          <div className="h-3 bg-app-text/5 rounded w-5/6" />
        </div>
        <div className="flex gap-2 pt-2">
          <div className="h-4 w-14 bg-app-text/5 rounded-full" />
          <div className="h-4 w-14 bg-app-text/5 rounded-full" />
          <div className="h-4 w-14 bg-app-text/5 rounded-full" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 text-center md:text-left">
          <div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter text-app-text leading-[1.1] md:leading-none">Main Projects</h3>
          </div>
          
          <div className="hidden md:flex items-center gap-3 text-[10px] font-bold text-app-text/30 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <TrendingUp size={14} className="text-brand-primary" />
            Showing {filteredProjects.length} Projects
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 mb-12 md:mb-16">
          <div className="relative flex items-center p-1 md:p-1.5 bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/5 w-full md:w-auto">
            {['All', 'Personal Project', 'Work Experience', 'School Project'].map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter as any)}
                  className={`
                    relative px-3 md:px-8 py-3 md:py-4 min-h-[44px] md:min-h-[48px] rounded-lg md:rounded-xl text-[9px] md:text-xs font-black uppercase tracking-[0.1em] md:tracking-[0.2em] transition-all whitespace-nowrap flex items-center justify-center flex-1 md:flex-none
                    ${isActive ? 'text-white' : 'text-app-text/40 hover:text-app-text'}
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-project-filter"
                      className="absolute inset-0 bg-brand-primary rounded-lg md:rounded-xl shadow-lg shadow-brand-primary/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{filter}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="skeletons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <ProjectSkeleton key={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="projects-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, i) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: i * 0.1,
                        ease: [0.23, 1, 0.32, 1]
                      }}
                      whileHover={{ y: -10 }}
                      onClick={() => setSelectedProject(project)}
                      className="group glass-card overflow-hidden hover:border-brand-primary/40 transition-all cursor-pointer relative shadow-lg hover:shadow-2xl hover:shadow-brand-primary/10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                          <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-sm shadow-2xl">
                            Explore <ChevronRight size={16} />
                          </div>
                        </div>
                        
                        {/* Project Category Badge */}
                        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 md:p-8 relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                           <div className="w-1 h-1 rounded-full bg-brand-primary" />
                           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary/60">{project.category}</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-display font-black mb-3 group-hover:text-brand-primary transition-colors text-app-text tracking-tighter leading-tight">
                          {project.title}
                        </h4>
                        <p className="text-app-text/50 text-xs md:text-sm mb-6 md:mb-8 line-clamp-2 leading-relaxed font-normal">
                          {project.shortDescription}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((t, idx) => (
                            <motion.span 
                              key={idx}
                              className="text-[9px] font-bold px-2 py-1 bg-white/5 border border-white/5 rounded-md uppercase tracking-wider text-app-text/30 group-hover:border-brand-primary/20 group-hover:text-brand-primary/50 transition-colors"
                            >
                              {t}
                            </motion.span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="text-[9px] font-bold px-2 py-1 text-app-text/20">+{project.tech.length - 3}</span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};
const About = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Sreyneath-Rom',
      bgClass: 'bg-neutral-800',
      icon: <Github size={24} />,
    },
    {
      name: 'Email',
      url: 'mailto:romsreyneath4@gmail.com',
      bgClass: 'bg-rose-600',
      icon: <Mail size={24} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sreyneath-rom-69b2a5321/',
      bgClass: 'bg-blue-700',
      icon: <Linkedin size={24} />,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/neath1fly',
      bgClass: 'bg-blue-600',
      icon: <Facebook size={24} />,
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-app-bg relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0  bg-brand-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0  bg-brand-secondary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-display font-black md:text-5xl tracking-tight text-app-text mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-12 mb-12 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start relative z-10">
           

            {/* Bio Content */}
            <div className="flex-1 space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-4xl md:text-5xl font-display font-black text-app-text mb-4 leading-tight">
                  I'm <span className="text-gradient">Sreyneath Rom</span>
                </h3>
                <p className="text-lg md:text-xl text-app-text/70 font-medium leading-relaxed max-w-2xl drop-shadow-sm">
                  An aspiring IT professional and UX/UI designer dedicated to crafting seamless digital journeys. Based in Cambodia, I blend creative vision with technical precision.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="p-6 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl relative overflow-hidden group/mission">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/mission:opacity-20 transition-opacity">
                  <Target size={48} className="text-brand-primary" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-2">My Mission</h4>
                <p className="text-sm md:text-base text-app-text/80 leading-relaxed italic">
                  "To build technology that doesn't just work, but delights. I strive to bridge the gap between complex backend systems and human-centric design."
                </p>
              </div>

        {/* Bento Grid Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: <MapPin size={18} />, label: "Location", value: "Phnom Penh, Cambodia", color: "text-brand-primary" },
                  { icon: <GraduationCap size={18} />, label: "Background", value: "Born in Siem Reap", color: "text-indigo-400" },
                  { icon: <Award size={18} />, label: "Passion", value: "Inclusive Design", color: "text-rose-400" },
                ].map((item, i) => (
                  <div key={i} className="p-4 glass-card border-white/5 flex items-center gap-4 group/item hover:bg-white/10 transition-all duration-300">
                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 ${item.color} group-hover/item:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-app-text/40">{item.label}</p>
                      <p className="text-xs sm:text-sm font-semibold text-app-text/80">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Values */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { label: "Empathy", desc: "User-first", icon: <Heart size={16} className="text-rose-400" /> },
                  { label: "Precision", desc: "Clean code", icon: <Zap size={16} className="text-amber-400" /> },
                  { label: "Integrity", desc: "Solid work", icon: <ShieldCheck size={16} className="text-blue-400" /> },
                  { label: "Growth", desc: "Constant", icon: <TrendingUp size={16} className="text-emerald-400" /> }
                ].map((val, i) => (
                  <div key={i} className="text-center p-4 rounded-xl border border-white/5 bg-white/5 group hover:bg-white/10 transition-colors">
                    <div className="mb-2 flex justify-center group-hover:scale-110 transition-transform">
                      {val.icon}
                    </div>
                    <p className="text-xs font-bold text-app-text">{val.label}</p>
                    <p className="text-[10px] text-app-text/40">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        
        
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "UX-UI Designer",
      company: "Caltech Innovation",
      period: "Mar 2026 - May 2026",
      type: "Work Experience",
      description: "Designed intuitive interfaces for web/mobile, created wireframes and prototypes using Figma, and conducted usability testing."
    },
    {
      id: 2,
      role: "Software Specialist Internship",
      company: "Hong Hea Technology",
      period: "Jul 2025 - Jan 2026",
      type: "Internship",
      description: "Developed applications using Sunmi (MaxProgram), improved UI designs for the Heawork System, and performed system testing."
    },
    {
      id: 3,
      role: "DevOps",
      company: "Pos System",
      period: "Feb 10, 2025 - May 02, 2025",
      type: "School Project",
      description: "Monitored server performance and resolved infrastructure issues. Configured environments for development, testing, and production. Designed responsive UIs with HTML/CSS/JS/Bootstrap 5."
    },
    {
      id: 4,
      role: "Designer",
      company: "Inventory Management App",
      period: "Jan 14, 2025 - Jan 29, 2025",
      type: "School Project",
      description: "Designed responsive UIs; created wireframes and mockups using Figma. Collaborated with developers to ensure design consistency. Handled data interactions."
    },
    {
      id: 5,
      role: "Team Leader",
      company: "Video Download Tool",
      period: "Nov 18, 2024 - Nov 28, 2024",
      type: "School Project",
      description: "Led a team of 3 in building a video downloader tool. Defined workflow, delegated tasks and integrated JSON-based configuration."
    },
    {
      id: 6,
      role: "Designer",
      company: "Bakery Shop Website",
      period: "Oct 21, 2024 - Nov 5, 2024",
      type: "School Project",
      description: "Designed a responsive bakery website using SASS and consistent visual patterns."
    },
    {
      id: 7,
      role: "Designer",
      company: "Brochure Design",
      period: "Jun 18, 2024 - Aug 16, 2024",
      type: "School Project",
      description: "Created marketing brochures using Figma and applied branding guidelines."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-app-bg">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-primary/5 via-transparent to-brand-secondary/5 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 relative z-10">
        <div className="lg:col-span-2">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Journey</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 md:mb-8">Work Experience</h3>
          <p className="text-app-text/70 text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-md">
            Continuously evolving through real-world projects and collaboration with diverse teams in technology and design.
          </p>
          <div className="p-6 md:p-8 glass-card">
            <h4 className="text-base md:text-lg font-display font-bold flex items-center gap-2 mb-4 md:mb-5"><Cpu size={18} className="text-brand-primary" /> Technical Skills</h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-3 mb-8 md:mb-10">
              {[
                'React / React 19',
                'TypeScript',
                'Flutter / Dart',
                'React Native / Expo',
                'Tailwind CSS',
                'JavaScript (ES6+)',
                'HTML5 / CSS3 / SASS',
                'Node.js / Express.js',
                'PHP / Laravel',
                'MySQL / MariaDB',
                'Python / Tkinter',
                'Web Audio & Canvas API'
              ].map(s => (
                <div key={s} className="flex items-center gap-2 text-xs md:text-sm text-app-text/70">
                  <div className="w-1 h-1 rounded-full bg-brand-primary shrink-0" />
                  {s}
                </div>
              ))}
            </div>
            
            <h4 className="text-base md:text-lg font-display font-bold flex items-center gap-2 mb-4 md:mb-5"><Code2 size={18} className="text-brand-primary" /> Tools & Platforms</h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-3 mb-8 md:mb-10">
              {[
                'Figma (UI/UX)',
                'CapCut',
                'AI & Generative Tools',
                'Git / GitHub',
                'Vite / Webpack',
                'Postman',
                'Linux (Ubuntu)',
                'Firebase',
                'Jira / ClickUp',
                'Power BI'
              ].map(s => (
                <div key={s} className="flex items-center gap-2 text-xs md:text-sm text-app-text/70">
                  <div className="w-1 h-1 rounded-full bg-brand-secondary shrink-0" />
                  {s}
                </div>
              ))}
            </div>

            <h4 className="text-sm md:text-base font-bold flex items-center gap-2 mb-4 md:mb-5"><GraduationCap size={18} className="text-brand-primary" /> Workshops</h4>
            <div className="grid grid-cols-1 gap-4 mb-8 md:mb-10">
              {[
                { name: 'Product Owner', detail: 'Jan 2025' },
                { name: 'UX/UI Design', detail: 'Feb - Mar 2025' },
                { name: 'Data Analytics', detail: 'Mar 2025' },
                { name: 'Project Management', detail: 'Feb 2025' }
              ].map(s => (
                <div key={s.name} className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-app-text">
                    <div className="w-1 h-1 rounded-full bg-brand-primary shrink-0" />
                    {s.name}
                  </div>
                  <div className="text-[10px] text-app-text/40 ml-3 uppercase tracking-wider">{s.detail}</div>
                </div>
              ))}
            </div>

            <h4 className="text-sm md:text-base font-bold flex items-center gap-2 mb-4"><User size={18} className="text-brand-primary" /> Languages</h4>
            <div className="flex gap-6 md:gap-8">
              <div className="text-xs md:text-sm text-app-text/60">
                <span className="font-bold text-app-text block mb-1">Khmer</span>
                Native
              </div>
              <div className="text-xs md:text-sm text-app-text/60">
                <span className="font-bold text-app-text block mb-1">English</span>
                Intermediate
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-4 md:space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.23, 1, 0.32, 1]
              }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: 'rgba(255, 255, 255, 0.08)'
              }}
              className="p-6 md:p-8 border-l-2 border-white/5 hover:border-brand-primary transition-all glass-card bg-white/5 group inner-glow rounded-xl cursor-default"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                <div className="text-[10px] md:text-xs font-bold text-brand-primary uppercase tracking-widest">{exp.period}</div>
                <span className={`w-fit text-[9px] md:text-[10px] font-bold px-2 py-0.5 md:py-1 rounded-full border ${
                  exp.type === 'Personal Project'
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                    : exp.type === 'School Project' 
                      ? 'bg-brand-primary/10 border-brand-primary/20 text-brand-primary' 
                      : 'bg-brand-secondary/10 border-brand-secondary/20 text-brand-secondary'
                }`}>
                  {exp.type}
                </span>
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-1 group-hover:text-brand-primary transition-colors leading-tight">{exp.role}</h4>
              <div className="text-xs md:text-sm text-neutral-400 mb-4">{exp.company}</div>
              <p className="text-neutral-500 text-xs md:text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Sreyneath-Rom',
      bgClass: 'bg-neutral-800',
      icon: <Github size={24} />,
    },
    {
      name: 'Email',
      url: 'mailto:romsreyneath4@gmail.com',
      bgClass: 'bg-rose-600',
      icon: <Mail size={24} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sreyneath-rom-69b2a5321/',
      bgClass: 'bg-blue-700',
      icon: <Linkedin size={24} />,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/flamingo1fly/',
      bgClass: 'bg-blue-600',
      icon: <Facebook size={24} />,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-app-bg text-center">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4"
        >
          Contact
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 text-app-text"
        >
          Let's work <span className="text-gradient">together</span>.
        </motion.h3>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center flex-wrap gap-4 sm:gap-6"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                y: -15, 
                scale: 1.15,
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                y: { type: 'spring', stiffness: 300, damping: 15 },
                scale: { type: 'spring', stiffness: 300, damping: 15 },
                rotate: { duration: 0.4, times: [0, 0.33, 0.66, 1] }
              }}
              whileTap={{ scale: 0.9 }}
              className="group relative"
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ${social.bgClass} text-white rounded-xl sm:rounded-3xl flex flex-col items-center justify-center shadow-2xl group-hover:shadow-brand-primary/40 transition-all duration-500`}>
                <div className="transform transition-transform duration-500 group-hover:scale-110">
                  {social.icon}
                </div>
              </div>
              
              {/* Floating Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 pointer-events-none transition-all duration-300 whitespace-nowrap shadow-2xl z-20">
                {social.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-6 border-transparent border-t-neutral-900" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <div className="flex items-center gap-3 text-lg sm:text-xl font-medium text-app-text/70">
            <Mail size={22} className="text-brand-primary" />
            romsreyneath4@gmail.com
          </div>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
          <div className="flex items-center gap-3 text-lg sm:text-xl font-medium text-app-text/70">
            <MapPin size={22} className="text-brand-primary" />
            Phnom Penh, Cambodia
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
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

          {/* Source/Legal */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Sreyneath-Rom/Portfolio1" 
                target="_blank" 
                rel="noreferrer"
                className="glass-pill !px-4 !py-2 flex items-center gap-2 text-[10px] hover:bg-brand-primary hover:text-white transition-all"
              >
                <Github size={14} /> Source Code
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

const TechMarquee = () => {
  const rows = [
    {
      direction: 'left',
      items: [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      ]
    },
    {
      direction: 'right',
      items: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'SASS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      ]
    },
    {
      direction: 'left',
      items: [
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      ]
    }
  ];

  return (
    <div className="py-12 glass-sheet overflow-hidden border-y border-white/5 relative z-10 group/marquee">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/5 blur-[80px] pointer-events-none" />
      <div className="space-y-6 md:space-y-8 relative z-10">
        {rows.map((row, idx) => (
          <div key={idx} className="relative flex overflow-x-hidden">
            <div className={`flex whitespace-nowrap py-2 ${row.direction === 'left' ? 'animate-marquee' : 'animate-marquee-right'} hover:[animation-play-state:paused]`}>
              {[...row.items, ...row.items, ...row.items, ...row.items].map((item, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 mx-6 sm:mx-12 group cursor-default">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center glass-card p-2 sm:p-2.5 border-white/10 group-hover:border-brand-primary/50 transition-colors"
                  >
                    <img 
                      src={item.icon} 
                      alt={item.name} 
                      className={`w-full h-full object-contain filter group-hover:scale-110 transition-transform ${item.name === 'GitHub' ? 'brightness-150 grayscale invert dark:invert-0 dark:grayscale-0 dark:brightness-100' : ''}`}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <motion.span 
                    whileHover={{ scale: 1.1, x: 5 }}
                    className="text-sm font-bold text-app-text/20 group-hover:text-brand-primary transition-all duration-300 uppercase tracking-widest"
                  >
                    {item.name}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Sync with system or localStorage if needed
    const savedTheme = localStorage.getItem('app-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-20% 0px -70% 0px',
    });

    const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Apply theme class to document element for global variable scope
    const root = window.document.documentElement;
    const themeClasses = THEMES.map(t => `theme-${t.id}`);
    root.classList.remove(...themeClasses);
    root.classList.add(`theme-${theme}`);
    
    // Also apply to body for consistent background scrolling
    document.body.classList.remove(...themeClasses);
    document.body.classList.add(`theme-${theme}`);
    
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`min-h-screen bg-app-bg text-app-text overflow-x-hidden transition-colors duration-500 relative`}>
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      
      {/* Global Ambient Glows */}
      <div className="fixed -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <TechMarquee />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>

      <FloatingThemeSwitcher currentTheme={theme} onThemeChange={handleThemeChange} />
    </div>
  );
}
