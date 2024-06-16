import { Input } from "../../shared/ui/Input/Input";
import { dataSelect } from "../../feature/FilterCats/lib/dataSelect";
import Select from "../../shared/ui/Select/Select";
import closeButton from '../../shared/assets/photo/close.png';
import { Stack } from "../../shared/ui/Stack/Stack";
import styles from './EditAddForm.module.scss';
import { Button } from "../../shared/ui/Button/Button";
import { arrowIcon } from '../../shared/assets/svg/arrowIcon';
import { deleteIcon } from '../../shared/assets/svg/deleteIcon';



export const EditAddForm = () => {
    return (
        <Stack justifyContent='justifyCenter'
            alignItems='alignCenter'
            direction='column' gap='16'
            className={styles.editSection}>
            <img
                className={styles.closeButton}
                src={closeButton} alt="закрыть"
            //onClick={changeEditModal} also put Edit = ({changeEditModdal}) =>
            />
            <Input
                className={styles.editInput}
                placeholder='имя'
            // onChange={() => console.log()}
            />

            <Select title="Возраст" options={dataSelect.optionsAge} />
            <Select title="Пол" options={dataSelect.optionsSex} />
            <Select title="Цвет" options={dataSelect.optionsColor} />
            <Select title="Статус" options={dataSelect.optionsStatus} />

        </Stack>
    )
}