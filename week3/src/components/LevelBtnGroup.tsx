import CommonBtn from "./CommonBtn";
import styled, { useTheme } from "styled-components";
import level from "../constants/level";

type Props = {
  difficulty: number;
  changeDifficulty: (difficulty: number) => void;
  giveResetSign: () => void;
};

const LevelBtnGroup = (props: Props) => {
  const theme = useTheme();
  const handleLevelBtn = (difficulty: number) => {
    return () => {
      props.changeDifficulty(difficulty);
      props.giveResetSign();
    };
  };

  return (
    <BtnGroupContainer>
      {level.map((diff) => (
        <CommonBtn
          key={diff.text}
          text={diff.text}
          onClick={handleLevelBtn(diff.num)}
          color={
            props.difficulty === diff.num
              ? theme.colors.magenta
              : theme.colors.pointGreen
          }
        />
      ))}
    </BtnGroupContainer>
  );
};
const BtnGroupContainer = styled.div`
  display: flex;
  gap: 0.6rem;

  margin-top: 6rem;
  margin-bottom: 2rem;
`;
export default LevelBtnGroup;
