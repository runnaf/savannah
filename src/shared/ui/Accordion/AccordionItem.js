import { minusIcon } from '../../assets/svg/minusIcon';
import { plusIcon } from '../../assets/svg/plusIcon';
import { getStyle } from '../../helper/getStyle';
import { Button } from '../Button/Button';
import styles from './AccordionItem.module.scss'

const AccordionItem = ({
    element,
    onClick,
    isOpen,
    className
  

}) => {

    const additional = [
        className     
    ]

    return (
        <li className={getStyle(styles.list, {}, additional)}>
            <Button
                className={isOpen ? styles.open : styles.question}
                onClick={onClick}
            >
                {element.question} {isOpen ? <span>{minusIcon()}</span> : <span>{plusIcon()}</span>}
            </Button>
            {
                isOpen &&
                <div className={styles.answer}>
                    {element.answer}
                </div>
            }

        </li>
    );
}

export default AccordionItem;