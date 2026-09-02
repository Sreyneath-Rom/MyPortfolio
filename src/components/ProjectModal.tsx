import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Cpu, Briefcase, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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
          aria-label="Close project modal"
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
                <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 md:gap-3 px-6 py-3.5 md:px-8 md:py-4 min-h-[48px] bg-brand-primary text-white rounded-2xl font-bold hover:opacity-90 transition-all shadow-xl shadow-brand-primary/20 text-base md:text-lg">
                  Live Demo <ExternalLink size={18} />
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 md:gap-3 px-6 py-3.5 md:px-8 md:py-4 min-h-[48px] glass-card hover:bg-app-text/10 transition-all font-bold text-app-text text-base md:text-lg">
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
