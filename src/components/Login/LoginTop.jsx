import styled from "styled-components";

const LoginTop = () => {
  return (
    <LoginTopWrapper>
      <LogoWrapper>LOGO</LogoWrapper>
      <Testdescription>16가지 유형의 피부 MBTI 테스트</Testdescription>
    </LoginTopWrapper>
  );
};

const LoginTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.3rem;

  margin-top: 106px;
  margin-bottom: 236px;
`;

const LogoWrapper = styled.div`
  ${({ theme }) => theme.fonts.M3_headline_large}
`;

const Testdescription = styled.div`
  ${({ theme }) => theme.fonts.M3_headline_large}
`;

export default LoginTop;
