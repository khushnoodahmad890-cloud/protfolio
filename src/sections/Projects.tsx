const projects = [
  {
    title: "🎵 Spotify Clone",
    type: "Full Stack Application",
    description:
      "A full-stack music streaming platform with secure authentication, playlist management, audio playback, and PostgreSQL-powered data storage.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    features: [
      "User Authentication",
      "Playlist Management",
      "Music Player",
      "REST API",
      "Responsive Design",
    ],
    github: "https://github.com/khushnoodahmad890-cloud/spotify-clone-react",
    live: "https://spotify-clone-react-eight.vercel.app/",
  },

  {
    title: "🏠 Airbnb Clone",
    type: "Frontend Application",
    description:
      "A responsive property listing platform with search, category filtering, property details, and a modern user interface.",
    tech: [
      "React",
      "JavaScript",
      "React Router",
      "CSS",
    ],
    features: [
      "Property Listings",
      "Search & Filter",
      "Responsive UI",
      "Routing",
    ],
    github: "https://github.com/khushnoodahmad890-cloud/AIR-BNB-CLONE",
    live: "https://air-bnb-clone-vert-nu.vercel.app/",
  },

  {
    title: "🛒 ShopHub",
    type: "Full Stack E-Commerce",
    description:
      "An e-commerce application with product browsing, shopping cart, authentication, and REST API integration.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
    ],
    features: [
      "Authentication",
      "Shopping Cart",
      "Product Management",
      "REST API",
    ],
    github: "https://github.com/khushnoodahmad890-cloud/ShopHub",
    live: "https://shop-hub-sand-six.vercel.app/",
  },

  {
    title: "🍽️ Restaurant Website",
    type: "Frontend Application",
    description:
      "A modern and responsive restaurant website featuring an elegant user interface, interactive menu sections, smooth navigation, and a mobile-friendly design.",
    tech: [
      "React",
      "TypeScript",
      "CSS",
      "Responsive Design",
    ],
    features: [
      "Modern UI",
      "Responsive Layout",
      "Interactive Navigation",
      "Menu Showcase",
    ],
    github: "https://github.com/khushnoodahmad890-cloud/RESTAURANT-WEBSITE",
    live: "https://restaurant-website-react-one.vercel.app/",
  },
];
export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-header">
        <p className="section-tag">My Work</p>

        <h2>
          Featured
          <span> Projects</span>
        </h2>

        <p className="section-description">
          Real-world applications built using modern technologies and focused
          on solving practical problems.
        </p>
      </div>

      <div className="cards">
        {projects.map((project) => (
          <article className="card project-card" key={project.title}>
            <p className="project-type">{project.type}</p>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technology-list">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <ul className="project-features">
              {project.features.map((feature) => (
                <li key={feature}>✔ {feature}</li>
              ))}
            </ul>

            <div className="project-links">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
