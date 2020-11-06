import styled, { createGlobalStyle } from "styled-components";
import ProfileImage from './../../img/ProfileImage.jpg';

export const MyPageBack  = styled.div`
    margin: 0px 200px;
`;

export const Header = styled.div`
    width: 100%;
    height: 20vh;
`;

export const MyImage = styled.div`
    margin-top: 7px;
    width: 130px;
    height: 130px;
    background-image: url(${ProfileImage});
    background-size: contain;
    float: left;
`;

export const MyImpormation = styled.div`
    margin-left: 20px;
    float: left;
    width: 290px;
    height: 104px;
    padding-top: 30px;
`;

export const MyNickname = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
`;

export const MyLocation = styled.div`
    font-size: 15px;
`;

export const My = styled.div`
    padding: 20px;
    width: 200px;
    height: 50px;
    float: left;
    margin-top: 20px;
`;

export const ProductDibs = styled.div`
    float: left;
    text-align: center;
    
    >div {
        margin-bottom: 10px;
    }

`;

export const ProductNumber = styled.div`
    font-weight: bold;
    color: #219F70;
`;

export const ExperienceDibs = styled.div`
    float: right;
    text-align: center;
    
    >div {
        margin-bottom: 10px;
    }
`;

export const ExperienceNumber = styled.div`
    font-weight: bold;
    color: #219F70;
`;




export const Contents = styled.div`
    // background-color: green;
    wdith: 100%;
    height: 450px;
    padding: 20px 0px;
`;

export const ProductContents = styled.div`
    background-color : #F5F5F5;
    padding: 10px 0px;
    width: 550px;
    height: 450px;
    float: left;

    >div {
        width: 100%;
        height: 450px;
        overflow: scroll
    }
`;

export const ExperienceContents = styled.div`
    background-color : #F5F5F5;
    padding: 10px 0px;
    width: 550px;
    height: 450px;
    float: right;
    
    >div {
        width: 100%;
        height: 450px;
        overflow: scroll
    }
`;