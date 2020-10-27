import styled from "styled-components";

export const container = styled.div`
  background-color: white;
  position: absolute;
  width: 430px;
  height: 400px;
  right: 35%;
  top: 20%;
  position: fixed;
  border-radius: 1rem;
`;

export const TitleBox = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const Title = styled.div`
  font-size: 20px;
`;
export const Close = styled.div`
  transform: translate(130px, 0px);
  font-weight: bold;
  cursor:pointer;
  font-size: 20px;
`;

export const Input = styled.textarea`
  margin-top: 20px;
  display: block;
  width: 65%;
  margin: 0 auto;
  height: 280px;
  resize: none;
`;

export const Button = styled.div`
    width:40%;
    height:30px;
    margin: 0 auto;
    text-align:center;
    margin-top:10px;
    background-color:white;
    border:1px solid black;
    padding-top:5px;
    cursor:pointer;

    
`
