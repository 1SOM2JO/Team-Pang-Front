import React from "react";
import * as S from "./AddExplainStyle.js";
const AddExplain = ({height}) => {
  return (
    <>
      <S.Description>설명</S.Description>
      <S.InputDescription placeholder="설명을 입력하세요" required height={height}></S.InputDescription>
    </>
  );
};
export default AddExplain;
