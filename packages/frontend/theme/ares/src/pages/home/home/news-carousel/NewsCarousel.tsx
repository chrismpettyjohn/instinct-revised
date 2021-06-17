import React, {useEffect, useState} from 'react';
import {useFetchAllArticles} from '@instinct-web/core';
import {Carousel} from '../../../../components/carousel/Carousel';
import {CarouselSlide} from '../../../../components/carousel/Carousel.types';

export function NewsCarousel() {
  const articles = useFetchAllArticles();
  const [slides, setSlides] = useState<CarouselSlide[]>([]);

  useEffect(() => {
    if (articles) {
      setSlides(
        articles.map(_ => ({
          caption: _.title,
          backgroundImage: _.headerImage,
        }))
      );
    }
  }, [articles]);

  return (
    <>
      <span className="section--title">
        <i className="icon--news" />
        News
      </span>
      <Carousel slides={slides} slideStyle={{height: 124}} />
    </>
  );
}
