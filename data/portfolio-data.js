/**
 * PORTFOLIO DATA SOURCE OF TRUTH - NEHA BORKAR
 * Centralized, data-driven configuration for all portfolio sections.
 * Strictly adheres to verified information only.
 */

const PORTFOLIO_DATA = {
  personal: {
    fullName: "Neha Borkar",
    shortName: "Neha",
    tagline: "Computer Engineering Student • AI Engineering & Software Development",
    heroDescription: "Second-year Computer Engineering undergraduate at DY Patil College of Engineering and Innovation (Autonomous). Focused on backend development with FastAPI, generative AI systems, and modern software engineering.",
    aboutBio: [
      "I am a Computer Engineering student currently in my second year (third semester) at DY Patil College of Engineering and Innovation, Varale, an autonomous institute affiliated with Savitribai Phule Pune University (SPPU), Maharashtra.",
      "My technical journey is driven by an earnest interest in AI engineering and backend software systems. I enjoy understanding how robust architectures function beneath the surface—from designing asynchronous REST APIs with FastAPI, JWT security, and relational databases, to exploring Generative AI fundamentals and autonomous AI agents.",
      "I believe in solid foundational engineering: strong data structure fundamentals, disciplined version control, clean modular code, and verifiable project development. Whether building interactive educational tools like Q-CORE or end-to-end platforms like WhatsAI, I focus on creating purposeful, transparent software."
    ],
    avatarUrl: "assets/neha_profile.png",
    statusText: "Available for Technical Internships",
    location: "Maharashtra, India"
  },

  academicResults: {
    sgpaSem1: {
      value: "9.5",
      scale: "10.0",
      label: "First Semester SGPA",
      description: "Semester 1 Grade Point Average (SPPU Autonomous Pattern)",
      badge: "Distinction"
    },
    cgpaFirstYear: {
      value: "9.16",
      scale: "10.0",
      label: "First Year CGPA",
      description: "Cumulative Grade Point Average across First Year Engineering",
      badge: "Academic Honors"
    }
  },

  education: {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Engineering",
    currentYear: "Second Year",
    currentSemester: "Third Semester (Sem 3)",
    college: "DY Patil College of Engineering and Innovation, Varale",
    instituteType: "Autonomous Institute",
    university: "Savitribai Phule Pune University (SPPU), Maharashtra",
    duration: "2023 - 2027",
    milestones: [
      {
        year: "2024 - 2025 (Current)",
        title: "Second Year B.Tech — Computer Engineering",
        institution: "DY Patil College of Engineering and Innovation, Varale (Autonomous)",
        status: "In Progress (Semester 3)",
        details: "Core engineering curriculum focusing on Computer Architecture & Organization, Data Structures & Algorithms, Object-Oriented Programming (C++/Python), Database Management Systems, and Discrete Mathematics.",
        tags: ["Semester 3", "Computer Architecture", "DSA", "DBMS", "OOP"]
      },
      {
        year: "2023 - 2024",
        title: "First Year B.Tech — Engineering Foundation",
        institution: "DY Patil College of Engineering and Innovation, Varale (Autonomous)",
        status: "Completed",
        details: "Established strong mathematical and engineering foundations. Achieved 9.5 SGPA in Semester 1 and an overall First Year CGPA of 9.16 / 10.0.",
        tags: ["Sem 1 SGPA: 9.5", "First Year CGPA: 9.16", "Engineering Mathematics", "Basic Computing"]
      },
      {
        year: "2025 - 2027 (Anticipated)",
        title: "Upper Division Specialization & Capstone",
        institution: "DY Patil College of Engineering and Innovation, Varale (Autonomous)",
        status: "Upcoming",
        details: "Planned progression into Advanced Operating Systems, Distributed Computing, Artificial Intelligence & Machine Learning specialization, and Industry Capstone Projects.",
        tags: ["AI Specialization", "Distributed Systems", "B.Tech Capstone"]
      }
    ]
  },

  skills: {
    categories: [
      {
        id: "programming",
        name: "Programming Languages",
        icon: "fa-solid fa-code",
        description: "Core programming languages with verified proficiency",
        items: [
          { name: "Python", proficiency: "Basic", note: "Primary language for backend scripting and AI experimentation", icon: "fa-brands fa-python" },
          { name: "C++", proficiency: "Basic", note: "Academic coursework and object-oriented foundations", icon: "fa-solid fa-cube" }
        ]
      },
      {
        id: "backend",
        name: "Backend Development",
        icon: "fa-solid fa-server",
        description: "Server-side architectures, API design, and security layers",
        items: [
          { name: "FastAPI", proficiency: "Core Framework", note: "Asynchronous REST API construction and schema validation", icon: "fa-solid fa-bolt" },
          { name: "REST API Development", proficiency: "Applied", note: "HTTP endpoints, status codes, and request/response lifecycles", icon: "fa-solid fa-network-wired" },
          { name: "SQLite", proficiency: "Applied", note: "Embedded relational database design and SQL querying", icon: "fa-solid fa-database" },
          { name: "JWT Authentication", proficiency: "Applied", note: "Token generation, claims verification, and protected routes", icon: "fa-solid fa-key" },
          { name: "Bcrypt Password Hashing", proficiency: "Applied", note: "Secure credential hashing and salting practices", icon: "fa-solid fa-lock" }
        ]
      },
      {
        id: "ai_genai",
        name: "AI & Generative AI",
        icon: "fa-solid fa-brain",
        description: "Exploration of modern foundation models and autonomous concepts",
        items: [
          { name: "Generative AI Fundamentals", proficiency: "Conceptual", note: "Transformer architectures, tokenization, and temperature tuning", icon: "fa-solid fa-wand-magic-sparkles" },
          { name: "Prompt Engineering", proficiency: "Applied", note: "Few-shot conditioning, structured markdown outputs, system prompts", icon: "fa-solid fa-comment-dots" },
          { name: "AI Agent Fundamentals", proficiency: "Conceptual", note: "Tool-calling, goal-seeking reasoning loops, and multi-turn memory", icon: "fa-solid fa-robot" },
          { name: "LLM API Integration", proficiency: "Project Exposure", note: "Practical integration with Google Gemini API in project workflows", icon: "fa-solid fa-plug" }
        ]
      },
      {
        id: "tools",
        name: "Developer Tools & Tech",
        icon: "fa-solid fa-toolbox",
        description: "Development environments, tooling, and Python ecosystem",
        items: [
          { name: "Git", proficiency: "Version Control", note: "Branching, staging, committing, and conflict resolution", icon: "fa-brands fa-git-alt" },
          { name: "GitHub", proficiency: "Platform", note: "Remote repositories, collaborative workflows, and GitHub Pages", icon: "fa-brands fa-github" },
          { name: "Linux", proficiency: "Environment", note: "Fundamental shell navigation, permissions, and process management", icon: "fa-brands fa-linux" },
          { name: "Bash", proficiency: "CLI", note: "Terminal commands and automation scripting basics", icon: "fa-solid fa-terminal" },
          { name: "Python Virtual Environment", proficiency: "Tooling", note: "Isolated dependency management via venv", icon: "fa-solid fa-box-archive" },
          { name: "pip", proficiency: "Package Manager", note: "Python package installations and requirements locking", icon: "fa-solid fa-file-invoice" },
          { name: "pytest", proficiency: "Testing", note: "Automated unit and integration test structuring", icon: "fa-solid fa-vial-circle-check" },
          { name: "Python Async Programming", proficiency: "Applied", note: "async/await coroutines, asyncio, and non-blocking I/O", icon: "fa-solid fa-arrows-rotate" },
          { name: "Python Decorators", proficiency: "Applied", note: "Function wrappers, FastAPI route decorators, and middleware", icon: "fa-solid fa-at" }
        ]
      },
      {
        id: "databases",
        name: "Database Management",
        icon: "fa-solid fa-database",
        description: "Relational modeling, queries, and data integrity",
        items: [
          { name: "SQL Fundamentals", proficiency: "Applied", note: "DDL/DML queries, table joins, foreign keys, and indexes", icon: "fa-solid fa-table" },
          { name: "SQLite", proficiency: "Applied", note: "Local file-based transactional database engines", icon: "fa-solid fa-database" },
          { name: "PostgreSQL", proficiency: "Basic Exposure", note: "Introductory exploration of client-server relational databases", icon: "fa-solid fa-server" }
        ]
      },
      {
        id: "dsa",
        name: "Data Structures & Algorithms",
        icon: "fa-solid fa-diagram-project",
        description: "Computational problem solving and algorithmic techniques",
        items: [
          { name: "Arrays & Linked Lists", proficiency: "Academic", note: "Contiguous and pointer-based linear data structures", icon: "fa-solid fa-bars" },
          { name: "Stack, Queue & Deque", proficiency: "Academic", note: "LIFO/FIFO structures and double-ended queues", icon: "fa-solid fa-layer-group" },
          { name: "Recursion", proficiency: "Academic", note: "Base cases, recurrence relations, and call stack dynamics", icon: "fa-solid fa-repeat" },
          { name: "Searching & Sorting", proficiency: "Academic", note: "Linear/Binary Search, Merge Sort, Quick Sort, Bubble Sort", icon: "fa-solid fa-arrow-down-a-z" },
          { name: "Greedy Algorithms", proficiency: "Academic", note: "Locally optimal choice paradigms and applications", icon: "fa-solid fa-compass" },
          { name: "Backtracking", proficiency: "Academic", note: "Systematic state-space tree traversal and pruning", icon: "fa-solid fa-tree" },
          { name: "Branch and Bound", proficiency: "Academic", note: "Combinatorial optimization pruning techniques", icon: "fa-solid fa-network-wired" },
          { name: "Heuristic Algorithms", proficiency: "Academic", note: "Informed search strategies and approximation principles", icon: "fa-solid fa-lightbulb" }
        ]
      },
      {
        id: "software_dev",
        name: "Software Development",
        icon: "fa-solid fa-laptop-code",
        description: "End-to-end software engineering practices and deployment",
        items: [
          { name: "API Development", proficiency: "Applied", note: "Architecting structured RESTful endpoints and contracts", icon: "fa-solid fa-globe" },
          { name: "Authentication Systems", proficiency: "Applied", note: "End-to-end user signup, password hashing, and token workflows", icon: "fa-solid fa-shield-halved" },
          { name: "Database Integration", proficiency: "Applied", note: "Connecting application business logic with storage engines", icon: "fa-solid fa-plug-circle-check" },
          { name: "Software Modularity", proficiency: "Applied", note: "Decoupled architecture, clean folder layout, and separation of concerns", icon: "fa-solid fa-puzzle-piece" },
          { name: "Debugging Fundamentals", proficiency: "Applied", note: "Systematic error isolation, traceback analysis, and logging", icon: "fa-solid fa-bug-slash" },
          { name: "Netlify Deployment", proficiency: "Applied", note: "Deploying production-ready client applications to Netlify", icon: "fa-solid fa-cloud-arrow-up" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "q-core",
      title: "Q-CORE",
      subtitle: "Quantum vs Classical Microprocessor Educational Experience",
      category: "Interactive Educational Platform",
      status: "Production / Academic Showcase",
      featured: true,
      repoUrl: "https://github.com/nehuub08-code/q-core",
      liveUrl: "https://nehuub08-code.github.io/q-core/",
      githubRepo: "nehuub08-code/q-core",
      technologies: ["React 19", "Vite", "Three.js", "Tailwind CSS v4", "WebGL", "Recharts"],
      shortDescription: "An industry-grade, 3D interactive educational platform built for the Computer Architecture & Organization curriculum at DY Patil College of Engineering and Innovation.",
      overview: "Developed as an academic initiative under the curriculum of Savitribai Phule Pune University (Autonomous Institute), Q-CORE visualizes the structural and algorithmic contrasts between classical CMOS microprocessors and superconducting quantum processing units (QPUs).",
      problemStatement: "Microprocessor architecture concepts—such as the von Neumann cycle, pipelining, transmon resonators, quantum superposition, and dilution refrigeration—are highly abstract and difficult to comprehend from static 2D textbook diagrams.",
      solution: "Q-CORE bridges this pedagogical gap by providing interactive 3D WebGL models, live cycle simulators, four comprehensive virtual laboratories, dynamic benchmark charts, and an AI architecture tutor.",
      keyFeatures: [
        "16:9 Presentation Deck reproducing all 9 slides from the college curriculum with presentation and grid modes",
        "3D Interactive Morphing Core toggling between a Classical Silicon CMOS Die and a Superconducting QPU Chip",
        "Interactive Evolution Timeline from 1940s vacuum tubes to modern multi-core and quantum computing",
        "Classical Microprocessor Module with 3D motherboard die and Fetch-Decode-Execute-Store simulator",
        "Quantum Microprocessor Module with 3D Dilution Refrigerator stage and interactive 3D Bloch Sphere Simulator",
        "4 Virtual Laboratories: CPU Execution Lab, Qubit State Lab (IBM Quantum style), Quantum Circuit Builder, and Cryogenic Cooling Simulator",
        "Comparison Center with rotary selector across 7 official curriculum criteria and Recharts algorithm performance graphs",
        "Q-TUTOR AI Architecture Assistant with ELI5 mode, bilingual Hindi/English support, and voice narration",
        "3-Tier Assessment & Certification with personalized completion certificate generation"
      ],
      academicCredits: "Department of Computer Engineering, DY Patil College of Engineering and Innovation, Varale (SPPU Autonomous). Student Team: Neha Borkar, Mayuri Mundkar, Janvhi Patil, Vedika Karlekar."
    },
    {
      id: "whatsai",
      title: "WhatsAI",
      subtitle: "Production Full-Stack AI WhatsApp Assistant Platform",
      category: "Full-Stack SaaS & AI Agent",
      status: "Production Architecture",
      featured: true,
      repoUrl: "https://github.com/nehuub08-code/WhatsAI",
      liveUrl: "https://nehuub08-code.github.io/WhatsAI/",
      githubRepo: "nehuub08-code/WhatsAI",
      technologies: ["FastAPI", "Python 3.12", "Google Gemini 2.5 Flash", "Meta WhatsApp Cloud API", "React 18", "Tailwind CSS", "SQLAlchemy", "JWT", "SQLite / PostgreSQL"],
      shortDescription: "A commercial-grade full-stack platform connecting the Meta WhatsApp Cloud API with Google's Gemini 2.5 Flash API for multi-turn automated conversational intelligence.",
      overview: "WhatsAI is a modern full-stack SaaS platform designed to understand customer intent, maintain multi-turn conversational memory, store transcripts, and deliver real-time automated assistance over WhatsApp.",
      problemStatement: "Businesses face friction deploying AI on WhatsApp due to webhook security complexities, latency bottlenecks, conversation history state management, and the lack of low-friction testing environments before connecting production Meta credentials.",
      solution: "WhatsAI solves this through an asynchronous FastAPI backend with cryptographic signature verification, Gemini 2.5 Flash API integration, and an in-browser WhatsApp Phone Simulator that allows full conversational testing without requiring active webhook tunnels.",
      keyFeatures: [
        "Google Gemini 2.5 Flash Engine with multi-turn conversational memory and dynamic token handling",
        "Meta WhatsApp Cloud API integration with X-Hub-Signature-256 HMAC verification and deduplication",
        "Interactive WhatsApp Phone Simulator in UI for testing messages and responses without live webhook tunnels",
        "WhatsApp Web Live Inbox with two-column inspection, manual agent reply override, and auto-reply toggle",
        "Telemetry & Recharts Visualizations tracking traffic trends, hourly peak distributions, and Gemini latency SLAs",
        "Enterprise Security with JWT (HMAC-SHA256) auth, salted PBKDF2/bcrypt hashing, and immutable audit logs",
        "Dual Database Flexibility running out-of-the-box on SQLite WAL mode with native PostgreSQL readiness",
        "Export capabilities for conversation transcripts to CSV and print-ready PDF formats",
        "Automated backend test suite covering authentication, signature checks, simulator, and aggregations"
      ],
      academicCredits: "Engineered by Neha Borkar exploring end-to-end FastAPI backend development and LLM agent integration."
    }
  ],

  achievements: {
    emptyStateMessage: "Achievements and milestones will be showcased here as they are earned.",
    emptyStateSubtitle: "Future technical competitions, hackathons, academic recognitions, and publication milestones will be updated dynamically in this verified section.",
    categories: ["All", "Academic", "Competitions", "Hackathons", "Technical Events"],
    records: [] // Dynamic architecture ready: populate records when verified
  },

  certificates: {
    emptyStateMessage: "Certificates and verified credentials will be showcased here as they are earned.",
    emptyStateSubtitle: "Future technical certifications from NPTEL, academic programs, and recognized developer platforms will be documented here with verifiable credential IDs.",
    categories: ["All", "AI & ML", "Backend", "Programming", "Academic"],
    records: [] // Dynamic architecture ready: populate records when verified
  },

  codingProfiles: [
    {
      platform: "GitHub",
      handle: "nehuub08-code",
      profileUrl: "https://github.com/nehuub08-code",
      icon: "fa-brands fa-github",
      tagline: "Open-Source & Academic Repositories",
      description: "Primary repository hosting source code for Q-CORE, WhatsAI, autonomous software engineering explorations, and academic implementations.",
      statsLabel: "Active Repositories",
      isLiveStatsAvailable: true
    },
    {
      platform: "LinkedIn",
      handle: "Neha Borkar",
      profileUrl: "https://www.linkedin.com/in/neha-borkar-a6a6ba390/",
      icon: "fa-brands fa-linkedin",
      tagline: "Professional Network & Academic Milestones",
      description: "Connecting with engineering peers, recruiters, and mentors. Documenting progress through Computer Engineering and AI technology exploration.",
      statsLabel: "B.Tech Undergrad",
      isLiveStatsAvailable: false
    }
  ],

  contact: {
    email: "neha.borkar2408@gmail.com",
    whatsappNumber: "+919529604668",
    whatsappCleanNumber: "919529604668",
    whatsappPrefilledMessage: "Hello Neha, I visited your portfolio and would like to connect with you regarding your technical work.",
    whatsappUrl: "https://wa.me/919529604668?text=Hello%20Neha%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20your%20technical%20work.",
    githubUrl: "https://github.com/nehuub08-code",
    linkedinUrl: "https://www.linkedin.com/in/neha-borkar-a6a6ba390/",
    location: "Varale / Pune, Maharashtra, India"
  }
};

// Export for module systems or attach to window
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
} else {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}

