import { useDimension } from "hooks/useDimension";
import { useIsOnTop } from "hooks/useIsOnTop";
import { useScrollPos } from "hooks/useScrollPos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

type theme = "dark" | "light";

const Wrapper = styled.div<{ top: boolean; themeColor: theme }>`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.mediaQueries.desktop} {
    position: fixed;
  }
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    position: absolute;
  }
  z-index: 99;
  top: 0;
  left: 0;
  color: #000;
  backdrop-filter: ${({ top }) => (top ? "none" : "blur(15px)")};
  transition: all 0.2s ease-in-out;
`;

const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
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

const Anchor = styled(Link)<{ themeColor: theme }>`
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
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
  const { page } = useScrollPos();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { width } = useDimension();

  useEffect(() => {
    if (page <= 0) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [page]);

  return (
    <Wrapper top={isOnTop} themeColor={theme}>
      <InnerContainer>
        <Logo color={theme === "dark" ? "#eee" : "#000"} />
        {width >= 769 && (
          <Menu>
            {Routes.map((route) => (
              <MenuItem key={route.id}>
                <Anchor to={route.link} themeColor={theme}>
                  {route.title}
                </Anchor>
              </MenuItem>
            ))}
          </Menu>
        )}
      </InnerContainer>
    </Wrapper>
  );
};

export default Gnb;
