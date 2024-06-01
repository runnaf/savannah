import React from "react";
import style from './Checkbox.module.scss';


const Checkbox = ({nameField, idInput, checked, onChange}) =>{

    const handleCheck = (e) => {
        if (onChange) {
            onChange(e.target.checked);
        }
    }

    return (
        <div>
            <input
            type='checkbox'
            className={style.checkbox}
            name={nameField}
            id={idInput}
            checked={checked}
            onChange={handleCheck}/>
            <label htmlFor={idInput}></label>
        </div>
    )
   
}

export default Checkbox;