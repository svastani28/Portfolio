# Sanay Portfolio Site

## Sections included
- About
- Experience
- Projects
- Leadership
- Personal Strengths
- Gallery of Accomplishments (coming soon)
- Contact

## Local setup
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to GitHub Pages
This repo already includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Steps
1. Push this project to a GitHub repo.
2. In the repo, go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main`.
5. Wait for the workflow to finish.
6. Your site will be published at the GitHub Pages URL for the repo.

## Project structure

- `src/data/content.jsx`: all portfolio content (experience, projects, leadership, skills, strengths, profile, credit). Edit this file to update the site.
- `src/components/`: Sidebar, Footer, Modal, GalleryGrid, Icons.
- `src/hooks/`: scroll-spy (`useActiveSection`) and cursor spotlight (`useSpotlight`).
- `src/index.css`: all styling.

## Credits

Design inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/) ([source](https://github.com/bchiang7/bchiang7.github.io)). This site is an original React/Vite implementation of a similar layout, set in Inter.
