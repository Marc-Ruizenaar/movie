import React from "react";
import "../../../css/Footer.css";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const SubContainer = ({ title, links }) => {
  return (
    <div className="subContainer">
      <div className="subHead">{title}</div>
      <div className="subLinksContainer">
        {links.map((link, index) => (
          <div key={index} className="subLink">
            {link}
          </div>
        ))}
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="imgLinkContainer">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoFacebook size={30} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default function Footer() {
  return (
    <div className="footer">
      <div className="pageNavContainer">
        <SubContainer
          title="Home"
          links={["Categories", "Devices", "Pricing", "FAQ"]}
        />
        <SubContainer
          title="Movies"
          links={["Genres", "Trending", "New Releases", "Popular"]}
        />
        <SubContainer
          title="Shows"
          links={["Genres", "Trending", "New Releases", "Popular"]}
        />
        <SubContainer title="Support" links={["Contact Us"]} />
        <SubContainer title="Subscription" links={["Plans", "Features"]} />
        <div className="subContainer">
          <div className="subHead">Connect With Us</div>
          <SocialLinks />
        </div>
      </div>
      <div className="line"></div>
      <div className="copyrightContainer">
        <div className="copyright">@2025 streamvib, All Rights Reserved</div>
        <div className="policyContainer">
          <div className="policyLink">Terms of Use</div>
          <div className="policyLink">Privacy Policy</div>
          <div className="policyLink">Cookie Policy</div>
        </div>
      </div>
    </div>
  );
}
