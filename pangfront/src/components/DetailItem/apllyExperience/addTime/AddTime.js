import React, {useState, useCallback} from "react";
import * as S from "./AddTimeStyle.js";
import GetTime from './GetTime.js'

const AddTime = () => {
  const [nowDate, setNowDate] = useState(GetTime());
  const [future, setFuture] = useState(GetTime());
  const SetNowTime = useCallback((e)=>{
    setNowDate(e.target.value);
  },[])
  const SetFutureTime = ((e)=>{
    setFuture(e.target.value)
  },[])
  return (
    <>
      <S.TitleBox>
        <S.TimeTitle>기간</S.TimeTitle>
        <S.colorText>*</S.colorText>
      </S.TitleBox>
      <S.TimeBox>
        <S.FirstTime type="date" value={nowDate} onChange={SetNowTime}></S.FirstTime>
        <S.LastTime type="date" value={future} onChange={SetFutureTime}></S.LastTime>
      </S.TimeBox>
    </>
  );
};
export default AddTime;
