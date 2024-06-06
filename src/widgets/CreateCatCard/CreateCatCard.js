import { Stack } from "../../shared/ui/Stack/Stack";
import styles from "./CreateCatCard.module.scss";
import editIcon from "../../shared/assets/photo/editPhotoIcon.png";
import { EditAddForm } from "../../entities/EditAddForm/EditAddForm";
import { Button } from "../../shared/ui/Button/Button";
import { arrowIcon } from "../../shared/assets/svg/arrowIcon";
import { deleteIcon } from "../../shared/assets/svg/deleteIcon";

export const CreateCatCard = () => {
    return (
        <Stack
            justifyContent="justifyCenter"
            alignItems="alignCenter"
            direction="row" gap='32'
            className={styles.edit}
        >
            <div className={styles.addImgBox}>
                <div className={styles.addDiv} />
                <img className={styles.editIcon} src={editIcon} alt="editIcon" />
            </div>
            <div>
                <EditAddForm />
                <Button className={styles.button}>
                    сохранить {arrowIcon()}
                </Button>
                <Button variant="secondary" className={styles.buttonDelete}>
                    удалить {deleteIcon()}
                </Button>
            </div>
        </Stack>
    );
};
