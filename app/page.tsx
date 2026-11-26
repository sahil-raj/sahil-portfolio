const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="arrow-icon">
    <path d="M3.5 12.5 12 4m0 0H5m7 0v7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const focusAreas = [
  {
    number: "01",
    title: "Program delivery",
    description: "Turning complex initiatives into clear plans and steady progress.",
  },
  {
    number: "02",
    title: "Process improvement",
    description: "Making the way teams work a little simpler, one step at a time.",
  },
]

export default function Home() {
  return (
    <main id="home">
      <header className="topbar page-shell glass-panel">
        <a className="wordmark" href="#home" aria-label="Sahil Raj, home">SR<span>.</span></a>
        <nav aria-label="Main navigation" className="nav-links">
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="#contact"><span className="status-dot" /> Available to connect</a>
      </header>

      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark" /> TECHNOLOGY PROGRAM ANALYST</p>
          <h1>Sahil Raj<span className="hero-period">.</span></h1>
          <p className="hero-role">Wells Fargo <span>/</span> Technology &amp; Programs</p>
          <p className="hero-intro">I bring people and plans together to make complex work feel clear.</p>
          <a className="button" href="#focus">A little about what I do <ArrowUpRight /></a>
        </div>
        <div className="hero-card glass-panel" aria-label="A simple reminder to keep work clear and moving">
          <span className="card-index">A NOTE TO SELF&nbsp; / &nbsp;001</span>
          <p>Make it<br /><span>clear.</span><br />Make it move.</p>
          <span className="card-stamp" aria-hidden="true">SR</span>
        </div>
        <div className="hero-footer"><span>UNITED STATES</span><a href="#focus">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
      </section>

      <section className="focus-section page-shell" id="focus">
        <div className="section-heading">
          <p className="eyebrow"><span className="eyebrow-mark" /> WHAT I DO</p>
          <h2>Good work,<br /><span>made clearer.</span></h2>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-card glass-panel" key={area.number}>
              <span className="focus-number">{area.number}</span>
              <div><h3>{area.title}</h3><p>{area.description}</p></div>
              <span className="focus-arrow" aria-hidden="true"><ArrowUpRight /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section page-shell" id="about">
        <div className="about-card glass-panel">
          <p className="eyebrow"><span className="eyebrow-mark" /> A LITTLE ABOUT ME</p>
          <p className="about-copy">Curious by nature. Practical by default. Always learning.</p>
          <a className="contact-link" href="mailto:hello@sahilraj.dev" id="contact">Say hello <ArrowUpRight /></a>
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
