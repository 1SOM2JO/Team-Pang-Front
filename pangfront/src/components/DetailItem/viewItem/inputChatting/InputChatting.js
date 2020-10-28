import React, { useState } from "react";
import * as S from "./InputChattingStyle.js";
import StarMap from "../starMap/StarMap.js";
const InputChatting = () => {
  return (
    <S.body>
      <S.chattingContainer>
        <S.chattingInputNameBox>
          <S.userName>박재훈</S.userName>
          <StarMap width={20}></StarMap>
        </S.chattingInputNameBox>
        <S.inputArea />
        <S.BtnBox>
          <S.submitBtn>등록</S.submitBtn>
        </S.BtnBox>
      </S.chattingContainer>
    </S.body>
  );
};
export default InputChatting;
