import styled, {createGlobalStyle} from 'styled-components';

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
`
export const Container = styled.div`
    width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`