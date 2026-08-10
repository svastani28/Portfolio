import { useEffect, useState } from 'react'
import './index.css'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

const resumeLinks = [
  { label: 'Product Management Resume', href: `${import.meta.env.BASE_URL}Sanay_Vastani_PM_Resume.pdf` },
  { label: 'Data Analytics Resume', href: `${import.meta.env.BASE_URL}Sanay_Vastani_DataAnalytics_Resume.pdf` },
]

const highlightCards = [
  { value: 'Product + Data + Code', label: 'Built for technical, analytical, and business audiences' },
  { value: '4 Internships', label: 'FinTech, aerospace, and real estate exposure' },
]

const experienceItems = [
  {
    period: 'May 2026 – July 2026',
    company: 'HIVE Financial Systems',
    role: 'Product Management Intern',
    description:
      'Built a live, agentic AI-powered dashboard tracking core product metrics — scope creep, kill rate, feature adoption rate, and epic ROI — for a $120M+ consumer lending FinTech. Authored the scope of work and API requirements for a webhook integration with a third-party lead-selling platform projected to 3x revenue, and benchmarked competitor acquisition strategies via a GEMBA walk.',
    tags: ['Product strategy', 'Agentic AI', 'API design', 'Scrum/Kanban'],
  },
  {
    period: 'May 2025 – August 2025',
    company: 'GreenSky',
    role: 'Capital Markets & Data Analytics Intern',
    description:
      'Built predictive models to identify loan pools meeting Fitch and KBRA ratings criteria, prepared data tapes and stratified samples, and automated investor- and bank-ready reporting. Supported ABS securitization and a new credit facility deal alongside Goldman Sachs, RBC, Mizuho, and Citi.',
    tags: ['Capital markets', 'Predictive modeling', 'ABS securitization', 'Excel/SQL'],
  },
  {
    period: 'July 2024',
    company: 'Hermeus',
    role: 'Software Engineering Intern',
    description:
      'Helped build a Java-based interface for maneuvering a commercial hypersonic aircraft designed to fly at Mach 5, and collaborated with engineers on two new features spanning database management, API design, and backend development.',
    tags: ['Java', 'API design', 'Backend', 'UI'],
  },
  {
    period: 'January 2024 – May 2024',
    company: 'bSide Partners',
    role: 'Intern',
    description:
      'Supported business development and investment evaluation with data analysis and Excel macro work for commercial real estate acquisition targets.',
    tags: ['Excel macros', 'Data analysis', 'Commercial real estate'],
  },
]

// Add more entries here any time — the grid and "View all projects" toggle scale automatically.
// `gallery` accepts image paths (e.g. from /public/gallery/...) and renders inside the project modal once populated.
const projectCards = [
  {
    title: 'CollegeConnect',
    eyebrow: 'Featured project',
    summary:
      'A React platform designed to help high-school students, especially first-generation and under-resourced students, navigate the college application process through guidance, resources, and mentorship.',
    impact: 'Mission-driven product design for education access',
    tech: ['React', 'Vite', 'React Router', 'Responsive CSS'],
    link: 'https://github.com/svastani28/cssg-CollegeConnect',
    linkLabel: 'View repo',
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
  {
    title: 'Parr Center Ethics Bowl',
    eyebrow: 'Learning platform',
    summary:
      'An interactive educational platform for a UNC department focused on improving engagement, structuring information clearly, and making learning experiences more approachable.',
    impact: 'Interactive learning system for real users',
    tech: ['React', 'Firestore', 'Storage', 'Node.js'],
    link: null,
    linkLabel: null,
    gallery: [],
  },
]

const PROJECTS_PREVIEW_COUNT = 3

// `gallery` accepts image paths for each role — populate to surface a "View photos" button and modal automatically.
const leadershipItems = [
  {
    title: 'HackNC',
    role: 'Co-Lead (President) | March 2025 – Present',
    copy:
      'Leading a 20+ member organizing team across logistics, marketing, sponsorship, and execution for UNC’s flagship 500+ participant hackathon, driving sponsor outreach that secured over $30k in corporate and university funding.',
    gallery: [],
  },
  {
    title: 'UNC CS + Social Good',
    role: 'VP of Outreach and Project Team | September 2025 – Present',
    copy:
      'Leading outreach, external relations, social media, and budget planning for 100+ members, and building interactive educational platforms for UNC departments — including the Parr Center and Pauli Murray Center — using Claude Code, React, TypeScript, Firebase, and Node.js.',
    gallery: [],
  },
  {
    title: 'Apollo Aspire',
    role: 'Mentor | December 2024 – Present',
    copy:
      'Coaching low-income students through the college application process, including essay editing, financial aid guidance, and application submission.',
    gallery: [],
  },
  {
    title: 'Aga Khan Development Network (AKDN)',
    role: 'Youth Team Leader | August 2020 – 2024',
    copy:
      'Led 100+ volunteers ages 8–18 to organize youth activities and manage events serving 5,000 people every weekend.',
    gallery: [],
  },
  {
    title: 'Coded for Africa',
    role: 'Founder | August 2020 – Present',
    copy:
      'Built a program to help 200+ students in Nairobi develop their interest in technology, and partnered with IBM to bring Cloud Certification programs to Jaffery Academy and Aga Khan Education Services of Kenya.',
    gallery: [],
  },
]

const skillGroups = [
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
    items: ['Excel', 'Tableau', 'Snowflake', 'Git', 'Linux', 'Jira/Rovo'],
  },
  {
    label: 'AI & Agentic',
    items: ['Claude (Code & Cowork)', 'OpenAI/Codex', 'LangChain', 'Hugging Face', 'Prompt Engineering'],
  },
]

function SectionIntro({ eyebrow, title, copy }) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  )
}

function Modal({ onClose, children, labelledBy }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-panel reveal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState(navLinks[0].href.replace('#', ''))
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [activeLeader, setActiveLeader] = useState(null)
  const [showAllProjects, setShowAllProjects] = useState(false)

  useEffect(() => {
    const sectionIds = navLinks.map((item) => item.href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const updateActiveSection = () => {
      const navHeight = window.innerWidth > 720 ? 88 : 76
      const triggerLine = navHeight + 140

      let currentSection = sectionIds[0]

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()

        if (rect.top <= triggerLine && rect.bottom > triggerLine) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection)
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const visibleProjects = showAllProjects ? projectCards : projectCards.slice(0, PROJECTS_PREVIEW_COUNT)

  return (
    <div className="site-shell">
      <div className="glow glow-left" />
      <div className="glow glow-right" />
      <div className="grid-overlay" />

      <header className="hero-wrap" id="top">
        <nav className="site-nav">
          <a href="#top" className="brand-mark">SV</a>
          <div className="nav-group">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={isActive ? 'active' : ''}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
          <div
            className="resume-dropdown"
            tabIndex={0}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setResumeMenuOpen(false)
              }
            }}
          >
            <button
              type="button"
              className="resume-link"
              onClick={() => setResumeMenuOpen((open) => !open)}
              aria-expanded={resumeMenuOpen}
            >
              Resume ▾
            </button>
            {resumeMenuOpen ? (
              <div className="resume-menu">
                {resumeLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setResumeMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy hero-copy-expanded">
            <span className="eyebrow">UNC Chapel Hill • Computer Science • Economics • Public Policy</span>
            <h1>
              Building products, teams, and ideas that feel <span>clear</span>, <span>useful</span>, and credible.
            </h1>
            <p className="hero-text">
              I’m Sanay Vastani, a Computer Science &amp; Economics student who builds at the
              intersection of product, data, and software engineering. My work spans a live
              agentic AI product dashboard at a consumer lending FinTech, predictive credit
              models at a $2B+ FinTech, and hypersonic aircraft UI at an aerospace startup —
              I’m especially interested in roles where technical execution, analytical rigor,
              and clear communication all matter.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View projects</a>
              <a href="https://www.linkedin.com/in/sanayvastani" className="btn btn-secondary" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/svastani28" className="btn btn-secondary" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
            <div className="stat-row">
              {highlightCards.map((item) => (
                <article key={item.label} className="stat-panel reveal-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </header>

      <main className="main-content">
        <section className="content-section" id="experience">
          <SectionIntro
            eyebrow="Experience"
            title="Internships that show both technical depth and business fluency."
            copy="The strongest signal here is range: engineering, analytics, capital markets, and operational work across very different environments."
          />

          <div className="timeline-list">
            {experienceItems.map((item) => (
              <article key={item.company + item.role} className="timeline-item reveal-card">
                <div className="timeline-marker" />
                <div className="timeline-meta">
                  <span>{item.period}</span>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                </div>
                <div className="timeline-copy">
                  <p>{item.description}</p>
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <SectionIntro
            eyebrow="Projects"
            title="Selected work with a cleaner, more product-focused presentation."
            copy="Each card opens into more detail, including a photo gallery as project images are added."
          />

          <div className="project-showcase">
            {visibleProjects.map((project, index) => (
              <article key={project.title} className={`project-card reveal-card ${index === 0 ? 'project-featured' : ''}`}>
                <div className="project-visual">
                  <div className="window-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mockup-body">
                    <div className="mockup-line short" />
                    <div className="mockup-line medium" />
                    <div className="mockup-grid">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <span className="eyebrow">{project.eyebrow}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <strong className="impact-line">{project.impact}</strong>
                  <div className="tag-row">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <button type="button" className="btn btn-primary" onClick={() => setActiveProject(project)}>
                      View project
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {projectCards.length > PROJECTS_PREVIEW_COUNT ? (
            <div className="section-more">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowAllProjects((open) => !open)}
              >
                {showAllProjects ? 'Show fewer projects' : `View all ${projectCards.length} projects`}
              </button>
            </div>
          ) : null}
        </section>

        <section className="content-section" id="leadership">
          <SectionIntro
            eyebrow="Leadership"
            title="The part that makes the profile more memorable."
            copy="For internship recruiting, this section helps show that I can do more than contribute individually. I can also coordinate, represent, and lead."
          />

          <div className="leadership-grid">
            {leadershipItems.map((item) => (
              <article key={item.title} className="leader-card reveal-card">
                <span className="eyebrow">{item.role}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                {item.gallery && item.gallery.length > 0 ? (
                  <button
                    type="button"
                    className="btn btn-secondary leader-gallery-btn"
                    onClick={() => setActiveLeader(item)}
                  >
                    View photos
                  </button>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="skills">
          <SectionIntro
            eyebrow="Skills"
            title="Tools I’ve used across coursework, internships, and student projects."
          />
          <div className="skills-groups">
            {skillGroups.map((group) => (
              <div key={group.label} className="skills-cloud reveal-card">
                <span className="skills-group-label">{group.label}</span>
                <div className="skill-pill-row">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <article className="contact-card reveal-card">
            <span className="eyebrow">Contact</span>
            <h2>Let’s connect.</h2>
            <p>
              I’m especially interested in internship opportunities where product sense,
              technical ability, and communication all matter.
            </p>
            <div className="contact-links">
              <a href="mailto:sanayvastani24@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/sanayvastani" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/svastani28" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <div className="contact-links contact-resumes">
              {resumeLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label} ↓
                </a>
              ))}
            </div>
          </article>
        </section>
      </main>

      {activeProject ? (
        <Modal onClose={() => setActiveProject(null)} labelledBy="project-modal-title">
          <span className="eyebrow">{activeProject.eyebrow}</span>
          <h2 id="project-modal-title">{activeProject.title}</h2>
          <p>{activeProject.summary}</p>
          <strong className="impact-line">{activeProject.impact}</strong>
          <div className="tag-row">
            {activeProject.tech.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
          {activeProject.link ? (
            <a
              href={activeProject.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary modal-link"
            >
              {activeProject.linkLabel || 'View project'}
            </a>
          ) : null}
          {activeProject.gallery && activeProject.gallery.length > 0 ? (
            <div className="modal-gallery">
              {activeProject.gallery.map((src, index) => (
                <img key={src} src={src} alt={`${activeProject.title} screenshot ${index + 1}`} />
              ))}
            </div>
          ) : null}
        </Modal>
      ) : null}

      {activeLeader ? (
        <Modal onClose={() => setActiveLeader(null)} labelledBy="leader-modal-title">
          <span className="eyebrow">{activeLeader.role}</span>
          <h2 id="leader-modal-title">{activeLeader.title}</h2>
          <p>{activeLeader.copy}</p>
          <div className="modal-gallery">
            {activeLeader.gallery.map((src, index) => (
              <img key={src} src={src} alt={`${activeLeader.title} photo ${index + 1}`} />
            ))}
          </div>
        </Modal>
      ) : null}
    </div>
  )
}

export default App
