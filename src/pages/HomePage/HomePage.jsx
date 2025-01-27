import TopImages from "./TopImages/TopImages";
import Categories from "./Categories/Categories";
import Devices from "./Devices/Devices";
import QandA from "./QandA/QandA";
import StartTrail from "./StartTrail/StartTrail";
import Footer from "./Footer/Footer";
import "./HomePage.css";
import MyNavLink from "../../componants/MyNavLink/MyNavLink";
import { BrowserRouter as Router, Routes, Route, outlet } from "react-router";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  return (
    <div className="homePage">
      <TopImages />
      <Categories />
      <Devices />
      <QandA />
      <StartTrail />
      <Footer />
    </div>
  );
};

export default HomePage;
