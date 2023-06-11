"use client"
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./slider.module.css";

const Slider = ({ slides, template, numberOfColumns, slidesPerRow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };
  
  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slideContainer} style={{
        gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
        gridTemplateRows: `repeat(auto-fill, minmax(calc(100vh / ${slidesPerRow.xs || 1}), 1fr))`,
        '@media (min-width: 576px)': {
          gridTemplateRows: `repeat(auto-fill, minmax(calc(100vh / ${slidesPerRow.sm || slidesPerRow.xs || 1}), 1fr))`
        },
        '@media (min-width: 768px)': {
          gridTemplateRows: `repeat(auto-fill, minmax(calc(100vh / ${slidesPerRow.md || slidesPerRow.sm || slidesPerRow.xs || 1}), 1fr))`
        },
        '@media (min-width: 992px)': {
          gridTemplateRows: `repeat(auto-fill, minmax(calc(100vh / ${slidesPerRow.lg || slidesPerRow.md || slidesPerRow.sm || slidesPerRow.xs || 1}), 1fr))`
        },
        '@media (min-width: 1200px)': {
          gridTemplateRows: `repeat(auto-fill, minmax(calc(100vh / ${slidesPerRow.xl || slidesPerRow.lg || slidesPerRow.md || slidesPerRow.sm || slidesPerRow.xs || 1}), 1fr))`
        }
      }}>
        {slides.map((slide, index) => {
          const SlideTemplate = template;
          return (
            <div
              key={index}
              className={`${styles.slide} ${
                index === currentSlide ? styles.active : ""
              }`}
            >
              <SlideTemplate data={slide} />
            </div>
          );
        })}
      </div>
     <div className={styles.controls}>
        <button onClick={handlePrevSlide}>Prev</button>
        <button onClick={handleNextSlide}>Next</button>
      </div>
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
  template: PropTypes.elementType.isRequired,
  numberOfColumns: PropTypes.number.isRequired,
  slidesPerRow: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number
  })
};

export default Slider;
