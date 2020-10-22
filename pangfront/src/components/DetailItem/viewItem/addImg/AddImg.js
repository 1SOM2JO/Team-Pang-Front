import React, {useState, useCallback} from 'react';
import * as S from './AddImgStyle.js'
const AddImg = (props) =>{
    const [img, setImg] = useState(null);
    // const [img]
    const imgChange = useCallback((e) => {
      setImg(URL.createObjectURL(e.target.files[0]));
    }, []);
    return(
        <S.ImguploadBox>
        <S.importantImgBox>
          <S.importantImgText>사진</S.importantImgText>
          <S.colorText>*</S.colorText>
        </S.importantImgBox>
        <S.inputLabel for="imgFile" img={img}>
          사진등록
        </S.inputLabel>
        <form>
          <S.Imginput
            type="file"
            id="imgFile"
            onChange={imgChange}
            required
          ></S.Imginput>
        </form>
        <props.ReportBar></props.ReportBar>
      </S.ImguploadBox>
    )
}

export default AddImg;