import styles from './Header.module.scss';


const Header = ({text, children, callToAction}) => {
    return (
        <div>
        <h1 className={styles.header}>
            {text}
            </h1>
            {children}
            {callToAction && styles.headerBold} -при наведении на header меняется на style bold
            </div>
    )
};
export default Header;

// 1 – text: string
// 2 - children: React
// Node
// 3 - size: string