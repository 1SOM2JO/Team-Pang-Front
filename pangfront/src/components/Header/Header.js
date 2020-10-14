import React from "react";
import LoginHeader from "./LoginHeader/LoginHeader";
import MainHeader from "./MainHeader/MainHeader";

const Header = () => {
  return (
    <div>
      <MainHeader />
      <LoginHeader />
    </div>
  );
};

export default Header;
