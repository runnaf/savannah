import styles from './GallerySlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';

import { imageData } from '../lib/data'

const GallerySlider = () => {
    return (
        <Swiper
        modules={[Pagination]}
        loop={true}
        pagination={{ clickable: true }}
        slidesPerView = {1}
        spaceBetween={20}        
        
        className={styles.slider__row}>

        {imageData.map(element =>
                <SwiperSlide key={element.index}
                    className={styles.section}>
                <img              
                    className={styles.photo}
                    src={element.src}
                    alt="наши питомцы"
            />
                </SwiperSlide>
            )}
           

        </Swiper>
    );
};

export default GallerySlider;