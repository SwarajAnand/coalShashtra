import React from "react";
import "./navbar.css";
import logo from "../../Images/coalshastra-logo-white.png";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

function Navbar() {
  return (
    <div className="navbarClass">
      <div className="navbarClassIcon">
        <div>{/* <DensityMediumIcon className="navbarIcon" /> */}</div>
        <div>
          <img className="navbarImage" src={logo} />
        </div>
      </div>
      <div className="navMenuData">
        <div className="navbarClassData">
          <a className="navbarClassDataLink" href="/">
            Home
          </a>
        </div>
        <div className="navbarClassData">
          <a className="navbarClassDataLink" href="/">
            My Listings
          </a>
        </div>
        <div className="navbarClassData">
          <a className="navbarClassDataLink" href="/">
            Markets
          </a>
        </div>
        <div className="navbarClassData">
          <a className="navbarClassDataLink" href="/">
            inbox
          </a>
        </div>
        <div className="navbarClassData">
          <a className="navbarClassDataLink" href="/">
            Brand Stores
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
