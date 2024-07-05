import styles from './InputEditCatCard.module.scss';
import { Input } from "../../shared/ui/Input/Input";
import { closeIcon } from '../../shared/assets/svg/closeIcon';
import { useId } from 'react';


const InputEditCatCard = ({handleInput}) => {

    const id = useId()
    
    return ( 
        <form>
            <label className={styles.catLabel}  htmlFor={id}>
            <Input
            type ='file'
            id = {id}           
            className={styles.catInput} 
        />     
            <span className={styles.chooseFile}>Выберите файл</span>       
            <div
                className={styles.closeIcon}
                onClick={handleInput}
            >
                {closeIcon()}
            
            </div>  
            </label>  
     </form>
    )
}
export default InputEditCatCard;