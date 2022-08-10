import React, { useState } from "react";
import "./about.css";
import { IconButton } from "@mui/material";
import rick from "../assets/rick.png";
import morty from "../assets/morty.png";
import jerry from "../assets/jerry.png";
import beth from "../assets/beth.png";
import summer from "../assets/summer.png";
import CloseIcon from "@mui/icons-material/Close";

const About = () => {
  const [para, setPara] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState(false);

  function handleExit() {
    setDescription(false);
  }

  function handleClick(id) {
    setDescription(true);
    if (id === "rick") {
      setName(id)
      let text = <p className="description__para">  &nbsp; &nbsp;  Rick Sanchez is a megagenius scientist whose alcoholism and reckless, nihilistic behavior are sources of concern for his daughter's family, as well as the safety of their son, Morty. 
      <br /><br /> &nbsp; &nbsp;  As time has gone on, more has been revealed about his character, his backstory explaining much of his behaviour.At the same time, Rick has continuously committed more heinous acts, certifying him as the series anti-hero, bordering on antagonist  </p>
      setPara(text);
    }

    if (id === "morty") {
      setName(id)
        
        let text = <p className="description__para"> &nbsp; &nbsp;  Mortimer 'Morty' Smith Sr, is the grandson of Rick and is often forced to tag along on his various misadventures. Morty attends Harry Herpson High School along with his sister, Summer. At the beginning of the series, Morty was shown to be an incredibly anxious and submissive teenage boy. 
        <br/><br/> &nbsp; &nbsp;  However, after going on many so-called adventures with Rick, Morty has seemingly become more confident and his own person, independent from Rick, rather than a mere sidekick.</p>
      setPara(text);
    }

    if (id === "summer") {
      setName(id)
      let text = <p className="description__para"> &nbsp; &nbsp; Summer Smith currently acts as the older sister and the granddaughter of the Morty and Rick, respectively, from the Cronenberged Dimension and Dimension C-137. She is the only other known member of the the Smith Family to be aware of that fact. 
        <br /><br /> &nbsp; &nbsp;  As the series has progressed, Summer has become more frequently involved in Rick and Morty's adventures. She and Morty often squabble for Rick's affection, but also maintain a unique bond stemming from the revelation that Morty is not her original brother.</p>

      setPara(text);
    }

    if (id === "jerry") {
      setName(id)
      let text= 
      <p className="description__para"> &nbsp; &nbsp; Jerry Smith is the head of the Smith Family, however he is often noted as somewhat of a loser. He constantly attempts to find a career to no avail, leaving his wife Beth to be the breadwinner of the family.
        <br/><br/> &nbsp; &nbsp; Jerry's marriage to Beth is often rocky and unstable, resulting in the two finally getting a divorce in the Season 3 premiere. </p>

      setPara(text)
    }

    if (id === "beth") {
      setName(id)
      let text =  <p className="description__para"> &nbsp; &nbsp; Beth Smith is the daughter of Rick Sanchez and the wife of Jerry Smith.She also works as a veterinarian at the St. Equis Hospital. <br/><br/>
      &nbsp; &nbsp; Characterized by a superiority complex and abandonment issues, Beth gradually came to struggle with her husband over his contributions to their marriage, due in part to his lower-level position and subsequent employment, further driven by her father influencing her feelings of superiority.</p>

      setPara(text)
    }
  }

  return (
    <div id="About">
      <div className="about__container">
        <div className="row">
          <div className="about__wrapper">
            <div className="about__wrapper--left">
              <div className="about__description">
                <h2>
                  <span className="schwifty">Meet The Family</span>
                </h2>
                <p>
                  Click on the different icons below to get to know the Smiths!
                </p>
              </div>

              <div className="rotator__wrapper">
                <div className="rotator">
                  <img
                    className="about__wrapper--img rick"
                    src={rick}
                    alt=""
                    onClick={(id) => handleClick((id = "rick"))}
                  />

                  <img
                    className="about__wrapper--img morty"
                    src={morty}
                    alt=""
                    id="morty"
                    onClick={(id) => handleClick((id = "morty"))}
                  />

                  <img
                    className="about__wrapper--img jerry"
                    src={jerry}
                    alt=""
                    onClick={(id) => handleClick((id = "jerry"))}
                  />

                  <img
                    className="about__wrapper--img beth"
                    src={beth}
                    alt=""
                    onClick={(id) => handleClick((id = "beth"))}
                  />

                  <img
                    className="about__wrapper--img summer"
                    src={summer}
                    alt=""
                    onClick={(id) => handleClick((id = "summer"))}
                  />
                </div>
              </div>
            </div>

            <div className="about__wrapper--right">
              <div className="about__wrapper--description">
                <h2 className="schwifty">The Smith Family</h2>
                <p className="about__para">
                  &nbsp; &nbsp; The show revolves around the adventures of the members
                  of the Smith household, which consists of parents Jerry and
                  Beth, their children Summer and Morty, and Beth's father, Rick
                  Sanchez, who lives with them as a guest.
                  <br></br>
                  <br></br>
                  &nbsp; &nbsp; According to the Creator of the show, Justin Roiland,
                  the family lives outside of Seattle, Washington. The
                  adventures of Rick and Morty, however, take place across an
                  infinite number of realities, with the characters travelling
                  to other planets and dimensions through portals and Rick's
                  flying car.
                </p>

                <div
                  className={
                    description ? "hidden__modal popup" : "hidden__modal"
                  }
                >
                  <div className="cancel__wrapper">
                    <IconButton className="cancel" onClick={() => handleExit()}>
                      <CloseIcon />
                    </IconButton>
                  </div>

                  <div className="description__wrapper">
                    <h2 className="schwifty">{name}</h2>
                      
                        {para}
                        
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
