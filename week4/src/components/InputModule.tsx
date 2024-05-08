import styled from "styled-components";

type Props = {
  labelTxt: string;
  inputType: string;
  val: string;
  warningMsg?: string;
  warn?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  maxLen?: number;
};

const InputModule = (props: Props) => {
  return (
    <InputWrapper>
      <InputLabel>{props.labelTxt}</InputLabel>
      <InputBox>
        <Input
          type={props.inputType}
          value={props.val}
          onChange={props.onChange}
          maxLength={props.maxLen}
        />
        {props.warningMsg && props.warn ? (
          <ErrorMsg>{props.warningMsg}</ErrorMsg>
        ) : null}
      </InputBox>
    </InputWrapper>
  );
};
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const InputBox = styled.div`
  width: 14rem;
  display: flex;
  flex-direction: column;
`;
const InputLabel = styled.label`
  width: 6.5rem;
  text-align: right;
  font-size: 1rem;
  font-weight: 600;
`;
const Input = styled.input`
  width: 100%;
  height: 1.4rem;
  border-radius: 3rem;
  border: solid 1px black;
`;
const ErrorMsg = styled.p`
  padding: 0.2rem;
  color: red;
  font-size: 0.8rem;
  word-break: keep-all;
`;
export default InputModule;
