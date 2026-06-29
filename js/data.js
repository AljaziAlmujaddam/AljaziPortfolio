/**
 * Portfolio Data Configuration
 * --------------------------------
 * Edit this file to add or update your personal information.
 */

const PORTFOLIO_DATA = {
  lang: "en",
  dir: "ltr",

  /* ── UI Labels ───────────────────────────────────────────────── */
  ui: {
    skipLink: "Skip to content",
    navHome: "Home",
    navAbout: "About",
    navCourses: "Courses",
    navSkills: "Skills",
    navProjects: "Projects",
    navCertificates: "Certificates",
    navExperience: "Experience",
    navContact: "Contact",
    langSwitch: "العربية",
    langSwitchAria: "Switch to Arabic",
    toggleNav: "Toggle navigation menu",
    heroGreeting: "Hello, I'm",
    heroStatsAria: "Portfolio highlights",
    btnViewProjects: "View Projects",
    btnViewCv: "View CV",
    btnContactMe: "Contact Me",
    scrollHint: "Scroll",
    profilePhotoAlt: "Profile photo",
    logoAlt: "Aljazi Almujaddam logo",
    aboutLabel: "About Me",
    aboutTitle: "Who I Am",
    biography: "Biography",
    education: "Education",
    careerInterests: "Career Interests",
    coursesLabel: "Courses",
    coursesTitle: "Professional Development",
    skillsLabel: "Skills",
    skillsTitle: "What I Know",
    projectsLabel: "Projects",
    projectsTitle: "Featured Work",
    certificatesLabel: "Certificates",
    certificatesTitle: "Credentials",
    experienceLabel: "Experience",
    experienceTitle: "My Journey",
    contactLabel: "Contact",
    contactTitle: "Get In Touch",
    contactText:
      "Feel free to reach out. I'm always open to discussing new opportunities and collaborations.",
    footerRights: "All rights reserved.",
    btnViewProject: "View Project",
    btnViewCertificate: "View Certificate",
    linkedin: "LinkedIn",
    github: "GitHub",
    emptySkills: "Skills will appear here once added.",
    emptyProjects: "Projects will appear here once added.",
    emptyCertificates: "Certificates will appear here once added.",
    emptyCourses: "Courses will appear here once added.",
    emptyExperience: "Experience will appear here once added.",
    experienceLabels: {
      work: "Work Experience",
      internship: "Internship",
      training: "Training",
      volunteer: "Volunteer Work",
      event: "Event",
    },
    projectPage: {
      back: "Back to Projects",
      notFound: "Project not found.",
      overview: "Overview",
      problem: "Problem",
      solution: "Solution",
      keyFeatures: "Key Features",
      technologies: "Technologies",
      contributions: "Contributions",
      challenges: "Challenges",
      lessonsLearned: "Lessons Learned",
      resources: "Resources",
      btnOpen: "Open",
    },
    metaDescription: "Professional portfolio — projects, experience, and contact.",
  },

  /* ── Site & Hero ───────────────────────────────────────────── */
  site: {
    name: "Aljazi Ali Almujaddam",
    title: "IT & Cybersecurity",
    intro:
      "I'm an IT and Cybersecurity graduate from the University of Bahrain with a passion for building secure and innovative technology solutions. I enjoy learning new technologies, tackling real-world challenges, and continuously growing my skills through hands-on projects and practical experience.",
    profileImage: "assets/images/profile.png",
    logo: "assets/images/logo.png",
    cvPath: "assets/cv/AljaziAliAlmujaddamResume.pdf",
    brandName: "Aljazi Almujaddam Portfolio",
    heroStats: [
      { value: "6", label: "Certificates" },
      { value: "9", label: "Projects" },
      { value: "3", label: "Courses" },
      { value: "1", label: "Internship" },
    ],
  },

  /* ── About Me ────────────────────────────────────────────────── */
  about: {
    biography:
      "Technology has always inspired me to explore how innovative ideas can become practical solutions. As an IT and Cybersecurity graduate, I enjoy designing and developing systems that combine functionality, security, and usability.\n\nThroughout my academic journey, I have worked on projects covering cybersecurity, secure software development, artificial intelligence, networking, databases, and web technologies. These experiences have strengthened my technical foundation while teaching me the importance of collaboration, continuous learning, and attention to detail.\n\nI am passionate about expanding my knowledge, embracing new challenges, and building solutions that create real value. My goal is to continue growing as a technology professional while contributing to meaningful and impactful projects.",
    education: [
      {
        degree: "Bachelor of Cybersecurity",
        institution: "University of Bahrain",
        period: "September 2022 – August 2026",
        details: "Zallaq, Bahrain",
      },
      {
        degree: "High School Certificate",
        institution: "Hidd Secondary Girls School",
        period: "September 2019 – June 2022",
        details: "Muharraq, Bahrain",
      },
    ],
    careerInterests: [
      "IT Specialist",
      "Cyber Security Analyst",
      "IT Project Manager",
      "Audit Assistant",
      "Risk Analyst",
    ],
  },

  /* ── Courses (from CV — separate from certificates) ─────────── */
  courses: [
    {
      title: "Introduction to Cybersecurity Tools & Cyberattacks",
      provider: "IBM Coursera",
      viewPath: "assets/certificates/Introduction to Cybersecurity Tools.pdf",
    },
    {
      title: "Secure Software Development",
      provider: "Coursera",
      viewPath: "assets/certificates/Secure Software Development.pdf",
    },
    {
      title: "Cyber Security Safety Online Awareness",
      provider: "OPS Cyber Academy – NCSC Training Program",
      viewPath: "assets/certificates/Cyber Security Safety Online Awareness.pdf",
    },
  ],

  /* ── Skills ──────────────────────────────────────────────────── */
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "Bash", "HTML/CSS"],
    },
    {
      category: "Cybersecurity & IT",
      items: [
        "Linux",
        "SSH",
        "Risk Assessment",
        "Threat Modeling",
        "Secure Software Development",
        "Network Fundamentals",
      ],
    },
    {
      category: "Tools & Platforms",
      items: ["GitHub", "Database Management"],
    },
    {
      category: "Soft Skills",
      items: ["Communication", "Teamwork", "Leadership", "Problem Solving"],
    },
  ],

  /* ── Projects ────────────────────────────────────────────────── */
  projectsNote:
    "This section highlights a selection of my most significant projects. I have worked on additional projects not featured here—please feel free to <a href=\"#contact\">contact me</a> if you would like to learn more.",
  projects: [
    {
      id: "shellsentry",
      title: "ShellSentry – Secure Natural Language to Bash Execution Platform",
      description:
        "Secure AI-powered platform that converts natural language into validated Bash commands and executes them on remote Linux systems with defense-in-depth security controls.",
      thumbnail: "assets/projects/shellsenty.png.webp",
      technologies: ["Python", "Flask", "Paramiko", "FAISS", "SQLite", "LLM", "SSH", "Linux"],
      modal: {
        overview:
          "ShellSentry is a secure AI-powered platform that converts natural language requests into validated Bash commands and executes them on remote Linux systems. The platform was developed as a senior cybersecurity project to improve Linux administration efficiency while maintaining strong security controls.",
        problem:
          "AI models can generate Bash commands from natural language, but executing these commands directly on production systems can introduce significant security risks, including destructive commands, prompt injection attacks, and privilege abuse.",
        solution:
          "ShellSentry applies a defense-in-depth approach that treats all AI-generated commands as untrusted. Commands pass through multiple validation layers before execution, ensuring secure automation across remote Linux servers.",
        keyFeatures: [
          "Natural Language to Bash conversion",
          "Retrieval-Augmented Generation (RAG)",
          "Multi-host SSH execution",
          "Command validation and filtering",
          "Audit logging and reporting",
          "Script archiving and scheduling",
          "Host-aware command generation",
        ],
        technologies: ["Python", "Flask", "Paramiko", "FAISS", "SQLite", "OpenAI-Compatible LLM APIs", "HTML/CSS/JavaScript"],
        contributions:
          "Designed the system architecture and security workflow, implemented command validation mechanisms, integrated RAG-based retrieval, developed SSH orchestration and audit logging, and conducted security and performance testing.",
        challenges:
          "Ensuring AI-generated commands remain safe across multiple remote hosts while maintaining usability for administrators and analysts.",
        lessonsLearned:
          "The project demonstrated secure AI-assisted Linux administration while preventing unsafe command execution through layered security controls.",
      },
      resources: [
        {
          type: "pdf",
          label: "Technical Report",
          path: "assets/resources/ShellSentry-Technical-Report.pdf",
        },
        {
          type: "pdf",
          label: "Presentation",
          path: "assets/resources/ShellSentry presentation.pdf",
        },
      ],
    },
    {
      id: "meridian-fintech",
      title: "Meridian FinTech Solutions – Cybersecurity Risk Management Plan",
      description:
        "Cybersecurity risk management strategy for a cloud-based fintech organization, identifying critical threats and designing mitigation strategies for resilience and compliance.",
      thumbnail: "assets/projects/Meridian FinTech Solutions.png",
      technologies: ["NIST SP 800-30", "ISO 27001", "PCI DSS", "GDPR", "AML", "Risk Assessment"],
      modal: {
        overview:
          "This project focused on developing a cybersecurity risk management strategy for a cloud-based financial technology organization. The goal was to identify critical security risks and design mitigation strategies that improve operational resilience.",
        problem:
          "Cloud-based fintech operations face cybersecurity threats that can affect infrastructure security, identity management, data protection, regulatory compliance, and business continuity.",
        solution:
          "A structured risk management framework was developed to assess threats, prioritize risks, define mitigation strategies, and support continuity and recovery planning across the organization's cloud environment.",
        keyFeatures: [
          "Cloud infrastructure security assessment",
          "Identity and access management review",
          "Data protection and regulatory compliance",
          "Business continuity planning",
          "Third-party risk evaluation",
          "Business Impact Analysis (BIA)",
        ],
        technologies: ["NIST SP 800-30", "ISO/IEC 27001", "PCI DSS", "GDPR", "AML Compliance Standards"],
        contributions:
          "Performed risk identification and assessment, evaluated security controls, developed mitigation recommendations, and participated in continuity and recovery planning.",
        challenges:
          "Aligning multiple regulatory and compliance requirements within a single cohesive risk management framework for a fintech environment.",
        lessonsLearned:
          "Produced a comprehensive risk management framework that improves security posture, compliance readiness, and organizational resilience.",
      },
      resources: [
        {
          type: "pdf",
          label: "Risk Assessment Plan",
          path: "assets/resources/Meridian FinTech report-Risk Assessment Plan.pdf",
        },
        {
          type: "pdf",
          label: "Risk Management Plan",
          path: "assets/resources/Meridian FinTech report-Risk Management Plan.pdf",
        },
        {
          type: "pdf",
          label: "Risk Mitigation Plan",
          path: "assets/resources/Meridian FinTech report-Risk Mitigation Plan.pdf",
        },
        {
          type: "pdf",
          label: "Presentation",
          path: "assets/resources/Meridian FinTech presentation.pdf",
        },
      ],
    },
    {
      id: "sijilchain",
      title: "SijilChain – Blockchain Vehicle History Verification System",
      description:
        "Blockchain-based solution that improves transparency in the used vehicle market through immutable VIN-linked vehicle history records.",
      thumbnail: "assets/projects/SijilChain.png",
      technologies: ["Blockchain", "DApp", "VIN Tracking", "OTP Authentication"],
      modal: {
        overview:
          "SijilChain is a blockchain-based solution designed to improve transparency in the used vehicle market by maintaining immutable vehicle history records linked to the Vehicle Identification Number (VIN).",
        problem:
          "Vehicle history records can become fragmented across ownership changes, making it difficult for buyers to verify accident histories, repairs, and other important information.",
        solution:
          "The proposed system uses blockchain technology to store tamper-proof vehicle records that remain permanently associated with a vehicle's VIN regardless of ownership changes.",
        keyFeatures: [
          "VIN-based vehicle tracking",
          "Immutable vehicle history records",
          "Accident and repair tracking",
          "OTP-secured record access",
          "Auditability and transparency",
          "Blockchain-based verification",
        ],
        technologies: ["Blockchain", "Decentralized Applications (DApps)", "Digital Identity Verification", "OTP Authentication"],
        contributions:
          "Analyzed existing vehicle record processes, designed system workflows and architecture, defined stakeholder requirements, and developed the VIN-based record management concept.",
        challenges:
          "Designing a system that links permanent vehicle identity to records while balancing transparency, privacy, and stakeholder access.",
        lessonsLearned:
          "Proposed a secure and transparent vehicle history verification system that enhances consumer trust and reduces information fraud in vehicle transactions.",
      },
      resources: [
        {
          type: "pdf",
          label: "Presentation",
          path: "assets/resources/SijilChain presentation.pdf",
        },
        {
          type: "video",
          label: "Project Recording",
          url: "https://drive.google.com/file/d/1_IveYU5QkGQDeI-ycUYkfiHi0caShIoZ/view?usp=share_link",
        },
      ],
    },
    {
      id: "tesla-audit",
      title: "Tesla IT Audit Plan & Audit Program",
      description:
        "Risk-based IT audit plan for Tesla's technology environment, evaluating security controls, compliance, and operational risks across critical systems.",
      thumbnail: "assets/projects/Tesla.png",
      technologies: ["COBIT 2019", "NIST CSF", "ISO 27001", "IT Audit", "Risk Assessment"],
      modal: {
        overview:
          "This project focused on developing a risk-based IT audit plan for Tesla's technology environment. The audit program was designed to evaluate security controls, compliance requirements, operational risks, and the effectiveness of critical business systems.",
        problem:
          "Large technology-driven organizations require structured audit programs to assess complex systems spanning vehicle software, AI, cloud infrastructure, and data privacy without missing high-risk areas.",
        solution:
          "A risk-based IT audit strategy was developed to identify high-risk technology areas, prioritize audit scope, evaluate controls, and define audit procedures and testing plans.",
        keyFeatures: [
          "Vehicle software systems audit scope",
          "Cloud infrastructure assessment",
          "AI platform evaluation",
          "Identity and Access Management (IAM) review",
          "Manufacturing systems controls",
          "Data privacy controls assessment",
        ],
        technologies: ["COBIT 2019", "NIST Cybersecurity Framework", "ISO/IEC 27001"],
        contributions:
          "Conducted risk analysis and control evaluation, identified critical audit areas, developed audit procedures, and participated in audit planning and reporting.",
        challenges:
          "Prioritizing audit scope across diverse and interconnected technology domains at enterprise scale.",
        lessonsLearned:
          "Produced a comprehensive IT audit plan that supports risk management, regulatory compliance, and organizational governance.",
      },
      resources: [
        {
          type: "pdf",
          label: "Project Report",
          path: "assets/resources/Tesla report.pdf",
        },
        {
          type: "pdf",
          label: "Presentation",
          path: "assets/resources/TESLA presentaion.pdf",
        },
      ],
    },
    {
      id: "cyber-attack-simulation",
      title: "Cyber Attack Simulation Platform",
      description:
        "Secure cyber range environment for simulating cyberattacks and defensive operations for training and educational purposes.",
      thumbnail: "assets/projects/Cyber Attack Simulation Platfor.png",
      technologies: ["SQUARE", "STRIDE", "Figma", "Cyber Range", "Security Architecture"],
      modal: {
        overview:
          "The Cyber Attack Simulation Platform is a secure cyber range environment designed to simulate cyberattacks and defensive operations for training and educational purposes.",
        problem:
          "Organizations require safe environments to train security professionals and evaluate defensive strategies without exposing production systems to risk.",
        solution:
          "The platform provides controlled attack simulations, user management, monitoring capabilities, and reporting features within an isolated environment.",
        keyFeatures: [
          "Attack simulation scenarios",
          "User authentication and authorization",
          "Role-based access control",
          "Security monitoring",
          "Reporting and analytics",
          "Sandbox isolation",
        ],
        technologies: ["SQUARE Security Requirements Engineering", "STRIDE Threat Modeling", "Figma", "System Architecture Design"],
        contributions:
          "Designed system architecture, developed security requirements, performed threat modeling, created system diagrams and workflows, and designed user interfaces and prototypes.",
        challenges:
          "Designing realistic attack scenarios while maintaining strict isolation and safety controls in a training environment.",
        lessonsLearned:
          "Produced a secure training platform concept that supports cybersecurity education and hands-on attack simulation exercises.",
      },
      resources: [
        {
          type: "pdf",
          label: "Project Report",
          path: "assets/resources/Cyber Attack Simulation Platform report.pdf",
        },
        {
          type: "pdf",
          label: "Presentation",
          path: "assets/resources/Cyber Attack Simulation Platform presentatin.pdf",
        },
      ],
    },
    {
      id: "flight-client-server",
      title: "Multithreaded Flight Information Client-Server System",
      description:
        "Multithreaded client-server application that retrieves and displays real-time flight information using the Aviationstack API with SSL/TLS security.",
      thumbnail: "assets/projects/Multithreaded Flight Information Client.png",
      technologies: ["Python", "Sockets", "SSL/TLS", "Threading", "JSON", "Aviationstack API"],
      modal: {
        overview:
          "This project is a multithreaded client-server application that retrieves and displays real-time flight information using the Aviationstack API.",
        problem:
          "Travelers and airport users often require timely access to flight arrival and delay information through a centralized service.",
        solution:
          "The system retrieves flight information from an external API and delivers results through secure client-server communication.",
        keyFeatures: [
          "Real-time flight information retrieval",
          "Arrived flight tracking",
          "Delayed flight monitoring",
          "Flight details lookup",
          "Multi-client support",
          "SSL/TLS-secured communication",
        ],
        technologies: ["Python", "Socket Programming", "Threading", "SSL/TLS", "JSON", "Aviationstack API"],
        contributions:
          "Developed the client-server architecture, implemented multithreading for concurrent users, integrated the Aviationstack API, configured SSL/TLS secure communication, and processed and displayed flight information.",
        challenges:
          "Managing concurrent client connections securely while parsing and serving real-time JSON flight data reliably.",
        lessonsLearned:
          "Created a secure network application capable of serving multiple users simultaneously while providing real-time flight data.",
      },
      resources: [
        {
          type: "video",
          label: "Demo Video",
          url: "https://drive.google.com/file/d/1UNZGxOW41Kzy7rHSIwMQ5TgplpEoiUue/view?usp=share_link",
        },
      ],
    },
    {
      id: "smart-vault",
      title: "Smart Vault – Secure Smart Postbox System",
      description:
        "Secure package delivery solution that reduces theft and improves delivery success through PIN and one-time QR code access.",
      thumbnail: "assets/projects/smartVualt.png",
      technologies: ["Mobile App", "PIN Access", "QR Codes", "UX/UI Design", "IoT"],
      modal: {
        overview:
          "Smart Vault is a secure package delivery solution designed to reduce package theft and improve delivery success rates through controlled access mechanisms.",
        problem:
          "Homeowners frequently experience missed deliveries and package theft when parcels are left unattended.",
        solution:
          "The system provides a secure delivery vault that allows couriers to deposit packages using temporary access credentials while keeping packages protected.",
        keyFeatures: [
          "PIN-based access control",
          "One-time QR code access",
          "Delivery tracking",
          "Real-time notifications",
          "User and courier communication",
          "Secure package storage",
        ],
        technologies: ["Mobile Application Design", "Product Innovation", "UX/UI Design", "Business Analysis"],
        contributions:
          "Developed the product concept, designed user workflows, defined MVP requirements, and conducted market research and competitor analysis.",
        challenges:
          "Designing a secure yet simple access system that works for both homeowners and delivery couriers.",
        lessonsLearned:
          "Created an innovative package delivery solution that improves security, convenience, and delivery reliability.",
      },
      resources: [
        {
          type: "pdf",
          label: "Project Report",
          path: "assets/resources/Smart Vault report.pdf",
        },
        {
          type: "pdf",
          label: "Presentation",
          path: "assets/resources/Smart Vault presentation.pdf",
        },
      ],
    },
    {
      id: "campus-hub-course-notes",
      title: "Campus Hub – Course Notes Module",
      description:
        "Web-based Course Notes module for Campus Hub, enabling students to upload, search, filter, and share academic notes with peers.",
      thumbnail: "assets/projects/CampusHubCourseNotesModule.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "JSON", "Bulma CSS"],
      modal: {
        overview:
          "Campus Hub is a web-based student platform designed to centralize useful university services in a single application. As part of a team project, I developed the Course Notes module, enabling students to upload, manage, and share academic notes with their peers.",
        problem:
          "Students often rely on scattered platforms to exchange study materials, making it difficult to find organized and course-specific notes.",
        solution:
          "I developed a Course Notes module that provides a centralized space for students to upload, search, filter, and manage course notes while encouraging collaboration through comments and feedback.",
        keyFeatures: [
          "Upload course notes in PDF format",
          "Search notes by course name, title, or description",
          "Filter notes by department",
          "Sort notes alphabetically",
          "View detailed note information",
          "Add and manage comments",
          "Edit and delete notes",
          "Pagination for easier navigation",
          "Responsive user interface",
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "JSON", "Bulma CSS"],
        contributions:
          "Developed the complete Course Notes module, implemented searching, filtering, sorting, and pagination, built the note details page with a commenting system, developed CRUD operations for managing course notes, and integrated dynamic data retrieval and responsive UI components.",
        challenges:
          "Implementing dynamic filtering, pagination, and note management while maintaining a responsive and user-friendly interface.",
        lessonsLearned:
          "Improved skills in JavaScript, DOM manipulation, JSON data handling, responsive web design, and building interactive client-side web applications.",
      },
      resources: [
        {
          type: "github",
          label: "GitHub Repository",
          url: "https://github.com/NooraBumjaid/Group2-CS333.git",
        },
      ],
    },
    {
      id: "travel-agency-db",
      title: "Travel Agency Database Management System",
      description:
        "Relational database system for managing travel agency operations including customers, bookings, packages, flights, hotels, and car rentals.",
      thumbnail: "assets/projects/Travel Agency .png",
      technologies: ["SQL", "ER Modeling", "EER Modeling", "Normalization", "Database Design"],
      modal: {
        overview:
          "This project involved designing and implementing a relational database system for managing travel agency operations, including customers, bookings, travel packages, flights, hotels, and car rentals.",
        problem:
          "Travel agencies manage large amounts of interconnected information that require efficient storage, organization, and retrieval.",
        solution:
          "A normalized relational database was designed to support business operations while maintaining data integrity and reducing redundancy.",
        keyFeatures: [
          "Customer management",
          "Booking management",
          "Travel package management",
          "Flight reservations",
          "Hotel reservations",
          "Car rental management",
        ],
        technologies: ["SQL", "Database Design", "ER Modeling", "EER Modeling", "Database Normalization"],
        contributions:
          "Designed ER and EER diagrams, applied normalization up to 3NF, developed database schemas, implemented relationships and constraints, and created sample datasets for testing.",
        challenges:
          "Resolving EER connection traps while maintaining normalization across multiple related entities.",
        lessonsLearned:
          "Developed a structured and scalable database solution that supports efficient travel agency operations and data management.",
      },
      resources: [
        {
          type: "pdf",
          label: "Project Report",
          path: "assets/resources/Travel Agency report.pdf",
        },
        {
          type: "pdf",
          label: "Presentation",
          path: "assets/resources/Travel  Agency presentation.pdf",
        },
      ],
    },
  ],

  /* ── Certificates (from CV — not courses or organisations) ───── */
  certificates: [
    {
      title: "Participation Certificate – StartUp Bahrain",
      organization: "StartUp Bahrain",
      date: "May 2026",
      image: "assets/images/certificate/startUp.webp",
      viewPath: "assets/certificates/Participation Certificate- StartUp Bahrain University of Bahrain.pdf",
    },
    {
      title: "Participation Certificate – Al Game Day",
      organization: "Royal Academy of Police & Information & eGovernment Authority",
      date: "November 2025",
      image: "assets/images/certificate/Al Game Day.jpeg",
      viewPath: "assets/certificates/Participation Certificate- Al Game Day.pdf",
    },
    {
      title: "Participation Certificate – The Transformative Power of Artificial Intelligence in Entrepreneurship",
      organization: "Youth City 2030",
      date: "August 2025",
      image: "assets/images/certificate/ransformative Power of Artificial Intelligence.png",
      viewPath: "assets/certificates/The Transformative Power of Artificial Intelligence.pdf",
    },
    {
      title: "HSI Adult First Aid | CPR AED Certification",
      organization: "Sinyar Emergency",
      date: "June 2025",
      image: "assets/images/certificate/HSI Adult First Aid | CPR AED Certification Sinyar Emergency.webp",
      viewPath: "assets/certificates/HSI Adult First Aid | CPR AED Certification.pdf",
    },
    {
      title: "Third Place – Sh. Fadyah Alsaad Science Competition (STEAM)",
      organization: "Sh. Fadyah Alsaad Science Competition (Arab Level)",
      date: "June 2022",
      image: "assets/images/certificate/fadyah alsaad.webp",
      viewPath: "assets/certificates/Sh. Fadyah Alsaad Science Competition.pdf",
    },
    {
      title: "First Place – Gold Category, Scientific Research Forum Competition",
      organization: "Scientific Research Forum Competition",
      date: "May 2015",
      image: "assets/images/certificate/Scientific Research Forum Competition.png",
      viewPath: "assets/certificates/Scientific Research Forum Competition.pdf",
    },
  ],

  /* ── Experience Timeline ───────────────────────────────────────── */
  experience: [
    {
      type: "internship",
      title: "Information Technology Intern",
      organization: "Ministry of Interior",
      period: "June 2026 – August 2026",
      description:
        "Assisted in administrative and operational tasks within a governmental environment. Supported organization and management of official documents, prepared correspondence and reports, and gained exposure to compliance standards and formal workplace procedures.",
    },
    {
      type: "event",
      title: "Workshop Organizer",
      organization: "The Arab International Cybersecurity Conference and Exhibition (AICS) – University of Bahrain",
      period: "November 2025",
      description:
        "Organized and supported a cybersecurity workshop at the Arab International Cybersecurity Conference and Exhibition held at the University of Bahrain.",
    },
    {
      type: "volunteer",
      title: "IT Support Team Member",
      organization: "Bahrain Asian Youth Games (BAYG 2025)",
      period: "October 2025",
      description:
        "Provided IT support during the Bahrain Asian Youth Games, assisting with technology operations and event infrastructure.",
      viewPath: "assets/certificates/Bahrain Asian Youth Games (BAYG 2025).pdf",
    },
    {
      type: "volunteer",
      title: "Ushers Committee Organizer",
      organization: "Youth City 2030",
      period: "July 2024 – August 2024",
      description:
        "Organized and coordinated ushering activities for Youth City 2030 events.",
      viewPath: "assets/certificates/Ushers Committee Organizer.jpeg",
    },
  ],

  /* ── Contact ─────────────────────────────────────────────────── */
  contact: {
    email: "aljaziali04@gmail.com",
    phone: "+973 3438 9145",
    linkedin: "https://www.linkedin.com/in/AljaziAlmujaddam",
    github: "https://github.com/AljaziAlmujaddam",
  },
};
