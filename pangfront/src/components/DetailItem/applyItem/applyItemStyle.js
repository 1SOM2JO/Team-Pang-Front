import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
    margin:0;
    padding:0;
    font-family: 'Noto Sans KR', sans-serif;
    }
`;

export const MainBox = styled.div`
  flex: 1;
  display: flex;
  margin: 0 90px;
`;
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const ItemExplainBox = styled.div`
  margin-top: 30px;
  flex: 1;
  height: 550px;
  padding-left: 30px;
`;

export const Submit = styled.button`
  margin-top: 30px;
  background-color: #aaf1bb;
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
`;
export const Form = styled.form`
  flex:1;
`