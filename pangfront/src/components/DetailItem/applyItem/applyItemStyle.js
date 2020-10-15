import styled, { createGlobalStyle } from "styled-components";
import Header from "../../Header/Header";

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

export const ImguploadBox = styled.div`
  width: 60%;
  height: 500px;
  margin-right:50px;
`;
export const importantImgBox = styled.div`
  display: flex;
`;
export const importantImgText = styled.div`
  font-size: 23px;
`;

export const importantStar = styled.div`
  color: #ff0404;
  margin-bottom: 5px;
`;

export const colorText = styled.div`
  color:#FF0404;
  margin-left:3px;
`;

export const inputLabel = styled.label`
  height: 100%;
  width: 100%;
  display: flex;
  border: 1px solid #c4c4c4;
  justify-content: center;
  align-items: center;
  color: #d4d4d4;
`;
export const Imginput = styled.input`
  width: 0px;
  outline: none;
`;
export const ItemExplainBox = styled.div`

  flex: 1;
  height:550px;
  padding-left:30px;
`;
export const ItemNameBox = styled.div`
display:flex;
    
`
export const ItemName = styled.div`
font-size: 23px;
`
export const UserItemName = styled.textarea`
  margin-top:3px;
  width:85%;
  height:60px;
  resize: none; 
  outline:none;
  border:1px solid #C4C4C4;
  &::placeholder{
     text-align:center;
     padding-top:15px;
     color:#D4D4D4;
  }
  overflow:hidden;
  font-size:20px;
  margin-bottom:5px;
`
export const PriceBox = styled.div`
  display:flex;
  width:85%;

`
export const Price = styled.div`
font-size:20px;
`
export const Unit = styled.div`
  font-size:20px;
  margin-left:170px;
`
export const PriceInputBox = styled.div`
  display:flex;
  width:85%;
`
export const PriceInput = styled.input`
  border:1px solid #C4C4C4;
  outline:none;
  &::placeholder{
     text-align:center;
     padding-top:15px;
     color:#D4D4D4;
  }

`
export const UnitInput = styled.input`
 border:1px solid #C4C4C4;
 outline:none;
`
export const PriceTail = styled.div`
  color:#219F70;
  font-size:28px;
  font-weight:bold;
  margin:0 3px;
`
export const chooseUnit = styled.div`
color:${props=>props.color};
  display:flex;
  align-items:center;

  font-weight:bold;
  font-size:20px;
`
export const ChooseLocal = styled.div`
  display:flex;
`
export const localBox = styled.div`
  display:flex;
  margin-top:5px;
  margin-bottom:5px;

`
export const chooseCity = styled.div`
  border:none;
  font-size:23px;
  margin-right:10px;
`
export const choosevillage = styled.div`
border:none;
  font-size:23px;
  margin-left:50px;
  margin-right:10px;
`
export const Description =styled.div`
  font-size:26px;
  margin-top:5px;
`