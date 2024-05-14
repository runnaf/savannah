import styles from './Error.module.scss';

const Error = () => {
    return (
        <div className={styles.error}>
            <p className={styles.errortext}>
            Введен неверный логин или пароль
            </p>
        </div>
    )}

    export default Error;