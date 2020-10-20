import React, { useState, useCallback } from "react";
import Header from "../../Header/Header";
import * as S from "./ApplyItemStyle.js";
import AddImg from "./addImg/AddImg.js";
import AddProduct from "./addProduct/AddProduct.js";
import AddPrice from "./addPrice/AddPrice.js";
import AddLocal from "./addLocal/AddLocal.js";
import AddExplain from "./addExplain/AddExplain.js";
const ApplyItem = () => {
  return (
    <S.Container>
      <S.GlobalStyle />
      <Header />
      <S.MainBox>
        <AddImg />
        <S.ItemExplainBox>
          <AddProduct />
          <AddPrice />
          <AddLocal />
          <AddExplain />
          <form>
            <S.Submit>등록하기</S.Submit>
          </form>
        </S.ItemExplainBox>
      </S.MainBox>
    </S.Container>
  );
};
export default ApplyItem;
