import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Code2, GraduationCap, User } from 'lucide-react';
import { EXPERIENCES_DATA, TECHNICAL_SKILLS, TOOLS_AND_PLATFORMS, WORKSHOPS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden bg-app-bg">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-primary/5 via-transparent to-brand-secondary/5 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16 relative z-10">
        {/* Left Column: Skills, Tools, Workshops */}
        <div className="lg:col-span-2">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">Journey</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 md:mb-8">Work Experience</h3>
          <p className="text-app-text/70 text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-md">
            Continuously evolving through real-world projects and collaboration with diverse teams in technology and design.
          </p>
          
          <div className="p-6 md:p-8 glass-card">
            {/* Technical Skills */}
            <h4 className="text-base md:text-lg font-display font-bold flex items-center gap-2 mb-4 md:mb-5">
              <Cpu size={18} className="text-brand-primary" /> Technical Skills
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-3 mb-8 md:mb-10">
              {TECHNICAL_SKILLS.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-xs md:text-sm text-app-text/70">
                  <div className="w-1 h-1 rounded-full bg-brand-primary shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
            
            {/* Tools & Platforms */}
            <h4 className="text-base md:text-lg font-display font-bold flex items-center gap-2 mb-4 md:mb-5">
              <Code2 size={18} className="text-brand-primary" /> Tools & Platforms
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-3 mb-8 md:mb-10">
              {TOOLS_AND_PLATFORMS.map((tool) => (
                <div key={tool} className="flex items-center gap-2 text-xs md:text-sm text-app-text/70">
                  <div className="w-1 h-1 rounded-full bg-brand-secondary shrink-0" />
                  {tool}
                </div>
              ))}
            </div>

            {/* Workshops */}
            <h4 className="text-sm md:text-base font-bold flex items-center gap-2 mb-4 md:mb-5">
              <GraduationCap size={18} className="text-brand-primary" /> Workshops
            </h4>
            <div className="grid grid-cols-1 gap-4 mb-8 md:mb-10">
              {WORKSHOPS.map((ws) => (
                <div key={ws.name} className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-app-text">
                    <div className="w-1 h-1 rounded-full bg-brand-primary shrink-0" />
                    {ws.name}
                  </div>
                  <div className="text-[10px] text-app-text/40 ml-3 uppercase tracking-wider">{ws.detail}</div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <h4 className="text-sm md:text-base font-bold flex items-center gap-2 mb-4">
              <User size={18} className="text-brand-primary" /> Languages
            </h4>
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

        {/* Right Column: Experience Timeline */}
        <div className="lg:col-span-3 space-y-4 md:space-y-6">
          {EXPERIENCES_DATA.map((exp, i) => (
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
