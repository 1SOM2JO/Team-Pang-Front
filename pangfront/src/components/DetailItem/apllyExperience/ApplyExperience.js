import React from "react";
import Header from "../../Header/Header.js";
import AddImg from "../applyItem/addImg/AddImg";
import AddProduct from "../applyItem/addProduct/AddProduct.js";
import AddExPrice from "./addExPrice/AddExPrice";
import AddLocal from "../applyItem/addLocal/AddLocal.js";
import AddExplain from "../applyItem/addExplain/AddExplain.js";
import AddTime from "./addTime/AddTime.js"
import * as S from "./ApplyExperienceStyle.js";

const ApplyExperience = () => {
  return (
    <S.Container>
      <S.GlobalStyle />
      <Header />
      <S.MainBox>
        <AddImg />
        <S.Form>
          <S.ItemExplainBox>
            <AddProduct>체험명</AddProduct>
            <AddExPrice/>
            <AddLocal />
            <AddTime/>
            <AddExplain height={'165px'}/>
            <S.Submit onClick={Event}>등록하기</S.Submit>
          </S.ItemExplainBox>
        </S.Form>
      </S.MainBox>
    </S.Container>
  );
};
export default ApplyExperience;
