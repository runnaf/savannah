import { getStyle } from '../../helper/getStyle';
import styles from './Button.module.scss';

export const Button = ({
    className,
    children,
    variant = 'accent', // accent | 'secondary'
    ...otherProps
}) => {

    const additional = [
        className,
        styles[variant], 
    ]
    return (
        <button
            className={getStyle(styles.button, {}, additional)}
            {...otherProps}
        >
            {children}
        </button>
    )
};
