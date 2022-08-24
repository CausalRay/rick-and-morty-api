import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./characters.css";

// status color
// sorter
// more info, related results
// nav bar links

const Characters = () => {
  const [load, setLoad] = useState(true);
  const [char, setChar] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${id}`
      );
      setChar(data.results);
    }


    const timer = setTimeout(() => {
      fetchPost();
      setLoad(false);
    }, 300);

  }, []);


  return (
    <>
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
            <div key={index} id="characters" onClick={()=> window.location.href = `characterId/${user.id}`}>
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
