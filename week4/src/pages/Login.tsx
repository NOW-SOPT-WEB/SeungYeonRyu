import styled from "styled-components";
import LoginInput from "../components/LoginInput";
import LoginImg from "../assets/images/loginImage.png";
import ModalLayout from "../components/ModalLayout";

const Login = () => {
  return (
    <ModalLayout>
      <LoginTitle>Login</LoginTitle>
      <LoginImage src={LoginImg} alt="login react" />
      <LoginInput />
    </ModalLayout>
  );
};

const LoginTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;
const LoginImage = styled.img`
  width: 8rem;
  height: 7rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;
export default Login;
