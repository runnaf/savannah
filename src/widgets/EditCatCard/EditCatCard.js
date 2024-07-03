import { Stack } from '../../shared/ui/Stack/Stack';
import styles from './EditCatCard.module.scss';
import editIcon from '../../shared/assets/photo/editPhotoIcon.png';
import { EditAddForm } from "../../feature/EditAddForm/ui/EditAddForm/EditAddForm";
import editPhoto from '../../shared/assets/photo/editCatImg.png';
import { Button } from '../../shared/ui/Button/Button';
import { arrowIcon } from '../../shared/assets/svg/arrowIcon';
import { deleteIcon } from "../../shared/assets/svg/deleteIcon";
import closeButton from '../../shared/assets/photo/close.png';

export const EditCatCard = ({ changeEditModal }) => {
    return (
        <Stack
            justifyContent='justifyCenter'
            alignItems='alignCenter'
            direction='row'
            gap='32'
            className={styles.edit}
        >

            <div className={styles.editImgBox}>
                <img
                    className={styles.editPhoto}
                    src={editPhoto} alt="editPhoto" />
                <img
                    className={styles.editIcon}
                    src={editIcon} alt="editIcon" />
            </div>
            <div>
                <img
                    className={styles.closeButton}
                    src={closeButton} alt="закрыть"
                    onClick={changeEditModal}
                />
                <EditAddForm />
                <Button className={styles.button}>
                    сохранить {arrowIcon()}
                </Button>
                <Button variant="secondary" className={styles.buttonDelete}>
                    удалить {deleteIcon()}
                </Button>
            </div>

        </Stack>
    )
}
