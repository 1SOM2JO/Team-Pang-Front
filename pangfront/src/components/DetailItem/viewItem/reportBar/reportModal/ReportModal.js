import React from 'react';
import * as S from './ReportModalStyle.js';

const ReportModal = ({reportModal})=>{
    return(
        <S.container>
            <S.TitleBox>
                <S.Title>상품 신고하기</S.Title>
                <S.Close onClick={reportModal}> X</S.Close>
            </S.TitleBox>
            <S.Input></S.Input>
            <S.Button>신고하기</S.Button>
        </S.container>
    )
}
export default ReportModal;