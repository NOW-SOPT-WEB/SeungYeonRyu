import styled from "styled-components";

type Props = {
  labelTxt: string;
  inputType: string;
  val: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputModule = (props: Props) => {
  return (
    <InputWrapper>
      <InputLabel>{props.labelTxt}</InputLabel>
      <Input
        type={props.inputType}
        value={props.val}
        onChange={props.onChange}
      ></Input>
    </InputWrapper>
  );
};
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const InputLabel = styled.label`
  width: 6.5rem;
  text-align: right;
  font-size: 1rem;
  font-weight: 600;
`;
const Input = styled.input`
  width: 10rem;
  height: 1.4rem;
  border-radius: 3rem;
  border: solid 1px black;
`;
export default InputModule;
