import styled from "styled-components";

type Props = {
  text: string;
};

const CommonBtn = (props: Props) => {
  return <BtnContainer>{props.text}</BtnContainer>;
};

const BtnContainer = styled.button`
  width: 7rem;
  height: fit-content;

  padding: 0.5rem;
  background-color: black;
  color: white;
  font-weight: 600;

  border-radius: 3rem;
`;

export default CommonBtn;
