import Select from "../../../shared/ui/Select/Select";
import { dataSelect } from "../lib/dataSelect";
import { Button } from "../../../shared/ui/Button/Button";
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './FilterCats.module.scss';

const titles = {
  optionsAge: 'Возраст',
  optionsSex: 'Пол',
  optionsColor: 'Цвет',
  optionsStatus: 'Статус'
};

export const FilterCats = () => {
  return (
    <Stack
      alignItems='alignStart'
      gap="32"
      className={styles.filterbar}
    >
      {Object.entries(dataSelect).map(([key, options]) => (
        <Select
          key={key}
          title={titles[key]}
          options={options}
        />
      ))}

      <Button className={styles.secondary} variant="secondary">
        сбросить
      </Button>

    </Stack>
  )
};
