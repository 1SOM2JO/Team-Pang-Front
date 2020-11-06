import styled, { createGlobalStyle } from "styled-components";
import { HeaderBox as HeaderMainBox } from "../../Header/HeaderStyle";

export const GlobalStyle = createGlobalStyle`
    body{
    margin:0;
    padding:0;
    font-family: 'Noto Sans KR', sans-serif;
 

    }
    
    
`;

export const MainContainer = styled.div`
  background-color: red;
`;
export const MainBox = styled.div`
  padding-top: 100px;
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
export const ChattingBox = styled.div`
  margin-top: 100px;
  height: 80vh;
  width: 100%;
`;
export const reportBackGround = styled.div`
  background-color: rgb(43, 40, 40, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index:3;
  width: 100vw;
  height: 100vh;
  
`;

