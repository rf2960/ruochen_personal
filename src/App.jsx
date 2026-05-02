import { useEffect, useMemo, useState } from "react";

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Experience", href: "/experience" },
  { label: "Creative", href: "/creative" },
  { label: "Lab", href: "/lab" },
  { label: "Contact", href: "/contact" },
];

const profileLinks = {
  resume: asset("Feng_Resume.pdf"),
  github: "https://github.com/rf2960",
  linkedin: "https://www.linkedin.com/in/ruochenfeng/",
  email: "mailto:rf2960@columbia.edu",
};

const projectData = [
  {
    slug: "pancreas-he-pathology",
    title: "Pancreas H&E Pathology AI",
    eyebrow: "Biomedical ML",
    short:
      "A research-grade computer vision workflow for pancreatic H&E tile classification, built around validation discipline rather than polished claims.",
    role: "Machine Learning Researcher, Reya Lab",
    period: "Sep 2025 - present",
    status: "Research workflow",
    accent: "sage",
    tags: ["PyTorch", "QuPath", "Medical CV", "Slide-held-out validation"],
    heroImage: asset("case-assets/pathology/pipeline_overview.png"),
    repo: "https://github.com/rf2960/pancreas-he-pathology",
    live: null,
    metrics: [
      ["43,213", "annotated tiles in the working dataset"],
      ["39,944", "held-out tile predictions in saved outputs"],
      ["0.573", "mean tuned tissue macro F1"],
      ["+0.160", "mean threshold-tuning gain"],
    ],
    problem:
      "Pathology ML is easy to make look simpler than it is. Tiles are correlated by slide, classes are imbalanced, and raw scans cannot be treated like public toy data. The project asked how to package a sensitive research workflow so the technical decisions could be inspected without exposing private data.",
    built:
      "I built a public-facing pipeline around QuPath annotation export, tile parsing, WideResNet-50-2 training, class balancing, test-time augmentation, threshold tuning, and reproducibility notes.",
    approach: [
      "Used QuPath and Groovy scripts to turn annotated regions into coordinate-aware tile datasets.",
      "Evaluated with leave-one-slide-out validation to reduce slide leakage.",
      "Used focal loss, class weighting, balanced sampling, and threshold tuning to make class imbalance visible instead of hiding it.",
      "Documented data access, model limits, and artifact governance so the public repo remains usable without exposing raw scans.",
    ],
    decisions: [
      "I treated validation design as the main story, not the final metric.",
      "I kept the raw data and checkpoints out of the repo, but made the workflow inspectable through figures, CSV summaries, and model-card style notes.",
      "I framed threshold tuning as a useful experiment, not as a clinically validated improvement.",
    ],
    tradeoffs: [
      "The model is research-grade, not clinically deployable.",
      "Some classes remain underrepresented, so macro F1 is more honest than accuracy alone.",
      "The public repo is necessarily lighter than the private working folder.",
    ],
    learned:
      "The strongest ML work is often the unglamorous part: data export, leakage control, class imbalance, and documentation that makes the result believable.",
    gallery: [
      {
        src: asset("case-assets/pathology/threshold_tuning_summary.png"),
        caption: "Threshold tuning summary from saved evaluation outputs.",
      },
      {
        src: asset("case-assets/pathology/example_tile_mosaic.png"),
        caption: "Representative tile mosaic selected from public examples.",
      },
      {
        src: asset("case-assets/pathology/qupath_to_ml_workflow.png"),
        caption: "QuPath-to-ML workflow, showing the annotation engineering layer.",
      },
    ],
  },
  {
    slug: "stardist-nuclear-segmentation",
    title: "StarDist Nuclear Segmentation",
    eyebrow: "Research tooling",
    short:
      "A scale-aware TMA segmentation workflow with an interactive viewer for reviewing nuclei, tiles, and spatial context.",
    role: "Research tool builder",
    period: "2025",
    status: "Viewer available",
    accent: "blue",
    tags: ["StarDist", "TensorFlow", "OpenSlide", "WSI review"],
    heroImage: asset("case-assets/pathology/example_tile_mosaic.png"),
    repo: "https://github.com/rf2960/stardist-nuclear-segmentation",
    live: asset("stardist-tma-viewer.html"),
    metrics: [
      ["82K+", "nuclear masks"],
      ["7", "TMA cores in current viewer"],
      ["20x", "model-normalized inference scale"],
      ["HTML", "self-contained review artifact"],
    ],
    problem:
      "Segmentation output is hard to trust if reviewers only see aggregate counts. This project focused on making nuclear detections inspectable at the tile and core level.",
    built:
      "I assembled a viewer-oriented pipeline around OpenSlide ingestion, StarDist inference, stain-gated filtering, overlap cleanup, and interactive HTML review.",
    approach: [
      "Normalize scale before inference so the pretrained StarDist model sees expected tissue resolution.",
      "Deduplicate overlapping tile detections after sliding-window processing.",
      "Export a lightweight viewer with core navigation, patch grids, and boundary opacity controls.",
    ],
    decisions: [
      "Prioritized reviewability over pretending the model is automatic truth.",
      "Kept the viewer self-contained so it can be shared without a local Python environment.",
    ],
    tradeoffs: [
      "The public viewer is a curated artifact, not the complete private slide collection.",
      "Segmentation quality still depends on stain quality, core detection, and thresholds.",
    ],
    learned:
      "For biomedical tools, interface design is part of the science. If reviewers cannot inspect output, the pipeline is not finished.",
    gallery: [
      {
        src: asset("case-assets/pathology/example_tile_mosaic.png"),
        caption: "Tile-level visual context used for review.",
      },
    ],
  },
  {
    slug: "travelmind",
    title: "TravelMind Planner",
    eyebrow: "Agentic AI concept",
    short:
      "A multi-agent travel-planning concept shown through product screens, architecture diagrams, and a hosted demo walkthrough.",
    role: "Project lead",
    period: "Sep 2025 - Dec 2025",
    status: "Portfolio demo",
    accent: "ink",
    tags: ["LLM agents", "Product design", "Architecture", "Demo"],
    heroImage: asset("case-assets/travelmind/discover_result.png"),
    repo: "https://github.com/rf2960/travelmind-planner",
    live: asset("travelmind-demo.html"),
    metrics: [
      ["2", "core user flows"],
      ["5", "planned agent roles"],
      ["1440p", "hosted walkthrough video"],
      ["0", "production claims"],
    ],
    problem:
      "Travel planning is iterative, preference-heavy, and easy for a single prompt to flatten. The project explored how an LLM product might separate discovery, planning, enrichment, and revision.",
    built:
      "The public repo presents the system design, screenshots, architecture pages, and a high-quality demo walkthrough. It is intentionally framed as a concept and portfolio artifact, not a deployed app.",
    approach: [
      "Separate destination discovery from existing-plan enhancement.",
      "Route requests through roles such as ConstraintParser, DestinationRecommender, ItineraryPlanner, DetailEnricher, and PlanEnhancer.",
      "Use a demo page to make the product flow inspectable without implying a live backend.",
    ],
    decisions: [
      "I chose honest scope over overclaiming: the public artifact shows design and reasoning, not a full code release.",
      "The demo page lives on this site so viewers can watch the product flow without digging through GitHub folders.",
    ],
    tradeoffs: [
      "Without the full frontend/backend source, this is not a runnable public app.",
      "The strongest value is product reasoning, system decomposition, and interaction design.",
    ],
    learned:
      "A good AI product is not just a prompt. It needs constraints, fallbacks, mode boundaries, and a user experience that makes uncertainty manageable.",
    gallery: [
      {
        src: asset("case-assets/travelmind/discover_result.png"),
        caption: "Destination discovery result screen.",
      },
      {
        src: asset("case-assets/travelmind/plan_result.png"),
        caption: "Existing-plan enhancement result screen.",
      },
    ],
  },
  {
    slug: "venture-outcomes",
    title: "Venture Outcomes Under Censoring",
    eyebrow: "Data storytelling",
    short:
      "An interactive Crunchbase-style analysis that treats startup outcomes as censored evidence rather than simple success labels.",
    role: "Analyst and report builder",
    period: "2025",
    status: "Live report",
    accent: "gold",
    tags: ["Visualization", "Bias framing", "Python", "Interactive report"],
    heroImage: asset("case-assets/investments/market_exit_fingerprint.svg"),
    repo: "https://github.com/rf2960/market-investment-visualization",
    live: "https://rf2960.github.io/market-investment-visualization/",
    metrics: [
      ["2000-2008", "mature cohorts emphasized"],
      ["SVG", "static preview exports"],
      ["HTML", "published report"],
      ["0", "causal claims"],
    ],
    problem:
      "Startup status data tempts people into easy rankings, but many companies are still operating because they have not had time to exit or fail. The analysis needed to foreground censoring and survivorship bias.",
    built:
      "I built an executive-style web report with market exploration, status composition views, and careful language around funding depth and outcome interpretation.",
    approach: [
      "Reframed the analysis around time-to-outcome instead of raw status rates.",
      "Compared mature founding cohorts separately from recent cohorts.",
      "Generated clean SVG artifacts and a reproducible HTML report from the source data.",
    ],
    decisions: [
      "Used descriptive language throughout to avoid implying funding causes success.",
      "Made the report readable as a story, not just a chart gallery.",
    ],
    tradeoffs: [
      "The dataset is a static snapshot with missingness and self-reporting bias.",
      "Funding is aggregated at the company level, not modeled as a time series.",
    ],
    learned:
      "Good analytics is often about refusing the most convenient interpretation and building a better frame for the reader.",
    gallery: [
      {
        src: asset("case-assets/investments/status_composition.svg"),
        caption: "Status composition view from the published report.",
      },
      {
        src: asset("case-assets/investments/market_exit_fingerprint.svg"),
        caption: "Market exit fingerprint figure.",
      },
    ],
  },
];

const experienceItems = [
  {
    org: "Google Maps Navigation Trips",
    role: "Incoming Data Scientist Intern",
    time: "June 2026 - Sep 2026",
    place: "Greater Seattle Area",
    body:
      "Selected for driver-based trip-demand forecasting work involving time-series features, baseline evaluation, dashboards, and Gemini-powered summaries for product-facing insight.",
  },
  {
    org: "Reya Lab, Columbia University Irving Medical Center",
    role: "Machine Learning Researcher",
    time: "Sep 2025 - present",
    place: "New York City",
    body:
      "Building histopathology image-analysis workflows across supervised tile classification, StarDist segmentation, validation design, and interactive review artifacts.",
  },
  {
    org: "VeriSilicon Microelectronics",
    role: "Data Engineer Intern",
    time: "Jul 2023 - Sep 2023",
    place: "Shanghai",
    body:
      "Built automated reporting and reusable SQL/Python workflows across AWS, Spark, Kafka, ReportLab, and product-analysis datasets.",
  },
  {
    org: "OCBC Bank",
    role: "Risk Analyst Intern",
    time: "Apr 2023 - Jun 2023",
    place: "Shanghai",
    body:
      "Worked on SQL exposure tables, Tableau risk monitoring, and Python volatility forecasting for market-risk analysis.",
  },
];

const researchItems = [
  {
    title:
      "Leveraging Mathematical Modelling to Evaluate Malaria Vaccination Roll-Out Strategies in Cameroon",
    meta: "SSRN preprint",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5250090",
    body:
      "Age-structured mathematical modelling for vaccination strategy evaluation.",
  },
  {
    title:
      "A Novel Kalman Filter Algorithm Using Stance Detection for an Inertial Navigation System",
    meta: "Springer chapter",
    href: "https://link.springer.com/chapter/10.1007/978-981-15-8411-4_260",
    body:
      "A Kalman-filter-based inertial navigation method using stance detection.",
  },
];

const thinkingNotes = [
  {
    label: "Evidence first",
    text:
      "I like artifacts that can be inspected: figures, demos, viewers, CSV summaries, model cards, and architecture notes.",
  },
  {
    label: "Systems over prompts",
    text:
      "For GenAI work, I care about routing, fallbacks, interface states, and where uncertainty shows up for the user.",
  },
  {
    label: "Careful claims",
    text:
      "I would rather explain a limitation clearly than make a project sound bigger than it is.",
  },
];

const guideAnswers = [
  {
    keywords: ["strong", "strongest", "first", "read"],
    title: "Best first read",
    answer:
      "Start with the pathology ML case note if you want the strongest technical evidence. It has the clearest combination of data engineering, validation choices, metrics, and honest limitations.",
  },
  {
    keywords: ["google", "maps", "forecast", "forecasting", "intern"],
    title: "Google Maps forecasting",
    answer:
      "Ruochen is an incoming Data Scientist Intern on Google Maps Navigation Trips, selected for driver-based trip-demand forecasting. The strongest angle is applied forecasting plus product-facing communication, not a claim of completed Google impact yet.",
  },
  {
    keywords: ["pathology", "medical", "histology", "he", "tile", "research"],
    title: "Pathology ML",
    answer:
      "The pathology work is strongest when framed as a research-grade ML workflow: QuPath export, slide-held-out validation, class imbalance, threshold tuning, and careful public documentation around sensitive data.",
  },
  {
    keywords: ["travel", "travelmind", "agent", "llm", "genai"],
    title: "TravelMind",
    answer:
      "TravelMind should be presented as a product and architecture demo, not a live production app. Its value is in user-flow thinking, agent decomposition, and honest scope.",
  },
  {
    keywords: ["creative", "music", "design", "ui"],
    title: "Creative side",
    answer:
      "The creative page is intentionally light: it positions music, UI taste, and experiments as part of how Ruochen thinks, without pretending they are formal professional credits.",
  },
  {
    keywords: ["weak", "improve", "next", "portfolio"],
    title: "Best next improvement",
    answer:
      "The highest-leverage next step is adding one or two short written case notes with screenshots and decision logs. A small, honest explanation often feels more senior than another large project card.",
  },
];

function navigateTo(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function useRoute() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return path;
}

function Link({ href, children, className, ...props }) {
  const isInternal = href.startsWith("/");
  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        if (!isInternal || event.metaKey || event.ctrlKey || event.shiftKey) return;
        event.preventDefault();
        navigateTo(href);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

function Arrow() {
  return <span aria-hidden="true">-&gt;</span>;
}

function Header({ route }) {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Ruochen Feng home">
        <span>Ruochen</span>
        <span>Feng</span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={route === item.href ? "active" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <a className="nav-resume" href={profileLinks.resume} target="_blank" rel="noreferrer">
        Resume
      </a>
    </header>
  );
}

function Shell({ route, children }) {
  return (
    <div className="app-shell">
      <CursorGlow />
      <Header route={route} />
      <main className="page-transition" key={route}>
        {children}
      </main>
    </div>
  );
}

function CursorGlow() {
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (event) => {
      root.style.setProperty("--mx", `${event.clientX}px`);
      root.style.setProperty("--my", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return <div className="ambient-glow" aria-hidden="true" />;
}

function PageHero({ kicker, title, body, children, narrow = false }) {
  return (
    <section className={`page-hero ${narrow ? "narrow" : ""}`}>
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      {body && <p className="hero-body">{body}</p>}
      {children}
    </section>
  );
}

function SectionHeader({ kicker, title, body }) {
  return (
    <div className="section-header">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

function HomePage() {
  const selected = projectData.slice(0, 3);
  return (
    <>
      <section className="home-hero">
        <div className="hero-left">
          <p className="kicker">Data science, ML, and designed systems</p>
          <h1>I build intelligent systems that stay legible to people.</h1>
          <p className="hero-body">
            I am Ruochen Feng, a Columbia M.S. Data Science student working across
            forecasting, biomedical image analysis, GenAI product design, and analytical
            storytelling.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/projects">
              View selected work <Arrow />
            </Link>
            <Link className="button ghost" href="/lab">
              Ask about my work
            </Link>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Current focus">
          <div className="panel-line">
            <span>Currently</span>
            <strong>incoming Google Maps DS intern</strong>
          </div>
          <div className="panel-line">
            <span>Research</span>
            <strong>histopathology ML and review tooling</strong>
          </div>
          <div className="panel-line">
            <span>Taste</span>
            <strong>quiet interfaces, careful claims, usable AI</strong>
          </div>
        </aside>
      </section>

      <section className="section">
        <SectionHeader
          kicker="Selected work"
          title="Projects with something to inspect."
          body="I prefer work that leaves evidence behind: demos, figures, viewers, notes, and tradeoffs."
        />
        <div className="selected-grid">
          {selected.map((project) => (
            <ProjectPreview project={project} key={project.slug} />
          ))}
        </div>
      </section>

      <section className="section split-section">
        <SectionHeader
          kicker="How I think"
          title="A small working philosophy."
          body="The thread across my work is not one domain. It is a way of making uncertain systems easier to inspect."
        />
        <div className="note-list">
          {thinkingNotes.map((note) => (
            <article className="note-row" key={note.label}>
              <h3>{note.label}</h3>
              <p>{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section home-guide">
        <WorkGuide compact />
      </section>
    </>
  );
}

function ProjectPreview({ project }) {
  return (
    <article className={`project-preview accent-${project.accent}`}>
      <Link href={`/projects/${project.slug}`} className="image-link">
        <img src={project.heroImage} alt="" loading="lazy" />
      </Link>
      <div>
        <p className="kicker">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.short}</p>
        <div className="tag-row">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Link className="text-link" href={`/projects/${project.slug}`}>
          Read case note <Arrow />
        </Link>
      </div>
    </article>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="I am drawn to the space between models, interfaces, and evidence."
        body="My background is math and statistics, but the work I enjoy most asks for more than a model: it needs a usable path from messy data to a decision someone can understand."
      />
      <section className="section about-grid">
        <div className="portrait-card">
          <img src={asset("ruochen-photo.jpg")} alt="Portrait of Ruochen Feng" />
        </div>
        <div className="prose">
          <p>
            I am pursuing an M.S. in Data Science at Columbia University after an
            H.B.Sc. in Mathematics and Statistics with High Distinction from the
            University of Toronto.
          </p>
          <p>
            My work has moved through financial data pipelines, risk dashboards,
            forecasting, biomedical image analysis, and GenAI product concepts. I am
            still early, so I try to make the process visible: what I tried, what I
            measured, where the limits are, and what I would improve next.
          </p>
          <p>
            Outside the core ML lane, I care about interfaces, typography, music, and
            the small emotional details that make technical tools feel less hostile.
          </p>
        </div>
      </section>
      <section className="section">
        <SectionHeader kicker="Toolkit" title="Tools I use when the work asks for them." />
        <div className="tool-cloud">
          {[
            "Python",
            "SQL",
            "PyTorch",
            "TensorFlow",
            "scikit-learn",
            "Spark",
            "Kafka",
            "AWS",
            "GCP Vertex AI",
            "Tableau",
            "R",
            "QuPath",
            "OpenSlide",
            "React",
          ].map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>
    </>
  );
}

function ProjectsPage() {
  const [activeSlug, setActiveSlug] = useState(projectData[0].slug);
  const activeProject = projectData.find((project) => project.slug === activeSlug);

  return (
    <>
      <PageHero
        kicker="Projects"
        title="Not a long shelf. A few artifacts with reasoning inside."
        body="Each project page is written as a case note: motivation, approach, constraints, and what I learned."
      />
      <section className="section project-focus">
        <div className="focus-tabs" role="tablist" aria-label="Project focus selector">
          {projectData.map((project) => (
            <button
              key={project.slug}
              type="button"
              className={project.slug === activeSlug ? "active" : ""}
              onClick={() => setActiveSlug(project.slug)}
            >
              {project.title}
            </button>
          ))}
        </div>
        {activeProject && (
          <article className="focus-card">
            <img src={activeProject.heroImage} alt="" />
            <div>
              <p className="kicker">{activeProject.eyebrow}</p>
              <h2>{activeProject.title}</h2>
              <p>{activeProject.short}</p>
              <Link className="button primary" href={`/projects/${activeProject.slug}`}>
                Open case note <Arrow />
              </Link>
            </div>
          </article>
        )}
      </section>
      <section className="section">
        <div className="project-list">
          {projectData.map((project) => (
            <ProjectPreview project={project} key={project.slug} />
          ))}
        </div>
      </section>
    </>
  );
}

function ProjectDetailPage({ slug }) {
  const project = projectData.find((item) => item.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <>
      <section className={`case-hero accent-${project.accent}`}>
        <div>
          <p className="kicker">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="hero-body">{project.short}</p>
          <div className="case-actions">
            {project.repo && (
              <a className="button ghost" href={project.repo} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {project.live && (
              <a className="button primary" href={project.live} target="_blank" rel="noreferrer">
                Open artifact <Arrow />
              </a>
            )}
          </div>
        </div>
        <img src={project.heroImage} alt="" />
      </section>

      <section className="section case-meta">
        <div>
          <span>Role</span>
          <strong>{project.role}</strong>
        </div>
        <div>
          <span>Period</span>
          <strong>{project.period}</strong>
        </div>
        <div>
          <span>Status</span>
          <strong>{project.status}</strong>
        </div>
      </section>

      <section className="section metric-grid">
        {project.metrics.map(([value, label]) => (
          <article className="metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="section case-layout">
        <CaseText title="Problem" body={project.problem} />
        <CaseText title="What I built" body={project.built} />
        <CaseList title="Technical approach" items={project.approach} />
        <CaseList title="Key decisions" items={project.decisions} />
        <CaseList title="Tradeoffs" items={project.tradeoffs} />
        <CaseText title="What I learned" body={project.learned} />
      </section>

      {project.gallery?.length > 0 && (
        <section className="section">
          <SectionHeader kicker="Artifacts" title="Visual evidence." />
          <div className="gallery-grid">
            {project.gallery.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt="" loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function CaseText({ title, body }) {
  return (
    <article className="case-block">
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

function CaseList({ title, items }) {
  return (
    <article className="case-block">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function ResearchPage() {
  return (
    <>
      <PageHero
        kicker="Research"
        title="Research work, treated as process instead of decoration."
        body="This page collects the academic and biomedical side of my work, with an emphasis on careful framing and reproducibility."
      />
      <section className="section research-feature">
        <ProjectPreview project={projectData[0]} />
        <ProjectPreview project={projectData[1]} />
      </section>
      <section className="section">
        <SectionHeader kicker="Publications" title="Selected writing and papers." />
        <div className="publication-list">
          {researchItems.map((item) => (
            <article className="publication" key={item.title}>
              <div>
                <p className="kicker">{item.meta}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <a href={item.href} target="_blank" rel="noreferrer">
                Open
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ExperiencePage() {
  return (
    <>
      <PageHero
        kicker="Experience"
        title="A practical path through data systems, forecasting, and model-facing tools."
        body="I am still early in my career, so this page keeps the emphasis on responsibility, context, and the kind of problems I have touched."
      />
      <section className="section timeline">
        {experienceItems.map((item) => (
          <article className="timeline-item" key={`${item.org}-${item.time}`}>
            <div>
              <span>{item.time}</span>
              <span>{item.place}</span>
            </div>
            <div>
              <h2>{item.role}</h2>
              <p className="timeline-org">{item.org}</p>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

function CreativePage() {
  return (
    <>
      <PageHero
        kicker="Creative"
        title="A quieter corner for taste, sound, and interface sketches."
        body="This is not a second resume. It is a place to acknowledge the creative habits that shape how I build: listening closely, editing, arranging, and caring about texture."
      />
      <section className="section creative-grid">
        <article>
          <p className="kicker">Music</p>
          <h2>Production as a way of thinking.</h2>
          <p>
            Music teaches structure, pacing, restraint, and the feeling of a small
            detail becoming the whole mood. I want the technical work to have some of
            that same care.
          </p>
        </article>
        <article>
          <p className="kicker">UI</p>
          <h2>Interfaces should lower the temperature.</h2>
          <p>
            I am drawn to tools that make complex work feel calm: clear states,
            readable hierarchy, and interactions that do not ask the user to fight the
            system.
          </p>
        </article>
        <article>
          <p className="kicker">Experiments</p>
          <h2>Small prototypes are allowed to be unfinished.</h2>
          <p>
            Some ideas are valuable because they show a question, not because they
            become a product. I keep a lab page for that kind of work.
          </p>
        </article>
      </section>
    </>
  );
}

function LabPage() {
  return (
    <>
      <PageHero
        kicker="Lab"
        title="A small guide to the work behind the site."
        body="This local interaction uses curated site data, not an external model. It is meant to help visitors find the right story quickly."
      />
      <section className="section">
        <WorkGuide />
      </section>
    </>
  );
}

function WorkGuide({ compact = false }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(guideAnswers[0]);

  const suggestions = compact
    ? ["What is strongest?", "Tell me about pathology ML", "Is TravelMind live?"]
    : [
        "What is strongest?",
        "Tell me about pathology ML",
        "Is TravelMind live?",
        "How does creativity fit?",
        "What should I read first?",
      ];

  function answerQuestion(value) {
    const text = value.toLowerCase();
    const found =
      guideAnswers.find((item) => item.keywords.some((keyword) => text.includes(keyword))) ||
      guideAnswers.find((item) => item.keywords.includes("weak"));
    setActive(found);
    setQuery(value);
  }

  return (
    <div className={`work-guide ${compact ? "compact" : ""}`}>
      <div>
        <p className="kicker">Distinctive feature</p>
        <h2>Ask the portfolio.</h2>
        <p>
          Try a question about my projects, research, creative side, or what to read
          first. The answer is generated from curated local notes.
        </p>
      </div>
      <div className="guide-console">
        <label htmlFor="guide-input">Ask a question</label>
        <div className="guide-input">
          <input
            id="guide-input"
            value={query}
            placeholder="e.g. What is the strongest project?"
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") answerQuestion(query);
            }}
          />
          <button type="button" onClick={() => answerQuestion(query)}>
            Ask
          </button>
        </div>
        <div className="suggestions">
          {suggestions.map((suggestion) => (
            <button key={suggestion} type="button" onClick={() => answerQuestion(suggestion)}>
              {suggestion}
            </button>
          ))}
        </div>
        <article className="guide-answer" aria-live="polite">
          <p className="kicker">{active.title}</p>
          <p>{active.answer}</p>
        </article>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Send the kind of message that starts with a concrete problem."
        body="I am open to data science, ML, research, product-oriented AI, and collaborative projects where careful thinking matters."
      />
      <section className="section contact-grid">
        <a href={profileLinks.email}>
          <span>Email</span>
          <strong>rf2960@columbia.edu</strong>
        </a>
        <a href={profileLinks.github} target="_blank" rel="noreferrer">
          <span>GitHub</span>
          <strong>github.com/rf2960</strong>
        </a>
        <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
          <span>LinkedIn</span>
          <strong>linkedin.com/in/ruochenfeng</strong>
        </a>
      </section>
    </>
  );
}

function NotFoundPage() {
  return (
    <PageHero
      kicker="404"
      title="This page is not here."
      body="The site may have moved the artifact you were looking for."
    >
      <Link className="button primary" href="/">
        Return home
      </Link>
    </PageHero>
  );
}

function App() {
  const route = useRoute();

  useEffect(() => {
    const label =
      route === "/"
        ? "Ruochen Feng - Data Science Portfolio"
        : `Ruochen Feng - ${route.split("/").filter(Boolean).join(" / ")}`;
    document.title = label;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      "Ruochen Feng's portfolio for data science, ML research, GenAI systems, and creative technical work.",
    );
  }, [route]);

  const page = useMemo(() => {
    if (route === "/") return <HomePage />;
    if (route === "/about") return <AboutPage />;
    if (route === "/projects") return <ProjectsPage />;
    if (route.startsWith("/projects/")) {
      return <ProjectDetailPage slug={route.replace("/projects/", "")} />;
    }
    if (route === "/research") return <ResearchPage />;
    if (route === "/experience") return <ExperiencePage />;
    if (route === "/creative") return <CreativePage />;
    if (route === "/lab") return <LabPage />;
    if (route === "/contact") return <ContactPage />;
    return <NotFoundPage />;
  }, [route]);

  return <Shell route={route}>{page}</Shell>;
}

export default App;
