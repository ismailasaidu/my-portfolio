import { useState } from "react";
import "./App.css";

const WHATSAPP_NUMBER = "234XXXXXXXXXX";
const EMAIL_ADDRESS = "your@email.com";

const projects = [
  {
    title: "Cover Alarm",
    description:
      "A modern alarm and security-focused website designed for clarity, trust, and easy customer access.",
    image: "/images/coveralarm.png",
    link: "#",
  },
  {
    title: "Fire Alarm",
    description:
      "A responsive fire safety website with clear service information and strong calls to action.",
    image: "/images/firealarm.png",
    link: "#",
  },
  {
    title: "BuildFast",
    description:
      "A construction and building solutions website created with a clean, professional interface.",
    image: "/images/buildfast.png",
    link: "#",
  },
  {
    title: "Kustomer",
    description:
      "A customer-focused digital platform with an accessible layout and responsive user experience.",
    image: "/images/kustomer.png",
    link: "#",
  },
  {
    title: "The Spire",
    description:
      "A polished business website with a premium appearance and conversion-focused sections.",
    image: "/images/thespire.png",
    link: "#",
  },
];

const services = [
  {
    icon: "▣",
    title: "Portfolio Websites",
    description:
      "Professional personal websites that showcase your skills, experience, projects, and achievements.",
    className: "service-blue",
  },
  {
    icon: "↗",
    title: "Landing Pages",
    description:
      "Focused landing pages designed to promote products, services, events, and campaigns.",
    className: "service-purple",
  },
  {
    icon: "⌂",
    title: "Real Estate Websites",
    description:
      "Modern property websites for agents, realtors, developers, and real estate businesses.",
    className: "service-orange",
  },
  {
    icon: "🛒",
    title: "E-commerce Websites",
    description:
      "Responsive online stores that help businesses display products and receive customer orders.",
    className: "service-green",
  },
  {
    icon: "◈",
    title: "Business Websites",
    description:
      "Reliable websites that help Nigerian businesses build trust and attract more customers online.",
    className: "service-pink",
  },
  {
    icon: "⚙",
    title: "Website Improvements",
    description:
      "Updates, redesigns, responsiveness fixes, and performance improvements for existing websites.",
    className: "service-cyan",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  const emailLink = `mailto:${EMAIL_ADDRESS}`;

  return (
    <div className="site-wrapper">
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          Flex<span>Codes</span>
        </a>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">WEB DEVELOPER · FLEXCODES</p>

            <h1>
              I build websites that make businesses
              <span> stand out.</span>
            </h1>

            <p className="hero-text">
              I create modern, responsive, and user-friendly websites for
              individuals, startups, and businesses that want a stronger online
              presence.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work
              </a>

              <a href={whatsappLink} className="secondary-button">
                Chat on WhatsApp
              </a>
            </div>

            <div className="stats">
              <div>
                <strong>5+</strong>
                <span>Projects completed</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Responsive design</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Creative mindset</span>
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

              <pre>{`const developer = {
  name: "FlexCodes",
  role: "Web Developer",
  skills: [
    "React",
    "JavaScript",
    "Node.js",
    "Tailwind CSS"
  ],
  available: true
};`}</pre>
            </div>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="section-heading">
            <p className="eyebrow">ABOUT ME</p>
            <h2>Building digital experiences with purpose.</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a passionate web developer focused on creating clean,
                functional, and visually engaging websites. My goal is to help
                people and businesses turn their ideas into useful digital
                experiences.
              </p>

              <p>
                Whether you need a portfolio, landing page, business website,
                real estate platform, or online store, I can help you create a
                website that looks professional and works beautifully on every
                device.
              </p>
            </div>

            <div className="skills-card">
              <div className="skill">
                <div className="skill-label">
                  <span>Frontend Development</span>
                  <strong>90%</strong>
                </div>
                <div className="skill-bar">
                  <span style={{ width: "90%" }}></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-label">
                  <span>React & JavaScript</span>
                  <strong>85%</strong>
                </div>
                <div className="skill-bar">
                  <span style={{ width: "85%" }}></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-label">
                  <span>Responsive Design</span>
                  <strong>95%</strong>
                </div>
                <div className="skill-bar">
                  <span style={{ width: "95%" }}></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-label">
                  <span>Backend & Node.js</span>
                  <strong>70%</strong>
                </div>
                <div className="skill-bar">
                  <span style={{ width: "70%" }}></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section section" id="services">
          <div className="section-heading">
            <p className="eyebrow">WHAT I OFFER</p>
            <h2>Websites built for your goals.</h2>
            <p>
              From personal brands to growing businesses, I create digital
              solutions that are clear, modern, and effective.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article
                className={`service-card ${service.className}`}
                key={service.title}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Some things I have built.</h2>
            <p>
              A selection of websites and digital projects designed and
              developed with attention to detail.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                  />

                  <div className="image-overlay">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Visit Website
                    </a>
                  </div>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View project →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">LET'S WORK TOGETHER</p>
          <h2>Have an idea? Let&apos;s build it.</h2>

          <p>
            Tell me what you need and I will help you create a website that
            represents your brand and connects with your audience.
          </p>

          <div className="contact-buttons">
            <a href={whatsappLink} className="whatsapp-button">
              Contact on WhatsApp
            </a>

            <a href={emailLink} className="email-button">
              Send an Email
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} FlexCodes. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
