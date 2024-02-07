import React, { useCallback, useRef } from "react";
import styles from "./LogosSwipper.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

export default function SidebarSwipper() {
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
  return (
    <div className={styles["slider-container"]}>
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
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 3,
            // spaceBetween: 26,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 52,
          },
          1728: {
            slidesPerView: 6,
            // spaceBetween: 26,
          },
        }}
        className={styles["logos-swiper"]}
      >
        <SwiperSlide>
          <div className={`${styles.item} ${styles.active}`}>
            <div className={styles.shape}>
              <img src="shape2.svg" alt="" />
            </div>
            <span>Presto</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.item}`}>
            <div className={styles.shape}>
              <img src="shape2.svg" alt="" />
            </div>
            <span>Presto</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.item} ${styles.active}`}>
            <div className={styles.shape}>
              <img src="shape2.svg" alt="" />
            </div>
            <span>Presto</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.item}`}>
            <div className={styles.shape}>
              <img src="shape2.svg" alt="" />
            </div>
            <span>Presto</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.item} ${styles.active}`}>
            <div className={styles.shape}>
              <img src="shape2.svg" alt="" />
            </div>
            <span>Presto</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.item}`}>
            <div className={styles.shape}>
              <img src="shape2.svg" alt="" />
            </div>
            <span>Presto</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.item} ${styles.active}`}>
            <div className={styles.shape}>
              <img src="shape2.svg" alt="" />
            </div>
            <span>Presto</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.item}`}>
            <div className={styles.shape}>
              <img src="shape2.svg" alt="" />
            </div>
            <span>Presto</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={styles["prev-arrow"]} onClick={handlePrev}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            // className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div className={styles["next-arrow"]} onClick={handleNext}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            // className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
