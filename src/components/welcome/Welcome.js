

import React, { useState, useEffect } from "react";
import "../../style/welcome/welcome.css";
import "../../style/welcome/arrow.css";
import "../../style/welcome/slideTracker.css";

import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";

const Welcome = () => {
  const [slideCount, setSlideCount] = useState(0);
  const [prevSlideCount, setPrevSlideCount] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setSlideCount((prevSlideCount) =>
        prevSlideCount === componentMap.length - 1 ? 0 : prevSlideCount + 1
      );
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [slideCount]);

  const nextSlide = () => {
    if (slideCount !== componentMap.length - 1) setSlideCount((prev) => prev + 1);
  };

  const previousSlide = () => {
    if (slideCount > 0) setSlideCount((prev) => prev - 1);
  };

  const WebDevAndName = () => {
    return (
      <>
        <div className="webDev">Web developer</div>
        <div className="name">András Kőrösi</div>
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

  const choosenSlide = (index) => {
    setPrevSlideCount(slideCount);
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
    console.log({
      slideCount: slideCount,
      prevSlideCount: prevSlideCount,
    });
  }, [slideCount]);

  const componentMap = [<WebDevAndName />, <ComponentTwo />, <ComponentThree />];

  return (
    <div className="welcomeWrapper">
      <SlideTracker />

      <div className="textContainer">{componentMap[slideCount]}</div>
      <NavigationArrows />
    </div>
  );
};

export default Welcome;
