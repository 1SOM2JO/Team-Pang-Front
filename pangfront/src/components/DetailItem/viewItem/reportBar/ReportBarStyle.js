import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face { font-family: 'JSDongkang-Regular'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff'); font-weight: normal; font-style: normal; }@font-face { font-family: 'JSDongkang-Regular'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff'); font-weight: normal; font-style: normal; }
`;

export const reportBackGround = styled.div`
  background-color: rgb(43, 40, 40, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  margin-top: -10px;
  flex: 1;
  height: 45px;
  display: flex;
`;
export const UserBox = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
`;
export const UserImg = styled.img`
  padding: 5px;
  width: 35px;
  height: 35px;
`;
export const UserDataBox = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 10px;
`;
export const UserName = styled.div`
  height: 50%;
`;
export const UserCall = styled.div`
  height: 50%;
`;
export const ReportBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
export const Report = styled.img`
  padding: 5px;
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
export const Heart = styled.img`
  padding: 5px;
  width: 35px;
  height: 35px;
`;

export const reportModal = styled.div`
  background-color: red;
  position: absolute;
  width: 430px;
  height: 400px;
  right: 35%;
  top: 20%;
  position: fixed;
  border-radius: 1rem;
`;
