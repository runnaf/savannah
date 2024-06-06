import { Input } from "../../shared/ui/Input/Input";
import { dataSelect } from "../../shared/assets/config/dataSelect";
import Select from "../../shared/ui/Select/Select";
import closeButton from '../../shared/assets/photo/close.png';
import { Stack } from "../../shared/ui/Stack/Stack";
import styles from './EditAddForm.module.scss';



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

            <Select title="Возраст" options={dataSelect.OptionsAge} />
            <Select title="Пол" options={dataSelect.OptionsSex} />
            <Select title="Цвет" options={dataSelect.OptionsColor} />
            <Select title="Статус" options={dataSelect.OptionsStatus} />

        </Stack>
    )
}