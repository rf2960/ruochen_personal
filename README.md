# Ruochen Feng Website

React + Vite personal website scaffold, ready for deployment to GitHub Pages through GitHub Actions.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages deployment

1. Push this repository to GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Make sure your default deployment branch is `main`, because the workflow runs on pushes to `main`.
5. The custom domain is set to `ruochenfeng.com` in `public/CNAME`.
6. In your DNS provider, point the custom domain to GitHub Pages using GitHub's recommended DNS records.

The workflow file is located at `.github/workflows/deploy.yml`.

## Project structure

- `src/App.jsx`: page content
- `src/main.jsx`: React entrypoint
- `src/styles.css`: styling
- `public/CNAME`: custom domain for GitHub Pages
- `.github/workflows/deploy.yml`: build and deploy pipeline
