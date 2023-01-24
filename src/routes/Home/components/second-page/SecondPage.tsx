
import styled from "styled-components";
import Header from "../Header";
import { Section } from "../Section";
import Carousel from "./carousel/Carousel";

const InnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding-top: 100px;
  }
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    padding-top: 60px;
  }
`;

const SecondPage = () => {
  return (
    <Section style={{ height: "auto", position: "sticky", top: 0, left: 0 }}>
      <InnerContainer>
        <Header
          h1={`오로라 소프트가 
세상과 연결되는 방법.`}
          h2="오로라 소프트가 세상을 바꾸기 위해 힘쓰는 서비스입니다."
          emphIndex={[0, 6]}
        />
        <Carousel />
      </InnerContainer>
    </Section>
  );
};

export default SecondPage;
