import React from "react";
import CommonBtn from "./CommonBtn";
import styled from "styled-components";

type Props = {
  changeDifficulty: (difficulty: number) => void;
};

const LevelBtnGroup = (props: Props) => {
  const level = [
    { text: "EASY", num: 1 },
    { text: "NORMAL", num: 2 },
    { text: "HARD", num: 3 },
  ];
  const handleLevelBtn = (difficulty: number) => {
    return () => {
      props.changeDifficulty(difficulty);
    };
  };

  return (
    <BtnGroupContainer>
      {level.map((diff) => (
        <CommonBtn
          key={diff.text}
          text={diff.text}
          onclick={handleLevelBtn(diff.num)}
        />
      ))}
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
