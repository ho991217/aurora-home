import { useIsOnTop } from "hooks/useIsOnTop";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const Wrapper = styled.div<{ top: boolean }>`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  color: #fff;
  /* mix-blend-mode: difference; */
  /* background-color: ${({ top }) => (top ? "transparent" : "red")}; */
`;

const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 350px;
`;

const MenuItem = styled.li``;

const LangSelect = styled.div``;

const Anchor = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Routes = [
  { id: 1, title: "회사 소개", link: "/intro" },
  { id: 2, title: "서비스", link: "/services" },
  { id: 3, title: "고객 지원", link: "/cs" },
  { id: 4, title: "블로그", link: "/blog" },
  { id: 5, title: "문의", link: "/qna" },
];

const Gnb = () => {
  const isOnTop = useIsOnTop();

  return (
    <Wrapper top={isOnTop}>
      <InnerContainer>
        <Logo />
        <Menu>
          {Routes.map((route) => (
            <MenuItem key={route.id}>
              <Anchor to={route.link}>{route.title}</Anchor>
            </MenuItem>
          ))}
        </Menu>
        <LangSelect>
          <Anchor to="/ko">KOR</Anchor>
          <Anchor to="/en">ENG</Anchor>
        </LangSelect>
      </InnerContainer>
    </Wrapper>
  );
};

export default Gnb;
