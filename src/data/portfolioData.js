export const profile = {
  name: 'Saikiran Srichurnam',
  role: 'Full Stack Developer',
  location: 'Hyderabad, India · Open to relocation',
  email: 'saikiransrichurnam628@gmail.com',
  github: 'https://github.com/Saikiran-Srichurnam',
  linkedin: 'https://linkedin.com/in/saikiran-srichurnam',
  resume: '/resume.pdf',
}

export const skillGroups = [
  { title: 'Frontend', icon: 'panels-top-left', skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'React Router'] },
  { title: 'Backend', icon: 'server', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Middleware', 'bcrypt'] },
  { title: 'Databases & ORM', icon: 'database', skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Mongoose'] },
  { title: 'Tools & workflow', icon: 'wrench', skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'Neon', 'VS Code'] },
]

export const projects = [
  {
    number: '01', name: 'Job Tracker SaaS', category: 'FULL-STACK APPLICATION',
    description: 'A job application management platform that brings application tracking and progress insights into one dashboard.',
    features: ['Authentication and protected routes', 'Create and manage job applications', 'Search, filtering and server-side pagination', 'Dashboard statistics and visual analytics'],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT'],
    github: 'https://github.com/Saikiran-Srichurnam/job_tracker_saas',
    demo: 'https://job-tracker-saas-dusky.vercel.app/',
    visual: 'tracker',
  },
  {
    number: '02', name: 'FlowBoard', category: 'FRONTEND PRODUCT UI',
    description: 'A project and task management interface for organizing work through projects, tasks and a Kanban board.',
    features: ['Project and task CRUD workflows', 'Kanban board with status and priority controls', 'Search, filtering and dashboard summaries', 'Responsive interface and client-side persistence where implemented'],
    stack: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'Context API'],
    github: 'https://github.com/Saikiran-Srichurnam/FlowBoard',
    demo: null,
    visual: 'flowboard',
  },
]

export const experiences = [
  {
    company: 'Sandblaze Digitals', role: 'Web Development Intern', location: 'Hyderabad, India', dates: 'Jul 2025 – Jan 2026',
    bullets: [
      'Developed reusable React.js components across 10+ web pages using JavaScript and Tailwind CSS.',
      'Integrated REST APIs into React applications and built authentication pages.',
      'Collaborated with developers on feature development, testing, debugging and deployment support; used Git/GitHub and fixed responsive UI issues.',
    ],
  },
  {
    company: 'CodSoft', role: 'Web Developer Intern', location: 'Remote', dates: 'Dec 2024 – Jan 2025',
    bullets: [
      'Developed 3+ responsive web applications using HTML5, CSS3 and JavaScript, including interactive interfaces and API-based functionality.',
      'Used asynchronous JavaScript and Git/GitHub for version control.',
    ],
  },
]

export const education = {
  degree: 'B.Tech, Computer Science and Engineering (Data Science)',
  institution: 'Malla Reddy Institute of Engineering and Technology',
  location: 'Hyderabad, India',
  year: '2025',
  cgpa: '8.1/10',
}
