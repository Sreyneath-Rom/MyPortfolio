import React from 'react';
import { motion } from 'motion/react';
import { Target, MapPin, GraduationCap, Award, Heart, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-app-bg relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 bg-brand-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 bg-brand-secondary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

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

              {/* Core Values */}
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
