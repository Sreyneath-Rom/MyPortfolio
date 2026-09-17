import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import Typed from 'typed.js';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Facebook, 
  Mail, 
  MapPin
} from 'lucide-react';

export const Hero: React.FC = () => {
  const typedEl = useRef<HTMLSpanElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-10deg', '10deg']);
  const glareX = useTransform(smoothX, [-0.5, 0.5], ['15%', '85%']);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ['15%', '85%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    if (!typedEl.current) return;
    const typed = new Typed(typedEl.current, {
      strings: [
        'Frontend Developer',
        'UI/UX Designer',
        'React & Mobile Engineer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2200,
      loop: true,
      showCursor: true,
      cursorChar: '▋'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Sreyneath-Rom', icon: <Github size={18} /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sreyneath-rom-69b2a5321/', icon: <Linkedin size={18} /> },
    { name: 'Facebook', href: 'https://www.facebook.com/flamingo1fly/', icon: <Facebook size={18} /> },
    { name: 'Email', href: 'mailto:romsreyneath4@gmail.com', icon: <Mail size={18} /> },
  ];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-app-bg transition-colors duration-500">
      <div className="absolute top-1/4 -left-28 w-96 h-96 bg-brand-primary/15 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-28 w-96 h-96 bg-brand-secondary/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full neu-pill text-xs font-semibold text-app-text/80 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire</span>
              <span className="w-1 h-1 rounded-full bg-app-text/30" />
              <span className="text-app-text/50 font-normal flex items-center gap-1">
                <MapPin size={11} className="text-brand-primary" /> Phnom Penh, KH
              </span>
            </div>

            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-brand-primary mb-2">
                Frontend Developer & Designer
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-app-text leading-[1.08]">
                Rom <span className="text-brand-primary">Sreyneath</span>
              </h1>
            </div>

            <div className="h-8 sm:h-9 flex items-center justify-center lg:justify-start text-lg sm:text-xl md:text-2xl font-display font-semibold text-app-text/85">
              <span className="text-app-text/50 mr-2 font-normal">Specialized in</span>
              <span ref={typedEl} className="text-brand-primary font-bold" />
            </div>

            <p className="text-sm sm:text-base text-app-text/70 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              Building scalable, responsive web and mobile applications with clean component architecture, intuitive UI/UX, and tactile interaction systems.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                <a
                  href="#projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl neu-btn-purple text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95"
                >
                  <span>Explore Projects</span>
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl neu-btn text-app-text font-semibold text-xs sm:text-sm tracking-wide transition-all active:scale-95"
                >
                  <span>Contact Me</span>
                </a>
              </div>

              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:pl-2 sm:border-l sm:border-app-border/40">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-9 h-9 rounded-full neu-circle-btn text-app-text/70 hover:text-brand-primary flex items-center justify-center transition-all"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div 
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 flex items-center justify-center select-none"
              style={{ perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute inset-0 rounded-full bg-linear-to-tr from-brand-primary/25 via-brand-secondary/20 to-transparent blur-2xl pointer-events-none -z-10 animate-pulse" />
              
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.1, 0.35] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-3 rounded-full border border-brand-primary/30 pointer-events-none"
              />

              <motion.div
                style={{ rotateX, rotateY }}
                className="relative w-full h-full rounded-full p-3 bg-linear-to-b from-white/20 via-white/5 to-white/10 border border-white/20 shadow-2xl backdrop-blur-xl group cursor-pointer"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-linear-to-br from-brand-primary/15 via-app-bg to-brand-secondary/15 shadow-inner relative">
                  <div
                    className="absolute inset-0 opacity-40 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 50% 45%, var(--primary) 0%, transparent 65%)',
                    }}
                  />
                  
                  <picture>
                    <source srcSet="/profile.webp" type="image/webp" />
                    <source srcSet="/profile.png" type="image/png" />
                    <img
                      src="/profile.png"
                      alt="Rom Sreyneath"
                      loading="eager"
                      className="relative z-10 w-full h-full object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                    />
                  </picture>

                  <motion.div 
                    className="absolute inset-0 rounded-full pointer-events-none z-20"
                    style={{
                      background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.25) 0%, transparent 60%)`
                    }}
                  />

                  <div className="absolute inset-0 rounded-full bg-linear-to-tr from-black/25 via-transparent to-white/15 pointer-events-none z-20" />
                </div>

                <div className="absolute -bottom-2 right-4 sm:right-6 px-3.5 py-1.5 rounded-full neu-pill-inset bg-app-bg/90 backdrop-blur-md border border-app-border/40 shadow-lg flex items-center gap-2 z-30">
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
                  <span className="text-[11px] font-bold text-app-text font-mono">
                    UI/UX & Code
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};