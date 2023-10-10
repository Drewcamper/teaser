import React, { useState, useContext, useEffect, useRef } from "react";
import "../../style/techStack/techStackMenu.css";
import { DataContext } from "../context/context";

import ReusableComponents from "./react/ReusableComponents";
import Hooks from "./react/Hooks";

import Node from "./frontendTools/Node";
import Express from "./frontendTools/Express";
import Firebase from "./frontendTools/Firebase";
import Github from "./frontendTools/Github";
import Jest from "./frontendTools/Jest";

import DataBases from "./backendAndDB/DataBases";
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
    ["Node.js", "Express.js", "Firebase", "GitHub", "Jest"],
    ["Databases", "Stripe"],
    ["npm and yarn"],
    ["Webpack", "ESLint", "Prettier"],
  ];

  const contentToRender = [
    [<ReusableComponents />, <Hooks />],
    [<Node />, <Express />, <Firebase />, <Github />, <Jest />],
    [<DataBases />, <Stripe />],
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
    setMenuOpen(!menuOpen);
  };

  const MenuButton = () => {
    return (
      <div className="menu" onClick={toggleMenu}>
        <div className={menuOpen ? "open" : "bar"}></div>
        <div className={menuOpen ? "open" : "bar"}></div>
        <div className={menuOpen ? "open" : "bar"}></div>
      </div>
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
      <MenuList />
    </div>
 
  ) : (
    <MenuButton />
  );
}

export default TechStackMenu;
