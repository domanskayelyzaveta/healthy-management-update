import { slides } from "./slides";
import "./Carousel.css";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect } from "react";

const OPTIONS = {
  loop: true,
  direction: "rtl",
};

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    AutoScroll({ playOnInit: false, speed: 1, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    autoScroll.play();

    const resumeAutoplay = () => autoScroll.play();
    emblaApi.on("resize", resumeAutoplay);
    emblaApi.on("reInit", resumeAutoplay);

    return () => {
      emblaApi.off("resize", resumeAutoplay);
      emblaApi.off("reInit", resumeAutoplay);
    };
  }, [emblaApi]);

  return (
    <div className="carousel" dir={OPTIONS?.direction}>
      <div className="carousel__viewport" ref={emblaRef}>
        <div className="carousel__container">
          {slides.map(({ id, img, alt }) => (
            <div className="carousel__slide" key={id}>
              <img
                src={img}
                alt={alt}
                width={112}
                height={112}
                loading="lazy"
                className="carousel__slide__img"
              />
              <p className="carousel__slide__title">{alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
