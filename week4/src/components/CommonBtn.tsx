import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  text: string;
  link?: string;
  onClick?: () => void;
};

const CommonBtn = (props: Props) => {
  return (
    <BtnContainer>
      {props.link ? (
        <StyledLink to={props.link}>{props.text}</StyledLink>
      ) : (
        <p onClick={props.onClick}>{props.text}</p>
      )}
    </BtnContainer>
  );
};
const buttonStyle = `
display: flex;
width: 7rem;
height: 1.5rem;
justify-content: center;
align-items: center;

padding: 0.5rem;
background-color: black;
color: white;
font-weight: 600;

border-radius: 3rem;
`;
const BtnContainer = styled.div`
  ${buttonStyle}
`;
const StyledLink = styled(Link)`
  ${buttonStyle}
  text-decoration: none;
`;

export default CommonBtn;
