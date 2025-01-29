import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "./Search";
import "../../../css/header.css";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/", label: "Go to Home" },
    { name: "Movies", link: "/movies", label: "Go to Movies and Shows" },
    { name: "Genres", link: "/genres", label: "Go to Genres" },
    { name: "Liked movies", link: "/liked", label: "Go to Liked movies" },
  ];

  const smallButtons = [
    {
      Icon: IoSearch,
      altText: "Search",
      label: "Search",
      onClick: () => searchHandle(),
    },
    { Icon: FaRegBell, altText: "Notifications", label: "Notifications" },
  ];

  const searchHandle = () => {
    if (isSearchOpen === true) {
      setIsSearchOpen(false);
    } else {
      setIsSearchOpen(true);
    }
  }

  const headerBackground =
    location.pathname === "/" ? "transparent" : "rgba(0, 0, 0, 0.1)";
  const headerPosition = location.pathname === "/" ? "absolute" : "relative";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className="header"
      style={{ background: headerBackground, position: headerPosition }}
    >
      <Link to="/" className="logo" aria-label="Homepage">
        <img src="/logo.png" alt="Website logo" />
      </Link>

      <nav className="bigButtonContainer" aria-label="Main navigation">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.link} aria-label={link.label}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="smallButtonContainer">
        {smallButtons.map((button, index) => (
          <button
            key={index}
            aria-label={button.label}
            onClick={button.onClick}
          >
            <button.Icon fill="white" size={25} aria-hidden="true" />
          </button>
        ))}
      </div>

      {/* for mobile */}
      <div className="mobile-icon">
        <button aria-label="Open mobile menu" onClick={toggleMobileMenu}>
          <GiHamburgerMenu fill="white" size={30} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  aria-label={link.label}
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Search isOpen={isSearchOpen} />
    </header>
  );
}
