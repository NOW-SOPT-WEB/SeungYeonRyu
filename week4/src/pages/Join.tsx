import styled from "styled-components";
import ModalLayout from "../components/ModalLayout";
import useForm from "../hooks/useForm";
import InputModule from "../components/InputModule";
import CommonBtn from "../components/CommonBtn";
import { memberJoin } from "../apis/memberJoin";
import { useNavigate } from "react-router-dom";
import {
  ALERTMSG,
  BTNTXT,
  INFORMATION,
  INFORMMSG,
} from "../constants/messages";
import { checkPhoneNo } from "../utils/checkPhoneNo";
import { useRef, useState } from "react";
import { verifyPwd } from "../utils/verifyPwd";
import { JoinType } from "../types";

const Join = () => {
  const navigate = useNavigate();
  const [id, setId] = useForm("");
  const [pwd, setPwd] = useForm("");
  const [nickName, setNickName] = useForm("");
  const [phone, setPhone] = useState("");

  const idRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const nickNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(checkPhoneNo(e.target.value));
  };

  /** 회원가입 */
  const handleJoin = async () => {
    const data: JoinType = {
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

  /** focus, border 색 바꾸기 */
  const warnRef = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      ref.current.focus();
      ref.current.style.setProperty("border-color", "red");
    }
  };

  /** focus 해제, border 색 복구 */
  const resetRefWarn = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current !== null) {
      ref.current.blur();
      ref.current.style.setProperty("border-color", "black");
    }
  };

  /** 인풋 확인 */
  const checkInput = () => {
    const fields = [
      { field: id, ref: idRef, msg: ALERTMSG.id },
      { field: pwd, ref: pwdRef, msg: ALERTMSG.pwd },
      { field: nickName, ref: nickNameRef, msg: ALERTMSG.nickName },
      { field: phone, ref: phoneRef, msg: ALERTMSG.phone },
    ];

    for (const { field, ref, msg } of fields) {
      if (field === "") {
        alert(msg);
        warnRef(ref);
        return false;
      } else {
        resetRefWarn(ref);
      }
    }

    // 비밀번호 형식 검사
    if (!verifyPwd(pwd)) {
      alert(ALERTMSG.pwdFormat);
      return false;
    }

    return true;
  };

  return (
    <ModalLayout>
      <JoinTitle>회원가입하기</JoinTitle>
      <InputContainer>
        <InputModule
          labelTxt={INFORMATION.id}
          inputType="text"
          val={id}
          onChange={setId}
          refVal={idRef}
        />
        <InputModule
          labelTxt={INFORMATION.pwd}
          inputType="password"
          val={pwd}
          onChange={setPwd}
          warningMsg={INFORMMSG.pwdFormInfo}
          warn={true}
          refVal={pwdRef}
        />
        <InputModule
          labelTxt={INFORMATION.nickname}
          inputType="text"
          val={nickName}
          onChange={setNickName}
          refVal={nickNameRef}
        />
        <InputModule
          labelTxt={INFORMATION.phone}
          inputType="text"
          val={phone}
          onChange={onPhoneChange}
          warningMsg={INFORMMSG.phoneNoFormInfo}
          warn={true}
          maxLen={13}
          refVal={phoneRef}
        />
      </InputContainer>
      <BtnWrapper>
        <CommonBtn text={BTNTXT.join} onClick={handleJoin} />
        <CommonBtn text={BTNTXT.back} link="/" />
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
