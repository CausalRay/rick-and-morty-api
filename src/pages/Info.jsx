import axios from "axios";
import React, { useEffect, useState } from "react";
import "./info.css";
import Description from "../components/Description";

//https://rickandmortyapi.com/api/character/${props.characterId}

// State issues > Usestate([]) is occuring first, useeffect second. 
//skeleton loading

const Info = (props) => {
  const [charData, setCharData] = useState([])
  const [test, setTest] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${props.characterId}`)
      setCharData(data)
    }

    fetchData()
  },[]);

  useEffect(()=> {
    if(charData.length > 0) {
      setTest(charData)
      console.log(test)
    }
  }, [charData])

  
  
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
