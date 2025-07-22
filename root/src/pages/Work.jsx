import { ExternalLink, Github, Globe } from 'lucide-react'
import './Work.css'

const Work = () => {
  // Highlighting key projects/achievements from Marcus's experience
  const projects = [
    {
      title: 'Social Community Platform',
      description: 'Built user login/registration flows and embedded surveys to match users with relevant communities. Integrated Bettermode for enhanced engagement.',
      technologies: ['React.js', 'Redux', 'GraphQL', 'HTML5', 'CSS3'],
      liveUrl: '',
      githubUrl: '',
      featured: true,
      company: 'Creative Circle 360',
      period: '2024 – 2025'
    },
    {
      title: 'Nielsen One B2B SaaS Dashboard',
      description: 'Developed a dashboard to summarize large data sets, collaborated on a UI style guide, and optimized performance with reusable components.',
      technologies: ['React.js', 'Redux', 'TypeScript', 'HTML5', 'CSS3'],
      liveUrl: '',
      githubUrl: '',
      featured: false,
      company: 'Nielsen/Gracenote',
      period: '2021 – 2023'
    },
    {
      title: 'Legacy Dashboard Migration',
      description: 'Migrated legacy dashboards to modern ReactJS, reducing tech debt by 40% and improving workflow efficiency.',
      technologies: ['React.js', 'Redux', 'Node.js', 'JavaScript'],
      liveUrl: '',
      githubUrl: '',
      featured: false,
      company: 'Vungle',
      period: '2018 – 2020'
    },
    {
      title: 'SPA Features & Responsive Design',
      description: 'Implemented SPA features from wireframes and maintained cross-browser compatibility across multiple projects.',
      technologies: ['React.js', 'Angular', 'HTML5', 'CSS3'],
      liveUrl: '',
      githubUrl: '',
      featured: false,
      company: 'Idean',
      period: '2015 – 2018'
    },
    {
      title: 'Landing Pages & Marketing Sites',
      description: 'Built landing pages from PSD assets and contributed to front-end engineering for marketing/product pages.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      liveUrl: '',
      githubUrl: '',
      featured: false,
      company: 'Title Nine, Autodesk, CompareNetworks',
      period: '2014 – 2015'
    }
  ]

  return (
    <div className="work">
      <div className="container">
        {/* Header */}
        <section className="work-header">
          <h1 className="page-title">My Work</h1>
          <p className="page-subtitle">
            A selection of projects and achievements from my professional experience as a software engineer.
          </p>
        </section>

        {/* Featured Project */}
        <section className="featured-project">
          {projects.filter(p => p.featured).map((project, index) => (
            <div key={index} className="featured-card">
              <div className="featured-content">
                <h2 className="featured-title">{project.title}</h2>
                <p className="featured-description">{project.description}</p>
                <div className="featured-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1rem' }}>
                  {project.company} &middot; {project.period}
                </div>
                <div className="featured-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      <Globe size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* All Projects */}
        <section className="all-projects">
          <h2>All Projects</h2>
          <div className="projects-grid">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag small">{tech}</span>
                    ))}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: '0.5rem 0' }}>
                    {project.company} &middot; {project.period}
                  </div>
                  <div className="project-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="work-cta">
          <div className="cta-content">
            <h2>Interested in working together?</h2>
            <p>I'm always open to discussing new opportunities and exciting projects.</p>
            <a href="/contact" className="btn btn-primary">Get In Touch</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Work 