import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Search, 
  X, 
  ArrowUpRight, 
  ExternalLink, 
  Github, 
  SlidersHorizontal
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | Project['category']>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesFilter = activeFilter === 'All' || p.category === activeFilter;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesFilter;
    const matchesSearch =
      p.title.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.tech.some((t) => t.toLowerCase().includes(q)) ||
      (p.frontendTech && p.frontendTech.some((t) => t.toLowerCase().includes(q))) ||
      (p.backendTech && p.backendTech.some((t) => t.toLowerCase().includes(q)));
    return matchesFilter && matchesSearch;
  });

  const filterOptions = [
    { label: 'All Projects', value: 'All' as const, count: PROJECTS_DATA.length },
    { label: 'Personal', value: 'Personal Project' as const, count: PROJECTS_DATA.filter(p => p.category === 'Personal Project').length },
    { label: 'School', value: 'School Project' as const, count: PROJECTS_DATA.filter(p => p.category === 'School Project').length },
    { label: 'Work', value: 'Work Experience' as const, count: PROJECTS_DATA.filter(p => p.category === 'Work Experience').length },
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative overflow-hidden bg-app-bg transition-colors duration-500">
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-brand-primary/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-pill text-xs font-bold text-brand-primary uppercase tracking-[0.25em] mb-4">
            <Sparkles size={14} className="text-brand-primary animate-pulse" />
            Portfolio Showcase
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-app-text mb-4">
            Featured Projects & Systems
          </h2>
          
          <p className="text-app-text/70 text-sm md:text-base leading-relaxed">
            A curated showcase of production-ready full-stack applications, cross-platform mobile systems, smart farm automation, and tactile Neumorphic design systems.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 md:mb-12">
          
          <div className="flex items-center gap-1.5 p-1.5 neu-inset rounded-2xl overflow-x-auto">
            {filterOptions.map((tab) => {
              const isActive = activeFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer
                    ${isActive 
                      ? 'neu-btn-purple text-white shadow-md' 
                      : 'text-app-text/60 hover:text-app-text neu-btn shadow-none! border-transparent! bg-transparent hover:bg-app-text/5'
                    }
                  `}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'neu-pill-inset text-app-text/50'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-80">
            <input
              type="text"
              placeholder="Search by title or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="neu-capsule-input w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm font-medium placeholder:text-app-text/40"
            />
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-app-text/50 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-app-text/40 hover:text-app-text p-1 cursor-pointer"
                aria-label="Clear search query"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mb-6 text-xs text-app-text/60">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={14} className="text-brand-primary" />
            <span>Showing <strong className="text-app-text">{filteredProjects.length}</strong> of {PROJECTS_DATA.length} projects</span>
          </div>
          {searchQuery && (
            <span className="italic">
              Matching query: &quot;{searchQuery}&quot;
            </span>
          )}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="neu-card rounded-3xl p-12 text-center max-w-md mx-auto my-12 space-y-4">
            <div className="w-14 h-14 rounded-2xl neu-inset flex items-center justify-center text-app-text/40 mx-auto">
              <Search size={24} />
            </div>
            <h3 className="text-lg font-bold text-app-text">No projects matched your criteria</h3>
            <p className="text-xs text-app-text/60">
              Try searching with another keyword or reset the filter to view all projects.
            </p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-xl neu-btn-primary text-white text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="neu-card rounded-3xl overflow-hidden flex flex-col justify-between transition-all group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="p-4 pb-0">
                    <div className="aspect-video relative overflow-hidden rounded-2xl neu-inset">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3">
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
                          {project.category}
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        <div className="px-4 py-2 rounded-full neu-btn-primary text-white text-xs font-bold flex items-center gap-1.5 shadow-xl">
                          <span>Case Study</span>
                          <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 md:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-bold text-app-text group-hover:text-brand-primary transition-colors line-clamp-1 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs md:text-sm text-app-text/70 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span 
                            key={tech}
                            className="text-[10px] font-medium px-2.5 py-1 rounded-lg neu-pill-inset text-app-text/75"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="text-[10px] font-bold px-2 py-1 text-app-text/40">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="pt-3 border-t border-app-border/30 flex items-center justify-between">
                        <span className="text-xs font-bold text-brand-primary flex items-center gap-1 group-hover:underline">
                          View Details <ArrowUpRight size={14} />
                        </span>

                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="w-8 h-8 rounded-full neu-circle-btn text-app-text/70 hover:text-brand-primary flex items-center justify-center cursor-pointer"
                              aria-label={`View ${project.title} on GitHub`}
                            >
                              <Github size={14} />
                            </a>
                          )}
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="w-8 h-8 rounded-full neu-circle-btn text-app-text/70 hover:text-brand-primary flex items-center justify-center cursor-pointer"
                              aria-label={`Open ${project.title} live demo`}
                            >
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

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