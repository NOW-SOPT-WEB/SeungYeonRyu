import { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import LevelBtnGroup from "../components/LevelBtnGroup";
import CardGroup from "../components/CardGroup";
import FinishModal from "../components/FinishModal";
import { getCards } from "../utils/getCards";
import { getNumberofCards } from "../utils/getNumberofCards";
import { shuffleCards } from "../utils/shuffleCards";
import { Card } from "../types";

const CardGame = () => {
  // 카드 데이터
  const [cards, setCards] = useState<Card[]>([]);

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
  /** 점수 1씩 올리기 */
  const handleScoreIncrease = () => {
    setScore(score + 1);
  };
  /** 점수 0으로 초기화 */
  const resetScore = () => {
    setScore(0);
  };

  // reset 여부
  const [resetFlag, setResetFlag] = useState(false);
  /** 리셋 필요시 사용 */
  const giveResetSign = () => {
    setResetFlag(true);
  };
  /** 리셋 완료시 사용 */
  const turnOffResetFlag = () => {
    setResetFlag(false);
  };

  // difficulty change, after reset => 새로운 카드셋 설정
  useEffect(() => {
    const newCards = getCards(difficulty);
    setCards(shuffleCards(newCards.concat(newCards)));
  }, [difficulty, resetFlag]);

  // score이 maxscore 넘었는지 체크
  useEffect(() => {
    if (score == getNumberofCards(difficulty)) {
      handleFinishModal();
      setResetFlag(true);
    }
  }, [score]);
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
          resetScore={resetScore}
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
