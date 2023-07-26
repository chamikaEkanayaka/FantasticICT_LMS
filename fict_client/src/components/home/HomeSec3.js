import React from "react";
import styles from "../home/HomeSec3Styles.module.css";

import slideImage from "../home/412ab7723f8661eeed5e776504b83f8d.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function HomeSec3() {
    return (
        <div className={styles.HomeSec3Con}>
            <Swiper
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'3'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
                loop={true}
                pagination={true}
                modules={[Pagination, Autoplay]}
                autoplay={true}
            >
                <SwiperSlide className={styles.Slide}>
                    <div className={styles.textCon}>
                        <h1>This is the Title</h1>
                        <p>This is the small description about the slide</p>
                    </div>
                    <img src={slideImage} alt="slideImage"/>
                </SwiperSlide>
                <SwiperSlide className={styles.Slide}>
                    <div className={styles.textCon}>
                        <h1>This is the Title</h1>
                        <p>This is the small description about the slide</p>
                    </div>
                    <img src={slideImage} alt="slideImage"/>
                </SwiperSlide>
                <SwiperSlide className={styles.Slide}>
                    <div className={styles.textCon}>
                        <h1>This is the Title</h1>
                        <p>This is the small description about the slide</p>
                    </div>
                    <img src={slideImage} alt="slideImage"/>
                </SwiperSlide>
                <SwiperSlide className={styles.Slide}>
                    <div className={styles.textCon}>
                        <h1>This is the Title</h1>
                        <p>This is the small description about the slide</p>
                    </div>
                    <img src={slideImage} alt="slideImage"/>
                </SwiperSlide>
                <SwiperSlide className={styles.Slide}>
                    <div className={styles.textCon}>
                        <h1>This is the Title</h1>
                        <p>This is the small description about the slide</p>
                    </div>
                    <img src={slideImage} alt="slideImage"/>
                </SwiperSlide>
                <SwiperSlide className={styles.Slide}>
                    <div className={styles.textCon}>
                        <h1>This is the Title</h1>
                        <p>This is the small description about the slide</p>
                    </div>
                    <img src={slideImage} alt="slideImage"/>
                </SwiperSlide>
                <SwiperSlide className={styles.Slide}>
                    <div className={styles.textCon}>
                        <h1>This is the Title</h1>
                        <p>This is the small description about the slide</p>
                    </div>
                    <img src={slideImage} alt="slideImage"/>
                </SwiperSlide>
                <SwiperSlide className={styles.Slide}>
                    <div className={styles.textCon}>
                        <h1>This is the Title</h1>
                        <p>This is the small description about the slide</p>
                    </div>
                    <img src={slideImage} alt="slideImage"/>
                </SwiperSlide>
                <SwiperSlide className={styles.Slide}>
                    <div className={styles.textCon}>
                        <h1>This is the Title</h1>
                        <p>This is the small description about the slide</p>
                    </div>
                    <img src={slideImage} alt="slideImage"/>
                </SwiperSlide>
                <SwiperSlide className={styles.Slide}>
                    <div className={styles.textCon}>
                        <h1>This is the Title</h1>
                        <p>This is the small description about the slide</p>
                    </div>
                    <img src={slideImage} alt="slideImage"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HomeSec3;