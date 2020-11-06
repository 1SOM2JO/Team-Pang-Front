import React, { useState } from "react";
import Header from "../../Header/Header";
import * as S from "./ViewItemStyle.js";
import SetImg from "./setImg/SetImg.js";
import ItemDetail from "./itemDetail/ItemDetail.js";
import ReportBar from "./reportBar/ReportBar.js";
import InputChatting from "./inputChatting/InputChatting.js";

const ViewItem = () => {
  const [report, setReport] = useState(false);
  return (
    <>
    {report && <S.reportBackGround/>}
      <S.GlobalStyle />
      <Header/>
      <S.MainBox>
        <SetImg ReportBar={ReportBar} report={report} setReport={setReport}></SetImg>
        <ItemDetail></ItemDetail>
      </S.MainBox>
      <S.ChattingBox>
        <InputChatting></InputChatting>
      </S.ChattingBox>
    </>
  );
};

export default ViewItem;
