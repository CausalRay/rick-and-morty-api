import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import "./info.css";
import Description from "../components/Description";

//https://rickandmortyapi.com/api/character/${props.characterId}

//Filter ID from page 1, if dont have go to next page, etc...
// Then map the correct data 
//skeleton loading

const Info = (props) => {
  const [charData, setCharData] = useState()
  const testRef = useRef(false)
  const number = 1

  
  useEffect(()=> {
    if (useRef.current) {
      async function fetchData() {
            const {data} = await axios.get(`https://rickandmortyapi.com/api/character/?page=${number}`)
            setCharData(data)
            console.log(charData)
            
          }
          fetchData()
    } 
    else {
      useRef.current = true
    }
  }, [useRef.current])



  return (
    <div className="info">
      <div className="container">
        <div className="row">
          <div className="info__wrapper">
            <div className="info__description--wrapper">
              <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" className="info__wallpaper" alt="" />

              <div className="info__description">
  
             {/* {     
             charData &&
             charData.filter((element) => element.id === props.characterId)
             .map((element, index)=> (
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
