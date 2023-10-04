import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/techStack/techStack.css";
import { DataContext } from "../context/context";
import TechStackMenu from "./TechStackMenu";

function TechStack() {
  const { content } = useContext(DataContext);
  const Content = () => {
    return <div className="content">{content}</div>;
  };
  const HomeButton = () => {
    const navigate = useNavigate();

    const navigateToMain = () => {
      navigate("/");
    };

    return (
      <button className="homeButton" onClick={navigateToMain}>
        home
      </button>
    );
  };
  return (
    <div className="techStackWrapper">
      <Content />
      <HomeButton />
      <TechStackMenu />
    </div>
  );
}

export default TechStack;
