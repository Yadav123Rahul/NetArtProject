import React from "react";
import "./Footer.css";
import { CiFacebook } from "react-icons/ci";
import { MdDialerSip } from "react-icons/md";
import { GiWorld } from "react-icons/gi";

function Footer() {
  return (
    // footer
    <div className="Footer">
      <h3 className="head-footer">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </h3>
      {/* footer para */}
      <h5 className="footer-para">
        CHEMICALS & PROCESS<span className="line"></span> POWER
        <span className="line"></span> WATER & WASTE WATER
        <span className="line"></span> OILS & GAS<span className="line"></span>
        PHARMA<span className="line"></span> SUGARS & DISTILLERIES
        <span className="line"></span> PAPER & PULP
        <span className="line"></span> MARINE & DEFENCE
        <span className="line"></span> METAL & MINING
        <span className="line"></span> FOOD & BEVERAGE
        <span className="line"></span>
        PETROCHEMICAL & REFINERIES
        <span className="line"></span> SOLAR<span className="line"></span>
        BUILDING<span className="line"></span> HVAC
        <span className="line"></span> FIRE FIGHTING
        <span className="line"></span> AGRICULTURE & RESIDENTIAL
      </h5>
      {/* final footer */}
      <div className="final-footer">
        <div className="footer-para2">
          <span>
            <i class="fa-solid fa-phone"></i>
          </span>

          <p>Toll free 1800 200 1234</p>
        </div>
        <div className="footer-para2">
          <span>
            <i class="fa-brands fa-facebook"></i>
          </span>

          <p>www.facebook.com/cripumps</p>
        </div>
        <div className="footer-para2">
          <span>
            <i class="fa-solid fa-globe"></i>
          </span>

          <p>www.crigroups.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
