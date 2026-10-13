import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { href: "#home", label: "Overview", number: "00" },
  { href: "#about", label: "About me", number: "01" },
  { href: "#skills", label: "Expertise", number: "02" },
  { href: "#projects", label: "Selected work", number: "03" },
  { href: "#process", label: "My process", number: "04" },
  { href: "#services", label: "Services", number: "05" },
  { href: "#contact", label: "Contact", number: "06" },
  { href: "/resume.pdf", label: "Download CV", number: "CV", download: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="sidebar-top">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Khushnood Ahmad, home">
            <span className="brand-mark" aria-hidden="true">K</span>
            <span className="brand-name">Khushnood<span className="brand-accent">.dev</span></span>
          </a>
          <p className="sidebar-role">Full Stack Developer</p>
          <span className="sidebar-rule" aria-hidden="true" />
        </div>

        <button
          className="menu-btn"
          type="button"
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="site-navigation"
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        <nav
          className={`nav-links${open ? " is-open" : ""}`}
          id="site-navigation"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a
              className={`nav-link${item.download ? " nav-link--resume" : ""}`}
              href={item.href}
              onClick={closeMenu}
              key={item.href}
              download={item.download || undefined}
            >
              <span className="nav-item-number">{item.number}</span>
              <span>{item.label}</span>
              {item.download && <span className="nav-item-arrow" aria-hidden="true">↓</span>}
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-status">
            <span className="availability-dot" aria-hidden="true" />
            <span>Available for select freelance work</span>
          </div>
          <p className="sidebar-note">Thoughtful products. Reliable code. Clear communication.</p>
          <div className="sidebar-socials" aria-label="Social profiles">
            <a href="https://github.com/khushnoodahmad890-cloud" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">GH</a>
            <a href="https://www.linkedin.com/in/mkhushnoodahmad/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">in</a>
            <a href="mailto:khushnoodahmad890@gmail.com" aria-label="Email Khushnood">@</a>
          </div>
          <a className="sidebar-contact" href="#contact" onClick={closeMenu}>Start a project <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </header>
  );
}
