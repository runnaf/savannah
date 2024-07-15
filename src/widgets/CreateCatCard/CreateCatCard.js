import { Stack } from "../../shared/ui/Stack/Stack";
import styles from "./CreateCatCard.module.scss";
import closeButton from '../../shared/assets/photo/close.png';
import { Text } from "../../shared/ui/Text/Text";
import { EditAddForm } from "../../feature/EditAddForm/ui/EditAddForm/EditAddForm";
import { Button } from "../../shared/ui/Button/Button";
import { arrowIcon } from "../../shared/assets/svg/arrowIcon";


export const CreateCatCard = ({ changeCreateModal }) => { 

    return (
        <Stack
            justifyContent="justifyCenter"
            alignItems="alignCenter"
            direction="column"
            gap='32'
            className={styles.edit}
        >       
            <div>
                <img
                    className={styles.closeButton}
                    src={closeButton} alt="закрыть"
                    onClick={changeCreateModal}
                />
            </div>

            <Text type='h3' size='l' className={styles.title}>
                Создать карточку питомца
            </Text>
            <div className={styles.photoPosition}>
                <EditAddForm />               
            </div>
            <div className={styles.save__btn}>
                <Button className={styles.button}>
                    сохранить {arrowIcon()}
                </Button>
            </div>
        </Stack>
    );
};
