import { Input } from "../../shared/ui/Input/Input";
import { dataSelect } from "../../feature/FilterCats/lib/dataSelect";
import Select from "../../shared/ui/Select/Select";
import { Stack } from "../../shared/ui/Stack/Stack";
import styles from './EditAddForm.module.scss';


export const EditAddForm = () => {
    return (
        <Stack
            justifyContent="justifyCenter"
            alignItems="alignCenter"
            direction="row"
            gap='32'
            className={styles.editForm}
    >  
            <div className={styles.addDiv}></div>  
        
            <Stack
                justifyContent='justifyCenter'
                alignItems='alignCenter'
                direction='column' gap='16'
                className={styles.editSection}
            >
                <Input
                    className={styles.editInput}
                    placeholder='имя'
                />

                <Select title="Возраст" options={dataSelect.optionsAge} />
                <Select title="Пол" options={dataSelect.optionsSex} />
                <Select title="Цвет" options={dataSelect.optionsColor} />
                <Select title="Статус" options={dataSelect.optionsStatus} />

            </Stack>
        </Stack>
    )

}