import { useState, useEffect } from "react";
import bgImage from "@/assets/images/bg.png";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeLoginTitle from "@/components/HomeLogin/HomeLoginTitle";
import HomeLoginMbti from "@/components/HomeLogin/HomeLoginMbti";
import HomeLoginBtn from "@/components/common/HomeLoginBtn";
import mbtiCircles from "@/constants/HomeLogout/mbtiCircles";
import HomeLoginMbtiContent from "@/components/HomeLogin/HomeLoginMbtiContent";
import mbtiContent from "@/constants/HomeLogin/mbtiContent";
import mbtiTitle from "@/constants/HomeLogin/mbtiTitle";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function HomeLogin() {
  const query = useQuery();
  const skinType = query.get("mbti");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const mbtiCircle = mbtiCircles.find((circle) => circle.text === skinType);
  const textColor = mbtiCircle?.color;
  const initialMbtiCircle = mbtiCircle || mbtiCircles[0];
  const initialIndex = mbtiCircles.findIndex(
    (circle) => circle.text === skinType
  );

  const [selectedMbtiCircle, setSelectedMbtiCircle] =
    useState(initialMbtiCircle);
  const [mbtiContentText, setMbtiContentText] = useState(mbtiContent[skinType]);
  const [mbtiContentTitle, setMbtiContentTitle] = useState(mbtiTitle[skinType]);

  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  useEffect(() => {
    setSelectedMbtiCircle(mbtiCircles[initialIndex]);
    setMbtiContentText(mbtiContent[skinType]);
    setMbtiContentTitle(mbtiTitle[skinType]);
    setSelectedIndex(initialIndex);
  }, [initialIndex, skinType]);

  const handleMbtiClick = (circle, index) => {
    const isSelected = selectedIndex === index;
    setSelectedMbtiCircle(isSelected ? null : circle);
    setMbtiContentText(isSelected ? "" : mbtiContent[circle.text]);
    setMbtiContentTitle(isSelected ? "" : mbtiTitle[circle.text]);

    setSelectedIndex(isSelected ? null : index);
  };

  const handleRetakeTest = () => {
    navigate("/Test");
  };

  const content = selectedIndex !== null && selectedMbtiCircle && (
    <HomeLoginMbtiContent
      $bgColor={selectedMbtiCircle?.color}
      content={mbtiContentText}
      title={mbtiContentTitle}
      skinType={selectedMbtiCircle.text}
    />
  );

  return (
    <HomeLoginWrapper>
      <HomeLoginTitle
        name={userName}
        skinType={skinType}
        textColor={textColor}
      />
      <HomeLoginBtn
        $bgColor={selectedMbtiCircle?.color}
        color="#FFF"
        text="다시 진단받기"
        onClick={handleRetakeTest}
      />
      <HomeLoginMbti
        onMbtiClick={handleMbtiClick}
        selectedIndex={selectedIndex}
        selectedMbtiCircle={selectedMbtiCircle}
        content={content}
      />
    </HomeLoginWrapper>
  );
}

export default HomeLogin;

const HomeLoginWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6.5rem;
  width: 144rem;
  height: 170.3rem;
  background-image: url(${bgImage});
  background-size: cover;
`;
