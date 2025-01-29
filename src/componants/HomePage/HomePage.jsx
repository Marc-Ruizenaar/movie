import Genres from "./Genres/Genres";
import Devices from "./Devices/Devices";
import QandA from "./QandA/QandA";
import Community from "./Community/Community";
import Footer from "../UIComponant/Footer/Footer";
import "../../css/HomePage.css";
import React from "react";
import Header from "../UIComponant/Header/Header";
import JumboHeaderHome from "./JumboHeader/JumboHeader";

export default function HomePage() {
  return (
    <div className="homePage">
      <Header />
      <JumboHeaderHome />
      <Genres amount="5" />
      <Devices />
      <QandA />
      <Community />
      <Footer />
    </div>
  );
}
