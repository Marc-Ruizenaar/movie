import React from "react";
import "./Footer.css";
import twitter from "../../../assets/icons/twitter.png";
import linkedln from "../../../assets/icons/linkedln.png";
import facebook from "../../../assets/icons/facebook.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="pageNavContainer">
        <div className="subContainer">
          <div className="subHead">Home</div>
          <div className="subLinksContainer">
            <div className="subLink">Categories</div>
            <div className="subLink">Devices</div>
            <div className="subLink">Pricing</div>
            <div className="subLink">FAQ</div>
          </div>
        </div>
        <div className="subContainer">
          <div className="subHead">Movies</div>
          <div className="subLinksContainer">
            <div className="subLink">Gernes</div>
            <div className="subLink">Trending</div>
            <div className="subLink">New Release</div>
            <div className="subLink">Popular</div>
          </div>
        </div>
        <div className="subContainer">
          <div className="subHead">Shows</div>
          <div className="subLinksContainer">
            <div className="subLink">Gernes</div>
            <div className="subLink">Trending</div>
            <div className="subLink">New Release</div>
            <div className="subLink">Popular</div>
          </div>
        </div>
        <div className="subContainer">
          <div className="subHead">Support</div>
          <div className="subLinksContainer">
            <div className="subLink">Contact Us</div>
          </div>
        </div>
        <div className="subContainer">
          <div className="subHead">Subscription</div>
          <div className="subLinksContainer">
            <div className="subLink">Plans</div>
            <div className="subLink">Features</div>
          </div>
        </div>
        <div className="subContainer">
          <div className="subHead">Connect With Us</div>
          <ul className="imgLinkContainer">
            <li >
              <img className="imgLink" src={facebook} alt="facebook" />
            </li>
            <li>
              <img className="imgLink" src={twitter} alt="twitter" />
            </li>
            <li>
              <img className="imgLink" src={linkedln} alt="linkedln" />
            </li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <div className="copyrightContainer">
        <div className="copyright">@2023streamvib,All Rights Reserved</div>
        <div className="policyContainer">
          <div className="policyLink policyLink1">Terms of Use</div>
          <div className="policyLink">Privacy Policy</div>
          <div className="policyLink policyLink3">Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
