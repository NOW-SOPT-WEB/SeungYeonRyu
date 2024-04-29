import React, { useState } from "react";
import styled from "styled-components";

type Props = {};

const Card = (props: Props) => {
  const [flipped, setFlipped] = useState(false);

  /** 카드 뒤집기 */
  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <CardFlipWrapper onClick={flipCard}>
      <CardContainer flipped={flipped}>
        <CardBack />
        <CardFront />
      </CardContainer>
    </CardFlipWrapper>
  );
};

const CardFlipWrapper = styled.div`
  width: 9rem;
  height: 12rem;
  perspective: 1000px;
`;

const CardContainer = styled.div<{ flipped: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "rotateY(0)")};
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  backface-visibility: hidden;
`;

const CardFront = styled(CardSide)`
  background-color: white;
`;

const CardBack = styled(CardSide)`
  background-color: ${({ theme }) => theme.colors.pointGreen};
  transform: rotateY(180deg);
`;

export default Card;
