import React from "react";
import styles from './Checkbox.module.scss';

const Checkbox = ({ nameField, idInput, checked, onChange }) => {
    return (
        <>
            <input
                type='checkbox'
                className={styles.checkbox}
                name={nameField}
                id={idInput}
                checked={checked}
                onChange={() => onChange?.(nameField)}
            />
            <label htmlFor={idInput}></label>
        </>
    )
}

export default Checkbox;
