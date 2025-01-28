import React from "react";
import "../../../css/Categories.css";
import "../../../css/HomePage.css";

export default function Categories() {
  const categories = [
    {
      name: "Action",
      img: "./Container.png",
    },
    {
      name: "Adventure",
      img: "./Container.png",
    },
  ];

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
      </div>
      <div className="categoriesContainer">
        {categories.map((categorie) => (
          <div className="categories-box-left categoriesBox">
            <img src={categorie.img} />
            <div className="typeContainer">
              <p>{categorie.name}</p>
              <img src="./arrow.png" alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="scrollbar-mobile">
        <div className="checked"></div>
      </div>
    </div>
  );
}
