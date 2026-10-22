import { navLinks, profile } from '../data/content'
import { GitHubIcon, LinkedInIcon } from './Icons'

export default function Sidebar({ activeSection }) {
  return (
    <header className="sidebar">
      <div>
        <h1 className="sidebar-name">
          <a href="#about">{profile.name}</a>
        </h1>
        <h2 className="sidebar-title">{profile.title}</h2>
        <p className="sidebar-school">{profile.school}</p>
        <p className="sidebar-tagline">{profile.tagline}</p>

        <nav className="side-nav" aria-label="In-page navigation">
          <ul>
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`side-nav-link${isActive ? ' active' : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span className="nav-indicator" />
                    <span className="nav-label">{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <ul className="social-list" aria-label="Social media">
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)" title="GitHub">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </header>
  )
}
