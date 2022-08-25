import React, { useState } from "react";
import "./input.css";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Input = () => {
  const [searchValue, setSearchValue] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);

  function handleClick() {
    handleSearch();
  }

  function handleSearch() {
    searchValue && getData();
  }

  async function getData() {
    handleSpinner()
    try {
      const axiosData = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${searchValue.trim()}`
      );
      setErr(false);
      window.location.href = `${searchValue.trim()}`

    } catch {
      setErr(true);
      setLoad(false);
    }
  }

  function handleSpinner() {
    setLoad(true);
  }

  return (
    <div className="input">
      <input
        type="text"
        onKeyUp={(event) => event.key === "Enter" && handleSearch()}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Rick Sanchez"
        value={searchValue || ""}
      />
      {load ? (
        <FontAwesomeIcon icon="fa-solid fa-spinner" />
      ) : (
        <SearchIcon className="input__search--icon" onClick={() => handleClick()} />
      )}


        {
          err  && <div className="error__text schwifty"> Please try again! </div>
        }
      
    </div>
  );
};

export default Input;
