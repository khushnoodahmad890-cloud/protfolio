export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-header">
        <p className="section-tag">Contact</p>

        <h2>
          Let's Build Something
          <span> Great Together</span>
        </h2>

        <p className="section-description">
          Whether you need a business website, a full-stack web application,
          or want to discuss a project, I'd love to hear from you.
        </p>
      </div>

      <div className="contact-card card">
        <div className="contact-item">
          <span>📧</span>

          <div>
            <h3>Email</h3>

            <a href="mailto:your-email@example.com">
              your-email@example.com
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span>💻</span>

          <div>
            <h3>GitHub</h3>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yourusername
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span>🔗</span>

          <div>
            <h3>LinkedIn</h3>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/yourusername
            </a>
          </div>
        </div>

        <a
          href="mailto:your-email@example.com"
          className="primary-btn"
        >
          Send Message
        </a>
      </div>
    </section>
  );
}