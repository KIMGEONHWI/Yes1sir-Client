import styled from "styled-components";
import bgImage from "@/assets/images/bg.png";

import HomeLogoutText from "@/components/HomeLogout/HomeLogoutText";
import HomeLogoutFix from "@/components/HomeLogout/HomeLogoutFix";
import HomeLogoutMbti from "@/components/HomeLogout/HomeLogoutMbti";

function HomeLogout() {
  return (
    <HomeLogoutWrapper>
      <HomeLogoutText />
      <HomeLogoutFix />
      <HomeLogoutMbtiContainer>
        <HomeLogoutMbti />
      </HomeLogoutMbtiContainer>
    </HomeLogoutWrapper>
  );
}

export default HomeLogout;

const HomeLogoutWrapper = styled.main`
  display: flex;
  flex-direction: column;

  width: 144rem;
  height: 170.3rem;

  background-image: url(${bgImage});
  background-size: cover;
`;

const HomeLogoutMbtiContainer = styled.div`
  margin-left: 10rem;
  margin-top: 15.4rem;
`;
