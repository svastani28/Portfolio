const projects = [
  {
    title: 'CollegeConnect',
    type: 'React Web Platform',
    description:
      'A web platform supporting high-school students, especially first-generation and under-resourced students, through the college application process with guidance, resources, mentorship, and college search tools.',
    tech: ['React', 'Vite', 'React Router', 'CSS'],
    link: 'https://github.com/svastani28/cssg-CollegeConnect',
  },
  {
    title: 'Pauli Murray Interactive Tour',
    type: 'Digital Education Project',
    description:
      'An interactive digital experience designed to educate visitors about the life and legacy of Pauli Murray through accessible storytelling and thoughtful web design.',
    tech: ['React', 'TypeScript', 'Firebase', 'Node.js'],
    link: '#',
  },
  {
    title: 'Parr Center Interactive Learning System',
    type: 'Client Project',
    description:
      'An educational platform built for a UNC department to create a more engaging and interactive learning experience for users.',
    tech: ['React', 'Firestore', 'Storage', 'Node.js'],
    link: '#',
  },
];

const strengths = [
  'Leadership grounded in trust, communication, and service',
  'Technical experience across web development, product thinking, and data-driven problem solving',
  'Strong interest in using technology to expand access and create social impact',
  'Experience managing teams, outreach, and operations across student organizations and projects',
];

const experiences = [
  {
    role: 'Co-Lead, HackNC',
    details:
      'Lead planning and execution for UNC’s flagship hackathon while coordinating logistics, sponsorship, outreach, and team operations.',
  },
  {
    role: 'VP of Outreach & Events, CS + Social Good',
    details:
      'Support club growth, partnerships, and events while helping connect technical projects to meaningful community impact.',
  },
  {
    role: 'Student, UNC Chapel Hill',
    details:
      'Computer Science and Business student with a minor in Public Policy, focused on technology, leadership, and social impact.',
  },
];

const galleryItems = [
  'Hackathon leadership and event operations',
  'Client-facing project work with UNC organizations',
  'Technical builds focused on education and accessibility',
  'Mentorship, outreach, and public speaking experiences',
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="hero" id="top">
        <nav className="nav">
          <a href="#top" className="brand">Sanay Vastani</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#strengths">Strengths</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <div>
            <p className="eyebrow">Student • Builder • Mentor</p>
            <h1>Creating thoughtful technology, strong teams, and impact-driven projects.</h1>
            <p className="hero-copy">
              I’m Sanay Vastani, a UNC Chapel Hill student studying Computer Science and Business with a minor in Public Policy. I’m interested in building tools that expand access, strengthen communities, and solve real problems.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">View Projects</a>
              <a className="secondary-btn" href="#contact">Contact Me</a>
            </div>
          </div>

          <div className="hero-card">
            <p className="hero-card-label">Currently focused on</p>
            <ul>
              <li>Web development for social impact</li>
              <li>Student leadership and event operations</li>
              <li>Mentorship and access in education</li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <SectionTitle
            eyebrow="About Me"
            title="Here’s who I am and what I do"
            text="My work sits at the intersection of technology, leadership, and service. I care deeply about creating inclusive spaces where people feel supported, heard, and empowered to succeed."
          />
          <div className="about-grid">
            <div className="about-card">
              <h3>Mission</h3>
              <p>
                I believe trust and communication are the foundation of meaningful leadership. Whether I’m building a product, leading a team, or mentoring students, I try to create environments where people can collaborate openly and grow confidently.
              </p>
            </div>
            <div className="about-card">
              <h3>Interests</h3>
              <p>
                I’m especially interested in education access, product development, technical leadership, and using software to solve practical community-centered problems.
              </p>
            </div>
          </div>
        </section>

        <section id="strengths" className="section alt-section">
          <SectionTitle
            eyebrow="Personal Strengths"
            title="What I bring to teams and projects"
          />
          <div className="strengths-grid">
            {strengths.map((strength) => (
              <article className="strength-card" key={strength}>
                <p>{strength}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionTitle
            eyebrow="Experience"
            title="Leadership, outreach, and technical work"
          />
          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-item" key={item.role}>
                <h3>{item.role}</h3>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section alt-section">
          <SectionTitle
            eyebrow="Projects"
            title="A few things I’ve built"
            text="This section is modeled after the project-focused feel of your current site, but organized into cleaner portfolio cards that are easier to update over time."
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tech.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section">
          <SectionTitle
            eyebrow="Gallery of Accomplishments"
            title="Highlights you can expand later"
            text="For now, this section uses placeholders so you can quickly swap in real photos, screenshots, awards, or event images from your current portfolio."
          />
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div className="gallery-card" key={item}>
                <div className="gallery-placeholder">Add image</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section alt-section">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s connect"
            text="You can use these buttons for your live links once you update them with your own information."
          />
          <div className="contact-card">
            <p>
              I’m always open to connecting about projects, internships, student leadership, and opportunities to build technology that makes a difference.
            </p>
            <div className="contact-links">
              <a className="primary-btn" href="mailto:your-email@unc.edu">Email Me</a>
              <a className="secondary-btn" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="secondary-btn" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              <a className="secondary-btn" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
