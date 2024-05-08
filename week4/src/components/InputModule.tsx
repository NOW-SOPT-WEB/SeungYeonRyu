import styled from "styled-components";

type Props = {
  labelTxt: string;
  inputType: string;
  val: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputModule = (props: Props) => {
  return (
    <LoginInputWrapper>
      <LoginInputLabel>{props.labelTxt}</LoginInputLabel>
      <Logininput
        type={props.inputType}
        value={props.val}
        onChange={props.onChange}
      ></Logininput>
    </LoginInputWrapper>
  );
};
const LoginInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const LoginInputLabel = styled.label`
  width: 2rem;
  text-align: right;
  font-size: 1rem;
  font-weight: 600;
`;
const Logininput = styled.input`
  width: 10rem;
  height: 1.4rem;
  border-radius: 3rem;
  border: solid 1px black;
`;
export default InputModule;
