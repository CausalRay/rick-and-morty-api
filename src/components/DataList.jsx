import React from "react";
import Characters from "./Characters";
import "./datalist.css";

const DataList = () => {
  return (
    <div className="datalist">
      <div className=" data__list--container container">
        <div className="sorter__wrapper">
        </div>
        <div className="data__wrapper">
          <Characters />
        </div>
      </div>
    </div>
  );
};

export default DataList;
