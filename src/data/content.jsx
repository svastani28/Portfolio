export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Skills', href: '#skills' },
  { label: 'Strengths', href: '#strengths' },
]

export const strengthsSource = 'Top five strengths from the Gallup CliftonStrengths assessment.'

export const strengths = [
  {
    title: 'Strategic',
    copy: 'As a strategic thinker, I always have at least three options in mind so I can adapt if circumstances change. I am very efficient and take calculated risks to help others succeed.',
  },
  {
    title: 'Deliberative',
    copy: 'I am very thorough and take the time to carefully research a problem before arriving at a solution. Naturally, I am very curious and often ask a few well-thought-out questions. However, I am also a very good listener and often help others thoroughly think through issues by considering several different perspectives.',
  },
  {
    title: 'Analytical',
    copy: 'As an analytical person, I ask well-researched, in-depth questions that often lead others to self-discovery. My academic work is always well-researched by gathering all the possible data.',
  },
  {
    title: 'Relator',
    copy: 'I prefer smaller class sizes and close-knit group work while commanding respect around me. I also build strong relationships and trust with those I know.',
  },
  {
    title: 'Learner',
    copy: 'I love the process of learning and routines. Understanding how to acquire information comes naturally to me.',
  },
]

export const experienceItems = [
  {
    period: 'May 2026 – July 2026',
    company: 'HIVE Financial Systems',
    url: 'https://hivefs.com/',
    role: 'Product Management Intern',
    description:
      'Built a live, agentic AI-powered dashboard tracking core product metrics — scope creep, kill rate, feature adoption rate, and epic ROI — for a $120M+ consumer lending FinTech, used by the product managers and scrum master to set baselines for feature effectiveness and roadmap prioritization. Authored the scope of work and API requirements for a webhook integration with a third-party lead-selling platform, a channel expected to significantly expand lead volume, and benchmarked competing lead-purchasing providers’ acquisition strategies to inform lead decisioning.',
    tags: ['Product strategy', 'Agentic AI', 'API design', 'Scrum/Kanban', 'Atlassian (Confluence/Jira, Rovo AI)', 'Claude Skill Development'],
  },
  {
    period: 'May 2025 – July 2025',
    company: 'GreenSky',
    url: 'https://www.greensky.com/',
    role: 'Capital Markets & Data Analytics Intern',
    description:
      'Built predictive models to identify loan pools meeting Fitch and KBRA ratings criteria, prepared data tapes and stratified samples, and automated investor- and bank-ready reporting. Supported ABS securitization and a new credit facility deal alongside Goldman Sachs, RBC, Mizuho, and Citi.',
    tags: ['Capital markets', 'Predictive modeling', 'ABS securitization', 'Excel/SQL'],
  },
  {
    period: 'July 2024',
    company: 'Hermeus',
    url: 'https://www.hermeus.com/',
    role: 'Software Engineering Intern',
    description:
      'Helped build a Java-based interface for maneuvering a commercial hypersonic aircraft designed to fly at Mach 5, and collaborated with engineers on two new features spanning database management, API design, and backend development.',
    tags: ['Java', 'API design', 'Backend', 'UI'],
  },
  {
    period: 'January 2024 – May 2024',
    company: 'bSide Partners',
    url: 'https://www.bsidepartners.com/',
    role: 'Intern',
    description:
      'Supported business development and investment evaluation with data analysis and Excel macro work for commercial real estate acquisition targets.',
    tags: ['Excel macros', 'Data analysis', 'Commercial real estate'],
  },
  {
    period: 'September 2026 – Present',
    company: 'UNC Kenan-Flagler Business School',
    url: 'https://www.kenan-flagler.unc.edu/',
    role: 'Student IT Apprentice',
    description:
      'Front-line technical support for students, faculty, and staff, plus laptop imaging and loaner device inventory.',
    tags: ['Technical support', 'Hardware deployment'],
  },
]

// Add more entries here any time — the grid and "View all projects" toggle scale automatically.
// `gallery` accepts image paths (e.g. from /public/gallery/...) and renders inside the project modal once populated.
export const projectCards = [
  {
    title: 'EvasionBench',
  eyebrow: 'Capstone · NLP for earnings calls',
  summary:'Built a classifier that flags evasive executive answers on earnings calls. Our final model matched Gemini 3 Flash (0.869 vs. 0.870 macro-F1) with no per-call API fees and about 16x the speed, versus ~$1,366 per million answers for Gemini, tested on 1,200 hand-labeled Q&A pairs.',
  impact: 'Benchmarked 6 LLMs from 4 vendors, distilled the best into fine-tuned DeBERTa/RoBERTa models, and stacked them with a Random Forest. Human labels reached α = 0.89 agreement.',
  tech: ['Python', 'LLM APIs', 'DeBERTa / RoBERTa', 'scikit-learn', 'Cost modeling'],
  link: 'https://drive.google.com/drive/folders/19Y5MwH8UxAR8wcBS3Yo-dWtHNdB6T8w7',
  linkLabel: 'View code & results',
    gallery: [
      `${import.meta.env.BASE_URL}gallery/evasionbench/evasionbench-02-solution.png`,
      `${import.meta.env.BASE_URL}gallery/evasionbench/evasionbench-03-genai-benchmark.png`,
      `${import.meta.env.BASE_URL}gallery/evasionbench/evasionbench-04-results.png`,
    ],
  },
  {
    title: 'foodAware',
    eyebrow: 'Web application',
    summary:
      'Developed "Allergy Detector," a web application for detecting food allergens using Python, JavaScript Object Notation (JSON), and Application Programming Interfaces (APIs) with real-time data from the US Department of Agriculture.',
    impact: 'Real-time allergen detection powered by USDA data',
    tech: ['Python', 'JSON', 'APIs', 'USDA data'],
    link: 'https://github.com/SaVa1/foodAware',
    linkLabel: 'View repo',
    website: 'https://foodaware.co/',
    websiteLabel: 'Visit site',
    gallery: [],
  },
  {
    title: 'Parr Center Ethics Bowl',
    eyebrow: 'Learning platform',
    summary:
      'An interactive educational platform for a UNC department focused on improving engagement, structuring information clearly, and making learning experiences more approachable.',
    impact: 'Interactive learning system for real users',
    tech: ['React', 'Firestore', 'Storage', 'Node.js'],
    link: 'https://github.com/cssgunc/Ethics-Bowl-Academy',
    linkLabel: 'View repo',
    gallery: [
      `${import.meta.env.BASE_URL}gallery/parr-center/parr-center-01-homepage.png`,
      `${import.meta.env.BASE_URL}gallery/parr-center/parr-center-02-resources-step.png`,
    ],
    contributions: [
      {
        ticket: '#88',
        title: 'Built the Additional Resources step — attach multiple PDFs/links to any module step, plus search across past uploads',
        url: 'https://github.com/cssgunc/Ethics-Bowl-Academy/issues/88',
      },
    ],
  },
  {
    title: 'Yeti Case Study',
    eyebrow: 'Comp 488 AI in the Business World',
    summary:
      'A strategic case analysis proposing a unified AI customer-experience strategy for YETI, consolidating two competing AI assistants into a single flow-based agent with a phased backend, UI, and rollout implementation plan.',
    impact: 'AI strategy & UX consolidation with projected ROI modeling',
    tech: ['Product Strategy', 'AI/UX Design', 'Business Case Modeling'],
    link: null,
    linkLabel: null,
    gallery: [
      `${import.meta.env.BASE_URL}gallery/yeti-case/yeti-case-01-title.png`,
      `${import.meta.env.BASE_URL}gallery/yeti-case/yeti-case-02-recommendation.png`,
      `${import.meta.env.BASE_URL}gallery/yeti-case/yeti-case-03-implementation.png`,
      `${import.meta.env.BASE_URL}gallery/yeti-case/yeti-case-04-business-impact.png`,
    ],
  },
  {
    title: 'Biomimetic Water Filtration',
    eyebrow: 'APPL 101 · Biomimicry design report',
    summary:
      'Designed a passive, gravity-driven water filter modeled on natural filtration in sand beds, marine mucus nets, and bacterial biofilms. Five layers (gravel, coarse sand, fine sand, activated charcoal, micro-pore filter) trap progressively smaller contaminants with no electricity or specialized parts.',
    impact: 'Low-cost, low-maintenance alternative to ~$2,500 home filtration systems, aimed at off-grid and low-resource communities',
    tech: ['Biomimicry', 'Systems design', 'Simulation modeling', 'Technical writing'],
    link: `${import.meta.env.BASE_URL}gallery/biomimicry/Biomimicry%20Report.docx`,
    linkLabel: 'Read report',
    gallery: [],
  },
  {
    title: 'Bone-Crete',
    eyebrow: 'APPL 101 · Team biomimicry project',
    summary:
      'Team project applying the porous trabecular structure of bone to concrete, which is heavy, material-intensive, and responsible for about 8% of global CO₂ emissions. 3D-printed PLA prototypes compared small-hole and large-hole designs, backed by a systems map, life cycle analysis, and People/Profit/Planet trade-off review.',
    impact: 'Small-hole model had higher tensile strength; large-hole model confined fracture to a smaller region under impact',
    tech: ['Biomimicry', '3D printing (PLA)', 'Life cycle analysis', 'Sustainability analysis'],
    link: `${import.meta.env.BASE_URL}gallery/biomimicry/Sec1_Group13_FinalPresentation.pdf`,
    linkLabel: 'View presentation',
    gallery: [],
  },
  {
    title: 'Pauli Murray Interactive Tour',
    eyebrow: 'Client-facing work',
    summary:
      'An interactive digital experience built to educate visitors on the life and legacy of Pauli Murray through accessible storytelling, guided exploration, and modern web design.',
    impact: 'Public-facing educational experience',
    tech: ['React', 'TypeScript', 'Firebase', 'Node.js'],
    link: null,
    linkLabel: null,
    gallery: [],
  },
]

export const PROJECTS_PREVIEW_COUNT = 3
export const LEADERSHIP_PREVIEW_COUNT = 3 // HackNC, UNC CS + Social Good, Coded for Africa

// `roles` lists positions within the same organization, most recent first (LinkedIn-style).
// `gallery` accepts image paths for each organization — populate to surface a "View photos" button and modal automatically.
export const leadershipItems = [
  {
    title: 'HackNC',
    url: 'https://hacknc.com/',
    copy: 'UNC Chapel Hill’s annual student-run hackathon, bringing together 500+ participants each year. One of the largest collegiate hackathons in the Southeast! ',
    roles: [
      {
        title: 'Co-Lead Director (President)',
        period: 'January 2026 – Present',
        copy:
          'Leading a 20+ member organizing team across recruitment, logistics, marketing, and sponsorship. Owning funding strategy and sponsor relationships, securing over $30k in corporate and university funding.',
      },
      {
        title: 'Director of Event Operations',
        period: 'March 2025 – December 2025',
        copy:
          'Ran end-to-end logistics for the 500+ participant event, including venue setup, transportation, accommodations, and catering, coordinating with volunteers, sponsors, university departments, and vendors.',
      },
    ],
    gallery: [],
  },
  {
    title: 'UNC CS + Social Good',
    url: 'https://www.cssgunc.org/',
    copy:
      'A 100+ member student organization that builds web platforms for UNC departments and community partners, and teaches students web development.',
    roles: [
      {
        title: 'Co-President',
        period: 'September 2026 – Present',
        copy:
          'Co-leading the organization and its project, education, and outreach teams.',
      },
      {
        title: 'Project Team Member',
        period: 'January 2026 – Present',
        copy:
          'Building a client-facing web platform for UNC’s Parr Center for Ethics, turning stakeholder needs into accessible, scalable features with React, TypeScript, Firebase, and Node.js.',
      },
      {
        title: 'VP of Outreach & Events',
        period: 'January 2026 – September 2026',
        copy:
          'Oversaw outreach, external relations, social media, and budget planning, working with campus and departmental partners.',
      },
      {
        title: 'Education Team Member',
        period: 'September 2025 – January 2026',
        copy:
          'Learned HTML, CSS, JavaScript, React, and Git through weekly workshops and mentorship, finishing with a React project that integrated APIs, databases, and accessible design.',
      },
    ],
    gallery: [],
  },
  {
    title: 'Coded for Africa',
    url: 'https://www.codedforafrica.com/',
    roles: [{ title: 'Founder', period: 'August 2020 – Present' }],
    copy:
      'Built a program to help 200+ students in Nairobi develop their interest in technology, and partnered with IBM to bring Cloud Certification programs to Jaffery Academy and Aga Khan Education Services of Kenya.',
    gallery: [],
  },
  {
    title: 'Apollo Aspire',
    url: 'https://www.instagram.com/apollo.aspire/',
    roles: [{ title: 'Mentor', period: 'December 2024 – Present' }],
    copy:
      'Coaching low-income students through the college application process, including essay editing, financial aid guidance, and application submission.',
    gallery: [],
  },
  {
    title: 'Students 4 Students UNC',
    roles: [{ title: 'Student Mentor', period: 'August 2025 – Present' }],
    copy:
      'Mentoring high school students in the Research Triangle through the college application process with workshops, essay feedback, and personalized support, expanding access to higher education by building confidence and preparedness among first-generation and underserved applicants.',
    gallery: [],
  },
  {
    title: 'Aga Khan Development Network (AKDN)',
    roles: [{ title: 'Youth Team Leader', period: 'August 2020 – 2024' }],
    copy:
      'Led 100+ volunteers ages 8–18 to organize youth activities and manage events serving 5,000 people every weekend.',
    gallery: [],
  },
]

export const formatRole = (role) => (role.period ? `${role.title} | ${role.period}` : role.title)

export const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'C', 'SQL', 'R', 'MATLAB'],
  },
  {
    label: 'Product & Web',
    items: ['ReactJS', 'Firebase', 'Node.js', 'HTML/CSS', 'JavaFX', 'API design'],
  },
  {
    label: 'Data & Tools',
    items: ['Excel', 'Tableau', 'Snowflake', 'Git', 'Linux', 'Figma', 'Confluence', 'Jira', 'Rovo AI'],
  },
  {
    label: 'AI & Agentic',
    items: ['Claude (Code & Cowork)', 'OpenAI/Codex', 'LangChain', 'Hugging Face', 'Prompt Engineering'],
  },
]

export const profile = {
  name: 'Sanay Vastani',
  title: 'Computer Science & Economics Student',
  school: 'UNC-Chapel Hill · May 2028',
  tagline: 'CS + Econ @ UNC. Product and data work across consumer lending and capital markets.',
  email: 'sanayvastani24@gmail.com',
  resume: `${import.meta.env.BASE_URL}Sanay_Vastani_Resume.pdf`,
  linkedin: 'https://www.linkedin.com/in/sanayvastani',
  github: 'https://github.com/svastani28',
}

export const credit = {
  designName: 'Brittany Chiang',
  designUrl: 'https://brittanychiang.com/',
  repoUrl: 'https://github.com/bchiang7/bchiang7.github.io',
}
