import React, { useState, useCallback } from "react";
import Header from "../../Header/Header";
import * as S from "./applyItemStyle.js";
import AddImg from "./addImg/AddImg.js";
import AddProduct from "./addProduct/AddProduct.js";
import AddPrice from "./addPrice/AddPrice.js";
import AddLocal from "./addLocal/AddLocal.js";
import AddExplain from "./addExplain/AddExplain.js";

const Event = (e) => {
  console.log("ghkrdls");
};

const ApplyItem = () => {
  const [itemData, setItemData] = useState("");
  const receiveItemData = (e) => {
    setItemData(e);
  };
  return (
    <S.Container>
      <S.GlobalStyle />
      <Header />
      <S.MainBox>
        <AddImg />
        <S.Form>
          <S.ItemExplainBox>
            <AddProduct receiveItemData={receiveItemData}>상품명</AddProduct>
            <AddPrice />
            <AddLocal />
            <AddExplain height={'215px'}/>
            <S.Submit onClick={Event}>등록하기</S.Submit>
          </S.ItemExplainBox>
        </S.Form>
      </S.MainBox>
    </S.Container>//입력 확인 구현, 사진 서버에 보내기, state(리덕스 사용할지 결정)
  );
};
export default ApplyItem;
