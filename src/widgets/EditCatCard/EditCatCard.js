import { Stack } from '../../shared/ui/Stack/Stack';
import styles from './EditCatCard.module.scss';
import editIcon from '../../shared/assets/photo/editPhotoIcon.png';
import { EditAddForm } from "../../feature/EditAddForm/ui/EditAddForm/EditAddForm";
import editPhoto from '../../shared/assets/photo/kitten1.png';
import { Button } from '../../shared/ui/Button/Button';
import { arrowIcon } from '../../shared/assets/svg/arrowIcon';
import { deleteIcon } from "../../shared/assets/svg/deleteIcon";
import closeButton from '../../shared/assets/photo/close.png';
import { useState } from 'react';
import InputEditCatCard from '../../feature/InputEditCatCard/InputEditCatCard';
import { Text } from "../../shared/ui/Text/Text";


export const EditCatCard = ({ changeEditModal }) => {

    const [openInput, closeInput] = useState(false);
    const handleInput = () => closeInput(!openInput);


    return (
        <Stack 
            justifyContent="justifyCenter"
            alignItems="alignCenter"            
            direction='column'
            gap='32'
            className={styles.edit}
        >
            {  !openInput &&
                <div className={styles.photoPosition}
                    onClick={handleInput}>
                
                    <img
                        className={styles.editPhoto}
                        src={editPhoto} alt="editPhoto" />
                    <img
                        className={styles.editIcon}
                        src={editIcon} alt="editIcon" />
                </div>
            }
                { 
                    openInput &&
                    <InputEditCatCard handleInput={handleInput}/>
                    
                }
             
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
