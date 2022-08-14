import React from "react";
import Input from "../components/Input";
import "./search.css";

const Search = () => {
  
  return (
    <div id="SearchPage">
      <div className="search__container">
        <div className="row">

          <div className="search__input--wrapper">
            <div className="search__input--para">
              <h2 className="schwifty">Find Your Favourite Rick And Morty Character</h2>
              <h3>
                Discover characters' backstory, species, home planet, dimension
                and much more!
              </h3>
            </div>
                <Input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
