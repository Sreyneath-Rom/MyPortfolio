import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import Typed from 'typed.js';
import { ChevronRight, Download, Code2, Palette, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;
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
                delayChildren: 0.6
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
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 glass-card font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-app-text"
            >
              Get In Touch <Download size={18} />
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

            {/* Main Profile Container */}
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
