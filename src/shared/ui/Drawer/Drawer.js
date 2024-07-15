import { Stack } from '../Stack/Stack';
import styles from './Drawer.module.scss';

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
                        закрыть
                    </button>
                </Stack>
                {children}
            </div>
        </>
    )
}