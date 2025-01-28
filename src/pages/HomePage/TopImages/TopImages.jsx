import React from "react";
import "./TopImages.css";
import "../HomePage.css";
import Header from "../Header/Header";
import image1 from "../homePageImages/mobileImages/image1.png";
import image2 from "../homePageImages/mobileImages/image2.png";
import image3 from "../homePageImages/mobileImages/image3.png";
import image4 from "../homePageImages/mobileImages/image4.png";
import image5 from "../homePageImages/mobileImages/image5.png";
import image6 from "../homePageImages/mobileImages/image6.png";
import image7 from "../homePageImages/mobileImages/image7.png";
import image8 from "../homePageImages/mobileImages/image8.png";
import image9 from "../homePageImages/mobileImages/image9.png";
import image10 from "../homePageImages/mobileImages/Image10.png";
import image11 from "../homePageImages/mobileImages/Image11.png";
import image12 from "../homePageImages/mobileImages/Image12.png";
import image13 from "../homePageImages/mobileImages/Image13.png";
import image14 from "../homePageImages/mobileImages/Image14.png";
import image15 from "../homePageImages/mobileImages/Image15.png";
import image16 from "../homePageImages/mobileImages/Imaget1.png";
import image17 from "../homePageImages/mobileImages/Imaget2.png";
import image18 from "../homePageImages/mobileImages/Imaget3.png";
import image21 from "../homePageImages/mobileImages/Imaget4.png";
import image19 from "../homePageImages/mobileImages/imagebottom2.png";
import image20 from "../homePageImages/mobileImages/imagebottom3.png";
import abstract from "../homePageImages/mobileImages/abstract.png";
import btnStart from "../homePageImages/mobileImages/btn-start.png";
const TopImages = () => {
  

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];
  return (
    <div className="top-imagesContent-container ">
      <Header />
      <div className="overlay"></div>
      <div className="top-images-container">
        <img className="abstract-mobile" src={abstract} alt="abstract-icon" />
        <div className="textContainer">
          <p className="heading">The Best Streaming Experience</p>
          <p className="paragraph smallWords">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere.
          </p>
        </div>
        <div className="grid-container">
          {images.map((image, index) => (
            <div
              key={index}
              className="grid-item"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>

       
      </div>
      <button>
        <img src={btnStart} alt="" />
        <p>Start Watching Now</p>
      </button>
    </div>
  );
};

export default TopImages;
