import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  text: string;
  link?: string;
};

const CommonBtn = (props: Props) => {
  return (
    <BtnContainer>
      {props.link ? (
        <StyledLink to={props.link}>{props.text}</StyledLink>
      ) : (
        <BtnTxt>{props.text}</BtnTxt>
      )}
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  display: flex;
  width: 7rem;
  height: fit-content;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  background-color: black;

  border-radius: 3rem;
`;
const BtnTxt = styled.p`
  color: white;
  font-weight: 600;
`;
const StyledLink = styled(Link)`
  color: white;
  font-weight: 600;
  text-decoration: none;
`;

export default CommonBtn;
