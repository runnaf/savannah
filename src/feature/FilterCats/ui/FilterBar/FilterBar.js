import { useDispatch } from "react-redux"
import { Button } from "../../../../shared/ui/Button/Button"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { dataFilter } from "../../lib/data"
import { FilterItem } from "../FilterItem/FilterItem"
import { resetFilter } from "../../model/slices/slice"
import styles from './FilterBar.module.scss'

export const FilterBar = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(resetFilter());
    }
    return (
        <Stack justifyContent='justifyBetween' className={styles.container}>
            {Object.entries(dataFilter).map(([filter, options]) =>
                <FilterItem
                    key={filter}
                    filter={filter}
                    options={options}
                />
            )}
            <Button variant='secondary' onClick={handleClick}>
                сбросить
            </Button>
        </Stack>
    )
}