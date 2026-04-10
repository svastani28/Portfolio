import { useEffect, useState } from 'react'
import './index.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

const highlightCards = [
  { value: 'Software + Strategy', label: 'Built for technical and business audiences' },
  { value: '3 Internships', label: 'Fintech, aerospace, and real estate exposure' },
  { value: '20+ Person Team', label: 'Current HackNC co-leadership scope' },
]

const experienceItems = [
  {
    period: 'May 2025 – August 2025',
    company: 'GreenSky',
    role: 'Capital Markets Intern',
    description:
      'Built predictive models and tools for identifying loan pools that met rating-agency criteria, prepared data tapes and stratifications, and supported investor and bank reporting across structured finance workflows.',
    tags: ['Capital markets', 'Analytics', 'Excel', 'Structured finance'],
  },
  {
    period: 'January 2024 – May 2024',
    company: 'bSide Partners',
    role: 'Intern',
    description:
      'Supported business development and investment evaluation with data analysis and Excel macro work for commercial real estate acquisition targets.',
    tags: ['Excel macros', 'Data analysis', 'Commercial real estate'],
  },
  {
    period: 'July 2023',
    company: 'Hermeus',
    role: 'Software Engineering Intern',
    description:
      'Helped build a Java-based interface for maneuvering a commercial hypersonic aircraft and collaborated on backend features spanning database management, API work, and software development.',
    tags: ['Java', 'API design', 'Backend', 'UI'],
  },
]

const projectCards = [
  {
    title: 'CollegeConnect',
    eyebrow: 'Featured project',
    summary:
      'A React platform designed to help high-school students, especially first-generation and under-resourced students, navigate the college application process through guidance, resources, and mentorship.',
    impact: 'Mission-driven product design for education access',
    tech: ['React', 'Vite', 'React Router', 'Responsive CSS'],
    primaryLink: 'https://github.com/svastani28/cssg-CollegeConnect',
    secondaryLink: '#contact',
    secondaryLabel: 'Ask about this project',
  },
  {
    title: 'Pauli Murray Interactive Tour',
    eyebrow: 'Client-facing work',
    summary:
      'An interactive digital experience built to educate visitors on the life and legacy of Pauli Murray through accessible storytelling, guided exploration, and modern web design.',
    impact: 'Public-facing educational experience',
    tech: ['React', 'TypeScript', 'Firebase', 'Node.js'],
    primaryLink: '#contact',
    secondaryLink: '#projects',
    secondaryLabel: 'More details soon',
  },
  {
    title: 'Parr Center Learning Platform',
    eyebrow: 'Client-facing work',
    summary:
      'An interactive educational platform for a UNC partner focused on improving engagement, structuring information clearly, and making learning experiences more approachable.',
    impact: 'Interactive learning system for real users',
    tech: ['React', 'Firestore', 'Storage', 'Node.js'],
    primaryLink: '#contact',
    secondaryLink: '#projects',
    secondaryLabel: 'More details soon',
  },
]

const leadershipItems = [
  {
    title: 'HackNC',
    role: 'Co-Lead(President)',
    copy:
      'Leading a 20+ member organizing team across logistics, marketing, sponsorship, and execution for UNC’s flagship 500+ participant hackathon.',
  },
  {
    title: 'CS + Social Good',
    role: 'VP of Outreach/Events and Project Team',
    copy:
      'Running outreach, external relations, events, and project collaboration while also building interactive platforms web for UNC departments and nonprofit organizations.',
  },
  {
    title: 'Aga Khan Development Network (AKDN)',
    role: 'Mentor',
    copy:
      'Coaching low-income students with college application processes, including essay editing, financial aid guidance, and application submission',
  },
  {
    title: 'Coded for Africa',
    role: 'Founder',
    copy:
      'Program to help 200+ students develop their interest in technology to improve their future quality of life through workshops, mentorship, and project-based learning.',
  },
]

const skills = [
  'React',
  'TypeScript',
  'Java',
  'Python',
  'C',
  'SQL',
  'Firebase',
  'Git',
  'Excel',
  'Tableau',
  'Snowflake',
  'Linux',
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

function App() {
  const [activeSection, setActiveSection] = useState('about')

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
          <a href="/resume.pdf" className="resume-link" target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">UNC Chapel Hill • Computer Science • Economics • Public Policy</span>
            <h1>
              Building products, teams, and ideas that feel <span>clear</span>, <span>useful</span>, and credible.
            </h1>
            <p className="hero-text">
              I’m Sanay Vastani, a student builder with experience across software engineering,
              capital markets, student leadership, and community-centered product work. I’m
              especially interested in roles where technical execution, business thinking, and
              strong communication all matter.
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

          <aside className="hero-side reveal-card">
            <div className="side-label">Now</div>
            <h3>What this site is designed to show</h3>
            <ul>
              <li>Technical projects with real user and stakeholder context</li>
              <li>Leadership experience that goes beyond just club membership</li>
              <li>A profile that feels strong to both engineers and business recruiters</li>
            </ul>
            <div className="hero-side-divider" />
            <p>
              This version uses a darker visual system, clearer hierarchy, and more polished
              project framing so it feels closer to an internship candidate site than a class portfolio.
            </p>
          </aside>
        </section>
      </header>

      <main className="main-content">
        <section className="content-section" id="about">
          <SectionIntro
            eyebrow="About"
            title="A profile built around execution, communication, and range."
            copy="I like work that sits at the intersection of product thinking, technical problem-solving, and real-world usefulness. The through-line across my projects is simple: I want the end result to make sense to the people using it."
          />

          <div className="about-grid">
            <article className="info-card reveal-card">
              <h3>How I’m positioned</h3>
              <p>
                My experience spans software, finance, outreach, and operations, which lets me work comfortably with both technical teams and non-technical stakeholders. That mix shows up in the way I build interfaces, explain ideas, and organize projects.
              </p>
            </article>
            <article className="info-card reveal-card emphasis-card">
              <h3>What I bring</h3>
              <div className="bullet-stack">
                <div><span className="dot" />Strong presentation and stakeholder communication</div>
                <div><span className="dot" />Comfort with both code and execution details</div>
                <div><span className="dot" />Leadership experience with visible ownership</div>
                <div><span className="dot" />A practical, polished style of shipping work</div>
              </div>
            </article>
          </div>
        </section>

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
            copy="These cards are written to scan well for recruiters while still giving enough context for someone technical to understand the stack and intent."
          />

          <div className="project-showcase">
            {projectCards.map((project, index) => (
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
                    <a href={project.primaryLink} className="btn btn-primary" target={project.primaryLink.startsWith('http') ? '_blank' : undefined} rel={project.primaryLink.startsWith('http') ? 'noreferrer' : undefined}>
                      {project.primaryLink.startsWith('http') ? 'View project' : 'Contact me'}
                    </a>
                    <a href={project.secondaryLink} className="btn btn-secondary">
                      {project.secondaryLabel}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="skills">
          <SectionIntro
            eyebrow="Skills"
            title="Tools I’ve used across coursework, internships, and student projects."
          />
          <div className="skills-cloud reveal-card">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
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
              <a href="mailto:svastani@unc.edu">svastani@unc.edu</a>
              <a href="https://www.linkedin.com/in/sanayvastani" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/svastani28" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
