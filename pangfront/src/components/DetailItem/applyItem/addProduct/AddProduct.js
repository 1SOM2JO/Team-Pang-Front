import React from 'react';
import * as S from './AddProductStyle.js'
const AddProduct = () =>{
    return(
        <>
        <S.ItemNameBox>
            <S.ItemName>상품명</S.ItemName>
            <S.colorText>*</S.colorText>
          </S.ItemNameBox>
          <S.UserItemName
            maxlength="1"
            cols="2"
            rows="2"
            placeholder="상품명을 입력해주세요"
            required
        ></S.UserItemName>
        </>
    )
}

export default AddProduct;