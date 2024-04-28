import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import LevelBtnGroup from "../components/LevelBtnGroup";
import CardGroup from "../components/CardGroup";

const CardGame = () => {
  return (
    <CardPageContainer>
      <Header score={3} maxScore={5} />
      <LevelBtnGroup />
      <CardGroup difficulty={10} />
    </CardPageContainer>
  );
};

/** 배경 */
const CardPageContainer = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGrey};
`;
export default CardGame;
