import { Input } from "../../../../shared/ui/Input/Input";
import { dataFilter} from "../../../FilterCats/lib/data";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from "./EditAddForm.module.scss";
import { SelectItem } from "../SelectItem/SelectItem";

export const EditAddForm = () => {
  return (
    <Stack
      justifyContent="justifyCenter"
      alignItems="alignCenter"
      direction="column"
      gap="16"
      className={styles.editSection}
    >
      <Input 
        className={styles.editInput} 
        placeholder="имя" 
      />

       <Stack 
        gap="16" 
        className={styles.select}
        justifyContent="justifyBetween"
       >
        {Object.entries(dataFilter).map(([filter, options]) => (
            <SelectItem 
                key={filter} 
                filter={filter} 
                options={options} 
            />
        ))}
       </Stack>
    </Stack>
  );
};
