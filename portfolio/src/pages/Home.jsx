import { ArrowRight, Code, Database, Smartphone, Calendar, MapPin, GraduationCap, Award, Mail, Phone, Send, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Home.css'

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'dfreemon@gmail.com',
      link: 'mailto:dfreemon@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Oakland, CA',
      link: null
    }
  ]

  const skills = [
    { icon: Code, title: 'Frontend Development', description: 'React, Vue, TypeScript' },
    { icon: Database, title: 'Backend Development', description: 'Node.js, Python, SQL' },
    { icon: Smartphone, title: 'Mobile Development', description: 'React Native, Flutter' }
  ]

  const experience = [
    {
      title: 'Software Engineer',
      company: 'Creative Circle 360 (Contract)',
      period: 'Apr 2024 – Jun 2025',
      description: [
        'Built user login and registration flows for a social community platform using React.js and GraphQL.',
        'Created embedded surveys to match users with relevant communities based on their input.',
        'Developed a proof of concept integrated with Bettermode to enhance community engagement.',
        'Tools: ReactJS, Redux, JavaScript, HTML5, CSS3, GraphQL'
      ]
    },
    {
      title: 'Senior Front-End Engineer',
      company: 'Nielsen/Gracenote',
      period: 'May 2021 – Nov 2023',
      description: [
        'Developed the Nielsen One B2B SaaS dashboard application to summarize large data sets.',
        'Collaborated with designers to create a UI style guide, reducing dev time for new features by 30%.',
        'Enhanced performance and maintainability using reusable components and optimized rendering.',
        'Tools: ReactJS, Redux, JavaScript/TypeScript, HTML5, CSS3'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Vungle',
      period: 'Jun 2018 – Jun 2020',
      description: [
        'Migrated legacy dashboards to modern ReactJS architecture, reducing tech debt by 40%.',
        'Improved filtering and navigation functionality to enhance workflow efficiency by 20%.',
        'Spearheaded efforts to consolidate UI features into component libraries.',
        'Tools: ReactJS, Redux, Node.js, JavaScript, HTML5, CSS3'
      ]
    },
    {
      title: 'Front-End Developer',
      company: 'Idean',
      period: 'Jan 2018 – Jun 2018',
      description: [
        'Developed responsive web applications for clients using modern JavaScript frameworks.',
        'Collaborated with design teams to implement pixel-perfect UI components.',
        'Worked on multiple client projects simultaneously, delivering high-quality solutions.',
        'Tools: ReactJS, JavaScript, HTML5, CSS3, Responsive Design'
      ]
    },
    {
      title: 'Front-End Developer',
      company: 'Various Contract Positions',
      period: '2017 – 2018',
      description: [
        'Built custom web applications and e-commerce solutions for diverse client needs.',
        'Developed responsive websites and interactive user interfaces.',
        'Collaborated with clients to understand requirements and deliver tailored solutions.',
        'Tools: JavaScript, HTML5, CSS3, jQuery, Responsive Design'
      ]
    }
  ]

  const technicalSkills = [
    { category: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
    { category: 'Frameworks/Libraries', items: ['React.js', 'Redux', 'Angular', 'Node.js', 'GraphQL', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Vite', 'Webpack', 'Figma', 'Chrome DevTools', 'GitHub', 'AI Tools (Copilot, ChatGPT)'] },
    { category: 'Testing', items: ['Jasmine', 'Jest', 'React Testing Library'] },
    { category: 'Other', items: ['Responsive Design', 'Agile', 'Jira', 'Cross-browser compatibility', 'UI/UX best practices'] }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1rem' }}>
              Hi, my name is
            </p>
            <h1 className="hero-title">
              Marcus Freemon.
            </h1>
            <h2 className="hero-subtitle">I build things for the web.</h2>
            <p className="hero-description">
                 Software Engineer with 7+ years of experience specializing in modern front-end development 
                 using React.js, Redux, and TypeScript. Proven track record of delivering scalable and 
                 responsive web applications in Agile environments. Passionate about UI/UX, clean code, 
                 and performance optimization. Comfortable working full-stack and collaborating 
                 cross-functionally.
            </p>
            <div className="hero-actions">
              <Link to="/work" className="btn btn-primary">
                View My Work
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hero-photo">
            <div className="photo-container">
              <img 
                src="/profile-photo.jpg" 
                alt="Marcus Freemon" 
                className="profile-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="photo-placeholder" style={{ display: 'none' }}>
                <div className="placeholder-content">
                  <div className="placeholder-icon">👨‍💻</div>
                  <p>Add your photo here</p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>profile-photo.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="personal-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-item">
              <Calendar size={20} />
              <span>7+ years experience</span>
            </div>
            <div className="info-item">
              <MapPin size={20} />
              <span>Oakland, CA</span>
            </div>
            <div className="info-item">
              <GraduationCap size={20} />
              <span>Bachelor of Arts – History, Santa Clara University</span>
            </div>
            <div className="info-item">
              <Award size={20} />
              <span>UI/UX & Performance Focused</span>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="what-i-do">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="what-i-do-grid">
            {skills.map((skill, index) => (
              <div key={index} className="what-i-do-card">
                <div className="what-i-do-icon">
                  <skill.icon size={32} />
                </div>
                <div className="what-i-do-content">
                  <h3 className="what-i-do-title">{skill.title}</h3>
                  <p className="what-i-do-description">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Experience Section */}
      <section className="skills-experience">
        <div className="container">
          <div className="skills-experience-grid">
            {/* Skills Column */}
            <div className="skills-column">
              <h2 className="section-title">Skills & Technologies</h2>
              <div className="skills-container">
                {technicalSkills.map((skillGroup, index) => (
                  <div key={index} className="skill-group">
                    <h3 className="skill-category">{skillGroup.category}</h3>
                    <div className="skill-tags">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Column */}
            <div className="experience-column">
              <h2 className="section-title">Experience</h2>
              <div className="timeline">
                {experience.map((job, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3 className="job-title">{job.title}</h3>
                      <p className="job-company">{job.company}</p>
                      <p className="job-period">{job.period}</p>
                      {Array.isArray(job.description) ? (
                        <ul>
                          {job.description.map((desc, i) => (
                            <li key={i} style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '1rem' }}>{desc}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="job-description">{job.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p>
              Whether you have a question about my work, want to discuss a potential project, 
              or just want to say hello, I'd love to hear from you.
          </p> 
          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">
                      <info.icon size={24} />
                    </div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="info-link">
                          {info.value}
                        </a>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form
            <div className="contact-form">
              <h3>Send a Message</h3>
              {isSubmitted ? (
                <div className="success-message">
                  <CheckCircle size={48} />
                  <h4>Message Sent!</h4>
                  <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 