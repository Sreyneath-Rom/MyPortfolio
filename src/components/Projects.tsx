import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | Project['category']>('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

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
          <div className="relative flex items-center p-1 md:p-1.5 bg-white/5 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/5 w-full md:w-auto overflow-x-auto">
            {(['All', 'Personal Project', 'Work Experience', 'School Project'] as const).map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
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
