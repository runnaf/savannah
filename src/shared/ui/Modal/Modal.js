import styles from './Modal.module.scss';

export const Modal = ({ setIsOpen, children }) => {

    const handleClick = e => {
        if (e.target.dataset.class === 'overlay') {
            setIsOpen(false);
        }
    };

    return (
        <div className={styles.modal}>
            <div
                className={styles.overlay}
                data-class="overlay"
                onClick={handleClick}
            >
                {children}
            </div>
        </div>

    );
};