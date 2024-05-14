import styled from "styled-components";

const ModalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      <Modal>{children}</Modal>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
const Modal = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 6rem;
  background-color: white;
  border-radius: 4%;
  border: solid 3px black;
`;
export default ModalLayout;
