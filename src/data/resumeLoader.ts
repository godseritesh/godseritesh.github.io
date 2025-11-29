export interface Education {
  institution: string;
  location: string;
  degree: string;
  dates: string;
  cgpa: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  dates: string;
  highlights: string[];
}

export interface Project {
  name: string;
  type: string;
  live_url?: string;
  repo_url?: string;
  summary: string;
  technical_details: string[];
}

export interface TechnicalSkills {
  languages: string[];
  tools: string[];
  databases: string[];
  cloud: string[];
  concepts: string[];
}

export interface Resume {
  personal: {
    name: string;
    role: string;
    phone: string;
    email: string;
    location: string;
    short_bio: string;
  };
  education: Education[];
  work_experience: WorkExperience[];
  projects: Project[];
  technical_skills: TechnicalSkills;
  certifications: string[];
  extracurriculars: string[];
  links: Record<string, string>;
}

// Load resume data from JSON file
const resumeData: Resume = {
  personal: {
    name: "Ritesh Godse",
    role: "Software developer & AI Enthusiast",
    phone: "+91 8983100889",
    email: "work.riteshgodse@gmail.com",
    location: "Pune, Maharashtra, India",
    short_bio: "Software developer focused on high-performance FinTech systems and applied AI. Skilled in distributed systems, Kafka pipelines, cloud IaC, and LLM integrations."
  },
  education: [
    {
      institution: "Vishwakarma Institute of Information Technology",
      location: "Pune, Maharashtra, India",
      degree: "B. Tech. Artificial Intelligence & Data Science Engineering",
      dates: "August 2021 – May 2025",
      cgpa: "8.98"
    }
  ],
  work_experience: [
    {
      title: "Software Developer",
      company: "PayU Payments",
      location: "Pune, Maharashtra, India",
      dates: "June 2025 - Present",
      highlights: [
        "Designed and implemented a service for generating the Daily Settlement Table, improving settlement accuracy by 35% and reducing redundancy in storage by 40%.",
        "Built an MCP-based communication service to interface with external BBPS systems, processing over 40,000 transactions per hour using Kafka and MongoDB.",
        "Developed an LLM-powered chatbot with RESTful integrations, reducing customer query resolution time by 25% and automating 40% of support tickets.",
        "Engineered a Recurring report scheduler for triggered system reports, integrated into CI/CD workflows using Jenkins and deployed on AWS, cutting manual intervention by 60%."
      ]
    },
    {
      title: "Software Developer (Contract)",
      company: "JPMorgan Chase & Co.",
      location: "Remote, India",
      dates: "January 2025 - June 2025",
      highlights: [
        "Architected and developed a Java pipeline to migrate legacy datasets from Hadoop to Azure Delta Lake, achieving 2× faster throughput and establishing a POC framework later adopted for production scaling.",
        "Provisioned and deployed cloud infrastructure across DEV, PAT, and PROD environments using Terraform for Infrastructure as Code (IaC), reducing environment setup time by 65%.",
        "Designed and integrated contract-based APIs with PactFlow, enabling seamless backward compatibility validation and reducing integration defects by 30%."
      ]
    }
  ],
  projects: [
    {
      name: "Map My Ganapati",
      type: "Live",
      live_url: "https://mapmyganpati.vercel.app/",
      summary: "City-scale festival navigation web app enabling devotees to explore and find 150+ Ganpati pandals with precise locations, aarti timings, and photos.",
      technical_details: [
        "Built using Next.js, Firebase, and Leaflet.js (OpenStreetMap).",
        "Achieved 99.9% uptime and managed 5,000+ concurrent users during peak festival hours.",
        "Configured Infrastructure as Code (IaC) using AWS CloudFormation templates and deployed frontend on Vercel and backend on Firebase, cutting hosting costs by 100% compared to Google Maps API."
      ]
    },
    {
      name: "Sky-Link",
      type: "GitHub",
      repo_url: "https://github.com/godseritesh/SkyLink",
      summary: "Java-based Airline Reservation System implementing OOP principles and in-memory data structures for efficient flight search, seat allocation, and bookings.",
      technical_details: [
        "Engineered safe seat booking using synchronized access and concurrent queues, eliminating race conditions and preventing double bookings across 100+ parallel transactions.",
        "Optimized data lookups through HashMap caching, achieving O(1) retrieval time and reducing average booking latency by 80% compared to naive list traversal."
      ]
    }
  ],
  technical_skills: {
    languages: ["Java", "Python", "SQL", "Shell Scripting", "Node.JS", "Next.JS", "Express.JS", "Pyspark"],
    tools: ["Git", "REST API", "Flask", "Docker", "Jenkins", "Grafana", "Machine Learning", "DataBricks", "Kafka"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Oracle", "NoSQL"],
    cloud: ["AWS", "Azure", "Vercel", "Firebase"],
    concepts: ["Data Structures", "OOP", "Multithreading", "Concurrency", "CI/CD", "ETL", "IaC"]
  },
  certifications: [
    "IR4.0 Foundation by Microsoft & SAP",
    "Micro1 Backend Development",
    "Oracle SQL Databases",
    "AWS Cloud Practitioner Essentials"
  ],
  extracurriculars: [
    "Vice President, NSS VIIT (2023–24): Built and deployed a web app in 48 hrs using open-source tech for event polling and awareness, engaging 3500+ users and increasing blood donation count by 25%.",
    "Published Research Paper at IEEE Conference, NIT Rourkela on Next Word Prediction System using NLP",
    "Qualified for Google Hash Code 2022",
    "Conference Out, TES-46 — SSB: Among the top 10 out of 400 cadets"
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/godse-ritesh/",
    github: "https://github.com/godseritesh",
    geeksforgeeks: "https://www.geeksforgeeks.org/user/riteshgodse/",
    leetcode: "https://leetcode.com/u/riteshgodse/",
    resume_drive: "https://drive.google.com/file/d/1O-HVMnwcQcYpDm0SCwtkRNKe-QDcKXSy/view?usp=sharing",
    other_drive_1: "https://drive.google.com/file/d/1EKXE8i0WMtQg9qkuS51K-T9nn1s6fshK/view?usp=sharing",
    mapmyganpati: "https://mapmyganpati.vercel.app/",
    skylink_repo: "https://github.com/godseritesh/SkyLink"
  }
};

export const getResume = (): Resume => resumeData;
