# Ruochen Feng Personal Website

A concise personal website built with React and Vite to present research interests, professional background, and selected publications in a clean, portfolio-ready format.

## Motivation

This repository exists to give recruiters, collaborators, and research contacts a polished introduction to Ruochen Feng without forcing them to read a full CV first. The site is designed to feel minimal and professional while leaving room for future project pages and case studies.

## Key Features

- Concise landing page with clear professional positioning
- Resume-informed summary of education, research, and industry experience
- Selected publications section with external links
- Responsive single-page layout optimized for GitHub Pages
- Custom-domain-ready deployment workflow

## Tech Stack

- React 18
- Vite 5
- CSS
- GitHub Actions
- GitHub Pages

## Project Structure

```text
.
|-- .github/workflows/deploy.yml
|-- docs/screenshots/
|   `-- README.md
|-- public/
|   |-- CNAME
|   |-- ruochen-photo.jpg
|   `-- vite.svg
|-- src/
|   |-- App.jsx
|   |-- main.jsx
|   `-- styles.css
|-- index.html
|-- package.json
`-- vite.config.js
```

## Architecture / Workflow

The site is implemented as a small React single-page application. `App.jsx` defines the content structure, `styles.css` controls the visual presentation, and Vite builds static assets for deployment. GitHub Actions installs dependencies, builds the site, and publishes the output to GitHub Pages.

## Setup

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production Build

```bash
npm run build
```

## Example Usage

This project is intended to be used as:

- a personal landing page linked from a resume or LinkedIn profile
- a lightweight academic and professional portfolio
- a base for future project writeups and publication pages

## Demo / Screenshots

Screenshot placeholders live in `docs/screenshots/README.md`.

Suggested assets to add:

- homepage hero section
- publications section
- mobile responsive view

## Results

Current outcome:

- the site deploys successfully to GitHub Pages
- the repository URL renders the production page correctly
- the structure is intentionally lightweight so the site can be expanded without heavy refactoring

## Future Improvements

- add a dedicated projects page with case studies
- add writing, talks, or notes sections
- improve publication metadata with venue, year, and co-author context
- add curated screenshots for the README

## Deployment

1. Push to `main`.
2. In GitHub, open `Settings` -> `Pages`.
3. Set `Source` to `GitHub Actions`.
4. Confirm the workflow in `.github/workflows/deploy.yml` completes successfully.
5. After the default GitHub Pages URL works, attach the custom domain.

## Verification Commands

```bash
npm run dev
npm run build
```
