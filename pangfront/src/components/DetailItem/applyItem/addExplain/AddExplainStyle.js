import styled from "styled-components";

export const Description = styled.div`
  font-size: 18px;
  margin-top: 5px;
  font-weight: bold;
`;
export const InputDescription = styled.textarea`
  width: 89%;
  padding:10px;
  height:${props=>(props.height)};
  resize: none;
  outline: none;
  line-height:${props=>(props.height)};
  text-align:center;
  &::placeholder {

    
    color: #d4d4d4;
  }
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
