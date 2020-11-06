import styled from "styled-components";
import customer from "../../img/Customer.jpg";
import seller from "../../img/seller.jpg";
export const Main = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  > div {
    justify-content: center;
    display: flex;
    align-items: center;
  }
`;

export const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Text = styled.div`
  @font-face {
    font-family: "JSDongkang-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: JSDongkang-Regular;
  font-size: 50px;
  margin-bottom: 50px;
`;

export const Customer = styled.div`
  width: 700px;
  height: 380px;
  background: url(${customer});
  background-size: cover;
  margin-right: 50px;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`;

export const Seller = styled.div`
  width: 700px;
  height: 380px;
  background: url(${seller});
  background-size: cover;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
`;
