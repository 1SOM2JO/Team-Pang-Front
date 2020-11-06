import React from "react";
import * as S from "./styles";
import Header from "./../Header/Header";
import { useHistory } from "react-router-dom";

const RegisterEnter = () => {
  const history = useHistory();
  const onCustomer = () => {
    history.push("/register");
  };
  return (
    <>
      <S.MainDiv>
        <S.Main>
          <div>
            <S.Text>assasad</S.Text>
          </div>
          <div>
            <S.Customer onClick={onCustomer}></S.Customer>
            <S.Seller onClick={onCustomer}></S.Seller>
          </div>
        </S.Main>
      </S.MainDiv>
    </>
  );
};

export default RegisterEnter;
