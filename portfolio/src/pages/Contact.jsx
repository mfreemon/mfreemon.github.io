import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import './Contact.css'

const Contact = () => {
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
      value: 'hello@yourname.com',
      link: 'mailto:hello@yourname.com'
    },

    {
      icon: MapPin,
      title: 'Location (open to remote work)',
      value: 'Oakland, CA',
      link: null
    }
  ]

  return (
    <div className="contact">
      <div className="container">
        {/* Header */}
        <section className="contact-header">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            I'm always interested in hearing about new opportunities and exciting projects
          </p>
        </section>

        <div className="contact-content">
          {/* Contact Info */}
          <section className="contact-info">
            <h2>Let's Consdfcvdfvcnect</h2>
            <p>
              Whether you have a question about my work, want to discuss a potential project, 
              or just want to say hello, I'd love to hear from you.
            </p>
            
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon">
                    <info.icon size={24} />
                  </div>
                  <div className="info-content">
                    <h3>{info.title}</h3>
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
          </section>

          {/* Contact Form */}
          {/* <section className="contact-form">
            <h2>Send a Message</h2>
            {isSubmitted ? (
              <div className="success-message">
                <CheckCircle size={48} />
                <h3>Message Sent!</h3>
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
          </section>
        </div> */}

        {/* Additional Info */}
        <section className="contact-cta">
          <div className="cta-content">
            <h2>Ready to Start a Project?</h2>
            <p>
              I'm currently available for freelance work and full-time opportunities. 
              Let's discuss how I can help bring your ideas to life.
            </p>
            <div className="cta-actions">
              <a href="/work" className="btn btn-secondary">View My Work</a>
              <a href="mailto:hello@yourname.com" className="btn btn-primary">
                <Mail size={20} />
                Email Me
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div> 
  )
}

export default Contact; 