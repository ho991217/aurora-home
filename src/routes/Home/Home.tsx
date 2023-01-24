import styled from "styled-components";
import SecondPage from "./components/second-page/SecondPage";
import TopPage from "./components/hero-page/TopPage";
import ThirdPage from "./components/third-page/ThirdPage";

const Wrapper = styled.div`
  width: 100vw;
`;

const Home = () => {
  return (
    <Wrapper>
      <TopPage />
      <div style={{ height: "350vh" }}>
        <SecondPage />
      </div>
      <ThirdPage />
    </Wrapper>
  );
};

export default Home;
