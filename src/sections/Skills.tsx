const skills = [
  {
    title: "Frontend Development",
    icon: "💻",
    description:
      "Building fast, responsive, and interactive user interfaces with modern frontend technologies.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    description:
      "Developing scalable REST APIs, authentication systems, and server-side applications.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "CRUD Operations",
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    description:
      "Designing and managing relational databases for reliable and scalable applications.",
    technologies: [
      "PostgreSQL",
      "SQL",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    title: "Data Analytics",
    icon: "📊",
    description:
      "Cleaning, analyzing, and visualizing data to uncover meaningful insights.",
    technologies: [
      "SQL",
      "Tableau",
      "Data Cleaning",
      "Data Visualization",
    ],
  },
  {
    title: "Tools & Deployment",
    icon: "🛠️",
    description:
      "Using modern development tools for version control, deployment, and collaboration.",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "Render",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-header">
        <p className="section-tag">My Skills</p>

        <h2>
          Technologies I Use To
          <span> Build Solutions</span>
        </h2>
      </div>

      <div className="cards">
        {skills.map((skill) => (
          <div className="card skill-card" key={skill.title}>
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.title}</h3>

            <p>{skill.description}</p>

            <div className="technology-list">
              {skill.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}