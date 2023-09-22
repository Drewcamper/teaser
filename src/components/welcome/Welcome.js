import React, { useState, useEffect } from "react";
import "../../style/welcome/welcome.css";
import "../../style/welcome/arrow.css";
import "../../style/welcome/slideTracker.css";

import WebDevAndName from "./WebDevAndName";
import UsedTools from "../usedTools/UsedTools";
import ComponentThree from "./ComponentThree";

const Welcome = () => {
  const [slideCount, setSlideCount] = useState(0);
  const [prevSlideCount, setPrevSlideCount] = useState(0);
  const [arrowKeyUp, setArrowKeyUp] = useState(false);

  // useEffect(() => {
  //   const waitingTime = 5000;
  //   const interval = setInterval(() => {
  //     setSlideCount((prevSlideCount) =>
  //       prevSlideCount === componentMap.length - 1 ? 0 : prevSlideCount + 1
  //     );
  //   }, waitingTime);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [slideCount]);

  const nextSlide = () => {
    setArrowKeyUp(false);
    if (slideCount !== componentMap.length - 1) setSlideCount((prev) => prev + 1);
  };

  const previousSlide = () => {
    setArrowKeyUp(true);
    if (slideCount >= 0) setSlideCount((prev) => prev - 1);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 40) {
      nextSlide();
    }
  };
  const handleKeyUp = (event) => {
    if (event.keyCode === 38) {
      previousSlide();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keydown", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keydown", handleKeyUp);
    };
  }, []);

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

  const choosenSlide = (index) => {
    setPrevSlideCount(index - 1);
    setSlideCount(index);
  };

  const SlideTracker = () => {
    return (
      <div className="slideTracker">
        {Array.from({ length: componentMap.length }, (_, index) => (
          <a
            key={index}
            onClick={() => choosenSlide(index)}
            className={`slides ${
              index === slideCount
                ? "choosenSlide"
                : index === prevSlideCount
                ? "shrinkingSlide"
                : "normalSlide"
            }`}></a>
        ))}
      </div>
    );
  };
  useEffect(() => {
    if (slideCount === componentMap.length) {
      setSlideCount(0);
    }
    if (slideCount < 0 && arrowKeyUp) {
      setSlideCount(componentMap.length - 1);
    }

    console.log({
      slideCount: slideCount,
      prevSlideCount: prevSlideCount,
    });
  }, [slideCount, prevSlideCount]);

  const componentMap = [<WebDevAndName />, <UsedTools />, <ComponentThree />];

  return (
    <div className="welcomeWrapper">
      <SlideTracker />
      <div className="textContainer">{componentMap[slideCount]}</div>
      slide count: {slideCount}
      componentMap lenthg: {componentMap.length - 1}
      <NavigationArrows />
    </div>
  );
};

export default Welcome;
