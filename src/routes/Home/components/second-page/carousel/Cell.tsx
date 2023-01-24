import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div<{ zIndex: number; position: number }>`
  position: absolute;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: ${({ zIndex }) => zIndex};
  @media ${({ theme }) => theme.mediaQueries.desktop} {
    transform: translateX(${({ position }) => position * 500}px)
      scale(${({ position }) => (position === 0 ? 1 : 0.9)});
  }
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    transform: translateX(${({ position }) => position * 300}px)
      scale(${({ position }) => (position === 0 ? 1 : 0.9)});
  }
  transition: transform 0.5s ease-in-out;
`;

const Image = styled.img`
  @media ${({ theme }) => theme.mediaQueries.desktop} {
    width: 100%;
  }
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    width: 60%;
  }
`;

const Header = styled.header`
  min-height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const H1 = styled.h1`
  font-weight: 600;
  font-size: 1.9rem;
  margin-bottom: 1rem;
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 0.99rem;
  margin-bottom: 0.5rem;
`;

const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 15px 25px;
  }
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    padding: 12px 25px;
  }
  border-radius: 9999px;
`;

interface CellProps {
  title?: string;
  subTitles?: string[];
  btnMsg?: string;
  src?: string;
  zIndex: number;
  position: number;
}

const Cell = ({
  title,
  subTitles,
  btnMsg,
  src,
  zIndex,
  position,
}: CellProps) => {
  return (
    <Wrapper zIndex={zIndex} position={position}>
      <Header>
        <H1>{title}</H1>
        {subTitles?.map((subTitle, index) => (
          <H2 key={subTitles.indexOf(subTitle)}>{subTitle}</H2>
        ))}
        {btnMsg && <StyledLink to="/">{btnMsg}</StyledLink>}
      </Header>
      <Image src={src} alt="mockup" />
    </Wrapper>
  );
};

export default Cell;
