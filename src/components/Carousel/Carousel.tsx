import React, { ReactNode } from 'react';
import {
  CarouselContainer,
  CarouselTrack,
  CarouselSlide,
} from './Carousel.styled';
type CarouselProps = {
  slides: ReactNode[];
  currentIndex: number;
};

const Carousel = ({ slides, currentIndex }: CarouselProps) => {
  const slidesLength = slides.length;

  const translate = (currentIndex / slidesLength) * -100;

  return (
    <CarouselContainer>
      <CarouselTrack $translate={translate} $slidesLength={slidesLength}>
        {slides.map((slide, index) => (
          <CarouselSlide key={index}>{slide}</CarouselSlide>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
};

export default Carousel;
