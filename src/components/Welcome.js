import React from "react";
import "../style/welcome.css";
const Welcome = () => {
  return (
    <div className="welcomeWrapper">
      <h1>Web developer</h1>
      <div>András Kőrösi</div>
      <div className="arrowButtonContainer">
        <a data-scroll href="#full">
          <div className="arrow"></div>
        </a>
      </div>
    </div>
  );
};

export default Welcome;
