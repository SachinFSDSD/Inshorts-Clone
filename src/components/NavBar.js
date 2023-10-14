import React from "react";
import "./NavBar.css";
import HamburgerDrawer from "./HamburgerDrawer.js";

const NavBar = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"
        alt="#"
      ></img>
    </div>
  );
};

export default NavBar;
