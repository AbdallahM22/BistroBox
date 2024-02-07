import React, { useCallback, useRef, useState } from "react";
import styles from "./FilterProduct.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function FilterProduct({ categories, filter }) {
  const sliderRef = useRef(null);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  const [category, setCategory] = useState(categories[0].toLowerCase());

  const filterHandler = (category) => {
    setCategory(category);
    filter(category);
  };
  return (
    <div className={styles.content}>
      <Swiper
        ref={sliderRef}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        slidesPerView={3}
        spaceBetween={18}
        breakpoints={{
          640: {
            slidesPerView: 4,
            // spaceBetween: 26,
          },
        }}
        className={styles["filter"]}
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat}>
            <div
              key={cat}
              onClick={(e) => {
                console.log(e.target.innerText);
                filterHandler(cat.toLowerCase());
              }}
              className={`${styles.item} ${
                category == cat.toLowerCase() ? styles.active : ""
              }`}
            >
              {cat}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles["prev-arrow"]} onClick={handlePrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div className={styles["next-arrow"]} onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}
