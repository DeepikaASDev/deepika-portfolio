export const profile = {
  name: "Deepika Jakati",
  title: "Full Stack Software Engineer",
  subtitle: "React · Angular · TypeScript · Node.js · Python · .NET · SQL & NoSQL",
  location: "San Jose, CA",
  workAuth: "Authorized to work in the U.S. (F-1 STEM OPT)",
  email: "deepikajakati@gmail.com",
  phone: "+1 (209) 279-8311",
  links: {
    github: "https://github.com/DeepikaASDev",
    linkedin: "https://www.linkedin.com/in/jakatideepika",
    resumePdf: "/Deepika_Jakati_Resume.pdf"
  },
  about:
    "Full Stack Software Engineer with 2.5+ years of professional experience designing, building, testing, and shipping production web applications end to end — from responsive React and Angular front ends to secure REST APIs in Node.js/Express, Python/Flask, .NET/C#, and PHP/Laravel, backed by MySQL, SQL Server, and MongoDB.",
  aboutMore:
    "I've delivered end-user and data-management features for a live enterprise platform, built a Python data pipeline that processes 10,000+ records a day with sub-second queries, and grew from intern to associate developer in under a year. M.S. in Computer Science, University of the Pacific (2026)."
};

export const highlights = [
  { value: "2.5+", label: "Years of professional experience", desc: "Shipping production web apps across the full stack." },
  { value: "10K+", label: "Records processed daily", desc: "Real-time Python ETL pipeline with sub-second queries." },
  { value: "4", label: "Backend frameworks in production", desc: "Node.js/Express, Python/Flask, .NET/C#, PHP/Laravel." },
  { value: "<1 yr", label: "Intern → Associate Developer", desc: "Promoted at EffiaSoft for ownership and delivery." }
];

export type Experience = {
  company: string;
  title: string;
  date: string;
  location: string;
  stack: string[];
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Master's Ledger LLC",
    title: "Front-End Developer Intern",
    date: "Nov 2026 – Present",
    location: "Irving, TX (Remote)",
    stack: ["React", "JavaScript", "HTML", "CSS", "REST APIs", "WCAG", "Figma"],
    points: [
      "Develop responsive, cross-browser web pages and reusable React components in JavaScript, HTML, and CSS, translating Figma/Adobe XD designs into pixel-accurate, production-ready UI.",
      "Integrate front-end components with REST APIs and back-end services, handling JSON data flow between the UI and the server.",
      "Apply WCAG accessibility standards and page-load optimizations so pages are usable for all users and load quickly across browsers.",
      "Collaborate with designers, back-end developers, and QA in an Agile/Scrum team, shipping work through Git pull requests and code reviews."
    ]
  },
  {
    company: "EffiaSoft Private Limited",
    title: "Associate Software Developer",
    date: "Jul 2022 – Aug 2024",
    location: "Hyderabad, India",
    stack: ["Angular", "Node.js/Express", ".NET/C#", "PHP/Laravel", "JWT/OAuth", "MySQL", "SQL Server", "MongoDB", "Postman"],
    points: [
      "Worked with product managers, client stakeholders, and cross-functional teams across the full SDLC to gather user requirements and turn them into technical specifications for a live enterprise production platform.",
      "Formulated implementation plans (language, platform, and resource requirements), then designed, coded, tested, and documented end-user and data-management features end to end using Angular on the front end and Node.js/Express, .NET/C#, and PHP/Laravel on the back end.",
      "Built and maintained REST API endpoints for the enterprise platform with JWT/OAuth-based authentication and structured JSON data exchange, while keeping sensitive user data strictly confidential.",
      "Wrote and optimized SQL queries and designed relational and NoSQL schemas across MySQL, SQL Server, and MongoDB to meet application requirements and support efficient backend integration.",
      "Owned debugging and code maintenance across the application lifecycle; wrote unit and automated tests and validated every release against quality standards with Postman API test suites before deployment.",
      "Participated in daily Scrum, sprint planning, and retrospectives; used Git branching and pull requests for code review and resolved merge conflicts to keep releases stable. Promoted from intern to associate developer in under a year."
    ]
  },
  {
    company: "EffiaSoft Private Limited",
    title: "Software Developer Intern",
    date: "Mar 2022 – Jun 2022",
    location: "Hyderabad, India",
    stack: ["Angular", "Cypress", "Selenium"],
    points: [
      "Built reusable Angular UI components and resolved defects in existing modules as part of the Angular development team, following established coding and documentation practices.",
      "Automated functional testing with Cypress and Selenium, improving test coverage and release confidence ahead of production updates."
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
    title: "IoT Light Monitoring System",
    subtitle: "End-to-end full-stack monitoring: ESP32 sensors → Flask API → MongoDB → dashboard",
    stack: ["ESP32", "I2C", "Python", "Flask", "MongoDB", "REST APIs"],
    impact: [
      "Engineered an end-to-end full-stack monitoring application connecting physical sensors to a web back end: ESP32 hardware → Python/Flask REST API → MongoDB database.",
      "Integrated an ESP32 microcontroller with I2C light sensors to capture live light-intensity readings and send them to the server.",
      "Built Python/Flask REST API endpoints to receive, validate, and serve sensor readings as JSON to the application.",
      "Designed the MongoDB data model for time-stamped sensor readings so current and historical light levels can be stored and queried.",
      "Delivered the system across 15 Agile sprints in a Scrum team, planning features, testing each increment, and managing code in Git."
    ],
    links: [{ label: "Repository", href: "https://github.com/SE4CPS/IoT-Light-Sensor/tree/dashboard" }]
  },
  {
    title: "Real-Time Weather Data Pipeline",
    subtitle: "Real-time ETL pipeline processing 10,000+ records a day with sub-second queries",
    stack: ["Python", "ETL", "MongoDB", "Redis"],
    impact: [
      "Designed and implemented a real-time ETL data pipeline in Python that ingests external weather data feeds and processes 10,000+ records daily.",
      "Built the extract and transform stages to clean and normalize raw API responses into a consistent schema before loading them.",
      "Stored processed records in MongoDB and used aggregation pipelines to compute summaries for fast analytical queries.",
      "Added a Redis caching layer for frequently requested data, achieving sub-second query response times and cutting redundant API calls.",
      "Structured the pipeline into separate ingestion, transformation, storage, and caching stages so each part can be tested and improved independently."
    ]
  },
  {
    title: "Weather–Music Trends Analysis",
    subtitle: "Data analysis of weather conditions vs. music-listening trends across 100+ cities",
    stack: ["Python", "Seaborn", "Tableau", "Statistics"],
    impact: [
      "Analyzed weather and music-listening data across 100+ cities to find how weather conditions relate to listening trends.",
      "Collected, cleaned, and merged the weather and music datasets in Python, handling missing values and aligning records by city.",
      "Ran correlation and statistical analysis to measure relationships between weather variables and listening patterns, uncovering genre-to-climate trends.",
      "Visualized findings with Seaborn charts, including correlation heatmaps and trend plots.",
      "Built interactive Tableau dashboards to present the results clearly to non-technical audiences."
    ]
  }
];

export const skills: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python", "C#", "PHP", "SQL", "HTML5", "CSS3"] },
  { title: "Frontend", items: ["React", "Angular", "Reusable Components", "Responsive & Cross-Browser UI", "WCAG Accessibility", "Page-Load Optimization", "Figma / Adobe XD Handoff"] },
  { title: "Backend & APIs", items: ["Node.js / Express", "Python / Flask", ".NET / C#", "PHP / Laravel", "RESTful API Design", "JWT / OAuth", "JSON", "Third-Party API Integration"] },
  { title: "Databases & Data", items: ["MySQL", "SQL Server", "MongoDB (Aggregation)", "Redis Caching", "Schema Design", "Query Optimization", "ETL Pipelines", "Seaborn", "Tableau"] },
  { title: "Testing & Quality", items: ["Unit & Automated Testing", "Cypress", "Selenium", "Postman", "Debugging", "Code Reviews"] },
  { title: "Tools & Practices", items: ["Git & GitHub", "JIRA", "Vercel", "AI-Assisted Dev Tools", "Agile / Scrum", "SDLC", "Data Structures & Algorithms", "OOP"] }
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    university: "University of the Pacific",
    location: "Stockton, CA",
    date: "Aug 2024 – May 2026",
    points: [
      "Graduate study in software engineering, scalable systems, and data, with collaborative full-stack, data pipeline, and IoT projects."
    ]
  },
  {
    degree: "Bachelor of Technology",
    university: "Hyderabad Institute of Technology and Management",
    location: "Hyderabad, India",
    date: "Aug 2018 – Aug 2022",
    points: ["Foundations in programming, data structures and algorithms, web technologies, and databases."]
  }
];

export const certifications = [
  {
    title: "Advanced Certification in Data Science (NLP)",
    provider: "UpGrad & IIIT Bangalore",
    date: "2023"
  }
];
