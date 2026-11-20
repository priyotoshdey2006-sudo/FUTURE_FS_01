
import './App.css'
import { useState } from 'react'

import {
  ArrowUpRight,
  Mail,
  Code2,
  Sparkles,
  Menu,
  X,
  BriefcaseBusiness,
  Download,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'DocuMind AI',
    category: 'AI / Machine Learning',
    description:
      'An intelligent document question-answering application using hybrid RAG, semantic search and AI-powered responses.',
    technologies: 'Python · FastAPI · React · ChromaDB',
  },
  {
    number: '02',
    title: 'Abhilasha Beauty Parlour',
    category: 'Full Stack Web Development',
    description:
      'A premium business website with responsive design, customer authentication and Supabase integration.',
    technologies: 'React · CSS · Vite · Supabase',
  },
  {
    number: '03',
    title: 'Student Performance Analyser',
    category: 'Python Project',
    description:
      'A CSV-based student performance analysis project using Python data processing and visualisation libraries.',
    technologies: 'Python · NumPy · Pandas · Matplotlib',
  },
]

const skills = [
  'C',
  'C++',
  'Python',
  'Java',
  'JavaScript',
  'React',
  'HTML',
  'CSS',
  'Git & GitHub',
  'SQL',
  'Machine Learning',
  'Data Structures',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          PD<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>
        
      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot"></span>
              Aspiring AI/ML Engineer
            </div>

            <p className="eyebrow">HELLO, I'M PRIYOTOSH DEY</p>

            <h1>
              Building ideas
              <br />
              into <span>digital</span>
              <br />
              experiences.
            </h1>

            <p className="hero-description">
              I'm a Computer Science student specializing in Artificial
              Intelligence and Machine Learning, passionate about building
              meaningful software and exploring intelligent technologies.
            </p>

            <div className="hero-actions">
  <a href="#projects" className="button-primary">
    Explore My Work <ArrowUpRight size={18} />
  </a>

  <a href="#contact" className="button-secondary">
    Contact Me
  </a>

  <a
    href="/resume/Priyotosh_Dey_Resume.pdf"
    className="button-secondary"
    download
  >
    Download Resume <Download size={18} />
  </a>
</div>

            <div className="social-links">
              <a
                href="https://github.com/priyotoshdey2006-sudo"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Code2 />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <BriefcaseBusiness />
              </a>
              <a href="#contact" aria-label="Email">
                <Mail />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-top">
                <span>MY CREATIVE SPACE</span>
                <Sparkles size={19} />
              </div>

              <img
  src="/images/profile.png"
  alt="Priyotosh Dey - AI/ML Developer"
  className="profile-photo"
/>

              <div className="visual-bottom">
                <div>
                  <span>FOCUS AREA</span>
                  <strong>AI & SOFTWARE</strong>
                </div>
                <Code2 size={30} />
              </div>
            </div>
            <div className="visual-decoration"></div>
            <span className="visual-caption">LEARN. BUILD. INNOVATE.</span>
          </div>
        </section>

        <section className="intro-strip">
          <p>CURIOUS MIND.</p>
          <span>CREATIVE THINKER.</span>
          <p>CONTINUOUS LEARNER.</p>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>A little about <span>my journey.</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm Priyotosh, a B.Tech student in Computer Science and
                Engineering with a specialization in Artificial Intelligence
                and Machine Learning.
              </p>
              <p>
                I enjoy learning programming, developing web applications and
                exploring how AI can solve real-world problems. I believe in
                learning by building and improving through practical projects.
              </p>
              <a href="#contact" className="text-link">
                Let's connect <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="education-card">
              <span className="card-label">EDUCATION</span>
              <h3>B.Tech</h3>
              <p>Computer Science & Engineering</p>
              <p className="gold-text">Artificial Intelligence & Machine Learning</p>
              <div className="card-divider"></div>
              <strong>Dr. B.C. Roy Engineering College</strong>
              <span className="education-status">Undergraduate Student</span>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / MY TOOLKIT</p>
            <h2>Technologies I <span>work with.</span></h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span>0{index + 1}</span>
                <strong>{skill}</strong>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">03 / SELECTED WORK</p>
            <h2>Things I've <span>built.</span></h2>
            <p className="section-subtitle">
              A selection of projects that reflect my learning and creativity.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <ArrowUpRight size={22} />
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">{project.technologies}</div>
              </article>
            ))}
          </div>
          <div className="projects-footer">
  <p>Want to explore more of my work?</p>
  <a
    href="https://github.com/priyotoshdey2006-sudo"
    target="_blank"
    rel="noreferrer"
    className="button-primary"
  >
    Explore My GitHub <ArrowUpRight size={18} />
  </a>
</div>
        </section>

        
<section className="contact-section section" id="contact">
  <p className="eyebrow">04 / GET IN TOUCH</p>
  <h2>Have an idea? Let's <span>build it.</span></h2>
  <p>
    I'm open to connecting, learning opportunities and interesting
    projects. Feel free to reach out.
  </p>

  <form
    className="contact-form"
    action="https://formsubmit.co/priyotoshdey21@gmail.com"
    method="POST"
  >
    <input type="hidden" name="_subject" value="New Portfolio Enquiry!" />
    <input type="hidden" name="_template" value="table" />

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
    />

    <input
      type="text"
      name="subject"
      placeholder="Subject"
      required
    />

    <textarea
      name="message"
      placeholder="Write your message..."
      rows="5"
      required
    ></textarea>

    <button type="submit" className="button-primary">
      Send Message <Mail size={18} />
    </button>
  </form>
</section>

      </main>

      <footer className="footer">
        <a href="#home" className="logo">PD<span>.</span></a>
        <p>Designed & built by Priyotosh Dey © 2026</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
