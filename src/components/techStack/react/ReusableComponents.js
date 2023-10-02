import React from "react";
import "../../../style/techStack/react/reusableComponents.css";

const ReusableComponents = () => {
  return (
    <>
      <div>
        <div>
          JSX is a syntax extension for JavaScript that allows you to write HTML-like code within
          your JavaScript files. It makes it easier to describe what the UI should look like and is
          used to define the structure of React components.
        </div>
        <div>
          Imagine you're building a simple web application that displays a list of articles. Each
          article has a title, author, and content. Without using reusable components, you might
          write the HTML and JavaScript for this task in plain JavaScript like this:
        </div>
      </div>
      <iframe
        src="https://codesandbox.io/embed/reusable-rsy7d8?fontsize=14&hidenavigation=1&theme=dark&view=editor"
        className="reusableHtml"
        title="reusable "
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

      <iframe
        src="https://codesandbox.io/embed/zen-wildflower-5p6wqv?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=editor"
        className="reusableReact"
        title="zen-wildflower-5p6wqv"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
    </>
  );
};

export default ReusableComponents;
