import styled from "styled-components";

export const ItemNameBox = styled.div`
display: flex;
`;
export const ItemName = styled.div`
font-weight: bold;
font-size: 18px;
`;
export const UserItemName = styled.textarea`
margin-top: 3px;
width: 85%;
height: 60px;
resize: none;
outline: none;
text-align: center;
border: 1px solid #c4c4c4;
&::placeholder {
  text-align: center;
  padding-top: 15px;
  color: #d4d4d4;
}
overflow: hidden;
font-size: 20px;
margin-bottom: 5px;
`;
export const colorText = styled.div`
  color: #ff0404;
  margin-left: 3px;
`;