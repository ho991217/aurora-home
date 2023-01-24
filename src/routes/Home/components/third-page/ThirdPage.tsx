import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import BottomIllust from "assets/images/home/home_bottom_illust.png";
import { Section } from "../Section";

const InnerContainer = styled.div`
  /* background-color: red; */
  width: 100%;
  min-height: 100vh;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

/** 임시 */
const Video = styled.div`
  width: 1200px;
  height: 675px;
  background: linear-gradient(180deg, #19e7ed, #18df95);
  border-radius: 50px;
  margin-top: 4rem;
`;

const BottomContainer = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin-top: 8rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const HeaderContainer = styled.div`
  margin-top: 3rem;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const H1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  padding-bottom: 0.7rem;
  letter-spacing: -0.2rem;
  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledLink = styled(Link)`
  all: unset;
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-top: 1rem;
  padding: 0.8rem 2rem;
  border-radius: 9999px;
`;

const BottomImg = styled.img``;

const ThirdPage = () => {
  return (
    <Section>
      <InnerContainer>
        <Header
          h1={`세상을 바꿀 초혁신 기업
오로라 소프트`}
          h2="오로라 소프트 기업 소개 영상입니다."
          emphIndex={[7, 13]}
        />
        <Video />
        <BottomContainer>
          <HeaderContainer>
            <H1>차별화된 소프트웨어, 서비스 품질을 높이다.</H1>
            <H1>
              <strong>오로라 소프트</strong>로부터.
            </H1>
            <StyledLink to="/services">서비스 목록</StyledLink>
          </HeaderContainer>
          <BottomImg src={BottomIllust} alt="bottom illust" />
        </BottomContainer>
      </InnerContainer>
    </Section>
  );
};

export default ThirdPage;
