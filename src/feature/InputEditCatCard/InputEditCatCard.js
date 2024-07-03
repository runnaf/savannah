import styles from './InputEditCatCard.module.scss';
import { Input } from "../../shared/ui/Input/Input";
import { closeIcon } from '../../shared/assets/svg/closeIcon';


const InputEditCatCard = ({handleInput}) => {
    
    return ( 
        <form>
            <Input
            type ='file'
            className={styles.catInput}  

        />            
            <div
                className={styles.closeIcon}
                onClick={handleInput}
            >
                {closeIcon()}
            
            </div>    
     </form>
    )
}
export default InputEditCatCard;