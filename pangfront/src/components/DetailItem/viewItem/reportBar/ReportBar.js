import React from 'react'
import * as S from './ReportBarStyle.js'
import UserImg from '../../../../img/BasicPerson.png'
const ReportBar = () =>{
    return(
        <S.Container>
            <S.UserBox>
                <S.UserImg src={UserImg}/>
                <S.UserDataBox>
                    
                </S.UserDataBox>
            </S.UserBox>
        </S.Container>
    )
}
export default ReportBar;