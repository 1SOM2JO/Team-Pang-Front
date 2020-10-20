import React from "react";
import * as City from "../../../json/localJson.json";

const smallCity = (localName) => {
  let arr = ["시 · 군 · 구"];
  for (let Data in City.default.data) {
    if (Object.keys(City.default.data[Data])[0] === localName) {
      return(City.default.data[Data][localName]);
    }
  }
  return arr;
};
export default smallCity;
