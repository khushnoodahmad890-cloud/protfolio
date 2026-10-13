export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-main">
            <p className="section-kicker"><span>01</span> A little about me</p>
            <h2 className="section-title" id="about-title">
              More than code.<br /><span>A partner in building.</span>
            </h2>
          </div>
          <p className="section-intro">
            I bring ideas to life with a mix of product thinking, careful engineering,
            and a genuine focus on the people using what we build.
          </p>
        </div>

        <div className="about-layout">
          <div className="about-copy">
            <p className="about-lead">
              Hi, I&apos;m <strong>Khushnood Ahmad</strong>—a Full Stack Developer
              who enjoys turning real-world problems into simple, useful software.
            </p>
            <p>
              I work across the full stack, from responsive React interfaces to
              Node.js and Express APIs backed by PostgreSQL. I care about how a
              product feels to use as much as how well it works under the hood.
            </p>
            <p>
              My approach is practical: communicate clearly, keep the code
              maintainable, and make every feature earn its place. I&apos;m always
              learning and looking for better ways to deliver value.
            </p>
            <div className="about-signoff">
              <span className="signoff-rule" aria-hidden="true" />
              <span>Thoughtful work, built to last.</span>
            </div>
          </div>

          <aside className="about-focus-card" aria-label="Development principles">
            <div className="focus-card-heading">
              <span>What I bring to a project</span>
              <span className="focus-card-count">01 — 03</span>
            </div>
            <div className="focus-list">
              <div className="focus-item">
                <span className="focus-number">01</span>
                <div>
                  <h3>Product-minded thinking</h3>
                  <p>Start with the user and the problem—not just the pixels.</p>
                </div>
              </div>
              <div className="focus-item">
                <span className="focus-number">02</span>
                <div>
                  <h3>Reliable engineering</h3>
                  <p>Build clean foundations that are easier to grow and maintain.</p>
                </div>
              </div>
              <div className="focus-item">
                <span className="focus-number">03</span>
                <div>
                  <h3>Clear collaboration</h3>
                  <p>Keep the process transparent, focused, and moving forward.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
