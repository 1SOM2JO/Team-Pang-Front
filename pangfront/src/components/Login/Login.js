import Axios from "axios";
import React, { useState, useCallback } from "react";
import * as S from "./styles";
import axios from "axios";
const Login = ({ onLogin }) => {
  const [loginText, setLoginText] = useState({
    id: "",
    password: "",
  });
  const [loginCheck, setloginCheck] = useState(true);
  const onLoginCheck = () => {
    console.log(loginText.id);
    console.log(loginText.password);
    const apiKey = "asjdlfkas345dflah325sdfh4lkj5h352";
    axios
      .post(
        "http://3.34.137.19:80/user/signin/basic",
        {
          id: loginText.id,
          password: loginText.password,
        },
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      )
      .then((res) => {
        alert("로그인 성공");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const changeInputData = useCallback((e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setLoginText((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);
  return (
    <S.MainDiv>
      <S.Maintext>로그인</S.Maintext>
      <input
        type="text"
        name="id"
        placeholder="아이디"
        value={loginText.id}
        onChange={changeInputData}
      />
      <br />
      <input
        placeholder="비밀번호"
        type="password"
        name="password"
        value={loginText.password}
        onChange={changeInputData}
      />
      <br />
      <button onClick={onLoginCheck}>로그인</button>
      {!loginCheck && (
        <S.LoginCheck>
          가입하지 않은 아이디이거나, 비밀번호가 틀렸습니다.
        </S.LoginCheck>
      )}
      <S.Text>아이디찾기/비밀번호찾기/회원가입</S.Text>
    </S.MainDiv>
  );
};

export default Login;
