import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          Khushnood<span>.dev</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <a
            href="#contact"
            className="nav-button"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}