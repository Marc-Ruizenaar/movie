import React from "react";
import { NavLink } from "react-router-dom";

const MyNavLink = (props) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
      {...props}
    />
  );
};

export default MyNavLink;