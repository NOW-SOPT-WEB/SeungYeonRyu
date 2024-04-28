import React from "react";
import styled from "styled-components";

type Props = {};

const Header = (props: Props) => {
  return (
    <HeaderContainer>
      <HeaderH1>웨비의 카드 맞히기~</HeaderH1>
      <HeaderScore>score</HeaderScore>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainBlue};
`;

const HeaderH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const HeaderScore = styled.p`
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
export default Header;
