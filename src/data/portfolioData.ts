import { Project, Experience, NavLink } from '../types';

export const NAV_LINKS: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "High School Management System",
    category: "Personal Project",
    shortDescription: "A full-stack role-based High School Management System built with React 19, TypeScript, Node.js, Express, Prisma 7, and PostgreSQL 16.",
    description: "A modern full-stack role-based High School Management System engineered for Varin High School. The platform delivers separate workflows for Administrators, Teachers, and Students, complete with JWT access/refresh token authentication, centralized school configuration, academic management, attendance tracking, schedules, homework, quizzes, gradebook calculation, reports, and Swagger API documentation.",
    problemSolved: "Varin High School required an integrated, secure, and modern digital platform to replace fragmented paper systems and manual tracking for administrative operations, class schedules, gradebook calculation, student attendance, quizzes, and faculty-student communication.",
    roleDescription: "Sole UX/UI Designer & Full-Stack Developer. Handled the entire UX/UI design process (user flows, wireframes, and design system in Figma) and developed both the React 19 frontend and the Node.js/Express Prisma backend architecture with role-based routing and automated token refresh.",
    impact: "Successfully designed and engineered separate role-tailored dashboards for Admins, Teachers, and Students with real-time academic workflows, attendance logs, quiz & homework management, PostgreSQL 16 persistence via Prisma 7, and production security.",
    tech: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma 7",
      "PostgreSQL 16",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
      "JWT Auth",
      "Swagger API",
      "Vite"
    ],
    frontendTech: [
      "React 19 and TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Context API and Redux Toolkit",
      "React Hook Form and Zod",
      "Fetch-based API client with access-token refresh"
    ],
    backendTech: [
      "Node.js and Express",
      "TypeScript",
      "Prisma 7 with the PostgreSQL adapter",
      "PostgreSQL 16",
      "JWT access and refresh tokens",
      "Zod validation",
      "Helmet, CORS, rate limiting, Morgan, and Winston logging",
      "Swagger API documentation"
    ],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    link: "https://github.com/Sreyneath-Rom/School-Management",
    github: "https://github.com/Sreyneath-Rom/School-Management"
  },
  {
    id: 2,
    title: "Cakery Charm",
    category: "Personal Project",
    shortDescription: "A modern artisan bakery and cafe app built with Flutter, featuring tactile Neumorphic UI design.",
    description: "A modern artisan bakery and cafe application built entirely with Flutter, featuring interactive product menus, combo showcases, courier delivery ordering, and a tactile, soft Neumorphic design system. Includes dual-axis soft light & shadow elevations, Hero Combo Carousel, filterable Artisan Product Catalog across Bread, Cake, Sandwich, and Drink with instant search, and real-time interactive cart and delivery checkout.",
    problemSolved: "Traditional bakery ordering apps often feel flat and generic, lacking the warm, tactile sensory craftsmanship and delight of visiting an authentic artisan bakery.",
    roleDescription: "Sole UX/UI Designer & Flutter Developer. Designed the full soft Neumorphic design system (NeuTheme) with custom elevation math, and developed the Flutter application with Provider state management, interactive cart drawer, combo carousel, and delivery checkout workflows.",
    impact: "Engineered a responsive, tactile cross-platform Flutter application featuring custom Neumorphic widgets, dynamic multi-category filtering, real-time subtotal calculations, and Phnom Penh delivery ordering.",
    tech: [
      "Flutter",
      "Dart",
      "Neumorphic UI",
      "Provider",
      "Mobile App",
      "UI/UX Design",
      "Figma"
    ],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    link: "https://github.com/Sreyneath-Rom",
    github: "https://github.com/Sreyneath-Rom/cake"
  },
  {
    id: 3,
    title: "Media Studio Pro",
    category: "Personal Project",
    shortDescription: "A modern multimedia suite for downloading, extracting, editing, and processing video, audio, and image content.",
    description: "A comprehensive multimedia suite available both as a high-performance Web Application (React 18 + TypeScript + Tailwind CSS) and as a standalone Desktop GUI (Python Tkinter + yt-dlp + OpenCV + pydub). Features YouTube/TikTok/Instagram/Facebook 4K downloading, playlist batch processing, pure audio stream extraction with bitrate control, 100% browser-native AI background removal & matting with dual-pane comparison, precision video frame micro-stepping (-1s, -0.1s, +0.1s, +1s), interactive audio waveform visualizer/trimmer, real-time activity terminal logs, and complete bilingual localization in English and Khmer (ភាសាខ្មែរ).",
    problemSolved: "Content creators and media professionals frequently juggle separate, ad-heavy, privacy-invasive online tools for downloading, audio slicing, frame snapshotting, and background removal.",
    roleDescription: "Full-Stack Developer & UX/UI Designer. Designed the streamlined bilingual studio interface with dark/light themes, built browser-native Web Audio/Canvas processing engines and AI matting, and authored the Python desktop application with yt-dlp, OpenCV, and pydub pipelines.",
    impact: "Unified 10 essential creative media tools into a single private, zero-server-upload application with bilingual English/Khmer support and cross-platform web & desktop workflows.",
    tech: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Tkinter",
      "yt-dlp",
      "OpenCV",
      "pydub",
      "Web Audio API",
      "HTML5 Canvas",
      "Bilingual (Khmer/EN)"
    ],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    link: "https://github.com/Sreyneath-Rom",
    github: "https://github.com/Sreyneath-Rom/Video-Downloader-Editing"
  },
  {
    id: 4,
    title: "Farm Control Mobile App VC2",
    category: "School Project",
    shortDescription: "Smart farm monitoring & automation mobile application built with Expo and React Native.",
    description: "A modern mobile application for managing and controlling smart agricultural farm systems (Farm Control VC2). Built with Expo and Expo Router for file-based routing, React Native Elements for UI components, and modern Vector Icons for intuitive sensor and hardware controls.",
    problemSolved: "Agricultural operators and smart farms needed an accessible, centralized mobile interface to monitor environmental metrics and control automated farm hardware in real-time.",
    roleDescription: "Mobile Developer & UI Designer. Architected the file-based Expo Router system, implemented responsive UI components with React Native Elements, integrated vector icon sets, and established testing workflows with Expo Go, Android Emulator, and iOS Simulator.",
    impact: "Delivered a lightweight, reliable mobile application for smart farm telemetry and hardware automation with modular architecture and clean UX.",
    tech: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "React Native Elements",
      "Vector Icons",
      "Mobile App"
    ],
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80",
    link: "https://github.com/Sreyneath-Rom",
    github: "https://github.com/Sreyneath-Rom/Farm_control-VC2"
  },
  {
    id: 5,
    title: "XING FU CHA System VC1",
    category: "School Project",
    shortDescription: "A PHP + MySQL bubble tea shop application where customers order customized drinks and admins manage shop operations.",
    description: "XING FU CHA is a dedicated Bubble Tea Ordering and POS System (POS VC1) engineered with PHP and MySQL. Designed specifically for beverage shops, it provides an intuitive ordering interface for customers to browse drinks, customize preferences (sugar level, ice percentage, toppings), and place orders. For shop administrators, it features a comprehensive back-office management portal to oversee menu items, pricing, inventory stock, incoming order queues, and sales transactions.",
    problemSolved: "Bubble tea shops face high customer volume and intricate per-drink customizations. Generic POS systems create ordering bottlenecks and mistakes. XING FU CHA digitalizes the entire customer ordering flow and streamlines administrative shop management.",
    roleDescription: "Full-Stack Developer & UI Designer. Designed the customer ordering UI and administrator back-office dashboard, developed server-side PHP logic, structured the MySQL database schema, configured Composer dependencies, and maintained environment performance.",
    impact: "Delivered a fully functional bubble tea ordering and POS solution with dynamic drink customization, streamlined order queue handling for staff, and centralized sales reporting.",
    tech: [
      "PHP 7.4+",
      "MySQL 5.7+",
      "MariaDB 10.2+",
      "Composer 2.x",
      "JavaScript",
      "Bootstrap 5",
      "HTML5 / CSS3",
      "POS System"
    ],
    frontendTech: [
      "Responsive Customer Drink Ordering UI",
      "Drink Customization (Sugar, Ice Level, Toppings)",
      "Interactive Real-Time Cart & Checkout",
      "Bootstrap 5 & Dynamic JavaScript"
    ],
    backendTech: [
      "PHP 7.4+ Server Logic",
      "MySQL 5.7+ / MariaDB 10.2+ Relational Database",
      "Composer 2.x Dependency Management",
      "Admin Shop & Menu Management Dashboard",
      "Order Queue & Sales Reporting Architecture"
    ],
    image: "https://images.unsplash.com/photo-1558857563-b37cf5c777e1?w=800&q=80",
    link: "https://github.com/Sreyneath-Rom",
    github: "https://github.com/Charyna-chab/VC1-Group8-Drink"
  },
 
  {
    id: 7,
    title: "Video Download Tool",
    category: "School Project",
    shortDescription: "Efficient video downloading tool with custom configuration.",
    description: "Led a team of 3 in building a video downloader tool. Defined workflow, delegated tasks and integrated JSON-based configuration.",
    roleDescription: "Team Leader. Managed project deadlines and technical integration of various downloader APIs.",
    problemSolved: "Users needed a centralized, simple interface to download educational videos for offline viewing.",
    impact: "Successfully delivered a cross-platform tool used by students for offline study.",
    tech: ["Team Leadership", "JSON", "JavaScript", "Project Management"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    link: "https://github.com/Sreyneath-Rom",
    github: "https://github.com/Sreyneath-Rom/Video-Downloader-Editing"
  },
  {
    id: 8,
    title: "Bakery Shop Website",
    category: "School Project",
    shortDescription: "A delightful responsive website for a local bakery.",
    description: "Designed a responsive bakery website using SASS and consistent visual patterns to highlight product quality.",
    roleDescription: "Full Designer. Created the visual identity, color palette, and layout structure.",
    problemSolved: "The bakery lacked an online presence to showcase their daily fresh products.",
    impact: "Increased brand awareness and provided customers with a digital menu.",
    tech: ["SASS", "Responsive Design", "UI Design", "Figma"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    link: "https://github.com/Sreyneath-Rom",
    github: "https://github.com/Sreyneath-Rom/BAKERY-SHOP-NEW"
  },

];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 1,
    role: "UX-UI Designer",
    company: "Caltech Innovation Co., Ltd.",
    period: "Mar 2026 - May 2026",
    type: "Work Experience",
    location: "Phnom Penh, Cambodia",
    status: "Completed",
    description: "Designed intuitive user experiences and high-fidelity design systems for enterprise web and mobile platforms, transforming complex workflows into tactile, accessible digital products.",
    highlights: [
      "Engineered comprehensive Figma component libraries, responsive grids, and design tokens for cross-functional teams.",
      "Facilitated usability testing sessions and translated qualitative user feedback into iterated wireframes and interactive prototypes.",
      "Partnered with frontend developers to ensure design integrity, accessibility standards (WCAG AA), and micro-animations."
    ],
    technologies: ["Figma", "Design Systems", "Prototyping", "UX Research", "Usability Testing", "Wireframing", "Mobile & Web UI"]
  },
  {
    id: 2,
    role: "Software Specialist Internship",
    company: "Hong Hea Technology Co., Ltd.",
    period: "Jul 2025 - Jan 2026",
    type: "Internship",
    location: "Phnom Penh, Cambodia",
    status: "Completed",
    description: "Developed and optimized point-of-sale and merchant applications on Sunmi hardware (MaxProgram ecosystem), while refining UI systems and conducting end-to-end QA validation.",
    highlights: [
      "Developed dedicated terminal applications targeting Sunmi smart hardware, enhancing transaction throughput for retail operators.",
      "Redesigned key operational interfaces for the Heawork System, significantly decreasing operator input friction and error rates.",
      "Conducted extensive cross-device functional testing, hardware peripheral diagnostics (thermal printers, barcode scanners), and REST API validations."
    ],
    technologies: ["Sunmi SDK", "MaxProgram", "POS Systems", "UI Refinement", "QA Validation", "Hardware Diagnostics", "REST APIs"]
  },
];

export const TECHNICAL_SKILLS = [
  // Frontend
  'React 19 & TypeScript',
  'JavaScript (ES6+)',
  'HTML5 / CSS3 / SASS',
  'Tailwind CSS',
  'Bootstrap 5',
  'Vue.js',
  'React Router & Redux Toolkit',
  'React Hook Form & Zod',
  // Backend & Database
  'Node.js & Express',
  'REST API Development',
  'PostgreSQL 16',
  'MySQL / MariaDB',
  'Prisma 7 (ORM)',
  'PHP (7.4+) & Laravel',
  'OOP with TypeScript',
  'JWT Auth & API Security',
  'Swagger API Documentation',
  // Mobile & Scripting
  'Flutter & Dart',
  'React Native / Expo',
  'Python & Tkinter',
  'Python (Algorithms)',
  // Data & Analytics
  'Data Analytics',
  'Power BI',
  // CMS
  'WordPress',
];

export const TOOLS_AND_PLATFORMS = [
  'Figma (UI/UX)',
  'Canva',
  'Vite',
  'Composer',
  'Postman',
  'Swagger UI',
  'Git / GitHub / GitLab',
  'Prisma Studio / pgAdmin',
  'Linux (Ubuntu)',
  'AWS (EC2)',
  'Firebase',
  'Jira / ClickUp',
  'MS Office (Word, Excel, PowerPoint)',
  'AI Tools (ChatGPT, Gemini, etc.)',
  'Power BI',
  'CapCut',
];

export const WORKSHOPS = [
  { name: 'Product Owner', detail: 'Jan 2025' },
  { name: 'UX/UI Design', detail: 'Feb - Mar 2025' },
  { name: 'Data Analytics', detail: 'Mar 2025' },
  { name: 'Project Management', detail: 'Feb 2025' }
];
