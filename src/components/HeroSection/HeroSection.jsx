import React from "react";
import "./HeroSection.css";
import motors from "../../assets/3.png";

function HeroSection() {
  return (
    <div className="main-HeroSection">
      <p className="p-1">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.{" "}
      </p>
      <div className="main-motors">
        <img className="motors" src={motors} alt="motors" />
        <h4 className="img-para">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors{" "}
        </h4>
      </div>

      <div className="horizontal"></div>
    </div>
  );
}

export default HeroSection;
