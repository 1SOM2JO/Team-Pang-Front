import styled, {createGlobalStyle} from 'styled-components'


export const NoLoginText = styled.div`
    @font-face { font-family: 'JSDongkang-Regular'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff'); font-weight: normal; font-style: normal; }@font-face { font-family: 'JSDongkang-Regular'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff'); font-weight: normal; font-style: normal; }
    font-family : JSDongkang-Regular;
    font-size : 17px;
    display : flex;
    justify-content : flex-end;
    height : 10px;
    padding-top:10px;
    align-items : center;
    background-color:#FDFDFD;
    > div{
        margin : 0 20px;
    }
    transform:translate(40px);
`

export const Maindiv = styled.div`
    width : 80%;
    
    margin : 0 auto;
`
export const MainBox = styled.div`
    background-color:#FDFDFD;
    width:100%;
    height:30px;
`