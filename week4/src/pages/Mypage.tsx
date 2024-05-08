import styled from "styled-components";
import ModalLayout from "../components/ModalLayout";
import CommonBtn from "../components/CommonBtn";
import ChangePwd from "../components/ChangePwd";
import { useEffect, useState } from "react";
import { memberInfo } from "../apis/memberInfo";
import { infoType } from "../types";

const Mypage = () => {
  const dummyInfo = {
    authenticationId: "",
    nickname: "",
    phone: "",
  };
  const [userInfo, setUserInfo] = useState<infoType>(dummyInfo);

  // 비밀번호 변경하기 토글
  const [openPwdChange, setOpenPwdChange] = useState(false);
  const toggleOpenPwdChange = () => {
    setOpenPwdChange((prev) => !prev);
  };

  /** 유저 정보 가져오기 */
  const getMemberInfo = async () => {
    const memberId = localStorage.getItem("memberId");
    if (memberId) {
      console.log("get member info");
      const info = await memberInfo(memberId);
      setUserInfo(info);
    }
  };

  useEffect(() => {
    getMemberInfo();
  }, []);

  return (
    <ModalLayout>
      <PageTitle>마이페이지</PageTitle>
      <InfoWrapper>
        <p>id</p>
        <p>닉네임</p>
        <p>전화번호</p>
        <p>{userInfo.authenticationId}</p>
        <p>{userInfo.nickname}</p>
        <p>{userInfo.phone}</p>
      </InfoWrapper>
      <p onClick={toggleOpenPwdChange}>비밀번호 변경하기</p>
      {openPwdChange && <ChangePwd />}

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
