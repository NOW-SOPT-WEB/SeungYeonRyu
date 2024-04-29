import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import LevelBtnGroup from "../components/LevelBtnGroup";
import CardGroup from "../components/CardGroup";
import FinishModal from "../components/FinishModal";

const CardGame = () => {
  // 모달
  const [finishModalOpen, setFinishModalOpen] = useState(false);
  const handleFinishModal = () => {
    setFinishModalOpen(!finishModalOpen);
  };

  // 난이도
  // 쉬움 1, 보통 2, 어려움 3
  const [difficulty, setDifficulty] = useState(2);
  const changeDifficulty = (difficulty: number) => {
    setDifficulty(difficulty);
  };
  return (
    <>
      {finishModalOpen ? (
        <FinishModal handleFinishModal={handleFinishModal} />
      ) : null}

      <CardPageContainer>
        <Header score={3} maxScore={5} />
        <LevelBtnGroup changeDifficulty={changeDifficulty} />
        <CardGroup difficulty={10} />
      </CardPageContainer>
    </>
  );
};

/** 배경 */
const CardPageContainer = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGrey};
`;
export default CardGame;
