import { dataFilter } from "../../lib/data";
import { Button } from "../../../../shared/ui/Button/Button";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from "./FilterCatsDesktop.module.scss";
import { FilterItem } from "../FilterItem/FilterItem";
import { useState } from "react";

export const FilterCatsDesktop = () => {
    const [checked, setChecked] = useState(true)
    
    const onAllResetCheckbox = () => {
        setChecked(false)
        console.log('hi')
    }
    return (
        <form>
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
                    checked={checked}
                    setChecked={setChecked}
                />
            ))}

                <Button type="reset" className={styles.secondary} variant="secondary" onClick={onAllResetCheckbox}>
                    сбросить
                </Button>
            </Stack>
        </form>
    )
};
