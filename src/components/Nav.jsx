import React from "react";
import "./nav.css";
import Logo from "../assets/RT logo.png";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

const Nav = (props) => {
const navigate = useNavigate()

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

                {props.firstTo && (
                  <HashLink className="link" to={props.firstTo}>
                    {props.firstText}
                  </HashLink>
                )}

                {props.secondTo ? (
                  <>
                    <HashLink className="link" to={props.secondTo} smooth>
                      {props.secondText}
                    </HashLink>
                    <HashLink className="link" to={props.thirdTo} smooth>
                      {props.thirdText}
                    </HashLink>
                  </>
                ) : (
                  <>
                    <div className="link" onClick={()=> navigate(-1)}>
                      {props.backText}
                    </div>

                    <HashLink className="link" to={props.recTo} smooth>
                      {props.recText}
                    </HashLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
