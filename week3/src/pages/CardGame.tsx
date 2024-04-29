import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import LevelBtnGroup from "../components/LevelBtnGroup";
import CardGroup from "../components/CardGroup";
import FinishModal from "../components/FinishModal";
import { getCards } from "../utils/getCards";
import { getNumberofCards } from "../utils/getNumberofCards";

const CardGame = () => {
  const [cards, setCards] = useState<{ id: number; image: string }[]>([]);

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

  // 점수
  const [score, setScore] = useState(0);
  const handleScoreIncrease = () => {
    setScore(score + 1);
  };

  useEffect(() => {
    setCards(getCards(difficulty));
  }, [difficulty]);

  return (
    <>
      {finishModalOpen ? (
        <FinishModal handleFinishModal={handleFinishModal} />
      ) : null}

      <CardPageContainer>
        <Header score={score} maxScore={getNumberofCards(difficulty)} />
        <LevelBtnGroup
          difficulty={difficulty}
          changeDifficulty={changeDifficulty}
        />
        <CardGroup cards={cards} handleScoreIncrease={handleScoreIncrease} />
      </CardPageContainer>
    </>
  );
};

/** 배경 */
const CardPageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGrey};
`;
export default CardGame;
