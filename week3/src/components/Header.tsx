import React from "react";
import styled from "styled-components";
import CommonBtn from "./CommonBtn";

type Props = {
  score: number;
  maxScore: number;
  giveResetSign: () => void;
};

const Header = (props: Props) => {
  return (
    <HeaderContainer>
      <HeaderTxtWrapper>
        <HeaderH1>웨비의 카드 맞히기~</HeaderH1>
        <HeaderScore>
          {props.score} / {props.maxScore}
        </HeaderScore>
      </HeaderTxtWrapper>

      <CommonBtn text="Reset" onclick={props.giveResetSign} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainBlue};
`;

const HeaderTxtWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
`;

const HeaderH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const HeaderScore = styled.p`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
export default Header;
