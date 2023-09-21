import React, { useState, useEffect } from "react";
import "../../style/welcome/welcome.css";
import "../../style/welcome/arrow.css";
import "../../style/welcome/slideTracker.css";

import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";

const Welcome = () => {
  const [isLeftAligned, setIsLeftAligned] = useState(false);
  const [slideCount, setSlideCount] = useState(0);

  const nextSlide = () => {
    setIsLeftAligned(true);
    if (slideCount !== componentMap.length - 1) setSlideCount((prev) => prev + 1);
  };
  const previousSlide = () => {
    if (slideCount > 0) setSlideCount((prev) => prev - 1);
  };

  const WebdevAndName = () => {
    return (
      <>
        <div className={`webDev ${isLeftAligned ? "webDevAnimation" : ""}`}>Web developer</div>
        <div className={`name ${isLeftAligned ? "nameAnimationTwo" : ""}`}>András Kőrösi</div>
      </>
    );
  };

  const NavigationArrows = () => {
    return (
      <>
        {slideCount < componentMap.length - 1 && (
          <div className={`arrowButtonContainer  ${slideCount === 0 ? "" : "next"}`}>
            <button className="arrow down" onClick={nextSlide}></button>
          </div>
        )}

        {slideCount > 0 && (
          <div
            className={`arrowButtonContainer  ${
              slideCount === componentMap.length - 1 ? "" : "previous"
            }`}>
            <button className="arrow up" onClick={previousSlide}></button>{" "}
          </div>
        )}
      </>
    );
  };

  const SlideTracker = () => {
    return (
      <div className="slideTracker">
        {Array.from({ length: componentMap.length }, (_, index) => (
          <a
            key={index}
            href={`#slide-${index + 1}`}
            className={`slides ${index === slideCount ? "choosenSlide" : "normalSlide"}`}></a>
        ))}
      </div>
    );
  };

  const componentMap = [<WebdevAndName />, <ComponentTwo />, <ComponentThree />];

  const [componentToRender, setComponentToRender] = useState(<WebdevAndName />);

  useEffect(() => {
    setComponentToRender(componentMap[slideCount]);
    console.log(slideCount);
  }, [slideCount]);

  return (
    <div className="welcomeWrapper">
      <SlideTracker />

      <div className={`textContainer ${isLeftAligned ? "moveToLeft" : ""}`}>
        {componentToRender}
      </div>
      <NavigationArrows />
    </div>
  );
};

export default Welcome;
