import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  margin-right: 50px;
  margin-left: 20px;
  margin-top: 80px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 30px;
`;
export const Price = styled.div`
  font-size: 20px;
  margin-top: 35px;
  color: #219f70;
  font-weight:bold;
`;
export const Local = styled.div`
  margin-top: 15px;
  font-size: 15px;
`;
export const Description = styled.div`
  font-size: 18px;
  max-height: 300px;
  height:300px;
  margin-top: 35px;
  overflow: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  line-height:25px;
`;
export const StarBox = styled.div`
    flex:1;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
`
