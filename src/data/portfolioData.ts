import { Project, Experience, NavLink } from './types';

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
    shortDescription: "A modern role-based High School Management System frontend built for Varin High School.",
    description: "A modern role-based High School Management System frontend built for Varin High School. The application provides separate workflows for Administrators, Teachers, and Students, with centralized authentication, school configuration, academic management, attendance, schedules, homework, quizzes, grades, reports, and communication.",
    problemSolved: "Varin High School required an integrated, intuitive, and modern digital platform to replace fragmented paper systems and manual tracking for administrative operations, class schedules, gradebook calculation, student attendance, quizzes, and faculty-student communication.",
    roleDescription: "Sole UX/UI Designer & Full Frontend Developer. Handled the entire UX/UI design process (user flows, wireframes, and design system in Figma) and developed the full responsive frontend architecture with role-based routing and centralized state management.",
    impact: "Successfully designed and engineered separate role-tailored dashboards for Admins, Teachers, and Students with real-time academic workflows, attendance logs, quiz & homework management, and comprehensive reporting.",
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS 4",
      "React Router",
      "Context API",
      "Redux Toolkit",
      "Lucide React",
      "Fetch API",
      "Express.js",
      "MySQL / MariaDB"
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
    github: "https://github.com/Sreyneath-Rom"
  },
  {
    id: 3,
    title: "Media Studio Pro (ឧបករណ៍មេឌៀកម្រិតខ្ពស់)",
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
    github: "https://github.com/Sreyneath-Rom"
  },
  {
    id: 4,
    title: "Farm Control Mobile App (VC2)",
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
    github: "https://github.com/Sreyneath-Rom"
  },
  {
    id: 5,
    title: "Pos System",
    category: "School Project",
    shortDescription: "A comprehensive point-of-sale system built as a capstone school project.",
    description: "Monitored server performance and resolved infrastructure issues. Configured environments for development, testing, and production. Designed responsive UIs with HTML, CSS, JavaScript and Bootstrap 5.",
    problemSolved: "Businesses needed a reliable way to manage transactions and inventory in real-time.",
    roleDescription: "DevOps & Frontend. Fetched and processed data using PHP and a connected database while ensuring server stability.",
    impact: "Developed a fully functional POS environment used for school demonstrations and small business simulations.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap 5", "DevOps"],
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
    link: "https://github.com/Sreyneath-Rom",
    github: "https://github.com/Sreyneath-Rom"
  },
  {
    id: 6,
    title: "Inventory Management App",
    category: "School Project",
    shortDescription: "Modernizing internal workflows with real-time tracking.",
    description: "Designed responsive UIs; created wireframes and mockups using Figma. Collaborated with developers to ensure design consistency. Handled data interactions with JavaScript.",
    roleDescription: "Lead Designer. Focused on auditing legacy systems and redesigning the core dashboard for better accessibility.",
    problemSolved: "Manual inventory tracking was slow and error-prone.",
    impact: "Improved tracking efficiency and reduced data entry errors by 40% through intuitive UX.",
    tech: ["Figma", "UI/UX", "JavaScript", "HTML/CSS"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    link: "https://github.com/Sreyneath-Rom",
    github: "https://github.com/Sreyneath-Rom"
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
    github: "https://github.com/Sreyneath-Rom"
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
    github: "https://github.com/Sreyneath-Rom"
  },
  {
    id: 9,
    title: "Brochure Design",
    category: "School Project",
    shortDescription: "Marketing brochures that communicate brand value clearly.",
    description: "Created marketing brochures using Figma and applied branding guidelines to ensure consistent messaging.",
    roleDescription: "Graphic/UI Designer. Translated complex service offerings into readable and attractive brochure layouts.",
    problemSolved: "Need for high-quality marketing materials for service advertising.",
    impact: "Produced versatile marketing assets used across multiple campaigns.",
    tech: ["Figma", "Branding", "Layout Design", "Visual Arts"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    link: "https://github.com/Sreyneath-Rom",
    github: "https://github.com/Sreyneath-Rom"
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 1,
    role: "UX-UI Designer",
    company: "Caltech Innovation",
    period: "Mar 2026 - May 2026",
    type: "Work Experience",
    description: "Designed intuitive interfaces for web/mobile, created wireframes and prototypes using Figma, and conducted usability testing."
  },
  {
    id: 2,
    role: "Software Specialist Internship",
    company: "Hong Hea Technology",
    period: "Jul 2025 - Jan 2026",
    type: "Internship",
    description: "Developed applications using Sunmi (MaxProgram), improved UI designs for the Heawork System, and performed system testing."
  },
  {
    id: 3,
    role: "DevOps",
    company: "Pos System",
    period: "Feb 10, 2025 - May 02, 2025",
    type: "School Project",
    description: "Monitored server performance and resolved infrastructure issues. Configured environments for development, testing, and production. Designed responsive UIs with HTML/CSS/JS/Bootstrap 5."
  },
  {
    id: 4,
    role: "Designer",
    company: "Inventory Management App",
    period: "Jan 14, 2025 - Jan 29, 2025",
    type: "School Project",
    description: "Designed responsive UIs; created wireframes and mockups using Figma. Collaborated with developers to ensure design consistency. Handled data interactions."
  },
  {
    id: 5,
    role: "Team Leader",
    company: "Video Download Tool",
    period: "Nov 18, 2024 - Nov 28, 2024",
    type: "School Project",
    description: "Led a team of 3 in building a video downloader tool. Defined workflow, delegated tasks and integrated JSON-based configuration."
  },
  {
    id: 6,
    role: "Designer",
    company: "Bakery Shop Website",
    period: "Oct 21, 2024 - Nov 5, 2024",
    type: "School Project",
    description: "Designed a responsive bakery website using SASS and consistent visual patterns."
  },
  {
    id: 7,
    role: "Designer",
    company: "Brochure Design",
    period: "Jun 18, 2024 - Aug 16, 2024",
    type: "School Project",
    description: "Created marketing brochures using Figma and applied branding guidelines."
  }
];

export const TECHNICAL_SKILLS = [
  'React / React 19',
  'TypeScript',
  'Flutter / Dart',
  'React Native / Expo',
  'Tailwind CSS',
  'JavaScript (ES6+)',
  'HTML5 / CSS3 / SASS',
  'Node.js / Express.js',
  'PHP / Laravel',
  'MySQL / MariaDB',
  'Python / Tkinter',
  'Web Audio & Canvas API'
];

export const TOOLS_AND_PLATFORMS = [
  'Figma (UI/UX)',
  'CapCut',
  'AI & Generative Tools',
  'Git / GitHub',
  'Vite / Webpack',
  'Postman',
  'Linux (Ubuntu)',
  'Firebase',
  'Jira / ClickUp',
  'Power BI'
];

export const WORKSHOPS = [
  { name: 'Product Owner', detail: 'Jan 2025' },
  { name: 'UX/UI Design', detail: 'Feb - Mar 2025' },
  { name: 'Data Analytics', detail: 'Mar 2025' },
  { name: 'Project Management', detail: 'Feb 2025' }
];
