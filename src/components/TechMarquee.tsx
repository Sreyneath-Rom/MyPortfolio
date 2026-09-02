import React from 'react';
import { motion } from 'motion/react';

export const TechMarquee: React.FC = () => {
  const rows = [
    {
      direction: 'left',
      items: [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      ]
    },
    {
      direction: 'right',
      items: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'SASS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      ]
    },
    {
      direction: 'left',
      items: [
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      ]
    }
  ];

  return (
    <div className="py-12 glass-sheet overflow-hidden border-y border-white/5 relative z-10 group/marquee">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/5 blur-[80px] pointer-events-none" />
      <div className="space-y-6 md:space-y-8 relative z-10">
        {rows.map((row, idx) => (
          <div key={idx} className="relative flex overflow-x-hidden">
            <div className={`flex whitespace-nowrap py-2 ${row.direction === 'left' ? 'animate-marquee' : 'animate-marquee-right'} hover:[animation-play-state:paused]`}>
              {[...row.items, ...row.items, ...row.items, ...row.items].map((item, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 mx-6 sm:mx-12 group cursor-default">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center glass-card p-2 sm:p-2.5 border-white/10 group-hover:border-brand-primary/50 transition-colors"
                  >
                    <img 
                      src={item.icon} 
                      alt={item.name} 
                      className={`w-full h-full object-contain filter group-hover:scale-110 transition-transform ${item.name === 'GitHub' ? 'brightness-150 grayscale invert dark:invert-0 dark:grayscale-0 dark:brightness-100' : ''}`}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <motion.span 
                    whileHover={{ scale: 1.1, x: 5 }}
                    className="text-sm font-bold text-app-text/20 group-hover:text-brand-primary transition-all duration-300 uppercase tracking-widest"
                  >
                    {item.name}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
