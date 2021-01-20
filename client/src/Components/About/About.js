
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
        <p>
          Texas native but attended university and subsequently have been
          living in the San Francisco Bay Area for sometime now with intermittent
          stops in parts of Latin America and Europe.
        </p>
        <br/>
        <p>
          In my free time I enjoy spending my time outdoors doing pretty much
          anything outdoors: backpacking, camping
          and fishing throughout California.
        </p>
      </div>
    </div>
  );
}

export default About
