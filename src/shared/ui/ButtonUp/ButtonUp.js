import upIcon from '../../assets/photo/up.png'
import styles from './ButtonUp.module.scss';
import { useShownOnScroll } from '../../hooks/useShownOnScroll';

export const ButtonUp = () => {

    const { isShow, handleScrollUp } = useShownOnScroll();

    return (
        <>
            {isShow &&
                <button
                    className={styles.upButton}
                    onClick={handleScrollUp}
                    type='button'
                >
                    <img className={styles.upImage} src={upIcon} alt='вверх' />
                    <span className='visually-hidden'>Скролл вверх</span>
                </button>
            }
        </>
    );
};
