import { credit, profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Want to talk? Reach out on{' '}
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> or find my code on{' '}
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>.
      </p>
      <p className="credit">
        Design inspired by{' '}
        <a href={credit.designUrl} target="_blank" rel="noreferrer">{credit.designName}’s portfolio</a>{' '}
        (<a href={credit.repoUrl} target="_blank" rel="noreferrer">source on GitHub</a>). This site is an
        original implementation built with React and Vite, set in Inter. Content and code by {profile.name}.
      </p>
    </footer>
  )
}
