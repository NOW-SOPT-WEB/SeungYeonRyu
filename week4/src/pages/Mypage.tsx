import styled from "styled-components";
import ModalLayout from "../components/ModalLayout";
import CommonBtn from "../components/CommonBtn";
import ChangePwd from "../components/ChangePwd";
import { useEffect, useState } from "react";
import { memberInfo } from "../apis/memberInfo";
import { InfoType } from "../types";
import { useParams } from "react-router-dom";
import toggleIco from "../assets/icons/toggleIco.svg";
import { BTNTXT, INFORMATION } from "../constants/messages";

const Mypage = () => {
  const memberId = useParams().id;
  const dummyInfo = {
    authenticationId: "",
    nickname: "",
    phone: "",
  };
  const [userInfo, setUserInfo] = useState<InfoType>(dummyInfo);

  // 비밀번호 변경하기 토글
  const [openPwdChange, setOpenPwdChange] = useState(false);
  const toggleOpenPwdChange = () => {
    setOpenPwdChange((prev) => !prev);
  };

  /** 유저 정보 가져오기 */
  const getMemberInfo = async () => {
    if (memberId) {
      const info = await memberInfo(memberId);
      setUserInfo(info);
    }
  };

  useEffect(() => {
    if (userInfo === dummyInfo) getMemberInfo();
  }, []);

  return (
    <ModalLayout>
      <PageTitle>마이페이지</PageTitle>
      <InfoWrapper>
        <InfoBinder>
          <p>{INFORMATION.id}</p>
          <p>{userInfo.authenticationId}</p>
        </InfoBinder>
        <InfoBinder>
          <p>{INFORMATION.nickname}</p>
          <p>{userInfo.nickname}</p>
        </InfoBinder>
        <InfoBinder>
          <p>{INFORMATION.phone}</p>
          <p>{userInfo.phone}</p>
        </InfoBinder>
      </InfoWrapper>
      <ToggleTextBtn onClick={toggleOpenPwdChange}>
        <p>{BTNTXT.changePwd}</p>
        <ToggleIcon src={toggleIco} $active={openPwdChange} />
      </ToggleTextBtn>
      {openPwdChange && <ChangePwd memberId={memberId ? memberId : ""} />}

      <CommonBtn text={BTNTXT.home} link={`/main/${memberId}`} />
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
  margin-bottom: 3rem;
`;
const InfoBinder = styled.div`
  display: flex;
  width: 20rem;
  justify-content: space-between;
`;
const ToggleTextBtn = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  margin: 1rem;
  gap: 0.2rem;
  background-color: #eeeeee;
  border-radius: 8px;
`;
const ToggleIcon = styled.img<{ $active: boolean }>`
  width: 1rem;
  height: 1rem;
  rotate: ${(props) => (props.$active ? "0deg" : "180deg")};
`;
export default Mypage;
