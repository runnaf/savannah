import Select from "../../shared/ui/Select/Select";
import { dataSelect } from "../../shared/assets/config/dataSelect";
import { Button } from "../../shared/ui/Button/Button";
import { Stack } from "../../shared/ui/Stack/Stack";
import styles from './FilterCats.module.scss';

const titles = {
  OptionsAge: 'Возраст',
  OptionsSex: 'Пол',
  OptionsColor: 'Цвет',
  OptionsStatus: 'Статус'
};

export const FilterCats = () => {
  return (
    <Stack
      alignItems='alignStart'
      gap="32"
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
