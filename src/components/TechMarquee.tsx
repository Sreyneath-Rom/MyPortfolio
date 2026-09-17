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
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      ]
    },
    {
      direction: 'right',
      items: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
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
    <div className="py-10 neu-card rounded-none border-x-0 border-y border-white/5 overflow-hidden relative z-10 group/marquee my-6">
      <div className="space-y-6 md:space-y-8 relative z-10">
        {rows.map((row, idx) => (
          <div key={idx} className="relative flex overflow-x-hidden">
            <div className={`flex whitespace-nowrap py-2 ${row.direction === 'left' ? 'animate-marquee' : 'animate-marquee-right'} hover:[animation-play-state:paused]`}>
              {[...row.items, ...row.items, ...row.items, ...row.items].map((item, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 mx-6 sm:mx-10 group cursor-default">
                  <motion.div 
                    whileHover={{ scale: 1.15, y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl neu-circle-btn p-2 sm:p-2.5 transition-colors"
                  >
                    <img 
                      src={item.icon} 
                      alt={item.name} 
                      className={`w-full h-full object-contain filter group-hover:scale-110 transition-transform ${item.name === 'GitHub' ? 'brightness-150 grayscale invert dark:invert-0 dark:grayscale-0 dark:brightness-100' : ''}`}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <motion.span 
                    whileHover={{ scale: 1.05, x: 2 }}
                    className="text-xs sm:text-sm font-bold text-app-text/60 group-hover:text-brand-primary transition-all duration-300 tracking-wider"
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
