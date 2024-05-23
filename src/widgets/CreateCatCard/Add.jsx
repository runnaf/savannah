import { Stack } from "../../shared/ui/Stack/Stack";
import styles from './Add.module.scss';
import editIcon from '../../shared/assets/photo/editPhotoIcon.png';
import { EditAddForm } from "../../entities/EditAddForm/EditAddForm";


export const Add = () => {
    return (
        <Stack
            justifyContent='justifyCenter'
            alignItems='alignCenter'
            direction='row'
            className={styles.edit}
        > 
            <div className={styles.addImgBox}>
            <div className={styles.addDiv}></div>
            <img
            className={styles.editIcon}
            src={editIcon} alt="editIcon"/>
            </div>
            
            <EditAddForm/>
        </Stack>
    )
}