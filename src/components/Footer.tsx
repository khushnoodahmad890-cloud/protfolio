export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h3>
            Khushnood<span>.dev</span>
          </h3>

          <p>
            Full Stack Developer building modern websites,
            web applications, and business solutions.
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
            href="mailto:khushnoodahmad890@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📧 Email
          </a>

          <a
            href="https://github.com/khushnoodahmad890-cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Khushnood Ashfaq. All rights reserved.</p>
      </div>
    </footer>
  );
}