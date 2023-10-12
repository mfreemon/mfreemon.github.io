import { Link } from 'react-router-dom';
import './styles.scss';

const ContactUs = () => {
  return (
  <div className="contact">
    <h2>Let's Work Together</h2>
    <p>I'm always looking for new opportunities and am comfortable working both internationally
      and with distributed teams. Please feel free to get in touch with me and I will
      reach out to you shortly!
    </p>
    <button><a href="mailto:dfreemon@gmail.com">Contact Me</a></button>
    <button><a href="./Marcus-resume.pdf" target="_blank" download>Download resume</a></button>
  </div>
  )
}

export default ContactUs;
