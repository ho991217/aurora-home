import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;
