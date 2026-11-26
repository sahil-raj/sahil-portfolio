const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="arrow-icon">
    <path d="M3.5 12.5 12 4m0 0H5m7 0v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const projects = [
  {
    number: "01",
    name: "Program operations",
    type: "PROGRAM MANAGEMENT · 2024—NOW",
    description: "Bringing structure to complex initiatives, aligning teams around clear outcomes, and keeping delivery moving from kickoff to launch.",
    tags: ["Cross-functional leadership", "Delivery strategy"],
  },
  {
    number: "02",
    name: "Process improvement",
    type: "CONTINUOUS IMPROVEMENT",
    description: "Finding the friction in everyday workflows and turning it into simpler, more thoughtful experiences for the people who use them.",
    tags: ["Operational excellence", "Change management"],
  },
  {
    number: "03",
    name: "Ideas in progress",
    type: "PERSONAL PROJECTS · ALWAYS EVOLVING",
    description: "A space for experiments, side projects, and things I am curious enough to make. This collection will grow as I do.",
    tags: ["Technology", "Learning by doing"],
  },
]

const principles = [
  ["01", "Clarity over complexity", "Make the next step obvious, especially when the work is not."],
  ["02", "People make programs work", "Build trust early. The best plans are the ones a team believes in."],
  ["03", "Progress is a practice", "Small, consistent improvements compound into meaningful change."],
]

export default function Home() {
  return (
    <main>
      <header className="topbar page-shell">
        <a className="wordmark" href="#home" aria-label="Sahil Raj, home">SR<span>.</span></a>
        <nav aria-label="Main navigation" className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="#contact"><span className="status-dot" /> Open to conversations</a>
      </header>

      <section className="hero page-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> TECHNOLOGY · PROGRAMS · PEOPLE</p>
          <h1>Thoughtful work.<br /><span>Meaningful</span> progress.</h1>
          <p className="hero-intro">I&apos;m Sahil Raj — a technology program analyst at Wells Fargo, helping teams turn complex initiatives into clear, steady progress.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight /></a>
            <a className="text-link" href="#about">A little about me <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-aside" aria-label="Professional focus">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="orbit-core"><span>SR</span><i /></div>
          <p className="orbit-caption">CONNECTING<br />THE DOTS</p>
          <span className="orbit-label orbit-label-top">PEOPLE</span>
          <span className="orbit-label orbit-label-right">PROCESS</span>
          <span className="orbit-label orbit-label-bottom">TECHNOLOGY</span>
        </div>
        <div className="hero-footnote"><span>BASED IN THE UNITED STATES</span><span>SCROLL TO EXPLORE&nbsp; ↓</span></div>
      </section>

      <section className="intro-section page-shell" id="about">
        <div className="section-label"><span>01 / THE PERSON BEHIND THE PROGRAMS</span><span className="label-rule" /></div>
        <div className="intro-grid">
          <h2>Good programs don&apos;t<br />just <span>happen.</span></h2>
          <div className="intro-body">
            <p className="large-copy">They&apos;re built with curiosity, thoughtful planning, and people moving in the same direction.</p>
            <p>I work at the intersection of technology and execution: creating clarity, connecting the right people, and helping ambitious work move forward. I care about the details, but never lose sight of the bigger picture or the humans behind it.</p>
            <a className="inline-link" href="#contact">More about how I work <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <section className="work-section page-shell" id="work">
        <div className="section-label"><span>02 / A FEW THINGS I CARE ABOUT</span><span className="label-rule" /></div>
        <div className="section-heading-row">
          <h2>Selected <span>work.</span></h2>
          <p>A snapshot of the work, questions, and ideas<br className="desktop-break" /> shaping what I do next.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-main">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </div>
              <span className="project-arrow" aria-hidden="true"><ArrowUpRight /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section page-shell">
        <div className="approach-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> HOW I LIKE TO WORK</p>
          <h2>Grounded in<br /><span>good principles.</span></h2>
          <p className="approach-note">A few ideas I bring to every room, roadmap, and collaboration.</p>
        </div>
        <div className="principle-list">
          {principles.map(([number, title, description]) => (
            <article className="principle" key={number}>
              <span className="principle-number">{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <span className="principle-plus" aria-hidden="true">+</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section page-shell" id="contact">
        <div className="contact-topline"><span>03 / THE NEXT CONVERSATION</span><span>GOOD THINGS START WITH A HELLO</span></div>
        <div className="contact-content">
          <div><p className="eyebrow"><span className="eyebrow-line" /> LET&apos;S CONNECT</p><h2>Have something<br />in <span>mind?</span></h2></div>
          <div className="contact-right"><p>I&apos;m always glad to meet thoughtful people, trade ideas, and explore what could be next.</p><a className="button button-light" href="mailto:hello@sahilraj.dev">Say hello <ArrowUpRight /></a></div>
        </div>
        <footer className="footer"><a className="wordmark" href="#home">SR<span>.</span></a><span>BUILT WITH INTENTION · {new Date().getFullYear()}</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
      </section>
    </main>
  )
}
