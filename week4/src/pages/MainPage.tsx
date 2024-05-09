import ReactPlayer from "react-player";
import mainVideo from "../assets/video/mainVideo.mp4";
import styled from "styled-components";
import CommonBtn from "../components/CommonBtn";
import { useParams } from "react-router-dom";

const MainPage = () => {
  const memberId = useParams().id;
  return (
    <MainContainer>
      <ReactPlayer
        url={mainVideo}
        playing={true}
        loop={true}
        playbackRate={4}
      />
      <BtnWrapper>
        <CommonBtn text="내 정보" link={`/mypage/${memberId}`} />
        <CommonBtn text="회원가입" link="/join" />
      </BtnWrapper>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
export default MainPage;
