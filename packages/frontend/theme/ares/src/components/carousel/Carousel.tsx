import React, {useState} from 'react';
import {
  Carousel as BootstrapCarousel,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  CarouselItem,
} from 'reactstrap';
import {CarouselProps} from './Carousel.types';

export function Carousel({slides, slideClassName, slideStyle}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  function next() {
    if (animating) return;
    const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  function previous() {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  function goToIndex(newIndex: number) {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  function getSlides() {
    return slides.map(slide => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={slide.backgroundImage}
          className={slideClassName}
          style={slideStyle}
        >
          <img src={slide.backgroundImage} />
          <CarouselCaption
            captionText={slide.caption}
            captionHeader={slide.caption}
          />
        </CarouselItem>
      );
    });
  }

  return (
    <BootstrapCarousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={slides}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {getSlides()}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </BootstrapCarousel>
  );
}
