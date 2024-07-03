import { dataFilter } from "../../lib/data";
import { Button } from "../../../../shared/ui/Button/Button";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from './FilterCats.module.scss';
import { FilterItem } from "../FilterItem/FilterItem";

export const FilterCats = () => {
  return (
    <Stack
      alignItems='alignStart'
      gap="32"
      className={styles.filterbar}
    >
      {Object.entries(dataFilter).map(([filter, options]) => (
        <FilterItem 
          key={filter}
          filter={filter} 
          options={options}
        />
      ))}

      <Button className={styles.secondary} variant="secondary">
        сбросить
      </Button>
    </Stack>
  )
};
