import React from "react";
import * as S from "./styles";


const MainHeader = () => {
  const buyClick = () => {
    window.location.href = "./buy";
  };
  const experienceClick = () => {
    window.location.href = "./experience";
  };
  return (
    <>
      <S.GlobalStyle />
      <S.Maindiv>
        <S.Logo>
          <S.MainText>일섬이조</S.MainText>
        
        </S.Logo>
        <S.Text>
          <div onClick={experienceClick}>먹거리 체험</div>
          <div onClick={buyClick}>상품구매</div>
          <div>등록하기</div>
        </S.Text>
      </S.Maindiv>
    </>
  );
};

export default MainHeader;
