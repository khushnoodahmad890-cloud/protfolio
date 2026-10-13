import { useState, type ChangeEvent, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Mail, Send } from "lucide-react";

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = {
  kind: "success" | "error";
  message: string;
};

const emptyForm: FormFields = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormFields>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
    setStatus(null);
  };

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        kind: "error",
        message: "The contact form is not configured in this preview. Please email me directly instead.",
      });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(serviceId, templateId, form, publicKey);
      setForm(emptyForm);
      setStatus({ kind: "success", message: "Thanks for reaching out. I’ll get back to you soon." });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus({
        kind: "error",
        message: "Sorry, your message could not be sent right now. Please email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-main">
            <p className="section-kicker"><span>06</span> Start a conversation</p>
            <h2 className="section-title" id="contact-title">
              Let&apos;s build something<br /><span>worth using.</span>
            </h2>
          </div>
          <p className="section-intro">
            Have a project in mind, a question, or just want to say hello? Tell
            me a little about it and I&apos;ll be in touch.
          </p>
        </div>

        <div className="contact-grid">
          <aside className="contact-card">
            <div className="contact-availability"><span className="availability-dot" /> Open to new conversations</div>
            <h3>Tell me what you&apos;re working on.</h3>
            <p className="contact-card-copy">
              Share the idea, the challenge, or the thing you&apos;d like to make
              better. We can take it from there.
            </p>

            <a className="contact-email" href="mailto:khushnoodahmad890@gmail.com">
              <span className="contact-email-icon"><Mail size={18} aria-hidden="true" /></span>
              <span>
                <small>Email me directly</small>
                <strong>khushnoodahmad890@gmail.com</strong>
              </span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>

            <div className="contact-socials" aria-label="Social links">
              <a href="https://github.com/khushnoodahmad890-cloud" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <span className="social-mark" aria-hidden="true">GH</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/mkhushnoodahmad/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <span className="social-mark social-mark--linkedin" aria-hidden="true">in</span> LinkedIn
              </a>
            </div>
          </aside>

          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-heading">
              <div>
                <span className="form-eyebrow">Project enquiry</span>
                <h3>Send a message</h3>
              </div>
              <span className="form-step">01 / 01</span>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject">What can I help with?</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Website, application, or something else..."
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">A few details</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me a little about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="button button-primary send-button" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
              <Send size={16} aria-hidden="true" />
            </button>

            {status && (
              <p className={`form-status form-status--${status.kind}`} role="status" aria-live="polite">
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
