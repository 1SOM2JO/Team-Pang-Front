import styled from "styled-components";

export const ImguploadBox = styled.div`
  width: 60%;
  height: 500px;
  margin-right: 50px;
  margin-left:20px;
  margin-top:17px;
`;
export const importantImgBox = styled.div`
  display: flex;
`;
export const importantImgText = styled.div`
  font-size: 23px;
  font-weight: bold;
`;

export const colorText = styled.div`
  color: #ff0404;
  margin-left: 3px;
`;

export const inputLabel = styled.label`
  margin-top: 15px;
  height: 95%;
  width: 100%;
  display: flex;
  border: 1px solid #c4c4c4;
  justify-content: center;
  align-items: center;
  color: #d4d4d4;
  background-image: url(${(props) => props.img});
  background-size: 100% 100%;
`;
export const Imginput = styled.input`
  width: 0px;
  outline: none;
`;
