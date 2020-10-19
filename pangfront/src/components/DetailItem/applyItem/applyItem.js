import React, { useState, useCallback } from "react";
import Header from "../../Header/Header";
import * as S from "./applyItemStyle.js";
import BigCityName from "./BigCity.js";
import smallCity from "./smallCity.js";
const ApplyItem = () => {
  const [bigCity, setBigCity] = useState("도 · 광역시");
  const [city, setCity] = useState("시 · 군 · 구");
  const [count, setCount] = useState('개')
  const [img, setImg] = useState(null);
  const [imgBase64, setImgBase64] = useState("");
  const bigCityChange = useCallback((e) => {
    setBigCity(e.target.value);
  }, []);
  const cityChange = useCallback((e)=>{
    setCity(e.target.value);
  },[])
  const countChange = useCallback((e)=>{
    setCount(e.target.value)
  },[])
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
          <S.Imginput type="file" id="imgFile"></S.Imginput>
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
            <S.PriceInput placeholder="가격을 입력해주세요" type="number" />
            <S.PriceTail >원</S.PriceTail>
            <S.UnitInput type="number"></S.UnitInput>
            <S.PriceTail>{count}</S.PriceTail>
            <S.chooseUnit color={"#219F70"} onChange={countChange}>
              <option>g</option>
              <option>kg</option>
              <option>mL</option>
              <option>L</option>
            </S.chooseUnit>
          </S.PriceInputBox>
          <S.localBox>
            <S.ItemName>지역</S.ItemName>
            <S.colorText>*</S.colorText>
          </S.localBox>
          <S.ChooseLocal>
            <S.chooseCity>{bigCity}</S.chooseCity>
            <S.chooseUnit color={"#000000"} onChange={bigCityChange}>
              <BigCityName></BigCityName>
            </S.chooseUnit>
            <S.choosevillage>{city}</S.choosevillage>
            <S.chooseUnit color={"#000000"} onChange={cityChange}>
              {useCallback(smallCity(bigCity).map(smallCityName=>{
                return <option>{smallCityName}</option>
              }),[bigCity])}
            </S.chooseUnit>
          </S.ChooseLocal>
          <S.Description>설명</S.Description>
          <S.InputDescription placeholder="설명을 입력하세요"></S.InputDescription>
          <form>
            <S.Submit>등록하기</S.Submit>
          </form>
        </S.ItemExplainBox>
      </S.MainBox>
    </S.Container>
  );
};
export default ApplyItem;
