import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Palette, 
  MapPin, 
  GraduationCap, 
  Sparkles, 
  ArrowUpRight, 
  Compass, 
  Check, 
  Terminal,
  Zap,
  Eye,
  Workflow
} from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Code2 size={24} className="text-brand-primary" />,
      tag: 'Development',
      title: 'Frontend Engineering',
      desc: 'Writing clean, scalable code with modern frameworks. Transforming static designs into fast, fluid, and responsive user interfaces with attention to state management and performance.',
      highlights: [
        'Component-driven architecture (React, Vite)',
        'Type-safe application logic with TypeScript',
        'Responsive, mobile-first styling with Tailwind CSS',
        'Smooth micro-interactions and transition physics'
      ]
    },
    {
      icon: <Palette size={24} className="text-brand-secondary" />,
      tag: 'Design',
      title: 'UX / UI Design',
      desc: 'Crafting user-centric digital experiences from rough sketches to production-ready design systems. Focusing on intuitive information hierarchy, typography, and mathematical spacing.',
      highlights: [
        'Figma wireframing, high-fidelity mockups & prototypes',
        'Reusable design systems & component libraries',
        'User flow mapping and friction reduction',
        'Accessible color contrast & WCAG AA standards'
      ]
    }
  ];

  const quickStats = [
    {
      icon: <MapPin size={18} className="text-brand-primary" />,
      label: 'Based in',
      value: 'Phnom Penh, Cambodia'
    },
    {
      icon: <GraduationCap size={18} className="text-brand-secondary" />,
      label: 'Discipline',
      value: 'IT & Digital Product Design'
    },
    {
      icon: <Workflow size={18} className="text-emerald-400" />,
      label: 'Workflow',
      value: 'Figma → TypeScript → Production'
    },
    {
      icon: <Zap size={18} className="text-amber-400" />,
      label: 'Availability',
      value: 'Open to Opportunities'
    }
  ];

  const coreValues = [
    {
      icon: <Eye size={18} className="text-brand-primary" />,
      title: 'Attention to Detail',
      text: 'Every pixel, margin, and animation easing curve matters to the final feel.'
    },
    {
      icon: <Terminal size={18} className="text-brand-secondary" />,
      title: 'Clean Architecture',
      text: 'Readable, maintainable codebases structured for longevity and seamless collaboration.'
    },
    {
      icon: <Compass size={18} className="text-emerald-400" />,
      title: 'Human-Centered',
      text: 'Designing intuitive software that simplifies complex workflows instead of complicating them.'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-6 bg-app-bg relative overflow-hidden">
      {/* Ambient background atmosphere */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-brand-primary/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-brand-secondary/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-pill text-xs font-semibold text-brand-primary uppercase tracking-widest mb-4">
            <Sparkles size={13} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-app-text leading-[1.15] mb-4">
            Bridging Design Vision with <span className="text-gradient">Frontend Code</span>
          </h2>
          <p className="text-base sm:text-lg text-app-text/70 leading-relaxed font-normal">
            I am a Frontend Developer and UX/UI Designer dedicated to creating seamless, thoughtful, and high-performance digital products.
          </p>
        </motion.div>

        {/* Quick Identity Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10"
        >
          {quickStats.map((item, index) => (
            <div
              key={index}
              className="neu-card-sm p-4 sm:p-5 rounded-2xl flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-full neu-circle-btn flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-bold uppercase tracking-wider text-app-text/50">
                  {item.label}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-app-text truncate">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Two Core Pillars: Frontend Development & UI/UX Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className="neu-card p-7 sm:p-9 rounded-3xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full neu-circle-btn flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full neu-pill-inset text-app-text/70">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-app-text mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base text-app-text/75 leading-relaxed mb-6 font-normal">
                  {pillar.desc}
                </p>

                <div className="space-y-2.5 mb-8 pt-4 border-t border-app-text/10">
                  {pillar.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-app-text/85">
                      <div className="w-5 h-5 rounded-full neu-pill-inset flex items-center justify-center shrink-0 mt-0.5 text-brand-primary">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-app-text/10 flex items-center justify-between text-xs">
                <span className="text-app-text/50 font-medium">Ready to collaborate</span>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 font-semibold text-brand-primary hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  <span>See projects</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Values Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl neu-card-sm transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full neu-circle-btn flex items-center justify-center shrink-0 mt-0.5">
                {value.icon}
              </div>
              <div>
                <h4 className="text-sm font-display font-bold text-app-text mb-1">
                  {value.title}
                </h4>
                <p className="text-xs text-app-text/70 leading-relaxed font-normal">
                  {value.text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
