import React, { useContext } from "react";
import "../../style/techStack/techStack.css";
import { DataContext } from "../context/context";
import TechStackMenu from "./TechStackMenu";

function TechStack() {
  const { content } = useContext(DataContext);

  return (
    <div className="techStackWrapper">
      <TechStackMenu />
      <div>{content}</div>;
    </div>
  );
}

export default TechStack;
