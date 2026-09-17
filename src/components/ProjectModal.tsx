import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  User, 
  Cpu, 
  Briefcase, 
  ExternalLink, 
  Github, 
  Layers, 
  Code2, 
  Server, 
  Sparkles,
  CheckCircle2,
  FolderGit2,
  Calendar,
  ArrowUpRight
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key press and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
        className="neu-card-lg w-full max-w-5xl max-h-[92vh] overflow-y-auto relative rounded-3xl group shadow-2xl border border-app-border/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Action Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-app-bg/90 backdrop-blur-md border-b border-app-border/40 rounded-t-3xl">
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full neu-pill text-brand-primary uppercase tracking-wider">
              {project.category}
            </span>
            <span className="hidden sm:inline-block text-xs text-app-text/40 font-mono">
              Project #{project.id}
            </span>
          </div>

          <button 
            onClick={onClose}
            className="w-10 h-10 neu-circle-btn rounded-full transition-all text-app-text flex items-center justify-center cursor-pointer shadow-md hover:text-brand-primary"
            aria-label="Close project modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Hero Visual Preview */}
        <div className="p-6 md:p-8 pb-0">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl neu-inset">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Quick Action Badges on the image */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map(t => (
                  <span key={t} className="text-[10px] font-bold px-2.5 py-1 bg-black/40 backdrop-blur-md text-white border border-white/20 rounded-full">
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-black/40 backdrop-blur-md text-white/80 border border-white/20 rounded-full">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full neu-btn-primary text-white text-xs font-bold flex items-center gap-1.5 shadow-lg"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full neu-circle-btn bg-black/40 text-white hover:text-brand-primary shadow-lg"
                    aria-label="View source on GitHub"
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          
          {/* Title and Short Summary */}
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-app-text mb-3">
              {project.title}
            </h3>
            <p className="text-app-text/70 text-sm md:text-base leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Main Grid: Problem/Solution on Left, Tech Architecture on Right */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Left 2-Column: Problem, Role, Solution */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Problem Solved */}
              <div className="p-5 md:p-6 rounded-2xl neu-inset space-y-2.5">
                <h4 className="text-sm md:text-base text-app-text font-bold flex items-center gap-2 text-brand-primary">
                  <Cpu size={18} />
                  The Problem & Motivation
                </h4>
                <p className="text-app-text/80 text-xs md:text-sm leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>

              {/* My Role */}
              <div className="p-5 md:p-6 rounded-2xl neu-inset space-y-2.5">
                <h4 className="text-sm md:text-base text-app-text font-bold flex items-center gap-2 text-brand-secondary">
                  <User size={18} />
                  Role & Responsibilities
                </h4>
                <p className="text-app-text/80 text-xs md:text-sm leading-relaxed">
                  {project.roleDescription}
                </p>
              </div>

              {/* Solution & Tangible Impact */}
              <div className="p-5 md:p-6 rounded-2xl neu-card-sm space-y-2.5 border border-brand-primary/20">
                <h4 className="text-sm md:text-base text-app-text font-bold flex items-center gap-2 text-brand-primary">
                  <Briefcase size={18} />
                  Solution & Measurable Impact
                </h4>
                <p className="text-app-text/80 text-xs md:text-sm leading-relaxed">
                  {project.impact}
                </p>
              </div>

              {/* Frontend & Backend Architecture Breakdown (if exists) */}
              {(project.frontendTech || project.backendTech) && (
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm md:text-base text-app-text font-bold flex items-center gap-2">
                    <Layers size={18} className="text-brand-primary" />
                    Detailed System Architecture
                  </h4>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.frontendTech && (
                      <div className="p-4 rounded-2xl neu-card-sm">
                        <div className="text-xs font-bold uppercase tracking-wider text-brand-primary mb-3 flex items-center gap-2">
                          <Code2 size={15} /> Frontend Engineering
                        </div>
                        <ul className="space-y-2 text-xs text-app-text/80">
                          {project.frontendTech.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-1.5" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.backendTech && (
                      <div className="p-4 rounded-2xl neu-card-sm">
                        <div className="text-xs font-bold uppercase tracking-wider text-brand-secondary mb-3 flex items-center gap-2">
                          <Server size={15} /> Backend & Database
                        </div>
                        <ul className="space-y-2 text-xs text-app-text/80">
                          {project.backendTech.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0 mt-1.5" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>

            {/* Right 1-Column: Project Meta & Quick Actions */}
            <div className="space-y-6">
              
              {/* Meta Card */}
              <div className="neu-card rounded-2xl p-5 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-app-text/50">
                  Project Specs
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-app-border/30">
                    <span className="text-app-text/60">Category</span>
                    <span className="font-bold text-app-text">{project.category}</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-app-border/30">
                    <span className="text-app-text/60">Repository</span>
                    <span className="font-mono text-[11px] text-brand-primary">Public on GitHub</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-app-text/60">Status</span>
                    <span className="flex items-center gap-1.5 text-emerald-500 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Completed
                    </span>
                  </div>
                </div>
              </div>

              {/* Technologies Pill Grid */}
              <div className="neu-card rounded-2xl p-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-app-text/50 flex items-center justify-between">
                  <span>Technologies</span>
                  <span className="text-[10px] font-mono">{project.tech.length} Total</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg neu-pill-inset text-app-text/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 neu-btn-purple text-white rounded-2xl font-bold text-sm cursor-pointer transition-all shadow-md"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 neu-btn font-bold text-app-text rounded-2xl text-sm cursor-pointer transition-all hover:text-brand-primary"
                  >
                    <span>View Repository</span>
                    <Github size={16} />
                  </a>
                )}
              </div>

            </div>

          </div>

          {/* Modal Footer */}
          <div className="pt-6 border-t border-app-border/40 flex items-center justify-between text-xs text-app-text/50">
            <span>Sreyneath Rom &bull; Engineering Portfolio</span>
            <button
              onClick={onClose}
              className="neu-btn px-4 py-2 rounded-xl text-app-text font-bold hover:text-brand-primary cursor-pointer transition-all"
            >
              Back to Overview
            </button>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};
