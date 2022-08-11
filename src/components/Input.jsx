import React, { useState } from 'react';
import "./input.css"
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Input = () => {
  const [searchValue, setSearchValue] = useState()
  const [load, setLoad] = useState(false)
  
  function handleClick() {
    handleSearch()
  }

  function handleSearch() {
    searchValue ? searchValue.length > 0 && console.log("insert axios fn") : console.log("insert try again fn")
    handleSpinner()
  }

 function handleSpinner(){
  // insert conditionals here to prevent anyhow-ing triggering load
  setLoad(true)
}

    return (
        <div className="input">
        <input
          type="text"
          onKeyUp={(event) => event.key === "Enter" && handleSearch()}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Rick Sanchez, Human, C137"
          value = {searchValue || ""}
        />
        {
          load ? 
          <FontAwesomeIcon icon="fa-solid fa-spinner" />
          :
          <SearchIcon onClick={() => handleClick()}/>
        }
      </div>
    );
}

export default Input;
