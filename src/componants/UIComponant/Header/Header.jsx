import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../../assets/images/Logo.png";
import "../../../css/Header.css";

export default function Header() {
  const location = useLocation(); // Get the current location
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", link: "/", label: "Go to Home" },
    { name: "Movies", link: "/movies", label: "Go to Movies and Shows" },
    { name: "Genres", link: "/genres", label: "Go to Genres" },
    { name: "Liked movies", link: "/liked", label: "Go to Liked movies" }
  ];

  const smallButtons = [
    { Icon: IoSearch, altText: "Search", label: "Search" },
    { Icon: FaRegBell, altText: "Notifications", label: "Notifications" },
  ];

  // Determine the background color based on the current path
  const headerBackground = location.pathname === "/" ? "transparent" : "rgba(0, 0, 0, 0.8)";
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header" style={{ background: headerBackground }}>
      <Link to="/" className="logo" aria-label="Homepage">
        <img src={Logo} alt="Website logo" />
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
          <button key={index} aria-label={button.label}>
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
                <Link to={link.link} aria-label={link.label} onClick={toggleMobileMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}