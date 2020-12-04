import React, { useState, useRef, useCallback } from "react";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const history = useHistory();
  const [inputData, setInputData] = useState({
    userNickname: "",
    userId: "",
    password: "",
    checkPassword: "",
    numberFirst: "",
    numberSecond: "",
    numberThird: "",
    checkNumber: "",
  });
  const [check, setCheck] = useState(false);
  const changeInputData = useCallback((e) => {
    const { name, value } = e.target;

    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onCheck = () => {};

  const onBtnClick = () => {
    const { numberFirst, numberSecond, numberThird } = inputData;
    const apiKey = "asjdlfkas345dflah325sdfh4lkj5h352";
    axios
      .post(
        "http://3.34.137.19:80/user/signup/basic",
        {
          id: inputData.userId,
          permission: "SELLER",
          nickname: inputData.userNickname,
          password: inputData.password,
          phonenumber: `${numberFirst}-${numberSecond}-${numberThird}`,
          code: inputData.checkNumber,
        },
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      )
      .then((res) => {
        alert("회원가입 성공");
        console.log(res.data);
        history.push("/");
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err.request);
      });
  };
  const onCheckClick = useCallback(() => {
    const apiKey = "asjdlfkas345dflah325sdfh4lkj5h352";

    const { numberFirst, numberSecond, numberThird } = inputData;

    (async () => {
      try {
        const res = await axios.post(
          "http://3.34.137.19:80/user/signup/smsSender",
          {
            phonenumber: `${numberFirst}-${numberSecond}-${numberThird}`,
          },
          {
            headers: {
              "x-api-key": apiKey,
            },
          }
        );
        setCheck(true);
      } catch (err) {
        alert("전화번호가 잘못됐습니다");
      }
    })();
  }, [inputData]);
  return (
    <S.MainDiv>
      <S.MainText>회원가입</S.MainText>
      <S.InputDiv>
        <div>
          <p>닉네임</p>
          <input
            onChange={changeInputData}
            value={inputData.userNickname}
            name="userNickname"
          />
        </div>
        <div>
          <p>아이디</p>
          <input
            onChange={changeInputData}
            name="userId"
            value={inputData.userId}
          />
        </div>
        <div>
          <p>비밀번호</p>
          <input
            onChange={changeInputData}
            name="password"
            type="password"
            value={inputData.password}
          />
        </div>
        <div>
          <p>비밀번호 확인</p>
          <input
            onChange={changeInputData}
            name="checkPassword"
            type="password"
            value={inputData.checkPassword}
          />
        </div>
        {!check ? (
          <div>
            <p>휴대전화</p>
            <div>
              <input
                onChange={changeInputData}
                name="numberFirst"
                value={inputData.numberFirst}
                type="number"
                maxLength="3"
              />
              <div>-</div>
              <input
                onChange={changeInputData}
                name="numberSecond"
                value={inputData.numberSecond}
                type="number"
                maxLength="4"
              />
              <div>-</div>
              <input
                onChange={changeInputData}
                name="numberThird"
                value={inputData.numberThird}
                type="number"
                maxLength="4"
              />
              <button onClick={onCheckClick}>인증번호받기</button>
            </div>
          </div>
        ) : (
          <S.Check>
            <p>휴대전화</p>
            <div>
              <input
                onChange={changeInputData}
                name="checkNumber"
                value={inputData.checkNumber}
              />
            </div>
            <button onClick={onCheck}>인증</button>
          </S.Check>
        )}
      </S.InputDiv>
      <button onClick={onBtnClick}>회원가입</button>
    </S.MainDiv>
  );
};

export default Register;
