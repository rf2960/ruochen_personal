const focusItems = [
  {
    index: "01",
    title: "Current Roles",
    description:
      "Machine Learning Researcher at Columbia University and Mathematical Modelling Researcher at the Dalla Lana School of Public Health, University of Toronto.",
  },
  {
    index: "02",
    title: "Experience",
    description:
      "Research, quantitative analysis, data engineering, and risk analysis across academic and industry settings since 2019.",
  },
  {
    index: "03",
    title: "Education",
    description:
      "Master of Science at Columbia University and Honours Bachelor of Science at the University of Toronto.",
  },
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="hero" id="top">
        <div className="content-width">
          <nav className="topbar">
            <span className="brand">Ruochen Feng</span>
            <div className="nav-group">
              <div className="nav-links">
                <a href="#about">About</a>
                <a href="#focus">Work</a>
                <a href="#contact">Contact</a>
              </div>
              <a
                className="social-link"
                href="https://www.linkedin.com/in/ruochenfeng/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.08-.82-1.94-1.92-1.94-1.09 0-1.92.86-1.92 1.94 0 1.06.81 1.92 1.89 1.92h.03c1.12 0 1.92-.86 1.92-1.92Zm12.62 8.06c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.38 1.86V8.5H8.7c.04.85 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.89-1.39 1.93-1.39 1.36 0 1.91 1.04 1.91 2.57V20H19.4v-6.99Z" />
                </svg>
              </a>
            </div>
          </nav>

          <div className="hero-content">
            <div className="hero-layout">
              <div className="hero-copy">
                <p className="eyebrow">Personal Website</p>
                <h1>Ruochen Feng</h1>
                <p className="intro">
                  Machine Learning Researcher at Columbia University, based in
                  New York, with experience spanning machine learning research,
                  mathematical modelling, quantitative analysis, and data
                  engineering.
                </p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#focus">
                    View experience
                  </a>
                  <a className="button button-secondary" href="#contact">
                    Contact
                  </a>
                </div>
              </div>
              <div className="hero-photo-wrap">
                <img
                  className="hero-photo"
                  src="/ruochen-photo.jpg"
                  alt="Portrait of Ruochen Feng"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section about-section" id="about">
          <div className="content-width">
            <div className="section-heading">
              <p className="section-label">About</p>
              <h2>Research and analytical work across academia and industry.</h2>
            </div>
            <div className="two-column">
              <p>
                Publicly available profile information shows that Ruochen Feng is
                currently a Machine Learning Researcher at Columbia University
                and a Mathematical Modelling Researcher at the Dalla Lana School
                of Public Health, University of Toronto.
              </p>
              <p>
                Earlier roles include Quantitative Analysis Researcher at the
                University of Toronto, Data Engineer at VeriSilicon Holdings,
                Risk Analyst at OCBC, and Student Researcher at the University
                of Shanghai for Science and Technology.
              </p>
            </div>
          </div>
        </section>

        <section className="section focus-section" id="focus">
          <div className="content-width">
            <div className="section-heading">
              <p className="section-label">Experience</p>
              <h2>Current work, prior roles, and academic background.</h2>
            </div>
            <div className="focus-grid">
              {focusItems.map((item) => (
                <article className="focus-item" key={item.title}>
                  <p className="focus-index">{item.index}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="content-width">
            <div className="section-heading">
              <p className="section-label">Contact</p>
              <h2>Connect on LinkedIn</h2>
            </div>
            <p className="contact-copy">
              The publicly accessible profile links to LinkedIn. Direct email was
              not available from the public profile content I could verify.
            </p>
            <div className="contact-actions">
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/ruochenfeng/"
                target="_blank"
                rel="noreferrer"
              >
                Open LinkedIn
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com/in/ruochenfeng/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.08-.82-1.94-1.92-1.94-1.09 0-1.92.86-1.92 1.94 0 1.06.81 1.92 1.89 1.92h.03c1.12 0 1.92-.86 1.92-1.92Zm12.62 8.06c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.38 1.86V8.5H8.7c.04.85 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.89-1.39 1.93-1.39 1.36 0 1.91 1.04 1.91 2.57V20H19.4v-6.99Z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
