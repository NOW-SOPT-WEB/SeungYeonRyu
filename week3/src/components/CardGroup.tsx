import { useEffect, useState } from "react";
import Card from "./Card";
import styled from "styled-components";

type Props = {
  cards: { id: number; image: string }[];
  handleScoreIncrease: () => void;
  resetScore: () => void;
  resetFlag: boolean;
  turnOffResetFlag: () => void;
};

const CardGroup = (props: Props) => {
  // 이미 맞힌 카드
  const [correctCards, setCorrectCards] = useState<string[]>([]);

  // 현재 선택한 카드
  const [current, setCurrent] = useState("-1");
  const handleCurrent = (cardId: string) => {
    if (cardId === current) {
      // 같은 카드 다시 누르면 뒤집기
      setCurrent("-1");
    } else {
      // 다른 카드인 경우 짝인지 확인
      checkCardMatch(cardId) ? setCurrent("-1") : setCurrent(cardId);
    }
  };

  /** 선택한 카드 맞았는지 확인 */
  const checkCardMatch = (cardId: string) => {
    // 이미 있는 경우
    if (correctCards.includes(cardId.split("_")[0])) {
      return false;
    }
    // correct
    if (current.split("_")[0] === cardId.split("_")[0]) {
      setCorrectCards((prev) => [...prev, cardId.split("_")[0]]);
      props.handleScoreIncrease();
      return true;
    } else {
      //wrong
      return false;
    }
  };

  /** 현재 선택한 카드 리셋 */
  const resetCurrent = () => {
    setCurrent("-1");
    setCorrectCards([]);
    props.resetScore();
  };

  // resetFlag true면 reset
  useEffect(() => {
    if (props.resetFlag) {
      resetCurrent();
      props.turnOffResetFlag();
    }
  }, [props.resetFlag]);

  return (
    <CardGroupContainer>
      {props.cards.map((card, idx) => (
        <Card
          key={card.id + "_" + idx}
          cardId={card.id + "_" + idx}
          card={card}
          handleCurrent={handleCurrent}
          flip={
            current === card.id + "_" + idx ||
            correctCards.includes(String(card.id))
              ? true
              : false
          }
        />
      ))}
    </CardGroupContainer>
  );
};
const CardGroupContainer = styled.div`
  width: 80%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 10rem;
`;
export default CardGroup;
