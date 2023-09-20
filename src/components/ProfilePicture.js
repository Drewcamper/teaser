import React, { useState } from "react";
import "../style/profilePicture.css";
import pp from "../images/pp.jpg";
import ppSmall from "../images/ppSmall.png";

function ProfilePicture() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div>
      <div className="element pictureWrapper">
        {isLoading ? (
          <img
            className="profilePicture"
            src={ppSmall}
            alt="Profile Picture"
            loading="lazy"
            onLoad={handleImageLoad()}
          />
        ) : (
          <img className="profilePicture" src={pp} alt="Profile Picture" loading="lazy" />
        )}
      </div>
    </div>
  );
}

export default ProfilePicture;
