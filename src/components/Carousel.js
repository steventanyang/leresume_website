import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
  position: relative;
  background-color: #73698A;
`;

const CarouselWrapper = styled.div`
  display: flex;
  animation: ${scroll} 20s linear infinite;
`;

const CarouselItem = styled.div`
  min-width: 100px; 
  margin: 0 5px;
  margin-bottom: 5vh;
`;

const Image = styled.img`
  width: 100px; 
  height: 100px;
  object-fit: cover; 
  border-radius: 10px;
`;

const Carousel = ({ images }) => {

  const duplicatedImages = [...images, ...images];

  return (
    <CarouselContainer>
      <CarouselWrapper>
        {duplicatedImages.map((image, index) => (
          <CarouselItem key={index}>
            <Image src={image} alt={`Slide ${index}`} />
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
