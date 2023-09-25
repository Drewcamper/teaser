import React, { useState, useEffect } from "react";
import "../../style/techStack/techStack.css";
import "../../style/techStack/slideTracker.css";
import "../../style/techStack/title.css";

import ReactSlide from "../techStack/react/ReactSlide.js";

function TechStack() {
  const [slideCount, setSlideCount] = useState(0);
  const [prevSlideCount, setPrevSlideCount] = useState(0);
  const [arrowKeyUp, setArrowKeyUp] = useState(false);
  //mouse scrolling

  // const handleScroll = debounce((event) => {
  //   const scrollThreshold = .1; // Adjust this value to set the sensitivity

  //   if (Math.abs(event.deltaY) > scrollThreshold) {
  //     if (event.deltaY > 0) {
  //       // Scrolling down
  //       nextSlide();
  //       // Scrolling up
  //       previousSlide();
  //     }
  //   }
  // }, 100);

  // slide tracker titles
  //next button and key
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
    // window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keydown", handleKeyUp);
      // window.removeEventListener("wheel", handleScroll);
    };
  }, []);

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
  //slide tracker
  const SlideTracker = () => {
    const choosenSlide = (index) => {
      setPrevSlideCount(index - 1);
      setSlideCount(index);
    };
    return (
      <>
        <div className="slideTracker">
          {Array.from({ length: componentMap.length }, (_, index) => (
            <a
              key={index}
              onClick={() => choosenSlide(index)}
              className={`slides ${index === slideCount ? "choosenSlide" : "shrinkingSlide"}`}></a>
          ))}

          <Titles />
        </div>
      </>
    );
  };

  const TitleLandingPage = () => {
    return (
      <>
        <div className="webDevBackground">Landing page</div>
      </>
    );
  };
  const TitleUsedTools = () => {
    return <div className="titleUsedTools">TitleUsedTools</div>;
  };
  const TitleComponentThree = () => {
    return <div className="titleComponentThree">TitleComponentThree</div>;
  };
  const slideTitles = [<TitleLandingPage />, <TitleUsedTools />, <TitleComponentThree />];

  const Titles = () => {
    return (
      <>
        {Array.from({ length: componentMap.length }, (_, index) => (
          <div
            className={`slideTitle ${index === slideCount ? "highlighted" : ""}`}
            onClick={() => setSlideCount(index)}>
            {slideTitles[index]}
          </div>
        ))}
      </>
    );
  };
  const componentMap = [<ReactSlide />];

  const Components = () => {
    return <div>{componentMap[slideCount]}</div>;
  };

  return (
    <div className="techStackWrapper">
      <SlideTracker />
      <Components />
    </div>
  );
}

//debounce for scrolling

// Debounce function
// function debounce(func, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

export default TechStack;
