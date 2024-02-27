import React from "react";
import "./Logo.css";
import logo from "../../assets/logo.png";
function Logo() {
  return (
    <div className="main-logo">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
