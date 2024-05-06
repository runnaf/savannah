import { getStyle } from '../../helper/getStyle';
import styles from './Text.module.scss';

export const Text = ({
    className,
    children,
    type = 'p',
    size = 's',
}) => {

    const mapTextTag = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        p: 'p',
        li: 'li'
    }

    const TextTag = mapTextTag[type]

    const additional = [
        className,
        styles[size],
    ]

    return (
        <TextTag className={getStyle(styles.text, {}, additional)}>
            {children}
        </TextTag>
    )
}