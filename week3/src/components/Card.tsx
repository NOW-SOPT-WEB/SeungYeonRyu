import styled from "styled-components";
import { backImg } from "../assets/cardImage/cardImage";

type Props = {
  cardId: string;
  card: {
    id: number;
    image: string;
  };
  handleCurrent: (cardId: string) => void;
  flip: boolean;
};

const Card = (props: Props) => {
  return (
    <CardFlipWrapper
      onClick={() => {
        props.handleCurrent(props.cardId);
      }}
    >
      <CardContainer $flipped={props.flip}>
        <CardBack $img={props.card.image} />
        <CardFront $img={backImg} />
      </CardContainer>
    </CardFlipWrapper>
  );
};

const CardFlipWrapper = styled.div`
  width: 9rem;
  height: 12rem;
  perspective: 1000px;
`;

const CardContainer = styled.div<{ $flipped: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
  transform: ${({ $flipped }) => ($flipped ? "rotateY(180deg)" : "rotateY(0)")};
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  backface-visibility: hidden;
`;

const CardFront = styled(CardSide)<{ $img: string }>`
  background-image: url(${(props) => props.$img});
  background-size: cover;
  background-position: center;
`;

const CardBack = styled(CardSide)<{ $img: string }>`
  background-color: ${({ theme }) => theme.colors.pointGreen};
  transform: rotateY(180deg);
  background-image: url(${(props) => props.$img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default Card;
