import styles from './GallerySlider.module.scss';
import React, { useState } from 'react';
import { imageData } from '../lib/data'
import { chevronLeft, chevronRight } from '../../../shared/assets/svg/chevronIcons';

const GallerySlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageData.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === imageData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.slider__row}>

            <button onClick={prevSlide} className={styles.slider__btn}>
                {chevronLeft()}
            </button>
            <img
                key={imageData[currentImageIndex].index}
                className={styles.photo}
                src={imageData[currentImageIndex].src}
                alt="наши питомцы"
            />

            <button onClick={nextSlide} className={styles.slider__btn}>
                {chevronRight()}
            </button>
        </div>
    );
};

export default GallerySlider;