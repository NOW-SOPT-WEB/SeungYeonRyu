import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { shuffleCards } from "../utils/shuffleCards";

type Props = { cards: { id: number; image: string }[] };

const CardGroup = (props: Props) => {
  return (
    <CardGroupContainer>
      {shuffleCards(props.cards).map((card) => (
        <Card key={"card1" + card.id} img={card.image} />
      ))}
      {shuffleCards(props.cards).map((card) => (
        <Card key={"card2" + card.id} img={card.image} />
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
`;
export default CardGroup;
