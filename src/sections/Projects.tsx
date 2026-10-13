import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

type ProjectScreenshot = {
  label: string;
  src: string;
  alt: string;
};

type ProjectGroup = "Full-stack" | "Websites";
type ProjectFilter = "All projects" | ProjectGroup;

type Project = {
  number: string;
  monogram: string;
  tone: "mint" | "violet" | "amber" | "blue" | "rose";
  title: string;
  category: string;
  group: ProjectGroup;
  description: string;
  stack: string[];
  highlights: string[];
  github?: string;
  live?: string;
  screenshots?: ProjectScreenshot[];
};

const projects: Project[] = [
  {
    number: "01",
    monogram: "SP",
    tone: "mint",
    title: "Spotify Clone",
    category: "Full-stack · Music platform",
    group: "Full-stack",
    description: "A Spotify-inspired listening experience with account access, playlists, search, and music playback.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    highlights: ["Playlist management", "Search & playback", "REST API"],
    github: "https://github.com/khushnoodahmad890-cloud/spotify-clone-react",
    screenshots: [
      { label: "Now playing", src: "/images/projects/spotify-now-playing-user.webp", alt: "Spotify Clone now-playing screen with a green audio waveform, album art, track details, and playback controls." },
      { label: "Home dashboard", src: "/images/projects/spotify-home.webp", alt: "Spotify Clone home dashboard with a colorful welcome banner and quick-access tiles." },
      { label: "Player dashboard", src: "/images/projects/spotify-player.webp", alt: "Spotify Clone music player dashboard with album art, waveform, queue, and playback controls." },
      { label: "Billing", src: "/images/projects/spotify-billing.webp", alt: "Spotify Clone billing page showing the free plan and payment information." },
      { label: "Song manager", src: "/images/projects/spotify-admin.webp", alt: "Spotify Clone admin song manager with catalog information and edit controls." },
    ],
  },
  {
    number: "02",
    monogram: "AB",
    tone: "violet",
    title: "Airbnb Clone",
    category: "Full-stack · Rentals",
    group: "Full-stack",
    description: "A property-rental platform for discovering stays, saving favorites, booking, and sharing reviews.",
    stack: ["React", "TypeScript", "React Router", "Node.js", "PostgreSQL"],
    highlights: ["Property search", "Bookings & reviews", "Protected routes"],
    github: "https://github.com/khushnoodahmad890-cloud/AIR-BNB-CLONE",
    screenshots: [
      { label: "Stay discovery", src: "/images/projects/airbnb home.png", alt: "Airbnb Clone desktop discovery page with a stay-search panel over the hero and featured properties below." },
      { label: "Property catalog", src: "/images/projects/airbnb pricing.png", alt: "Airbnb Clone property catalog with featured stays, filters, and listing cards." },
      { label: "Mobile browsing", src: "/images/projects/airbnb-listing.png", alt: "Airbnb Clone mobile layout showing the stay-search hero and property browsing interface." },
      { label: "Original stay discovery", src: "/images/projects/airbnb last.png", alt: "Airbnb Clone stay-discovery page with a property search hero and featured stays." },
      { label: "Property details · light", src: "/images/projects/air bnb reviow.png", alt: "Airbnb Clone property detail screen with a photo gallery and reservation panel in light mode." },
     
    ],
  },
  {
    number: "03",
    monogram: "SH",
    tone: "amber",
    title: "ShopHub",
    category: "Full-stack · E-commerce",
    group: "Full-stack",
    description: "An online store experience with product discovery, shopping cart, order management, and admin tools.",
    stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    highlights: ["Product catalog", "Cart & orders", "Admin controls"],
    github: "https://github.com/khushnoodahmad890-cloud/ShopHub",
    screenshots: [
      { label: "Storefront", src: "/images/projects/shophub-home.webp", alt: "ShopHub storefront hero with its product-focused headline and shopping calls to action." },
      { label: "Product catalog", src: "/images/projects/shophub-catalog.webp", alt: "ShopHub product catalog with category filters, search, and product cards." },
      { label: "Product details", src: "/images/projects/shophub-product.webp", alt: "ShopHub product detail screen for wireless headphones with price and add-to-cart action." },
      { label: "Orders", src: "/images/projects/shophub-orders.webp", alt: "ShopHub order history with order totals, dates, and status labels." },
      { label: "Create account", src: "/images/projects/login.png", alt: "ShopHub registration form with account fields and a create-account action." },
    ],
  },
  {
    number: "04",
    monogram: "RW",
    tone: "blue",
    title: "Restaurant Website",
    category: "Frontend · Hospitality",
    group: "Websites",
    description: "A responsive restaurant experience for browsing the menu, ordering, booking a table, and getting in touch.",
    stack: ["React", "TypeScript", "React Router", "CSS", "EmailJS"],
    highlights: ["Online ordering", "Reservations", "Admin dashboard"],
    live: "https://restaurant-website-react-one.vercel.app/",
  },
  {
    number: "05",
    monogram: "LF",
    tone: "rose",
    title: "Law Firm Website",
    category: "Business · Legal",
    group: "Websites",
    description: "A polished online presence for a legal practice, designed to make key information and client enquiries easy to find.",
    stack: ["Responsive design", "Business website"],
    highlights: ["Professional presence", "Clear information", "Client enquiries"],
    live: "https://law-firm-7n033ytsr-khushnoodashfaq13-8160s-projects.vercel.app/",
  },
];

const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: "All projects", label: "All projects" },
  { id: "Full-stack", label: "Full-stack" },
  { id: "Websites", label: "Websites" },
];

type ActiveGallery = { project: Project; index: number };
type ProjectCardProps = { project: Project; onOpenGallery: (project: Project, index: number) => void };

function ProjectCard({ project, onOpenGallery }: ProjectCardProps) {
  const screenshots = project.screenshots ?? [];
  const cover = screenshots[0];
  const detail = screenshots[1];

  return (
    <article className={`project-card project-card--${project.tone}${cover ? " project-card--visual" : ""}`}>
      {cover && (
        <div className="project-visual">
          <button
            className="project-window project-window--main"
            type="button"
            onClick={() => onOpenGallery(project, 0)}
            aria-label={`Open ${project.title} screenshots. Current screen: ${cover.label}.`}
          >
            <span className="project-window-bar" aria-hidden="true">
              <span className="window-controls"><i /><i /><i /></span>
              <span className="window-url">{project.title.toLowerCase()} / preview</span>
              <span className="window-secure">●</span>
            </span>
            <span className="project-window-screen">
              <img src={cover.src} alt={cover.alt} width="1440" height="758" loading="lazy" decoding="async" />
            </span>
          </button>

          {detail && (
            <button
              className="project-window project-window--detail"
              type="button"
              onClick={() => onOpenGallery(project, 1)}
              aria-label={`Open ${project.title} screenshot: ${detail.label}.`}
            >
              <span className="project-window-bar" aria-hidden="true">
                <span className="window-controls"><i /><i /><i /></span>
                <span className="window-url">{detail.label.toLowerCase()}</span>
              </span>
              <span className="project-window-screen">
                <img src={detail.src} alt={detail.alt} width="1440" height="758" loading="lazy" decoding="async" />
              </span>
            </button>
          )}

          <button className="project-screen-hint" type="button" onClick={() => onOpenGallery(project, 0)}>
            <span className="screen-hint-dot" />
            {screenshots.length} screens <span aria-hidden="true">↗</span>
          </button>
        </div>
      )}

      <div className="project-card-head">
        <span className={`project-monogram project-monogram--${project.tone}`} aria-hidden="true">{project.monogram}</span>
        <div className="project-card-labels">
          <span className="project-category">{project.category}</span>
          <span className="project-number">PROJECT / {project.number}</span>
        </div>
      </div>

      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-stack" aria-label="Technologies">
        {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
      </div>

      <ul className="project-highlights">
        {project.highlights.map((highlight) => <li key={highlight}><span aria-hidden="true">+</span>{highlight}</li>)}
      </ul>

      <div className="project-actions">
        {project.live && (
          <a className="project-action project-action--primary" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live website in a new tab`}>
            Live website <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
        {project.github && (
          <a className="project-action project-action--secondary" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub in a new tab`}>
            Source code <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeGallery, setActiveGallery] = useState<ActiveGallery | null>(null);
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("All projects");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const filteredProjects = projects.filter((project) => projectFilter === "All projects" || project.group === projectFilter);
  const featuredProjects = filteredProjects.filter((project) => project.screenshots?.length);
  const additionalProjects = filteredProjects.filter((project) => !project.screenshots?.length);
  const galleryScreens = activeGallery?.project.screenshots ?? [];
  const currentScreenshot = activeGallery ? galleryScreens[activeGallery.index] : undefined;

  const changeScreenshot = (direction: number) => {
    setActiveGallery((current) => {
      if (!current) return current;
      const count = current.project.screenshots?.length ?? 1;
      return { ...current, index: (current.index + direction + count) % count };
    });
  };

  useEffect(() => {
    if (!activeGallery) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveGallery(null);
      if (event.key === "ArrowRight") changeScreenshot(1);
      if (event.key === "ArrowLeft") changeScreenshot(-1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [Boolean(activeGallery)]);

  const openGallery = (project: Project, index: number) => setActiveGallery({ project, index });

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-main">
            <p className="section-kicker"><span>03</span> Selected work</p>
            <h2 className="section-title" id="projects-title">A few things I&apos;ve <span>built.</span></h2>
          </div>
          <p className="section-intro">
            Full-stack platforms and client-ready websites, shown with real
            screens from the products—not stock mockups.
          </p>
        </div>

        <div className="project-filter-bar">
          <span className="project-filter-label">Browse by</span>
          <div className="project-filters" role="group" aria-label="Filter projects">
            {projectFilters.map(({ id, label }) => {
              const count = id === "All projects" ? projects.length : projects.filter((project) => project.group === id).length;
              return (
                <button
                  className={`project-filter${projectFilter === id ? " is-active" : ""}`}
                  type="button"
                  key={id}
                  onClick={() => setProjectFilter(id)}
                  aria-pressed={projectFilter === id}
                >
                  {label}<span>{count.toString().padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>
          <span className="project-result-count">{filteredProjects.length} projects</span>
        </div>

        {featuredProjects.length > 0 && (
          <div className="project-grid project-grid--featured">
            {featuredProjects.map((project) => <ProjectCard key={project.title} project={project} onOpenGallery={openGallery} />)}
          </div>
        )}

        {additionalProjects.length > 0 && (
          <div className={`project-grid project-grid--additional${featuredProjects.length === 0 ? " project-grid--solo" : ""}`} aria-label="More projects">
            {featuredProjects.length > 0 && <p className="project-additional-label">More selected work</p>}
            {additionalProjects.map((project) => <ProjectCard key={project.title} project={project} onOpenGallery={openGallery} />)}
          </div>
        )}
      </div>

      {activeGallery && currentScreenshot && (
        <div className="screen-viewer" role="dialog" aria-modal="true" aria-labelledby="screen-viewer-title">
          <button type="button" className="screen-viewer-backdrop" onClick={() => setActiveGallery(null)} aria-label="Close screenshot gallery" tabIndex={-1} />
          <div className="screen-viewer-panel">
            <header className="screen-viewer-header">
              <div>
                <p className="screen-viewer-eyebrow">Project screens</p>
                <h2 id="screen-viewer-title">{activeGallery.project.title}</h2>
              </div>
              <button ref={closeButtonRef} type="button" className="screen-viewer-close" onClick={() => setActiveGallery(null)} aria-label="Close screenshot gallery">
                <X size={20} aria-hidden="true" />
              </button>
            </header>

            <div className="screen-viewer-stage">
              <button type="button" className="screen-viewer-nav" onClick={() => changeScreenshot(-1)} aria-label="Previous screenshot"><ChevronLeft size={23} aria-hidden="true" /></button>
              <figure className="screen-viewer-image">
                <img src={currentScreenshot.src} alt={currentScreenshot.alt} width="1440" height="758" />
              </figure>
              <button type="button" className="screen-viewer-nav" onClick={() => changeScreenshot(1)} aria-label="Next screenshot"><ChevronRight size={23} aria-hidden="true" /></button>
            </div>

            <footer className="screen-viewer-footer">
              <div className="screen-viewer-caption">
                <strong>{currentScreenshot.label}</strong>
                <span>{String(activeGallery.index + 1).padStart(2, "0")} / {galleryScreens.length}</span>
              </div>
              <div className="screen-viewer-thumbnails" aria-label="Choose a screenshot">
                {galleryScreens.map((screenshot, index) => (
                  <button
                    type="button"
                    key={screenshot.src}
                    className={`screen-viewer-thumb${index === activeGallery.index ? " is-active" : ""}`}
                    onClick={() => setActiveGallery((current) => current ? { ...current, index } : current)}
                    aria-label={`Show ${screenshot.label}`}
                    aria-current={index === activeGallery.index ? "true" : undefined}
                  >
                    <img src={screenshot.src} alt="" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
}
