export const profile = {
  name: "Deepika Jakati",
  title: "Software Engineer & M.S. Computer Science ",
  // subtitle: "Frontend Development • REST APIs • Data Pipelines • IoT Systems",
  location: "Stockton, CA",
  email: "deepikajakati@gmail.com",
  phone: "+1 (209) 279-8311",
  links: {
    github: "https://github.com/DeepikaASDev",
    linkedin: "https://www.linkedin.com/in/jakati-deepika-3a1b4222a",
    resumePdf: "/DeepikaJakatiResumeNew.pdf"
  },
  about:
    "Software Engineer with 2+ years of frontend development experience and currently pursuing a Master’s in Computer Science. I build scalable web applications, real-time data pipelines, and RESTful APIs, with a strong interest in full-stack engineering and reliable high-performance systems."
};

export const highlights = [
  { title: "2+ Years Experience", desc: "Production frontend development across responsive Angular web applications." },
  { title: "Real-Time Systems", desc: "Built weather and IoT data workflows with ETL pipelines, caching, and live ingestion." },
  { title: "API-Driven Development", desc: "Hands-on experience designing and integrating RESTful APIs and backend-connected features." },
  { title: "Agile Delivery", desc: "Collaborated in Scrum-based teams with code reviews, debugging, and iterative releases." }
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Java", "Python", "C"],
  frontend: ["Angular", "HTML", "CSS", "Bootstrap"],
  backendApi: ["REST APIs", "Flask", "API Testing", "Postman"],
  databases: ["MySQL", "MongoDB", "Redis"],
  tools: ["Git", "Visual Studio Code", "Postman"],
  practices: ["Agile Development", "Code Reviews", "Debugging", "API Testing"]
};

export const education = [
  {
    degree: "Master of Science in Computer Science",
    university: "University of the Pacific",
    location: "Stockton, United States",
    date: "Aug 2024 – May 2026",
    points: [
      "Graduate study focused on software engineering, scalable systems, and collaborative project delivery.",
      "Building practical experience through full-stack, data, and IoT-driven academic projects."
    ]
  },
  {
    degree: "Bachelor of Technology",
    university: "Hyderabad Institute of Technology and Management",
    location: "Hyderabad, India",
    date: "Completed Aug 2022",
    points: [
      "Built foundations in programming, web technologies, and software problem-solving."
    ]
  }
];

export const certifications = [
  {
    title: "Advanced Certification in Data Science (NLP)",
    provider: "UpGrad IIIT Bangalore",
    date: "2023"
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
    title: "Weather Data Pipeline",
    subtitle: "Real-time ETL pipeline for large-scale weather ingestion",
    stack: ["Python", "MongoDB", "Redis", "ETL"],
    impact: [
      "Architected a real-time weather data pipeline processing 10,000+ API records daily using scalable ETL architecture.",
      "Used Redis caching and MongoDB aggregation to achieve sub-second query response times.",
      "Reduced redundant API calls and improved data access efficiency for downstream usage."
    ]
  },
  {
    title: "IoT Light Monitoring System",
    subtitle: "End-to-end sensor monitoring with API-based data ingestion",
    stack: ["ESP32", "Python", "Flask", "MongoDB"],
    impact: [
      "Designed and implemented an end-to-end IoT light monitoring system with ESP32 and I2C sensor integration.",
      "Developed Flask-based RESTful APIs to ingest and process real-time sensor data with low latency.",
      "Contributed in an Agile Scrum team across 15 sprints, supporting architecture reviews and technical reporting."
    ],
    links: [{ label: "Repository", href: "https://github.com/SE4CPS/IoT-Light-Sensor/tree/dashboard" }]
  },
  {
    title: "Weather–Music Trends Analysis",
    subtitle: "Data analysis project across weather conditions and listening behavior",
    stack: ["Python", "Seaborn", "Tableau"],
    impact: [
      "Performed exploratory data analysis across 100+ cities to identify correlations between weather conditions and music listening patterns.",
      "Uncovered genre-to-climate trends using chart data and transformed findings into clear visual dashboards.",
      "Presented insights through Seaborn visualizations and Tableau storytelling."
    ]
  }
];

export const experience = [
  {
    company: "EffiaSoft Private Limited",
    title: "Associate Software Developer",
    date: "Jul 2022 – Aug 2024",
    points: [
      "Developed and maintained multiple responsive Angular web modules used in production applications, improving user experience and UI performance.",
      "Built reusable UI components and optimized frontend workflows to reduce page load time and improve responsiveness.",
      "Integrated REST APIs and worked with backend teams to deliver scalable and reliable features.",
      "Collaborated with UI/UX designers to implement modern user-friendly interfaces using HTML, CSS, and Bootstrap.",
      "Participated in code reviews and helped maintain clean, modular, and maintainable codebases in an agile environment."
    ]
  },
  {
    company: "EffiaSoft Private Limited",
    title: "Software Developer Intern",
    date: "Mar 2022 – Jun 2022",
    points: [
      "Completed a 4-month internship in the Angular development team.",
      "Assisted in building UI components and fixing bugs in existing modules.",
      "Gained hands-on experience in frontend development and team-based software delivery."
    ]
  }
];
