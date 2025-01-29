import React from "react";
import "../../../css/Devices.css";
import "../../../css/HomePage.css";

export default function Devices() {
  const devices = [
    {
      id: 1,
      name: "Smartphones",
      image: "Smartphones.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi sit similique quaerat voluptatum cum asperiores deleniti perspiciatis soluta ad nam nulla dolore minus, fugiat optio recusandae maiores aspernatur ratione",
    },
    {
      id: 2,
      name: "Tablet",
      image: "Tablet.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi sit similique quaerat voluptatum cum asperiores deleniti perspiciatis soluta ad nam nulla dolore minus, fugiat optio recusandae maiores aspernatur ratione",
    },
    {
      id: 3,
      name: "Smart IV",
      image: "Smart-IV.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi sit similique quaerat voluptatum cum asperiores deleniti perspiciatis soluta ad nam nulla dolore minus, fugiat optio recusandae maiores aspernatur ratione",
    },
    {
      id: 4,
      name: "Laptops",
      image: "Laptops.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi sit similique quaerat voluptatum cum asperiores deleniti perspiciatis soluta ad nam nulla dolore minus, fugiat optio recusandae maiores aspernatur ratione",
    },
    {
      id: 5,
      name: "Gaming Consoles",
      image: "Gaming-Consoles.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi sit similique quaerat voluptatum cum asperiores deleniti perspiciatis soluta ad nam nulla dolore minus, fugiat optio recusandae maiores aspernatur ratione",
    },
    {
      id: 6,
      name: "VR",
      image: "VR.png",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi modi sit similique quaerat voluptatum cum asperiores deleniti perspiciatis soluta ad nam nulla dolore minus, fugiat optio recusandae maiores aspernatur ratione",
    },
  ];
  return (
    <div className="devicesContainer">
      <div className="devicesHead">
        <h2 className="subtitle">
          We Provide you with the best experience across various devices.
        </h2>
        <p className="smallWords">
          With StreamVibe, you can find your favorite movies anytime.
        </p>
      </div>
      <div className="cardContainer">
        {devices.map((device) => (
          <div key={device.id} className="deviceCard ">
            <div className="thirdTitle cardTitle">
              <div className="imgBox">
                <img
                  src={`./${device.image}`}
                  alt={device.name}
                />
              </div>
              <h3>{device.name}</h3>
            </div>
            <p className="smallWords">{device.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
