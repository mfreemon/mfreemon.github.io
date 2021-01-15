
import portOfOak from '../assets/portofOak.jpg';
import './styles.scss';

const Display = () => {

  return (
    <div>
      <div className="intro">
        <h2>Hi! I'm Marcus Freemon.</h2>
        <h2>A Software Engineer based in the San Francisco Bay Area.</h2>
      </div>
      <div className="display">
        <img src={portOfOak} alt="portOfOak" />
      </div>
    </div>
  );
}

export default Display;
