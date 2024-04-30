import styles from './Input.module.scss';


export const Input = ({ onChange, placeholder='Логин' || 'Пароль' }) => {
    return (
        <input
            type="text"
            onChange={onChange}
            className={styles.input}
            placeholder={placeholder}
        />
    )
};