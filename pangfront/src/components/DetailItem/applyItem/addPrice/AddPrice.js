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
        <S.Price>체험료</S.Price>
        <S.colorText>*</S.colorText>
      </S.PriceBox>
      <S.PriceInputBox>
        <S.PriceInput
          placeholder="체험료를 입력해주세요"
          type="number"
          required
        />
        <S.PriceTail>원</S.PriceTail>
        
       

      </S.PriceInputBox>
    </>
  );
};

export default AddPrice;
