import React from "react";
import * as S from "./AddExPriceStyle.js";
const AddExPrice = () => {
  return (
    <>
      <S.PriceBox>
        <S.Price>체험료</S.Price>
        <S.colorText>*</S.colorText>
      </S.PriceBox>
      <S.PriceInputBox>
        <S.PriceInput
          placeholder="체험료 입력해주세요"
          type="number"
          required
        />
        <S.PriceTail>원</S.PriceTail>
      </S.PriceInputBox>
    </>
  );
};

export default AddExPrice;
