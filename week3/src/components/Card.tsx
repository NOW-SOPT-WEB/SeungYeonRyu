import React from "react";
import styled from "styled-components";

type Props = {};

const Card = (props: Props) => {
  return <CardContainer />;
};
const CardContainer = styled.div`
  width: 9rem;
  height: 12rem;
  border-radius: 12px;
  background-color: lightblue;
`;
export default Card;
