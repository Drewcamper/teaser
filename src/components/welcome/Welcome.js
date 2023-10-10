import React from "react";
import "../../style/welcome/welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const navigateTechStack = () => {
    navigate("/techStack");
  };
  const navigateProjects = () => {
    navigate("/projects");
  };
  const ChooseDirections = () => {
    const SeeProjects = () => {
      return (
        <div className="tile seeProjects" onClick={navigateProjects}>
          projects
        </div>
      );
    };

    const SeeTechStack = () => {
      return (
        <div className="tile seeTechStac" onClick={navigateTechStack}>
          tech stack
        </div>
      );
    };

    return (
      <div className="directionChooserWrapper">
        <div className="webDev">Web developer</div>
        <div className="name">András Kőrösi</div>
        <SeeProjects />
        <SeeTechStack />
      </div>
    );
  };

  return (
    <div className="welcomeWrapper">
      <ChooseDirections />
    </div>
  );
};

export default Welcome;
