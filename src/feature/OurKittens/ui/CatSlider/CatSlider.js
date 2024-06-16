import styles from './CatSlider.module.scss';
import kittensData from "../../../../entities/CatCard/lib/data";
import CatCard from '../../../../entities/CatCard/ui/CatCard/CatCard';
import { chevronLeft, chevronRight } from '../../../../shared/assets/svg/chevronIcons'
import { useState } from 'react';


const CatSlider = () => {

        const [kittenCard, setKittenCard] = useState(0);
        const items = kittensData[kittenCard];

        const prevSlide = () => {
            setKittenCard((kittenCard => {
                kittenCard --;
                if (kittenCard < 0) {
                    return kittensData.length-1;
                }
                return kittenCard;
            }))
        }
        const nextSlide = () => {
            setKittenCard((kittenCard => {
                kittenCard ++;
                if (kittenCard > kittensData.length-1) {
                    kittenCard = 0;
                }
                return kittenCard;
            }))
        }


    return (     
        <div className={styles.slider__row}>
            <button onClick={prevSlide} 
                    className={styles.slider__btn}>
                    {chevronLeft()}
            </button>    
                <CatCard                   
                    kittensData={items}
                    isMain
                />
            <button onClick={nextSlide} 
                    className={styles.slider__btn}>
                    {chevronRight()}
            </button> 
        </div>
  
    );
}

export default CatSlider;