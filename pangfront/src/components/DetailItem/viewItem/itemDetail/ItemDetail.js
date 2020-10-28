import React, { useState, useCallback } from "react";
import * as S from "./ItemDetailStyle.js";
import StarMap from '../starMap/StarMap.js'


const ItemTitle = () => {
  const [title, setTitle] = useState("방울토마토");
  const [price, setPrice] = useState("2000원 / 300g");
  const [local, setLocal] = useState("강원도 강릉시");
  const [discription, setDiscription] = useState(
    "아주 맛이 좋은 토마토 입니다. 일년간 열심히 키웠습니다 유기농으로 키워서 건강하지만 벌레는 없습니다. 한 궤짝 사 놓고 한 번 드셔보세요. 다음번엔 두 궤짝 사 드실겁니"
  );
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Price>{price}</S.Price>
      <S.Local>{local}</S.Local>
      <S.Description>{discription}</S.Description>
      <S.StarBox>
        <StarMap width={40}/>
      </S.StarBox>
    </S.Container>
  );
};

export default ItemTitle;
