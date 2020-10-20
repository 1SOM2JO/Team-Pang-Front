import React, { useState, useCallback } from "react";
import * as S from "./AddPriceStyle.js";
const AddPrice = () => {
  const [count, setCount] = useState("개");
  const countChange = useCallback((e) => {
    setCount(e.target.value);
  }, []);
  return (
    <>
      <S.PriceBox>
        <S.Price>가격</S.Price>
        <S.colorText>*</S.colorText>
        <S.Unit>단위</S.Unit>
        <S.colorText>*</S.colorText>
      </S.PriceBox>
      <S.PriceInputBox>
        <S.PriceInput
          placeholder="가격을 입력해주세요"
          type="number"
          required
        />
        <S.PriceTail>원</S.PriceTail>
        <S.UnitInput type="number"></S.UnitInput>
        <S.PriceTail>{count}</S.PriceTail>
        <S.chooseUnit color={"#219F70"} onChange={countChange}>
          <option>g</option>
          <option>kg</option>
          <option>mL</option>
          <option>L</option>
        </S.chooseUnit>
      </S.PriceInputBox>
    </>
  );
};

export default AddPrice;
