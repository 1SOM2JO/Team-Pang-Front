import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face { font-family: 'ImcreSoojin'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.3/ImcreSoojin.woff') format('woff'); font-weight: normal; font-style: normal; }
    @font-face { font-family: 'IBMPlexSansKR-Text'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Text.woff') format('woff'); font-weight: normal; font-style: normal; }
`;

export const Maindiv = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  height: 110px;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.div`
  > img {
    margin-left: 17px;
  }
`;

export const MainText = styled.div`
  font-family: ImcreSoojin;
  font-size: 37px;
`;
export const Text = styled.div`
  font-size: 30px;
  font-family: IBMPlexSansKR-Text;
  > div {
    margin: 0 10px;
  }
`;
