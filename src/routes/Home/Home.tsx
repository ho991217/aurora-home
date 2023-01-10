import styled from "styled-components";
import Background from "./components/Background";
import { ReactComponent as DrawingIcon } from "assets/svg/drawing.svg";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y proximity;
`;

const Section = styled.section<{ bg: string }>`
  scroll-snap-align: start;
  width: 100%;
  height: 100vh;
  background-color: ${({ bg }) => bg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroDiv = styled.div`
  max-width: 1400px;
  width: 100%;
  max-height: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

const Tag = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  background-color: #fff;
  padding: 10px 15px 6px 15px;
  border-radius: 999px;
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  color: #fff;
  word-spacing: -8px;
  margin-bottom: 0.4rem;
  strong {
    font-weight: 600;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Section bg="">
        <Background />
        <HeroDiv>
          <Tag>
            <DrawingIcon style={{ marginRight: 10 }} />
            오로라소프트의 소프트웨어 블로그를 확인해보세요! &gt;
          </Tag>
          <H1>
            <strong>세상을 바꿀</strong> 서비스를 만드는
          </H1>
          <H1>
            세상을 바꿀 <strong>소프트웨어 개발 기업</strong>
          </H1>
        </HeroDiv>
      </Section>
      <Section bg="#fff"></Section>
      <Section bg="#fff"></Section>
    </Wrapper>
  );
};

export default Home;
