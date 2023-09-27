import React, { useState, useContext } from "react";
import "../../style/techStack/react/techStackMenu.css";

import { DataContext } from "../context/context";

import ReusableComponents from "./react/ReusableComponents";

function TechStackMenu() {
  const menuTitles = [
    "react and js",
    "Front-End Tools",
    "Back-End and Databases",
    "Package Managers",
    "Other Relevant Tools",
  ];
  const menuSubCategories = [
    ["reusable components", "hooks"],
    ["Node.js", "Firebase", "GitHub", "Jest"],
    ["MongoDB and SQL", "Stripe"],
    ["npm"],
    ["Webpack", "Babel", "ESLint", "Prettier"],
  ];

  const contentToRender = [
    [<ReusableComponents />, "hooks"],
    ["Node.js", "Firebase", "GitHub,", "Jest"],
    ["MongoDB and SQL", "Stripe"],
    ["npm"],
    ["Webpack", "Babel", "ESLint", "Prettier"],
  ];
  const [activeContentLocation, setActiveContentLoaction] = useState([0, 0]);
  const [activeMenuRecord, setActiveMenuRecord] = useState(0);
  const [activeSubMenuRecord, setActiveSubMenuRecord] = useState(0);

  const { setContent } = useContext(DataContext);
  const MenuList = () => {
    const openSubMenu = (index) => {
      let prevIndex = null;
      index !== prevIndex ? setActiveMenuRecord(index) : setActiveMenuRecord(0);
      prevIndex = index;
    };
    return (
      <div className="list">
        {Array.from({ length: menuTitles.length }, (_, index) => (
          <div
            key={index}
            className={`listItem ${index === activeMenuRecord ? "activeListItem" : ""}`}
            onClick={() => openSubMenu(index)}>
            {menuTitles[index]}
            <div>{activeMenuRecord === index && <MenuSubCategories />}</div>
          </div>
        ))}
      </div>
    );
  };

  const MenuSubCategories = () => {
    const chooseContent = (index) => {
      setActiveSubMenuRecord(index);
      setActiveContentLoaction([activeMenuRecord, index]);

      setContent(contentToRender[activeMenuRecord][index]);
      if (window.screen.width < 601) {
        setMenuOpen(false);
        setMenuButton("open");
      }
    };
    return (
      <div className="list">
        {Array.from({ length: menuSubCategories[activeMenuRecord].length }, (_, index) => (
          <div
            key={index}
            className={`listItem ${
              index === activeSubMenuRecord && activeContentLocation[0] === activeMenuRecord
                ? "activeListItem"
                : ""
            }`}
            onClick={() => chooseContent(index)}>
            {menuSubCategories[activeMenuRecord][index]}
          </div>
        ))}
      </div>
    );
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuButton, setMenuButton] = useState("open");

  const MenuButton = () => {
    const handleMenu = () => {
      const closeMenu = () => {
        setMenuOpen(false);
        setMenuButton("open");
      };
      const openMenu = () => {
        setMenuOpen(true);
        setMenuButton("close");
      };
      menuOpen ? closeMenu() : openMenu();
    };
    return (
      <button className={`menuButton ${menuOpen ? "menuButtonOpened" : ""}`} onClick={handleMenu}>
        {menuButton}
      </button>
    );
  };

  const OpenedMenu = () => {
    return (
      <div className="openMenuWrapper">
        <MenuButton />
        <MenuList />
      </div>
    );
  };

  const ClosedMenu = () => {
    return <MenuButton />;
  };

  return menuOpen ? <OpenedMenu /> : <ClosedMenu />;
}

export default TechStackMenu;
