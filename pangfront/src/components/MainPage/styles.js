import styled from "styled-components";
import main1 from './../../img/main1.jpg';
import main2 from './../../img/main2.jpg';
import main3 from './../../img/main3.jpg';

export const MainImage = styled.img`
    width: 100%;
    height: 530px;
    background-image: url('${main1}');
    background-size: contain;
`;

export const Contents1 = styled.div`
    width: 1100px;
    height: 600px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 300px;
`;

export const Text1 = styled.div`
    float: left;
    width: 587px;
    height: 600px;
`;

export const Opacity = styled.div`
    position:absolute;
    width: 587px;
    height: 600px;
    background-color: #F5F5F5;
    opacity: 0.8;
`;

export const Content1Text1 = styled.div`
    font-size: 30px;
    position: relative;
    width: 300px;
    top: 70px;
    left: 40px;
    margin-bottom: 120px;
    line-height: 60px;
`;

export const Content1Text2 = styled.div`
    width: 400px;
    font-size: 20px;
    position: relative;
    top: 30px;
    left: 40px;
    margin-bottom: 100px;
    line-height: 40px;
`;

export const Button = styled.button`
    position: relative;
    top: 30px;
    left: 40px;
    padding: 5px 14px;
    border: 1px solid #BBBBBB;
    font-size: 20px;
    cursor: pointer;
    outline: none;
`;

export const Image1 = styled.img`
    float: right;
    width: 513px;
    height: 600px;
    background-image: url('${main2}');
    background-size: contain;
`;



export const Contents2 = styled.div`
    width: 1100px;
    height: 600px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 1000px;
    margin-bottom: 150px;
`;

export const Image2 = styled.img`
    float: left;
    width: 399px;
    height: 600px;
    background-image: url('${main3}');
    background-size: contain;
`;

export const Text2 = styled.div`
    background-color: #F5F5F5;
    float: left;
    width: 701px;
    height: 600px;
`;

export const Content2Text1 = styled.div`
    font-size: 30px;
    position: relative;
    top: 80px;
    left: 40px;
    width: 350px;
    margin-bottom: 120px;
    line-height: 60px;
`;

export const Content2Text2 = styled.div`
    width: 400px;
    font-size: 20px;
    position: relative;
    top: 60px;
    left: 40px;
    margin-bottom: 120px;
    line-height: 40px;
`;



export const Bottom = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 1700px;
    width: 1100px;
    height: 36px;
    border-top: 2px solid black;
    padding: 7px 20px; 
    // background-color: blue;
`;

export const BottomHeader = styled.div`
    font-size: 20px;
    font-weight: bold;
    float: left;
    margin-right: 50px;
`;


export const Develope = styled.div`
    width: 50px;
    float: left;
    margin-right: 135px;
    margin-top: 5px;

    &:nth-child(7) {
        margin-right: 0px;
    }
`;