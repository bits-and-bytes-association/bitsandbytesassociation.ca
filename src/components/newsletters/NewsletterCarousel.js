import newsletters from '../../json/newsletters.json';
import { useState, useEffect } from 'react';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Dot,
  DotGroup,
  Image,
  Slide,
  Slider,
} from 'pure-react-carousel';
import { useMediaQuery } from 'react-responsive';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from '@/styles/NewsletterCarousel.module.css';

export default function NewsletterCarousel() {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [slideCount, setSlideCount] = useState(1);

  useEffect(() => {
    setSlideCount(isDesktop ? 3 : 1);
  }, [isDesktop]);

  const customRenderDots = ({ currentSlide, totalSlides }) => {
    const dots = [];

    for (let i = 0; i < totalSlides; i++) {
      const multipleSelected =
        i >= currentSlide && i < currentSlide + slideCount;
      const singleSelected = i === currentSlide;
      dots.push(
        <Dot
          slide={i}
          key={`dot-${i}`}
          className={`${styles.carouselDot} ${
            singleSelected || multipleSelected ? styles.currentDot : ''
          }`}
        />
      );
    }
    return dots;
  };

  return (
    <CarouselProvider
      naturalSlideWidth={8.5}
      naturalSlideHeight={11}
      visibleSlides={slideCount}
      totalSlides={newsletters.newsletters.length}
      dragEnabled={false}
    >
      <div className="flex">
        <ButtonBack className="m-2 hidden self-center p-2 text-white duration-200 ease-linear hover:text-[var(--primary-color)] md:block">
          <ArrowLeftCircleIcon className="h-14 w-14" />
        </ButtonBack>
        <Slider className="flex-1">
          {newsletters.newsletters.map((entry, index) => (
            <Slide
              key={index}
              index={index}
              className={styles.slide}
              innerClassName={styles.gapSlide}
              classNameHidden={styles.hiddenSlide}
            >
              <a href={entry.pdfSrc}>
                <Image src={entry.thumbSrc} />
              </a>
            </Slide>
          ))}
        </Slider>
        <ButtonNext className="m-2 hidden self-center p-2 text-white duration-200 ease-linear hover:text-[var(--primary-color)] md:block">
          <ArrowRightCircleIcon className="h-14 w-14" />
        </ButtonNext>
      </div>
      <DotGroup
        className={styles.dotGroup}
        dotNumbers
        renderDots={customRenderDots}
      />
    </CarouselProvider>
  );
}
