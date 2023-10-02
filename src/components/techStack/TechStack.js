import React, { useContext } from "react";
import "../../style/techStack/techStack.css";
import { DataContext } from "../context/context";
import TechStackMenu from "./TechStackMenu";

function TechStack() {
  const { content } = useContext(DataContext);
  const Content = () => {
    return <div className="content">{content}</div>;
  };
  return (
    <div className="techStackWrapper">
      <Content />
      <TechStackMenu />
    </div>
  );
}

export default TechStack;
