import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slide from './Slide';

const TOTAL_SLIDES = 6; // 전체 슬라이드 개수(총6개. 배열로 계산)

export default function SlideBar() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true); // 자동 슬라이드 상태
  const [stopAutoSlide, setStopAutoSlide] = useState(false); // 자동 슬라이드 멈춤 상태
  const slideRef = useRef(null);

  // Next 버튼 클릭 시
  const handleSlideNext = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어감
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const handleSlidePrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어감
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  //비디오 재생
  const handleStartAutoSlide = () => {
    setAutoSlide(true);
    setStopAutoSlide(false);
  };

  //비디오 정지
  const handleStopAutoSlide = () => {
    setAutoSlide(false);
    setStopAutoSlide(true);
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
    let intervalId;

    if (autoSlide && !stopAutoSlide) {
      intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % TOTAL_SLIDES);
      }, 5000); // 5초마다 슬라이드 전환
    }

    // 자동 슬라이드 멈춤 시 clearInterval
    return () => {
      clearInterval(intervalId);
    };
  }, [autoSlide, stopAutoSlide, currentSlide]);

  return (
    <Container>
        <SliderContainer ref={slideRef}>
            <div>
              <Slide url={"https://youtu.be/grxS6XTylX0"} />
            </div>
            <div>
                <Slide url={"https://www.youtube.com/embed/Y3abEKHEkGQ"} />
            </div>
            <div>
                <Slide url={"https://youtu.be/x3qkKWoJYbU"} />
            </div>
            <div>
                <Slide url={"https://youtu.be/BOqFRHCrN-k"} />
            </div>
            <div>
              <Slide url={"https://youtu.be/XyHr-s3MfCQ"} />
            </div>
            <div>
              <Slide url={"https://youtu.be/oSqK_v6zPoM"} />
            </div>
            <div>
              <Slide url={"https://youtu.be/9V2tVurYTxc"} />
            </div>
        </SliderContainer>
      <Center>
        <Button onClick={handleSlidePrev}>&lt;</Button>
        {autoSlide ? (
          <Button onClick={handleStopAutoSlide}>■</Button>
        ) : (
          <Button onClick={handleStartAutoSlide}>▶</Button>
        )}
        <Button onClick={handleSlideNext}>&gt;</Button>
      </Center>
    </Container>
  );
}
const Container = styled.div`
  width: 1200px;
  margin: auto;
  height: 780px;
  overflow: hidden; // 선을 넘어간 이미지들은 숨김.
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
  display: flex; // 이미지들을 가로로 나열.
`;
const Center = styled.div`
  text-align: center;
`;