import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoSvg } from "assets/svg/Aurora_Logo_Sym_White.svg";

const Wrapper = styled(Link)<{ svgcolor: string }>`
  height: 100%;
  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 32px;
  }
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    padding: 40px 20px;
  }
  box-sizing: border-box;
  path {
    fill: ${({ svgcolor }) => svgcolor};
  }
`;

const Logo = ({ color }: { color: string }) => {
  return (
    <Wrapper to="/" svgcolor={color}>
      <LogoSvg height="100%" />
    </Wrapper>
  );
};

export default Logo;
