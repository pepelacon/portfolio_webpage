import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  flask,
  box,
  gazp,
  truck,
  reactjs,
  sckillfactory,
  racoon,
  tripguide,
  threejs,
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
    title: "Frontend Developer",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "Flask",
    icon: flask,
  },
];

const experiences = [
  {
    title: "Automation Engineer",
    company_name: "PJSC Gazprom",
    icon: gazp,
    iconBg: "#E6DEDD",
    date: "Aug 2013 - Sep 2018",
    points: [
      "Utilized my FOXBORO SPEC 200, Ladder Diagram to design, develop, and implement new automated components.",
      "implemented a server redundancy system and developed additional control points for the status of automation system nodes.",
    ],
  },
  {
    title: "Business Owner / Moving Company",
    company_name: "Ice’N’Dice",
    icon: box,
    iconBg: "#E6DEDD",
    date: "Dec 2018 - Feb 2020",
    points: [
      "Developed comprehensive business plans, including setting goals, defining strategies, and creating budgets.",
      "Oversaw day-to-day operations for team of 14 employers and 4 box-trucks , ensuring efficient workflow.",
      "Reduction of advertising costs by half since the start of the business due to effective communication and networking with realtors and community managers.",
      "Increased the value of the company by 4 times."
    ],
  },
  {
    title: "Truck driver / Dispatcher",
    company_name: "Ucell TruckCompany",
    icon: truck,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Nov 2022",
    points: [
      "Managed the dispatch process by assigning seven drivers to specific routes and coordinating their activities.",
      "Planned connections between drivers and customers as a result, 92% of deliveries were made on time.",
    ],
  },
];


const projects = [
  {
    name: "SkillFactory",
    description:
      "Educational platform that allows instructors to manage content and students to view and interact with content.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sckillfactory,
    source_code_link: "https://github.com/pepelacon/capstone_project",
  },
  {
    name: "Racoon Store",
    description:
      "Online store equipped with search and filter tools, shopping cart, and user authorization functions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Auth0",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: racoon,
    source_code_link: "https://github.com/pepelacon/project-second-phase",
  }
];

export { services, technologies, experiences, projects };
