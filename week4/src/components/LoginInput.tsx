import styled from "styled-components";
import useForm from "../hooks/useForm";

type Props = {};

const LoginInput = (props: Props) => {
  const [id, setId] = useForm("");
  const [pwd, setPwd] = useForm("");
  return (
    <LoginInputContainer>
      <LoginInputWrapper>
        <LoginInputLabel>ID</LoginInputLabel>
        <Logininput type="text" value={id} onChange={setId}></Logininput>
      </LoginInputWrapper>
      <LoginInputWrapper>
        <LoginInputLabel>PWD</LoginInputLabel>
        <Logininput type="password" value={pwd} onChange={setPwd}></Logininput>
      </LoginInputWrapper>
    </LoginInputContainer>
  );
};

const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
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
export default LoginInput;
