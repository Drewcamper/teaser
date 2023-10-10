import React, { useState, useRef, useEffect } from "react";
import "../../style/projects/projects.css";

import webshopSmall from "../../images/smallSize/projects/webshop.png";
import webshopOriginal from "../../images/projects/webshop.png";

import todoSmall from "../../images/smallSize/projects/todo.png";
import todoOriginal from "../../images/projects/todo.png";

import weatherSmall from "../../images/smallSize/projects/weather.png";
import weatherOriginal from "../../images/projects/weather.png";

import calculatorSmall from "../../images/smallSize/projects/calculator.png";
import calculatorOriginal from "../../images/projects/calculator.png";

import ticTacToeSmall from "../../images/smallSize/projects/tic-tac-toe.png";
import ticTacToeOriginal from "../../images/projects/tic-tac-toe.png";

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projectTitles = ["Webshop", "Todo", "Weather", "Calculator", "Tic-tac-toe"];
  const projectImagesSmall = [
    webshopSmall,
    todoSmall,
    weatherSmall,
    calculatorSmall,
    ticTacToeSmall,
  ];
  const projectImagesOriginal = [
    webshopOriginal,
    todoOriginal,
    weatherOriginal,
    calculatorOriginal,
    ticTacToeOriginal,
  ];

  const TitlePattern = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
      setIsLoading(false);
    };

    return (
      <div className="project-container">
        {projectTitles.map((title, index) => (
          <div key={index} onClick={() => setCurrentProject(index)}>
            {isLoading ? (
              <img
                alt="index image"
                src={projectImagesSmall[index]}
                className="projectImage"
                loading="lazy"
                onLoad={handleImageLoad}
              />
            ) : (
              <>
                <img
                  alt="index image"
                  src={projectImagesOriginal[index]}
                  className="projectImage"
                  loading="lazy"
                />
              </>
            )}{" "}
            {/* <div className="overlay"></div> */}
            <div className="project-title">{title}</div>
          </div>
        ))}
      </div>
    );
  };

  const ProjectPattern = () => {
    const demoUrl = [
      "https://sphere-chat.web.app/",
      "https://weather-16a4d.web.app/",
      "https://todo-35490.web.app/",
      "https://calculator-861f3.web.app/",
      "https://tic-tac-775bc.web.app/",
    ];
    const codeUrl = [
      "https://github.com/Drewcamper/realWebshop ",
      "https://github.com/Drewcamper/weather-app",
      "https://github.com/Drewcamper/todo-app",
      "https://github.com/Drewcamper/calculator",
      "https://github.com/Drewcamper/tic-tac-toe",
    ];
    const projectDescription = [
      "Description for Webshop",
      "Description for Todo",
      "Description for Weather",
      "Description for Calculator",
      "Description for Tic-tac-toe",
    ];

    const scrollRef = useRef(null);
    const scrollToElement = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Use useEffect to listen for changes in currentProject and scroll when it changes
    useEffect(() => {
      scrollToElement();
    }, [currentProject]);
    return (
      <div ref={scrollRef}>
        <div>{projectTitles[currentProject]}</div>
        <div>{projectDescription[currentProject]}</div>
        <a href={demoUrl[currentProject]}>demo</a>
        <a href={codeUrl[currentProject]}>code</a>
      </div>
    );
  };

  return (
    <>
      <TitlePattern />
      <ProjectPattern />
    </>
  );
}

export default Projects;
