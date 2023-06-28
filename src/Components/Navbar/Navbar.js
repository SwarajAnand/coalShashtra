import React from "react";
import "./navbar.css";
import logo from "../../Images/coalshastra-logo-white.png";

function Navbar() {
  return (
    <div className="navbarClass">
      <div>
        <img src={logo} />
      </div>
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
      <div className="navbarClassData">
        <i class="fi fi-br-menu-burger"></i>
      </div>
    </div>
  );
}

export default Navbar;
