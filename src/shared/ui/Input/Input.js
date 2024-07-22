import { useState } from "react";
import { getStyle } from "../../helper/getStyle";
import styles from './Input.module.scss';

export const Input = ({
    className,
    placeholder,     
    onChange,
    ...otherProps
}) => {

    const [value, setValue] = useState('');

    const handlerInput = (e) => {
        setValue(e.target.value);
        onChange(e);           
    };

    return (
        <input
            className={getStyle(styles.input, {}, [className])}
            placeholder={placeholder}
            value={value}
            onChange={handlerInput}
            {...otherProps}
        />
    );
};
