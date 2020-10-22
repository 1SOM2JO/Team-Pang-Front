import styled, { createGlobalStyle } from "styled-components";
import ExperienceImage from './../../img/ExperienceImage.jpg';
import ProductImage from './../../img/ProductImage.jpg';

export const GlobalStyle = createGlobalStyle`
    @font-face { font-family: 'IBMPlexSansKR-Text'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Text.woff') format('woff'); font-weight: normal; font-style: normal; }
`;

export const Contents = styled.div`
    width: 900px;
    height: 500px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 20px;
`;

export const ProductDiv = styled.div`
    cursor: pointer;
    width: 430px;
    height: 455px;
    background-image: url(${ProductImage});
    background-size: contain;
    float: left;
`;

export const ProductText = styled.div`
    display: visible;
    font-family: IBMPlexSansKR-Text;
    position: relative;
    top: -440px;
    left: 10px;
    margin: 10px;
    color: white;
    font-size: 30px;
`;

export const ExperienceDiv = styled.div`
    cursor: pointer;
    width: 430px;
    height: 455px;
    background-image: url(${ExperienceImage});
    background-size: contain;
    margin-left:30px;
    float: left;
`;

export const ExperienceText = styled.div`
    display: visible;
    font-family: IBMPlexSansKR-Text;
    position: relative;
    top: -440px;
    left: 10px;
    margin: 10px;
    color: white;
    font-size: 30px;
`;

export const BlindDiv = styled.div`
    background-color: black;
    opacity: 0.7;
    width: 100%;
    height: 100%;
    visibility: ${props => props.view ? "hidden" : "visible"}
`;