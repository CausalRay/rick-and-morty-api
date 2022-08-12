import React, { useState } from 'react';
import "./input.css"
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
// https://rickandmortyapi.com/api/character/?name={searchValue}

const Input = () => {
  const [searchValue, setSearchValue] = useState()
  const [load, setLoad] = useState(false)
  


  function handleClick() {
    handleSearch()
  }



  function handleSearch() {
    // insert empty string error handling
    searchValue && getData()
  }  


  
  
  async function getData() {
    try {
    const axiosData = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchValue.trim()}`)
    console.log(axiosData.data)
    handleSpinner()

    }catch(error) {
      // insert error handling
      console.log("fail")
      handleSpinner()
    }
}

 function handleSpinner(){
  setLoad(true)
}

    return (
        <div className="input">
        <input
          type="text"
          onKeyUp={(event) => event.key === "Enter" && handleSearch()}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Rick Sanchez"
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
