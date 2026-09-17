export type Theme = 'dark' | 'light' | 'midnight' | 'nord';

export interface Project {
  id: number;
  title: string;
  category: 'Work Experience' | 'School Project' | 'Personal Project';
  shortDescription: string;
  description: string;
  problemSolved: string;
  roleDescription: string;
  impact: string;
  tech: string[];
  frontendTech?: string[];
  backendTech?: string[];
  image: string;
  link: string;
  github: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'Work Experience' | 'School Project' | 'Internship' | 'Personal Project';
  location?: string;
  status?: 'Current' | 'Completed';
  highlights?: string[];
  technologies?: string[];
}

export interface ThemeOption {
  id: Theme;
  name: string;
  color: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  bgClass: string;
  iconName: 'Github' | 'Linkedin' | 'Facebook' | 'Mail';
}
