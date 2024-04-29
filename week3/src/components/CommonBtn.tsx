import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
  color?: string;
  onclick: () => void;
};

const CommonBtn = (props: Props) => {
  return (
    <BtnContainer color={props.color} onClick={props.onclick}>
      {props.text}
    </BtnContainer>
  );
};
const BtnContainer = styled.button`
  width: fit-content;
  height: fit-content;

  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.pointGreen};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  padding: 0.2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  border: none;
  border-radius: 50px;
`;
export default CommonBtn;
