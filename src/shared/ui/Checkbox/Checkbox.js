import React from "react";
import styles from './Checkbox.module.scss';

const Checkbox = ({ nameField, idInput, checked, onChange, setChecked }) => {

    const handleCheck = (e) => {
        setChecked(true)
        if (onChange) {
            onChange(e.target.checked);
        }
    }

    return (
        <label className={styles.label} htmlFor={idInput}>
            <input
                type='checkbox'
                className={styles.checkbox}
                name={nameField}
                id={idInput}
                checked={checked}
                onChange={handleCheck} />
        </label>
    )
}

export default Checkbox;
