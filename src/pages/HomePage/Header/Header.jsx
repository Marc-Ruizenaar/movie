import React from "react";
import "./Header.css";
import menu from "../../../assets/icons/menu.png";
import vector from "../../../assets/images/vector.png";
import streamVibeBig from "../../../assets/images/streamVibeBig.png";
import streamVibe from "../../../assets/images/streamVibe.png";
import bell from "../../../assets/icons/bell.png";
import search from "../../../assets/icons/search.png";

const Header = () => {
  return (
    <div className="header ">
      <div className="logo">
        <img className="vector" src={vector} alt="vector" />
        <img className="streamVibe" src={streamVibe} alt="streamVibe" />
        <img className="streamVibeBig" src={streamVibeBig} alt="streamVibeBig" />
      </div>
      {/* for desktop */}
      <div className="bigButtonContainer">
        <ul>
          <li style={{ fontFamily: "'Manrope', sans-serif" }}>Home</li>
          <li>Movies&Shows</li>
          <li>Support</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div className="smallButtonContainer">
        <img src={search} alt="search" />
        <img src={bell} alt="bell" />
      </div>

      {/* for mobile */}
      <div className="mobile-icon">
        <img src={menu} alt="menu" />
      </div>
    </div>
  );
};

export default Header;
