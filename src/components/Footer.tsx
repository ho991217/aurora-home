import styled from "styled-components";
import { ReactComponent as Logo } from "assets/svg/Aurora_Logo_Sym_GRD.svg";

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.white};
`;

const InnerContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding-top: 3rem;
  text-align: center;
  @media ${({ theme }) => theme.mediaQueries.desktop} {
    border-radius: 200px 200px 0 0;
    height: 250px;
  }
  @media ${({ theme }) => theme.mediaQueries.mobile} {
    border-radius: 0;
    height: 120px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Infos = styled.p`
  /* margin-top: 1.5rem; */
  line-height: 1.2rem;
  color: #aaafb1;
  letter-spacing: 0.02rem;
  font-size: 0.8rem;
`;

const CopyRight = styled(Infos)`
  margin-top: 1rem;
`;

const Footer = () => {
  return (
    <Wrapper>
      <InnerContainer>
        <Logo style={{ height: 32, marginBottom: "1.6rem" }} />
        <Infos>
          <strong>주식회사 오로라소프트</strong> | 대표이사 : 강우주 |
          개인정보책임관리자 : 이호연 | 소재지 : 서울특별시 강서구 공항대로 247
          C동 (마곡동) <br />
          사업자 등록번호 : 717-48-00420 [사업자정보확인] | 통신판매업 신고번호
          : 제2022-000-0000호 | 문의 : info@aurorasoft.me
        </Infos>
        <CopyRight>
          Copyright &copy; 2023 AuroraSoft. All rights reserved.
        </CopyRight>
      </InnerContainer>
    </Wrapper>
  );
};

export default Footer;
