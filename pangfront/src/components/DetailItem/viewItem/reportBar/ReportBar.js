import React, { useState, useCallback } from "react";
import * as S from "./ReportBarStyle.js";
import ReportModal from "./reportModal/ReportModal.js";
import UserImg from "../../../../img/BasicPerson.png";
import BeforeHeart from "../../../../img/BeforeHeart.png";
import BeforeReport from "../../../../img/BeforeReport.png";
import Heart from "../../../../img/Heart.png";
const ReportBar = ({setReport, report}) => {
  const [userName, setuserName] = useState("신두평");
  const [call, setcall] = useState("010-1111- 4444");
  const [heart, setHeart] = useState(false);
  const reportModal = () => {
    setReport((prev) => !prev);
  };
  const HeartSet = useCallback(() => {
    if (heart) setHeart(false);
    else setHeart(true);
  }, [heart]);
  return (
    <S.Container>
  
      <S.GlobalStyle />
      <S.UserBox>
        <S.UserImg src={UserImg} />
        <S.UserDataBox>
          <S.UserName>{userName}</S.UserName>
          <S.UserCall>{call}</S.UserCall>
        </S.UserDataBox>
      </S.UserBox>
      <S.ReportBox>
        <S.Report src={BeforeReport} onClick={reportModal} />
        <S.Heart src={heart ? Heart : BeforeHeart} onClick={HeartSet} />
      </S.ReportBox>

      {report && <ReportModal reportModal={reportModal}></ReportModal>}
    </S.Container>
  );
};
export default ReportBar;
