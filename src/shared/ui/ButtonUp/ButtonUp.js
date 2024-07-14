import { upBtnIcon } from '../../assets/svg/upButton'
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
                    {upBtnIcon()}
                    <span className='visually-hidden'>Скролл вверх</span>
                </button>
            }
        </>
    );
};