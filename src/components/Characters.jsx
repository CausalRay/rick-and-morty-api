import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import "./characters.css";
import Description from "./Description";

//Saving Id, state is one click away 
// status color
// sorter
// more info, related results
// nav bar links

const Characters = () => {
  const [load, setLoad] = useState(true);
  const [char, setChar] = useState([]);
  const [Id, setId] = useState();
  const testRef = useRef(0)
  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${id}`
      );
      setChar(data.results);
    }

     setTimeout(() => {
      fetchPost();
      setLoad(false);
    }, 300);

  }, []);

  function handleClick(user) {
    window.location.href = `characterId/${user.name}`
    setId(user.id)
  }

  useEffect(()=> {
    console.log(Id)
  },[Id])

  return (
    <>

    <Description Id={Id}/>

      {load
        ? new Array(12).fill(0).map((_, index) => (
            <div key={index} className="skeleton__state characters ">
              <span className="status skeleton__status">Alive</span>
              <div className="skeleton__image"></div>
              <div className="character__description skeleton_description">
                <div className="char__name skeleton__name">Rick</div>
                <div className="species skeleton__species">Human</div>
                <div className="last__seen skeleton__last--seen">
                  Last Seen: Earth
                </div>
              </div>
            </div>
          ))
        : char.slice(0, 12).map((user, index) => (
            <div key={index} id="characters" >
              <span className="status">{user.status}</span>
              <img src={user.image} alt="" />
              <div className="character__description">
                <div className="char__name">{user.name}</div>
              </div>
            </div>
          ))}
      
    </>
  );
};

export default Characters;
