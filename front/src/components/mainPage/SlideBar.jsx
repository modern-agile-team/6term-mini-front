import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slide from './Slide';
import { ButtonUI } from '../public/StyledComponent';
import { useNavigate } from 'react-router-dom';

const TOTAL_SLIDES = 2; // 전체 슬라이드 개수(총3개. 배열로 계산)

export default function SlideBar() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const navigate = useNavigate();

  // Next 버튼 클릭 시
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goBuy = () => {
    navigate("/ticketpage")
  }

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <Container>
        <div style={{textAlign:"center"}}>
            <ButtonUI onClick={goBuy}>영화 예매하러 가기</ButtonUI>
        </div>
        <SliderContainer ref={slideRef}>
            <div>
                <Slide url={"https://ma6-mini-poster.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B2%E1%84%90%E1%85%AE%E1%84%87%E1%85%B3+%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%90%E1%85%B3%E1%84%85%E1%85%A9+%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%89%E1%85%A1%E1%86%BC.mp4"} />
            </div>
            <div>
                <Slide url={"https://www.youtube.com/embed/Y3abEKHEkGQ"} />
            </div>
            <div>
                <Slide url={"https://www.youtube.com/embed/UTPEPu2Je9g"} />
            </div>
        </SliderContainer>
      <Center>
        <Button onClick={PrevSlide}>&lt;</Button>
        <Button onClick={NextSlide}>&gt;</Button>
      </Center>
    </Container>
  );
}
const Container = styled.div`
  width: 1200px;
  margin: auto;
  height: 480px;
  overflow: hidden; // 선을 넘어간 이미지들은 숨겨줍니다.
`;
const Button = styled.div`
  all: unset;
  padding:0.2em 5em;
  margin: 1em 1em;
  color: rgba(107, 129, 145, 0.82);
  border-radius: 10px;
  border: 3px solid rgba(107, 129, 145, 0.82);
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: rgba(107, 129, 145, 0.82);
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 1rem;
  display: flex; // 이미지들을 가로로 나열합니다.
`;
const Center = styled.div`
  text-align: center;
`;