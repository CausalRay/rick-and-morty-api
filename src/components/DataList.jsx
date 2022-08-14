import React from "react";
import Characters from "./Characters";
import "./datalist.css";
import Sorter from "./Sorter";

const DataList = () => {
  return (
    <div className="datalist">
      <div className=" data__list--container container">
        <div className="sorter__wrapper">
          <Sorter />
        </div>
        <div className="data__wrapper">
          <Characters />
        </div>
      </div>
    </div>
  );
};

export default DataList;
