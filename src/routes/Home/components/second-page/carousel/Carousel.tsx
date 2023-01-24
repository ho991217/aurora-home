import styled from "styled-components";
import Cell from "./Cell";
import MockUp from "assets/images/carousel/Phone Mockup 2x.png";
import Center from "assets/images/carousel/center.png";
import Left from "assets/images/carousel/left.png";
import Right from "assets/images/carousel/right.png";
import { useScrollPos } from "hooks/useScrollPos";
import { useEffect } from "react";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding-top: 3.5rem;
  }
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    padding-top: 4rem;
  }
`;

const Gradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  background: linear-gradient(
    180deg,
    rgba(234, 242, 244, 0) 0%,
    rgb(234, 242, 244) 100%
  );
  z-index: 99;
`;

const Carousel = () => {
  const { page } = useScrollPos();

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <Wrapper>
      <Cell src={MockUp} zIndex={99} position={0} />
      <Cell
        title="코픽스"
        subTitles={[
          "'국내 최초' 인공지능 코드리뷰 서비스",
          "코픽스는 개발자들을 위한 코드 분석 서비스입니다.",
        ]}
        src={Left}
        zIndex={50}
        btnMsg="서비스 바로가기"
        position={1 - page}
      />
      <Cell
        title="웹코디"
        subTitles={[
          "복잡한 절차없이 내 홈페이지를 한번에!",
          "웹코디는 홈페이지 제작을 쉽게 돕는 서비스 입니다.",
        ]}
        src={Center}
        zIndex={50}
        btnMsg="서비스 바로가기"
        position={2 - page}
      />
      <Cell
        title="오로라 AI"
        subTitles={["인공지능 기반 채팅 서비스", "오로라 AI를 준비 중입니다."]}
        src={Right}
        zIndex={50}
        btnMsg="서비스 준비중"
        position={3 - page}
      />
      <Gradient />
    </Wrapper>
  );
};

export default Carousel;
