import { arrowIcon } from "../../shared/assets/svg/arrowIcon";
import { deleteIcon } from "../../shared/assets/svg/deleteIcon";
import { Button } from "../../shared/ui/Button/Button";
import { Stack } from "../../shared/ui/Stack/Stack";
import styles from './Add.module.scss';
import closeButton from '../../shared/assets/photo/close.png';
import editIcon from '../../shared/assets/photo/editPhotoIcon.png';
import { Input } from "../../shared/ui/Input/Input";
import { dataSelect } from "../../shared/assets/config/dataSelect";
import Select from "../../shared/ui/Select/Select";


export const Add = () => {
    return (
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
            <div className={styles.addImgBox}>
            <div className={styles.addDiv}></div>
            <img
            className={styles.editIcon}
            src={editIcon} alt="editIcon"/>
            </div>
            
            <Input
                placeholder='имя'
                // onChange={() => console.log()}
            />
            <Select title="Возраст" options={dataSelect.OptionsAge} />

            <Input
                placeholder='возраст'
                // onChange={() => console.log()}
            />

            <Select title="Пол" options={dataSelect.OptionsSex} />
            <Select title="Цвет" options={dataSelect.OptionsColor} />
            <Select title="Статус" options={dataSelect.OptionsStatus} />
            
            <Button className={styles.buttonEdit}>
                сохранить {arrowIcon()}
            </Button>
            <Button variant="secondary" className={styles.buttonEdit}>
                удалить { deleteIcon() }
            </Button>
        </Stack>
    )
}