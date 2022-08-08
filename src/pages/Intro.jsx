import React from "react";
import "./intro.css";
import title from "../assets/Rick_and_Morty.svg.png";

const IntroPage = () => {
  return (
    <div id="IntroPage">
      <div className="intro__container container">
        <div className="row intropage__row">
          <div className="intropage__description">
            <img src={title} alt="" />
            <div className="intropage__para">
              Come meet all 826 characters from popular animated show, Rick And
              BUUUUUURRRRRPPPPPP Morty with this Search Engine. So what are you
              waiting for? Start diving into the Rick And Morty universe before
              the Federation catches you!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
