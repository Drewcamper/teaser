import React from 'react'
import { useNavigate } from "react-router-dom";

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

export default HomeButton