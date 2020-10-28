import React from "react";
import * as S from "./styles";
import farmer from "./farmer.jpg";
const ExperienceItem = ({ users }) => {
  const { id, exname, exwhere, price, endtime } = users;
  console.log("1");
  console.log(users);
  return (
    <S.ExperienceItemMain>
      <img src={farmer}></img>
      <div id="title">{users.exname}</div>
      <S.InnerExperience>
        <div>
          <div id="price">{users.price}원</div>
          <div id="exwhere">{users.exwhere}</div>
        </div>
        <div id="endtime">10월 10일 ~ {users.endtime}</div>
      </S.InnerExperience>
    </S.ExperienceItemMain>
  );
};

export default ExperienceItem;
