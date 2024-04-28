import React from "react";
import styled from "styled-components";
import CommonBtn from "./CommonBtn";

type Props = { handleFinishModal: () => void };

const FinishModal = (props: Props) => {
  return (
    <ModalBG>
      <ModalBlock>
        <ModalTextWrapper>
          <ModalTitle>축하해요~</ModalTitle>
          <ModalContent>카드를 모두 찾았어요</ModalContent>
        </ModalTextWrapper>
        <CommonBtn text="돌아가기" onclick={props.handleFinishModal} />
      </ModalBlock>
    </ModalBG>
  );
};

/** 모달 뒤 opacity 배경 */
const ModalBG = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
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
