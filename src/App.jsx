import { useState } from 'react'
import './index.css'
import {
  LEADERSHIP_PREVIEW_COUNT,
  PROJECTS_PREVIEW_COUNT,
  experienceItems,
  formatRole,
  leadershipItems,
  navLinks,
  projectCards,
  skillGroups,
  strengthItems,
} from './data/content'
import useActiveSection from './hooks/useActiveSection'
import useSpotlight from './hooks/useSpotlight'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Modal from './components/Modal'
import GalleryGrid from './components/GalleryGrid'
import { ArrowIcon, ChevronIcon } from './components/Icons'

const sectionIds = navLinks.map((item) => item.href.slice(1))

function Section({ id, label, children }) {
  return (
    <section id={id} className="content-section" aria-label={label}>
      <div className="section-heading">
        <h2>{label}</h2>
      </div>
      {children}
    </section>
  )
}

function ExtLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="ext-link">
      {children}
      <ArrowIcon />
    </a>
  )
}

function TagList({ tags }) {
  return (
    <ul className="tag-list" aria-label="Technologies used">
      {tags.map((tag) => (
        <li key={tag} className="tag">{tag}</li>
      ))}
    </ul>
  )
}

function App() {
  const activeSection = useActiveSection(sectionIds)
  const spotlightRef = useSpotlight()
  const [activeProject, setActiveProject] = useState(null)
  const [activeLeader, setActiveLeader] = useState(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllLeadership, setShowAllLeadership] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)

  const visibleProjects = showAllProjects ? projectCards : projectCards.slice(0, PROJECTS_PREVIEW_COUNT)

  const visibleLeadership = showAllLeadership
    ? leadershipItems
    : leadershipItems.slice(0, LEADERSHIP_PREVIEW_COUNT)

  return (
    <div className="site-shell" ref={spotlightRef}>
      <div className="spotlight" aria-hidden="true" />

      <div className="layout">
        <Sidebar activeSection={activeSection} />

        <main className="main-column">
          <Section id="about" label="About">
            <p>
              I’m a junior at UNC Chapel Hill studying <strong>Computer Science &amp; Economics</strong>,
              building at the intersection of product, data, and software engineering. Across every team
              I’m part of, whether product, classroom, or community, I keep coming back to the same
              throughline: trust and communication are what let people actually get things done together.
            </p>
            <p>
              My work spans a live agentic AI product dashboard at a consumer lending FinTech, predictive
              credit models at a B2B FinTech, and 2 warehouse management systems in real-eastate and aerospace. These
              days I lead <strong>HackNC</strong>, <strong>UNC CS + Social Good</strong>, while
              mentoring students through <strong>Apollo Aspire</strong> and <strong>Students 4 Students</strong>.
            </p>
            <p>
              I care about creating space for honest, open dialogue, because that’s what turns a group of
              individuals into a team that trusts each other enough to move fast. I’m especially interested
              in roles where technical execution, analytical rigor, and clear communication all matter.
            </p>
          </Section>

          <Section id="experience" label="Work Experience">
            <ol className="hover-list">
              {experienceItems.map((item) => (
                <li key={item.company + item.role} className="entry">
                  <header className="entry-date">{item.period}</header>
                  <div className="entry-body">
                    <h3 className="entry-title">
                      {item.role} <span className="entry-sep">·</span>{' '}
                      <ExtLink href={item.url}>{item.company}</ExtLink>
                    </h3>
                    <p>{item.description}</p>
                    <TagList tags={item.tags} />
                  </div>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="projects" label="Projects">
            <ul className="hover-list">
              {visibleProjects.map((project) => (
                <li key={project.title} className="entry entry-project">
                  <div className="project-thumb">
                    {project.gallery && project.gallery.length > 0 ? (
                      <img src={project.gallery[0]} alt={`${project.title} preview`} loading="lazy" />
                    ) : (
                      <span className="project-thumb-empty">{project.title.charAt(0)}</span>
                    )}
                  </div>
                  <div className="entry-body">
                    <h3 className="entry-title">
                      <button type="button" className="title-link" onClick={() => setActiveProject(project)}>
                        {project.title}
                        <ArrowIcon />
                      </button>
                    </h3>
                    <span className="entry-eyebrow">{project.eyebrow}</span>
                    <p>{project.summary}</p>
                    <TagList tags={project.tech} />
                  </div>
                </li>
              ))}
            </ul>

            {projectCards.length > PROJECTS_PREVIEW_COUNT ? (
              <button
                type="button"
                className="text-link-button"
                onClick={() => setShowAllProjects((open) => !open)}
              >
                {showAllProjects ? 'Show fewer projects' : `View all ${projectCards.length} projects`}
                <ChevronIcon open={showAllProjects} />
              </button>
            ) : null}
          </Section>

          <Section id="leadership" label="Leadership">
            <ul className="hover-list">
              {visibleLeadership.map((item) => (
                <li key={item.title} className="entry entry-leader">
                  <header className="entry-date">
                    {item.roles.length === 1 ? item.roles[0].period : `${item.roles.length} roles`}
                  </header>
                  <div className="entry-body">
                    <h3 className="entry-title">
                      {item.roles.length === 1 ? (
                        <>
                          {item.roles[0].title} <span className="entry-sep">·</span>{' '}
                          {item.url ? <ExtLink href={item.url}>{item.title}</ExtLink> : item.title}
                        </>
                      ) : item.url ? (
                        <ExtLink href={item.url}>{item.title}</ExtLink>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <p>{item.copy}</p>
                    {item.roles.length > 1 ? (
                      <ol className="role-list">
                        {item.roles.map((role) => (
                          <li key={role.title} className={role.period.endsWith('Present') ? 'is-current' : undefined}>
                            <span className="role-title">{role.title}</span>
                            <span className="role-period">{role.period}</span>
                            {role.copy ? <p>{role.copy}</p> : null}
                          </li>
                        ))}
                      </ol>
                    ) : null}
                    {item.gallery && item.gallery.length > 0 ? (
                      <button type="button" className="text-link-button" onClick={() => setActiveLeader(item)}>
                        View photos
                        <ArrowIcon />
                      </button>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>

            {leadershipItems.length > LEADERSHIP_PREVIEW_COUNT ? (
              <button
                type="button"
                className="text-link-button"
                onClick={() => setShowAllLeadership((open) => !open)}
                aria-expanded={showAllLeadership}
              >
                {showAllLeadership ? 'Show fewer organizations' : `View all ${leadershipItems.length} organizations`}
                <ChevronIcon open={showAllLeadership} />
              </button>
            ) : null}
          </Section>

          <Section id="skills" label="Skills">
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div key={group.label} className="skill-group">
                  <h3>{group.label}</h3>
                  <TagList tags={group.items} />
                </div>
              ))}
            </div>
          </Section>

          <Section id="strengths" label="Strengths">
            <p className="section-lede">Top 5 CliftonStrengths, from a Gallup assessment.</p>
            <ul className="strength-list">
              {strengthItems.map((item, index) => (
                <li key={item.title} className="strength">
                  <svg
                    className="strength-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </svg>
                  <div>
                    <h3>
                      <span className="strength-rank">#{index + 1}</span> {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Footer />
        </main>
      </div>

      {activeProject ? (
        <Modal onClose={() => setActiveProject(null)} labelledBy="project-modal-title">
          <span className="entry-eyebrow">{activeProject.eyebrow}</span>
          <h2 id="project-modal-title">{activeProject.title}</h2>
          <p>{activeProject.summary}</p>
          <p className="impact-line">{activeProject.impact}</p>
          <TagList tags={activeProject.tech} />
          {activeProject.link ? (
            <a href={activeProject.link} target="_blank" rel="noreferrer" className="text-link-button">
              {activeProject.linkLabel || 'View project'}
              <ArrowIcon />
            </a>
          ) : null}
          {activeProject.website ? (
            <a href={activeProject.website} target="_blank" rel="noreferrer" className="text-link-button">
              {activeProject.websiteLabel || 'Visit site'}
              <ArrowIcon />
            </a>
          ) : null}
          {activeProject.gallery && activeProject.gallery.length > 0 ? (
            <GalleryGrid
              images={activeProject.gallery}
              altPrefix={`${activeProject.title} screenshot`}
              onSelect={setLightboxImage}
            />
          ) : null}
          {activeProject.contributions && activeProject.contributions.length > 0 ? (
            <div className="modal-contributions">
              <span className="entry-eyebrow">Tickets I completed</span>
              <ul className="contribution-list">
                {activeProject.contributions.map((item) => (
                  <li key={item.ticket}>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <span className="contribution-ticket">{item.ticket}</span>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Modal>
      ) : null}

      {activeLeader ? (
        <Modal onClose={() => setActiveLeader(null)} labelledBy="leader-modal-title">
          <span className="entry-eyebrow">{formatRole(activeLeader.roles[0])}</span>
          <h2 id="leader-modal-title">{activeLeader.title}</h2>
          <p>{activeLeader.copy}</p>
          <GalleryGrid
            images={activeLeader.gallery}
            altPrefix={`${activeLeader.title} photo`}
            onSelect={setLightboxImage}
          />
        </Modal>
      ) : null}

      {lightboxImage ? (
        <Modal onClose={() => setLightboxImage(null)} ariaLabel={lightboxImage.alt} variant="image">
          <img src={lightboxImage.src} alt={lightboxImage.alt} />
        </Modal>
      ) : null}
    </div>
  )
}

export default App
