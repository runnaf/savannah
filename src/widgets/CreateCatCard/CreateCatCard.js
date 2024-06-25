import { Stack } from "../../shared/ui/Stack/Stack";
import styles from "./CreateCatCard.module.scss";
import editIcon from "../../shared/assets/photo/editPhotoIcon.png";
import { EditAddForm } from "../../entities/EditAddForm/EditAddForm";
import { Button } from "../../shared/ui/Button/Button";
import { arrowIcon } from "../../shared/assets/svg/arrowIcon";
import closeButton from '../../shared/assets/photo/close.png';

export const CreateCatCard = ({changeCreateModal}) => {
    return (
        <Stack
            justifyContent="justifyCenter"
            alignItems="alignCenter"
            direction="row" 
            gap='32'
            className={styles.edit}
        >

            <div className={styles.addImgBox}>
                <div className={styles.addDiv} />
                <img className={styles.editIcon} src={editIcon} alt="editIcon" />
            </div>

            <div>
            <img
                className={styles.closeButton}
                src={closeButton} alt="закрыть"
                onClick={changeCreateModal}
            />
                <EditAddForm/>
                <Button className={styles.button}>
                    сохранить {arrowIcon()}
                </Button>
            </div>
        </Stack>
    );
};
