import {Link} from 'wouter';
import React, {useState} from 'react';
import {useFetchAllArticles} from '@instinct-web/core';
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap';

export function NewsSlider() {
  const articles = useFetchAllArticles();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  function next() {
    if (animating || !articles) return;
    const nextIndex = activeIndex === articles.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  function previous() {
    if (animating || !articles) return;
    const nextIndex = activeIndex === 0 ? articles.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  function goToIndex(newIndex: number) {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  if (!articles) {
    return null;
  }

  return (
    <Carousel
      activeIndex={activeIndex}
      className="mt-4"
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={articles}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {articles?.map(_ => (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={`article_${_.id}`}
        >
          <Link href={`/community/news/${_.id}`}>
            <img src={_.headerImage} alt={`header image for ${_.title}`} />
            <CarouselCaption
              captionText={_.description}
              captionHeader={_.title}
            />
          </Link>
        </CarouselItem>
      ))}
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
    </Carousel>
  );
}
