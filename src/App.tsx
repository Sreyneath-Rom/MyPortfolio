import React, { useState, useEffect } from 'react';
import { Theme } from './types';
import {
  Navbar,
  Hero,
  About,
  TechMarquee,
  Projects,
  ExperienceSection,
  Contact,
  Footer,
  FloatingThemeSwitcher,
  THEMES
} from './components';

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Sync with system or localStorage if needed
    const savedTheme = localStorage.getItem('app-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-20% 0px -70% 0px',
    });

    const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Apply theme class to document element for global variable scope
    const root = window.document.documentElement;
    const themeClasses = THEMES.map((t) => `theme-${t.id}`);
    root.classList.remove(...themeClasses);
    root.classList.add(`theme-${theme}`);

    // Also apply to body for consistent background scrolling
    document.body.classList.remove(...themeClasses);
    document.body.classList.add(`theme-${theme}`);

    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <div className="min-h-screen bg-app-bg text-app-text overflow-x-hidden transition-colors duration-500 relative">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      {/* Global Ambient Glows */}
      <div className="fixed -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <TechMarquee />
          <Projects />
          <ExperienceSection />
          <Contact />
        </main>
        <Footer />
      </div>

      <FloatingThemeSwitcher currentTheme={theme} onThemeChange={handleThemeChange} />
    </div>
  );
}
