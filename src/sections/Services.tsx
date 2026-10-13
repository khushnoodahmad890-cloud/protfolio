import { BarChart3, Code2, Globe, ShoppingCart, Wrench } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Business websites",
    description: "Responsive, professional websites that make your business easy to trust and easy to reach.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Full-stack applications",
    description: "Custom web applications built around your workflow, users, and goals.",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "E-commerce solutions",
    description: "Useful online stores with product catalogs, carts, accounts, and order flows.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Dashboards & analytics",
    description: "Clear, interactive data views that help teams understand what is happening.",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Ongoing improvements",
    description: "Maintenance, bug fixes, performance improvements, and thoughtful new features.",
  },
];

export default function Services() {
  return (
    <section className="section section-muted" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-main">
            <p className="section-kicker"><span>05</span> How I can help</p>
            <h2 className="section-title" id="services-title">
              Good ideas deserve<br /><span>good execution.</span>
            </h2>
          </div>
          <p className="section-intro">
            Whether you&apos;re starting from scratch or improving an existing
            product, I can help turn the next step into a working solution.
          </p>
        </div>

        <div className="service-grid">
          {services.map(({ number, icon: Icon, title, description }) => (
            <article className="service-card" key={title}>
              <div className="service-card-top">
                <span className="service-icon"><Icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
                <span className="service-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a className="service-link" href="#contact" aria-label={`Discuss ${title.toLowerCase()}`}>
                Discuss a project <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
