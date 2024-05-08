import styled from "styled-components";
import InputModule from "../components/InputModule";
import useForm from "../hooks/useForm";

type Props = {};

const ChangePwd = (props: Props) => {
  const [prevPwd, setPrevPwd] = useForm("");
  const [newPwd, setNewPwd] = useForm("");
  const [checkNewPwd, setCheckNewPwd] = useForm("");
  return (
    <InputContainer>
      <InputModule
        labelTxt="기존 비밀번호"
        inputType="password"
        val={prevPwd}
        onChange={setPrevPwd}
      />
      <InputModule
        labelTxt="새로운 비밀번호"
        inputType="password"
        val={newPwd}
        onChange={setNewPwd}
      />
      <InputModule
        labelTxt="비밀번호 확인"
        inputType="password"
        val={checkNewPwd}
        onChange={setCheckNewPwd}
      />
    </InputContainer>
  );
};
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 3rem;
  gap: 2rem;
`;
export default ChangePwd;
