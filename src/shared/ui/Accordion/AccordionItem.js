import { minusIcon } from '../../assets/svg/minusIcon';
import { plusIcon } from '../../assets/svg/plusIcon';
import { getStyle } from '../../helper/getStyle';
import styles from './AccordionItem.module.scss'

const AccordionItem = ({
                element,
                onClick,
                isOpen,
                className,
                open                        
            
            }) => {   
                const additional = [
                    className,
                    styles[open]
                ]            

    return ( 
            <li className={getStyle(styles.list, {}, additional)}>    
                <button className={ isOpen ?  styles.open : styles.question}               
                        onClick={() => onClick()}>
                            {element.question} {isOpen ? <span>{minusIcon()}</span> : <span>{plusIcon()}</span> }            
                </button>                 
                {
                    isOpen &&                   
                    <div className={styles.answer}>{element.answer}</div>
                }                  
                                            
            </li>
        );
}

export default AccordionItem;