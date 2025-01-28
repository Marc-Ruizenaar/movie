import React from "react";
import "./StartTrail.css";
import "../HomePage.css";
import imageT1 from "../homePageImages/mobileImages/Imaget1.png";
import imageT2 from "../homePageImages/mobileImages/Imaget2.png";
import imageT3 from "../homePageImages/mobileImages/Imaget3.png";
import imageT4 from "../homePageImages/mobileImages/Imaget4.png";
import imageT5 from "../homePageImages/mobileImages/Imaget5.png";
import imageT6 from "../homePageImages/mobileImages/Imaget6.png";
const StartTrail = () => {
  const images = [
    imageT1,
    imageT2,
    imageT3,
    imageT4,
    imageT5,
    imageT6,
    imageT1,
    imageT2,
    imageT3,
    imageT4,
    imageT5,
    imageT6,
    imageT1,
    imageT2,
    imageT3,
    imageT4,
    imageT5,
    imageT6,
    imageT1,
    imageT2,
    imageT3,
    imageT4,
    imageT5,
    imageT6,
    imageT1,
    imageT2,
    imageT3,
    imageT4,
    imageT5,
    imageT6,
    imageT1,
    imageT2,
    imageT3,
    imageT4,
    imageT5,
    imageT6,
    imageT1,
    imageT2,
    imageT3,
    imageT4,
    imageT5,
    imageT6,
  ];
  return (
    <div className="startTrail">
      <div className="text">
        <div className="text-head subtitle">Join our community now</div>
        <p className="smallWords">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eum
          rerum minima sequi explicabo unde adipisci voluptas
        </p>
      </div>
      <button>
        <p>Start a Free Trail</p>
      </button>
      <div className="grid-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="grid-item"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default StartTrail;
