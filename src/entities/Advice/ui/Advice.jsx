import { useSlider } from '../../../shared/hooks/useSlider';
import { Button } from '../../../shared/ui/Button/Button';
import { advice } from '../config/config';
import styles from './Advice.module.scss';

export const Advice = () => {
    const { activeIndex, previos, next } = useSlider(advice.length);
    const { title, description, image } = advice[activeIndex];

    return (
        <div className={styles.container_main}>
            <Button
                onClick={previos}
                text={'<'}
            />
            <img
                className={styles.img}
                src={image} alt={title}
            />
            <div className={styles.container_text}>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <p className={styles.description}>
                    {description}
                </p>
            </div>
            <Button
                onClick={next}
                text={'>'}
            />
        </div>
    )
};
