import React from "react";
import * as City from "../../../json/localJson.json";

const BigCityName = () => {
  let arr = [];
  for (let Data in City.default.data) {
    arr.push(Object.keys(City.default.data[Data])[0]);
  }
  return(arr.map((BigCityName) => {
    return <option>{BigCityName}</option>;
  }));
};

export default BigCityName;
