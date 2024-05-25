import styles from './stack.module.scss';
import { getStyle } from '../../helper/getStyle';

export const Stack = (props) => {
    const {
        children,
        className,
        justifyContent, //justifyCenter | justifyRight | justifyBetween
        direction = 'row', //row | column
        alignItems, //alignCenter | alignStart
        max,
        gap, // 8 | 16 | 24 | 32
        ...otherProps
    } = props;

    const mapGap = {
        8: 'gap8',
        16: 'gap16',
        24: 'gap24',
        32: 'gap32',
    };

    const mode = {
        [styles.max]: max
    };

    const additional = [
        styles[justifyContent],
        styles[direction],
        styles[alignItems],
        gap && styles[mapGap[gap]],
        className,
    ];

    const stackClass = getStyle(styles.stack, mode, additional);
    
    return (
        <div className={stackClass} {...otherProps}>
            {children}
        </div>
    );
};
