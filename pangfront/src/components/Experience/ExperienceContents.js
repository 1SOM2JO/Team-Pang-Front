import React from "react";
import * as S from "./styles";
import ExperienceItem from "./ExperienceItem";

const ExperienceContents = ({ user }) => {
  return (
    <>
      {user.map((users) => (
        <ExperienceItem users={users}></ExperienceItem>
      ))}
    </>
  );
};

export default ExperienceContents;
