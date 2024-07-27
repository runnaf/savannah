import { memo } from "react";
import styles from './FilterDrawer.module.scss';
import { dataFilter } from "../../lib/data";
import { FilterDrawerItem } from "../FilterDrawerItem/FilterDrawerItem";
import { resetFilter } from "../../model/slices/slice";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import { Text } from "../../../../shared/ui/Text/Text";
import { Button } from "../../../../shared/ui/Button/Button";
import { useDispatch } from "react-redux";
import { getState } from "../../model/slices/sliceIsOpen";

export const FilterDrawer = memo(({ close }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(resetFilter());
    };
    console.log(close)

    const handleClickApply = () => {
        dispatch(getState())
    }

    return (
        <Stack
            direction='column'
            gap="16"
            align='start'
            className={styles.main}
        >
            <Text tag="h2" size='l'>Фильтры</Text>

            {Object.entries(dataFilter)
                .map(([filter, options]) =>
                    <FilterDrawerItem 
                        key={filter} 
                        filter={filter} 
                        options={options} 
                    />
                )}

            <Stack
                direction='column'
                gap="16" max
                className={styles.button_container}
            >
                <Button 
                    className={styles.button}
                    onClick={handleClickApply}
                >
                    применить
                </Button>
                <Button
                    variant='secondary'
                    className={styles.button}
                    onClick={handleClick}
                >
                    сбросить
                </Button>
            </Stack>
        </Stack>
    );
});
