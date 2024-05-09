import styled from "styled-components";
import useForm from "../hooks/useForm";
import InputModule from "./InputModule";
import CommonBtn from "./CommonBtn";
import { useEffect, useState } from "react";
import { memberLogin } from "../apis/memberLogin";
import { useNavigate } from "react-router-dom";
import { ALERTMSG, BTNTXT, INFORMATION } from "../constants/messages";
import { LoginType } from "../types";

const LoginInput = () => {
  const navigate = useNavigate();
  const [id, setId] = useForm("");
  const [pwd, setPwd] = useForm("");

  // 경고메시지 여부
  const [idWarn, setIdwarn] = useState(false);
  const [pwdWarn, setPwdwarn] = useState(false);

  /** 로그인 */
  const handleLogin = async () => {
    if (checkValid()) {
      const data: LoginType = {
        authenticationId: id,
        password: pwd,
      };
      const res = await memberLogin(data);
      if (res) {
        if (confirm(res?.data.message))
          navigate(`/main/${res.headers.location}`);
      }
    }
  };

  /** 비어있는지 체크 */
  const checkValid = () => {
    if (id === "") {
      setIdwarn(true);
    }
    if (pwd === "") {
      setPwdwarn(true);
    }
    if (pwd === "" || id === "") {
      return false;
    }
    return true;
  };

  // 변화 있을 때 경고메시지 켜져있을 경우 끔
  useEffect(() => {
    if (idWarn && id !== "") setIdwarn(false);
    if (pwdWarn && pwd !== "") setPwdwarn(false);
  }, [id, pwd]);

  return (
    <>
      <LoginInputContainer>
        <InputModule
          labelTxt={INFORMATION.id}
          inputType="text"
          val={id}
          onChange={setId}
          warningMsg={ALERTMSG.id}
          warn={idWarn}
        />
        <InputModule
          labelTxt={INFORMATION.pwd}
          inputType="password"
          val={pwd}
          onChange={setPwd}
          warningMsg={ALERTMSG.pwd}
          warn={pwdWarn}
        />
      </LoginInputContainer>
      <LoginBtnWrapper>
        <CommonBtn text={BTNTXT.login} onClick={handleLogin} />
        <CommonBtn text={BTNTXT.join} link="/join" />
      </LoginBtnWrapper>
    </>
  );
};

const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const LoginBtnWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 3rem;
`;
export default LoginInput;
