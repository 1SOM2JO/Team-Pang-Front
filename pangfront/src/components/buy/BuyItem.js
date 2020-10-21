import React from "react";
import * as S from "./styles";
import farmer from "./farmer.jpg";
const BuyItem = ({ product }) => {
  return (
    <S.BuyItemMain>
      <img src={farmer}></img>
      <div id="name">{product.name}</div>
      <div id="price">
        {product.price}원 / {product.unit}
      </div>
      <div id="locate">{product.locate}</div>
    </S.BuyItemMain>
  );
};

export default BuyItem;
