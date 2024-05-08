import ReactPlayer from "react-player";
import mainVideo from "../assets/video/mainVideo.mp4";
type Props = {};

const MainPage = (props: Props) => {
  return (
    <div>
      <ReactPlayer url={mainVideo} loop={true} playing={true} />
    </div>
  );
};

export default MainPage;
