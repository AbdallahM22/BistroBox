import React, { useCallback, useRef } from "react";
import styles from "./Products.module.css";
import Product from "./Product";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import Arrow from "./Arrow";

const Products = ({ products }) => {
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
    <>
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        onReachBeginning={() => {
          console.log("begin");
        }}
        onReachEnd={() => {
          console.log("end");
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 26,
          },
        }}
        className={styles["products-swiper"]}
      >
        {products.map((prod) => (
          <SwiperSlide key={prod.id}>
            <Product product={prod} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.arrows}>
        <div className="prev-arrow" onClick={handlePrev}>
          <Arrow />
        </div>
        <div className="next-arrow" onClick={handleNext}>
          <Arrow direction="right" active={true} />
        </div>
      </div>
    </>
  );
};

export default Products;
