import styles from './Modal.module.scss';
import {motion as m} from "framer-motion";

export const Modal = ({ setIsOpen, children }) => {

    const handleClick = e => {
        if (e.target.dataset.class === 'overlay') {
            setIsOpen(false);
        }
    };

    return (
        <div className={styles.modal}
>
            <m.div
                className={styles.overlay}
                data-class="overlay"
                initial={{opacity: 0}}
                animate={{opacity:1}}
                transition={{duration:0.75}}
                onClick={handleClick}
            >
                {children}
            </m.div>
        </div>

    );
};