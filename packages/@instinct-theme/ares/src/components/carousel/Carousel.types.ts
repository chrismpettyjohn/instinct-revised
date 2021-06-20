import {CSSProperties} from 'react';

export interface CarouselProps {
  slides: CarouselSlide[];
  slideStyle?: CSSProperties;
  slideClassName?: string;
}

export interface CarouselSlide {
  caption: string;
  backgroundImage: string;
}
