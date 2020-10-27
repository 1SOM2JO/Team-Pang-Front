import React, { useState, useCallback} from "react";
import NoneStar from "../../../../img/NoneStar.png";
import OnStar from "../../../../img/OnStar.png";
import * as S from "./StarMapStyle";
const StarMap = (props) => {
  const [StarArr, setStarArr] = useState([false, false, false, false, false]); // Star 배열
  
  const BoxStyle = useCallback((index) => {
    const newStarArr = StarArr.map((obj, i) => {
      if (i <= index) return true;
      return false;
    });
    setStarArr(newStarArr);
  },[StarArr]); // Star변경

  const arr = StarArr.map((clicked, index) => {
    return (
      <S.Star
        onClick={() => {
          BoxStyle(index);
        }}
        src={clicked ? OnStar : NoneStar}
        width={props.width}
      ></S.Star>
    );
  });
  return arr;
};

export default StarMap ;
