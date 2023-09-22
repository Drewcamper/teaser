import React, { useState } from "react";
import "../../style/usedTools/usedTools.css";

import TitleWebDevAndName from "../welcome/TitleWebDevAndName";


function UsedTools() {
const [showPreviousSlide, setShowPreviousSlide] = useState(true)
setTimeout(() => {
  setShowPreviousSlide(false)
}, 1000);

  const Title = () => {
    return (
      <div className="titleWrapper">
        <div className="ILike">I like </div>
        <div className="React">React</div>
      </div>
    );
  };
  const ReusableComponents = () => {
    return <></>;
  };
  const MyFavourite = () => {
    return (
      <>
        <Title />
        <div className="box"></div>
      </>
    );
  };

  return (
    <>
    {showPreviousSlide && <TitleWebDevAndName />}
      
      {/* <MyFavourite /> */}
    </>
  );
}

export default UsedTools;
