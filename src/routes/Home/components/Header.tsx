import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const H1 = styled.h1`
  white-space: pre-wrap;
  text-align: center;
  line-height: 2.6rem;
  @media ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: 2rem;
    font-weight: bold;
  }
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: 1.6rem;
    font-weight: 600;
  }
  letter-spacing: -0.01em;
  margin-bottom: 1.3rem;
  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const H2 = styled.h2`
  @media ${({ theme }) => theme.mediaQueries.desktop} {
    font-size: 1.2rem;
  }
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    font-size: 1rem;
  }
  letter-spacing: -0.1em;
  font-weight: 400;
`;

interface HeaderProps {
  h1: string;
  h2: string;
  emphIndex?: [number, number];
}

const Header = ({ h1, h2, emphIndex = [0, 0] }: HeaderProps) => {
  return (
    <Wrapper>
      <H1>
        {h1.substring(0, emphIndex![0])}
        <strong>{h1.substring(emphIndex![0], emphIndex![1] + 1)}</strong>
        {h1.substring(emphIndex![1] + 1)}
      </H1>
      <H2>{h2}</H2>
    </Wrapper>
  );
};

export default Header;
