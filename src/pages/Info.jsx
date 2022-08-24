import axios from "axios";
import React, { useEffect, useState } from "react";
import "./info.css";
import Description from "../components/Description";

//https://rickandmortyapi.com/api/character/{charId}

// State issues > Usestate([]) is occuring first, useeffect second. 
//skeleton loading

const Info = (props) => {
  
  useEffect(() => {
    async function fetchinfo() {
      const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${props.characterId}`)
      setCharData(data)
      console.log(charData)
    }
    
    fetchinfo();
    
  }, []);
  
  const [charData, setCharData] = useState([])
  
  return (
    <div className="info">
      <div className="container">
        <div className="row">
          <div className="info__wrapper">
            <div className="info__description--wrapper">
              <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" className="info__wallpaper" alt="" />

              <div className="info__description">

                 
                {/* { 
                  charData.map((element, index)=> (
                  <Description key={index}
                name= {element.name}
                status= {element.status}
                species={element.species}
                type={element.type}
                gender= {element.gender}
                home_planet={element.origin}
                last_seen={element.location.name}
                dimension="Dimension C-137"
                />
                  ))
                } */}
                
              </div>
            </div>
            <div id="Recommended">Related Searches</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
