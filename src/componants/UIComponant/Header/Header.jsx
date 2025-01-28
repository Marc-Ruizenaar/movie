import React from "react";
import "../../../css/Header.css";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const navLinks = [
    { name: "Home", link: "/", label: "Go to Home" },
    { name: "Movies", link: "/movies", label: "Go to Movies and Shows" },
    { name: "Liked movies", link: "/liked", label: "Go to Liked movies" }
  ];

  const smallButtons = [
    { Icon: IoSearch, altText: "Search", label: "Search" },
    { Icon: FaRegBell, altText: "Notifications", label: "Notifications" },
  ];

  return (
    <header className="header">
      <a href="/" className="logo" aria-label="Homepage">
        <img src="./Logo.png" alt="Website logo" />
      </a>

      <nav className="bigButtonContainer" aria-label="Main navigation">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.link} aria-label={link.label}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="smallButtonContainer">
        {smallButtons.map((button, index) => (
          <button key={index} aria-label={button.label}>
            <button.Icon fill="white" size={25} aria-hidden="true" />
          </button>
        ))}
      </div>

      {/* for mobile */}
      <div className="mobile-icon">
        <button aria-label="Open mobile menu">
          <GiHamburgerMenu fill="white" size={30} />
        </button>
      </div>
    </header>
  );
}
