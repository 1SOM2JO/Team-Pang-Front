import React,{useState} from "react";
import * as S from "./AddProductStyle.js";
const AddProduct = (props) => {
  console.log(props.children);
  return (
    <>
      <S.ItemNameBox>
        <S.ItemName>{props.children}</S.ItemName>
        <S.colorText>*</S.colorText>
      </S.ItemNameBox>
      <S.UserItemName
      
        
        placeholder={`${props.children}을 입력해주세요`}
        required
        
      ></S.UserItemName>
    </>
  );
};

export default AddProduct;
