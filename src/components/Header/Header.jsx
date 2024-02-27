import React from "react";
import "./Header.css";
import trophy from "../../assets/1.png";

import reward from "../../assets/2.png";

function Header() {
  return (
    // container
    <div className="container">
      {/* left-component */}
      <div className="left-component">
        <img className="left-image" src={trophy} alt="trophy" />
      </div>
      {/* right-component */}
      <div className="right-component">
        <h4 className="para-1">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h4>
        <ul className="para-com">
          <li>
            {" "}
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            {" "}
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.{" "}
          </li>
        </ul>
        <img className="reward" src={reward} alt="reward" />
        <div className="last-para">
          Government of India has awarded the{" "}
          <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
          Joint Managing Director of C.R.I. Group received the award from Smt.
          Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
          Honorable Minister of State.
        </div>
      </div>
    </div>
  );
}

export default Header;
