import './work.scss';
import frontend from '../../assets/frontend.jpg';
import angular from '../../assets/angular.png';
import node from '../../assets/node.png';
import react from '../../assets/react.png';
import vue3 from '../../assets/vue3.png';
// import frameworks from '../../assets/frameworks.png';

const Work = () => {

  return (
    <div className="work">
      <div>
        <p>I'm a fullstack engineer with more of a frontend bent. I've worked with
          and for companies and startups like Idean and Vungle, helped agencies
          like Golin deliver awesome web experiences, and contracted with enterprise
          companies like Autodesk to help deliver new products to market.
        </p>
        <br/>
        <p>I have over 6 years of experience as primarily as a JavaScript developer and really enjoy working
          with React.js, but am always exploring new frontend frameworks and expanding
          my knowledge with server-side development.
        </p>
      </div>
      <img className="frontend" src={frontend} alt="frontend"/>
      <div className="logos">
        <img src={angular} alt="angular" />
        <img src={react} alt="react" />
        <img src={vue3} alt="vue" />
        <img src={node} alt="node"/>
      </div>
    </div>
  );
}

export default Work;
