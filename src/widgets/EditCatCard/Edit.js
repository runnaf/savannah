import { Stack } from '../../shared/ui/Stack/Stack';
import styles from './Edit.module.scss';
import editIcon from '../../shared/assets/photo/editPhotoIcon.png';
import { EditAddForm } from "../../entities/EditAddForm/EditAddForm";
import editPhoto from '../../shared/assets/photo/editCatImg.png';



export const Edit = () => {
    return (
        <Stack
            justifyContent='justifyCenter'
            alignItems='alignCenter'
            direction='row'
            className={styles.edit}
        >
            
            <div className={styles.editImgBox}>
            <img
            className={styles.editPhoto}
            src={editPhoto} alt="editPhoto"/>
            <img
            className={styles.editIcon}
            src={editIcon} alt="editIcon"/>
            </div>
           
           
            <EditAddForm/>
        </Stack>
    )
}
