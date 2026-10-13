import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="hero-kicker">Hello, I&apos;m <span>Khushnood Ahmad</span></p>

          <p className="availability-pill">
            <span className="availability-dot" aria-hidden="true" />
            Available for freelance &amp; remote opportunities
          </p>

          <h1 id="hero-title">
            Digital products,<br /><span className="hero-accent">built with purpose.</span>
          </h1>

          <p className="hero-description">
            I&apos;m a Full Stack Developer creating responsive websites,
            useful web applications, and dependable APIs—from a polished
            first impression to the logic working behind it.
          </p>

          <p className="hero-techline">React <span>·</span> TypeScript <span>·</span> Node.js <span>·</span> PostgreSQL</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#contact">
              Let&apos;s work together
            </a>
            <a className="button button-tertiary" href="/resume.pdf" download>
              Download CV <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-proof" aria-label="At a glance">
            <div className="proof-item">
              <strong>10<span>+</span></strong>
              <span>projects built</span>
            </div>
            <span className="proof-divider" aria-hidden="true" />
            <div className="proof-item proof-item--wide">
              <strong>End to end</strong>
              <span>from interface to API</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-halo" />
          <div className="visual-orbit visual-orbit--outer" />
          <div className="visual-orbit visual-orbit--inner" />

          <div className="hero-console">
            <div className="console-header">
              <div className="console-window-dots"><span /><span /><span /></div>
              <span className="console-file">khushnood.dev</span>
              <span className="console-live"><i /> live</span>
            </div>

            <div className="console-code">
              <p><span className="line-number">01</span><code><b className="code-keyword">const</b> <b className="code-variable">approach</b> = {'{'}</code></p>
              <p><span className="line-number">02</span><code>&nbsp;&nbsp;design: <b className="code-string">&quot;thoughtful&quot;</b>,</code></p>
              <p><span className="line-number">03</span><code>&nbsp;&nbsp;build: <b className="code-string">&quot;reliable&quot;</b>,</code></p>
              <p><span className="line-number">04</span><code>&nbsp;&nbsp;focus: <b className="code-string">&quot;people first&quot;</b></code></p>
              <p><span className="line-number">05</span><code>{'}'}</code></p>
              <p><span className="line-number">06</span><code><b className="code-keyword">ship</b>(approach);</code></p>
            </div>

            <div className="console-footer">
              <span><i className="console-status-dot" /> Ready to build</span>
              <span>React · Node.js</span>
            </div>
          </div>

          <div className="visual-chip visual-chip--top">
            <span className="chip-spark" aria-hidden="true">✳</span>
            Built with purpose
          </div>
          <div className="visual-chip visual-chip--bottom">
            <span className="chip-dot" aria-hidden="true" /> Clean code. Clear outcomes.
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <span /> Scroll to explore
      </a>
    </section>
  );
}
