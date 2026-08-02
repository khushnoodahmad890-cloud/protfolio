export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-tag">
          Full Stack Developer • React • Node.js • PostgreSQL
        </p>

        <h1>
          Building Fast, Modern Web Applications
          <span> That Drive Business Growth</span>
        </h1>

        <p className="hero-description">
          I build responsive websites, scalable web applications, REST APIs,
          and data-driven dashboards using React, Node.js, Express,
          PostgreSQL, and modern development tools.
        </p>

        <p className="hero-status">
          🟢 Available for Freelance & Remote Opportunities
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Work
          </a>

          <a href="#contact" className="secondary-btn">
            Let's Work Together
          </a>

          <a
            href="/resume.pdf"
            className="secondary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>10+</h3>
            <p>Projects Built</p>
          </div>

          <div>
            <h3>React • Node.js</h3>
            <p>Full Stack Development</p>
          </div>

          <div>
            <h3>PostgreSQL</h3>
            <p>Database Design</p>
          </div>
        </div>
      </div>

      <div className="hero-glow"></div>
    </section>
  );
}