const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="arrow-icon">
    <path d="M3.5 12.5 12 4m0 0H5m7 0v7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const glassEffect = { backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)" }

const experience = [
  {
    number: "01",
    role: "Technology Program Analyst",
    company: "Wells Fargo",
    discipline: "Software Engineering",
    description: "Working at the intersection of software engineering and technology program delivery.",
    status: "CURRENT ROLE",
  },
]

export default function Home() {
  return (
    <main id="home">
      <header className="topbar page-shell glass-panel" style={glassEffect}>
        <a className="wordmark" href="#home" aria-label="Sahil Raj, home">SR<span>.</span></a>
        <nav aria-label="Main navigation" className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="#contact"><span className="status-dot" /> Available to connect</a>
      </header>

      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> SOFTWARE ENGINEERING · PROGRAM DELIVERY</p>
          <h1>Sahil Raj<span className="hero-period">.</span></h1>
          <p className="hero-role">Technology Program Analyst <span>/</span> Wells Fargo</p>
          <p className="hero-intro">I work within software engineering, bringing people, plans, and technology together to move initiatives forward.</p>
          <a className="button" href="#experience">View experience <ArrowUpRight /></a>
        </div>
        <div className="hero-card glass-panel" style={glassEffect} aria-label="A reminder to build with clarity">
          <span className="card-index">A NOTE TO SELF&nbsp; / &nbsp;001</span>
          <p>Build with<br /><span>clarity.</span></p>
          <span className="card-stamp" aria-hidden="true">SR</span>
        </div>
        <div className="hero-footer"><span>UNITED STATES</span><a href="#experience">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
      </section>

      <section className="experience-section page-shell" id="experience">
        <div className="section-heading">
          <p className="eyebrow"><span className="eyebrow-mark" /> EXPERIENCE</p>
          <h2>What I&apos;m<br /><span>working on.</span></h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-card glass-panel" key={item.number} style={glassEffect}>
              <span className="experience-number">{item.number}</span>
              <div className="experience-main">
                <p className="experience-status"><span className="status-dot" /> {item.status}</p>
                <h3>{item.role}</h3>
                <p className="experience-meta">{item.company}<span>/</span>{item.discipline}</p>
                <p className="experience-description">{item.description}</p>
              </div>
              <span className="experience-arrow" aria-hidden="true"><ArrowUpRight /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section page-shell" id="contact">
        <div className="contact-card glass-panel" style={glassEffect}>
          <div>
            <p className="eyebrow"><span className="eyebrow-mark" /> GET IN TOUCH</p>
            <h2>Let&apos;s talk.</h2>
          </div>
          <a className="contact-link" href="mailto:hello@sahilraj.dev">Say hello <ArrowUpRight /></a>
        </div>
      </section>

      <footer className="footer page-shell">
        <a className="wordmark" href="#home">SR<span>.</span></a>
        <span>SAHIL RAJ&nbsp; · &nbsp;{new Date().getFullYear()}</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}
