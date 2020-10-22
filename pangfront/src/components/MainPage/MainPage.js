import React from 'react';
import * as S from './styles';
import Header from './../Header/Header';

const MainPage = () => {
    const develope = ['신두평','박재훈','유명철','이성진','이지수','최승교'];

    const developeList = develope.map(
        dev => (
            <S.Develope>{dev}</S.Develope>
        )
    )

    return (
        <>
            <Header></Header>
            <S.MainImage></S.MainImage>
            <S.Contents1>
                <S.Text1>
                    <S.Opacity></S.Opacity>
                    <S.Content1Text1>농민, 소비자 모두에게 이득되는 거래</S.Content1Text1>
                    <S.Content1Text2>소비자는 좋은 가격에 질 좋은 상품을 구매, 농민은 그 동안 팔기 힘들었던 상품 판매</S.Content1Text2>
                    <S.Button>상품 구매</S.Button>
                </S.Text1>
                <S.Image1></S.Image1>
            </S.Contents1>
            <S.Contents2>
                <S.Image2></S.Image2>
                <S.Text2>
                    <S.Content2Text1>갑갑한 도시에서 벗어나 가족들과 즐거운 체험</S.Content2Text1>
                    <S.Content2Text2>소비자는 좋은 가격에 질 좋은 상품을 구매, 농민은 그 동안 팔기 힘들었던 상품 판매</S.Content2Text2>
                    <S.Button>체험하기</S.Button>
                </S.Text2>
            </S.Contents2>
            <S.Bottom>
                <S.BottomHeader>PANG</S.BottomHeader>
                {developeList}
            </S.Bottom>
        </>
    )
}

export default MainPage;
