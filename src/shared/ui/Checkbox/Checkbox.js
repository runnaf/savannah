import styles from './Checkbox.module.scss';

const Checkbox = ({ nameField, onChange, checked }) => {

    return (
        <label className={styles.label} htmlFor={nameField}>
            <input
                type='checkbox'
                className={styles.checkbox}
                name={nameField}
                id={nameField}
                onChange={onChange}
                checked={checked}
            />
            {nameField}
        </label>
    )
}

export default Checkbox;
