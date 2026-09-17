import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Palette, Sparkles } from 'lucide-react';
import { Theme } from '../types';

export const THEMES = [
  {
    id: 'dark' as Theme,
    name: 'Dark',
    icon: <Moon size={16} className="text-purple-400" />,
    color: 'bg-[#151820] border-2 border-purple-400',
  },
  {
    id: 'light' as Theme,
    name: 'Light',
    icon: <Sun size={16} className="text-amber-500" />,
    color: 'bg-[#ebf0f7] border-2 border-purple-400',
  },
  {
    id: 'midnight' as Theme,
    name: 'Midnight',
    icon: <Palette size={16} className="text-sky-400" />,
    color: 'bg-[#080c16] border-2 border-sky-400',
  },
  {
    id: 'nord' as Theme,
    name: 'Nord',
    icon: <Palette size={16} className="text-teal-300" />,
    color: 'bg-[#2e3440] border-2 border-teal-300',
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
    <div ref={containerRef} className="fixed bottom-24 right-4 md:bottom-10 md:right-10 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col gap-1.5 p-2 neu-card rounded-3xl shadow-2xl min-w-44 z-20"
          >
            <p className="text-[9px] font-bold text-app-text/40 uppercase tracking-[0.2em] px-3 pt-2.5 pb-1">Theme Palette</p>
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
                  text-xs font-bold transition-all cursor-pointer
                  ${currentTheme === theme.id ? 'neu-btn-purple text-white shadow-md' : 'text-app-text/80 hover:text-app-text neu-btn !shadow-sm'}
                `}
              >
                <div className={`h-4 w-4 rounded-full ${theme.color} shrink-0`} />
                <span>{theme.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Toggle theme appearance switcher"
        className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full neu-circle-btn cursor-pointer transition-all duration-300 ${isOpen ? 'neu-btn-purple text-white' : 'text-app-text'}`}
      >
        <motion.div
           animate={{ rotate: isOpen ? 90 : 0 }}
           transition={{ type: "spring", stiffness: 300, damping: 20 }}
           className="relative z-10"
        >
          {currentThemeIcon}
        </motion.div>
      </motion.button>
    </div>
  );
};
