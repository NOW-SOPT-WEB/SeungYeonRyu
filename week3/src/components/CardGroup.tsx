import React from "react";
import Card from "./Card";
import styled from "styled-components";

type Props = { difficulty: number };

const CardGroup = (props: Props) => {
  return (
    <CardGroupContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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
