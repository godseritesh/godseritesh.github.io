export const personalInfo = {
  name: 'Ritesh Godse',
  title: 'Software Developer & FinTech Specialist',
  tagline: 'High-performance systems, AI-driven solutions, and scalable architectures',
  email: 'work.riteshgodse@gmail.com',
  bio: 'Software Developer focused on high-performance FinTech systems, distributed architectures, and applied AI. Proven track record building scalable payment processing systems, real-time data pipelines, and LLM-integrated applications with measurable business impact.',
  phone: '+91 8983100889',
  location: 'Pune, India',
  socials: {
    github: 'https://github.com/godseritesh',
    linkedin: 'https://linkedin.com/in/riteshgodse',
    gfg: 'https://auth.geeksforgeeks.org/user/riteshgodse',
    leetcode: 'https://leetcode.com/riteshgodse',
    email: 'mailto:work.riteshgodse@gmail.com',
  },
  resumePdfUrl: '/resume.pdf',
};

export const experience = [
  {
    id: 1,
    company: 'PayU Payments',
    position: 'Graduate Trainee Engineer',
    duration: 'June 2025 - Present',
    description: 'Architecting and building high-performance payment processing systems handling millions of transactions daily. Specializing in settlement accuracy, real-time data pipelines, and LLM-powered customer support automation.',
    highlights: [
      'Designed Daily Settlement Table service, improving settlement accuracy by 35% and reducing storage redundancy by 40%',
      'Built MCP-based communication service for external BBPS systems, processing 40,000+ transactions per hour using Kafka and MongoDB',
      'Developed LLM-powered chatbot with RESTful integrations, reducing customer query resolution time by 25% and automating 40% of support tickets',
      'Engineered recurring report scheduler integrated into CI/CD (Jenkins) and deployed on AWS, cutting manual intervention by 60%',
    ],
    skills: ['Java', 'Spring Boot', 'Kafka', 'MongoDB', 'AWS', 'Docker', 'LLM Integration', 'CI/CD', 'Jenkins'],
  },
  {
    id: 2,
    company: 'JPMorgan Chase & Co.',
    position: 'Software Developer (Contract)',
    duration: 'January 2025 - June 2025',
    description: 'Architected data migration pipelines and cloud infrastructure for trading systems. Implemented API contract testing and infrastructure-as-code for enterprise scalability.',
    highlights: [
      'Architected and developed Java pipeline to migrate legacy datasets from Hadoop to Azure Delta Lake, achieving 2× faster throughput and establishing POC framework for production scaling',
      'Provisioned and deployed cloud infrastructure across DEV, PAT, and PROD using Terraform (IaC), reducing environment setup time by 65%',
      'Designed and integrated contract-based APIs with PactFlow, enabling seamless backward compatibility validation and reducing integration defects by 30%',
    ],
    skills: ['Java', 'Azure', 'Delta Lake', 'Terraform', 'IaC', 'PactFlow', 'REST APIs', 'CI/CD'],
  },
];

export const education = [
  {
    id: 1,
    institution: 'Vishwakarma Institute of Information Technology (VIIT)',
    field: 'B. Tech. Artificial Intelligence & Data Science Engineering',
    year: '2025',
    details: 'CGPA: 8.98. Focused on backend systems, data structures, algorithms, and AI/ML applications.',
  },
];

export const certifications = [
  'IR4.0 Foundation by Microsoft & SAP',
  'Micro1 Backend Development',
  'Oracle SQL Databases',
  'AWS Cloud Practitioner Essentials',
];

export const skills = [
  // Languages
  { name: 'Java', category: 'Language', proficiency: 95 },
  { name: 'Python', category: 'Language', proficiency: 90 },
  { name: 'TypeScript', category: 'Language', proficiency: 85 },
  { name: 'JavaScript', category: 'Language', proficiency: 85 },
  
  // Backend Frameworks
  { name: 'Spring Boot', category: 'Backend', proficiency: 95 },
  { name: 'Node.js', category: 'Backend', proficiency: 90 },
  { name: 'Express.js', category: 'Backend', proficiency: 85 },
  { name: 'Flask', category: 'Backend', proficiency: 80 },
  
  // Databases
  { name: 'MongoDB', category: 'Database', proficiency: 90 },
  { name: 'PostgreSQL', category: 'Database', proficiency: 90 },
  { name: 'MySQL', category: 'Database', proficiency: 85 },
  { name: 'Redis', category: 'Database', proficiency: 85 },
  
  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud', proficiency: 90 },
  { name: 'Docker', category: 'DevOps', proficiency: 90 },
  { name: 'Kubernetes', category: 'DevOps', proficiency: 85 },
  { name: 'Terraform', category: 'DevOps', proficiency: 85 },
  { name: 'CI/CD', category: 'DevOps', proficiency: 90 },
  
  // Message Brokers & Streaming
  { name: 'Kafka', category: 'Streaming', proficiency: 90 },
  { name: 'RabbitMQ', category: 'Streaming', proficiency: 80 },
  
  // AI/ML
  { name: 'LLM Integration', category: 'AI/ML', proficiency: 80 },
  { name: 'TensorFlow', category: 'AI/ML', proficiency: 75 },
  { name: 'PyTorch', category: 'AI/ML', proficiency: 75 },
  
  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 85 },
  { name: 'Next.js', category: 'Frontend', proficiency: 80 },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 85 },
  
  // Tools & Others
  { name: 'Git', category: 'Tools', proficiency: 95 },
  { name: 'Linux', category: 'Tools', proficiency: 90 },
  { name: 'Microservices', category: 'Architecture', proficiency: 90 },
  { name: 'REST APIs', category: 'Architecture', proficiency: 95 },
  { name: 'gRPC', category: 'Architecture', proficiency: 80 },
];

export const projects = [
  {
    id: 1,
    title: 'Map My Ganapati',
    tagline: 'City-scale festival navigation app managing 5,000+ concurrent users',
    description: `Map My Ganapati is a Next.js-based web application that enables devotees to discover, navigate to, and share information about 150+ Ganpati pandals with precise locations, aarti timings, and photos. Achieved 99.9% uptime and managed 5,000+ concurrent users during peak festival hours.`,
    technologies: ['Next.js', 'Firebase', 'Leaflet.js', 'OpenStreetMap', 'AWS CloudFormation', 'Vercel'],
    category: 'Full Stack',
    tags: ['geolocation', 'real-time', 'scalability', 'cost-optimized'],
    liveUrl: 'https://mapmyganpati.vercel.app/',
    repoUrl: 'https://github.com/godseritesh/MapMyGanapati',
    imageUrl: '/projects/map-my-ganapati.png',
    highlights: [
      'Managed 5,000+ concurrent users during peak festival hours with 99.9% uptime',
      'Configured IaC using AWS CloudFormation for scalable, reliable deployment',
      'Deployed frontend on Vercel and backend on Firebase, achieving 100% cost savings vs. Google Maps API',
      'Implemented precise geolocation mapping and real-time aarti timing updates',
    ],
    metrics: {
      uptime: '99.9%',
      concurrentUsers: '5,000+',
      costReduction: '100%',
    },
    architecture: {
      frontend: 'Next.js with Tailwind CSS for responsive mobile-first design',
      mapping: 'Leaflet.js with OpenStreetMap for lightweight geolocation',
      backend: 'Firebase for serverless real-time database and hosting',
      deployment: 'Infrastructure as Code via AWS CloudFormation, Vercel CDN',
    },
  },
  {
    id: 2,
    title: 'Sky-Link',
    tagline: 'Airline reservation system handling 100+ parallel transactions safely',
    description: `Sky-Link is a Java-based airline reservation system implementing OOP principles, concurrent programming, and in-memory data structures for efficient flight search, seat allocation, and booking management. Designed to handle 100+ parallel transactions safely without race conditions or double bookings.`,
    technologies: ['Java', 'Concurrency', 'Data Structures', 'HashMap', 'Thread-safe Collections'],
    category: 'Backend',
    tags: ['concurrency', 'data-structures', 'performance'],
    liveUrl: '',
    repoUrl: 'https://github.com/godseritesh/SkyLink',
    imageUrl: '/projects/skylink.png',
    highlights: [
      'Designed safe seat booking using synchronized access and concurrent queues, eliminating race conditions',
      'Prevented double bookings across 100+ parallel transactions using thread-safe data structures',
      'Optimized data lookups through HashMap caching, achieving O(1) retrieval time',
      'Reduced average booking latency by 80% compared to naïve list traversal',
    ],
    metrics: {
      parallelTransactions: '100+',
      latencyReduction: '80%',
      lookupComplexity: 'O(1)',
    },
    architecture: {
      language: 'Java with OOP principles (Encapsulation, Inheritance, Polymorphism)',
      dataStructures: 'HashMap for O(1) flight/seat lookups, ConcurrentHashMap for thread safety',
      concurrency: 'Synchronized blocks and concurrent queues for race-condition prevention',
      design: 'Factory pattern for object creation, Strategy pattern for booking logic',
    },
  },
  {
    id: 3,
    title: 'PaymentGateway Pro',
    tagline: 'Secure, scalable payment processing system for enterprises',
    description: `A comprehensive payment gateway handling millions of transactions daily. Includes fraud detection, reconciliation, settlement, and comprehensive reporting for enterprise clients.`,
    technologies: ['Java', 'Spring Boot', 'MongoDB', 'AWS', 'Docker'],
    category: 'Backend',
    tags: ['payments', 'fintech', 'security'],
    liveUrl: '',
    repoUrl: '#',
    imageUrl: '/projects/payment-gateway.png',
    highlights: [
      'PCI-DSS compliant secure payment processing',
      'Real-time fraud detection using ML models',
      'Horizontal scaling with containerized microservices',
      'Multi-currency support with real-time forex',
    ],
    architecture: {
      frontend: 'Admin dashboard with React and Material-UI',
      backend: 'Distributed Java microservices with Spring Cloud',
      database: 'MongoDB for transaction ledger, PostgreSQL for reports',
      queue: 'Kafka for asynchronous payment processing',
      cache: 'Redis for rate limiting and session management',
    },
  },
  {
    id: 4,
    title: 'AI Content Analyzer',
    tagline: 'LLM-powered tool for analyzing and summarizing content at scale',
    description: `An AI-powered content analysis platform leveraging modern LLMs for automated content summarization, sentiment analysis, and key insight extraction. Handles batch processing and real-time API requests.`,
    technologies: ['Python', 'FastAPI', 'OpenAI GPT', 'PostgreSQL', 'Redis'],
    category: 'AI/ML',
    tags: ['llm', 'nlp', 'ai'],
    liveUrl: '',
    repoUrl: 'https://github.com/godseritesh/ai-content-analyzer',
    imageUrl: '/projects/ai-analyzer.png',
    highlights: [
      'Integration with OpenAI GPT for advanced NLP tasks',
      'Batch processing pipeline for handling large content volumes',
      'Caching layer for optimizing API costs',
      'REST API with rate limiting and authentication',
    ],
    architecture: {
      frontend: 'React web interface with real-time results',
      backend: 'FastAPI Python backend with async request handling',
      llm: 'OpenAI GPT-4 API for content analysis',
      database: 'PostgreSQL for analysis results, Redis for caching',
      scaling: 'Celery task queue for distributed processing',
    },
  },
];

export const achievements = [
  'Reduced customer query resolution time by 25% and automated 40% of support tickets with LLM-powered chatbot',
  'Cut manual intervention by 60% via recurring report scheduler integrated with Jenkins and AWS',
  'Achieved 2× faster throughput for Hadoop-to-Delta Lake migration and established POC framework for production scaling',
  'Reduced environment setup time by 65% through Terraform-based Infrastructure as Code',
  'Reduced integration defects by 30% via contract-based API testing with PactFlow',
  'Managed 5,000+ concurrent users with 99.9% uptime during peak festival hours',
  'Achieved 100% cost savings vs. Google Maps API through Firebase and Vercel deployment',
  'Reduced booking latency by 80% through HashMap caching and O(1) data structure optimization',
  'Prevented double bookings across 100+ parallel transactions with thread-safe concurrent programming',
  'Published research paper at IEEE Conference on Next Word Prediction System using NLP',
  'Qualified for Google Hash Code 2022 - team-based coding challenge',
  'Vice President, NSS VIIT: Built web app in 48 hours engaging 3,500+ users, increased blood donation count by 25%',
];

export const languages = ['English', 'Hindi', 'Marathi'];
