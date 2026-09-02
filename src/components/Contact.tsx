import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Facebook, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Sreyneath-Rom',
      bgClass: 'bg-neutral-800',
      icon: <Github size={24} />,
    },
    {
      name: 'Email',
      url: 'mailto:romsreyneath4@gmail.com',
      bgClass: 'bg-rose-600',
      icon: <Mail size={24} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sreyneath-rom-69b2a5321/',
      bgClass: 'bg-blue-700',
      icon: <Linkedin size={24} />,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/flamingo1fly/',
      bgClass: 'bg-blue-600',
      icon: <Facebook size={24} />,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-app-bg text-center">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4"
        >
          Contact
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-12 text-app-text"
        >
          Let's work <span className="text-gradient">together</span>.
        </motion.h3>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center flex-wrap gap-4 sm:gap-6"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                y: -15, 
                scale: 1.15,
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                y: { type: 'spring', stiffness: 300, damping: 15 },
                scale: { type: 'spring', stiffness: 300, damping: 15 },
                rotate: { duration: 0.4, times: [0, 0.33, 0.66, 1] }
              }}
              whileTap={{ scale: 0.9 }}
              className="group relative"
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ${social.bgClass} text-white rounded-xl sm:rounded-3xl flex flex-col items-center justify-center shadow-2xl group-hover:shadow-brand-primary/40 transition-all duration-500`}>
                <div className="transform transition-transform duration-500 group-hover:scale-110">
                  {social.icon}
                </div>
              </div>
              
              {/* Floating Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-4 py-2 bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 pointer-events-none transition-all duration-300 whitespace-nowrap shadow-2xl z-20">
                {social.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-6 border-transparent border-t-neutral-900" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <div className="flex items-center gap-3 text-lg sm:text-xl font-medium text-app-text/70">
            <Mail size={22} className="text-brand-primary" />
            romsreyneath4@gmail.com
          </div>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />
          <div className="flex items-center gap-3 text-lg sm:text-xl font-medium text-app-text/70">
            <MapPin size={22} className="text-brand-primary" />
            Phnom Penh, Cambodia
          </div>
        </motion.div>
      </div>
    </section>
  );
};
