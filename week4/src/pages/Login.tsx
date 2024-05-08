import styled from "styled-components";
import CommonBtn from "../components/CommonBtn";
import LoginInput from "../components/LoginInput";
import LoginImg from "../assets/images/loginImage.png";
type Props = {};

const Login = (props: Props) => {
  return (
    <LoginContainer>
      <LoginModal>
        <LoginTitle>Login</LoginTitle>
        <LoginImage src={LoginImg} />
        <LoginInput />
        <LoginBtnWrapper>
          <CommonBtn text="로그인" />
          <CommonBtn text="회원가입" link="/join" />
        </LoginBtnWrapper>
      </LoginModal>
    </LoginContainer>
  );
};
const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const LoginModal = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 6rem;
  background-color: white;
  border-radius: 4%;
  border: solid 3px black;
`;
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
const LoginBtnWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 3rem;
`;
export default Login;
