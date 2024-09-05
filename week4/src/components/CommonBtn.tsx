import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  text: string;
  link?: string;
  onClick?: () => void;
};

const CommonBtn = (props: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }

    if (props.link) {
      navigate(props.link);
    }
  };
  return (
    <BtnContainer type="button" onClick={handleClick}>
      <p>{props.text}</p>
    </BtnContainer>
  );
};

const BtnContainer = styled.button`
  display: flex;
  width: 7rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: black;
  color: white;
  font-weight: 600;

  border-radius: 3rem;
`;

export default CommonBtn;
