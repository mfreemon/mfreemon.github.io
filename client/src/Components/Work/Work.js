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
        <h3>I'm a fullstack engineer with more of a frontend bent. I've worked on a diverse
          range of project ranging from building out initial MVPs for startups, collaborated
          with teams at Fortune 500 companies to build out application
        </h3>
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
