import styled, {createGlobalStyle} from 'styled-components'

export const MainDiv = styled.div`
    width : 80%;
    height : 100%;
    margin : 0 auto;
    align-items : center;
    justify-content : center;
    text-align:center;

    input[type=text] {
        font-family:JSDongkang-Regular;
    }       
    >input, button  {
        ::placeholder{
            @font-face { font-family: 'JSDongkang-Regular'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff'); font-weight: normal; font-style: normal; }
            font-family : JSDongkang-Regular;
            font-size : 22px;
        }
        margin-bottom : 30px;
        font-size : 22px;
        align-items:center;
        width : 70%;
        height : 70px;
        outline-color : #9F9F9F;
        color : black;
    }
    >button{
       background-color:#AAF1BB;
       border : 0;
       width : width+10px;
    }
    >input{
        border : 1px solid #C4C4C4;
        padding-left:20px;
        box-sizing : border-box;   
    }
`

export const Text = styled.div`
    @font-face { font-family: 'JSDongkang-Regular'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff'); font-weight: normal; font-style: normal; }
    font-family : JSDongkang-Regular;
    font-size : 20px;
`

export const Maintext = styled.div`
    margin-bottom : 70px;
    font-size : 50px;
    text-align : center;
    @font-face { font-family: 'IBMPlexSansKR-Text'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Text.woff') format('woff'); font-weight: normal; font-style: normal; };
    font-family : IBMPlexSansKR-Text;
`

export const ID = styled.div`
    @font-face { font-family: 'JSDongkang-Regular'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff'); font-weight: normal; font-style: normal; }
    font-family : JSDongkang-Regular;
    font-size : 22px;
`

export const LoginCheck = styled.div`
    font-family : IBMPlexSansKR-Text;
    font-size : 22px;
    margin-bottom : 25px;
    color : red;
`   