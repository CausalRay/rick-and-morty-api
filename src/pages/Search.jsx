import React from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="search">
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
            <div className="search__input">
              <input
                type="text"
                placeholder="Search by name, species, home plant"
              />
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;