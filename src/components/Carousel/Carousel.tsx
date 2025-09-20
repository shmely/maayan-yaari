import { useState } from "react";

import "./carousel.css";
export interface CarouselSlide {
  type: string;
  value: string;
  alt?: string;
}

export const Carousel = ({
  data,
}: {
  data: CarouselSlide[];
}) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(
      slide === data.length - 1 ? 0 : slide + 1
    );
  };

  const prevSlide = () => {
    setSlide(
      slide === 0 ? data.length - 1 : slide - 1
    );
  };
  return (
    <div className="carousel">
      {data.map((item, index) => (
        <div
          key={index}
          className="carousel-item"
        >
          {item.type === "text" && (
            <p
              className={
                slide === index
                  ? "slide-text"
                  : "slide-text slide-text-hidden"
              }
            >
              {item.value}
            </p>
          )}
          {item.type === "video" && (
            <iframe
              className={
                slide === index
                  ? "slide"
                  : "slide slide-hidden"
              }
              src={item.value}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          )}
        </div>
      ))}

      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx
                  ? "indicator"
                  : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
