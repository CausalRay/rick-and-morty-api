import React, { useEffect } from "react";
import DataList from "./components/DataList";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Nav from "./components/Nav";
import "./filter.css";

const Filter = () => {
  useEffect(() => {
    document.querySelector(".input").classList.add("new__page");
  }, []);

  return (
    <div className="filter">
      <Nav
        firstTo="#Character"
        firstText="Character"
        secondTo="#Episode"
        secondText="Episode"
        thirdTo="#Location"
        thirdText="location"
      />
      <div className="container filter__container">
        <div className="filter__row row">
          <Input text="_" />
          <DataList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Filter;
