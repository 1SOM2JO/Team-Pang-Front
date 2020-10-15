import React, { useState } from "react";
import Header from "../../Header/Header";
import * as S from "./applyItemStyle.js";

const ApplyItem = () => {
  const [img, setImg] = useState(null);
  const [imgBase64, setImgBase64] = useState("");
  const onChange = () => {};
  return (
    <S.Container>
      <S.GlobalStyle />
      <Header></Header>
      <S.MainBox>
        <S.ImguploadBox>
          <S.importantImgBox>
            <S.importantImgText>사진</S.importantImgText>
            <S.colorText>*</S.colorText>
          </S.importantImgBox>
          <S.inputLabel for="imgFile">사진등록</S.inputLabel>
          <S.Imginput type="file" onChange={onChange} id="imgFile"></S.Imginput>
        </S.ImguploadBox>
        <S.ItemExplainBox>
          <S.ItemNameBox>
            <S.ItemName>상품명</S.ItemName>
            <S.colorText>*</S.colorText>
          </S.ItemNameBox>
          <S.UserItemName
            maxlength="1"
            cols="2"
            rows="2"
            placeholder="상품명을 입력해주세요"
          ></S.UserItemName>
          <S.PriceBox>
            <S.Price>가격</S.Price>
            <S.colorText>*</S.colorText>
            <S.Unit>단위</S.Unit>
            <S.colorText>*</S.colorText>        
          </S.PriceBox>
          <S.PriceInputBox>
            <S.PriceInput placeholder="가격을 입력해주세요"/>
            <S.PriceTail>원</S.PriceTail>
            <S.UnitInput></S.UnitInput>
            <S.PriceTail>개</S.PriceTail>
            <S.chooseUnit color={'#219F70'}>∨</S.chooseUnit>
          </S.PriceInputBox>
          <S.localBox>
            <S.ItemName>지역</S.ItemName>
            <S.colorText>*</S.colorText>
          </S.localBox>
          <S.ChooseLocal>
          <S.chooseCity>도 · 광역시</S.chooseCity>
          <S.chooseUnit color={'#000000'}>∨</S.chooseUnit>
          <S.choosevillage>시 · 군 · 구</S.choosevillage>
          <S.chooseUnit color={'#000000'}>∨</S.chooseUnit>
          </S.ChooseLocal>
          <S.Description>설명</S.Description>
          <textarea></textarea>
        </S.ItemExplainBox>
      </S.MainBox>
    </S.Container>
  );
};
export default ApplyItem;
