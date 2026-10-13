import { BarChart3, Code2, Database, Server, Wrench } from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend development",
    description: "Fast, accessible interfaces with a sharp eye for responsive detail.",
    icon: Code2,
    technologies: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend development",
    description: "Scalable APIs, authentication flows, and dependable server-side logic.",
    icon: Server,
    technologies: ["Node.js", "Express.js", "REST APIs", "JWT", "CRUD operations"],
  },
  {
    number: "03",
    title: "Data & databases",
    description: "Structured data models and clear, efficient ways to work with information.",
    icon: Database,
    technologies: ["PostgreSQL", "SQL", "Database design", "Query optimization"],
  },
  {
    number: "04",
    title: "Analytics & insights",
    description: "Turn raw data into clean, useful reporting and practical insights.",
    icon: BarChart3,
    technologies: ["SQL", "Tableau", "Data cleaning", "Data visualization"],
  },
  {
    number: "05",
    title: "Tools & delivery",
    description: "A modern workflow from local development through deployment and testing.",
    icon: Wrench,
    technologies: ["Git", "GitHub", "VS Code", "Vercel", "Render", "Postman"],
  },
];

export default function Skills() {
  return (
    <section className="section section-muted" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-main">
            <p className="section-kicker"><span>02</span> The toolkit</p>
            <h2 className="section-title" id="skills-title">
              The right tools<br /><span>for the right job.</span>
            </h2>
          </div>
          <p className="section-intro">
            I choose dependable technologies that fit the problem and work well
            together—from the first component to the final deployment.
          </p>
        </div>

        <div className="skill-grid">
          {skillGroups.map(({ number, title, description, icon: Icon, technologies }) => (
            <article className="skill-card" key={title}>
              <div className="skill-card-top">
                <span className="skill-icon-wrap"><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
                <span className="skill-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="skill-tags">
                {technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
