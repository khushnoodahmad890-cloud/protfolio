const projects = [
  {
    title: "🎵 Spotify Clone",
    type: "Full Stack Application",
    description:
      "A full-stack Spotify-inspired music streaming platform with authentication, playlists, search, audio playback, responsive navigation, and PostgreSQL-powered APIs.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Axios",
      "Zustand",
    ],
    features: [
      "User Authentication",
      "Playlist Management",
      "Music Player",
      "Search",
      "REST API",
      "Responsive Design",
    ],
    github:
      "https://github.com/khushnoodahmad890-cloud/spotify-clone-react",
    live: "https://spotify-clone-react-eight.vercel.app/",
  },

  {
    title: "🏠 Airbnb Clone",
    type: "Full Stack Application",
    description:
      "A full-stack Airbnb-inspired property rental platform with property discovery, search and filtering, favorites, bookings, reviews, authentication, protected routes, and responsive design.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
    ],
    features: [
      "Property Listings",
      "Search & Filtering",
      "Favorites",
      "Bookings",
      "Reviews & Ratings",
      "Authentication",
      "Protected Routes",
      "Dark Mode",
      "Responsive Design",
    ],
    github:
      "https://github.com/khushnoodahmad890-cloud/AIR-BNB-CLONE",
    live: "https://air-bnb-clone-vert-nu.vercel.app/",
  },

  {
    title: "🛒 ShopHub",
    type: "Full Stack E-Commerce",
    description:
      "A full-stack e-commerce platform with product browsing, shopping cart, user authentication, order management, protected admin functionality, PostgreSQL, and REST APIs.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Axios",
    ],
    features: [
      "Product Catalog",
      "Shopping Cart",
      "User Authentication",
      "Order Management",
      "Admin Controls",
      "Protected Routes",
      "REST API",
      "PostgreSQL",
      "Responsive Design",
    ],
    github:
      "https://github.com/khushnoodahmad890-cloud/ShopHub",
    live: "https://shop-hub-sand-six.vercel.app/",
  },

  {
    title: "🍽️ Restaurant Website",
    type: "Frontend Application",
    description:
      "A modern responsive restaurant application featuring online ordering, reservations, customer reviews, checkout, contact messaging, toast notifications, and a frontend admin dashboard.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "CSS",
      "Context API",
      "LocalStorage",
      "EmailJS",
    ],
    features: [
      "Online Ordering",
      "Shopping Cart",
      "Reservations",
      "Customer Reviews",
      "Checkout",
      "Contact Form",
      "Admin Dashboard",
      "LocalStorage Data",
      "Responsive Design",
    ],
    github:
      "https://github.com/khushnoodahmad890-cloud/RESTAURANT-WEBSITE",
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
