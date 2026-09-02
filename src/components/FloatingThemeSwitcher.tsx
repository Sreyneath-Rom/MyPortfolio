import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Palette } from 'lucide-react';
import { Theme } from '../types';

export const THEMES = [
  {
    id: 'dark' as Theme,
    name: 'Dark',
    icon: <Moon size={16} />,
    color: 'bg-[#0b0b0c]',
  },
  {
    id: 'light' as Theme,
    name: 'Light',
    icon: <Sun size={16} />,
    color: 'bg-[#f5f7fb]',
  },
  {
    id: 'midnight' as Theme,
    name: 'Midnight',
    icon: <Palette size={16} />,
    color: 'bg-[#020617]',
  },
  {
    id: 'nord' as Theme,
    name: 'Nord',
    icon: <Palette size={16} />,
    color: 'bg-[#2e3440]',
  },
] as const;

interface FloatingThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (t: Theme) => void;
}

export const FloatingThemeSwitcher: React.FC<FloatingThemeSwitcherProps> = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentThemeIcon = THEMES.find(t => t.id === currentTheme)?.icon;

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col gap-2 p-2 glass-card rounded-3xl shadow-2xl border-white/10 min-w-40 backdrop-blur-3xl"
          >
            <p className="text-[9px] font-bold text-app-text/30 uppercase tracking-[0.2em] px-3 pt-3 pb-1">Appearance</p>
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
                className={`
                  flex w-full items-center gap-3
                  rounded-2xl px-4 py-2.5
                  text-xs font-bold transition-all
                  ${currentTheme === theme.id ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'text-app-text hover:bg-white/5'}
                `}
              >
                <div className={`h-4 w-4 rounded-full border border-white/10 ${theme.color}`} />
                {theme.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle theme appearance switcher"
        className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-3xl glass-sheet shadow-2xl border-white/10 transition-all duration-500 overflow-hidden relative group ${isOpen ? 'rotate-90 bg-brand-primary text-white shadow-brand-primary/20' : 'text-app-text hover:bg-brand-primary/5'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <motion.div
           animate={{ rotate: isOpen ? 0 : 0 }}
           className="relative z-10"
        >
          {currentThemeIcon}
        </motion.div>
      </motion.button>
    </div>
  );
};
