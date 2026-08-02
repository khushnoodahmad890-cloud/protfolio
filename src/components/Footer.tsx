export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>
            Khushnood<span>.dev</span>
          </h3>

          <p>
            Full Stack Developer building modern websites, web applications,
            and business solutions with React, Node.js, and PostgreSQL.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#projects">Projects</a>

          <a href="#services">Services</a>

          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:your-email@example.com">
            Email
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Khushnood Ashfaq. All rights reserved.</p>

        <p>Built with React • TypeScript • Tailwind CSS</p>
      </div>
    </footer>
  );
}