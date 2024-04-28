import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

type Props = {};

const CardGame = (props: Props) => {
  return (
    <CardPageContainer>
      <Header />
    </CardPageContainer>
  );
};

/** 배경 */
const CardPageContainer = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.darkGrey};
`;
export default CardGame;
