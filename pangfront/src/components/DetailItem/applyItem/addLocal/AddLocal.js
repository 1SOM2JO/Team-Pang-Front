import React, { useCallback, useState } from "react";
import BigCityName from "../BigCity.js";
import smallCity from "../smallCity.js";
import * as S from "./AddLocalStyle.js";

const AddLocal = () => {
  const [bigCity, setBigCity] = useState("도 · 광역시");
  const [city, setCity] = useState("시 · 군 · 구");
  const bigCityChange = useCallback((e) => {
    setBigCity(e.target.value);
  }, []);
  const cityChange = useCallback((e) => {
    setCity(e.target.value);
  }, []);

  return (
    <>
      <S.localBox>
        <S.ItemName>지역</S.ItemName>
        <S.colorText>*</S.colorText>
      </S.localBox>
      <S.ChooseLocal>
        <S.chooseCity required>{bigCity}</S.chooseCity>
        <S.chooseUnit color={"#000000"} onChange={bigCityChange}>
          <BigCityName></BigCityName>
        </S.chooseUnit>
        <S.choosevillage required>{city}</S.choosevillage>
        <S.chooseUnit color={"#000000"} onChange={cityChange}>
          {useCallback(
            smallCity(bigCity).map((smallCityName) => {
              return <option >{smallCityName}</option>;
            }),
            [bigCity]
          )}
        </S.chooseUnit>
      </S.ChooseLocal>
    </>
  );
};
export default AddLocal;
