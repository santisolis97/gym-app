import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export const CarouselSlide = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const CarouselTrack = styled.div<{
  $translate: number;
  $slidesLength: number;
}>`
  display: flex;
  width: ${(props) => props.$slidesLength * 100}%;
  transition: transform 0.25s ease-in-out;
  transform: translateX(${(props) => props.$translate}%);
`;
