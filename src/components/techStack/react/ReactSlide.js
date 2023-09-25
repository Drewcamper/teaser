import React, { useState, useEffect } from "react";
import "../../../style/react/reactSlide.css";

function ReactSlide() {
  const ReusableComponents = () => {
    return <></>;
  };
  const [indexTracker, setIndexTracker] = useState(0);
  const [contentToRender, setContentToRender] = useState(<ReusableComponents />);
  const listToRender = ['reusable components', 'hooks'];

  useEffect(() => {
    setContentToRender(listToRender[indexTracker]);
  }, [indexTracker]);

  const List = () => {
    return (
      <div className="list">
        {Array.from({ length: listToRender.length }, (_, index) => (
          <div onClick={() => setIndexTracker(index)}>{listToRender[index]}</div>
        ))}
      </div>
    );
  };
  const Content = () => {
    return <div className="content">{contentToRender}</div>;
  };
  const Table = () => {
    return (
      <div className="tableWrapper">
        <List />
        <Content />
      </div>
    );
  };

  return (
    <>
      <Table />
    </>
  );
}

export default ReactSlide;
