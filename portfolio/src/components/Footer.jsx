import { Mail, Linkedin, Github } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:dfreemon.freemon@gmail.com',
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/marcus-freemon/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/mfreemon',
      label: 'GitHub'
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <social.icon size={24} />
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>
        <div className="footer-text">
          <p>&copy; 2025 Marcus Freemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 