import styled from 'styled-components';


export const ItemExplainBox = styled.div`
  margin-top: 30px;
  flex: 1;
  height: 550px;
  padding-left: 30px;
`;

export const Description = styled.div`
  font-size: 18px;
  margin-top: 5px;
  font-weight: bold;
`;
export const InputDescription = styled.textarea`
  width: 89%;
  height: 240px;
  resize: none;
  outline: none;
  &::placeholder {
    text-align: center;
    padding-top: 100px;
    color: #d4d4d4;
  }
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;