import styles from './Checkbox.module.scss';

const Checkbox = ({ nameField, onChange }) => {

    return (
        <label className={styles.label} htmlFor={nameField}>
            <input
                type='checkbox'
                className={styles.checkbox}
                name={nameField}
                id={nameField}
                onChange={onChange}
            />
            {nameField}
        </label>
    )
}

export default Checkbox;
