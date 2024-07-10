import { useState } from "react";
import { Button } from "../../../../shared/ui/Button/Button";
import { FilterList } from "../FilterList/FilterList";
import styles from './FilterCatsDesktop.module.scss'

export const FilterCatsDesktop = () => {
    const [checked, setChecked] = useState(0)
    const onChangeChecked = () => {
        setChecked(0)
    }
    return (
        <form className={styles.form}>
            <FilterList checked={checked} setChecked={setChecked} />
            <Button type="reset" className={styles.secondary} variant="secondary" onClick={onChangeChecked}>
                сбросить
            </Button>
        </form>
    )
};
