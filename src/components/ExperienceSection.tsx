import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Cpu, 
  Code2, 
  GraduationCap, 
  Award, 
  Languages, 
  Layers, 
  ArrowUpRight, 
  Compass, 
  Terminal, 
  Wrench,
  Check
} from 'lucide-react';
import { EXPERIENCES_DATA, TECHNICAL_SKILLS, TOOLS_AND_PLATFORMS, WORKSHOPS } from '../data/portfolioData';

type ViewTab = 'all' | 'experience' | 'skills' | 'workshops';
type SkillCategory = 'all' | 'frontend' | 'backend' | 'mobile' | 'tools';

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ViewTab>('all');
  const [expandedId, setExpandedId] = useState<number | null>(1); // Default first one expanded
  const [skillFilter, setSkillFilter] = useState<SkillCategory>('all');

  const toggleExpand = (id: number) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  // Categorize skills for the interactive explorer
  const categorizedSkills = {
    frontend: [
      'React 19 & TypeScript',
      'Tailwind CSS',
      'React Router & Redux Toolkit',
      'HTML5 / CSS3 / SASS',
      'React Hook Form & Zod',
    ],
    backend: [
      'Node.js & Express',
      'PostgreSQL 16',
      'Prisma 7 (ORM)',
      'JWT Auth & API Security',
      'Swagger API Documentation',
      'PHP (7.4+) & Laravel',
      'MySQL / MariaDB',
    ],
    mobile: [
      'Flutter & Dart',
      'Python & Tkinter',
      'Sunmi POS SDK',
      'React Native / Expo',
    ],
    tools: [
      'Figma (UI/UX)',
      'Vite',
      'Postman & Swagger UI',
      'Git / GitHub / GitLab',
      'Prisma Studio / pgAdmin',
      'Linux (Ubuntu)',
      'Jira / ClickUp',
      'Firebase',
    ]
  };

  const getFilteredSkills = () => {
    if (skillFilter === 'all') return TECHNICAL_SKILLS;
    if (skillFilter === 'frontend') return categorizedSkills.frontend;
    if (skillFilter === 'backend') return categorizedSkills.backend;
    if (skillFilter === 'mobile') return categorizedSkills.mobile;
    if (skillFilter === 'tools') return categorizedSkills.tools;
    return TECHNICAL_SKILLS;
  };

  return (
    <section id="experience" className="py-24 px-4 md:px-8 relative overflow-hidden bg-app-bg transition-colors duration-500">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-pill text-xs font-bold text-brand-primary uppercase tracking-[0.25em] mb-4">
            <Sparkles size={14} className="text-brand-primary animate-pulse" />
            Career & Expertise
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-app-text mb-4">
            Experience & Technical Mastery
          </h2>
          
          <p className="text-app-text/70 text-sm md:text-base leading-relaxed">
            Bridging intuitive UI/UX design with robust frontend and mobile engineering. Proven impact across enterprise design systems, smart point-of-sale hardware, and production web applications.
          </p>
        </div>

        {/* Quick Career Metrics Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          <motion.div 
            whileHover={{ y: -3 }}
            className="neu-card p-5 md:p-6 rounded-2xl flex items-center gap-4 cursor-default"
          >
            <div className="w-12 h-12 rounded-2xl neu-inset flex items-center justify-center text-brand-primary shrink-0">
              <Briefcase size={22} />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-display font-bold text-app-text">02+</div>
              <div className="text-xs text-app-text/60 font-medium">Industry Roles & Internships</div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="neu-card p-5 md:p-6 rounded-2xl flex items-center gap-4 cursor-default"
          >
            <div className="w-12 h-12 rounded-2xl neu-inset flex items-center justify-center text-brand-primary shrink-0">
              <Code2 size={22} />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-display font-bold text-app-text">08+</div>
              <div className="text-xs text-app-text/60 font-medium">Shipped Projects & Systems</div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="neu-card p-5 md:p-6 rounded-2xl flex items-center gap-4 cursor-default"
          >
            <div className="w-12 h-12 rounded-2xl neu-inset flex items-center justify-center text-brand-primary shrink-0">
              <GraduationCap size={22} />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-display font-bold text-app-text">04</div>
              <div className="text-xs text-app-text/60 font-medium">Executive Workshops</div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -3 }}
            className="neu-card p-5 md:p-6 rounded-2xl flex items-center gap-4 cursor-default"
          >
            <div className="w-12 h-12 rounded-2xl neu-inset flex items-center justify-center text-brand-primary shrink-0">
              <Cpu size={22} />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-display font-bold text-app-text">14+</div>
              <div className="text-xs text-app-text/60 font-medium">Core Production Technologies</div>
            </div>
          </motion.div>
        </div>

        {/* View Mode Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {[
            { id: 'all' as ViewTab, label: 'Full Overview', icon: Layers },
            { id: 'experience' as ViewTab, label: 'Work Milestones', icon: Briefcase },
            { id: 'skills' as ViewTab, label: 'Technical Stack', icon: Cpu },
            { id: 'workshops' as ViewTab, label: 'Workshops & Languages', icon: Award },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer
                  ${isActive ? 'neu-btn-purple text-white shadow-md' : 'neu-btn text-app-text/70 hover:text-app-text'}
                `}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="space-y-12">
          
          {/* Work Experience Milestones (Visible on 'all' or 'experience') */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-app-text flex items-center gap-2.5">
                    <Briefcase size={22} className="text-brand-primary" />
                    Professional Work Milestones
                  </h3>
                  <p className="text-xs md:text-sm text-app-text/60">
                    Industry roles delivering high-fidelity design systems and software solutions.
                  </p>
                </div>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full neu-pill text-app-text/70 self-start sm:self-auto">
                  {EXPERIENCES_DATA.length} Verified Positions
                </span>
              </div>

              <div className="grid gap-6">
                {EXPERIENCES_DATA.map((exp, index) => {
                  const isExpanded = expandedId === exp.id;
                  return (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="neu-card rounded-3xl p-6 md:p-8 transition-all relative overflow-hidden"
                    >
                      {/* Top Row: Type & Timeline Meta */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neu-pill text-xs font-bold text-brand-primary">
                            <Building2 size={13} />
                            {exp.company}
                          </span>
                          
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider neu-pill-inset text-app-text/70">
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-xs font-medium text-app-text/60">
                          <span className="flex items-center gap-1">
                            <Calendar size={13} className="text-brand-primary" />
                            {exp.period}
                          </span>
                          {exp.location && (
                            <span className="hidden sm:flex items-center gap-1">
                              <MapPin size={13} />
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Role Heading */}
                      <h4 className="text-xl md:text-2xl font-display font-bold text-app-text mb-3">
                        {exp.role}
                      </h4>

                      {/* Primary Description */}
                      <p className="text-app-text/80 text-sm md:text-base leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {/* Expandable Key Accomplishments & Deliverables */}
                      <AnimatePresence>
                        {isExpanded && exp.highlights && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="neu-inset p-5 md:p-6 rounded-2xl mb-5 space-y-3">
                              <div className="text-xs font-bold uppercase tracking-wider text-brand-primary flex items-center gap-2">
                                <CheckCircle2 size={14} />
                                Key Accomplishments & Deliverables
                              </div>
                              <ul className="space-y-2.5">
                                {exp.highlights.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-app-text/80 leading-relaxed">
                                    <div className="w-4 h-4 rounded-full neu-circle-btn text-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                                      <Check size={10} className="stroke-[3]" />
                                    </div>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Bottom Row: Technologies & Toggle Button */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-app-border/40">
                        {/* Technology Badges */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          {exp.technologies?.map((tech) => (
                            <span 
                              key={tech}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-lg neu-pill-inset text-app-text/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Accordion Expand/Collapse Button */}
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary hover:text-brand-secondary neu-btn px-4 py-2 rounded-xl self-start sm:self-auto cursor-pointer transition-all shrink-0"
                        >
                          <span>{isExpanded ? 'Hide Deliverables' : 'View Deliverables'}</span>
                          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Technical Skills & Tools Matrix (Visible on 'all' or 'skills') */}
          {(activeTab === 'all' || activeTab === 'skills') && (
            <div className="neu-card rounded-3xl p-6 md:p-10 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-app-border/40">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-app-text flex items-center gap-2.5">
                    <Cpu size={22} className="text-brand-primary" />
                    Technical Proficiency Matrix
                  </h3>
                  <p className="text-xs md:text-sm text-app-text/60">
                    Comprehensive stack of languages, libraries, databases, and design tooling.
                  </p>
                </div>

                {/* Subcategory Pills */}
                <div className="flex flex-wrap gap-1.5 self-start sm:self-auto">
                  {[
                    { id: 'all' as SkillCategory, label: 'All' },
                    { id: 'frontend' as SkillCategory, label: 'Frontend' },
                    { id: 'backend' as SkillCategory, label: 'Backend' },
                    { id: 'mobile' as SkillCategory, label: 'Mobile' },
                    { id: 'tools' as SkillCategory, label: 'Tools' },
                  ].map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSkillFilter(cat.id)}
                      className={`
                        text-xs font-bold px-3 py-1.5 rounded-full transition-all cursor-pointer
                        ${skillFilter === cat.id ? 'neu-btn-purple text-white' : 'neu-pill text-app-text/70 hover:text-app-text'}
                      `}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skills Grid */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-app-text/50 mb-4 flex items-center gap-2">
                  <Terminal size={14} className="text-brand-primary" />
                  Active Skillset ({getFilteredSkills().length})
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {getFilteredSkills().map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="p-3.5 rounded-2xl neu-pill flex items-center gap-3 transition-all cursor-default"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-primary shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                      <span className="text-xs sm:text-sm font-bold text-app-text truncate">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tools & Platforms Section */}
              <div className="pt-4">
                <div className="text-xs font-bold uppercase tracking-wider text-app-text/50 mb-4 flex items-center gap-2">
                  <Wrench size={14} className="text-brand-secondary" />
                  Engineering Tools, Dev Environments & DevOps
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {TOOLS_AND_PLATFORMS.map((tool) => (
                    <motion.div
                      key={tool}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="p-3.5 rounded-2xl neu-pill-inset flex items-center gap-2.5 transition-all cursor-default"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-app-text/80 truncate">{tool}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Workshops & Languages Grid (Visible on 'all' or 'workshops') */}
          {(activeTab === 'all' || activeTab === 'workshops') && (
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Workshops & Professional Training (2 Cols) */}
              <div className="md:col-span-2 neu-card rounded-3xl p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-display font-bold text-app-text flex items-center gap-2.5 mb-1">
                    <GraduationCap size={20} className="text-brand-primary" />
                    Specialized Workshops & Certifications
                  </h3>
                  <p className="text-xs md:text-sm text-app-text/60">
                    Continued professional development in leadership, product design, and analytics.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {WORKSHOPS.map((ws, index) => (
                    <motion.div
                      key={ws.name}
                      whileHover={{ y: -2 }}
                      className="p-4 rounded-2xl neu-card-sm flex flex-col justify-between gap-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="w-8 h-8 rounded-xl neu-circle-btn text-brand-primary flex items-center justify-center shrink-0">
                          <Award size={16} />
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full neu-pill-inset text-app-text/60 uppercase tracking-wider">
                          {ws.detail}
                        </span>
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-app-text">{ws.name}</h5>
                        <p className="text-[11px] text-app-text/60 mt-0.5">
                          Comprehensive structured curriculum & hands-on case studies.
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Language Proficiency & Global Working Readiness (1 Col) */}
              <div className="neu-card rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-6">
                <div>
                  <h3 className="text-lg md:text-xl font-display font-bold text-app-text flex items-center gap-2.5 mb-1">
                    <Languages size={20} className="text-brand-primary" />
                    Languages
                  </h3>
                  <p className="text-xs md:text-sm text-app-text/60">
                    Bilingual communication for international teams.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Khmer */}
                  <div className="p-4 rounded-2xl neu-inset">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-sm text-app-text">Khmer (ភាសាខ្មែរ)</span>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full neu-pill text-brand-primary">Native</span>
                    </div>
                    <div className="w-full h-2 rounded-full neu-track overflow-hidden p-0.5">
                      <div className="h-full rounded-full bg-brand-primary w-full" />
                    </div>
                  </div>

                  {/* English */}
                  <div className="p-4 rounded-2xl neu-inset">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-sm text-app-text">English</span>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full neu-pill text-brand-secondary">Intermediate</span>
                    </div>
                    <div className="w-full h-2 rounded-full neu-track overflow-hidden p-0.5">
                      <div className="h-full rounded-full bg-brand-secondary w-3/4" />
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl neu-pill-inset text-xs text-app-text/70 leading-relaxed">
                  <span className="font-bold text-app-text block mb-1">Collaborative Mindset</span>
                  Ready to integrate with remote, hybrid, or local engineering squads with clear communication.
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Bottom Interactive Callout Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 md:p-10 rounded-3xl neu-card text-center flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-left max-w-xl">
            <h4 className="text-xl md:text-2xl font-display font-bold text-app-text mb-2">
              Interested in collaborating on a project or role?
            </h4>
            <p className="text-xs md:text-sm text-app-text/70">
              Open to Frontend Developer, UI/UX Designer, and Mobile Engineering opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full neu-btn-primary font-bold text-xs md:text-sm text-white flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href="https://github.com/Sreyneath-Rom"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-full neu-btn font-bold text-xs md:text-sm text-app-text flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>Explore GitHub</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
