# Ruochen Feng Portfolio

A handcrafted personal portfolio for Ruochen Feng, built with React and Vite.

The site is designed as a small editorial system rather than a resume dump. It
organizes data science, ML research, GenAI product thinking, experience, and
creative interests into distinct pages with project case notes.

## Structure

```text
/
/about
/projects
/projects/pancreas-he-pathology
/projects/stardist-nuclear-segmentation
/projects/travelmind
/projects/venture-outcomes
/research
/experience
/creative
/lab
/contact
```

GitHub Pages fallback support is handled by copying `dist/index.html` to
`dist/404.html` after build.

## Features

- Multi-page portfolio with lightweight client-side routing
- Detailed project case notes with problem, approach, decisions, tradeoffs, and lessons
- Local "Ask the portfolio" guide powered by curated site notes
- Project focus interaction on the projects index
- SEO and Open Graph metadata
- Responsive editorial layout with accessible links and form controls

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build outputs static files to `dist/`.
