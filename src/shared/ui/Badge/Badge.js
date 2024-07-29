import styles from './Badge.module.scss';

export const Badge = ({count, className}) => {
    return (
        <span className={styles.badge + ' ' + className}>
        {count}
        </span>
    )
}
