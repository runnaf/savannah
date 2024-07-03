import { Stack } from "../../shared/ui/Stack/Stack";
import styles from "./CreateCatCard.module.scss";
import closeButton from '../../shared/assets/photo/close.png';

import { EditAddForm } from "../../entities/EditAddForm/EditAddForm";
import { Button } from "../../shared/ui/Button/Button";
import { arrowIcon } from "../../shared/assets/svg/arrowIcon";
import editIcon from "../../shared/assets/photo/editPhotoIcon.png";


export const CreateCatCard = ({ changeCreateModal }) => {
    return (
        <Stack         
            direction="column"
            gap = '16'          
            className={styles.edit}
        >  
            <div>
                <img
                    className={styles.closeButton}
                    src={closeButton} alt="закрыть"
                    onClick={changeCreateModal}
                />
            </div> 
                <div  className={styles.photoPosition}>       
                    <EditAddForm />
                    <img
                        className={styles.editIcon}
                        src={editIcon} alt="editIcon" />
                </div> 
                <div className={styles.save__btn}>
                    <Button className={styles.button}>
                        сохранить {arrowIcon()}
                    </Button>
                </div>
        </Stack>
    );
};
