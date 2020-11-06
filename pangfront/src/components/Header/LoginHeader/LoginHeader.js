import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";

const LoginHeader = ({ isLoggedin }) => {
  const [loginCheck, setloginCheck] = useState(isLoggedin);
  const onLoginCheck = () => {
    setloginCheck(!loginCheck);
  };
  const history = useHistory();
  const onRegister = () => {
    history.push("/RegisterEnter");
  };
  const pageChange = () => {
    window.location.href = "./Login";
  };
  return (
    <S.MainBox>
      <S.Maindiv>
        <S.NoLoginText>
          {loginCheck ? (
            <>
              <div onClick={pageChange}>로그아웃</div>
              <div onClick={onLoginCheck}>마이페이지</div>
            </>
          ) : (
            <>
              <div onClick={pageChange}>로그인</div>
              <div onClick={onRegister}>회원가입</div>
            </>
          )}
        </S.NoLoginText>
      </S.Maindiv>
    </S.MainBox>
  );
};

export default LoginHeader;
