export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-container">
        {/* Logo */}
        <a href="#" className="logo">
          Khushnood<span>.dev</span>
        </a>

        {/* Navigation */}
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* CTA */}
        <a href="#contact" className="nav-button">
          Hire Me
        </a>
      </nav>
    </header>
  );
}