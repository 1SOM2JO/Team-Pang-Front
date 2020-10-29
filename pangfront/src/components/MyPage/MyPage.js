import React, {useState} from 'react';
import ItemPage from './ItemPage.js';
import PI from './../../img/PI.jpg';
import EI from './../../img/EI.jpg';
import * as S from './styles.js'
import Header from './../Header/Header';


const MyPage = () => {
    const [nickname, setNickName] = useState('신두평');
    const [location, setLocation] = useState('강원도 강릉');
    const [productNum, setProductNum] = useState(0);
    const [experienceNum, setExperienceNum] = useState(0);
    const [productItem, setProductItem] = useState([
        {id: 1, image: PI, title: '오이', price: 5000, unit: 10, area: "대전광역시 유성구"},
        {id: 2, image: PI, title: '오이', price: 5000, unit: 10, area: "대전광역시 유성구"},
    ]);
    const [experienceItem, setExperienceItem] = useState([
        {id: 1, image: EI, title: '[소젖 짜기 체험] 고소한 우유와 재미있는 체험~', price: 3000, area: "경기도 의정부시", date: "10월 10일 ~ 10월 20일"},
        {id: 2, image: EI, title: '[소젖 짜기 체험] 고소한 우유와 재미있는 체험~', price: 3000, area: "경기도 의정부시", date: "10월 10일 ~ 10월 20일"},
        {id: 3, image: EI, title: '[소젖 짜기 체험] 고소한 우유와 재미있는 체험~', price: 3000, area: "경기도 의정부시", date: "10월 10일 ~ 10월 20일"},
    ]);

    const productList = productItem.map(
        item => (
            <ItemPage kind="product" image={item.image} title={item.title} price={item.price} unit={item.unit} area={item.area} date="none"></ItemPage>
        )
    )

    const experienceList = experienceItem.map(
        item => (
            <ItemPage kind="experience" image={item.image} title={item.title} price={item.price} unit="" area={item.area} date={item.date}></ItemPage>
        )
    )

    return (
        <>
            <Header></Header>
            <S.MyPageBack>
                <S.Header>
                    <S.MyImage></S.MyImage>
                    <S.MyImpormation>
                        <S.MyNickname>{nickname}님</S.MyNickname>
                        <S.MyLocation>{location}</S.MyLocation>
                    </S.MyImpormation>
                    <S.My>
                        <S.ProductDibs>
                            <div>찜한 상품</div>
                            <S.ProductNumber>{productNum}개</S.ProductNumber>
                        </S.ProductDibs>
                        <S.ExperienceDibs>
                            <div>찜한 체험</div>
                            <S.ExperienceNumber>{experienceNum}개</S.ExperienceNumber>
                        </S.ExperienceDibs>
                    </S.My>
                </S.Header>
                <S.Contents>
                    <S.ProductContents>
                        <div>{productList}</div>
                    </S.ProductContents>
                    <S.ExperienceContents>
                        <div>{experienceList}</div>
                    </S.ExperienceContents>
                </S.Contents>
            </S.MyPageBack>
        </>
    )
}

export default MyPage;