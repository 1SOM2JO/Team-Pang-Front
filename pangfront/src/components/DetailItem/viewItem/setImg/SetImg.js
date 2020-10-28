import React, {useState, useCallback} from 'react';
import * as S from './SetImgStyle.js'
import TomatoEx from '../../../../img/TomatoEx.png'
const SetImg = (props) =>{
    const [img, setImg] = useState(null);
    const imgChange = useCallback((e) => {
      setImg(URL.createObjectURL(e.target.files[0]));
    }, []);
    return(
        <S.ImguploadBox>
        <S.Img src={TomatoEx}></S.Img>
        <props.ReportBar ></props.ReportBar>
      </S.ImguploadBox>
    )
}

export default SetImg;