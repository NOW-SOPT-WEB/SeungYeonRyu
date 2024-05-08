import styled from "styled-components";
import ModalLayout from "../components/ModalLayout";
import useForm from "../hooks/useForm";
import InputModule from "../components/InputModule";
import CommonBtn from "../components/CommonBtn";
import { memberJoin } from "../apis/memberJoin";

const Join = () => {
  const [id, setId] = useForm("");
  const [pwd, setPwd] = useForm("");
  const [nickName, setNickName] = useForm("");
  const [phone, setPhone] = useForm("");

  const handleJoin = async () => {
    const data = {
      authenticationId: id,
      password: pwd,
      nickname: nickName,
      phone: phone,
    };
    const res = await memberJoin(data);
    console.log(res)
    // res 헤더 location에서 memberId 빼오기
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
          onChange={setPhone}
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
