import Select from "../../shared/ui/Select/Select";
import { dataSelect } from "../../shared/assets/config/dataSelect";
import styles from './FilterCats.module.scss';
import { Button } from "../../shared/ui/Button/Button";

export const FilterCats = () => {

    return (
        <div>
        <div className={styles.selection}>
      <div className='select'>
      <Select title="Возраст" options={dataSelect.OptionsAge} />
      </div>

      <div className='select'>
      <Select title="Пол" options={dataSelect.OptionsSex} />
      </div>

      <div className='select'>
      <Select title="Цвет" options={dataSelect.OptionsColor} />
      </div>

      <div className='select'>
      <Select title="Статус" options={dataSelect.OptionsStatus} />
      </div>

    <div>
    <Button variant="secondary">
      сбросить
    </Button>
    </div>

      </div>
      </div>
)
};
