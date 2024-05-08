import styled from "styled-components";
import ModalLayout from "../components/ModalLayout";
import useForm from "../hooks/useForm";
import InputModule from "../components/InputModule";
import CommonBtn from "../components/CommonBtn";
import { memberJoin } from "../apis/memberJoin";
import { useNavigate } from "react-router-dom";
import { ALERTMSG } from "../constants/messages";
import { checkPhoneNo } from "../utils/checkPhoneNo";
import { useState } from "react";
import { verifyPwd } from "../utils/verifyPwd";

const Join = () => {
  const navigate = useNavigate();
  const [id, setId] = useForm("");
  const [pwd, setPwd] = useForm("");
  const [nickName, setNickName] = useForm("");
  const [phone, setPhone] = useState("");

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(checkPhoneNo(e.target.value));
  };

  /** 회원가입 */
  const handleJoin = async () => {
    const data = {
      authenticationId: id,
      password: pwd,
      nickname: nickName,
      phone: phone,
    };
    if (checkInput()) {
      const res = await memberJoin(data);
      if (res) {
        if (confirm(res?.data.message)) navigate("/");
      }
    }
  };

  /** 인풋 확인 */
  const checkInput = () => {
    if (id === "") {
      alert(ALERTMSG.id);
      return false;
    }
    if (pwd === "") {
      alert(ALERTMSG.pwd);
      return false;
    }
    if (nickName === "") {
      alert(ALERTMSG.nickName);
      return false;
    }
    if (phone === "") {
      alert(ALERTMSG.phone);
      return false;
    } else if (!verifyPwd(pwd)) {
      alert(ALERTMSG.pwdFormat);
      return false;
    }
    return true;
  };
  return (
    <ModalLayout>
      <JoinTitle>회원가입하기</JoinTitle>
      <InputContainer>
        <InputModule labelTxt="ID" inputType="text" val={id} onChange={setId} />
        <InputModule
          labelTxt="비밀번호"
          inputType="password"
          val={pwd}
          onChange={setPwd}
          warningMsg="비밀번호 형식은 8자이상, 숫자, 특수문자, 영어 알파벳이 포함되어야 합니다."
          warn={true}
        />
        <InputModule
          labelTxt="닉네임"
          inputType="text"
          val={nickName}
          onChange={setNickName}
        />
        <InputModule
          labelTxt="전화번호"
          inputType="text"
          val={phone}
          onChange={onPhoneChange}
          warningMsg="전화번호 형식은 010-****-****입니다."
          warn={true}
          maxLen={13}
        />
      </InputContainer>
      <BtnWrapper>
        <CommonBtn text="회원가입" onClick={handleJoin} />
        <CommonBtn text="뒤로가기" link="/" />
      </BtnWrapper>
    </ModalLayout>
  );
};
const JoinTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 2rem;
`;
const BtnWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 3rem;
`;
export default Join;
