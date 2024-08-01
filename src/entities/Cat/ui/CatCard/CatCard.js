import { Text } from "../../../../shared/ui/Text/Text";
import styles from './CatCard.module.scss';
import { arrowIcon } from "../../../../shared/assets/svg/arrowIcon";
import { apiUrl } from "../../../../shared/api/api";
import { editIcon } from "../../../../shared/assets/svg/editIcon";
import { Button } from "../../../../shared/ui/Button/Button";
import { useModal } from "../../../../shared/hooks/useModal";

import { EditCatCard } from "../../../../widgets/EditCatCard/EditCatCard";
import { DeleteCat } from "../../../../feature/DeleteCat/DeleteCat";

const TELEGRAM_HREF = 'https://t.me/savannahworld';

const CatCard = ({ cat, isCatalog }) => {
    const { _id, image, name_cat, generate, sex, age, shipment } = cat;   

  
    const [changeEditModal, drawEditModal] = useModal();
    
    return (
        <article className={styles.kittens__card}>
            <img className={styles.kitten__img} src={`${apiUrl}/uploads/${image}`} alt='котята Саванны' />
            <div className={styles.card__body}>
                <Text size="l" className={styles.kitten__name}>
                    {name_cat}
                </Text>
                <Text size="m" className={styles.description}>
                    Цвет: {generate}
                </Text>
                <Text size="m" className={styles.description}>
                    Пол: {sex}
                </Text>
                <Text size="m" className={styles.description}>
                    Возраст: {age}
                </Text>
                <Text size="m" className={styles.description}>
                    Статус: {shipment}
                </Text>
                
                {isCatalog ? <a href={TELEGRAM_HREF} className={styles.link}>
                    подробнее {arrowIcon()}
                </a>: ''}
              

                 {drawEditModal (
                    <EditCatCard changeEditModal = {changeEditModal}/> 
                )}

                { 
                isCatalog &&
                <div          
                    className={styles.icons__row}                    
                >
                    <Button 
                        className={styles.edit}
                        onClick={changeEditModal}
                    >
                    {editIcon()}
                    </Button>

                    <DeleteCat id = {_id}/>                  
                    </div>
            }           
            </div>
           
        </article>
    );
}
export default CatCard;