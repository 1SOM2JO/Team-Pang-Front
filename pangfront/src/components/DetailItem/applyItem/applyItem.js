import React, { useState, useCallback } from "react";
import Header from "../../Header/Header";
import * as S from "./applyItemStyle.js";
import AddImg from "./addImg/AddImg.js";
import AddProduct from "./addProduct/AddProduct.js";
import AddPrice from "./addPrice/AddPrice.js";
import AddLocal from "./addLocal/AddLocal.js";
import AddExplain from "./addExplain/AddExplain.js";

const ApplyItem = () => {
  const [itemData, setItemData] = useState("");
  const [img, setImg] = useState(null);
  const [count, setCount] = useState("개");
  const [price, setPrice] = useState("원");
  const [bigCity, setBigCity] = useState("도 · 광역시");
  const [city, setCity] = useState("시 · 군 · 구");
  const [discription, setDiscription] = useState('')
  const receiveItemData = useCallback((e) => {
    setItemData(e);
  },[]);
  const discriptionChange = useCallback((e)=>{
    setDiscription(e.target.value);
  },[])
  return (
    <S.Container>
      <S.GlobalStyle />
      <Header />
      <S.MainBox>
        <AddImg img={img} setImg={setImg}/>
        <S.Form>
          <S.ItemExplainBox>
            <AddProduct receiveItemData={receiveItemData}>상품명</AddProduct>
            <AddPrice
              count={count}
              setPrice={setPrice}
              setCount={setCount}
            />
            <AddLocal
              bigCity={bigCity}
              setBigCity={setBigCity}
              city={city}
              setCity={setCity}
            />
            <AddExplain height={"215px"} onChange={discriptionChange}/>
            <S.Submit onClick={Event}>등록하기</S.Submit>
          </S.ItemExplainBox>
        </S.Form>
      </S.MainBox>
    </S.Container> //입력 확인 구현, 사진 서버에 보내기, state(리덕스 사용할지 결정)
  );
};
export default ApplyItem;
