import styles from './CatSlider.module.scss';
import CatCard from '../../entities/CatCard/ui/CatCard/CatCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import kittensData from '../../entities/CatCard/lib/data';

const CatSlider = () => {

    return (
        <Swiper
            modules={[Pagination]}
            loop={true}
            pagination={{ clickable: true }}
            
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }}
            className={styles.slider__row}
        >
            {kittensData.map(element =>
                <SwiperSlide key={element.id}>
                    <CatCard
                        kittensData={element}
                        isMain
                    />
                </SwiperSlide>
            )}
        </Swiper>
    );
};

export default CatSlider;
