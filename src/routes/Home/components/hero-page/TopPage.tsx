import styled from "styled-components";
import { ReactComponent as DrawingIcon } from "assets/svg/drawing.svg";
import { ScrollDownIcon } from "./ScrollDownIcon";
import { Section } from "../Section";

const HeroDiv = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.mediaQueries.desktop} {
    align-items: flex-start;
  }
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    align-items: center;
  }
  justify-content: flex-end;
  margin-bottom: 5rem;
`;

const Tag = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 10px 15px 10px 15px;
  }
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    padding: 5px 10px 7px 10px;
  }
  border-radius: 999px;
  letter-spacing: -0.02rem;
`;

const H1 = styled.h1`
  @media ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: 2.5rem;
  }
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: 2.2rem;
    :nth-child(3) {
      margin-bottom: 3rem;
    }
  }
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.2rem;
  :nth-child(2) {
    margin-bottom: 0.7rem;
  }
  strong {
    font-weight: 600;
  }
`;

const VideoTag = styled.video`
  min-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const ScrollIconContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  @media ${({ theme }) => theme.mediaQueries.desktop} {
    margin-bottom: 1rem;
  }
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    margin-bottom: 5rem;
  }
`;

const ScrollIconMsg = styled.span`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 1rem;
  font-size: 0.5rem;
`;

const TopPage = () => {
  return (
    <Section
      style={{
        justifyContent: "flex-end",
        backgroundColor: "transparent",
      }}
    >
      <VideoTag autoPlay muted loop playsInline src="/videos/aurora_hero.mp4" />
      <HeroDiv>
        <Tag>
          <DrawingIcon style={{ marginRight: 10 }} />
          오로라소프트의 소프트웨어 블로그를 확인해보세요! &gt;
        </Tag>
        <H1>
          <strong>세상을 바꿀</strong> 서비스를 만드는
        </H1>
        <H1>
          소프트웨어 기업 <strong>오로라 소프트</strong>
        </H1>
        <ScrollIconContainer>
          <ScrollDownIcon />
          <ScrollIconMsg>아래로 스크롤</ScrollIconMsg>
        </ScrollIconContainer>
      </HeroDiv>
    </Section>
  );
};

export default TopPage;
