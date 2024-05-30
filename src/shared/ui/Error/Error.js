import styles from './Error.module.scss';
import { getStyle } from '../../helper/getStyle';


export const Error = ({
    className,
    text,
    ...otherProps
}) => {

    const additional = [
        className
    ]
    return (
        <div
            className={getStyle(styles.error, {}, additional)}
            {...otherProps}>
        <p className={getStyle(styles.errortext, {}, additional)}>{text}</p>
            </div>
    )}

