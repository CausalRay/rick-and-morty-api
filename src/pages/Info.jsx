import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import "./info.css";
import Description from "../components/Description";

//https://rickandmortyapi.com/api/character/${props.characterId}

//Filter ID from page 1, if dont have go to next page, etc...
// Then map the correct data 
//skeleton loading

const Info = (props) => {
  const [charData, setCharData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const testRef = useRef(false)
  let {info, results} = charData
  
  console.log(props.charId)
  console.log(results)
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${props.charId}`

  useEffect(()=> {
     
      (async function () {
            let data = await fetch(api).then((res)=> res.json())
            setCharData(data)
            
          })()
        }, [api])
        



  return (
    <div className="info">
      <div className="container">
        <div className="row">
          <div className="info__wrapper">
            <div className="info__description--wrapper">
              <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" className="info__wallpaper" alt="" />

              <div className="info__description">
  
             {     
             results && 
             results.map((element, index)=> (
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
              }

                
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
