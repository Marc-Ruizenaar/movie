import React, { useState } from "react";
import "./Categories.css";
import "../HomePage.css";
import leftArrow from "../homePageImages/bigScreen/left-arrow.png";
import rightArrow from "../homePageImages/bigScreen/right-arrow.png";
import arrow from "../homePageImages/mobileImages/arrow.png";
import image14 from "../homePageImages/mobileImages/Image14.png";
import image15 from "../homePageImages/mobileImages/Image15.png";
import image10 from "../homePageImages/mobileImages/Image10.png";
import image11 from "../homePageImages/mobileImages/Image11.png";
import image12 from "../homePageImages/mobileImages/Image12.png";
import image13 from "../homePageImages/mobileImages/Image13.png";

const Categories = () => {

  return (
    <div className="categories">
      <div className="textScroll-bigScreen">
        <div className="textContainer">
          <h2 className="subtitle">Explore our wide variety of categories.</h2>
          <p className="smallWords">
            Discover the latest movies, TV shows, and more. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Harum ex minus, numquam
            dolor, unde nemo esse velit animi, expedita mollitia obcaecati
            soluta ducimus! Explicabo voluptatem enim nisi magnam quae placeat.
          </p>
        </div>
        <div className="scrollbar-bigScreen">
          <img src={leftArrow} alt="" />
          <div className="bar-big">
            <div className="checked-big"></div>
          </div>
          <img src={rightArrow} alt="" />
        </div>
      </div>
      <div className="categoriesContainer">
        <div className="categories-box-left categoriesBox">
          <div className="cardContainer">
            <div className="overlay"></div>
            <img className="card" src={image10} alt="" />
            <img className="card" src={image11} alt="" />
            <img className="card" src={image12} alt="" />
            <img className="card" src={image13} alt="" />
          </div>
          <div className="typeContainer">
            <p>Action</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="categories-box-right categoriesBox">
          <div className="cardContainer">
            <div className="overlay"></div>
            <img className="card" src={image14} alt="" />
            <img className="card" src={image12} alt="" />
            <img className="card" src={image15} alt="" />
            <img className="card" src={image11} alt="" />
          </div>
          <div className="typeContainer">
            <p>Adventure</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="categories-box1 categoriesBox">
          <div className="cardContainer">
            <div className="overlay"></div>
            <img className="card" src={image10} alt="" />
            <img className="card" src={image11} alt="" />
            <img className="card" src={image12} alt="" />
            <img className="card" src={image14} alt="" />
          </div>
          <div className="typeContainer">
            <p>Comedy</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="categories-box2 categoriesBox">
          <div className="cardContainer">
            <div className="overlay"></div>
            <img className="card" src={image15} alt="" />
            <img className="card" src={image11} alt="" />
            <img className="card" src={image13} alt="" />
            <img className="card" src={image10} alt="" />
          </div>
          <div className="typeContainer">
            <p>Drama</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="categories-box3 categoriesBox">
          <div className="cardContainer">
            <div className="overlay"></div>
            <img className="card" src={image13} alt="" />
            <img className="card" src={image11} alt="" />
            <img className="card" src={image14} alt="" />
            <img className="card" src={image15} alt="" />
          </div>
          <div className="typeContainer">
            <p>Horror</p>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
     
      <div className="scrollbar-mobile">
        <div className="checked"></div>
      </div>
    </div>
  );
};

export default Categories;
