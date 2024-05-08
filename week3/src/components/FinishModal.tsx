import styled, { useTheme } from "styled-components";
import CommonBtn from "./CommonBtn";
import { btnText, finishModalText } from "../constants/textData";

type Props = { handleFinishModal: () => void };

const FinishModal = (props: Props) => {
  const theme = useTheme();
  return (
    <ModalBG>
      <ModalBlock>
        <ModalTextWrapper>
          <ModalTitle>{finishModalText.title}</ModalTitle>
          <ModalContent>{finishModalText.content}</ModalContent>
        </ModalTextWrapper>
        <CommonBtn
          text={btnText.back}
          color={theme.colors.mainBlue}
          onClick={props.handleFinishModal}
        />
      </ModalBlock>
    </ModalBG>
  );
};

/** 모달 뒤 opacity 배경 */
const ModalBG = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

/** 모달 화면 */
const ModalBlock = styled.div`
  width: 20rem;
  height: 24rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.colors.pointGreen};
  border: 5px solid black;
  border-radius: 12px;
  z-index: 2;
`;

/** 모달 내용 래퍼 */
const ModalTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

/** 모달 제목 */
const ModalTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
`;

/** 모달 내용 */
const ModalContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
`;

export default FinishModal;
