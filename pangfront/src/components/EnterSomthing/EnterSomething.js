import React, {useState} from 'react';
import * as S from './styles.js'

const EnterSomething = () => {
    const [product, setProduct] = useState(false);
    const [experience, setExprience] = useState(false);

    return (
        <div>
            <S.Contents>
                <S.ProductDiv onMouseEnter={() => setProduct(true)} onMouseLeave={() => setProduct(false)}>
                    <S.BlindDiv view={product}></S.BlindDiv>
                    <S.ProductText>상품등록</S.ProductText>
                </S.ProductDiv>
                <S.ExperienceDiv onMouseEnter={() => setExprience(true)} onMouseLeave={() => setExprience(false)}>
                    <S.BlindDiv view={experience}></S.BlindDiv>
                    <S.ExperienceText>체험등록</S.ExperienceText>
                </S.ExperienceDiv>
            </S.Contents>
        </div>
    )
}

export default EnterSomething;