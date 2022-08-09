import React from "react";
import "./about.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Button } from "@mui/material";
import rick from "../assets/rick.png";
import morty from "../assets/morty.png";
import jerry from "../assets/jerry.png";
import beth from "../assets/beth.png";
import summer from "../assets/summer.png";

const About = () => {
  return (
    <div id="About">
      <div className="about__container">
        <div className="row">
          <div className="about__wrapper">
            <div className="about__wrapper--left">
              <Button>
                <YouTubeIcon />
              </Button>
              <div className="about__description">
                <h2>
                  <span className="schwifty">Meet The Family</span>
                </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellat mollitia, ipsa deserunt explicabo, ad nostrum at
                  veniam excepturi laudantium aut tenetur numquam ducimus
                  inventore, nesciunt consectetur blanditiis quia eum ipsam.
                </p>
              </div>
            </div>

            <div className="about__wrapper--right">
              <img className="about__wrapper--img rick" src={rick} alt="" />
              <img className="about__wrapper--img morty" src={morty} alt="" />
              <img className="about__wrapper--img jerry" src={jerry} alt="" />
              <img className="about__wrapper--img beth" src={beth} alt="" />
              <img className="about__wrapper--img summer" src={summer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
