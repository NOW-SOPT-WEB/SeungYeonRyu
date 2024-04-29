import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import LevelBtnGroup from "../components/LevelBtnGroup";
import CardGroup from "../components/CardGroup";
import FinishModal from "../components/FinishModal";
import { getCards } from "../utils/getCards";

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

  useEffect(() => {
    setCards(getCards(difficulty));
  }, [difficulty]);

  return (
    <>
      {finishModalOpen ? (
        <FinishModal handleFinishModal={handleFinishModal} />
      ) : null}

      <CardPageContainer>
        <Header score={3} maxScore={5} />
        <LevelBtnGroup
          difficulty={difficulty}
          changeDifficulty={changeDifficulty}
        />
        <CardGroup cards={cards} />
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
