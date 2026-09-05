const projects = [
  {
    name: "Cover Alarm",
    url: "https://coveralarm.com",
    image: "/images/coveralarm.png",
    description: "A professional security and alarm solutions website.",
  },
  {
    name: "Fire Alarm",
    url: "https://firealarm.ng",
    image: "/images/firealarm.png",
    description: "A responsive fire safety solutions platform.",
  },
  {
    name: "BuildFast",
    url: "https://buildfast.ng",
    image: "/images/buildfast.png",
    description: "A modern business website for construction services.",
  },
  {
    name: "Kustomer",
    url: "https://kustomer.com.ng",
    image: "/images/kustomer.png",
    description: "A customer-focused digital platform.",
  },
  {
    name: "The Spire",
    url: "https://thespire.com.ng",
    image: "/images/thespire.png",
    description: "A clean and professional company website.",
  },
];

function App() {
  const whatsappNumber = "2348107535781";
  const email = "ismailasaidu997@gmail.com";

  return (
    <div className="site-wrapper">
      <nav className="navbar">
        <a href="#home" className="logo">
          Flex<span>Codes</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">REACT DEVELOPER • FLEXCODES</p>

            <h1>I build digital experiences that make businesses stand out.</h1>

            <p className="hero-text">
              I create fast, responsive, and modern websites using React,
              JavaScript, and Tailwind CSS.
            </p>

            <div className="hero-buttons">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20FlexCodes,%20I%20would%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Chat on WhatsApp
              </a>

              <a href={`mailto:${email}`} className="secondary-button">
                Send an Email
              </a>
            </div>

            <div className="stats">
              <div>
                <strong>5+</strong>
                <span>Live Projects</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Responsive Design</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Communication</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="code-window">
              <div className="window-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <pre>
                <code>{`const developer = {
  name: "FlexCodes",
  skills: [
    "React",
    "JavaScript",
    "Tailwind CSS"
  ],
  available: true
};`}</code>
              </pre>
            </div>
          </div>
        </section>
        <section id="about" className="about-section">
          <div className="about-content">
            <div className="section-heading">
              <p className="eyebrow">ABOUT ME</p>

              <h2>
                I build websites that are clean, responsive, and easy to use.
              </h2>

              <p className="about-description">
                I am a frontend developer who enjoys turning ideas into modern
                digital experiences. I focus on writing clean code, creating
                responsive layouts, and building interfaces that work well on
                every screen size.
              </p>
            </div>

            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-header">
                  <strong>HTML &amp; CSS</strong>
                  <span>95%</span>
                </div>

                <div className="skill-bar">
                  <div className="skill-progress skill-html"></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <strong>JavaScript</strong>
                  <span>85%</span>
                </div>

                <div className="skill-bar">
                  <div className="skill-progress skill-javascript"></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <strong>React</strong>
                  <span>85%</span>
                </div>

                <div className="skill-bar">
                  <div className="skill-progress skill-react"></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-header">
                  <strong>Responsive Design</strong>
                  <span>90%</span>
                </div>

                <div className="skill-bar">
                  <div className="skill-progress skill-responsive"></div>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="about-stat">
                <strong>5+</strong>
                <span>Projects completed</span>
              </div>

              <div className="about-stat">
                <strong>100%</strong>
                <span>Responsive websites</span>
              </div>

              <div className="about-stat">
                <strong>24/7</strong>
                <span>Focused on improvement</span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">MY WORK</p>
            <h2>Selected Projects</h2>
            <p>A selection of websites and digital experiences I have built.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-image">
                  <img src={project.image} alt={`${project.name} preview`} />

                  <div className="image-overlay">
                    <a href={project.url} target="_blank" rel="noreferrer">
                      Visit Website →
                    </a>
                  </div>
                </div>

                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View project ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">LET’S WORK TOGETHER</p>
          <h2>Have a project in mind?</h2>
          <p>
            Let’s create a fast, professional, and user-friendly website for
            your business.
          </p>

          <div className="contact-buttons">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-button"
            >
              WhatsApp Me
            </a>

            <a href={`mailto:${email}`} className="email-button">
              {email}
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 FlexCodes. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
