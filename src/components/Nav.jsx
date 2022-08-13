import React from "react";
import "./nav.css";
import Logo from "../assets/RT logo.png";
import { HashLink } from "react-router-hash-link";

const Nav = (props) => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="row">
          <div className="nav__wrapper">
            <img src={Logo} alt="logo" />

            <div className="nav__wrapper--links">
              <div className="nav__wrapper--links">

              <HashLink className="link" to="/">
                Home
                </HashLink>

              {
                props.firstTo &&
                <HashLink className="link" to={props.firstTo}>
                {props.firstText}
                </HashLink>
              }
              
                <HashLink className="link" to={props.secondTo} smooth>
                  {props.secondText}
                </HashLink>
                <HashLink className="link" to={props.thirdTo} smooth>
                  {props.thirdText}
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
