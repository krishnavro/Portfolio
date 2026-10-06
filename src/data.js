// ─────────────────────────────────────────────────────────────
//  All the text on the portfolio lives here.
//  Edit this file to change content — no need to touch components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Shrikrishna Kumbhar',
  location: 'Pune, India',
  intro:
    'I build and deploy full-stack web applications with MongoDB, Express.js, React.js and Node.js, focused on secure authentication, role-based access control and production-ready RESTful APIs.',
  email: 'shrikrishnakumbhar267@gmail.com',
  phone: '+91 93251 67530',
  phoneLink: 'tel:+919325167530',
  github: 'https://github.com/krishnavro',
  // TODO: replace with your real LinkedIn profile URL
  linkedin: 'https://www.linkedin.com/in/shrikrishna-kumbhar-1a07a8269/',
  resume: 'Shrikrishna-Kumbhar-Resume.pdf',
}

// Small timeline shown at the top of the page (left → right)
export const timeline = [
  { label: '10th', years: '2018' },
  { label: '12th', years: '2021' },
  { label: 'BCS', years: '2021–24' },
  { label: 'MCA', years: '2025–27', current: true },
]

export const about = [
 'I’m an MCA student with a strong interest in web development and software engineering. I’m currently building my skills in MERN Stack development and working on improving my understanding of frontend, backend, databases, APIs, and problem-solving.',

'I enjoy learning how applications work from end to end and prefer understanding concepts through practical implementation. Along with web development, I’m strengthening my programming fundamentals, JavaScript skills, OOP concepts, DSA, and logical thinking.',

'I’m currently looking for internship and entry-level opportunities where I can apply my skills, learn from experienced developers, contribute to real-world applications, and grow as a software developer.',

'I’m a consistent learner who believes in improving through practice, building, and solving problems.']

export const skills = [
  { category: 'Languages', items: ['C', 'C++', 'Java', 'Python', 'JavaScript'] },
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'React.js'] },
  { category: 'Backend', items: ['Node.js', 'Express.js'] },
  { category: 'Database', items: ['MongoDB', 'MySQL'] },
  { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'Vercel', 'Render'] },
]

// ── Projects ────────────────────────────────────────────────
// `live` and `github` are optional. Leave them out (or '') and the link is hidden.

export const mernProjects = [
  {
    id: 'busgo',
    name: 'BusGo',
    subtitle: 'Bus reservation and management system',
    points: [
      'Full-stack app for bus scheduling, seat booking and reservation management.',
      'Secure login with hashed passwords and JWT sessions stored in HTTP-only cookies.',
      'Role-based access with separate dashboards for travellers, operators and admins.',
      'Frontend deployed on Vercel and backend on Render, so it runs live.',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Vercel', 'Render'],
    live: 'https://bus-go-pro.vercel.app/',
    github: '', 
  }
]

export const frontendProjects = [
  {
    id: 'amazon-clone',
    name: 'Amazon Clone',
    subtitle: 'E-commerce front end',
    points: [
      'Front-end clone of the Amazon website using plain HTML, CSS and JavaScript.',
      'Responsive product listing pages and a shopping cart interface.',
      'Dynamic UI built with core DOM manipulation, no framework.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: '',
    github: 'https://github.com/krishnavro/AmazonClone',
  },
  {
    id: 'rps-game',
    name: 'Rock-Paper-Scissor',
    subtitle: 'Rock-Paper-Scissor Game.',
    points: [
      'Developed an interactive Rock-Paper-Scissors game using HTML, CSS, and JavaScript.',
      'Implemented Local Storage to persist scores across browser sessions.',
      'Autoplay mode for continuous gameplay without manual input.',
      'Designed a responsive and user-friendly interface for smooth interaction.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: '',
    github: 'https://github.com/krishnavro/Rock-Paper-Scissor', 
  }
]

// Shown in the "View Other Projects" popup — just the name and technology.
// To add a project, copy one line and change it.
export const otherProjects = [
  { name: 'Youtube Clone', tech: ['HTML', 'CSS'] , github: 'https://github.com/krishnavro/HTML-CSS-Youtube-Clone'},
]

export const education = [
  {
    title: 'Master of Computer Applications (MCA)',
    institution: 'Nutan Maharashtra Institute of Engineering & Technology (NMIET), Pune',
    years: '2025 – 2027',
    score: 'CGPA 8.3 (1st year)',
    current: true,
  },
  {
    title: 'Bachelor of Computer Science (BCS)',
    institution: 'S. M. Joshi College, Hadapsar, Pune',
    years: '2021 – 2024',
    score: 'CGPA 8.1',
  },
  {
    title: 'HSC (12th)',
    institution: 'Maharashtra State Board, Pune',
    years: '2021',
    score: '79.50%',
  },
  {
    title: 'SSC (10th)',
    institution: 'Maharashtra State Board, Pune',
    years: '2018',
    score: '77.80%',
  },
]

export const certifications = [
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    link: '', // optional: paste the certificate URL to show a "View certificate" link
  },
]
