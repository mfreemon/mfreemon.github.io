import { Calendar, MapPin, GraduationCap, Award } from 'lucide-react'
import './About.css'

const About = () => {
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
      title: 'Front-End Engineer',
      company: 'Idean',
      period: 'May 2015 – Mar 2018',
      description: [
        'Collaborated with UI/UX and visual designers to implement SPA features from wireframes.',
        'Maintained cross-browser compatibility and responsive design across multiple projects.'
      ]
    },
    {
      title: 'Front-End Engineer (Contract Roles)',
      company: 'Title Nine, Autodesk, CompareNetworks',
      period: 'Nov 2014 – May 2015',
      description: [
        'Title Nine: Built landing pages from PSD assets, aligned to marketing campaigns.',
        'Autodesk: Front-end engineering for marketing and product pages.',
        'CompareNetworks: Front-end engineering (dates not listed).'
      ]
    }
  ]

  const skills = [
    { category: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'] },
    { category: 'Frameworks/Libraries', items: ['React.js', 'Redux', 'Angular', 'Node.js', 'GraphQL', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Vite', 'Webpack', 'Figma', 'Chrome DevTools', 'GitHub', 'AI Tools (Copilot, ChatGPT)'] },
    { category: 'Testing', items: ['Jasmine', 'Jest', 'React Testing Library'] },
    { category: 'Other', items: ['Responsive Design', 'Agile', 'Jira', 'Cross-browser compatibility', 'UI/UX best practices'] }
  ]

  return (
    <div className="about">
      <div className="container">
        {/* Header */}
        <section className="about-header">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">
            Software Engineer with 7+ years of experience specializing in modern front-end development using React.js, Redux, and TypeScript. Proven track record of delivering scalable and responsive web applications in Agile environments. Passionate about UI/UX, clean code, and performance optimization. Comfortable working full-stack and collaborating cross-functionally.
          </p>
        </section>

        {/* Personal Info */}
        <section className="personal-info">
          <div className="info-grid">
            <div className="info-item">
              <Calendar size={20} />
              <span>7+ years experience</span>
            </div>
            <div className="info-item">
              <MapPin size={20} />
              <span>San Francisco, CA</span>
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
        </section>

        {/* Bio */}
        <section className="bio">
          <h2>My Story</h2>
          <div className="bio-content">
            <p>
              I’m a software engineer passionate about building scalable, performant, and user-friendly web applications. My experience spans startups, large companies, and contract roles, always with a focus on clean code and great user experience.
            </p>
            <p>
              I thrive in collaborative, cross-functional teams and enjoy mentoring, code reviews, and learning new technologies. My toolkit includes React, Redux, TypeScript, Node.js, and a strong foundation in UI/UX best practices.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="experience">
          <h2>Experience</h2>
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
        </section>

        {/* Skills */}
        <section className="skills">
          <h2>Skills & Technologies</h2>
          <div className="skills-container">
            {skills.map((skillGroup, index) => (
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
        </section>
      </div>
    </div>
  )
}

export default About 