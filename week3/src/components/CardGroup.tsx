import { useEffect, useState } from "react";
import Card from "./Card";
import styled from "styled-components";

type Props = {
  cards: { id: number; image: string }[];
  handleScoreIncrease: () => void;
  resetFlag: boolean;
  turnOffResetFlag: () => void;
};

const CardGroup = (props: Props) => {
  // 현재 선택한 카드
  const [current, setCurrent] = useState(-1);
  const handleCurrent = (cardId: number) => {
    setCurrent(cardId);
  };

  /** 현재 선택한 카드 리셋 */
  const resetCurrent = () => {
    setCurrent(-1);
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
          key={"card" + card.id + idx}
          card={card}
          handleCurrent={handleCurrent}
          flip={current === card.id ? true : false}
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
