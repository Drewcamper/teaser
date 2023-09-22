// import React, { useState, useEffect } from "react";
// import "../../style/welcome/welcome.css";
// import "../../style/welcome/arrow.css";
// import "../../style/welcome/slideTracker.css";

// import WebDevAndName from "./WebDevAndName";
// import UsedTools from "../usedTools/UsedTools";
// import ComponentThree from "./ComponentThree";

// const Welcome = () => {
//   const [slideCount, setSlideCount] = useState(0);
//   const [prevSlideCount, setPrevSlideCount] = useState(0);
//   const [arrowKeyUp, setArrowKeyUp] = useState(false);

//   // useEffect(() => {
//   //   const waitingTime = 5000;
//   //   const interval = setInterval(() => {
//   //     setSlideCount((prevSlideCount) =>
//   //       prevSlideCount === componentMap.length - 1 ? 0 : prevSlideCount + 1
//   //     );
//   //   }, waitingTime);
//   //   return () => {
//   //     clearInterval(interval);
//   //   };
//   // }, [slideCount]);

//   const nextSlide = () => {
//     setArrowKeyUp(false);
//     if (slideCount !== componentMap.length - 1) setSlideCount((prev) => prev + 1);
//   };

//   const previousSlide = () => {
//     setArrowKeyUp(true);
//     if (slideCount >= 0) setSlideCount((prev) => prev - 1);
//   };

//   const handleKeyDown = (event) => {
//     if (event.keyCode === 40) {
//       nextSlide();
//     }
//   };
//   const handleKeyUp = (event) => {
//     if (event.keyCode === 38) {
//       previousSlide();
//     }
//   };
//   const handleScroll = (event) => {
//     const scrollThreshold = 50;

//     if (Math.abs(event.deltaY) > scrollThreshold) {
//       setTimeout(() => {
//         if (event.deltaY > 0) {
//           nextSlide();
//         } else {
//           previousSlide();
//         }
//       }, 100);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keydown", handleKeyUp);
//     window.addEventListener("wheel", handleScroll);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keydown", handleKeyUp);
//       window.removeEventListener("wheel", handleScroll);
//     };
//   }, []);

//   const NavigationArrows = () => {
//     return (
//       <>
//         <div className="arrowButtonContainer next">
//           <button className="arrow down" onClick={nextSlide}></button>
//         </div>

//         <div className="arrowButtonContainer previous">
//           <button className="arrow up" onClick={previousSlide}></button>
//         </div>
//       </>
//     );
//   };

//   const choosenSlide = (index) => {
//     setPrevSlideCount(index - 1);
//     setSlideCount(index);
//   };

//   const SlideTracker = () => {
//     return (
//       <div className="slideTracker">
//         {Array.from({ length: componentMap.length }, (_, index) => (
//           <a
//             key={index}
//             onClick={() => choosenSlide(index)}
//             className={`slides ${
//               index === slideCount
//                 ? "choosenSlide"
//                 : index === prevSlideCount
//                 ? "shrinkingSlide"
//                 : "normalSlide"
//             }`}></a>
//         ))}
//       </div>
//     );
//   };
//   useEffect(() => {
//     if (slideCount === componentMap.length) {
//       setSlideCount(0);
//     }
//     if (slideCount < 0 && arrowKeyUp) {
//       setSlideCount(componentMap.length - 1);
//     }

//     console.log({
//       slideCount: slideCount,
//       prevSlideCount: prevSlideCount,
//     });
//   }, [slideCount, prevSlideCount]);

//   const componentMap = [<WebDevAndName />, <UsedTools />, <ComponentThree />];

//   return (
//     <div className="welcomeWrapper">
//       <SlideTracker />
//       <div className="textContainer">{componentMap[slideCount]}</div>
//       slide count: {slideCount}
//       componentMap lenthg: {componentMap.length - 1}
//       <NavigationArrows />
//     </div>
//   );
// };

// export default Welcome;

import React, { useState, useEffect } from "react";
import "../../style/welcome/welcome.css";
import "../../style/welcome/arrow.css";
import "../../style/welcome/slideTracker.css";

import WebDevAndName from "./WebDevAndName";
import TitleWebDevAndName from "./TitleWebDevAndName";
import UsedTools from "../usedTools/UsedTools";
import TitleUsedTools from "../usedTools/TitleUsedTools";
import ComponentThree from "../ComponentThree/ComponentThree";
import TitleComponentThree from "../ComponentThree/TitleComponentThree";

const Welcome = () => {
  const [slideCount, setSlideCount] = useState(0);
  const [prevSlideCount, setPrevSlideCount] = useState(0);
  const [arrowKeyUp, setArrowKeyUp] = useState(false);
  const [showSlideTitle, setShowSlideTitle] = useState(false);

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

  const NavigationArrows = () => {
    return (
      <>
        <div className="arrowButtonContainer next">
          <button className="arrow down" onClick={nextSlide}></button>
        </div>

        <div className="arrowButtonContainer previous">
          <button className="arrow up" onClick={previousSlide}></button>
        </div>
      </>
    );
  };

  const choosenSlide = (index) => {
    setPrevSlideCount(index - 1);
    setSlideCount(index);
  };
  const handleMouseEnter = () => {
    setShowSlideTitle(true); // Show the SlideTitle component on mouse enter
  };

  const handleMouseLeave = () => {
    setShowSlideTitle(false); // Hide the SlideTitle component on mouse leave
  };

  const SlideTitle = () => {
    return <>{slideTitles[slideCount]}</>;
  };
  const SlideTracker = () => {
    return (
      <div className="slideTracker">
        {Array.from({ length: componentMap.length }, (_, index) => (
          <a
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
  const slideTitles = [<TitleWebDevAndName />, <TitleUsedTools />, <TitleComponentThree />];
  return (
    <div className="welcomeWrapper">
      <SlideTracker />
      {showSlideTitle && <SlideTitle />}
      <div className="textContainer">{componentMap[slideCount]}</div>

      <NavigationArrows />
    </div>
  );
};

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

export default Welcome;
