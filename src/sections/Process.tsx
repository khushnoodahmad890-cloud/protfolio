const steps = [
  {
    number: "01",
    title: "Get clear on the goal",
    description: "We start with the people, problem, and outcome the project needs to serve.",
  },
  {
    number: "02",
    title: "Shape the experience",
    description: "I map the key pages and interactions before choosing the simplest solid approach.",
  },
  {
    number: "03",
    title: "Build and refine",
    description: "The interface and application logic come together in responsive, testable steps.",
  },
  {
    number: "04",
    title: "Launch with confidence",
    description: "We check the details, prepare deployment, and leave room for what comes next.",
  },
];

export default function Process() {
  return (
    <section className="section process-section section-muted" id="process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-main">
            <p className="section-kicker"><span>04</span> How I work</p>
            <h2 className="section-title" id="process-title">
              A clear path from<br /><span>idea to launch.</span>
            </h2>
          </div>
          <p className="section-intro">
            A collaborative, practical process keeps the work focused and makes
            decisions easier to follow at every step.
          </p>
        </div>

        <ol className="process-track">
          {steps.map((step) => (
            <li className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <span className="process-node" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
