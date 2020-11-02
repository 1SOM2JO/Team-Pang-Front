import styled from 'styled-components';


export const PriceBox = styled.div`
  display: flex;
  width: 85%;
`;
export const Price = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
export const Unit = styled.div`
  font-size: 18px;
  margin-left: 170px;
  font-weight: bold;
`;
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
export const UnitInput = styled.input`
  border: 1px solid #c4c4c4;
  outline: none;
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

export const chooseUnit = styled.select`
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  border: none;
  font-weight: bold;
  font-size: 18px;
  width: 20px;
  outline: none;
`;
export const colorText = styled.div`
  color: #ff0404;
  margin-left: 3px;
`;