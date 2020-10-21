import styled from "styled-components";

export const chooseUnit = styled.select`
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  border: none;
  font-weight: bold;
  font-size: 18px;
  width: 20px;
  outline: none;
  &>option{
   font-size:15px
  }
  
`;
export const ChooseLocal = styled.div`
  display: flex;
  margin: 10px 0px;
`;
export const localBox = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const chooseCity = styled.div`
  border: none;
  font-size: 14px;
  margin-right: 10px;
`;
export const choosevillage = styled.div`
  border: none;
  font-size: 14px;
  margin-left: 50px;
  margin-right: 10px;
`;
export const ItemName = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
export const colorText = styled.div`
  color: #ff0404;
  margin-left: 3px;
`;
