import { Link } from 'react-router-dom';
import './styles.scss';
import email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';


const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="mailto:dfreemon@gmail.com" target="_blank">
            <img className="email" src={email} alt="email" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/marcus-freemon/" target="_blank">
            <img className="linkedin" src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.github.com/mfreemon" target="_blank" >
            <img className="github" src={github} alt="github" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
