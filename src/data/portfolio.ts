export const profile = {
  name: "Deepika Jakati",
  title: "Graduate Student in Computer Science",
  subtitle: "Angular • DevOps • API Integration",
  location: "Stockton, CA",
  email: "deepikajakati@gmail.com",
  phone: "+1 (209) 279-8311",
  links: {
    github: "https://github.com/DeepikaASDev",
    linkedin: "https://www.linkedin.com/in/jakati-deepika-3a1b4222a",
    resumePdf: "/DeepikaJakatiR.pdf"
  },
  about:
    "Graduate student in Computer Science with prior experience as an Associate Software Developer at EffiaSoft. I build responsive web applications with Angular, work with API integration, and follow practical DevOps workflows using Git and GitHub."
};

export const highlights = [
  { title: "Frontend", desc: "Angular, Kendo UI, responsive UI, performance optimization" },
  { title: "API & Testing", desc: "REST APIs, Postman, debugging, integration best practices" },
  { title: "Databases", desc: "MongoDB, MySQL, schema basics, queries, data modeling" },
  { title: "DevOps", desc: "Git/GitHub workflows, branching, CI/CD basics, deployments" }
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Java", "Python", "C"],
  frontend: ["Angular", "HTML5", "CSS3", "Bootstrap", "Kendo UI"],
  backendApi: ["REST APIs", "API Integration", "Postman API Testing"],
  databases: ["MongoDB", "MySQL"],
  devops: ["Git", "GitHub", "CI/CD Basics", "DevOps Workflow"],
  tools: ["VS Code", "Postman"]
};

export const education = [
  {
    degree: "Master of Science in Computer Science",
    university: "University of the Pacific",
    location: "Stockton, CA",
    date: "Aug 2024 – May 2026",
    points: [
      "Currently pursuing graduate studies in Computer Science.",
      "Focused on software engineering, full-stack development, and collaborative project delivery."
    ]
  },
  {
    degree: "Bachelor of Technology",
    university: "Hyderabad Institute of Technology and Management",
    location: "Hyderabad, India",
    date: "Graduated Aug 2022",
    points: [
      "Built strong foundations in programming, problem solving, and web technologies."
    ]
  }
];

export type Project = {
  title: string;
  subtitle: string;
  stack: string[];
  impact: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "IoT Light Sensor Dashboard",
    subtitle: "Team project — dashboard + integration workflow",
    stack: ["Angular", "REST APIs", "GitHub", "DevOps Workflow"],
    impact: [
      "Implemented a clean dashboard UI to visualize sensor data and system status.",
      "Used GitHub branching and pull requests to coordinate frontend, backend, and embedded collaboration.",
      "Documented build and deployment steps so non-technical stakeholders can follow progress."
    ],
    links: [{ label: "Repository", href: "https://github.com/SE4CPS/IoT-Light-Sensor/tree/dashboard" }]
  },
  {
    title: "Production Angular Modules (EffiaSoft)",
    subtitle: "Responsive modules and reusable components",
    stack: ["Angular", "TypeScript", "HTML", "CSS", "Bootstrap"],
    impact: [
      "Built reusable UI components and improved responsiveness across screens.",
      "Integrated REST endpoints and collaborated with backend teams for reliable delivery.",
      "Participated in code reviews and maintained clean, modular code."
    ]
  }
];

export const experience = [
  {
    company: "EffiaSoft Private Limited",
    title: "Associate Software Developer",
    date: "Jul 2022 – Aug 2024",
    points: [
      "Developed and maintained responsive Angular modules used in production applications.",
      "Built reusable UI components and optimized UX and frontend workflows for performance.",
      "Integrated REST APIs and collaborated with backend teams to deliver scalable features.",
      "Worked in agile teams, participated in code reviews, and followed best practices."
    ]
  },
  {
    company: "EffiaSoft Private Limited",
    title: "Software Developer Intern",
    date: "Mar 2022 – Jun 2022",
    points: [
      "Completed a 4-month internship in the Angular development team.",
      "Assisted in building UI components and fixing bugs in existing modules.",
      "Gained hands-on experience with team-based software delivery."
    ]
  }
];