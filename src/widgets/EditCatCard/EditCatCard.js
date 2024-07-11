import { Stack } from '../../shared/ui/Stack/Stack';
import styles from './EditCatCard.module.scss';
import editIcon from '../../shared/assets/photo/editPhotoIcon.png';
import { EditAddForm } from "../../feature/EditAddForm/ui/EditAddForm/EditAddForm";
import editPhoto from '../../shared/assets/photo/kitten1.png';
import { Button } from '../../shared/ui/Button/Button';
import { arrowIcon } from '../../shared/assets/svg/arrowIcon';
import { deleteIcon } from "../../shared/assets/svg/deleteIcon";
import closeButton from '../../shared/assets/photo/close.png';
import { Text } from "../../shared/ui/Text/Text";
import { Input } from "../../shared/ui/Input/Input";
import { useId } from 'react';


export const EditCatCard = ({ changeEditModal }) => {
    const id = useId()

    return (
        <Stack 
            justifyContent="justifyCenter"
            alignItems="alignCenter"            
            direction='column'
            gap='32'
            className={styles.edit}
        >
            <div className={styles.photoPosition}>                
                <img className={styles.editPhoto}
                     src={editPhoto} alt="editPhoto"/>

                <label className={styles.catLabel}  htmlFor={id}>
                    <Input
                        type ='file'
                        id = {id}           
                        className={styles.catInput} 
                    />     
                    <img className={styles.editIcon}
                        src={editIcon} alt="editIcon" />            
                </label>   
            </div>

                <img
                    className={styles.closeButton}
                    src={closeButton} alt="закрыть"
                    onClick={changeEditModal}
                />              
                <Text type='h3' size='l' className={styles.title}>
                    Редактировать карточку питомца
                </Text>

                <EditAddForm />
                
                <div className={styles.save__btn}>
                    <Button className={styles.button}>
                        сохранить {arrowIcon()}
                    </Button>
                </div>
                <div className={styles.delete__btn}>
                    <Button variant="secondary" className={styles.buttonDelete}>
                        удалить {deleteIcon()}
                    </Button>
                </div> 
        </Stack>
    )
}
