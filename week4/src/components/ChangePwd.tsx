import styled from "styled-components";
import InputModule from "../components/InputModule";
import useForm from "../hooks/useForm";
import CommonBtn from "./CommonBtn";
import { memberChangePwd } from "../apis/memberChangePwd";
import { ChangePwdType } from "../types";
import { useNavigate } from "react-router-dom";
import { ALERTMSG, BTNTXT, PWDCHANGELABEL } from "../constants/messages";

type Props = {
  memberId: string;
};

const ChangePwd = (props: Props) => {
  const navigate = useNavigate();
  const [prevPwd, setPrevPwd] = useForm("");
  const [newPwd, setNewPwd] = useForm("");
  const [checkNewPwd, setCheckNewPwd] = useForm("");

  /** 비밀번호 바꾸기 */
  const handlePwdChange = async () => {
    if (checkInput()) {
      const data: ChangePwdType = {
        previousPassword: prevPwd,
        newPassword: newPwd,
        newPasswordVerification: checkNewPwd,
      };
      const res = await memberChangePwd(data, props.memberId);
      if (res) {
        alert(res.data.message);
        navigate("/");
      }
    }
  };

  /** 인풋 확인 */
  const checkInput = () => {
    if (props.memberId === "") {
      console.log("no memberId error");
      return false;
    }
    if (prevPwd === "") {
      alert(ALERTMSG.changePwd.prevPwd);
      return false;
    }
    if (newPwd === "") {
      alert(ALERTMSG.changePwd.newPwd);
      return false;
    }
    if (checkNewPwd === "") {
      alert(ALERTMSG.changePwd.checkNewPwd);
      return false;
    }
    if (newPwd !== checkNewPwd) {
      alert(ALERTMSG.changePwd.notSame);
      return false;
    }
    return true;
  };
  return (
    <ChangePwdContainer>
      <InputContainer>
        <InputModule
          labelTxt={PWDCHANGELABEL.prevPwd}
          inputType="password"
          val={prevPwd}
          onChange={setPrevPwd}
        />
        <InputModule
          labelTxt={PWDCHANGELABEL.newPwd}
          inputType="password"
          val={newPwd}
          onChange={setNewPwd}
        />
        <InputModule
          labelTxt={PWDCHANGELABEL.checkNewPwd}
          inputType="password"
          val={checkNewPwd}
          onChange={setCheckNewPwd}
        />
      </InputContainer>
      <CommonBtn text={BTNTXT.changePwd} onClick={handlePwdChange} />
    </ChangePwdContainer>
  );
};
const ChangePwdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  gap: 2rem;
`;
export default ChangePwd;
