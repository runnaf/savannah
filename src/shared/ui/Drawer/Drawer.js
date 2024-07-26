import { Stack } from '../Stack/Stack';
import styles from './Drawer.module.scss';
import { closeIcon } from '../../../shared/assets/svg/closeIcon'

export const Drawer = ({ children, isOpen, close }) => {
    return (
        <>
            {isOpen &&
                <div
                    className={styles.overlay}
                    onClick={close}
                />
            }
            <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
                <Stack className={styles.button_container}>
                    <button
                        onClick={close}
                        className={styles.button}
                    >
                        <span className='visually-hidden'>Закрыть</span>
                        { closeIcon() }
                    </button>
                </Stack>
                {children}
            </div>
        </>
    )
}