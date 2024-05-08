import styled from "styled-components";
import useForm from "../hooks/useForm";
import InputModule from "./InputModule";

type Props = {};

const LoginInput = (props: Props) => {
  const [id, setId] = useForm("");
  const [pwd, setPwd] = useForm("");
  return (
    <LoginInputContainer>
      <InputModule labelTxt="ID" inputType="text" val={id} onChange={setId} />
      <InputModule
        labelTxt="PWD"
        inputType="password"
        val={pwd}
        onChange={setPwd}
      />
    </LoginInputContainer>
  );
};

const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default LoginInput;
