import React from "react";
import profileImg from "./assets/WhatsApp Image 2026-05-26 at 8.36.07 PM.jpeg";
import { ReactTyped } from "react-typed";

const profile = {
  name: "Garlapati Lakshmaiah",
  role: "Frontend Developer",
  email: "garlpatilakshmaiah99@gmail.com",
  phone: "6303083877",
  linkedin: "https://www.linkedin.com/in/garlapati-lakshmaiah-a83150343",
  github: "#",
  location: "India",
};

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript ES6+",
  "React.js",
  "JSX",
  "React Hooks",
  "REST APIs",
  "Axios",
  "Fetch API",
  "Responsive Design",
  "Flexbox",
  "CSS Grid",
  "Git",
  "GitHub",
  "Netlify",
  "Node.js",
  "Express.js",
  "MongoDB",
];

const projects = [
  {
    title: "E-Commerce Web Application",
    type: "React Project",
    description:
      "A responsive e-commerce application with reusable product cards, cart functionality, filters, dynamic API data and clean component structure.",
    tech: ["React.js", "JSX", "REST API", "CSS Grid", "useState", "useEffect"],
  },
  {
    title: "Admin Dashboard",
    type: "Dashboard UI",
    description:
      "Modern dashboard interface with sidebar navigation, stat cards, data tables, charts layout and responsive design for all screen sizes.",
    tech: ["React.js", "API Integration", "Reusable Components", "Flexbox"],
  },
  {
    title: "Sign Up & Login Pages",
    type: "Authentication UI",
    description:
      "Real-time authentication pages using controlled inputs, validation, error messages and clean form component reusability.",
    tech: ["React Forms", "useState", "Validation", "CSS3"],
  },
  {
    title: "Responsive Landing Page",
    type: "Static Website",
    description:
      "A fully responsive landing page created with semantic HTML, CSS animations, layout alignment and Netlify deployment.",
    tech: ["HTML5", "CSS3", "Flexbox", "Netlify"],
  },
];

const timeline = [
  {
    year: "2021 - 2025",
    title: "B.Sc. Agriculture",
    desc: "Aakansha College, Maa Shakumbari University - CGPA 7.76",
  },
  {
    year: "2019 - 2021",
    title: "Agriculture Diploma",
    desc: "Sai Raghavendra A.G Polytechnic - CGPA 8.83",
  },
  {
    year: "Training",
    title: "Frontend & MERN Stack Learning",
    desc: "Practical training in JavaScript, React Hooks, API integration, Node.js, Express.js and MongoDB fundamentals.",
  },
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          GL
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-bg one"></div>
        <div className="hero-bg two"></div>

        <div className="hero-content">
          <p className="badge">
            Available for Frontend / MERN Stack Opportunities
          </p>
          <img src={profileImg} alt="Lakshmaiah" className="profile-img" />

          <h1>
            Hi, I am <span>{profile.name}</span>
          </h1>
          <h2>{profile.role} | React.js | JavaScript | MERN Stack</h2>
          <p className="hero-text">
            I build responsive, user-friendly web applications using React.js,
            JavaScript, HTML5 and CSS3. I focus on clean UI, reusable
            components, API integration and smooth user experience across all
            devices.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href={`mailto:${profile.email}`} className="btn secondary">
              Hire Me
            </a>
          </div>

          <div className="stats">
            <div>
              <strong>4+</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>18+</strong>
              <span>Skills</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Responsive</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="avatar">GL</div>
          <ReactTyped
            strings={[
              "Frontend Developer",
              "React.js Developer",
              "MERN Stack Learner",
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
          <p>React.js • APIs • Responsive UI</p>
          <div className="code-box">
            <p>
              <span>const</span> developer = &#123;
            </p>
            <p>&nbsp;&nbsp;name: 'Lakshmaiah',</p>
            <p>&nbsp;&nbsp;skills: ['React', 'JS'],</p>
            <p>&nbsp;&nbsp;goal: 'Build clean UI'</p>
            <p>&#125;</p>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="section-title">
          <p>About Me</p>
          <h2>
            Clean code, responsive layouts and real-world project practice.
          </h2>
        </div>
        <div className="about-grid">
          <div className="glass-card">
            <h3>Professional Summary</h3>
            <p>
              Frontend Developer with hands-on experience building responsive
              and user-friendly applications using HTML5, CSS3, JavaScript and
              React.js. Skilled in React Hooks, reusable components, state
              management and REST API integration.
            </p>
          </div>
          <div className="glass-card highlight-card">
            <h3>What I Can Do</h3>
            <ul>
              <li>Build React single page applications</li>
              <li>Create responsive layouts using Flexbox and Grid</li>
              <li>Connect frontend with REST APIs using Axios or Fetch</li>
              <li>Develop reusable UI components</li>
              <li>Create login, signup, dashboard and e-commerce interfaces</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-title center">
          <p>Skills</p>
          <h2>Technologies I work with</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-pill" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-title center">
          <p>Portfolio</p>
          <h2>Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-top">
                <span>{project.type}</span>
                <b>0{index + 1}</b>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section timeline-section">
        <div className="section-title center">
          <p>Journey</p>
          <h2>Education & Training</h2>
        </div>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div className="timeline-item" key={index}>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-card">
          <p className="badge">Let us work together</p>
          <h2>Ready to build modern frontend applications.</h2>
          <p>
            I am looking for Frontend Developer, React Developer and MERN Stack
            fresher opportunities.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 {profile.name}. Built with React.js</p>
      </footer>
    </div>
  );
}

export default App;
