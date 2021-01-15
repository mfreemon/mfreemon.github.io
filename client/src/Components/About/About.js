
import './about.scss';
import yosemite from '../../assets/yosemite.jpg';
const About = (props) => {
  console.log(props)
  return (
    <div className="about">
      <div>
        <img src={yosemite} alt="yosemite"/>
      </div>
      <div>
        <h3>
          Raised in the Midwest, Lionel Falodu was drawn to spending as much time
          as possible outdoors. Currently freelancing for world-renowned nature
          magazines and award-winning publications.
        </h3>
      </div>
    </div>
  );
}

export default About
