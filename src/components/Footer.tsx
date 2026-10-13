import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("khushnoodahmad890@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = "mailto:khushnoodahmad890@gmail.com";
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <a className="brand footer-brand" href="#home" aria-label="Khushnood Ahmad, back to top">
            <span className="brand-mark" aria-hidden="true">K</span>
            <span className="brand-name">Khushnood<span className="brand-accent">.dev</span></span>
          </a>
          <p>Thoughtful websites and full-stack applications, built for real people and real work.</p>
        </div>

        <div className="footer-nav-block">
          <span className="footer-label">Explore</span>
          <a href="#about">About</a>
          <a href="#skills">Expertise</a>
          <a href="#projects">Selected work</a>
          <a href="#process">My process</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social-block">
          <span className="footer-label">Find me online</span>
          <a href="https://github.com/khushnoodahmad890-cloud" target="_blank" rel="noopener noreferrer">
            <span className="social-mark" aria-hidden="true">GH</span> GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/mkhushnoodahmad/" target="_blank" rel="noopener noreferrer">
            <span className="social-mark social-mark--linkedin" aria-hidden="true">in</span> LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <button className="footer-copy-btn" type="button" onClick={copyEmail}>
            {copied ? "Email copied" : "Copy email"}
          </button>
          <a href="/resume.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Khushnood Ahmad. All rights reserved.</p>
        <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
