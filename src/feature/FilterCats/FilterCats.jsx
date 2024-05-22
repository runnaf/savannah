import Select from "../../shared/ui/Select/Select";
import { dataSelect } from "../../shared/assets/config/dataSelect";
import styles from './FilterCats.module.scss';
import { Button } from "../../shared/ui/Button/Button";
import { Stack } from "../../shared/ui/Stack/Stack";

export const FilterCats = () => {

    return (
      <div className={styles.container}>
        <Stack             
        alignItems='alignStart'
        >

      <Select title="Возраст" options={dataSelect.OptionsAge} />

      <Select title="Пол" options={dataSelect.OptionsSex} />

      <Select title="Цвет" options={dataSelect.OptionsColor} />

      <Select title="Статус" options={dataSelect.OptionsStatus} />



    <Button className={styles.secondary} variant="secondary">
      сбросить
    </Button>
    </Stack>


      </div>

)
};
