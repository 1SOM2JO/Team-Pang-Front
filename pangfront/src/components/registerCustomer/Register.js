import React, { useState, useRef, useCallback } from "react";
import * as S from "./styles";
import axios from "axios";

const Register = () => {
  const [phoneCheck, setPhoneCheck] = useState();
  const [inputData, setInputData] = useState({
    nickname: "",
    id: "",
    password: "",
    checkPassword: "",
    numberFirst: "",
    numberSecond: "",
    numberThird: "",
    checkNumber: "",
  });

  const changeInputData = useCallback((e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const onCheck = (e) => {
    setPhoneCheck(e.target.value);
    console.log(e.target.value);
    console.log(e.target);
    console.log("완료");
  };

  const onBtnClick = () => {
    const apiKey = "asjdlfkas345dflah325sdfh4lkj5h352";
    const { numberFirst, numberSecond, numberThird } = inputData;
    axios
      .post(
        "http://3.34.137.19:80/user/signup/basic",
        {
          id: inputData.id,
          permission: "SELLER",
          nickname: inputData.nickname,
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
        console.log(res.data);
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
  const [check, setCheck] = useState(false);
  return (
    <S.MainDiv>
      <S.MainText>회원가입</S.MainText>
      <S.InputDiv>
        <div>
          <p>닉네임</p>
          <input
            onChange={changeInputData}
            value={inputData.nickname}
            name="nickname"
          />
        </div>
        <div>
          <p>아이디</p>
          <input onChange={changeInputData} name="id" value={inputData.id} />
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
