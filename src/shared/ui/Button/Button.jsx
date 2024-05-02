import styles from './Button.module.scss';

export const Button = ({ text, onClick, outline = false, callToAction}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${styles.btn} ${outline ? styles.outline : styles.accent}`}
        >
            {text}
            {callToAction && '->'}
        </button>
    )
};
