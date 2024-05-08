import React, {useState} from "react";
import style from './Checkbox.module.scss';
import clsx from 'clsx';


const CheckedInput = ({className, nameField, idInput}) =>{
    const [checked,setChecked] = useState(false);

    const handleCheck = (e) => {
        setChecked(e.target.checked);
    }
    const checkboxClasses = clsx(style.checkbox, style.enabled_channel, className)

    return (
        <div>
            <input
            type='checkbox'
            className={checkboxClasses}
            name={nameField}
            id={idInput}
            checked={checked}
            onChange={handleCheck}/>

            <label htmlFor={idInput}></label>

        </div>
    )
   
}

export default CheckedInput;