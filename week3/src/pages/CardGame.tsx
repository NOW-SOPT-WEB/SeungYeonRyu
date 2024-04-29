import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import LevelBtnGroup from "../components/LevelBtnGroup";
import CardGroup from "../components/CardGroup";
import FinishModal from "../components/FinishModal";
import { getCards } from "../utils/getCards";
import { getNumberofCards } from "../utils/getNumberofCards";
import { shuffleCards } from "../utils/shuffleCards";

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

  // difficulty 바뀌면 새로운 카드셋 설정
  useEffect(() => {
    const newCards = getCards(difficulty);
    setCards(shuffleCards(newCards.concat(newCards)));
  }, [difficulty]);

  // score이 maxscore 넘었는지 체크
  useEffect(() => {
    if (score == getNumberofCards(difficulty)) {
      handleFinishModal();
      setResetFlag(true);
    }
  }, [score]);

  // reset 여부
  const [resetFlag, setResetFlag] = useState(false);
  const giveResetSign = () => {
    setResetFlag(true);
  };
  const turnOffResetFlag = () => {
    setResetFlag(false);
  };
  return (
    <>
      {finishModalOpen ? (
        <FinishModal handleFinishModal={handleFinishModal} />
      ) : null}

      <CardPageContainer>
        <Header
          score={score}
          maxScore={getNumberofCards(difficulty)}
          giveResetSign={giveResetSign}
        />
        <LevelBtnGroup
          difficulty={difficulty}
          changeDifficulty={changeDifficulty}
          giveResetSign={giveResetSign}
        />
        <CardGroup
          cards={cards}
          handleScoreIncrease={handleScoreIncrease}
          resetFlag={resetFlag}
          turnOffResetFlag={turnOffResetFlag}
        />
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
