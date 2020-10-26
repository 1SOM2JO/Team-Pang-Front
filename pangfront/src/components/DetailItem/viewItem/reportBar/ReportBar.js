import React, { useState, useCallback } from "react";
import * as S from "./ReportBarStyle.js";
import UserImg from "../../../../img/BasicPerson.png";
import BeforeHeart from "../../../../img/BeforeHeart.png";
import BeforeReport from "../../../../img/BeforeReport.png";
const ReportBar = () => {
  const [userName, setuserName] = useState('신두평');
  const [call, setcall] = useState('010-1111-4444');
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
        <S.Report src={BeforeReport} />
        <S.Heart src={BeforeHeart} />
      </S.ReportBox>
    </S.Container>
  );
};
export default ReportBar;













// const [userName, setUserName] = useState("신두평");
  // const [call, setCall] = useState("010-1111-2222");