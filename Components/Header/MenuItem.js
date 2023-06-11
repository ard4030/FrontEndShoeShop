"use client"
import React, { useState } from "react";
import SubMenuItem from "./SubMenuItem";

const MenuItem = ({ title, subMenuItems = [] }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href="#">{title}</a>
      {showSubMenu && (
        <ul>
          {subMenuItems.map((subMenuItem, index) => (
            <SubMenuItem key={index} title={subMenuItem.title} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;