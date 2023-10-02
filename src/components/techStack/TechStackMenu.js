import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/techStack/techStackMenu.css";
import { DataContext } from "../context/context";

import ReusableComponents from "./react/ReusableComponents";
import Hooks from "./react/Hooks";

import Node from "./frontendTools/Node";
import Firebase from "./frontendTools/Firebase";
import Github from "./frontendTools/Github";
import Jest from "./frontendTools/Jest";

import MongodDbAndSQL from "./backendAndDB/MongodDbAndSQL.JS";
import Stripe from "./backendAndDB/Stripe";

import NpmAndYarn from "./packageManagers/NpmAndYarn";
import Webpack from "./otherTools/Webpack";
import ESLint from "./otherTools/ESLint";
import Prettier from "./otherTools/Prettier";

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
    ["npm and yarn"],
    ["Webpack", "ESLint", "Prettier"],
  ];

  const contentToRender = [
    [<ReusableComponents />, <Hooks />],
    [<Node />, <Firebase />, <Github />, <Jest />],
    [<MongodDbAndSQL />, <Stripe />],
    [<NpmAndYarn />],
    [<Webpack />, <ESLint />, <Prettier />],
  ];

  const [activeContentLocation, setActiveContentLocation] = useState([0, 0]);
  const [activeMenuRecord, setActiveMenuRecord] = useState(0);
  const [activeSubMenuRecord, setActiveSubMenuRecord] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const { setContent } = useContext(DataContext);

  const openSubMenu = (index) => {
    setActiveMenuRecord(index);
  };

  const chooseContent = (index) => {
    setActiveSubMenuRecord(index);
    setActiveContentLocation([activeMenuRecord, index]);
    setContent(contentToRender[activeMenuRecord][index]);
    setMenuOpen(false);
  };
  const toggleMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };
  const MenuButton = () => {
    return (
      <button className={`menuButton ${menuOpen ? "menuButtonOpened" : ""}`} onClick={toggleMenu}>
        {menuOpen ? "x" : "menu"}
      </button>
    );
  };

  const HomeButton = () => {
    const navigate = useNavigate();

    const navigateToMain = () => {
      navigate("/");
    };

    return (
      <button className="homeButton" onClick={navigateToMain}>
        home
      </button>
    );
  };

  const MenuList = () => (
    <div className="list">
      {menuTitles.map((title, index) => (
        <div
          key={index}
          className={`listItem ${index === activeMenuRecord ? "activeListItem" : ""}`}
          onClick={() => openSubMenu(index)}>
          {title}
          {index === activeMenuRecord && <MenuSubCategories />}
        </div>
      ))}
    </div>
  );

  const MenuSubCategories = () => (
    <div className="list">
      {menuSubCategories[activeMenuRecord].map((subCategory, index) => (
        <div
          key={index}
          className={`listItem ${
            index === activeSubMenuRecord && activeContentLocation[0] === activeMenuRecord
              ? "activeListItem"
              : ""
          }`}
          onClick={() => chooseContent(index)}>
          {subCategory}
        </div>
      ))}
    </div>
  );
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape" && !menuOpen) {
        event.preventDefault();
        setMenuOpen(false);
      }
      if (event.key === "Enter" && !menuOpen) {
        event.preventDefault();
        setMenuOpen(true);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    // 👇️ clean up event listener
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
  return menuOpen ? (
    <div className="openMenuWrapper">
      <MenuButton />
      {/* <HomeButton /> */}
      <MenuList />
    </div>
  ) : (
    <MenuButton />
  );
}

export default TechStackMenu;
