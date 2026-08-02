const services = [
  {
    icon: "🌐",
    title: "Business Websites",
    description:
      "Professional, responsive websites designed to help businesses establish a strong online presence and attract more customers.",
  },

  {
    icon: "⚡",
    title: "Full Stack Web Applications",
    description:
      "Custom web applications built with React, Node.js, Express, and PostgreSQL to solve real business problems.",
  },

  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    description:
      "Modern online stores with secure authentication, shopping carts, product management, and responsive design.",
  },

  {
    icon: "📊",
    title: "Data Analytics & Dashboards",
    description:
      "Interactive dashboards and data visualizations that turn business data into actionable insights.",
  },

  {
    icon: "🔧",
    title: "Website Maintenance",
    description:
      "Ongoing support, bug fixes, performance improvements, and feature updates to keep your website running smoothly.",
  },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-header">
        <p className="section-tag">Services</p>

        <h2>
          How I Can Help
          <span> Your Business</span>
        </h2>

        <p className="section-description">
          I build modern digital solutions that help businesses grow, improve
          efficiency, and create better experiences for their customers.
        </p>
      </div>

      <div className="cards">
        {services.map((service) => (
          <div className="card service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}