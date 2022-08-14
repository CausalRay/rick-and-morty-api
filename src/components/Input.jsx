import React, { useState } from "react";
import "./input.css";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// https://rickandmortyapi.com/api/character/?name={searchValue}

const Input = (props) => {
  const [searchValue, setSearchValue] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    handleSearch();
  }

  function handleSearch() {
    searchValue && getData();
  }

  async function getData() {
    try {
      const axiosData = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${searchValue.trim()}`
      );
      setErr(false);
      handleSpinner();
      navigate("/Filter", { replace: false });

    } catch (error) {
      handleSpinner();
      setErr(true);
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
        <SearchIcon onClick={() => handleClick()} />
      )}


        {
          { props } ? err && <div className="new__err schwifty"> Please try again! </div>
          :
          err  && <div className="error__text schwifty"> Please try again! </div>
        }
      
    </div>
  );
};

export default Input;
