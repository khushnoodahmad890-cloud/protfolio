export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-header">
        <p className="section-tag">About Me</p>

        <h2>
          Turning Ideas Into
          <span> Modern Web Applications</span>
        </h2>
      </div>

      <div className="about-container">
        <div className="about-text">
          <p>
            Hi, I'm <strong>Khushnood Ashfaq</strong>, a Full Stack Developer
            passionate about building fast, responsive, and scalable web
            applications that solve real-world problems.
          </p>

          <p>
            I work with React, TypeScript, Node.js, Express, PostgreSQL, and
            modern web technologies to create user-friendly websites, business
            applications, REST APIs, and database-driven solutions.
          </p>

          <p>
            My focus is on writing clean, maintainable code while delivering
            applications that provide real value to businesses and users. I'm
            always learning new technologies and improving my skills to build
            better software.
          </p>
        </div>

        <div className="about-cards">
          <div className="highlight-card">
            <h3>💻 Full Stack Development</h3>
            <p>
              Building complete web applications from frontend to backend.
            </p>
          </div>

          <div className="highlight-card">
            <h3>⚡ Modern Technologies</h3>
            <p>
              React, TypeScript, Node.js, Express, PostgreSQL, and Tailwind CSS.
            </p>
          </div>

          <div className="highlight-card">
            <h3>🚀 Business Solutions</h3>
            <p>
              Creating reliable, scalable software that helps businesses grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}