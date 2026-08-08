import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      setStatus("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

      setStatus("✅ Thanks! Your message has been sent. I'll get back to you soon.");

setTimeout(() => {
  setStatus("");
}, 5000);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
  console.error("EmailJS send failed:", error?.text || error);

  setStatus(error.text || "Failed to send message.");
}
  };

  return (
    <section className="section contact" id="contact">
      <div className="section-header">
        <p className="section-tag">Contact</p>

        <h2>
          Let's Build Something
          <span> Great Together</span>
        </h2>

        <p className="section-description">
          Have a project in mind or just want to say hello? Fill out the form
          below and I'll get back to you as soon as possible.
        </p>
      </div>

      <form className="contact-form card" onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="subject"
          placeholder="Website Development"
          value={form.subject}
          onChange={handleChange}
        />

        <textarea
          name="message"
          rows={6}
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={handleChange}
        />

       <button
  type="submit"
  className="primary-btn send-btn"
  disabled={loading}
>
  {loading ? "⏳ Sending..." : "📨 Send Message"}
</button>

       {status && (
  <p
    className={`form-status ${
      status.startsWith("✅") ? "success" : "error"
    }`}
  >
    {status}
  </p>
)}
      </form>
    </section>
  );
}