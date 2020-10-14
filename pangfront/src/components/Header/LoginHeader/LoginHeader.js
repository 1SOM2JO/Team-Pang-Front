import React, {useState} from 'react'
import * as S from './styles';
    
const LoginHeader = ({isLoggedin}) => {
    const [loginCheck, setloginCheck] = useState(isLoggedin);
    const onLoginCheck = () =>{
        setloginCheck(!loginCheck);
    }
    const pageChange = () => {
        window.location.href = './Login'
    }
    return(
        <S.Maindiv>
            <S.NoLoginText>
                {loginCheck ? 
                <>
                    <div onClick={pageChange}>로그아웃</div>
                    <div onClick={onLoginCheck}>마이페이지</div>
                </>:
                <>
                    <div onClick={pageChange}>로그인</div>
                    <div onClick={onLoginCheck}>회원가입</div>
                </>}
            </S.NoLoginText>
        </S.Maindiv>
    )
}

export default LoginHeader;