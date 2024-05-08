import styled from "styled-components";
import ModalLayout from "../components/ModalLayout";
import CommonBtn from "../components/CommonBtn";
import ChangePwd from "../components/ChangePwd";
import { useState } from "react";

type Props = {};

const Mypage = (props: Props) => {
  // 비밀번호 변경하기 토글
  const [openPwdChange, setOpenPwdChange] = useState(false);
  const toggleOpenPwdChange = () => {
    setOpenPwdChange((prev) => !prev);
  };
  return (
    <ModalLayout>
      <PageTitle>마이페이지</PageTitle>
      <InfoWrapper>
        <p>id</p>
        <p>닉네임</p>
        <p>전화번호</p>
      </InfoWrapper>
      <p onClick={toggleOpenPwdChange}>비밀번호 변경하기</p>
      {openPwdChange ? <ChangePwd /> : null}

      <CommonBtn text="홈으로" link="/main" />
    </ModalLayout>
  );
};
const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

export default Mypage;
