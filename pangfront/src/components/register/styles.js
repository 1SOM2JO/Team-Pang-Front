import styled from "styled-components";

export const MainText = styled.div`
  @font-face {
    font-family: "IBMPlexSansKR-Text";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Text.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: IBMPlexSansKR-Text;
  font-size: 50px;
  margin-bottom: 30px;
`;

export const MainDiv = styled.div`
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  > button {
    height: 50px;
    width: 300px;
    border: none;
    background-color: #a7c8f3;
    font-size: 18px;
    @font-face {
      font-family: "IBMPlexSansKR-Text";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Text.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
    font-family: IBMPlexSansKR-Text;
    outline: none;
    cursor: pointer;
    margin-top: 20px;
  }
  > button:hover {
    background-color: #525df6;
  }
`;

export const InputDiv = styled.div`
  @font-face {
    font-family: "IBMPlexSansKR-Text";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Text.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: IBMPlexSansKR-Text;
  font-size: 26px;
  > div {
    display: flex;
    height: 50px;
    width: 80%;
    justify-content: space-between;
    margin-bottom: 20px;
    > input {
      height: 50px;
    }
    > p {
      height: 50px;
      margin-top: 0;
    }
  }
  > div:nth-child(-n + 5) {
    > input {
      width: 700px;
    }
  }
  > div:nth-child(5) {
    @font-face {
      font-family: "JSDongkang-Regular";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
    font-family: JSDongkang-Regular;
    > div {
      display: flex;
      justify-content: space-between;
      width: 708px;
      > div {
        margin-top: 8px;
        font-size: 26px;
      }
      > button {
        background-color: white;
        border: 1px solid #9f9f9f;
        outline: none;
        height: 56px;
        font-size: 15px;
      }
      > button:hover {
        cursor: pointer;
      }
      > input {
        height: 50px;
        font-size: 15px;
        text-align: center;
      }
      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      > p:nth-child(1) {
        margin-right: 80px;
      }
    }
  }
`;

export const Input = styled.div`
  margin-right: 100px;
`;

export const Check = styled.div`
  > p {
    width: 400px;
    text-align: left;
  }
  > button {
    height: 56px;
    width: 130px;
    border: 1px solid #9f9f9f;
    background-color: white;
    @font-face {
      font-family: "JSDongkang-Regular";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
    font-family: JSDongkang-Regular;
    font-size: 18px;
    outline: none;
    cursor: pointer;
  }
  > div {
    > input {
      width: 592px;
      margin-right: 20px;
    }
  }
`;
