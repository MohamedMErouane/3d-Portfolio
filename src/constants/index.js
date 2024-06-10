
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  marsamaroc,
  stryve1,
  stryve2,
  Sma,
  nestjs,
  nextjs,
  Portfolio,
  Gira,
  studywithme,
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Gamer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "nestjs",
    icon: nestjs,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },

];

const experiences = [
  {
    title: "Mobile Developer",
    company_name: "Marsa Maroc",
    icon: marsamaroc,
    iconBg: "#383E56",
    date: "juin 2023 - october 2023",
    points: [
      "Developing and maintaining mobile applications using java and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Flawco",
    icon: Sma,
    iconBg: "#E6DEDD",
    date: "october 2023 - Feb 2024",
    points: [
      "Developing and maintaining web applications using Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Stryve solutions",
    icon: stryve1,
    iconBg: "#383E56",
    date: "March 2024 - juin 2024",
    points: [
      "Developing and maintaining web applications using React.js,Nest.js,Typescript,Prisma,Postegrsql and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Stryve solutions",
    icon: stryve2,
    iconBg: "#E6DEDD",
    date: "juin 2024 - Present",
    points: [
      "Developing and maintaining web applications using Mern stack and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product,but Med proved me wrong.",
    name: "Mohamed laagudi",
    designation: "Manager",
    company: "Marsa maroc",
    image: "src/assets/p1.jpeg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mohamed does.",
    name: "Amine knitrate",
    designation: "Manager",
    company: "Stryve solutions",
    image: "src/assets/p2.jpeg",
  },
  {
    testimonial:
      "After Mohamed optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Habib Merouane",
    designation: "CEO",
    company: "FLAWCO",
    image: "src/assets/p3.jpeg",
  },
];

const projects = [
  {
    name: "WorkSync Pro",
    description:
      "WorkSync Pro is a web application for managing workforce tasks and employee schedules. It enables administrators to assign tasks, track employee work hours, and communicate in real-time. Employees can view their tasks and schedules, while administrators can monitor progress and adjust assignments as needed. With its intuitive interface and real-time updates, WorkSync Pro streamlines task management and promotes productivity",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Gira,
    source_code_link: "https://github.com/MohamedMErouane/Stage2.git",
  },
  {
    name: "Study With Me",
    description:
      "StudyHub Connect is a dynamic web platform that fosters collaborative studying among students worldwide. Through real-time conferencing, chat functionality, task management, and resource sharing, students can connect, learn, and support each other regardless of geographical boundaries. It enables the exchange of knowledge, ideas, and study materials, creating a vibrant global learning community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: studywithme,
    source_code_link: "https://github.com/MohamedMErouane/Pfe-F-B.git",
  },
  {
    name: "Med Merouane Portfolio",
    description:
      "Med Merouane Portfolio is a dynamic 3D portfolio platform that elegantly presents your skills as a full-stack developer. Through stunning visuals and interactive elements, it highlights your projects and proficiency in front-end and back-end technologies. With its immersive environment and responsive design, it sets you apart and captivates visitors with your technical expertise and creativity.. and it's decribing my skills as devlopeur with the whole experience",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Emailjs",
        color: "green-text-gradient",
      },
      {
        name: "Taliwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
