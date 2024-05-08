import styled from "styled-components";

const ResetBtn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <FixedWrapper>{children}</FixedWrapper>;
};
const FixedWrapper = styled.div`
  position: fixed;
  right: 0.5rem;
  top: 0.5rem;
`;
export default ResetBtn;
