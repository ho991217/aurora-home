import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoSvg } from "assets/svg/Aurora_Logo_Sym_White.svg";

const Wrapper = styled(Link)`
  height: 100%;
  padding: 35px;
  box-sizing: border-box;
`;

const Logo = () => {
  return (
    <Wrapper to="/">
      <LogoSvg height="100%" />
    </Wrapper>
  );
};

export default Logo;
