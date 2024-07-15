import { Button } from "../../../../shared/ui/Button/Button"
import { Stack } from "../../../../shared/ui/Stack/Stack"
import { dataFilter } from "../../lib/data"
import { FilterItem } from "../FilterItem/FilterItem"

export const FilterBar = () => {
    return (
        <Stack justifyContent='justifyBetween'>
            {Object.entries(dataFilter).map(([filter, options]) =>
                <FilterItem
                    key={filter}
                    filter={filter}
                    options={options}
                />
            )}
            <Button variant='secondary'>
                сбросить
            </Button>
        </Stack>
    )
}