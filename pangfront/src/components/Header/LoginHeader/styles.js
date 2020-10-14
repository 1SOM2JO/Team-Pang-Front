import styled, {createGlobalStyle} from 'styled-components'


export const NoLoginText = styled.div`
    @font-face { font-family: 'JSDongkang-Regular'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff'); font-weight: normal; font-style: normal; }@font-face { font-family: 'JSDongkang-Regular'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff'); font-weight: normal; font-style: normal; }
    font-family : JSDongkang-Regular;
    font-size : 20px;
    display : flex;
    justify-content : flex-end;
    height : 50px;
    align-items : center;
    > div{
        margin : 0 10px;
    }
`

export const Maindiv = styled.div`
    width : 80%;
    margin : 0 auto;
`