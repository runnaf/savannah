import { arrowIcon } from "../../shared/assets/svg/arrowIcon";
import { deleteIcon } from "../../shared/assets/svg/deleteIcon";
import { Button } from "../../shared/ui/Button/Button";
import { Stack } from "../../shared/ui/Stack/Stack";
import styles from './Edit.module.scss';
import closeButton from '../../shared/assets/photo/close.png';
import editPhoto from '../../shared/assets/photo/editCatImg.png';
import editIcon from '../../shared/assets/photo/editPhotoIcon.png';
import {motion as m} from "framer-motion";
import { Input } from "../../shared/ui/Input/Input";
import Select from "../../shared/ui/Select/Select";

export const Edit = () => {
    return (
        <m.div
        initial={{opacity: 0}}
        animate={{opacity:1}}
        transition={{duration:0.75}}>
        <Stack
            justifyContent='justifyCenter'
            alignItems='alignCenter'
            direction='column'
            className={styles.edit}
        >
            
            <img
                className={styles.closeButton}
                src={closeButton} alt="закрыть"
                //onClick={changeEditModal} also put Edit = ({changeEditModdal}) =>
            />
            <div className={styles.editImgBox}>
            <img
            className={styles.editPhoto}
            src={editPhoto} alt="editPhoto"/>
            <img
            className={styles.editIcon}
            src={editIcon} alt="editIcon"/>
            </div>
            
            <Input
                placeholder='возраст'
                // onChange={() => console.log()}
            />
            <Button className={styles.buttonEdit}>
                сохранить {arrowIcon()}
            </Button>
            <Button variant="secondary" className={styles.buttonEdit}>
                удалить { deleteIcon() }
            </Button>
        </Stack>
        </m.div>
    )
}
