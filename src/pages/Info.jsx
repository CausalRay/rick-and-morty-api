import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import "./info.css";
import Description from "../components/Description";
import Image from "../components/Image";

//https://rickandmortyapi.com/api/character/${props.characterId}

//Filter ID from page 1, if dont have go to next page, etc...
// Then map the correct data 
//skeleton loading

const Info = (props) => {
  const [charData, setCharData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  let {results} = charData
  
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
              
              <Image results={results} />
              

              <div className="info__description">
  
             <Description results={results}/>

                
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
