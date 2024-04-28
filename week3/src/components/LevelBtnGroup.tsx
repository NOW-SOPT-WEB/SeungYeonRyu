import React from "react";
import CommonBtn from "./CommonBtn";
import styled from "styled-components";

type Props = {};

const LevelBtnGroup = (props: Props) => {
  return (
    <BtnGroupContainer>
      <CommonBtn text="EASY" />
      <CommonBtn text="NORMAL" />
      <CommonBtn text="HARD" />
    </BtnGroupContainer>
  );
};
const BtnGroupContainer = styled.div`
  display: flex;
  gap: 0.6rem;

  margin-top: 6rem;
  margin-bottom: 2rem;
`;
export default LevelBtnGroup;
