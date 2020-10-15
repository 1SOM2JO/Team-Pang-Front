import React from "react";
import LoginHeader from "./LoginHeader/LoginHeader";
import MainHeader from "./MainHeader/MainHeader";
import * as S from './HeaderStyle'

const Header = () => {
  return (
    <S.HeaderBox>
      <MainHeader />
      <LoginHeader />
    </S.HeaderBox>
  );
};

export default Header;
