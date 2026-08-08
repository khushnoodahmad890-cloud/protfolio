import { useState } from "react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("khushnoodahmad890@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

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
          <button
            onClick={copyEmail}
            className="footer-copy-btn"
          >
            {copied ? "✅ Copied!" : "📧 Copy Email"}
          </button>

          <a
            href="https://github.com/khushnoodahmad890-cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mkhushnoodahmad/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Khushnood Ahmad. All rights reserved.</p>
      </div>
    </footer>
  );
}