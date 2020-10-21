import styled from "styled-components";

export const PriceInputBox = styled.div`
  display: flex;
  width: 85%;
`;
export const PriceInput = styled.input`
  border: 1px solid #c4c4c4;
  outline: none;
  &::placeholder {
    text-align: center;
    padding-top: 15px;
    color: #d4d4d4;
  }
  text-align: center;
  -webkit-appearance: none;
  ime-mode: disabled;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const PriceTail = styled.div`
  color: #219f70;
  font-size: 28px;
  font-weight: bold;
  margin: 0 3px;
`;
export const PriceBox = styled.div`
  display: flex;
  width: 85%;
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
export const colorText = styled.div`
  color: #ff0404;
  margin-left: 3px;
`;
