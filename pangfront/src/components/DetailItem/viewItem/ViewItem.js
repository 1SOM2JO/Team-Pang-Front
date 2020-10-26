import React from "react";
import Header from "../../Header/Header";
import * as S from "./ViewItemStyle.js";
import SetImg from "./setImg/SetImg.js";
import ItemDetail from './itemDetail/ItemDetail.js'
import ReportBar from './reportBar/ReportBar.js'
const ViewItem = () => {
  return (
    <>
      <S.GlobalStyle />
      <Header></Header>
      <S.MainBox>
        <SetImg ReportBar={ReportBar}></SetImg>
        <ItemDetail></ItemDetail>
      </S.MainBox>
      <S.ChattingBox></S.ChattingBox>
    </>
  );
};

export default ViewItem;
