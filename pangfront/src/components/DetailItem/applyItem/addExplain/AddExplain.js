import React from 'react';
import * as S from './AddExplainStyle.js'
const AddExplain = ()=>{
    return(
        <S.ItemExplainBox>
          <S.Description>설명</S.Description>
          <S.InputDescription placeholder="설명을 입력하세요"></S.InputDescription>
        </S.ItemExplainBox>
    )
}
export default AddExplain