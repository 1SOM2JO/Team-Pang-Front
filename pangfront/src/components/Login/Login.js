import React, {useState} from 'react';              
import * as S from './styles';

const Login = ({onLogin}) => {
    const [loginCheck, setloginCheck] = useState(true);
    const onLoginCheck = () => {
        setloginCheck(!loginCheck);
    }
    return(
        <S.MainDiv>
            <S.Maintext>
                로그인
            </S.Maintext>
            <input type="text" placeholder="아이디"/>
            <br/>
            <input placeholder="비밀번호" type="password"/>
            <br/>
            <button onClick={onLoginCheck}>로그인</button>
            {!loginCheck && 
            <S.LoginCheck>
                가입하지 않은 아이디이거나, 비밀번호가 틀렸습니다.
            </S.LoginCheck>
            }
            <S.Text>
                아이디찾기/비밀번호찾기/회원가입
            </S.Text>
        </S.MainDiv>
    )
}

export default Login;