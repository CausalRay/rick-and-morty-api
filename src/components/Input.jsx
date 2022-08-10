import React from 'react';
import "./input.css"
import SearchIcon from "@mui/icons-material/Search";


const Input = () => {
    return (
        <div className="input">
        <input
          type="text"
          placeholder="Rick Sanchez, Human, C137"
        />
        <SearchIcon />
      </div>
    );
}

export default Input;
