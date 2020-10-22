import React from "react";
import Header from "../../Header/Header";
import * as S from "./ViewItemStyle.js";
import AddImg from "./addImg/AddImg.js";
import ReportBar from './reportBar/ReportBar.js'
const ViewItem = () => {
  return (
    <>
      <S.GlobalStyle />
      <Header></Header>
      <S.MainBox>
        <AddImg ReportBar={ReportBar}></AddImg>
      </S.MainBox>
    </>
  );
};

export default ViewItem;
